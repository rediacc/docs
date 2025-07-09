---
sidebar_position: 4
---

# Backup Strategies

This comprehensive guide covers backup strategies and implementation for your Rediacc infrastructure, ensuring data protection and business continuity.

## Prerequisites

- Storage configurations set up ([Storage Management](../resources/storage.md))
- Machine access configured
- Basic understanding of backup concepts
- Completed [Getting Started](./getting-started.md) tutorial

## Overview

A robust backup strategy includes:
- **Data Identification**: What needs backing up
- **Frequency Planning**: How often to backup
- **Retention Policies**: How long to keep backups
- **Recovery Testing**: Ensuring backups work
- **Automation**: Reducing manual intervention

## Backup Types

### 1. Full Backups

Complete copy of all data:
- **Pros**: Complete data set, simple recovery
- **Cons**: Time-consuming, storage intensive

### 2. Incremental Backups

Only changed data since last backup:
- **Pros**: Fast, efficient storage
- **Cons**: Complex recovery chain

### 3. Differential Backups

Changes since last full backup:
- **Pros**: Faster recovery than incremental
- **Cons**: Growing backup size

## Step 1: Setting Up Storage Backends

### 1.1 Configure S3 Storage

```yaml
Storage Configuration:
  Name: backup-s3-primary
  Type: S3
  Bucket: company-backups
  Region: us-east-1
  Path Prefix: /rediacc/backups/
  
  Lifecycle Rules:
    - Transition to Glacier: 30 days
    - Delete old versions: 365 days
  
  Versioning: Enabled
  Encryption: AES-256
```

### 1.2 Configure Secondary Storage

For 3-2-1 backup rule (3 copies, 2 different media, 1 offsite):

```yaml
Secondary Storage:
  Name: backup-azure-secondary
  Type: Azure Blob
  Container: rediacc-backups
  Region: West Europe
  
  Redundancy: Geo-redundant
  Access Tier: Cool
```

## Step 2: Implementing Backup Scripts

### 2.1 Application Backup Script

```bash
#!/bin/bash
# backup-application.sh

set -euo pipefail

# Configuration
BACKUP_NAME="app-backup-$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="/tmp/backups/${BACKUP_NAME}"
RETENTION_DAYS=30

# Functions
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

create_backup_manifest() {
    cat > "${BACKUP_DIR}/manifest.json" << EOF
{
    "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
    "hostname": "$(hostname)",
    "backup_type": "full",
    "components": {
        "application": true,
        "database": true,
        "configuration": true,
        "logs": true
    },
    "version": "1.0"
}
EOF
}

# Create backup directory
mkdir -p "${BACKUP_DIR}"

log "Starting backup: ${BACKUP_NAME}"

# 1. Stop application (optional for consistency)
log "Preparing application for backup..."
docker-compose stop web-app || true

# 2. Backup application data
log "Backing up application data..."
docker run --rm \
    -v app_data:/data:ro \
    -v "${BACKUP_DIR}":/backup \
    alpine tar czf /backup/app-data.tar.gz -C /data .

# 3. Backup database
log "Backing up database..."
docker exec database-container \
    pg_dump -U postgres -d myapp \
    | gzip > "${BACKUP_DIR}/database.sql.gz"

# 4. Backup configuration
log "Backing up configuration..."
tar czf "${BACKUP_DIR}/config.tar.gz" \
    /opt/rediacc/config \
    /etc/docker/compose \
    --exclude='*.log'

# 5. Backup recent logs
log "Backing up logs..."
find /var/log -name "*.log" -mtime -7 \
    -exec tar czf "${BACKUP_DIR}/logs.tar.gz" {} +

# 6. Create manifest
create_backup_manifest

# 7. Calculate checksums
log "Calculating checksums..."
cd "${BACKUP_DIR}"
sha256sum * > checksums.sha256

# 8. Restart application
log "Restarting application..."
docker-compose start web-app

# 9. Upload to primary storage
log "Uploading to primary storage..."
rediacc-cli storage upload \
    --storage backup-s3-primary \
    --local "${BACKUP_DIR}" \
    --remote "full-backups/${BACKUP_NAME}/" \
    --recursive

# 10. Upload to secondary storage
log "Uploading to secondary storage..."
rediacc-cli storage upload \
    --storage backup-azure-secondary \
    --local "${BACKUP_DIR}" \
    --remote "full-backups/${BACKUP_NAME}/" \
    --recursive

# 11. Cleanup old backups
log "Cleaning up old backups..."
rediacc-cli storage list \
    --storage backup-s3-primary \
    --path "full-backups/" \
    --older-than "${RETENTION_DAYS}d" \
    --delete

# 12. Cleanup local files
rm -rf "${BACKUP_DIR}"

log "Backup completed successfully: ${BACKUP_NAME}"
```

