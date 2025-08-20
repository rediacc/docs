# Infrastructure Commands

Commands for managing infrastructure components including bridges and distributed storage.

## Quick Navigation

- **[Bridge Commands](#bridge-commands)** - Bridge management operations
- **[Distributed Storage Commands](#distributed-storage-commands)** - Storage configuration

## Bridge Commands

Bridges are autonomous queue processors that execute tasks on remote machines. See [full bridge command reference](./bridge-commands.md) for configuration details.

### Available Bridge Commands:
- `bridge authorize` - Grant API access to a bridge
- `bridge disable` - Temporarily disable a bridge
- `bridge enable` - Re-enable a disabled bridge

### Bridge Management Examples:

```bash
# Authorize a new bridge
rediacc bridge authorize prod-bridge-01 --team production

# Disable bridge for maintenance
rediacc bridge disable prod-bridge-01 --reason "Hardware upgrade"

# Re-enable after maintenance
rediacc bridge enable prod-bridge-01
```

## Distributed Storage Commands

For managing distributed storage resources. See [full distributed storage command reference](./distributed-storage-commands.md) for S3 configuration.

### Available Storage Commands:
- `distributed-storage update-s3` - Update S3 configuration for distributed storage

### Storage Configuration Example:

```bash
# Update S3 configuration
rediacc distributed-storage update-s3 \
  --distributed-storage-name backup-storage \
  --s3-base-path "/backups/2024" \
  --s3-region "us-east-1"
```

## Infrastructure Architecture

### Bridge System Overview

```
API Server
    ↓
Queue System
    ↓
Bridges (Queue Processors)
    ↓
Machines (SSH)
```

**Key Bridge Concepts:**
- **Autonomous Operation** - Bridges poll for tasks independently
- **Batch Processing** - Process multiple queue items concurrently
- **Fault Tolerance** - Automatic retry on failures
- **Load Distribution** - Multiple bridges can share workload

### Distributed Storage System

```
Team Resources
    ↓
Storage Abstraction Layer
    ↓
Backend Providers (S3, Azure, GCS)
```

**Storage Features:**
- **Multi-Provider Support** - S3, Azure Blob, Google Cloud Storage
- **Team Isolation** - Each team has separate storage namespaces
- **Versioning Support** - Optional version control for stored objects
- **Access Control** - Fine-grained permissions per storage resource

## Common Workflows

### Setting Up a New Bridge

```bash
# 1. Create the bridge
rediacc create bridge --name region-us-bridge --team production

# 2. Authorize for API access
rediacc bridge authorize region-us-bridge --team production

# 3. Start bridge process (on bridge server)
./bridge --bridge-mode \
  token=<auth-token> \
  api_url=https://api.rediacc.com \
  master_password=<password> \
  batch_size=5

# 4. Monitor bridge status
rediacc list bridges --team production
```

### Configuring Distributed Storage

```bash
# 1. Create storage resource
rediacc create storage \
  --name team-backups \
  --team production \
  --type s3

# 2. Configure S3 settings
rediacc distributed-storage update-s3 \
  --distributed-storage-name team-backups \
  --s3-base-path "/prod-backups" \
  --s3-bucket "company-storage" \
  --s3-region "us-west-2"

# 3. Verify configuration
rediacc inspect distributed-storage team-backups
```

## Bridge Operations

### Bridge States

1. **Authorized** - Has valid API credentials
2. **Active** - Currently processing queue items
3. **Disabled** - Temporarily stopped by administrator
4. **Offline** - Not responding to health checks

### Managing Bridge Lifecycle

```bash
# View all bridges and their status
rediacc list bridges --team production --output json

# Disable bridge for maintenance
rediacc bridge disable prod-bridge-01 \
  --reason "Scheduled maintenance window"

# Re-enable after maintenance
rediacc bridge enable prod-bridge-01

# Check bridge processing statistics
rediacc inspect bridge prod-bridge-01
```

## Storage Management

### Storage Types

- **S3** - Amazon S3 or S3-compatible storage
- **Azure** - Azure Blob Storage
- **GCS** - Google Cloud Storage
- **Local** - Local filesystem (for testing only)

### Access Patterns

```bash
# Direct storage access (via CLI)
rediacc storage upload \
  --storage team-backups \
  --local-path ./backup.tar.gz \
  --remote-path /daily/backup-2024-01-15.tar.gz

# Queue-based operations
rediacc create queue-item \
  --function backup \
  --machine prod-server \
  --params storage=team-backups
```

## Best Practices

### Bridge Deployment

1. **Geographic Distribution** - Deploy bridges close to target machines
2. **Redundancy** - Run multiple bridges per region
3. **Monitoring** - Set up alerts for bridge failures
4. **Capacity Planning** - Size bridges based on queue volume
5. **Security** - Use dedicated service accounts for bridges

### Storage Configuration

1. **Bucket Isolation** - Use separate buckets per environment
2. **Lifecycle Policies** - Configure automatic cleanup
3. **Encryption** - Enable encryption at rest
4. **Access Logging** - Enable provider access logs
5. **Cost Management** - Monitor storage usage and costs

## Troubleshooting

### Bridge Issues

- **"Bridge not authorized"** - Run `bridge authorize` command
- **"Bridge offline"** - Check network connectivity and bridge process
- **"Queue backing up"** - Add more bridges or increase batch size
- **"High failure rate"** - Check bridge logs and machine connectivity

### Storage Issues

- **"Access denied"** - Verify storage credentials in vault
- **"Bucket not found"** - Ensure bucket exists and is accessible
- **"Region mismatch"** - Verify S3 region configuration
- **"Storage quota exceeded"** - Check provider limits and usage