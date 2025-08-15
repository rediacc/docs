---
sidebar_position: 13
---

# API Integration Guide

This guide provides detailed information about integrating with the Rediacc API, including authentication, common patterns, and stored procedure usage.

## API Overview

The Rediacc API is a RESTful service that manages all system operations through stored procedures. All API endpoints follow a consistent pattern and require authentication.

### Base URL
```
Production: https://api.rediacc.com
Development: http://localhost:7321
```

### Endpoint Format
```
POST /api/StoredProcedure/{procedureName}
```

## Authentication

### Token-Based Authentication

Rediacc uses a rotating token system for enhanced security. Each request must include a valid token, and each response provides the next token to use.

**Request Header**:
```http
Rediacc-RequestToken: <current-token>
```

**Response Structure**:
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "nextRequestToken": "new-token-for-next-request"
}
```

### Initial Authentication

To obtain your first token:

```http
POST /api/StoredProcedure/CreateAuthenticationRequest
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your-password",
  "requestName": "API Integration",
  "expirationHours": 24
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "authenticationId": 123,
    "token": "initial-token",
    "expiresAt": "2025-01-09T12:00:00Z"
  },
  "nextRequestToken": "next-token"
}
```

## Common API Operations

### Queue Management

#### Create Queue Item

```http
POST /api/StoredProcedure/CreateQueueItem
Rediacc-RequestToken: <token>
Content-Type: application/json

{
  "teamName": "Production",
  "machineName": "server-01",
  "bridgeName": "Global Bridges",
  "priority": 3,
  "queueVault": {
    "function": "deploy",
    "repository": "main-app",
    "version": "1.2.3"
  }
}
```

#### Get Queue Status

```http
POST /api/StoredProcedure/GetQueueItemsByTaskId
Rediacc-RequestToken: <token>
Content-Type: application/json

{
  "taskId": "550e8400-e29b-41d4-a716-446655440000"
}
```

### Resource Management

#### List Machines

```http
POST /api/StoredProcedure/GetMachinesByTeam
Rediacc-RequestToken: <token>
Content-Type: application/json

{
  "teamName": "Production"
}
```

#### Create Machine

```http
POST /api/StoredProcedure/CreateMachine
Rediacc-RequestToken: <token>
Content-Type: application/json

{
  "machineName": "server-02",
  "teamName": "Production",
  "regionName": "US-East",
  "bridgeName": "Regional Bridge",
  "machineVault": {
    "ip": "10.0.0.6",
    "user": "deploy",
    "datastore": "/mnt/datastore"
  }
}
```

### Team Operations

#### Create Team

```http
POST /api/StoredProcedure/CreateTeam
Rediacc-RequestToken: <token>
Content-Type: application/json

{
  "teamName": "Development",
  "teamVault": {
    "SSH_PRIVATE_KEY": "-----BEGIN RSA PRIVATE KEY-----...",
    "DEFAULT_USER": "deploy"
  }
}
```

#### Add User to Team

```http
POST /api/StoredProcedure/CreateTeamMember
Rediacc-RequestToken: <token>
Content-Type: application/json

