# Queue

Queue operations.

## Table of Contents

- [cancel](#cancel)
- [complete](#complete)
- [get-next](#get-next)
- [list](#list)
- [retry](#retry)
- [trace](#trace)
- [update-response](#update-response)


## cancel

Cancel a pending or processing queue item

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CancelQueueItem`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Marks a queue item as cancelled, preventing further processing. If already processing, the bridge will attempt to stop execution gracefully. Completed items cannot be cancelled.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `task_id` | Task ID (GUID) to cancel | true | 550e8400-e29b-41d4-a716-446655440000 |
| `force` | Skip confirmation prompt | false | --force |

#### Examples

```bash
rediacc-cli queue cancel 550e8400-e29b-41d4-a716-446655440000
```
Cancel with confirmation

```bash
rediacc-cli queue cancel 550e8400-e29b-41d4-a716-446655440000 --force
```
Cancel without confirmation

#### Notes

Cancellation is immediate for PENDING items. PROCESSING items may continue briefly while the bridge stops gracefully. Check status after cancelling.

#### Business Rules

- Requires team member or higher permissions
- Can only cancel items from your team's queue
- Cannot cancel COMPLETED or FAILED items
- PENDING items are cancelled immediately
- ASSIGNED items are unassigned from bridge
- PROCESSING items receive cancellation signal
- Bridge may complete current operation before stopping
- Cancelled items are marked with CANCELLED status
- Cancellation is logged in queue item history
- Associated resources may need manual cleanup


## complete

Mark a queue item as completed

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateQueueItemToCompleted`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Marks a processing queue item as successfully completed with optional result data. Used by bridges to finalize task execution.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `task_id` | Task ID (GUID) to complete | true | 550e8400-e29b-41d4-a716-446655440000 |
| `vault` | JSON result data to store | false | `{"status": "success", "output": "Task completed"}` |
| `vault-file` | File containing result data | false | results.json |

#### Examples

```bash
rediacc-cli queue complete 550e8400-e29b-41d4-a716-446655440000
```
Mark task as completed

```bash
rediacc-cli queue complete 550e8400 --vault '{"status":"success"}'
```
Complete with result data

#### Notes

Typically used by bridges. Item must be in PROCESSING state. Result vault is encrypted and stored.

#### Business Rules

- Requires authentication with appropriate permissions
- Task must exist and belong to accessible team
- Task must be in PROCESSING or ASSIGNED state
- Cannot complete already COMPLETED or FAILED tasks
- Final vault data is encrypted before storage
- Completion time is recorded automatically
- Status changes to COMPLETED immediately
- Triggers any dependent operations
- Completion is logged in task history
- Bridge that processed task is recorded


## get-next

Get next queue items for processing

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetQueueItemsNext`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Retrieves and assigns the next available queue items to the caller. Used by bridges to fetch work. Items are automatically marked as ASSIGNED.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `count` | Number of items to retrieve (default: 3) | false | 5 |

#### Examples

```bash
rediacc-cli queue get-next
```
Get next 3 items (default)

```bash
rediacc-cli queue get-next --count 10
```
Get up to 10 items

#### Notes

Designed for bridges. Items are assigned to caller's identity. Returns empty array if no items available.

#### Business Rules

- Requires bridge or administrative authentication
- Returns only PENDING items from accessible teams
- Items are immediately marked as ASSIGNED
- Assignment prevents other bridges from taking items
- Respects queue priority ordering (1 is highest)
- Maximum count is typically limited to 10
- Returns fewer items if not enough available
- Caller identity is recorded on assigned items
- Items expire if not completed within timeout
- Load balances across available bridges


## list

List queue items with various filters

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamQueueItems`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

View queue items across teams with powerful filtering options. Monitor task status, find stuck items, analyze performance, and track execution history.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Filter by team name(s), comma-separated | false | prod,staging |
| `machine` | Filter by specific machine | false | web-server-01 |
| `bridge` | Filter by specific bridge | false | us-east-bridge |
| `status` | Filter by status (PENDING,ASSIGNED,PROCESSING,COMPLETED,FAILED,CANCELLED) | false | PENDING,PROCESSING |
| `priority` | Filter by exact priority (1-5) | false | 1 |
| `min-priority` | Minimum priority filter | false | 1 |
| `max-priority` | Maximum priority filter | false | 3 |
| `date-from` | Start date (ISO format) | false | 2024-01-01T00:00:00Z |
| `date-to` | End date (ISO format) | false | 2024-01-31T23:59:59Z |
| `task-id` | Search for specific task ID | false | 550e8400-e29b-41d4-a716-446655440000 |
| `no-completed` | Exclude completed items | false | --no-completed |
| `no-cancelled` | Exclude cancelled items | false | --no-cancelled |
| `only-stale` | Show only stale/stuck items | false | --only-stale |
| `stale-threshold` | Minutes to consider item stale (default: 10) | false | 30 |
| `max-records` | Maximum records (default: 1000, max: 10000) | false | 500 |

#### Examples

```bash
rediacc-cli queue list --status PENDING,PROCESSING
```
Show active queue items

```bash
rediacc-cli queue list --only-stale --stale-threshold 60
```
Find items stuck for over an hour

```bash
rediacc-cli queue list --team prod --priority 1 --no-completed
```
Show high priority items for production

#### Notes

Default includes all statuses. Stale detection helps find stuck items. Use date filters for historical analysis.

#### Business Rules

- Requires team member or higher permissions
- Shows queue items for specified team only
- Default limit is 100 items, use --limit to change
- Items are sorted by creation time (newest first)
- Can filter by status: PENDING, ASSIGNED, PROCESSING, COMPLETED, FAILED
- Can filter by specific machine or bridge
- Completed items are retained for 30 days
- Shows task ID, status, priority, and timestamps
- Response data is decrypted if master password is set
- High-priority items (1-2) are highlighted in output


## retry

Retry a failed queue item

#### API Information

**Endpoint:** `POST /api/StoredProcedure/RetryFailedQueueItem`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Creates a new queue item with the same configuration as a failed item. The original item's status remains FAILED. Useful for transient failures or after fixing issues.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `task_id` | Task ID (GUID) of failed item to retry | true | 550e8400-e29b-41d4-a716-446655440000 |

#### Examples

```bash
rediacc-cli queue retry 550e8400-e29b-41d4-a716-446655440000
```
Retry a failed task

```bash
rediacc-cli queue list --status FAILED --output json | jq -r '.[].taskId' | xargs -I {} rediacc-cli queue retry {}
```
Retry all failed tasks

#### Notes

Only FAILED items can be retried. Creates a new item with same priority and configuration. Check failure reason before retrying to avoid repeated failures.

#### Business Rules

- Requires team member or higher permissions
- Can only retry FAILED or CANCELLED items
- Original item must belong to your team
- Creates new queue item with fresh task ID
- Copies all parameters from original item
- Resets retry count to zero
- New item gets default priority unless specified
- Original failed item is not modified
- Links to original item for audit trail
- May fail again if underlying issue not resolved


## trace

Get execution trace for a queue item

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetQueueItemTrace`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Retrieves detailed execution history and logs for a specific queue item, including all state changes, assignments, and bridge interactions.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `task_id` | Task ID (GUID) to trace | true | 550e8400-e29b-41d4-a716-446655440000 |

#### Examples

```bash
rediacc-cli queue trace 550e8400-e29b-41d4-a716-446655440000
```
Get full trace for task

```bash
rediacc-cli queue trace 550e8400 --output json | jq '.logs'
```
Extract logs from trace

#### Notes

Shows complete task lifecycle. Useful for debugging failed tasks or monitoring execution progress.

#### Business Rules

- Requires team member or higher permissions
- Task must belong to accessible team
- Shows all state transitions with timestamps
- Includes bridge assignment history
- Contains any error messages or stack traces
- Shows intermediate responses from updates
- Displays retry attempts if any
- Includes cancellation information if cancelled
- Vault data shown if master password is set
- Access is logged in audit trail


## update-response

Update progress/status of a processing queue item

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateQueueItemResponse`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Updates a queue item with intermediate results or progress information while it's being processed. Used by bridges to report progress.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `task_id` | Task ID (GUID) to update | true | 550e8400-e29b-41d4-a716-446655440000 |
| `vault` | JSON progress data | false | `{"progress": 50, "status": "Processing file 2 of 4"}` |
| `vault-file` | File containing progress data | false | progress.json |

#### Examples

```bash
rediacc-cli queue update-response 550e8400 --vault '{"progress":25}'
```
Update task progress to 25%

```bash
rediacc-cli queue update-response 550e8400 --vault-file status.json
```
Update from status file

#### Notes

Used by bridges during task execution. Can be called multiple times. Does not change task state.

#### Business Rules

- Requires bridge or administrative authentication
- Task must be assigned to caller (for bridges)
- Task must be in ASSIGNED or PROCESSING state
- Response vault is encrypted before storage
- Updates are appended to task history
- Does not change overall task status
- Useful for long-running operations
- Each update includes timestamp
- Previous responses are preserved
- Can be used to stream output data

