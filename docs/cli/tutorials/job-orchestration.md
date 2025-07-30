# Job Orchestration Workflows

This guide covers creating and managing automated jobs using Rediacc's queue system and repository functions.

## Understanding Jobs in Rediacc

In Rediacc, "jobs" are tasks executed through the queue system. They include:
- Repository operations (backup, restore, sync)
- System maintenance tasks
- Scheduled operations
- Custom automation scripts

## Queue-Based Job Execution

### Creating One-Time Jobs

Execute immediate tasks using queue items:

```bash
# Simple backup job
rediacc-cli create queue-item "Operations" web-server-01 prod-bridge \
  --vault '{
    "function": "repo_push",
    "repository": "webapp",
    "storage": "s3-backups",
    "description": "Daily webapp backup"
  }' \
  --priority 3

# System update job
rediacc-cli create queue-item "Operations" all-servers prod-bridge \
  --vault '{
    "function": "os_update",
    "packages": ["security", "critical"],
    "reboot": false
  }' \
  --priority 2
```

### Monitoring Job Execution

Track job progress and status:

```bash
# List active jobs
rediacc-cli list queue --status PROCESSING

# Check specific job status
rediacc-cli queue trace 550e8400-e29b-41d4-a716-446655440000

# View failed jobs
rediacc-cli list queue --status FAILED --date-from $(date -d '1 day ago' --iso-8601)

# Get job results
rediacc-cli list queue --task-id 550e8400 --output json | jq '.data[0].responseVault'
```

## Scheduled Job Automation

### Setting Up Scheduled Backups

Create recurring backup jobs:

```bash
#!/bin/bash
# setup-backup-schedule.sh

TEAM="Operations"

# Daily application backup
rediacc-cli create schedule "$TEAM" "daily-app-backup" --vault '{
  "cron": "0 2 * * *",
  "timezone": "UTC",
  "machine": "app-server-01",
  "queue_config": {
    "function": "repo_push",
    "repository": "application",
    "storage": "s3-daily-backups",
    "retention_days": 30
  },
  "notifications": {
    "on_failure": "ops-alerts@company.com",
    "on_success": "ops-logs@company.com"
  }
}'

# Weekly full system backup
rediacc-cli create schedule "$TEAM" "weekly-full-backup" --vault '{
  "cron": "0 3 * * 0",
  "timezone": "UTC",
  "machine": "all-servers",
  "queue_config": {
    "function": "repo_push",
    "repository": "full-system",
    "storage": "s3-weekly-backups",
    "compression": "high",
    "retention_days": 90
  }
}'

# Monthly archive
rediacc-cli create schedule "$TEAM" "monthly-archive" --vault '{
  "cron": "0 4 1 * *",
  "timezone": "UTC",
  "machine": "archive-server",
  "queue_config": {
    "function": "repo_push",
    "repository": "complete-archive",
    "storage": "glacier-storage",
    "retention_years": 7
  }
}'
```

### Managing Scheduled Jobs

Control and monitor schedules:

```bash
# List all schedules
rediacc-cli list team-schedules "Operations"

# Disable a schedule temporarily
rediacc-cli update schedule-vault "Operations" "daily-backup" --vault '{
  "enabled": false,
  "disabled_reason": "Maintenance window",
  "disabled_until": "2024-01-15"
}'

# Update schedule timing
rediacc-cli update schedule-vault "Operations" "weekly-backup" --vault '{
  "cron": "0 4 * * 0",  # Changed from 3 AM to 4 AM
  "timezone": "America/New_York"
}'
```

## Repository Job Patterns

### Backup Workflows

Complete backup job implementation:

```bash
#!/bin/bash
# backup-workflow.sh

TEAM="$1"
MACHINE="$2"
REPO="$3"
STORAGE="$4"

echo "Starting backup: $REPO on $MACHINE"

# 1. Create pre-backup snapshot
SNAPSHOT_ID=$(date +%Y%m%d_%H%M%S)
rediacc-cli create queue-item "$TEAM" "$MACHINE" \
  "$(rediacc-cli inspect machine $MACHINE | jq -r .bridgeName)" \
  --vault '{
    "function": "repo_snapshot",
    "repository": "'$REPO'",
    "snapshot_id": "'$SNAPSHOT_ID'"
  }' --priority 2

# 2. Wait for snapshot
sleep 10

# 3. Push to storage
BACKUP_TASK=$(rediacc-cli create queue-item "$TEAM" "$MACHINE" \
  "$(rediacc-cli inspect machine $MACHINE | jq -r .bridgeName)" \
  --vault '{
    "function": "repo_push",
    "repository": "'$REPO'",
    "storage": "'$STORAGE'",
    "snapshot_id": "'$SNAPSHOT_ID'",
    "verify": true
  }' --priority 3 --output json | jq -r '.data[0].taskId')

echo "Backup task created: $BACKUP_TASK"

# 4. Monitor progress
while true; do
  STATUS=$(rediacc-cli list queue --task-id "$BACKUP_TASK" --output json | \
    jq -r '.data[0].status')
  
  case "$STATUS" in
    "COMPLETED")
      echo "Backup completed successfully!"
      break
      ;;
    "FAILED")
      echo "Backup failed!"
      rediacc-cli queue trace "$BACKUP_TASK"
      exit 1
      ;;
    *)
      echo "Status: $STATUS"
      sleep 30
      ;;
  esac
done
```

