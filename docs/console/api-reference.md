---
sidebar_position: 70
---

# API Reference

The Rediacc Console API provides programmatic access to all console functionality through stored procedures. This reference documents the available endpoints, authentication methods, and usage examples.

## Overview

The Console API is built on the Rediacc middleware layer and provides RESTful endpoints for all operations available in the web interface. All endpoints use the stored procedure pattern for security and consistency.

### Base URL
```
https://api.rediacc.com/api/StoredProcedure/
```

For local development:
```
http://localhost:7322/api/StoredProcedure/
```

## Authentication

### Token-Based Authentication

Rediacc uses an advanced rotating token system where each API response includes a new token for the next request. This prevents token replay attacks and enhances security.

```http
Headers:
Rediacc-RequestToken: <your-current-token>
Content-Type: application/json
```

### Request Queuing

The API client implements request queuing to prevent race conditions during token rotation:

```typescript
// Implementation example
class ApiClient {
  private requestQueue: Promise<any> = Promise.resolve();
  
  async request(endpoint: string, data: any) {
    // Queue requests to ensure sequential token updates
    return this.requestQueue = this.requestQueue.then(async () => {
      const response = await makeRequest(endpoint, data);
      await updateStoredToken(response.nextRequestCredential);
      return response;
    });
  }
}
```

### Initial Authentication

```http
POST /api/StoredProcedure/AuthenticateUser
```

**Request:**
```json
{
  "email": "user@example.com",
  "password": "your-password",
  "masterPassword": "client-encryption-password"
}
```

**Response:**
```json
{
  "success": true,
  "authenticationId": 123,
  "nextRequestCredential": "next-token-to-use",
  "user": {
    "email": "user@example.com",
    "permissionGroupName": "Administrators",
    "teams": ["Default", "Production"]
  }
}
```

### Token Rotation

Each API response includes a `nextRequestCredential` that MUST be used for the subsequent request:

```json
{
  "success": true,
  "data": {...},
  "nextRequestCredential": "new-token-for-next-request"
}
```

:::warning
Always update your token after each request. Failing to use the new token will result in authentication errors.
:::

## Encryption Middleware

### Automatic Vault Encryption

The API automatically encrypts any field containing "vault" in its name using client-side encryption:

```typescript
// Encryption middleware implementation
const encryptionMiddleware = {
  request: (config: AxiosRequestConfig) => {
    if (config.data && masterPassword) {
      config.data = encryptVaultFields(config.data, masterPassword);
    }
    return config;
  },
  
  response: (response: AxiosResponse) => {
    if (response.data && masterPassword) {
      response.data = decryptVaultFields(response.data, masterPassword);
    }
    return response;
  }
};
```

### Vault Field Format

**Before encryption (client-side):**
```json
{
  "machineVault": {
    "ip": "192.168.1.100",
    "user": "deploy",
    "privateKey": "-----BEGIN RSA PRIVATE KEY-----..."
  }
}
```

**After encryption (transmitted):**
```json
{
  "machineVault": "encrypted:eyJpdiI6IjEyMzQ1Njc4OTAiLCJkYXRhIjoiYWJjZGVmLi4uIn0="
}
```

### Encryption Standards
- **Algorithm**: AES-256-GCM
- **Key Derivation**: PBKDF2 with SHA-256
- **IV**: Unique per encryption operation
- **Format**: `encrypted:<base64-encoded-data>`

## Core Endpoints

### Queue Management

#### Create Queue Item
```http
POST /api/StoredProcedure/CreateQueueItem
```

Creates a new task in the queue system.

**Request:**
```json
{
  "teamName": "Production",
  "machineName": "prod-server-01",
  "bridgeName": "Global Bridges",
  "priority": 2,
  "maxRetries": 3,
  "queueVault": {
    "function": "deploy",
    "repository": "web-app",
    "version": "v1.2.3",
    "environment": {
      "NODE_ENV": "production"
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "queueId": 456,
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "nextRequestCredential": "..."
}
```

#### Get Queue Items Next (Bridge Polling)
```http
POST /api/StoredProcedure/GetQueueItemsNext
```

Used by bridges to poll for pending tasks.

**Request:**
```json
{
  "bridgeName": "Global Bridges",
  "batchSize": 3
}
```

#### Update Queue Item Response
```http
POST /api/StoredProcedure/UpdateQueueItemResponse
```

