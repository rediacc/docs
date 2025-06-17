# Queue Management

The queue system enables job execution on machines through bash functions. Queue items can be created with specific priorities, tracked through their lifecycle, and completed with response data.

## Overview

Queue operations include:
- **Queue Item Creation**: Create jobs for machines with bash functions
- **Function Management**: Execute predefined bash functions with parameters
- **Priority Control**: Set execution priority (1-5, Premium/Elite only)
- **Response Tracking**: Update and complete queue items with results
- **Next Item Retrieval**: Get pending items for processing

## Creating Queue Items

### Basic Queue Item

```bash
# Create a simple queue item
rediacc-cli create queue-item "Development" "web-server-1" "bridge-1" \
  --vault '{"type": "deployment", "version": "1.2.3"}'

# Create with priority (Premium/Elite subscriptions)
rediacc-cli create queue-item "Production" "prod-server" "prod-bridge" \
  --priority 1 \
  --vault '{"urgent": true, "task": "hotfix"}'
```

### Using Bash Functions

The CLI supports creating queue items with predefined bash functions:

```bash
# Add a bash function to the queue
rediacc-cli queue add "Development" "web-server-1" "bridge-1" hello

# Add with parameters
rediacc-cli queue add "Development" "web-server-1" "bridge-1" os_setup \
  --datastore-size "100G" \
  --source "custom-repo"

# Add with description and priority
rediacc-cli queue add "Production" "db-server" "prod-bridge" repo_new \
  --repo "myapp" \
  --size "50G" \
  --description "Create new repository for application" \
  --priority 2
```

## Available Bash Functions

### List All Functions

```bash
# List available queue functions
rediacc-cli queue list-functions

# JSON output with full details
rediacc-cli queue list-functions --output json
```

### Machine Functions

#### os_setup
Setup operating system with required tools and configurations.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" os_setup \
  --datastore-size "95%" \
  --source "apt-repo"
```

Parameters:
- `datastore_size` (optional): Datastore size (default: 95%)
- `source` (optional): Package source (default: apt-repo)

#### hello
Simple test function that prints hello from hostname.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" hello
```

#### uninstall
Cleanup and uninstall system components.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" uninstall
```

### Repository Management

#### repo_new
Create a new repository.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_new \
  --repo "myapp" \
  --size "20G"
```

Parameters:
- `repo` (required): Repository name
- `size` (required): Repository size (e.g., 10G)

#### repo_mount
Mount repository filesystems.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_mount \
  --repo "app1,app2" \
  --from "remote-server"
```

Parameters:
- `repo` (required): Repository name(s), comma-separated
- `from` (optional): Remote machine to mount from

#### repo_up
Start repository services using Rediaccfile.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_up \
  --repo "myapp" \
  --option "prep-only"
```

Parameters:
- `repo` (required): Repository name(s)
- `option` (optional): Options (e.g., prep-only)

#### repo_down
Stop repository services.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_down \
  --repo "myapp"
```

#### repo_resize
Resize repository storage.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_resize \
  --repo "myapp" \
  --size "50G"
```

#### repo_rm
Delete repository.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_rm \
  --repo "old-app"
```

### Backup Operations

#### repo_push
Push repository to remote storage.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_push \
  --repo "myapp" \
  --dest "myapp-backup-2024" \
  --to "backup-server" \
  --state "offline"
```

Parameters:
- `repo` (required): Repository name(s)
- `dest` (required): Destination filename
- `to` (optional): Destination machine/storage
- `state` (optional): Required repository state (online/offline)
- `option` (optional): Options (e.g., override)

#### repo_pull
Pull repository from remote storage.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_pull \
  --from "backup-server" \
  --repo "myapp"
```

Parameters:
- `from` (required): Source machine/storage
- `repo` (required): Repository name(s)

### Plugin Management

#### repo_plugin
Activate repository plugins.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_plugin \
  --repo "myapp" \
  --plugin "monitoring,logging"
```

#### repo_plugout
Deactivate repository plugins.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_plugout \
  --repo "myapp" \
  --plugin "old-plugin"
```

### Advanced Operations

#### repo_ownership
Change repository ownership.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" repo_ownership \
  --repo "myapp" \
  --from "user1" \
  --to "user2"
```

#### map_socket
Map socket from remote machine.

```bash
rediacc-cli queue add "Dev" "server-1" "bridge-1" map_socket \
  --machine "remote-server" \
  --repo "myapp" \
  --plugin "websocket"
```