{
  "teamName": "Development",
  "userEmail": "developer@example.com"
}
```

## Stored Procedures Reference

### Authentication Procedures

| Procedure | Purpose | Required Parameters |
|-----------|---------|-------------------|
| `CreateAuthenticationRequest` | Initial login | email, password, requestName, expirationHours |
| `ValidateUserToken` | Verify token validity | token |
| `ActivateUserAccount` | Activate new user | activationCode, password |
| `ChangeUserPassword` | Update password | currentPassword, newPassword |

### Queue Procedures

| Procedure | Purpose | Required Parameters |
|-----------|---------|-------------------|
| `CreateQueueItem` | Create new task | teamName, machineName, bridgeName, priority, queueVault |
| `GetQueueItemsNext` | Poll for tasks (Bridge) | bridgeName, batchSize |
| `UpdateQueueItemResponse` | Update task progress | taskId, response |
| `UpdateQueueItemToCompleted` | Mark task complete | taskId, status, finalResponse |
| `CancelQueueItem` | Cancel pending task | taskId |
| `GetQueueStatsByTeam` | Get queue metrics | teamName |

### Resource Procedures

| Procedure | Purpose | Required Parameters |
|-----------|---------|-------------------|
| `CreateMachine` | Add new machine | machineName, teamName, regionName, bridgeName, machineVault |
| `UpdateMachine` | Modify machine config | machineName, machineVault |
| `DeleteMachine` | Remove machine | machineName |
| `CreateBridge` | Add new bridge | bridgeName, regionName, bridgeType, bridgeVault |
| `CreateRepository` | Add repository | repositoryName, teamName, repositoryType, repositoryVault |
| `CreateStorage` | Add storage endpoint | storageName, teamName, storageType, storageVault |

### Team & User Procedures

| Procedure | Purpose | Required Parameters |
|-----------|---------|-------------------|
| `CreateTeam` | Create new team | teamName, teamVault |
| `CreateUser` | Add new user | email, permissionGroup |
| `CreateTeamMember` | Add user to team | teamName, userEmail |
| `RemoveTeamMember` | Remove from team | teamName, userEmail |
| `GetTeamsByUser` | List user's teams | userEmail |

### Audit Procedures

| Procedure | Purpose | Required Parameters |
|-----------|---------|-------------------|
| `GetAuditLogs` | Retrieve audit entries | startDate, endDate, entityType (optional) |
| `GetAuditLogsByUser` | User-specific logs | userEmail, startDate, endDate |
| `GetAuditLogsByEntity` | Entity-specific logs | entityType, entityName, startDate, endDate |

## Vault Encryption

### Client-Side Encryption

Sensitive data must be encrypted before sending to the API. Fields ending with "Vault" are automatically encrypted by the Console.

**Encryption Process**:
1. Serialize vault object to JSON
2. Encrypt using AES with master password-derived key
3. Format as: `encrypted:<base64_data>`

**Example Implementation** (TypeScript):
```typescript
import { encryptVault } from '@rediacc/encryption';

const machineVault = {
  ip: "10.0.0.5",
  user: "deploy",
  sshKey: "private-key-content"
};

const encryptedVault = await encryptVault(machineVault, masterPassword);
// Result: "encrypted:U2FsdGVkX1+..."

await apiClient.post('/CreateMachine', {
  machineName: "server-01",
  machineVault: encryptedVault
});
```

### Decryption

The middleware handles decryption automatically for authorized requests. Bridges decrypt vault data locally using the master password.

## Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "INVALID_TOKEN",
    "message": "Authentication token is invalid or expired",
    "details": {
      "tokenId": "abc123",
      "expiredAt": "2025-01-08T12:00:00Z"
    }
  }
}
```

### Common Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `INVALID_TOKEN` | Token expired or invalid | Re-authenticate |
| `PERMISSION_DENIED` | Insufficient permissions | Check user role |
| `RESOURCE_NOT_FOUND` | Entity doesn't exist | Verify name/ID |
| `VALIDATION_ERROR` | Invalid parameters | Check request format |
| `VAULT_ENCRYPTION_ERROR` | Decryption failed | Verify master password |
| `PROCEDURE_NOT_FOUND` | Invalid procedure name | Check API docs |
| `RATE_LIMIT_EXCEEDED` | Too many requests | Implement backoff |

## Rate Limiting

API requests are rate-limited to prevent abuse:

- **Authentication**: 5 requests per minute
- **Read Operations**: 100 requests per minute
- **Write Operations**: 30 requests per minute
- **Queue Polling**: 60 requests per minute

Exceeded limits return HTTP 429 with retry-after header.

## Best Practices

### Token Management

1. **Store tokens securely** - Never log or expose tokens
2. **Handle rotation** - Always use nextRequestToken
3. **Implement retry logic** - Handle token expiration gracefully
4. **Session management** - Refresh tokens before expiry

### Error Handling

```typescript
try {
  const response = await apiClient.post('/CreateMachine', data);
  if (!response.success) {
    handleError(response.error);
  }
  // Update token for next request
  apiClient.setToken(response.nextRequestToken);
} catch (error) {
  if (error.status === 401) {
    // Re-authenticate
    await login();
  } else if (error.status === 429) {
    // Rate limited - wait and retry
    await delay(error.headers['retry-after'] * 1000);
  }
}
```

### Performance Optimization

1. **Batch operations** when possible
2. **Use appropriate pagination** for large datasets
3. **Cache read-only data** with appropriate TTL
4. **Implement connection pooling** for HTTP clients
5. **Use compression** for large payloads

### Security Considerations