### 2.2 Incremental Backup Script

```bash
#!/bin/bash
# incremental-backup.sh

set -euo pipefail

# Configuration
BACKUP_NAME="app-incremental-$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="/tmp/backups/${BACKUP_NAME}"
LAST_BACKUP_FILE="/var/lib/rediacc/last-backup-timestamp"

# Get last backup timestamp
if [ -f "${LAST_BACKUP_FILE}" ]; then
    LAST_BACKUP=$(cat "${LAST_BACKUP_FILE}")
else
    # First run, do full backup
    ./backup-application.sh
    exit 0
fi

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

mkdir -p "${BACKUP_DIR}"

log "Starting incremental backup since ${LAST_BACKUP}"

# 1. Find changed files
log "Finding changed files..."
find /opt/rediacc/datastore \
    -newer "${LAST_BACKUP_FILE}" \
    -type f \
    > "${BACKUP_DIR}/changed-files.txt"

# 2. Backup changed files
log "Backing up changed files..."
tar czf "${BACKUP_DIR}/incremental-data.tar.gz" \
    -T "${BACKUP_DIR}/changed-files.txt" \
    2>/dev/null || true

# 3. Backup database changes (using WAL)
log "Backing up database changes..."
docker exec database-container \
    pg_basebackup -D /backup -Ft -z -P \
    -X stream -c fast

# 4. Create manifest
cat > "${BACKUP_DIR}/manifest.json" << EOF
{
    "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
    "backup_type": "incremental",
    "base_backup": "${LAST_BACKUP}",
    "files_changed": $(wc -l < "${BACKUP_DIR}/changed-files.txt")
}
EOF

# 5. Upload backup
log "Uploading incremental backup..."
rediacc-cli storage upload \
    --storage backup-s3-primary \
    --local "${BACKUP_DIR}" \
    --remote "incremental-backups/${BACKUP_NAME}/"

# 6. Update timestamp
date > "${LAST_BACKUP_FILE}"

log "Incremental backup completed: ${BACKUP_NAME}"
```

## Step 3: Database-Specific Backups

### 3.1 PostgreSQL Backup Strategy

```bash
#!/bin/bash
# postgres-backup.sh

# Configuration
DB_HOST="postgres.internal"
DB_NAME="production"
DB_USER="backup_user"
BACKUP_DIR="/backups/postgres"

# Enable WAL archiving for PITR
docker exec postgres-container psql -U postgres << EOF
ALTER SYSTEM SET wal_level = replica;
ALTER SYSTEM SET archive_mode = on;
ALTER SYSTEM SET archive_command = 'rediacc-cli storage upload --storage wal-archive --stdin --path wal/%f';
SELECT pg_reload_conf();
EOF

# Continuous WAL archiving script
cat > /opt/rediacc/scripts/wal-archive.sh << 'EOF'
#!/bin/bash
# Archive WAL files continuously

ARCHIVE_STORAGE="wal-archive"
WAL_DIR="/var/lib/postgresql/data/pg_wal"

inotifywait -m -e close_write "${WAL_DIR}" |
while read -r directory event filename; do
    if [[ "$filename" =~ ^[0-9A-F]{24}$ ]]; then
        echo "Archiving WAL file: $filename"
        rediacc-cli storage upload \
            --storage "${ARCHIVE_STORAGE}" \
            --file "${WAL_DIR}/${filename}" \
            --path "wal/${filename}"
    fi
done
EOF
```

### 3.2 MySQL/MariaDB Backup

```bash
#!/bin/bash
# mysql-backup.sh

# Binary log backup for point-in-time recovery
docker exec mysql-container \
    mysqlbinlog --read-from-remote-server \
    --host=localhost \
    --raw --stop-never \
    /var/log/mysql/mysql-bin.000001 \
    > /backup/binlog-stream &

# Scheduled full backup
docker exec mysql-container \
    mysqldump --all-databases \
    --single-transaction \
    --quick \
    --lock-tables=false \
    --triggers \
    --routines \
    --events \
    | gzip > "/backup/mysql-full-$(date +%Y%m%d).sql.gz"
```

