---
sidebar_position: 25
---

# API Endpoints Reference

This document provides a comprehensive reference of all API endpoints used by the Rediacc Console, validated against the actual middleware implementation.

## Base URL

```
Production: https://www.rediacc.com/api/StoredProcedure/
Development: http://localhost:7322/api/StoredProcedure/
```

## Authentication

All requests require a token in the header:

```http
Rediacc-RequestToken: <your-token>
```

Tokens rotate on each request. The response includes:
```json
{
  "nextRequestToken": "new-token-for-next-request"
}
```

## Core Endpoints

### Authentication & Session Management

#### CreateAuthenticationRequest
Creates a new authentication session.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateAuthenticationRequest`  
**Authorization**: Public (no auth required)

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "requestName": "Web Session",
  "permissions": "Users",
  "expirationHours": 24
}
```

#### ActivateUserAccount
Activates a new user account with initial password.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/ActivateUserAccount`  
**Authorization**: Public (no auth required)

### Resource Management

#### Machines

##### GetMachines
Retrieves all machines for a team.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetMachines`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team"
}
```

##### CreateMachine
Adds a new machine to the system.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateMachine`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team",
  "machineName": "server-01",
  "regionName": "Default Region",
  "bridgeName": "Global Bridges",
  "machineVault": {
    "ip": "192.168.1.100",
    "user": "deploy",
    "datastore": "/mnt/datastore",
    "port": 22
  }
}
```

##### UpdateMachine
Updates existing machine configuration.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/UpdateMachine`  
**Authorization**: Authenticated

##### DeleteMachine
Removes a machine from the system.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/DeleteMachine`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "machineName": "server-01"
}
```

#### Teams

##### GetTeams
Retrieves all teams accessible to the user.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetTeams`  
**Authorization**: Authenticated

##### CreateTeam
Creates a new team.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateTeam`  
**Authorization**: Administrators only

**Request Body**:
```json
{
  "teamName": "Development",
  "teamVault": {
    "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----..."
  }
}
```

#### Bridges

##### GetBridges
Retrieves bridges for a region.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetBridges`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "regionName": "Default Region"
}
```

##### CreateBridge
Creates a new bridge in a region.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateBridge`  
**Authorization**: Administrators only

**Request Body**:
```json
{
  "regionName": "Default Region",
  "bridgeName": "bridge-02",
  "bridgeType": "Regular",
  "managementType": "Self-Managed"
}
```

### Queue Operations

#### CreateQueueItem
Submits a new task to the queue.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateQueueItem`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team",
  "machineName": "server-01",
  "bridgeName": "Global Bridges",
  "priority": 3,
  "queueVault": {
    "function": "backup",
    "repository": "webapp",
    "destination": "s3://backups/"
  }
}
```

**Response**:
```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "queueId": 12345,
  "status": "PENDING"
}
```

#### GetQueueItems
Retrieves queue items with filtering.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetQueueItems`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team",
  "status": "PENDING",
  "startDate": "2025-01-01",
  "endDate": "2025-01-31",
  "includeCompleted": true,
  "includeCancelled": false
}
```

#### GetQueueItemsNext
Used by bridges to poll for work.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetQueueItemsNext`  
**Authorization**: Bridge token required

**Request Body**:
```json
{
  "bridgeName": "Global Bridges",
  "batchSize": 3
}
```

#### UpdateQueueItemResponse
Updates task progress.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/UpdateQueueItemResponse`  
**Authorization**: Bridge token required

**Request Body**:
```json
{
  "queueId": 12345,
  "response": "Processing: 50% complete",
  "status": "PROCESSING"
}
```

#### UpdateQueueItemToCompleted
Marks task as finished.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/UpdateQueueItemToCompleted`  
**Authorization**: Bridge token required

**Request Body**:
```json
{
  "queueId": 12345,
  "response": "Backup completed successfully",
  "status": "COMPLETED"
}
```

#### CancelQueueItem
Cancels a pending or processing task.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CancelQueueItem`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "queueId": 12345
}
```

### User Management

#### GetUsers
Retrieves all users (admin only).

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetUsers`  
**Authorization**: Administrators only

#### CreateUser
Creates a new user account.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateUser`  
**Authorization**: Administrators only

**Request Body**:
```json
{
  "email": "newuser@example.com",
  "permissionGroup": "Users",
  "teams": ["Private Team", "Development"]
}
```

