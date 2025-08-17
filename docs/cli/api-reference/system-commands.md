# System Commands

Commands for managing system-level operations including queues, vaults, and audit logs.

## Quick Navigation

- **[Queue Commands](#queue-commands)** - Queue management operations
- **[Vault Commands](#vault-commands)** - Secure credential management
- **[Audit Commands](#audit-commands)** - Audit trail and logging

## Queue Commands

For managing the task queue system. See [full queue command reference](./queue-commands.md) for task management details.

### Available Queue Commands:
- `queue cancel` - Cancel a pending queue item
- `queue resubmit` - Resubmit a failed queue item

### Queue Management Examples:

```bash
# Cancel a pending task
rediacc-cli queue cancel task-123e4567-e89b-12d3-a456-426614174000

# Resubmit a failed task
rediacc-cli queue resubmit task-123e4567-e89b-12d3-a456-426614174000 \
  --priority 1
```

## Vault Commands

For managing encrypted credential storage. See [full vault command reference](./vault-commands.md) for security details.

### Available Vault Commands:
- `vault verify` - Verify vault encryption and master password

### Vault Operations Example:

```bash
# Verify vault integrity
rediacc-cli vault verify --team production
```

## Audit Commands

For accessing system audit trails. See [full audit command reference](./audit-commands.md) for monitoring features.

### Available Audit Commands:
- `audit operations` - View system operation audit logs

### Audit Query Example:

```bash
# View recent operations
rediacc-cli audit operations --limit 50

# Filter by operation type
rediacc-cli audit operations --operation CreateMachine --days 7

# Export audit logs
rediacc-cli audit operations --from 2024-01-01 --output json > audit.json
```

## System Architecture

### Queue System

```
User Request → API → Queue → Bridge → Machine → Result
                ↓                              ↓
             Database                     Update Status
```

**Queue States:**
- `PENDING` - Waiting to be processed
- `ASSIGNED` - Claimed by a bridge
- `PROCESSING` - Currently executing
- `COMPLETED` - Successfully finished
- `FAILED` - Execution failed
- `CANCELLED` - Manually cancelled

### Vault System

```
Master Password
       ↓
   KDF (PBKDF2)
       ↓
  Encryption Key
       ↓
   AES-256-GCM
       ↓
Encrypted Vault Data
```

**Vault Types:**
- **Company Vault** - Organization-wide secrets
- **Team Vault** - Team-specific credentials (SSH keys, etc.)
- **Machine Vault** - Machine connection details
- **Queue Vault** - Task-specific parameters

### Audit System

**Tracked Operations:**
- Resource creation/modification/deletion
- Authentication events
- Permission changes
- Queue operations
- Vault access
- API calls

## Common Workflows

### Queue Management

```bash
# 1. View queue status
rediacc-cli list queue-items --status pending --team production

# 2. Inspect specific task
rediacc-cli inspect queue-item task-123e4567

# 3. Cancel stuck task
rediacc-cli queue cancel task-123e4567 --reason "Stuck for 2 hours"

# 4. Resubmit with higher priority
rediacc-cli queue resubmit task-123e4567 --priority 1
```

### Vault Verification

```bash
# 1. Verify team vault
rediacc-cli vault verify --team production

# 2. Check machine vaults
for machine in $(rediacc-cli list machines --team production -o json | jq -r '.[].name'); do
  echo "Verifying vault for: $machine"
  rediacc-cli vault verify --machine $machine
done
```

### Audit Trail Analysis

```bash
# 1. Security audit - Check for failed logins
rediacc-cli audit operations --operation LoginFailed --days 30

# 2. Change tracking - View all machine modifications
rediacc-cli audit operations --operation UpdateMachine --days 7

# 3. User activity - Track specific user actions
rediacc-cli audit operations --user admin@company.com --limit 100

# 4. Security export - Monthly audit report
rediacc-cli audit operations \
  --from 2024-01-01 \
  --to 2024-01-31 \
  --output json > january-audit.json
```

## Queue Priorities

Priority levels (1-5, where 1 is highest):

1. **Critical** - System maintenance, security updates
2. **High** - Production deployments, urgent fixes
3. **Normal** - Regular operations (default)
4. **Low** - Batch processing, reports
5. **Idle** - Background tasks, cleanup

## Vault Security

### Best Practices

1. **Master Password**
   - Use strong, unique password
   - Rotate periodically
   - Never store in plain text
   - Different per environment

2. **Access Control**
   - Limit vault access to necessary users
   - Use principle of least privilege
   - Regular access reviews
   - Monitor vault operations

3. **Backup Strategy**
   - Regular encrypted backups
   - Test restore procedures
   - Store backups separately
   - Version vault changes

## Audit Retention

### Retention Policies

- **Default**: 90 days
- **Security Events**: 1 year
- **Extended Mode**: 7 years
- **Custom**: Configurable per company

### Audit Reports

Common monitoring reports:

```bash
# User access report
rediacc-cli audit operations --operation CreateTeamMembership --days 90

# Permission changes
rediacc-cli audit operations --operation UpdateUserPermissions --days 30

# Resource creation
rediacc-cli audit operations --operation Create* --days 7

# Failed operations
rediacc-cli audit operations --status failed --days 1
```

## Troubleshooting

### Queue Issues

- **"Task stuck in PROCESSING"** - Check bridge logs, may need manual intervention
- **"High failure rate"** - Review task parameters and machine connectivity
- **"Queue backing up"** - Add more bridges or increase processing capacity
- **"Cannot cancel task"** - Task may already be processing or completed

### Vault Issues

- **"Decryption failed"** - Verify master password is correct
- **"Vault corrupted"** - Restore from backup, contact support
- **"Access denied"** - Check user permissions for vault operations
- **"Version mismatch"** - Update CLI to match server version

### Audit Issues

- **"No audit logs found"** - Check date range and permissions
- **"Export failed"** - Verify disk space and write permissions
- **"Missing operations"** - Some operations may not be audited in Community plan
- **"Slow queries"** - Use specific filters to reduce data volume

## Performance Tips

1. **Queue Optimization**
   - Use appropriate priorities
   - Batch similar operations
   - Monitor queue depth
   - Scale bridges as needed

2. **Vault Performance**
   - Cache decrypted values locally
   - Minimize vault updates
   - Use bulk operations when possible

3. **Audit Queries**
   - Use specific date ranges
   - Filter by operation type
   - Export and analyze offline for large datasets