### 3.3 MongoDB Backup

```bash
#!/bin/bash
# mongodb-backup.sh

# Enable oplog for PITR
docker exec mongodb-container \
    mongodump --oplog \
    --out /backup/mongodb-$(date +%Y%m%d) \
    --gzip

# Continuous oplog backup
docker exec mongodb-container mongo << 'EOF'
// Tail oplog for continuous backup
var lastTimestamp = new Timestamp();
while (true) {
    var cursor = db.getSiblingDB("local").oplog.rs.find(
        { ts: { $gt: lastTimestamp } }
    ).addOption(DBQuery.Option.tailable);
    
    while (cursor.hasNext()) {
        var doc = cursor.next();
        lastTimestamp = doc.ts;
        // Write to backup stream
        print(JSON.stringify(doc));
    }
    sleep(1000);
}
EOF
```

## Step 4: File System Backups

### 4.1 Rsync-Based Backup

```bash
#!/bin/bash
# filesystem-backup.sh

# Configuration
SOURCE_DIRS=(
    "/opt/rediacc/datastore"
    "/var/lib/docker/volumes"
    "/etc/rediacc"
)
BACKUP_SERVER="backup.internal"
BACKUP_PATH="/mnt/backups/filesystem"

# Perform rsync backup
for dir in "${SOURCE_DIRS[@]}"; do
    log "Backing up ${dir}..."
    
    rsync -avz \
        --delete \
        --backup \
        --backup-dir="${BACKUP_PATH}/deleted/$(date +%Y%m%d)" \
        --exclude='*.tmp' \
        --exclude='*.log' \
        --log-file="/var/log/backup-rsync.log" \
        "${dir}/" \
        "${BACKUP_SERVER}:${BACKUP_PATH}${dir}/"
done
```

### 4.2 Snapshot-Based Backup

```bash
#!/bin/bash
# snapshot-backup.sh

# For LVM volumes
create_lvm_snapshot() {
    local volume=$1
    local snapshot_name="${volume}-backup-$(date +%Y%m%d)"
    
    # Create snapshot
    lvcreate -L10G -s -n "${snapshot_name}" "/dev/vg0/${volume}"
    
    # Mount snapshot
    mkdir -p "/mnt/snapshots/${snapshot_name}"
    mount -o ro "/dev/vg0/${snapshot_name}" "/mnt/snapshots/${snapshot_name}"
    
    # Backup snapshot
    tar czf "/backup/${snapshot_name}.tar.gz" "/mnt/snapshots/${snapshot_name}"
    
    # Cleanup
    umount "/mnt/snapshots/${snapshot_name}"
    lvremove -f "/dev/vg0/${snapshot_name}"
}

# For ZFS
create_zfs_snapshot() {
    local dataset=$1
    local snapshot_name="${dataset}@backup-$(date +%Y%m%d-%H%M%S)"
    
    # Create snapshot
    zfs snapshot "${snapshot_name}"
    
    # Send to backup
    zfs send "${snapshot_name}" | \
        rediacc-cli storage upload \
        --storage backup-s3-primary \
        --stdin \
        --path "snapshots/${snapshot_name}.zfs"
}
```

## Step 5: Automated Backup Scheduling

### 5.1 Create Backup Schedules

Navigate to **Resources** → **Schedules** and create:

```yaml
# Daily full backup
Schedule:
  Name: daily-full-backup
  Cron: 0 2 * * *  # 2 AM daily
  Script: backup-application.sh
  Machine: backup-server
  Priority: High
  Timeout: 3600  # 1 hour
  
# Hourly incremental
Schedule:
  Name: hourly-incremental
  Cron: 0 * * * *  # Every hour
  Script: incremental-backup.sh
  Machine: backup-server
  Priority: Normal
  Timeout: 900  # 15 minutes
  
# Continuous log shipping
Schedule:
  Name: log-shipping
  Cron: */5 * * * *  # Every 5 minutes
  Script: ship-logs.sh
  Machine: all-app-servers
  Priority: Low
```

