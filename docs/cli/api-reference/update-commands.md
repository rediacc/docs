# Update

Update existing resources.

## Table of Contents

- [bridge](#bridge)
- [machine](#machine)
- [machine-bridge](#machine-bridge)
- [machine-status](#machine-status)
- [region](#region)
- [repository](#repository)
- [repository-vault](#repository-vault)
- [schedule](#schedule)
- [schedule-vault](#schedule-vault)
- [storage](#storage)
- [storage-vault](#storage-vault)
- [team](#team)


## bridge

Rename a bridge

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateBridgeName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing bridge within a region. Machine assignments remain unchanged. Running bridge processes are not affected.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `region` | Region containing the bridge | true | us-east |
| `name` | Current bridge name | true | old-bridge |
| `new_name` | New bridge name (unique within region) | true | new-bridge |

#### Examples

```bash
rediacc-cli update bridge us-east bridge-01 main-bridge
```
Rename bridge for clarity

```bash
rediacc-cli update bridge europe test-bridge prod-bridge
```
Rename test bridge to production

#### Notes

Bridge names must be unique within a region. Update machine assignments if needed using 'update machine-bridge'.

#### Business Rules

- User must be authenticated to perform this operation
- User must belong to the same company as the bridge
- Current bridge name must exist in the region
- New bridge name must be unique within the region
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- Bridge authentication token remains unchanged
- Machine assignments to the bridge are preserved
- Active connections are not interrupted
- Name change is tracked in audit logs


## machine

Rename a machine

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing machine. The new name must be unique across the entire company. Active queue items continue processing.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the machine | true | production-team |
| `name` | Current machine name | true | old-server |
| `new_name` | New machine name (company-wide unique) | true | new-server |

#### Examples

```bash
rediacc-cli update machine prod web-01 web-server-01
```
Rename machine for clarity

#### Notes

Machine names are globally unique. Update schedules and scripts that reference the old name.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Current machine name must exist within the team
- New machine name must be unique within the team
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- Machine status and bridge assignment remain unchanged
- SSH connection settings are preserved
- Repository associations are maintained
- Name change is tracked in audit logs


## machine-bridge

Reassign a machine to a different bridge

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineAssignedBridge`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes which bridge processes queue items for a machine. Useful for load balancing, maintenance, or moving machines between regions. Pending queue items remain with the original bridge.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the machine | true | production-team |
| `name` | Machine to reassign | true | web-server-01 |
| `new_bridge` | Target bridge name (must exist) | true | us-west-bridge-01 |

#### Examples

```bash
rediacc-cli update machine-bridge prod db-01 us-west-bridge
```
Move machine to different bridge

```bash
rediacc-cli update machine-bridge dev test-server local-bridge
```
Reassign test server to local bridge

#### Notes

New queue items will be processed by the new bridge. Existing items in PENDING state remain with original bridge. Consider queue state before reassigning.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Machine must exist within the team
- Bridge must exist and belong to the same company
- Bridge and machine must be in the same region
- Bridge must be in an active state
- Previous bridge assignment will be removed
- Active tasks may need to be rescheduled
- Machine remains accessible through new bridge
- Assignment change is tracked in audit logs


## machine-status

Update the status of a machine

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineStatus`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Sets a custom status message for a machine, useful for maintenance windows, debugging, or operational notes. The status is displayed in machine listings.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the machine | true | production-team |
| `name` | Machine name to update | true | web-server-01 |
| `status` | New status message | true | Under maintenance until 5pm |

#### Examples

```bash
rediacc-cli update machine-status prod web-01 'Online'
```
Set machine as online

```bash
rediacc-cli update machine-status prod db-01 'Maintenance mode - do not use'
```
Mark machine for maintenance

#### Notes

Status is free-form text. Use consistent conventions for automation. Requires team membership.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team OR be a bridge that owns at least one machine in the same team
- Machine must exist within the team
- Status must be one of: online, offline, maintenance, error
- Status change affects task scheduling
- Offline machines will not receive new tasks
- Maintenance status prevents automatic task assignment
- Error status indicates machine needs attention
- Status changes are immediately reflected in scheduling
- Status update is tracked in audit logs
- Bridges can update status of any machine in teams where they own at least one machine


## region

Rename a region

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateRegionName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing region. All bridges within the region remain associated. Update any scripts or configurations that reference the old name.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `name` | Current region name | true | old-region |
| `new_name` | New region name (must be unique) | true | new-region |

#### Examples

```bash
rediacc-cli update region us-east us-east-1
```
Rename region for clarity

```bash
rediacc-cli update region test production
```
Promote test region to production

#### Notes

Region names must be unique within the company. Bridges and their associations are preserved.

#### Business Rules

- User must be authenticated to perform this operation
- User must belong to the same company as the region
- Current region name must exist in the company
- New region name must be unique within the company
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- All bridges in the region remain associated
- Machine assignments to the region are preserved
- Region vault data remains unchanged
- Name change is tracked in audit logs


## repository

Rename a repository

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateRepositoryName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing repository within a team. Repository data and configurations are preserved. Update deployment scripts that reference the old name.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the repository | true | dev-team |
| `name` | Current repository name | true | old-app |
| `new_name` | New repository name (unique within team) | true | new-app |

#### Examples

```bash
rediacc-cli update repository dev webapp web-application
```
Rename repository for clarity

```bash
rediacc-cli update repository prod api-v1 api-v2
```
Version update in repository name

#### Notes

Repository names must be unique within a team. Running containers are not affected. Update sync scripts and schedules.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Current repository name must exist within the team
- New repository name must be unique within the team
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- Repository must be offline during rename
- Physical files are not renamed, only the reference
- Schedule references are automatically updated
- Name change is tracked in audit logs


## repository-vault

Update repository configuration vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateRepositoryVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Updates the encrypted configuration data for a repository. Used to modify repository settings, environment variables, deployment configurations, and secrets.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the repository | true | dev-team |
| `name` | Repository name | true | web-app |
| `vault` | JSON configuration data | false | `{"size": "20G", "env": {"NODE_ENV": "production"}}` |
| `vault-file` | File containing JSON vault data | false | repo-config.json |
| `vault-version` | Vault schema version (default: 1) | false | 2 |

#### Examples

```bash
rediacc-cli update repository-vault dev web-app --vault '{"size":"30G"}'
```
Update repository size

```bash
rediacc-cli update repository-vault prod api --vault-file new-config.json
```
Update repository config from file

#### Notes

Vault data is encrypted. Changes may require repository restart. Use 'inspect repository' to see current vault.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Repository must exist within the team
- Vault data must be valid JSON format
- Vault data is encrypted before storage
- Maximum vault size is 64KB after encryption
- Previous vault data is overwritten
- Repository configuration like size and mount options can be updated
- Changes take effect on next repository mount
- Vault update is tracked in audit logs


## schedule

Rename a scheduled task

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateScheduleName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing schedule. The cron expression and task configuration remain unchanged.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the schedule | true | ops-team |
| `name` | Current schedule name | true | old-backup |
| `new_name` | New schedule name (unique within team) | true | daily-backup |

#### Examples

```bash
rediacc-cli update schedule ops backup-task daily-backup
```
Rename schedule for clarity

```bash
rediacc-cli update schedule prod sync-v1 sync-v2
```
Version update in schedule name

#### Notes

Schedule names must be unique within a team. The schedule continues running with the new name.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Current schedule name must exist within the team
- New schedule name must be unique within the team
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- Schedule timing and configuration remain unchanged
- Schedule enabled/disabled state is preserved
- Execution history is maintained
- Name change is tracked in audit logs


## schedule-vault

Update schedule configuration

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateScheduleVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Updates the encrypted vault containing schedule settings including cron expression, target machine, function, and parameters.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the schedule | true | ops-team |
| `name` | Schedule name | true | daily-backup |
| `vault` | JSON with schedule configuration | false | `{"cron": "0 2 * * *", "function": "repo_push", "machine": "backup-01", "params": {...}}` |
| `vault-file` | File containing JSON vault data | false | schedule-config.json |
| `vault-version` | Vault schema version (default: 1) | false | 2 |

#### Examples

```bash
rediacc-cli update schedule-vault ops backup --vault '{"cron":"0 3 * * *"}'
```
Change schedule time to 3 AM

```bash
rediacc-cli update schedule-vault prod sync --vault-file new-schedule.json
```
Update complete schedule config

#### Notes

Requires Premium or Elite subscription. Changes take effect at next scheduled run. Use standard cron format.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Schedule must exist within the team
- Vault data must be valid JSON format
- Vault data is encrypted before storage
- Maximum vault size is 64KB after encryption
- Schedule timing, repositories, and actions can be updated
- Cron expressions must be valid if included
- Changes take effect on next schedule evaluation
- Vault update is tracked in audit logs


## storage

Rename a storage resource

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateStorageName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing storage configuration. The actual storage backend (S3 bucket, Azure container, etc.) is not affected.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the storage | true | backup-team |
| `name` | Current storage name | true | old-backup |
| `new_name` | New storage name (unique within team) | true | new-backup |

#### Examples

```bash
rediacc-cli update storage backup s3-temp s3-archive
```
Rename storage for clarity

```bash
rediacc-cli update storage data azure-test azure-prod
```
Promote test storage to production

#### Notes

Storage names must be unique within a team. Update backup scripts and schedules that reference the old name.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Current storage name must exist within the team
- New storage name must be unique within the team
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- Storage connection settings remain unchanged
- Schedule references are automatically updated
- Active backup operations are not affected
- Name change is tracked in audit logs


## storage-vault

Update storage credentials and configuration

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateStorageVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Updates the encrypted vault containing storage credentials and settings. Used to change access keys, endpoints, or storage parameters.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the storage | true | backup-team |
| `name` | Storage name | true | s3-backup |
| `vault` | JSON with storage credentials and config | false | `{"type": "s3", "bucket": "backups", "access_key": "...", "secret_key": "..."}` |
| `vault-file` | File containing JSON vault data | false | storage-creds.json |
| `vault-version` | Vault schema version (default: 1) | false | 2 |

#### Examples

```bash
rediacc-cli update storage-vault backup s3-main --vault-file new-creds.json
```
Update S3 credentials from file

```bash
rediacc-cli update storage-vault data azure-storage --vault '{"container":"new-container"}'
```
Change Azure container

#### Notes

Credentials are encrypted. Test access after updating. Supports S3, Azure Blob, GCS, SFTP, and SMB.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the specified team
- Storage configuration must exist within the team
- Vault data must be valid JSON format
- Vault data is encrypted before storage
- Maximum vault size is 64KB after encryption
- Cloud storage credentials can be updated
- Connection strings and API keys must be valid
- Changes take effect on next backup operation
- Vault update is tracked in audit logs


## team

Rename a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateTeamName`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the name of an existing team. All resources remain associated with the team. References in scripts and configurations must be updated manually.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `name` | Current team name | true | old-team-name |
| `new_name` | New team name (must be unique) | true | new-team-name |

#### Examples

```bash
rediacc-cli update team dev-team development-team
```
Rename dev-team to development-team

#### Notes

Team renaming doesn't affect resources or memberships. Update any automation scripts that reference the old name.

#### Business Rules

- User must be authenticated to perform this operation
- User must be a member of the team being renamed
- Current team name must exist in the company
- New team name must be unique within the company
- New name must be between 1 and 50 characters
- New name cannot be empty or only whitespace
- Team memberships and permissions are preserved
- All references to the team are automatically updated
- Team vault data remains unchanged
- Name change is tracked in audit logs