Updates the status and response of a queue item during processing.

**Request:**
```json
{
  "queueId": 456,
  "response": "Task completed successfully\nDeployed version v1.2.3",
  "responseType": "success"
}
```

#### Update Queue Item to Completed
```http
POST /api/StoredProcedure/UpdateQueueItemToCompleted
```

Marks a queue item as completed.

**Request:**
```json
{
  "queueId": 456,
  "finalStatus": "COMPLETED",
  "executionTime": 45.2
}
```

### Machine Management

#### Get Machines
```http
POST /api/StoredProcedure/GetMachines
```

Retrieves all machines for a team.

**Request:**
```json
{
  "teamName": "Production"
}
```

**Response:**
```json
{
  "success": true,
  "machines": [
    {
      "machineId": 123,
      "machineName": "prod-web-01",
      "teamName": "Production",
      "regionName": "Default Region",
      "bridgeName": "Global Bridges",
      "queueItemCount": 2,
      "lastUpdated": "2024-01-15T10:30:00Z",
      "vaultVersion": "v1"
    }
  ],
  "nextRequestCredential": "..."
}
```

#### Create Machine
```http
POST /api/StoredProcedure/CreateMachine
```

Creates a new machine configuration.

**Request:**
```json
{
  "machineName": "prod-web-01",
  "teamName": "Production",
  "regionName": "Default Region",
  "bridgeName": "Global Bridges",
  "description": "Production web server",
  "tags": ["production", "web", "critical"],
  "machineVault": {
    "ip": "10.0.1.100",
    "port": 22,
    "user": "rediacc",
    "sshPrivateKey": "-----BEGIN OPENSSH PRIVATE KEY-----...",
    "datastorePath": "/opt/rediacc/datastore"
  }
}
```

#### Update Machine
```http
POST /api/StoredProcedure/UpdateMachine
```

Updates an existing machine configuration.

**Request:**
```json
{
  "machineId": 123,
  "description": "Updated description",
  "bridgeName": "Regional Bridge",
  "machineVault": {
    "ip": "10.0.1.101"
  }
}
```

#### Delete Machine
```http
POST /api/StoredProcedure/DeleteMachine
```

Removes a machine from the system.

**Request:**
```json
{
  "machineId": 123
}
```

### Team Management

#### Get Teams
```http
POST /api/StoredProcedure/GetTeams
```

Retrieves all teams accessible to the user.

**Response:**
```json
{
  "success": true,
  "teams": [
    {
      "teamId": 1,
      "teamName": "Production",
      "memberCount": 12,
      "resourceCount": {
        "machines": 15,
        "repositories": 8,
        "storage": 3
      }
    }
  ],
  "nextRequestCredential": "..."
}
```

#### Create Team
```http
POST /api/StoredProcedure/CreateTeam
```

Creates a new team.

**Request:**
```json
{
  "teamName": "Development",
  "description": "Development team resources",
  "teamVault": {
    "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----...",
    "settings": {
      "defaultRegion": "US-East"
    }
  }
}
```

#### Update Team Vault
```http
POST /api/StoredProcedure/UpdateTeamVault
```

Updates team vault data including SSH keys and settings.

**Request:**
```json
{
  "teamId": 2,
  "teamVault": {
    "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----...",
    "settings": {
      "defaultRegion": "US-West",
      "backupEnabled": true
    }
  }
}
```

### Repository Management

#### Create Repository
```http
POST /api/StoredProcedure/CreateRepository
```

Creates a new repository configuration.

**Request:**
```json
{
  "repositoryName": "web-app",
  "teamName": "Production",
  "repositoryType": "git",
  "repositoryVault": {
    "url": "https://github.com/company/web-app.git",
    "authType": "token",
    "token": "ghp_xxxxxxxxxxxxxxxxxxxx",
    "branch": "main"
  }
}
```

### Storage Management

#### Create Storage
```http
POST /api/StoredProcedure/CreateStorage
```

Creates a new storage configuration.

**Request:**
```json
{
  "storageName": "backup-s3",
  "teamName": "Production",
  "storageType": "S3",
  "storageVault": {
    "bucket": "company-backups",
    "region": "us-east-1",
    "accessKey": "AKIAIOSFODNN7EXAMPLE",
    "secretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "encryption": "AES256"
  }
}
```

### Schedule Management

