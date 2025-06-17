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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "machineName": "string",
  "queueVault": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "time": "datetime",
          "machineName": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "queueId": "number",
  "responseVault": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "time": "datetime",
          "machineName": "string",
          "result": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "queueId": "number",
  "responseVault": "string",
  "vaultVersion": "number"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "time": "datetime",
          "machineName": "string",
          "responseVaultVersion": "number",
          "result": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "queueId": "number"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "queueId": "number",
          "result": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",  // Optional - comma-separated team names
  "machineName": "string",               // Optional - filter by specific machine
  "bridgeName": "string",               // Optional - filter by bridge
  "status": "string",                // Optional - comma-separated status values
  "priority": "number",                               // Optional - specific priority (1-5, Premium/Elite only)
  "minPriority": "number",                            // Optional - minimum priority (Premium/Elite only)
  "maxPriority": "number",                            // Optional - maximum priority (Premium/Elite only)
  "dateFrom": "datetime",          // Optional - filter by date range start
  "dateTo": "datetime",            // Optional - filter by date range end
  "taskId": "string",  // Optional - search for specific task
  "includeCompleted": "boolean",                    // Optional - include completed items (default: true)
  "includeCancelled": "boolean",                    // Optional - include cancelled items (default: true)
  "onlyStale": "boolean",                          // Optional - show only stale items (default: false)
  "staleThresholdMinutes": "number",                // Optional - custom stale threshold (default: 10)
  "maxRecords": "number"                           // Optional - limit records (default: 1000, max: 10000)
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "taskId": "string",
          "createdTime": "datetime",
          "ageInMinutes": "number",
          "vaultVersion": "number",
          "vaultContent": "string",
          "vaultVersionResponse": "number",
          "vaultContentResponse": "string",
          "machineName": "string",
          "bridgeName": "string",
          "teamName": "string",
          "regionName": "string",
          "status": "string",
          "assignedTime": "datetime",
          "lastHeartbeat": "datetime",
          "minutesSinceHeartbeat": "number",
          "priority": "number",                    // Only visible for Premium/Elite subscriptions
          "priorityLabel": "string",          // Only visible for Premium/Elite subscriptions
          "healthStatus": "string",      // PENDING, ACTIVE, COMPLETED, CANCELLED, STALE, UNKNOWN
          "canBeCancelled": "number",              // 1 if item can be cancelled, 0 otherwise
          "hasResponse": "number"                  // 1 if response exists, 0 otherwise
        }
      ]
    },
    {
      "resultSetIndex": 2,
      "data": [
        {
          "totalCount": "number",
          "pendingCount": "number",
          "assignedCount": "number",
          "processingCount": "number",
          "completedCount": "number",
          "cancelledCount": "number",
          "staleCount": "number"           // Items with no heartbeat for > staleThresholdMinutes
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "machineName": "string",  // Either machineName or bridgeName must be provided, but not both
  "bridgeName": "string",
  "itemCount": "number"                  // Maximum number of items to retrieve
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "time": "datetime",
          "vaultVersion": "number",
          "vaultContent": "string",
          "machineName": "string",
          "bridgeName": "string",
          "teamName": "string"
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

## Cancel Queue Item

Cancels a pending or assigned queue item, preventing it from being processed.

### Endpoint

```
POST /api/StoredProcedure/CancelQueueItem
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "queueId": "number",
  "reason": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "queueId": "number",
          "status": "string",
          "cancelledTime": "datetime",
          "cancelledBy": "string"
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
- Only items in PENDING or ASSIGNED status can be cancelled.
- Items that are already COMPLETED, CANCELLED, or PROCESSING cannot be cancelled.
- The cancellation reason is stored for audit purposes.

## Retry Failed Queue Item

Creates a new queue item based on a previously failed or cancelled item.

### Endpoint

```
POST /api/StoredProcedure/RetryFailedQueueItem
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "originalQueueId": "number",
  "modifiedVault": "string"  // Optional - provide new vault content or null to use original
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "newQueueId": "number",
          "time": "datetime",
          "machineName": "string",
          "originalQueueId": "number"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The original queue item must exist and be in a failed or cancelled state.
- If modifiedVault is provided, it must be valid JSON.
- If modifiedVault is null, the original vault content is used.
- The new queue item inherits the machine assignment from the original.
- Priority is preserved if applicable (Premium/Elite subscriptions).

## Get Queue Item Trace

Retrieves detailed tracing information for a specific queue item, including all state transitions and heartbeats.

### Endpoint

```
POST /api/StoredProcedure/GetQueueItemTrace
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "queueId": "number"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "timestamp": "datetime",
          "event": "string",
          "details": "string",
          "actor": "string"
        },
        {
          "timestamp": "datetime",
          "event": "string",
          "details": "string",
          "actor": "string"
        },
        {
          "timestamp": "datetime",
          "event": "string",
          "details": "string",
          "actor": "string"
        },
        {
          "timestamp": "datetime",
          "event": "string",
          "details": "string",
          "actor": "string"
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
- Returns all events in chronological order.
- Includes creation, assignment, heartbeats, status changes, and completion/cancellation.

## Update Queue Item to Completed

Marks a queue item as completed with a final response. This is typically used by processing agents to indicate successful job completion.

### Endpoint

```
POST /api/StoredProcedure/UpdateQueueItemToCompleted
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "queueId": "number",
  "responseVault": "string",
  "completionStatus": "string"  // SUCCESS, FAILED, PARTIAL
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "queueId": "number",
          "status": "string",
          "completedTime": "datetime",
          "processingDurationMinutes": "number"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The queue item must exist and be in ASSIGNED or PROCESSING status.
- The response vault content must be valid JSON.
- The completion status helps track success rates and partial failures.
- Processing duration is automatically calculated from assignment time.