### 5.2 Backup Monitoring

```bash
#!/bin/bash
# monitor-backups.sh

# Check backup completion
check_backup_status() {
    local backup_type=$1
    local expected_interval=$2
    
    # Find latest backup
    LATEST=$(rediacc-cli storage list \
        --storage backup-s3-primary \
        --path "${backup_type}-backups/" \
        --sort-by modified \
        --limit 1)
    
    # Check age
    BACKUP_AGE=$(( $(date +%s) - $(date -d "${LATEST}" +%s) ))
    
    if [ $BACKUP_AGE -gt $expected_interval ]; then
        send_alert "backup_missing" \
            "${backup_type} backup is ${BACKUP_AGE}s old (expected <${expected_interval}s)"
    fi
}

# Monitor all backup types
check_backup_status "full" 86400  # 24 hours
check_backup_status "incremental" 3600  # 1 hour
check_backup_status "wal" 300  # 5 minutes
```

## Step 6: Recovery Procedures

### 6.1 Recovery Testing Script

```bash
#!/bin/bash
# test-recovery.sh

set -euo pipefail

RECOVERY_TEST_DIR="/tmp/recovery-test-$(date +%Y%m%d)"
TEST_MACHINE="recovery-test-01"

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] TEST: $1"
}

# 1. Select random backup
log "Selecting random backup for testing..."
BACKUP=$(rediacc-cli storage list \
    --storage backup-s3-primary \
    --path "full-backups/" \
    --random 1)

log "Testing recovery of backup: ${BACKUP}"

# 2. Create test environment
log "Creating test environment..."
mkdir -p "${RECOVERY_TEST_DIR}"

# 3. Download backup
log "Downloading backup..."
rediacc-cli storage download \
    --storage backup-s3-primary \
    --remote "${BACKUP}" \
    --local "${RECOVERY_TEST_DIR}/"

# 4. Verify checksums
log "Verifying backup integrity..."
cd "${RECOVERY_TEST_DIR}"
sha256sum -c checksums.sha256

# 5. Restore database
log "Restoring database..."
docker run --rm \
    -v "${RECOVERY_TEST_DIR}":/backup:ro \
    postgres:13 \
    bash -c "gunzip -c /backup/database.sql.gz | psql -U postgres"

# 6. Restore application data
log "Restoring application data..."
docker run --rm \
    -v test_volume:/data \
    -v "${RECOVERY_TEST_DIR}":/backup:ro \
    alpine tar xzf /backup/app-data.tar.gz -C /data

# 7. Start test instance
log "Starting test instance..."
docker-compose -f docker-compose.test.yml up -d

# 8. Run validation tests
log "Running validation tests..."
./scripts/validate-recovery.sh

# 9. Report results
if [ $? -eq 0 ]; then
    log "Recovery test PASSED for backup: ${BACKUP}"
    echo "${BACKUP}" >> /var/log/successful-recovery-tests.log
else
    log "Recovery test FAILED for backup: ${BACKUP}"
    send_alert "recovery_test_failed" "Recovery test failed for ${BACKUP}" "critical"
fi

# 10. Cleanup
docker-compose -f docker-compose.test.yml down
rm -rf "${RECOVERY_TEST_DIR}"
```

### 6.2 Point-in-Time Recovery

```bash
#!/bin/bash
# pitr-recovery.sh

RECOVERY_TIME="2023-10-15 14:30:00"
RECOVERY_DIR="/recovery"

# 1. Find base backup before recovery time
BASE_BACKUP=$(rediacc-cli storage list \
    --storage backup-s3-primary \
    --path "full-backups/" \
    --before "${RECOVERY_TIME}" \
    --sort-by modified \
    --limit 1)

# 2. Restore base backup
rediacc-cli storage download \
    --storage backup-s3-primary \
    --remote "${BASE_BACKUP}" \
    --local "${RECOVERY_DIR}/"

# 3. Apply WAL files up to recovery time
for wal in $(rediacc-cli storage list \
    --storage wal-archive \
    --path "wal/" \
    --after "${BASE_BACKUP}" \
    --before "${RECOVERY_TIME}"); do
    
    # Download and apply WAL
    rediacc-cli storage download \
        --storage wal-archive \
        --remote "${wal}" \
        --local "${RECOVERY_DIR}/wal/"
done

# 4. Configure PostgreSQL recovery
cat > "${RECOVERY_DIR}/recovery.conf" << EOF
restore_command = 'cp /recovery/wal/%f %p'
recovery_target_time = '${RECOVERY_TIME}'
recovery_target_action = 'promote'
EOF

# 5. Start PostgreSQL in recovery mode
docker run \
    -v "${RECOVERY_DIR}":/var/lib/postgresql/data \
    postgres:13
```