#### Create Schedule
```http
POST /api/StoredProcedure/CreateSchedule
```

Creates a new scheduled task.

**Request:**
```json
{
  "scheduleName": "daily-backup",
  "teamName": "Production",
  "machineName": "prod-db-01",
  "cronExpression": "0 2 * * *",
  "enabled": true,
  "scheduleVault": {
    "script": "backup.sh",
    "parameters": {
      "destination": "s3://backups/daily/"
    }
  }
}
```

### User Management

#### Get Users
```http
POST /api/StoredProcedure/GetUsers
```

Retrieves all users in the system (admin only).

**Response:**
```json
{
  "success": true,
  "users": [
    {
      "userId": 123,
      "email": "admin@rediacc.io",
      "status": "Active",
      "permissionGroupName": "Administrators",
      "lastActive": "2024-01-15T10:30:00Z"
    }
  ],
  "nextRequestCredential": "..."
}
```

#### Create User
```http
POST /api/StoredProcedure/CreateUser
```

Creates a new user account.

**Request:**
```json
{
  "email": "newuser@example.com",
  "permissionGroupName": "Operators"
}
```

#### Activate User Account
```http
POST /api/StoredProcedure/ActivateUserAccount
```

Activates a newly created user account.

**Request:**
```json
{
  "activationToken": "activation-token-from-email",
  "password": "new-secure-password"
}
```

### Bridge Management

#### Get Bridges
```http
POST /api/StoredProcedure/GetBridges
```

Retrieves bridges for a specific region.

**Request:**
```json
{
  "regionName": "Default Region"
}
```

**Response:**
```json
{
  "success": true,
  "bridges": [
    {
      "bridgeId": 1,
      "bridgeName": "Global Bridges",
      "regionName": "Default Region",
      "bridgeType": "Global",
      "managementType": "Cloud-Managed",
      "machineCount": 12,
      "hasAccess": true
    }
  ],
  "nextRequestCredential": "..."
}
```

#### Create Bridge
```http
POST /api/StoredProcedure/CreateBridge
```

Creates a new bridge processor.

**Request:**
```json
{
  "bridgeName": "Regional Bridge US-East",
  "regionName": "US-East",
  "bridgeType": "Regular",
  "managementType": "Self-Managed"
}
```

#### Get Bridge Token
```http
POST /api/StoredProcedure/GetBridgeToken
```

Retrieves authentication token for bridge to connect to API.

**Request:**
```json
{
  "bridgeId": 1
}
```

**Response:**
```json
{
  "success": true,
  "token": "bridge-api-token",
  "apiUrl": "https://api.rediacc.com",
  "masterPassword": "encrypted-master-password",
  "nextRequestCredential": "..."
}
```

### Region Management

#### Get Regions
```http
POST /api/StoredProcedure/GetRegions
```

Retrieves all regions in the system.

**Response:**
```json
{
  "success": true,
  "regions": [
    {
      "regionId": 1,
      "regionName": "Default Region",
      "bridgeCount": 2,
      "vaultVersion": "v1"
    }
  ],
  "nextRequestCredential": "..."
}
```

#### Create Region
```http
POST /api/StoredProcedure/CreateRegion
```

Creates a new region.

**Request:**
```json
{
  "regionName": "US-West",
  "description": "West Coast infrastructure",
  "regionVault": {
    "settings": {
      "timezone": "America/Los_Angeles"
    }
  }
}
```

### Audit Operations

#### Get Audit Logs
```http
POST /api/StoredProcedure/GetAuditLogs
```

Retrieves audit logs with filtering options.

**Request:**
```json
{
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-01-31T23:59:59Z",
  "category": "Authentication",
  "userEmail": "admin@rediacc.io",
  "limit": 100,
  "offset": 0
}
```

**Response:**
```json
{
  "success": true,
  "auditLogs": [
    {
      "logId": 12345,
      "timestamp": "2024-01-15T10:30:00Z",
      "category": "Authentication",
      "action": "TOKEN_VALIDATED",
      "userEmail": "admin@rediacc.io",
      "details": "Token validated for user: admin@rediacc.io",
      "ipAddress": "192.168.1.100"
    }
  ],
  "totalCount": 1523,
  "nextRequestCredential": "..."
}
```

### System Operations

#### Get System Status
```http
POST /api/StoredProcedure/GetSystemStatus
```

Retrieves overall system health and resource usage.

