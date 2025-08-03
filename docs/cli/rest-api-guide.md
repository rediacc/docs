# REST API Guide

This comprehensive guide covers the Rediacc REST API concepts, authentication, error handling, and best practices for integration.

## Introduction

The Rediacc REST API provides programmatic access to all system functionality. While the CLI commands offer a convenient interface, they ultimately communicate with these REST endpoints.

## Base URL and Endpoints

All API endpoints follow the same pattern:

```
POST https://api.rediacc.com/api/StoredProcedure/{ProcedureName}
```

For detailed endpoint documentation, see the [API Reference](/cli/api-reference) section where each command documents its corresponding REST endpoint.

## Authentication

### Authentication Flow

Rediacc uses a secure token-based authentication system with automatic token rotation for enhanced security.

#### Initial Authentication

1. **Create Authentication Request**
   ```
   POST /api/StoredProcedure/CreateAuthenticationRequest
   Headers:
     Rediacc-UserEmail: user@company.com
     Rediacc-UserHash: {32-byte-password-hash}
   ```

2. **Receive Initial Token**
   The response includes `nextRequestCredential` which must be used for the next API call.

#### Token Rotation

**Important**: Every API response includes a new `nextRequestCredential`. You must use this new token for your next request. This provides:
- Protection against token replay attacks
- Automatic session management
- Enhanced security through constant credential refresh

Example flow:
```
Request 1: Use initial token → Response includes token2
Request 2: Use token2 → Response includes token3
Request 3: Use token3 → Response includes token4
...
```

#### Headers for Authenticated Requests

```
Content-Type: application/json
Rediacc-RequestToken: {current-token}
```

### Two-Factor Authentication

Rediacc supports TOTP (Time-based One-Time Password) for additional security.

#### Implementation Details
- RFC 6238 standard compatible
- Works with Google Authenticator, Authy, etc.
- 6-digit codes valid for 30 seconds
- ±30 second time skew tolerance

#### Authentication with TFA

When TFA is enabled, include the TOTP code in your authentication request:

```json
{
  "name": "my-session",
  "twoFactorCode": "123456"
}
```

### Password Hashing

Passwords are never transmitted in plain text. The client must:
1. Hash the password using a secure algorithm
2. Send the 32-byte hash in the `Rediacc-UserHash` header

## Response Format

All API responses follow a standardized structure:

```json
{
  "failure": 0,              // 0 = success, non-zero = error
  "errors": [],              // Error messages if failure > 0
  "resultSets": [            // Query results
    {
      "resultSetIndex": 0,
      "data": [
        { /* result objects */ }
      ]
    }
  ],
  "outputs": {               // Output parameters
    "nextRequestCredential": "new-token-here"
  }
}
```

### Extracting the Next Token

Always extract and store the next token:
```javascript
const nextToken = response.outputs?.nextRequestCredential || response.resultSets?.[0]?.data?.[0]?.nextRequestCredential;
```

## Error Handling

### Error Response Format

When an error occurs, the API returns a response with a non-zero failure code and a description of the error in the errors array:

```json
{
  "failure": 1,
  "errors": [
    "Error message describing what went wrong"
  ],
  "resultSets": [],
  "outputs": {}
}
```

### Common Error Codes

The failure code indicates the general type of error:

- `1`: Authentication or permission error
- `2`: Resource not found
- `3`: Resource already exists
- `4`: Invalid input
- `5`: Validation error
- `6`: Business rule violation
- `7`: System error

### Error Types and Examples

#### Authentication Errors
```json
{
  "failure": 1,
  "errors": ["Invalid request credential or verification data."]
}
```
Common causes: Invalid/expired token, insufficient permissions, user not activated

#### Resource Not Found
```json
{
  "failure": 2,
  "errors": ["Team \"Engineering Team\" not found in your company."]
}
```
Common resources: User, Team, Machine, Repository, Queue item, Bridge, Region

#### Resource Already Exists
```json
{
  "failure": 3,
  "errors": ["Machine with name \"Web Server 1\" already exists in team \"Engineering Team\"."]
}
```

#### Invalid Input
```json
{
  "failure": 4,
  "errors": ["Machine vault data must be valid JSON."]
}
```
Common issues: Invalid JSON, missing required fields, wrong data types

#### Validation Errors
```json
{
  "failure": 5,
  "errors": ["User hash must be exactly 32 bytes."]
}
```

