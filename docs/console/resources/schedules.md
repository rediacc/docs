---
sidebar_position: 4
---

# Schedule Management

The Schedule Management interface allows you to create and manage automated tasks that run at specified intervals across your Rediacc infrastructure. This includes backups, deployments, maintenance tasks, and custom scripts.

## Overview

Schedules in Rediacc provide powerful automation capabilities:
- Automated backups and snapshots
- Regular deployment updates
- Maintenance operations
- Health checks and monitoring
- Custom script execution

## Interface Overview

### Empty State

When no schedules are configured for a team, the interface displays:
- Empty state illustration
- Message: "No schedules found in this team"
- Action button to create schedules

### Header Controls

- ➕ **Add Schedule**: Create new automated task
- 🔄 **Refresh**: Update the schedule list

### Schedule Table Structure

Once schedules are configured, the table displays:

| Column | Description |
|--------|-------------|
| **Schedule Name** | Unique identifier with 📅 icon |
| **Cron Expression** | Schedule timing pattern |
| **Next Run** | Next execution time |
| **Last Run** | Previous execution with status |
| **Machine** | Target machine for execution |
| **Status** | Active/Paused indicator |
| **Actions** | Edit, Pause/Resume, History, Delete |


## Understanding Cron Expressions

Rediacc uses standard cron expressions for scheduling:

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
│ │ │ │ │
* * * * *
```

### Common Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| `0 0 * * *` | Daily at midnight | Daily backups |
| `0 2 * * 0` | Weekly on Sunday at 2 AM | Weekly maintenance |
| `0 0 1 * *` | Monthly on the 1st | Monthly reports |
| `*/15 * * * *` | Every 15 minutes | Health checks |
| `0 9-17 * * 1-5` | Hourly on weekdays 9-5 | Business hours sync |

### Special Characters

- `*` - Any value
- `,` - Value list separator
- `-` - Range of values
- `/` - Step values
- `?` - No specific value (day of month/week)
- `L` - Last day of month/week
- `W` - Weekday nearest to given day
- `#` - Nth occurrence of weekday

## Creating a Schedule

To create a new schedule:

1. Navigate to **Resources** → **Schedules**
2. Click **Add Schedule**
3. Configure the schedule:

### Basic Configuration

```yaml
Schedule Name: daily-backup
Description: Daily backup of production databases
Team: Production
Machine: prod-db-01
Active: true

Schedule:
  Cron Expression: 0 2 * * *
  Timezone: America/New_York
  
Execution:
  Repository: backup-scripts
  Script: /scripts/backup-databases.sh
  Timeout: 3600 seconds
  
Parameters:
  backup_type: full
  compression: gzip
  storage: s3-prod-backups
```

### Advanced Settings

#### Execution Window
Define when the schedule can run:
```yaml
Execution Window:
  Start Time: 00:00
  End Time: 06:00
  Skip if Outside: true
```

#### Retry Configuration
Handle failures gracefully:
```yaml
Retry:
  Max Attempts: 3
  Delay: 300 seconds
  Backoff: exponential
  Alert on Failure: true
```

#### Dependencies
Chain schedules together:
```yaml
Dependencies:
  Wait For:
    - database-maintenance
    - system-updates
  Timeout: 1800 seconds
  On Failure: skip
```

## Schedule Types

### Backup Schedules

Automated backup operations:

```yaml
Type: Backup
Target: 
  - Database: production_db
  - Files: /var/www/uploads
  - Config: /etc/app/

Backup Config:
  Method: incremental
  Base: Sunday full backup
  Retention: 30 days
  Compression: xz
  Encryption: enabled
  
Storage:
  Primary: s3-backups
  Secondary: azure-archive
  
Verification:
  Enabled: true
  Sample Size: 10%
```

### Deployment Schedules

Automated deployments:

```yaml
Type: Deployment
Source:
  Repository: app-frontend
  Branch: production
  
Deployment:
  Strategy: rolling
  Batch Size: 25%
  Health Check: /health
  Rollback on Failure: true
  
Notifications:
  Slack: #deployments
  Email: ops-team@company.com
```

### Maintenance Schedules

System maintenance tasks:

```yaml
Type: Maintenance
Tasks:
  - Update packages
  - Clean temp files
  - Rotate logs
  - Optimize databases
  
Maintenance Window:
  Duration: 2 hours
  Alert Users: true
  Block Access: false
```

### Custom Scripts

Execute custom operations:

```yaml
Type: Custom
Script: |
  #!/bin/bash
  # Custom monitoring script
  check_disk_space
  check_memory_usage
  check_service_status
  send_metrics_to_monitoring
  
Environment:
  ALERT_THRESHOLD: 80
  MONITORING_ENDPOINT: https://metrics.company.com
```

## Managing Schedules

### Viewing Schedule Status