**Response:**
```json
{
  "success": true,
  "status": "healthy",
  "resourceLimits": {
    "machines": { "used": 45, "limit": 200, "percentage": 22.5 },
    "bridges": { "used": 3, "limit": 50, "percentage": 6 },
    "users": { "used": 23, "limit": 25, "percentage": 92 }
  },
  "queueStatus": {
    "total": 1062,
    "pending": 12,
    "processing": 5,
    "completed": 1043,
    "failed": 2
  },
  "systemHealth": {
    "database": "healthy",
    "api": "healthy",
    "bridges": {
      "total": 3,
      "active": 3,
      "inactive": 0
    }
  },
  "nextRequestCredential": "..."
}
```

#### Block/Unblock User Requests
```http
POST /api/StoredProcedure/BlockUserRequests
POST /api/StoredProcedure/UnblockUserRequests
```

Emergency controls to block all non-admin access.

**Request:**
```json
{
  "reason": "Security incident investigation",
  "estimatedDuration": "2 hours"
}
```

#### Export All Vaults
```http
POST /api/StoredProcedure/ExportAllVaults
```

Exports all encrypted vault data for backup (admin only).

**Response:**
```json
{
  "success": true,
  "exportId": "export-123",
  "downloadUrl": "https://secure-download-url",
  "expiresAt": "2024-01-15T12:00:00Z",
  "size": "125MB",
  "vaultCount": 245,
  "nextRequestCredential": "..."
}
```

## Vault Data Encryption

### Understanding Vault Fields

Any field ending with "Vault" or named with "vault" in the key is automatically encrypted using the client-side master password:

```javascript
// Fields that are encrypted:
{
  "machineVault": {...},     // Encrypted
  "teamVault": {...},        // Encrypted
  "storageVault": {...},     // Encrypted
  "queueVault": {...},       // Encrypted
  "normalData": "visible"    // Not encrypted
}
```

### Common Vault Structures

**Machine Vault:**
```json
{
  "ip": "10.0.1.100",
  "port": 22,
  "user": "rediacc",
  "sshPrivateKey": "-----BEGIN OPENSSH PRIVATE KEY-----...",
  "datastorePath": "/opt/rediacc/datastore"
}
```

**Team Vault:**
```json
{
  "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----...",
  "settings": {
    "defaultBridge": "Global Bridges",
    "defaultRegion": "Default Region"
  }
}
```

**Storage Vault (S3):**
```json
{
  "bucket": "company-backups",
  "region": "us-east-1",
  "accessKey": "AKIAIOSFODNN7EXAMPLE",
  "secretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "encryption": "AES256"
}
```

**Repository Vault (Git):**
```json
{
  "url": "https://github.com/company/app.git",
  "authType": "token",
  "token": "ghp_xxxxxxxxxxxxxxxxxxxx",
  "branch": "main"
}
```

## Error Handling

### Standard Error Response

All errors follow a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Machine 'prod-web-01' not found in team 'Production'",
    "details": {
      "resource": "machine",
      "identifier": "prod-web-01",
      "team": "Production"
    }
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Common Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| AUTHENTICATION_FAILED | Invalid credentials or token | 401 |
| AUTHORIZATION_DENIED | Insufficient permissions | 403 |
| RESOURCE_NOT_FOUND | Requested resource doesn't exist | 404 |
| RESOURCE_ALREADY_EXISTS | Duplicate resource creation | 409 |
| VALIDATION_ERROR | Invalid request parameters | 400 |
| VAULT_DECRYPTION_FAILED | Cannot decrypt vault data | 400 |
| RATE_LIMIT_EXCEEDED | Too many requests | 429 |
| INTERNAL_ERROR | Server error occurred | 500 |

## Rate Limiting

API rate limits vary by plan:

- **Essential**: 60 requests/minute
- **Professional**: 180 requests/minute  
- **Elite**: 600 requests/minute

**Headers returned:**
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1705318200
```

## Best Practices

### 1. Token Management

Always update your token after each request:

```javascript
class TokenManager {
  constructor() {
    this.currentToken = null;
  }
  
  updateToken(response) {
    if (response.nextRequestCredential) {
      this.currentToken = response.nextRequestCredential;
    }
  }
  
  getHeaders() {
    return {
      'Rediacc-RequestToken': this.currentToken,
      'Content-Type': 'application/json'
    };
  }
}
```

### 2. Error Handling

Implement robust error handling with retry logic:

```python
import time
import requests