#### Business Rule Violations
```json
{
  "failure": 6,
  "errors": ["Cannot remove team \"Engineering Team\" because it has associated machines. Remove machines first."]
}
```

#### System Errors
```json
{
  "failure": 7,
  "errors": ["Internal server error. Please try again later."]
}
```

## Best Practices

### Authentication & Security

- **Store credentials securely**: Never store request tokens in local storage or cookies. Use secure, in-memory storage or HTTP-only cookies
- **Implement token refresh**: Always use the new request token returned in each API response
- **Handle session expiration**: Implement proper handling for authentication failures
- **Use HTTPS**: Always use HTTPS for all API communication
- **Generate strong password hashes**: Use secure client-side hashing
- **Never transmit plain passwords**: Always hash passwords before transmission

### Error Handling

- **Check failure field**: Always check the `failure` field in responses
- **Display user-friendly messages**: Translate technical errors for users
- **Log appropriately**: Log detailed errors for debugging but avoid logging sensitive data
- **Implement retry logic**: Use exponential back-off for transient errors
- **Handle specific error types**:
  - Authentication errors → Redirect to login
  - Resource not found → Refresh list or offer creation
  - Already exists → Prompt for different name
  - Validation errors → Guide user to fix input

### Performance

- **Minimize API calls**: Batch operations when possible
- **Implement caching**: Cache rarely-changing data
- **Handle pagination**: Implement client-side pagination for large datasets
- **Optimize payload size**: Only send necessary data in requests

### Vault Management

- **Use consistent JSON schemas**: Define and maintain schemas for vault data
- **Keep vault data compact**: Store large datasets externally
- **Include metadata**: Add timestamps, author info, and version notes
- **Validate JSON**: Always validate before sending to API
- **Handle concurrency**: Implement optimistic concurrency control with vault versions

### Access Control

- **Apply least privilege**: Assign users minimal required permissions
- **Review permissions regularly**: Audit and adjust assignments
- **Use team isolation**: Organize resources by team
- **Audit access**: Log and review sensitive resource access

## Common Patterns

### Creating Resources

Most create operations follow this pattern:
1. Authenticate and get token
2. Call create endpoint with required parameters
3. Extract new token from response
4. Resource is created with returned ID

### Vault Encryption

Sensitive data is stored in encrypted vaults:
- Team vaults store SSH keys and credentials
- Machine vaults store connection details
- All vault data is encrypted with your master password
- Vaults are never decrypted on the server

### Queue Operations

Long-running tasks use the queue system:
1. Create queue item with task details
2. Bridge polls for items to process
3. Bridge updates progress
4. Bridge marks item complete/failed

## Integration Patterns

### Event-Driven Architecture

- **Implement polling**: Regularly poll for new queue items
- **Use webhooks**: Configure webhooks for real-time notifications if available
- **Handle idempotency**: Design system to handle duplicate events gracefully

### Microservices Integration

- **Use bridge separation**: Organize bridges to align with service boundaries
- **Implement service discovery**: Use API to discover and register services
- **Share configuration**: Use vaults to share config between services
- **Monitor service health**: Regularly check status of services and machines

## Development Workflow

### Testing

- **Create test environments**: Set up separate companies or teams
- **Use mock data**: Create realistic test data with the API
- **Test error paths**: Verify application handles all error scenarios
- **Automate tests**: Implement automated tests for critical interactions

### Deployment

- **Automate provisioning**: Script the creation of new resources
- **Implement CI/CD**: Use API in pipelines to manage deployments
- **Maintain environment parity**: Ensure consistent configuration
- **Version resources**: Use vault versioning to track changes

### Monitoring

- **Track API usage**: Monitor volume and patterns of API calls
- **Alert on failures**: Set up alerts for auth failures or error spikes
- **Monitor performance**: Track API response times and throughput
- **Audit sensitive operations**: Log and review security-sensitive operations

## Troubleshooting

### Common Issues

- **Authentication failures**: Usually caused by expired or invalid request token
- **Permission errors**: Check user's permission group for required permissions
- **Concurrency conflicts**: Caused by multiple users updating same resource
- **JSON validation errors**: Ensure vault data is valid JSON and follows schema

### Debugging Strategies

- **Check error messages**: API provides detailed error messages
- **Review logs**: Maintain comprehensive logs of API interactions
- **Trace requests**: Use network tracing tools to examine request/response details
- **Isolate components**: Test components in isolation to identify problems

For implementation examples, see the [CLI tutorials](/cli/tutorials/authentication-workflows) which demonstrate these patterns in practice.