---
sidebar_position: 35
---

# CLI and Console Cross-Reference

This guide shows how Console operations map to CLI commands, helping you choose the right tool for each task and enabling automation of Console workflows.

## Overview

Both the Console and CLI interact with the same API endpoints, providing flexibility in how you manage your infrastructure:

- **Console**: Visual interface, best for exploration and monitoring
- **CLI**: Command-line interface, best for automation and scripting

## Authentication

### Console Login
1. Navigate to login page
2. Enter email and password
3. Optional: Enter master password

### CLI Equivalent
```bash
# Interactive login
./rediacc login

# Non-interactive login
./rediacc login --email admin@rediacc.io --password yourpassword

# With master password
./rediacc login --email admin@rediacc.io --password yourpassword --master-password masterpass
```

## Resource Management

### Machines

#### Console: View Machines
Navigate to **Resources** → **Machines** tab

#### CLI: List Machines
```bash
# List all machines in a team
./rediacc list machines --team "Private Team"

# JSON output for scripting
./rediacc list machines --team "Private Team" --output json

# Filter by bridge
./rediacc list machines --team "Private Team" --bridge "Global Bridges"
```

#### Console: Add Machine
1. Click **Add Machine**
2. Fill in form fields
3. Test connection
4. Click **Create**

#### CLI: Create Machine
```bash
# Create machine with basic config
./rediacc create machine \
  --name "server-01" \
  --team "Private Team" \
  --region "Default Region" \
  --bridge "Global Bridges" \
  --ip "192.168.1.100" \
  --user "deploy" \
  --datastore "/mnt/datastore"

# With SSH password for initial setup
./rediacc create machine \
  --name "server-02" \
  --team "Private Team" \
  --region "Default Region" \
  --bridge "Global Bridges" \
  --ip "192.168.1.101" \
  --user "deploy" \
  --datastore "/mnt/datastore" \
  --ssh-password "temppass123"

# With custom SSH port
./rediacc create machine \
  --name "server-03" \
  --team "Private Team" \
  --region "Default Region" \
  --bridge "Global Bridges" \
  --ip "192.168.1.102" \
  --user "deploy" \
  --datastore "/mnt/datastore" \
  --ssh-port 2222
```

#### Console: Edit Machine
1. Click **Edit** button on machine row
2. Modify configuration
3. Save changes

#### CLI: Update Machine
```bash
# Update machine vault data
./rediacc update machine --name "server-01" \
  --ip "192.168.1.200" \
  --datastore "/mnt/new-datastore"

# Get current configuration
./rediacc inspect machine "server-01"
```

#### Console: Delete Machine
Click **Delete** button and confirm

#### CLI: Delete Machine
```bash
./rediacc delete machine --name "server-01" --confirm
```

### Teams

#### Console: View Teams
Navigate to **System** → **Teams** tab

#### CLI: List Teams
```bash
# List all accessible teams
./rediacc list teams

# With details
./rediacc list teams --detailed
```

#### Console: Create Team
1. Click **Create Team**
2. Enter team name
3. Configure vault

#### CLI: Create Team
```bash
# Create team (admin only)
./rediacc create team --name "Development" \
  --description "Development team resources"

# With initial SSH key
./rediacc create team --name "Production" \
  --ssh-key-file ~/.ssh/id_rsa
```

### Storage

#### Console: View Storage
Navigate to **Resources** → **Storage** tab

#### CLI: List Storage
```bash
# List storage for a team
./rediacc list storage --team "Private Team"

# Show supported storage types
./rediacc list storage-types
```

#### Console: Add Storage
1. Click **Add Storage**
2. Select storage type
3. Configure credentials

#### CLI: Create Storage
```bash
# S3 storage
./rediacc create storage \
  --name "backup-s3" \
  --team "Private Team" \
  --type "s3" \
  --bucket "company-backups" \
  --region "us-east-1" \
  --access-key "AKIAXXXXXXXX" \
  --secret-key "XXXXXXXXXX"

# Azure storage
./rediacc create storage \
  --name "backup-azure" \
  --team "Private Team" \
  --type "azure" \
  --account "storageaccount" \
  --container "backups" \
  --sas-token "?sv=2021-06-08&ss=b&srt=..."
```

## Queue Management

### View Queue Status

#### Console: Queue Overview
Navigate to **Queue** page to see all items

#### CLI: Queue Status
```bash
# Show queue summary
./rediacc queue status --team "Private Team"

# List pending items
./rediacc queue list --status pending --team "Private Team"

# List all items for today
./rediacc queue list --date today --team "Private Team"

# Show specific task
./rediacc queue show --task-id "550e8400-e29b-41d4-a716-446655440000"
```

### Create Queue Items

#### Console: Manual Task Creation
Done indirectly through other operations (e.g., backup, sync)

#### CLI: Submit Tasks
```bash
# Submit a backup task
./rediacc queue submit \
  --team "Private Team" \
  --machine "server-01" \
  --function "backup" \
  --repository "webapp" \
  --priority 3

# High priority task
./rediacc queue submit \
  --team "Private Team" \
  --machine "server-01" \
  --function "deploy" \
  --repository "webapp" \
  --version "v1.2.3" \
  --priority 1
```

### Cancel Tasks

#### Console: Cancel Queue Item
Click **Cancel** button on queue item

#### CLI: Cancel Task
```bash
# Cancel by task ID
./rediacc queue cancel --task-id "550e8400-e29b-41d4-a716-446655440000"

# Cancel all pending for a machine
./rediacc queue cancel --machine "server-01" --status pending --confirm
```

## User Management

### View Users

#### Console: User List
Navigate to **System** → **Users** tab

#### CLI: List Users
```bash
# List all users (admin only)
./rediacc list users

# Filter by permission group
./rediacc list users --permission-group "Administrators"

# Show user details
./rediacc inspect user --email "user@example.com"
```