def api_call_with_retry(url, data, token, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = requests.post(url, json=data, headers={
                'Rediacc-RequestToken': token,
                'Content-Type': 'application/json'
            })
            
            if response.status_code == 429:  # Rate limited
                retry_after = int(response.headers.get('Retry-After', 60))
                time.sleep(retry_after)
                continue
                
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            if attempt == max_retries - 1:
                raise
            time.sleep(2 ** attempt)  # Exponential backoff
```

### 3. Vault Encryption

Always encrypt sensitive data client-side:

```javascript
import crypto from 'crypto';

function encryptVaultData(data, masterPassword) {
  const algorithm = 'aes-256-gcm';
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(masterPassword, salt, 100000, 32, 'sha256');
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'base64');
  encrypted += cipher.final('base64');
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted: encrypted,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64')
  };
}
```

### 4. Batch Operations

Minimize API calls by batching operations:

```python
# Instead of multiple individual calls
for machine in machines:
    api.create_machine(machine)

# Use batch operations where available
api.batch_create_machines(machines)
```

### 5. Connection Pooling

Reuse HTTP connections for better performance:

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()

# Configure retry strategy
retry_strategy = Retry(
    total=3,
    status_forcelist=[429, 500, 502, 503, 504],
    method_whitelist=["HEAD", "GET", "PUT", "DELETE", "OPTIONS", "TRACE", "POST"]
)

# Configure connection pooling
adapter = HTTPAdapter(
    pool_connections=10,
    pool_maxsize=10,
    max_retries=retry_strategy
)

session.mount("http://", adapter)
session.mount("https://", adapter)
```

## Complete Example: Python Client

```python
import requests
import json
from typing import Dict, Any, Optional
from datetime import datetime

class RediaccClient:
    def __init__(self, api_url: str, email: str, password: str, master_password: Optional[str] = None):
        self.api_url = api_url.rstrip('/')
        self.token = None
        self.session = requests.Session()
        
        # Configure connection pooling
        adapter = requests.adapters.HTTPAdapter(
            pool_connections=10,
            pool_maxsize=10
        )
        self.session.mount('http://', adapter)
        self.session.mount('https://', adapter)
        
        # Authenticate
        self.authenticate(email, password, master_password)
    
    def authenticate(self, email: str, password: str, master_password: Optional[str] = None):
        """Authenticate and get initial token"""
        response = self.call_procedure('AuthenticateUser', {
            'email': email,
            'password': password,
            'masterPassword': master_password
        }, authenticated=False)
        
        if not response.get('success'):
            raise Exception(f"Authentication failed: {response}")
        
        return response
    
    def call_procedure(self, procedure: str, data: Dict[str, Any], authenticated: bool = True) -> Dict[str, Any]:
        """Call a stored procedure with automatic token management"""
        headers = {'Content-Type': 'application/json'}
        
        if authenticated and self.token:
            headers['Rediacc-RequestToken'] = self.token
        
        url = f"{self.api_url}/api/StoredProcedure/{procedure}"
        
        try:
            response = self.session.post(url, json=data, headers=headers, timeout=30)
            response.raise_for_status()
            
            result = response.json()
            
            # Update token for next request
            if 'nextRequestCredential' in result:
                self.token = result['nextRequestCredential']
            
            return result
            
        except requests.exceptions.RequestException as e:
            raise Exception(f"API call failed: {str(e)}")
    
    # Machine management
    def get_machines(self, team_name: str) -> list:
        """Get all machines for a team"""
        response = self.call_procedure('GetMachines', {'teamName': team_name})
        return response.get('machines', [])
    
    def create_machine(self, name: str, team: str, region: str, bridge: str, vault_data: dict) -> dict:
        """Create a new machine"""
        return self.call_procedure('CreateMachine', {
            'machineName': name,
            'teamName': team,
            'regionName': region,
            'bridgeName': bridge,
            'machineVault': vault_data
        })
    
    # Queue management
    def create_queue_item(self, team: str, machine: str, bridge: str, priority: int, vault_data: dict) -> dict:
        """Create a new queue item"""
        return self.call_procedure('CreateQueueItem', {
            'teamName': team,
            'machineName': machine,
            'bridgeName': bridge,
            'priority': priority,
            'queueVault': vault_data
        })
    
    def get_queue_status(self) -> dict:
        """Get overall queue status"""
        response = self.call_procedure('GetSystemStatus', {})
        return response.get('queueStatus', {})
    
    # Audit logging
    def get_audit_logs(self, start_date: datetime, end_date: datetime, limit: int = 100) -> list:
        """Get audit logs for a date range"""
        response = self.call_procedure('GetAuditLogs', {
            'startDate': start_date.isoformat(),
            'endDate': end_date.isoformat(),
            'limit': limit
        })
        return response.get('auditLogs', [])

# Usage example
if __name__ == '__main__':
    # Initialize client
    client = RediaccClient(
        'https://api.rediacc.com',
        'admin@rediacc.io',
        'your-password',
        'master-password'
    )
    
    # Get machines
    machines = client.get_machines('Production')
    print(f"Found {len(machines)} machines")
    
    for machine in machines:
        print(f"- {machine['machineName']}: {machine['queueItemCount']} queue items")
    
    # Create a deployment task
    task = client.create_queue_item(
        team='Production',
        machine='prod-web-01',
        bridge='Global Bridges',
        priority=2,
        vault_data={
            'function': 'deploy',
            'repository': 'web-app',
            'version': 'v1.2.3',
            'environment': {
                'NODE_ENV': 'production'
            }
        }
    )
    
    print(f"\nCreated task: {task.get('taskId')}")
    
    # Check queue status
    queue_status = client.get_queue_status()
    print(f"\nQueue status:")
    print(f"- Pending: {queue_status.get('pending', 0)}")
    print(f"- Processing: {queue_status.get('processing', 0)}")
    print(f"- Completed: {queue_status.get('completed', 0)}")
    print(f"- Failed: {queue_status.get('failed', 0)}")
```

