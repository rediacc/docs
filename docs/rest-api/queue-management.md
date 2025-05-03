---
sidebar_position: 9
---

# Queue Management

The queue system provides a mechanism for assigning tasks or jobs to machines. Each queue item is associated with a machine and can have both a request vault (containing the job request) and a response vault (containing the job result).

## Create Queue Item

Creates a new queue item for a specific machine.

### Endpoint

```
POST /api/StoredProcedure/CreateQueueItem
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "machineName": "Web Server 1",
  "queueVault": "{\"jobType\":\"deployment\",\"package\":\"app-v1.2.3\",\"settings\":{...}}"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "time": "2025-05-03T15:30:45.123Z",
          "machineName": "Web Server 1"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The machine must exist in the specified team.
- The queue vault content must be valid JSON.
- The item is automatically timestamped when created.
- Queue information is stored with encryption for security.

## Add Queue Item Response

Adds a response to an existing queue item, typically when a job is completed.

### Endpoint

```
POST /api/StoredProcedure/AddQueueItemResponse
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "queueId": 42,
  "responseVault": "{\"status\":\"success\",\"details\":\"Deployment completed\",\"logs\":{...}}"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "time": "2025-05-03T15:30:45.123Z",
          "machineName": "Web Server 1",
          "result": "Response added successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The queue item must exist and be associated with a machine in the specified team.
- The queue item must not already have a response.
- The response vault content must be valid JSON.
- The response is stored with the same credential as the original queue item, but with a different vault name.

## Update Queue Item Response

Updates the response of a queue item that already has a response.

### Endpoint

```
POST /api/StoredProcedure/UpdateQueueItemResponse
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "queueId": 42,
  "responseVault": "{\"status\":\"success\",\"details\":\"Deployment completed with warnings\",\"logs\":{...}}",
  "vaultVersion": 1
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "time": "2025-05-03T15:30:45.123Z",
          "machineName": "Web Server 1",
          "responseVaultVersion": 2,
          "result": "Response updated successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The queue item must exist and be associated with a machine in the specified team.
- The queue item must already have a response.
- The response vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Queue Item

Removes a queue item and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteQueueItem
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "queueId": 42
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The queue item must exist and be associated with a machine in the specified team.
- Both the request vault and the response vault (if it exists) are securely deleted when the queue item is removed.

## Get Team Queue Items

Retrieves a list of all queue items for a team, optionally filtered by machine.

### Endpoint

```
POST /api/StoredProcedure/GetTeamQueueItems
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "machineName": "Web Server 1"  // Optional - if omitted, returns queue items for all machines in the team
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "time": "2025-05-03T15:30:45.123Z",
          "vaultVersion": 1,
          "vaultContent": "{\"jobType\":\"deployment\",\"package\":\"app-v1.2.3\",\"settings\":{...}}",
          "responseContent": "{\"status\":\"success\",\"details\":\"Deployment completed with warnings\",\"logs\":{...}}",
          "machineName": "Web Server 1",
          "bridgeName": "London Bridge",
          "teamName": "Engineering Team"
        },
        {
          "time": "2025-05-03T16:45:12.456Z",
          "vaultVersion": 1,
          "vaultContent": "{\"jobType\":\"backup\",\"target\":\"database\",\"settings\":{...}}",
          "responseContent": null,
          "machineName": "Web Server 1",
          "bridgeName": "London Bridge",
          "teamName": "Engineering Team"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- If a machine name is provided, only queue items for that machine are returned.
- The response includes both the request vault content and the response vault content (if it exists).
- Queue items are sorted by time in descending order (newest first).
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.

## Get Next Queue Items

Retrieves pending queue items (items without responses) for a specific machine or bridge. This is typically used by processing agents to find jobs that need to be executed.

### Endpoint

```
POST /api/StoredProcedure/GetNextQueueItems
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "machineName": "Web Server 1",  // Either machineName or bridgeName must be provided, but not both
  "bridgeName": null,
  "itemCount": 1                  // Maximum number of items to retrieve
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "time": "2025-05-03T16:45:12.456Z",
          "vaultVersion": 1,
          "vaultContent": "{\"jobType\":\"backup\",\"target\":\"database\",\"settings\":{...}}",
          "machineName": "Web Server 1",
          "bridgeName": "London Bridge",
          "teamName": "Engineering Team"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must have access to the specified machine (be a member of the team that owns the machine).
- Either a machine name or a bridge name must be provided, but not both.
- If a bridge name is provided, the user must have access to at least one machine in that bridge.
- Only queue items without responses are returned.
- Queue items are sorted by time in ascending order (oldest first).
- If no pending queue items are found, a message is returned instead of an empty result set.
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.