### Create Users

#### Console: Create User
1. Click **Create User**
2. Enter email and permissions
3. Assign to teams

#### CLI: Create User
```bash
# Create user with team assignment
./rediacc create user \
  --email "newuser@example.com" \
  --permission-group "Users" \
  --teams "Private Team,Development"

# Create admin user
./rediacc create user \
  --email "admin@example.com" \
  --permission-group "Administrators"
```

## Audit and Monitoring

### View Audit Logs

#### Console: Audit Page
Navigate to **Audit** with date filters

#### CLI: Audit Logs
```bash
# Today's audit logs
./rediacc audit list --date today

# Filter by entity type
./rediacc audit list --entity-type "Machine" --days 7

# Filter by user
./rediacc audit list --user "admin@rediacc.io" --days 30

# Export audit logs
./rediacc audit export --start-date "2025-01-01" --end-date "2025-01-31" --format csv
```

## File Operations

### Sync Files

#### Console: Not available
File sync operations are CLI-only

#### CLI: File Sync
```bash
# Upload files to repository
./rediacc sync upload \
  --local ./myproject \
  --machine "server-01" \
  --repo "webapp" \
  --verify

# Download repository
./rediacc sync download \
  --machine "server-01" \
  --repo "webapp" \
  --local ./backup

# Mirror mode (exact copy)
./rediacc sync upload \
  --local ./src \
  --machine "server-01" \
  --repo "code" \
  --mirror \
  --confirm
```

### Terminal Access

#### Console: Remote Button
Click **Remote** button on machine (launches terminal)

#### CLI: Direct Terminal
```bash
# Connect to repository
./rediacc term --machine "server-01" --repo "webapp"

# Connect to machine root
./rediacc term --machine "server-01"

# Execute single command
./rediacc term --machine "server-01" --repo "webapp" --command "docker ps"
```

## Bulk Operations

### Console Limitations
- Must perform operations one at a time
- No batch support in UI

### CLI Advantages
```bash
# Create multiple machines from JSON
cat machines.json | ./rediacc create machine --batch

# Update all machines in a team
./rediacc list machines --team "Private Team" --output json | \
  jq '.[] | .name' | \
  xargs -I {} ./rediacc update machine --name {} --new-bridge "Global Bridges"

# Delete multiple storage configs
./rediacc delete storage --names "old-s3,old-azure,old-gcs" --confirm
```

## Automation Examples

### Daily Health Check Script
```bash
#!/bin/bash
# daily-health-check.sh

echo "=== Rediacc Daily Health Check ==="
echo "Date: $(date)"
echo ""

# Check queue status
echo "Queue Status:"
./rediacc queue status --all-teams

# Check failed tasks
echo -e "\nFailed Tasks (Last 24h):"
./rediacc queue list --status failed --date today

# Check machine connectivity
echo -e "\nOffline Machines:"
./rediacc list machines --all-teams --output json | \
  jq -r '.[] | select(.status == "offline") | .name'

# Check resource usage
echo -e "\nResource Usage:"
./rediacc company stats
```

### Automated Backup Script
```bash
#!/bin/bash
# backup-all-repos.sh

TEAM="Production"
STORAGE="backup-s3"

# Get all repositories
repos=$(./rediacc list repositories --team "$TEAM" --output json | jq -r '.[].name')

for repo in $repos; do
  echo "Backing up $repo..."
  
  # Submit backup task
  ./rediacc queue submit \
    --team "$TEAM" \
    --function "backup" \
    --repository "$repo" \
    --storage "$STORAGE" \
    --priority 4
done

echo "All backup tasks submitted"
```

### Queue Monitoring Script
```bash
#!/bin/bash
# monitor-queue.sh

while true; do
  clear
  echo "Queue Monitor - $(date)"
  echo "========================"
  
  # Get queue statistics
  ./rediacc queue status --all-teams
  
  # Check for stale items
  stale_count=$(./rediacc queue list --stale-only --output json | jq '. | length')
  if [ "$stale_count" -gt 0 ]; then
    echo -e "\n⚠️  WARNING: $stale_count stale items detected!"
  fi
  
  # Refresh every 30 seconds
  sleep 30
done
```

## Feature Comparison

| Feature | Console | CLI | Best For |
|---------|---------|-----|----------|
| Visual Overview | ✅ Excellent | ❌ Limited | Monitoring |
| Bulk Operations | ❌ Not supported | ✅ Full support | Automation |
| Real-time Updates | ✅ Automatic | ❌ Manual refresh | Live monitoring |
| Scripting | ❌ Not applicable | ✅ Designed for | Automation |
| Audit Trail Viewing | ✅ Rich UI | ✅ Export capable | Compliance |
| File Operations | ❌ Not available | ✅ Full rsync | File management |
| Terminal Access | ✅ Click to launch | ✅ Direct SSH | Remote access |
| Mobile Access | ✅ Responsive | ❌ Terminal only | On-the-go |

## Best Practices

### When to Use Console
- Initial exploration and learning
- Visual monitoring of system health
- Ad-hoc configuration changes
- Investigating issues with rich context
- Team member onboarding

### When to Use CLI
- Automated workflows and scripts
- Bulk operations
- CI/CD integration
- Scheduled tasks via cron
- Remote management over SSH
- File synchronization tasks

### Combining Both
1. Use Console to explore and understand
2. Use CLI to automate discovered patterns
3. Monitor automation results in Console
4. Debug issues using Console's visual tools

## Next Steps

- Review [CLI documentation](../cli/introduction) for complete command reference
- Set up [CLI installation](../cli/installation) on your workstation
- Create automation scripts for repetitive tasks
- Consider [API integration](./api-integration.md) for custom applications