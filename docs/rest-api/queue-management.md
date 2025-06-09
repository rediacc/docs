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

Retrieves a list of queue items with advanced filtering options. Supports filtering by multiple teams, machines, bridges, status, priority, date ranges, and more.

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
  "teamName": "Engineering Team,DevOps Team",  // Optional - comma-separated team names
  "machineName": "Web Server 1",               // Optional - filter by specific machine
  "bridgeName": "London Bridge",               // Optional - filter by bridge
  "status": "PENDING,ASSIGNED",                // Optional - comma-separated status values
  "priority": 2,                               // Optional - specific priority (1-5, Premium/Elite only)
  "minPriority": 1,                            // Optional - minimum priority (Premium/Elite only)
  "maxPriority": 3,                            // Optional - maximum priority (Premium/Elite only)
  "dateFrom": "2025-01-01T00:00:00",          // Optional - filter by date range start
  "dateTo": "2025-12-31T23:59:59",            // Optional - filter by date range end
  "taskId": "7f5040b0-a0c7-4a08-9176-bdc386bd9bd4",  // Optional - search for specific task
  "includeCompleted": true,                    // Optional - include completed items (default: true)
  "includeCancelled": true,                    // Optional - include cancelled items (default: true)
  "onlyStale": false,                          // Optional - show only stale items (default: false)
  "staleThresholdMinutes": 10,                // Optional - custom stale threshold (default: 10)
  "maxRecords": 1000                           // Optional - limit records (default: 1000, max: 10000)
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
          "taskId": "7f5040b0-a0c7-4a08-9176-bdc386bd9bd4",
          "createdTime": "2025-05-03T15:30:45.123Z",
          "ageInMinutes": 125,
          "vaultVersion": 1,
          "vaultContent": "{\"jobType\":\"deployment\",\"package\":\"app-v1.2.3\",\"settings\":{...}}",
          "vaultVersionResponse": 1,
          "vaultContentResponse": "{\"status\":\"success\",\"details\":\"Deployment completed\",\"logs\":{...}}",
          "machineName": "Web Server 1",
          "bridgeName": "London Bridge",
          "teamName": "Engineering Team",
          "regionName": "US East",
          "status": "COMPLETED",
          "assignedTime": "2025-05-03T15:31:00.000Z",
          "lastHeartbeat": "2025-05-03T15:35:30.000Z",
          "minutesSinceHeartbeat": null,
          "priority": 2,                    // Only visible for Premium/Elite subscriptions
          "priorityLabel": "High",          // Only visible for Premium/Elite subscriptions
          "healthStatus": "COMPLETED",      // PENDING, ACTIVE, COMPLETED, CANCELLED, STALE, UNKNOWN
          "canBeCancelled": 0,              // 1 if item can be cancelled, 0 otherwise
          "hasResponse": 1                  // 1 if response exists, 0 otherwise
        }
      ]
    },
    {
      "resultSetIndex": 1,
      "data": [
        {
          "totalCount": 150,
          "pendingCount": 25,
          "assignedCount": 10,
          "processingCount": 5,
          "completedCount": 100,
          "cancelledCount": 5,
          "staleCount": 5           // Items with no heartbeat for > staleThresholdMinutes
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Available Status Values

- `PENDING` - Queue item created but not yet assigned
- `ASSIGNED` - Assigned to a processing agent
- `PROCESSING` - Currently being processed
- `COMPLETED` - Successfully completed
- `CANCELLED` - Cancelled before completion

### Health Status Values

- `PENDING` - Waiting to be processed
- `ACTIVE` - Currently assigned or processing
- `COMPLETED` - Successfully completed
- `CANCELLED` - Cancelled
- `STALE` - No heartbeat received for longer than threshold
- `UNKNOWN` - Unknown status

### Priority Levels (Premium/Elite Only)

- `1` - Highest
- `2` - High
- `3` - Normal (default)
- `4` - Low
- `5` - Lowest

### Business Rules

- The requesting user must be a member of all specified teams.
- If a machine name is provided, it must exist in one of the accessible teams.
- If a bridge name is provided, it must exist in the user's company.
- Priority filtering and display is only available for Premium and Elite subscriptions.
- For Community and Advanced subscriptions, priority fields return null.
- Queue items are sorted by priority (if available) then by creation time descending.
- The vault content is decrypted using the company passphrase.
- Maximum of 10,000 records can be returned in a single request.
- Stale items are those in ASSIGNED or PROCESSING status with no heartbeat for longer than the threshold.

## Get Next Queue Items

Retrieves pending queue items (items without responses) for a specific machine or bridge. This is typically used by processing agents to find jobs that need to be executed.

### Endpoint

```
POST /api/StoredProcedure/GetQueueItemsNext
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
