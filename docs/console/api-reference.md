---
sidebar_position: 9
---

# API Reference

The Rediacc Console API provides programmatic access to all console functionality through a RESTful interface. This reference covers authentication, endpoints, and usage examples.

## Base URL

```
https://your-domain.com/api/StoredProcedure/
```

For local development:
```
http://localhost:7322/api/StoredProcedure/
```

## Authentication

### Token-Based Authentication

All API requests require authentication using a rotating token system:

```http
Headers:
Rediacc-RequestToken: <your-current-token>
Content-Type: application/json
```

### Token Rotation

Each API response includes a new token for the next request:

```json
{
  "success": true,
  "data": {...},
  "nextRequestCredential": "new-token-for-next-request"
}
```

Always update your token after each request to maintain session continuity.

### Initial Authentication

```http
POST /api/StoredProcedure/CreateAuthenticationRequest
{
  "email": "user@example.com",
  "password": "your-password",
  "requestName": "API Session",
  "permissionGroupName": "Operators"
}
```

## Core Endpoints

### Resource Management

#### Machines

**List Machines**
```http
GET /api/StoredProcedure/GetMachineList?teamName=Default
```

**Create Machine**
```http
POST /api/StoredProcedure/CreateMachine
{
  "machineName": "prod-server-01",
  "teamName": "Default",
  "regionName": "Default Region",
  "bridgeName": "Global Bridges",
  "vaultData": {
    "ip": "10.0.0.5",
    "user": "ubuntu",
    "datastore": "/opt/rediacc",
    "ssh_private_key": "-----BEGIN OPENSSH PRIVATE KEY-----..."
  }
}
```

**Update Machine**
```http
POST /api/StoredProcedure/UpdateMachine
{
  "machineId": 123,
  "machineName": "prod-server-01-renamed",
  "vaultData": {...}
}
```

**Delete Machine**
```http
POST /api/StoredProcedure/DeleteMachine
{
  "machineId": 123
}
```

#### Teams

**List Teams**
```http
GET /api/StoredProcedure/GetTeamList
```

**Create Team**
```http
POST /api/StoredProcedure/CreateTeam
{
  "teamName": "Development",
  "vaultData": {
    "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----...",
    "DEFAULT_USER": "ubuntu"
  }
}
```

#### Storage

**List Storage Configurations**
```http
GET /api/StoredProcedure/GetStorageList?teamName=Default
```

**Create Storage**
```http
POST /api/StoredProcedure/CreateStorage
{
  "storageName": "backup-s3",
  "storageType": "S3",
  "teamName": "Default",
  "configuration": {
    "bucket": "company-backups",
    "region": "us-east-1",
    "path_prefix": "/rediacc/"
  },
  "vaultData": {
    "access_key": "AKIA...",
    "secret_key": "..."
  }
}
```

**Test Storage Connection**
```http
POST /api/StoredProcedure/TestStorage
{
  "storageId": 456
}
```

### Queue Operations

#### Create Queue Item

```http
POST /api/StoredProcedure/CreateQueueItem
{
  "teamName": "Default",
  "machineName": "prod-server-01",
  "bridgeName": "Global Bridges",
  "priority": 1,
  "vaultData": {
    "function": "deploy",
    "repository": "web-app",
    "version": "1.2.3"
  }
}
```

#### Get Queue Status

```http
GET /api/StoredProcedure/GetQueueStatus?teamName=Default&status=PENDING
```

#### Update Queue Item

```http
POST /api/StoredProcedure/UpdateQueueItemResponse
{
  "queueId": 789,
  "response": "Processing deployment...",
  "status": "PROCESSING"
}
```

#### Cancel Queue Item

```http
POST /api/StoredProcedure/CancelQueueItem
{
  "queueId": 789,
  "reason": "User requested cancellation"
}
```

### Repository Management

#### List Repositories

```http
GET /api/StoredProcedure/GetRepositoryList?teamName=Default
```

#### Create Repository

```http
POST /api/StoredProcedure/CreateRepository
{
  "repositoryName": "frontend-app",
  "repositoryType": "Git",
  "teamName": "Default",
  "url": "https://github.com/company/frontend.git",
  "vaultData": {
    "auth_type": "token",
    "token": "ghp_..."
  }
}
```

### Schedule Management

#### Create Schedule