### Restore Operations

Implement restore workflows:

```bash
#!/bin/bash
# restore-workflow.sh

TEAM="$1"
MACHINE="$2"
REPO="$3"
STORAGE="$4"
RESTORE_POINT="$5"

echo "Starting restore: $REPO from $STORAGE"

# 1. Stop services
rediacc-cli create queue-item "$TEAM" "$MACHINE" \
  "$(rediacc-cli inspect machine $MACHINE | jq -r .bridgeName)" \
  --vault '{
    "function": "repo_down",
    "repository": "'$REPO'"
  }' --priority 1

sleep 10

# 2. Pull from storage
rediacc-cli create queue-item "$TEAM" "$MACHINE" \
  "$(rediacc-cli inspect machine $MACHINE | jq -r .bridgeName)" \
  --vault '{
    "function": "repo_pull",
    "repository": "'$REPO'",
    "storage": "'$STORAGE'",
    "restore_point": "'$RESTORE_POINT'",
    "verify": true
  }' --priority 1

# 3. Start services
rediacc-cli create queue-item "$TEAM" "$MACHINE" \
  "$(rediacc-cli inspect machine $MACHINE | jq -r .bridgeName)" \
  --vault '{
    "function": "repo_up",
    "repository": "'$REPO'"
  }' --priority 1

echo "Restore initiated. Monitor with: rediacc-cli list queue --machine $MACHINE"
```

### Cross-Region Replication

Set up multi-region job replication:

```bash
#!/bin/bash
# setup-replication.sh

SOURCE_REGION="us-east"
TARGET_REGIONS=("us-west" "eu-west")
TEAM="Operations"

# For each critical repository
REPOS=("customer-db" "application" "configurations")

for repo in "${REPOS[@]}"; do
  echo "Setting up replication for: $repo"
  
  # Create replication schedule
  rediacc-cli create schedule "$TEAM" "replicate-$repo" --vault '{
    "cron": "*/30 * * * *",  # Every 30 minutes
    "timezone": "UTC",
    "machine": "replication-master",
    "queue_config": {
      "function": "repo_replicate",
      "source": {
        "repository": "'$repo'",
        "region": "'$SOURCE_REGION'"
      },
      "targets": [
        {
          "region": "us-west",
          "storage": "s3-us-west-'$repo'"
        },
        {
          "region": "eu-west", 
          "storage": "s3-eu-west-'$repo'"
        }
      ],
      "mode": "incremental",
      "verify": true
    }
  }'
done
```

## Complex Job Orchestration

### Multi-Step Job Pipelines

Create complex job workflows:

```bash
#!/bin/bash
# deployment-pipeline.sh

TEAM="DevOps"
ENVIRONMENT="$1"  # staging or production

echo "Starting deployment pipeline for $ENVIRONMENT"

# Step 1: Create deployment tracking
DEPLOYMENT_ID=$(uuidgen)
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Step 2: Backup current state
echo "Backing up current state..."
rediacc-cli create queue-item "$TEAM" "$ENVIRONMENT-web-01" "$ENVIRONMENT-bridge" \
  --vault '{
    "function": "repo_push",
    "repository": "webapp",
    "storage": "deployment-backups",
    "tags": {
      "deployment_id": "'$DEPLOYMENT_ID'",
      "type": "pre-deployment",
      "timestamp": "'$TIMESTAMP'"
    }
  }' --priority 1

# Step 3: Deploy new version
echo "Deploying new version..."
SERVERS=("web-01" "web-02" "web-03")

for server in "${SERVERS[@]}"; do
  rediacc-cli create queue-item "$TEAM" "$ENVIRONMENT-$server" "$ENVIRONMENT-bridge" \
    --vault '{
      "function": "repo_pull",
      "repository": "webapp",
      "storage": "release-artifacts",
      "version": "latest",
      "pre_hook": "stop_services.sh",
      "post_hook": "start_services.sh",
      "health_check": {
        "endpoint": "/health",
        "timeout": 300,
        "retries": 5
      }
    }' --priority 2
done

# Step 4: Run smoke tests
echo "Running smoke tests..."
rediacc-cli create queue-item "$TEAM" "$ENVIRONMENT-test-01" "$ENVIRONMENT-bridge" \
  --vault '{
    "function": "run_tests",
    "test_suite": "smoke",
    "target_env": "'$ENVIRONMENT'",
    "deployment_id": "'$DEPLOYMENT_ID'",
    "notify_on_failure": "deployments@company.com"
  }' --priority 1

echo "Deployment pipeline initiated: $DEPLOYMENT_ID"
```