## Processing Queue Items

### Get Next Items

```bash
# Get next queue item for processing
rediacc-cli queue get-next

# Get multiple items
rediacc-cli queue get-next --count 5

# JSON output
rediacc-cli queue get-next --output json
```

### Update Response

```bash
# Update queue item with response
rediacc-cli queue update-response TASK-ID-123 \
  --vault '{"status": "processing", "progress": 50}'

# Update from file
rediacc-cli queue update-response TASK-ID-123 \
  --vault-file response.json
```

### Complete Queue Item

```bash
# Mark queue item as completed
rediacc-cli queue complete TASK-ID-123 \
  --vault '{"status": "success", "output": "Task completed"}'

# Complete with detailed results
rediacc-cli queue complete TASK-ID-123 \
  --vault-file final-results.json
```

## Viewing Queue Items

### List Queue Items

List queue items with advanced filtering options:

```bash
# List all queue items for a team
rediacc-cli queue list "Development"

# List items for multiple teams
rediacc-cli queue list "Development,Production"

# Filter by machine
rediacc-cli queue list "Development" --machine "web-server-1"

# Filter by bridge
rediacc-cli queue list "Development" --bridge "bridge-1"

# Filter by status
rediacc-cli queue list "Development" --status "PENDING,ASSIGNED"

# Filter by priority (Premium/Elite only)
rediacc-cli queue list "Production" --priority 1
rediacc-cli queue list "Production" --min-priority 1 --max-priority 3

# Filter by date range
rediacc-cli queue list "Development" \
  --date-from "2025-01-01T00:00:00" \
  --date-to "2025-01-31T23:59:59"

# Search for specific task
rediacc-cli queue list "Development" --task-id "7f5040b0-a0c7-4a08-9176-bdc386bd9bd4"

# Exclude completed/cancelled items
rediacc-cli queue list "Development" --no-completed --no-cancelled

# Show only stale items
rediacc-cli queue list "Development" --only-stale --stale-threshold 30

# Limit number of records
rediacc-cli queue list "Development" --max-records 50

# JSON output with full details
rediacc-cli queue list "Development" --output json
```

### Queue Status Values

- `PENDING` - Queue item created but not yet assigned
- `ASSIGNED` - Assigned to a processing agent
- `PROCESSING` - Currently being processed
- `COMPLETED` - Successfully completed
- `CANCELLED` - Cancelled before completion

### Queue Health Status

The system automatically calculates health status:
- `PENDING` - Waiting to be processed
- `ACTIVE` - Currently assigned or processing
- `COMPLETED` - Successfully completed
- `CANCELLED` - Cancelled
- `STALE` - No heartbeat for longer than threshold (default: 10 minutes)
- `UNKNOWN` - Unknown status

## Managing Queue Items

### Delete Queue Item

```bash
# Delete a queue item
rediacc-cli rm queue-item TASK-ID-123

# Force delete without confirmation
rediacc-cli rm queue-item TASK-ID-123 --force
```

## Vault Data Structure

Queue items use vault data to store job information:

```json
{
  "type": "bash_function",
  "function": "repo_new",
  "params": {
    "repo": "myapp",
    "size": "20G"
  },
  "description": "Create new repository for application",
  "priority": 3,
  "bridge": "bridge-1"
}
```

### Custom Vault Data

For non-function queue items:

```json
{
  "jobType": "custom",
  "action": "database-backup",
  "settings": {
    "database": "production",
    "compression": true,
    "encryption": "AES256"
  }
}
```

## Priority Levels

Queue items support 5 priority levels:
- **1**: Highest priority
- **2**: High priority
- **3**: Normal priority (default)
- **4**: Low priority
- **5**: Lowest priority

:::info Subscription Requirement
Priority settings require Premium or Elite subscriptions. Community and Advanced plans use default priority (3).
:::

## Examples

### Complete Deployment Pipeline

```bash
#!/bin/bash
# Automated deployment pipeline

# 1. Create new repository
TASK1=$(rediacc-cli queue add "Production" "app-server" "prod-bridge" repo_new \
  --repo "release-v2" \
  --size "30G" \
  --priority 1 \
  --output json | jq -r '.task_id')

echo "Created repository task: $TASK1"

# 2. Pull code from backup
TASK2=$(rediacc-cli queue add "Production" "app-server" "prod-bridge" repo_pull \
  --from "backup-server" \
  --repo "release-v2" \
  --priority 1 \
  --output json | jq -r '.task_id')

echo "Created pull task: $TASK2"

# 3. Start services
TASK3=$(rediacc-cli queue add "Production" "app-server" "prod-bridge" repo_up \
  --repo "release-v2" \
  --priority 2 \
  --output json | jq -r '.task_id')

echo "Created startup task: $TASK3"
```