```http
POST /api/StoredProcedure/CreateSchedule
{
  "scheduleName": "daily-backup",
  "teamName": "Default",
  "machineName": "backup-server",
  "cronExpression": "0 2 * * *",
  "script": "backup.sh",
  "enabled": true,
  "priority": 3
}
```

#### List Schedules

```http
GET /api/StoredProcedure/GetScheduleList?teamName=Default
```

#### Toggle Schedule

```http
POST /api/StoredProcedure/ToggleSchedule
{
  "scheduleId": 321,
  "enabled": false
}
```

### Audit Operations

#### Get Audit Logs

```http
GET /api/StoredProcedure/GetAuditLogs?startDate=2024-01-01&endDate=2024-01-31&entityType=Machine
```

#### Export Audit Logs

```http
POST /api/StoredProcedure/ExportAuditLogs
{
  "startDate": "2024-01-01",
  "endDate": "2024-01-31",
  "format": "CSV",
  "entityTypes": ["Machine", "User", "Team"]
}
```

### System Operations

#### Get System Status

```http
GET /api/StoredProcedure/GetSystemStatus
```

Response:
```json
{
  "success": true,
  "data": {
    "version": "2.1.0",
    "uptime": "15 days",
    "resourceUsage": {
      "machines": 45,
      "teams": 8,
      "users": 23,
      "activeQueues": 12
    },
    "health": "GOOD"
  }
}
```

#### Get Permission Groups

```http
GET /api/StoredProcedure/GetPermissionGroups
```

#### Create User

```http
POST /api/StoredProcedure/CreateUser
{
  "email": "newuser@example.com",
  "permissionGroupName": "Operators",
  "teamNames": ["Default", "Development"]
}
```

## Vault Data Encryption

### Understanding Vault Fields

Any field ending with "Vault" or named "vaultData" is automatically encrypted using the master password:

```javascript
// Client-side encryption example
const encryptedVault = encryptVaultData(vaultData, masterPassword);

const payload = {
  machineName: "server-01",
  vaultData: encryptedVault  // This will be encrypted
};
```

### Vault Data Structure

Common vault data patterns:

**Machine Vault:**
```json
{
  "ip": "10.0.0.5",
  "user": "ubuntu",
  "port": 22,
  "datastore": "/opt/rediacc",
  "ssh_private_key": "-----BEGIN OPENSSH PRIVATE KEY-----..."
}
```

**Storage Vault (S3):**
```json
{
  "access_key": "AKIA...",
  "secret_key": "...",
  "encryption_key": "..."
}
```

**Repository Vault (Git):**
```json
{
  "auth_type": "ssh",
  "ssh_private_key": "-----BEGIN OPENSSH PRIVATE KEY-----...",
  "passphrase": "optional-key-passphrase"
}
```

## Error Handling

### Standard Error Response

```json
{
  "success": false,
  "error": {
    "code": "INVALID_TOKEN",
    "message": "Authentication token is invalid or expired",
    "details": {
      "timestamp": "2024-01-15T10:30:00Z"
    }
  }
}
```

### Common Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| INVALID_TOKEN | Authentication token invalid | 401 |
| PERMISSION_DENIED | Insufficient permissions | 403 |
| RESOURCE_NOT_FOUND | Requested resource not found | 404 |
| VALIDATION_ERROR | Input validation failed | 400 |
| QUOTA_EXCEEDED | Resource quota exceeded | 429 |
| INTERNAL_ERROR | Server error occurred | 500 |

## Rate Limiting

API requests are rate-limited per user:
- **Default limit**: 1000 requests per hour
- **Burst limit**: 100 requests per minute
- **Headers returned**:
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Requests remaining
  - `X-RateLimit-Reset`: Unix timestamp when limit resets

## Pagination

List endpoints support pagination:

```http
GET /api/StoredProcedure/GetMachineList?teamName=Default&page=1&pageSize=50
```

Response includes pagination metadata:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "pageSize": 50,
    "totalRecords": 234,
    "totalPages": 5
  }
}
```

## Webhooks

Configure webhooks for real-time notifications:

```http
POST /api/StoredProcedure/CreateWebhook
{
  "url": "https://your-server.com/webhook",
  "events": ["queue.completed", "machine.offline", "backup.failed"],
  "secret": "webhook-secret-key"
}
```

### Webhook Events

| Event | Description |
|-------|-------------|
| queue.created | New queue item created |
| queue.completed | Queue item completed successfully |
| queue.failed | Queue item failed |
| machine.online | Machine came online |
| machine.offline | Machine went offline |
| backup.completed | Backup completed |
| backup.failed | Backup failed |
| user.login | User logged in |
| user.logout | User logged out |

## Code Examples

### JavaScript/Node.js

```javascript
const axios = require('axios');