### Conditional Job Execution

Implement jobs with conditional logic:

```bash
#!/bin/bash
# conditional-backup.sh

# Only backup if changes detected
rediacc-cli create queue-item "Operations" "app-server" "prod-bridge" \
  --vault '{
    "function": "conditional_backup",
    "check_command": "find /app -newer /var/lib/rediacc/last_backup -type f | wc -l",
    "threshold": 1,
    "if_true": {
      "function": "repo_push",
      "repository": "application",
      "storage": "incremental-backups"
    },
    "if_false": {
      "function": "log_message",
      "message": "No changes detected, skipping backup"
    }
  }' --priority 4
```

## Job Monitoring and Management

### Job Dashboard

Create a job monitoring dashboard:

```bash
#!/bin/bash
# job-dashboard.sh

echo "=== Rediacc Job Dashboard ==="
echo "Generated: $(date)"
echo

# Active jobs
echo "## Active Jobs"
rediacc-cli list queue --status PROCESSING --output json | \
  jq -r '.data[] | "\(.machineName): \(.function) (Priority: \(.priority))"'

# Queue depth by priority
echo -e "\n## Queue Depth by Priority"
for priority in 1 2 3 4 5; do
  count=$(rediacc-cli list queue --status PENDING --priority $priority \
    --output json | jq '.data | length')
  echo "Priority $priority: $count jobs"
done

# Recent failures
echo -e "\n## Recent Failures (Last 24h)"
rediacc-cli list queue --status FAILED \
  --date-from $(date -d '24 hours ago' --iso-8601) \
  --output json | jq -r '.data[] | 
  "\(.taskId | .[0:8]): \(.machineName) - \(.function)"' | head -10

# Success rate
echo -e "\n## Success Rate (Last 7 days)"
TOTAL=$(rediacc-cli list queue --include-completed true \
  --date-from $(date -d '7 days ago' --iso-8601) \
  --output json | jq '.data | length')
  
FAILED=$(rediacc-cli list queue --status FAILED \
  --date-from $(date -d '7 days ago' --iso-8601) \
  --output json | jq '.data | length')

SUCCESS_RATE=$(echo "scale=2; (($TOTAL - $FAILED) * 100) / $TOTAL" | bc)
echo "Success Rate: ${SUCCESS_RATE}%"
```

### Job Troubleshooting

Debug and fix failed jobs:

```bash
#!/bin/bash
# troubleshoot-job.sh

TASK_ID="$1"

if [ -z "$TASK_ID" ]; then
  echo "Usage: $0 <task_id>"
  exit 1
fi

echo "Troubleshooting job: $TASK_ID"

# Get job details
JOB_DATA=$(rediacc-cli list queue --task-id "$TASK_ID" --output json | jq '.data[0]')

echo "Job Information:"
echo "$JOB_DATA" | jq '{
  status: .status,
  machine: .machineName,
  bridge: .bridgeName,
  created: .createdDate,
  priority: .priority
}'

# Get execution trace
echo -e "\nExecution Trace:"
rediacc-cli queue trace "$TASK_ID"

# Check if can retry
STATUS=$(echo "$JOB_DATA" | jq -r '.status')
if [ "$STATUS" = "FAILED" ]; then
  echo -e "\nJob failed. Retry? (y/n)"
  read -r response
  
  if [ "$response" = "y" ]; then
    rediacc-cli queue retry "$TASK_ID"
    echo "Retry initiated"
  fi
fi
```

## Best Practices

### Job Design Principles

1. **Idempotency**: Jobs should be safe to retry
2. **Atomicity**: Use transactions where possible
3. **Monitoring**: Include health checks and notifications
4. **Timeouts**: Set reasonable execution timeouts
5. **Priority**: Use appropriate priority levels

### Priority Guidelines

```bash
Priority 1: Critical production issues
Priority 2: Important scheduled tasks
Priority 3: Regular operations (default)
Priority 4: Batch processing
Priority 5: Low priority maintenance
```

### Error Handling

```json
{
  "function": "backup_with_retry",
  "max_retries": 3,
  "retry_delay": 300,
  "on_failure": {
    "notify": ["ops@company.com"],
    "fallback_function": "backup_to_secondary"
  },
  "timeout": 3600
}
```

## Related Guides
- [Infrastructure Setup](./infrastructure-setup.md)
- [Team Management Workflow](./team-management-workflow.md)
- [API Reference: Queue Commands](../api-reference/queue-commands.md)
- [API Reference: Schedule Commands](../api-reference/create-commands.md#create-schedule)
- [API Reference: Queue Functions](../api-reference/queue-functions.md)