The schedule list shows:
- **Name**: Schedule identifier
- **Next Run**: When it will execute next
- **Last Run**: Previous execution time
- **Status**: Active, Paused, Failed
- **Success Rate**: Historical success percentage

### Schedule History

Click **View History** to see:
- Execution timestamps
- Duration
- Exit codes
- Output logs
- Error messages

### Pausing Schedules

Temporarily disable a schedule:
1. Select the schedule
2. Click **Pause**
3. Optionally set resume date

### Modifying Schedules

Edit schedule configuration:
1. Click **Edit**
2. Modify settings
3. Save changes

:::caution
Changes to active schedules take effect on the next execution cycle.
:::

## Monitoring and Alerts

### Execution Monitoring

Track schedule performance:
- **Success Rate**: Percentage of successful runs
- **Average Duration**: Typical execution time
- **Resource Usage**: CPU, memory, network
- **Output Size**: Generated data volume

### Alert Configuration

Set up notifications for:

```yaml
Alerts:
  On Success: 
    - Email: optional
    - Slack: optional
  
  On Failure:
    - Email: ops-team@company.com
    - Slack: #alerts
    - PagerDuty: critical-incidents
    
  On Long Running:
    Threshold: 2x average duration
    Notify: ops-team@company.com
    
  On Missed:
    Grace Period: 15 minutes
    Notify: ops-team@company.com
```

### Metrics and Dashboards

Available metrics:
- Execution count
- Success/failure rates
- Duration trends
- Resource consumption
- Queue wait times

## Best Practices

### Schedule Design

1. **Off-Peak Hours**: Schedule intensive tasks during low-usage periods
2. **Stagger Starts**: Avoid scheduling many tasks at the same time
3. **Time Zones**: Consider global operations when setting schedules
4. **Maintenance Windows**: Respect defined maintenance periods

### Error Handling

1. **Idempotency**: Ensure scripts can be safely re-run
2. **Logging**: Comprehensive logging for troubleshooting
3. **Notifications**: Alert appropriate teams on failures
4. **Fallbacks**: Define alternative actions on failure

### Performance

1. **Timeout Settings**: Set reasonable timeouts
2. **Resource Limits**: Define CPU/memory constraints
3. **Concurrent Limits**: Prevent resource exhaustion
4. **Queue Priority**: Set appropriate priority levels

## Advanced Features

### Dynamic Scheduling

Adjust schedules based on conditions:

```yaml
Dynamic Rules:
  - If: disk_usage > 80%
    Then: 
      Run: cleanup-script
      Schedule: "*/30 * * * *"
      
  - If: business_hours
    Then:
      Delay: until 18:00
      
  - If: holiday_calendar
    Then:
      Skip: true
```

### Schedule Templates

Create reusable schedule templates:

```yaml
Template: backup-template
Base Configuration:
  Type: Backup
  Retry: 3 attempts
  Compression: gzip
  Verification: enabled
  
Override Parameters:
  - target
  - storage
  - retention
```

### API Integration

Trigger schedules via API:

```bash
# List schedules
GET /api/StoredProcedure/GetSchedules?teamName=Production

# Create schedule
POST /api/StoredProcedure/CreateSchedule
{
  "scheduleName": "hourly-sync",
  "cronExpression": "0 * * * *",
  "machineId": 123,
  "script": "sync-data.sh"
}

# Trigger immediate execution
POST /api/StoredProcedure/RunSchedule
{
  "scheduleId": 456,
  "parameters": {
    "force": true
  }
}
```

## Troubleshooting

### Common Issues

#### Schedule Not Running
- Verify cron expression syntax
- Check schedule is active
- Confirm machine is online
- Review execution window settings

#### Execution Failures
- Check script permissions
- Verify environment variables
- Review resource availability
- Examine error logs

#### Performance Problems
- Analyze execution duration trends
- Check for resource contention
- Review concurrent execution limits
- Optimize script performance

### Debug Mode

Enable verbose logging:

```yaml
Debug:
  Enabled: true
  Log Level: DEBUG
  Capture:
    - Environment
    - System metrics
    - Network calls
    - File operations
```

## Schedule Examples

### Database Backup
```cron
0 2 * * * /scripts/backup-db.sh --full --compress
```

### Log Rotation
```cron
0 0 * * 0 /scripts/rotate-logs.sh --keep 30
```

### Certificate Renewal
```cron
0 0 1 * * /scripts/renew-certs.sh --auto
```

### Health Check
```cron
*/5 * * * * /scripts/health-check.sh --alert-on-failure
```

### Deployment
```cron
0 10 * * 1-5 /scripts/deploy.sh --branch main --strategy rolling
```

## Related Documentation

- [Machine Management](./machines.md) - Schedule execution targets
- [Repository Management](./repositories.md) - Script sources
- [Storage Management](./storage.md) - Backup destinations
- [Queue Management](../queue.md) - Schedule execution queue