## Step 7: Disaster Recovery Planning

### 7.1 DR Site Configuration

```yaml
# Disaster Recovery Site
DR Configuration:
  Primary Site: us-east-1
  DR Site: us-west-2
  
  Replication:
    Type: Asynchronous
    Lag Target: < 5 minutes
    Bandwidth: 100 Mbps
  
  Failover:
    RTO: 4 hours  # Recovery Time Objective
    RPO: 1 hour   # Recovery Point Objective
    
  Resources:
    Machines: 50% of production
    Storage: 100% replicated
    Network: Pre-configured
```

### 7.2 DR Failover Script

```bash
#!/bin/bash
# dr-failover.sh

# Disaster Recovery Failover Process
DR_SITE="us-west-2"
PRIMARY_SITE="us-east-1"

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] DR: $1"
}

# 1. Verify primary site failure
log "Verifying primary site status..."
if check_site_health "${PRIMARY_SITE}"; then
    log "Primary site is healthy. Aborting failover."
    exit 1
fi

# 2. Stop replication
log "Stopping replication to prevent split-brain..."
rediacc-cli replication stop --source "${PRIMARY_SITE}" --target "${DR_SITE}"

# 3. Promote DR databases
log "Promoting DR databases to primary..."
for db in $(rediacc-cli list databases --site "${DR_SITE}"); do
    rediacc-cli database promote --name "${db}" --site "${DR_SITE}"
done

# 4. Update DNS
log "Updating DNS to point to DR site..."
./scripts/update-dns.sh --primary "${DR_SITE}"

# 5. Scale up DR resources
log "Scaling up DR resources..."
rediacc-cli scale --site "${DR_SITE}" --factor 2.0

# 6. Start applications
log "Starting applications in DR site..."
rediacc-cli queue create \
    --site "${DR_SITE}" \
    --script "start-all-applications.sh" \
    --priority critical

# 7. Verify services
log "Verifying service availability..."
./scripts/verify-all-services.sh --site "${DR_SITE}"

log "Disaster recovery failover completed"
```

## Best Practices

### 1. Backup Verification

- **Regular Testing**: Test recovery monthly
- **Automated Validation**: Checksum verification
- **Documentation**: Keep recovery procedures updated
- **Time Tracking**: Monitor backup/restore times

### 2. Storage Management

```yaml
Storage Tiers:
  Hot (0-7 days):
    - Instant access
    - Full backups
    - Transaction logs
    
  Warm (7-30 days):
    - Infrequent access
    - Compressed backups
    - Lower cost storage
    
  Cold (30+ days):
    - Archive storage
    - Compliance retention
    - Glacier/Archive tier
```

### 3. Security

- **Encryption**: All backups encrypted at rest
- **Access Control**: Limited backup access
- **Audit Trail**: Log all backup operations
- **Key Management**: Separate encryption keys

### 4. Monitoring and Alerts

```yaml
Backup Alerts:
  - Backup failure
  - Backup age exceeds threshold
  - Storage space low
  - Recovery test failure
  - Replication lag high
```

## Common Issues and Solutions

### Backup Failures

**Issue**: Backup script fails with timeout
```bash
# Solution: Increase timeout and parallelize
PARALLEL_JOBS=4
find /data -type f | \
    parallel -j ${PARALLEL_JOBS} \
    'rediacc-cli storage upload --file {} --path backups/{/}'
```

### Storage Full

**Issue**: Backup storage reaching capacity
```bash
# Solution: Implement retention policy
./cleanup-old-backups.sh --older-than 30d --keep-weekly 4 --keep-monthly 12
```

### Slow Recovery

**Issue**: Recovery takes too long
```bash
# Solution: Use parallel restore
tar -tf backup.tar.gz | \
    parallel -j 8 'tar -xzf backup.tar.gz {}'
```

## Next Steps

- [Security Hardening](./security-hardening.md)