class RediaccAPI {
  constructor(baseURL, initialToken) {
    this.baseURL = baseURL;
    this.token = initialToken;
  }

  async request(method, endpoint, data = null) {
    try {
      const response = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        headers: {
          'Rediacc-RequestToken': this.token,
          'Content-Type': 'application/json'
        },
        data
      });

      // Update token for next request
      if (response.data.nextRequestCredential) {
        this.token = response.data.nextRequestCredential;
      }

      return response.data;
    } catch (error) {
      throw new Error(`API Error: ${error.response?.data?.error?.message || error.message}`);
    }
  }

  async getMachines(teamName) {
    return this.request('GET', `GetMachineList?teamName=${teamName}`);
  }

  async createQueueItem(data) {
    return this.request('POST', 'CreateQueueItem', data);
  }
}

// Usage
const api = new RediaccAPI('http://localhost:7322/api/StoredProcedure/', 'your-token');
const machines = await api.getMachines('Default');
```

### Python

```python
import requests
import json

class RediaccAPI:
    def __init__(self, base_url, initial_token):
        self.base_url = base_url
        self.token = initial_token
        self.session = requests.Session()
    
    def request(self, method, endpoint, data=None):
        headers = {
            'Rediacc-RequestToken': self.token,
            'Content-Type': 'application/json'
        }
        
        url = f"{self.base_url}{endpoint}"
        
        response = self.session.request(
            method=method,
            url=url,
            headers=headers,
            json=data
        )
        
        response.raise_for_status()
        result = response.json()
        
        # Update token for next request
        if 'nextRequestCredential' in result:
            self.token = result['nextRequestCredential']
        
        return result
    
    def get_machines(self, team_name):
        return self.request('GET', f'GetMachineList?teamName={team_name}')
    
    def create_queue_item(self, data):
        return self.request('POST', 'CreateQueueItem', data)

# Usage
api = RediaccAPI('http://localhost:7322/api/StoredProcedure/', 'your-token')
machines = api.get_machines('Default')
```

### cURL Examples

```bash
# Get machines
curl -X GET "http://localhost:7322/api/StoredProcedure/GetMachineList?teamName=Default" \
  -H "Rediacc-RequestToken: your-token" \
  -H "Content-Type: application/json"

# Create queue item
curl -X POST "http://localhost:7322/api/StoredProcedure/CreateQueueItem" \
  -H "Rediacc-RequestToken: your-token" \
  -H "Content-Type: application/json" \
  -d '{
    "teamName": "Default",
    "machineName": "prod-server-01",
    "bridgeName": "Global Bridges",
    "priority": 1,
    "vaultData": {
      "function": "backup",
      "destination": "s3://backups/"
    }
  }'
```

## Best Practices

1. **Token Management**
   - Always update your token after each request
   - Store tokens securely
   - Implement token refresh logic

2. **Error Handling**
   - Implement retry logic with exponential backoff
   - Handle rate limiting gracefully
   - Log errors for debugging

3. **Security**
   - Always use HTTPS in production
   - Encrypt sensitive data before sending
   - Validate SSL certificates

4. **Performance**
   - Use pagination for large datasets
   - Implement caching where appropriate
   - Batch operations when possible

5. **Vault Data**
   - Encrypt vault data client-side
   - Never log or expose vault contents
   - Rotate credentials regularly

## SDK Support

Official SDKs are available for:
- JavaScript/TypeScript (npm: `@rediacc/sdk`)
- Python (pip: `rediacc-sdk`)
- Go (go get: `github.com/rediacc/go-sdk`)
- .NET (NuGet: `Rediacc.SDK`)

## API Versioning

The API version is included in the response headers:
```
X-API-Version: 2.1.0
```

Backwards compatibility is maintained for:
- All GET endpoints
- Core POST endpoints (marked as stable)
- Response structure

Breaking changes are announced 90 days in advance.

## Support

For API support:
- Documentation: https://docs.rediacc.com/api
- Status page: https://status.rediacc.com
- Support email: api-support@rediacc.com
- Community forum: https://community.rediacc.com