#### DeactivateUser
Disables a user account.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/DeactivateUser`  
**Authorization**: Administrators only

**Request Body**:
```json
{
  "email": "user@example.com"
}
```

### Audit & Monitoring

#### GetAuditLogs
Retrieves system audit logs.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetAuditLogs`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "startDate": "2025-01-01",
  "endDate": "2025-01-31",
  "entityType": "Machine",
  "userEmail": "admin@rediacc.io"
}
```

#### GetQueueStatistics
Retrieves queue performance metrics.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetQueueStatistics`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team",
  "dateRange": "today"
}
```

### Vault Operations

#### GetCompanyVault
Retrieves company-wide settings.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetCompanyVault`  
**Authorization**: Administrators only

#### UpdateCompanyVault
Updates company configuration.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/UpdateCompanyVault`  
**Authorization**: Administrators only

**Request Body**:
```json
{
  "companyVault": {
    "encryptionEnabled": true,
    "defaultRegion": "Default Region",
    "auditRetentionDays": 90
  }
}
```

#### ExportAllVaults
Exports all vault configurations.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/ExportAllVaults`  
**Authorization**: Administrators only

### Storage Management

#### GetStorages
Retrieves storage configurations.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetStorages`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team"
}
```

#### CreateStorage
Adds a new storage backend.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateStorage`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team",
  "storageName": "backup-s3",
  "storageType": "S3",
  "storageVault": {
    "bucket": "company-backups",
    "region": "us-east-1",
    "accessKey": "AKIAXXXXXXXX",
    "secretKey": "XXXXXXXXXX"
  }
}
```

### Repository Management

#### GetRepositories
Retrieves repository configurations.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/GetRepositories`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team"
}
```

#### CreateRepository
Adds a new repository.

**Method**: POST  
**Endpoint**: `/api/StoredProcedure/CreateRepository`  
**Authorization**: Authenticated

**Request Body**:
```json
{
  "teamName": "Private Team",
  "repositoryName": "webapp",
  "repositoryType": "git",
  "repositoryVault": {
    "url": "git@github.com:company/webapp.git",
    "branch": "main"
  }
}
```

## Response Format

All responses follow a flattened JSON structure:

```json
{
  "success": true,
  "error": null,
  "data": {
    // Response data
  },
  "nextRequestToken": "new-token",
  "metadata": {
    "executionTime": 123,
    "rowCount": 10
  }
}
```

Error responses:
```json
{
  "success": false,
  "error": "Invalid machine name",
  "errorCode": "MACHINE_NOT_FOUND",
  "data": null
}
```

## Rate Limiting

- **Authenticated Users**: 1000 requests per hour
- **Bridge Tokens**: 10000 requests per hour
- **Public Endpoints**: 10 requests per minute per IP

## Security Notes

1. **Vault Encryption**: All fields ending with `Vault` are automatically encrypted
2. **Token Rotation**: Tokens change on every request for security
3. **Permission Checks**: Procedures validate user permissions before execution
4. **Audit Logging**: All operations are logged for compliance

## Common Integration Patterns

### Polling for Queue Updates
```javascript
async function pollQueue() {
  const response = await apiClient.post('/GetQueueItems', {
    teamName: 'Private Team',
    status: 'PROCESSING'
  });
  
  // Process items
  for (const item of response.data.items) {
    console.log(`Task ${item.taskId}: ${item.status}`);
  }
  
  // Poll again in 5 seconds
  setTimeout(pollQueue, 5000);
}
```

### Batch Operations
```javascript
async function createMultipleMachines(machines) {
  const results = [];
  
  for (const machine of machines) {
    try {
      const result = await apiClient.post('/CreateMachine', machine);
      results.push({ success: true, machine: machine.machineName });
    } catch (error) {
      results.push({ success: false, machine: machine.machineName, error });
    }
  }
  
  return results;
}
```

### Error Handling
```javascript
try {
  const response = await apiClient.post('/CreateQueueItem', payload);
  console.log('Task created:', response.data.taskId);
} catch (error) {
  if (error.response?.status === 401) {
    // Token expired, re-authenticate
    await authenticate();
  } else if (error.response?.data?.errorCode === 'MACHINE_OFFLINE') {
    // Handle specific error
    console.error('Machine is offline');
  } else {
    // Generic error handling
    console.error('API error:', error.response?.data?.error);
  }
}
```