## Advanced API Features

### Request/Response Flattening

The API uses a flattened response format for easier parsing:

```typescript
// Raw database response
[
  { UserId: 1, Email: "user1@example.com", TeamId: 1, TeamName: "Default" },
  { UserId: 1, Email: "user1@example.com", TeamId: 2, TeamName: "Production" }
]

// Flattened API response
{
  "users": [
    {
      "userId": 1,
      "email": "user1@example.com",
      "teams": ["Default", "Production"]
    }
  ]
}
```

### Error Handling Patterns

The API provides detailed error information:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_MACHINE",
    "message": "Machine 'prod-01' not found in team 'Production'",
    "field": "machineName",
    "details": {
      "availableMachines": ["prod-web-01", "prod-db-01"]
    }
  },
  "nextRequestCredential": "..."
}
```

### Batch Operations

Many endpoints support batch operations for efficiency:

```json
// Create multiple queue items
{
  "items": [
    {
      "teamName": "Production",
      "machineName": "prod-web-01",
      "queueVault": { "function": "deploy" }
    },
    {
      "teamName": "Production", 
      "machineName": "prod-web-02",
      "queueVault": { "function": "deploy" }
    }
  ]
}
```

### Webhook Integration

Configure webhooks for real-time events:

```json
{
  "webhookUrl": "https://your-app.com/webhooks/rediacc",
  "events": ["queue.completed", "queue.failed", "machine.offline"],
  "secret": "your-webhook-secret"
}
```

### Rate Limiting

The API implements rate limiting to ensure fair usage:
- **Authenticated requests**: 1000 per minute
- **Queue polling (bridges)**: 60 per minute
- **Bulk operations**: 10 per minute

Headers indicate rate limit status:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
X-RateLimit-Reset: 1704067200
```

### API Versioning

The API supports versioning through headers:
```http
Accept: application/vnd.rediacc.v2+json
```

Current versions:
- **v1**: Legacy format (deprecated)
- **v2**: Current stable version
- **v3**: Beta features (opt-in)

## Additional Resources

- [CLI Documentation](/docs/cli/introduction) - Command-line interface using the API
- [Architecture Overview](/docs/console/architecture) - System design and components
- [Security Model](/docs/console/authentication#security-features) - Authentication and encryption
- [Queue System](/docs/console/queue) - Detailed queue management guide

## Support

For API support:
- Check the [Common Errors](/docs/console/errors/common-errors) guide
- Review the [Known Issues](/docs/console/known-issues) page
- Contact support through the console
- Community forum: https://community.rediacc.com