### Batch Operations

```bash
#!/bin/bash
# Process multiple repositories

REPOS="app1,app2,app3"
MACHINES=("web-1" "web-2" "web-3")

for machine in "${MACHINES[@]}"; do
  # Create backup tasks
  rediacc-cli queue add "Production" "$machine" "prod-bridge" repo_push \
    --repo "$REPOS" \
    --to "backup-server" \
    --description "Nightly backup for $machine" \
    --priority 4
done
```

### Queue Monitoring

```bash
#!/bin/bash
# Monitor queue processing

while true; do
  # Get next items
  ITEMS=$(rediacc-cli queue get-next --count 3 --output json)
  
  if [ "$(echo $ITEMS | jq '.data | length')" -eq 0 ]; then
    echo "No pending items"
    sleep 30
    continue
  fi
  
  # Process each item
  echo "$ITEMS" | jq -r '.data[] | .taskId' | while read TASK_ID; do
    echo "Processing $TASK_ID"
    # Simulate processing
    sleep 5
    
    # Complete the task
    rediacc-cli queue complete "$TASK_ID" \
      --vault "{\"status\": \"success\", \"processed_at\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}"
  done
done
```

### Advanced Queue Monitoring

```bash
#!/bin/bash
# Advanced monitoring with filtering

# Check for stale high-priority items
echo "=== Checking for stale high-priority items ==="
rediacc-cli queue list "Production" \
  --only-stale \
  --min-priority 1 \
  --max-priority 2 \
  --output json | jq -r '.tables[0].data[] | "\(.taskId) - \(.machineName) - Stale for \(.minutesSinceHeartbeat) minutes"'

# Get queue statistics for multiple teams
echo -e "\n=== Queue Statistics ==="
rediacc-cli queue list "Development,Production,QA" \
  --output json | jq -r '.tables[1].data[0] | 
  "Total: \(.totalCount)
  Pending: \(.pendingCount)
  Active: \(.assignedCount + .processingCount)
  Completed: \(.completedCount)
  Cancelled: \(.cancelledCount)
  Stale: \(.staleCount)"'

# Monitor specific bridges
echo -e "\n=== Bridge Status ==="
for bridge in "prod-bridge" "dev-bridge" "qa-bridge"; do
  COUNT=$(rediacc-cli queue list "Development,Production,QA" \
    --bridge "$bridge" \
    --status "PENDING,ASSIGNED,PROCESSING" \
    --output json | jq -r '.tables[0].data | length')
  echo "$bridge: $COUNT active items"
done

# Check today's completed high-priority tasks
echo -e "\n=== Today's Completed High-Priority Tasks ==="
rediacc-cli queue list "Production" \
  --status "COMPLETED" \
  --max-priority 2 \
  --date-from "$(date -u +%Y-%m-%d)T00:00:00" \
  --output json | jq -r '.tables[0].data[] | "\(.taskId) - \(.priorityLabel) - \(.machineName)"'
```

## Best Practices

### Function Selection
- Use appropriate functions for the task
- Provide all required parameters
- Test functions in development first
- Document custom vault structures

### Priority Management
- Reserve priority 1 for critical operations
- Use priority 3 (default) for routine tasks
- Schedule low-priority tasks during off-hours
- Monitor high-priority queue depth

### Error Handling
- Always check task creation response
- Implement retry logic for failures
- Log queue operations for audit
- Monitor queue processing times

### Security
- Sanitize vault data inputs
- Don't store credentials in vault data
- Use secure machine/bridge combinations
- Regularly audit queue access

## Troubleshooting

### Common Issues

**Task Creation Failed:**
```
Error: API Error: Machine not found in team
```
Solution: Verify machine exists and you have access to the team.

**Invalid Vault Data:**
```
Error: API Error: Invalid JSON in vault data
```
Solution: Ensure vault data is valid JSON format.

**Permission Denied:**
```
Error: API Error: User is not a member of the specified team
```
Solution: Verify team membership or request access.

### Debug Commands

```bash
# Check if machine exists
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development")'

# Verify bridge access
rediacc-cli list bridges "us-east" --output json

# Test queue connectivity
rediacc-cli queue get-next --count 1
```