1. **Always use HTTPS** in production
2. **Validate SSL certificates**
3. **Encrypt sensitive data** before transmission
4. **Implement request signing** for critical operations
5. **Audit all API usage** through logs

## Code Examples

### Python Integration

```python
import requests
import json
from typing import Dict, Any

class RediaccAPI:
    def __init__(self, base_url: str, email: str, password: str):
        self.base_url = base_url
        self.token = None
        self.authenticate(email, password)
    
    def authenticate(self, email: str, password: str):
        response = self._request('CreateAuthenticationRequest', {
            'email': email,
            'password': password,
            'requestName': 'Python API Client',
            'expirationHours': 24
        })
        self.token = response['data']['token']
    
    def _request(self, procedure: str, data: Dict[str, Any]) -> Dict:
        headers = {
            'Content-Type': 'application/json'
        }
        if self.token:
            headers['Rediacc-RequestToken'] = self.token
        
        response = requests.post(
            f"{self.base_url}/api/StoredProcedure/{procedure}",
            json=data,
            headers=headers
        )
        
        result = response.json()
        
        # Update token for next request
        if 'nextRequestToken' in result:
            self.token = result['nextRequestToken']
        
        if not result.get('success', False):
            raise Exception(f"API Error: {result.get('error', 'Unknown error')}")
        
        return result
    
    def create_queue_item(self, team: str, machine: str, bridge: str, vault: Dict):
        return self._request('CreateQueueItem', {
            'teamName': team,
            'machineName': machine,
            'bridgeName': bridge,
            'priority': 3,
            'queueVault': vault
        })

# Usage
api = RediaccAPI('https://api.rediacc.com', 'user@example.com', 'password')
result = api.create_queue_item(
    'Production',
    'server-01',
    'Global Bridges',
    {'function': 'deploy', 'version': '1.2.3'}
)
```

### Node.js Integration

```javascript
const axios = require('axios');

class RediaccClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  async authenticate(email, password) {
    const response = await this.request('CreateAuthenticationRequest', {
      email,
      password,
      requestName: 'Node.js Client',
      expirationHours: 24
    });
    this.token = response.data.token;
  }

  async request(procedure, data) {
    const headers = {
      'Content-Type': 'application/json'
    };
    
    if (this.token) {
      headers['Rediacc-RequestToken'] = this.token;
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/api/StoredProcedure/${procedure}`,
        data,
        { headers }
      );

      // Update token for next request
      if (response.data.nextRequestToken) {
        this.token = response.data.nextRequestToken;
      }

      if (!response.data.success) {
        throw new Error(response.data.error.message);
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        // Handle re-authentication
        throw new Error('Authentication required');
      }
      throw error;
    }
  }

  async createMachine(name, team, region, bridge, vault) {
    return this.request('CreateMachine', {
      machineName: name,
      teamName: team,
      regionName: region,
      bridgeName: bridge,
      machineVault: vault
    });
  }
}

// Usage
(async () => {
  const client = new RediaccClient('https://api.rediacc.com');
  await client.authenticate('user@example.com', 'password');
  
  const machine = await client.createMachine(
    'server-02',
    'Production',
    'US-East',
    'Regional Bridge',
    {
      ip: '10.0.0.6',
      user: 'deploy',
      datastore: '/mnt/datastore'
    }
  );
  
  console.log('Machine created:', machine.data);
})();
```

## Testing

### API Testing Tools

1. **Postman Collection**: Import the Rediacc API collection
2. **cURL Examples**: Use for quick command-line testing
3. **Integration Tests**: Automated test suites

### cURL Example

```bash
# Initial authentication
TOKEN=$(curl -X POST https://api.rediacc.com/api/StoredProcedure/CreateAuthenticationRequest \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password",
    "requestName": "cURL Test",
    "expirationHours": 1
  }' | jq -r '.data.token')

# Use token for subsequent requests
curl -X POST https://api.rediacc.com/api/StoredProcedure/GetMachinesByTeam \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: $TOKEN" \
  -d '{"teamName": "Production"}'
```

## Webhooks (Future)

Webhook support is planned for real-time event notifications:

- Queue item state changes
- Machine connectivity events
- Resource limit warnings
- Security alerts

## API Versioning

The API uses URL versioning for major changes:

- Current: `/api/StoredProcedure/` (v1)
- Future: `/api/v2/StoredProcedure/`

Backwards compatibility is maintained within major versions.