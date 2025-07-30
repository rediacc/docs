---
sidebar_position: 1
---

# REST API Concepts

## Introduction

The Rediacc REST API provides programmatic access to all system functionality. While the CLI commands offer a convenient interface, they ultimately communicate with these REST endpoints.

## Base URL and Endpoints

All API endpoints follow the same pattern:

```
POST https://api.rediacc.com/api/StoredProcedure/{ProcedureName}
```

For detailed endpoint documentation, see the [API Reference](/docs/cli/api-reference) section where each command documents its corresponding REST endpoint.

## Authentication Flow

Rediacc uses a secure token-based authentication system with automatic token rotation for enhanced security.

### Initial Authentication

1. **Create Authentication Request**
   ```
   POST /api/StoredProcedure/CreateAuthenticationRequest
   Headers:
     Rediacc-UserEmail: user@company.com
     Rediacc-UserHash: {32-byte-password-hash}
   ```

2. **Receive Initial Token**
   The response includes `nextRequestCredential` which must be used for the next API call.

### Token Rotation

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

### Headers for Authenticated Requests

```
Content-Type: application/json
Rediacc-RequestToken: {current-token}
```

## Two-Factor Authentication

Rediacc supports TOTP (Time-based One-Time Password) for additional security.

### Implementation Details
- RFC 6238 standard compatible
- Works with Google Authenticator, Authy, etc.
- 6-digit codes valid for 30 seconds
- ±30 second time skew tolerance

### Authentication with 2FA

When 2FA is enabled, include the TOTP code in your authentication request:

```json
{
  "name": "my-session",
  "twoFactorCode": "123456"
}
```

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

## Security Model

### Password Hashing

Passwords are never transmitted in plain text. The client must:
1. Hash the password using a secure algorithm
2. Send the 32-byte hash in the `Rediacc-UserHash` header

### Request Validation

Every request is validated for:
- Valid authentication token
- Proper headers
- Request integrity
- User permissions
- Company boundaries

### Session Management

- Sessions expire after inactivity
- Tokens are single-use
- Each user can have multiple active sessions
- Sessions are tied to specific permissions

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

For implementation examples, see the [CLI tutorials](/docs/cli/tutorials/authentication-workflows) which demonstrate these patterns in practice.