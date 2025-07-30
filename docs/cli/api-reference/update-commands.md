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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `region` | string | Yes | - | Region containing the bridge | us-east |
| `current_bridge_name` | string | Yes | - |  |  |
| `new_name` | string | Yes | - | New bridge name (unique within region) | new-bridge |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update bridge us-east
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateBridgeName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "regionName": "us-east",
    "currentBridgeName": "example-currentBridgeName",
    "newBridgeName": "example-newBridgeName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the machine | production-team |
| `current_machine_name` | string | Yes | - |  |  |
| `new_name` | string | Yes | - | New machine name (company-wide unique) | new-server |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update machine example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "currentMachineName": "example-currentMachineName",
    "newMachineName": "example-newMachineName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the machine | production-team |
| `machine` | string | Yes | - |  |  |
| `new_name` | string | Yes | - |  |  |

#### Examples

```bash
rediacc-cli update machine-bridge prod db-01 us-west-bridge
```
Move machine to different bridge

```bash
rediacc-cli update machine-bridge dev test-server local-bridge
```
Reassign test server to local bridge

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update machine-bridge example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineAssignedBridge" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "machineName": "my-machine-01",
    "newBridgeName": "example-newBridgeName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the machine | production-team |
| `status` | string | Yes | - |  |  |
| `machine` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update machine-status example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineStatus" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "machineName": "my-machine-01",
    "machineStatus": "example-machineStatus"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `new_name` | string | Yes | - | New region name (must be unique) | new-region |
| `current_region_name` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update region
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateRegionName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "currentRegionName": "example-currentRegionName",
    "newRegionName": "example-newRegionName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the repository | dev-team |
| `current_repo_name` | string | Yes | - |  |  |
| `new_name` | string | Yes | - | New repository name (unique within team) | new-app |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update repository example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateRepositoryName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "currentRepoName": "example-currentRepoName",
    "newRepoName": "example-newRepoName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the repository | dev-team |
| `vault` | string | No | - | JSON configuration data | `{"size": "20G", "env": {"NODE_ENV": "production"}}` |
| `repository` | string | Yes | - |  |  |
| `vault_version` | string | No | - |  |  |

#### Examples

```bash
rediacc-cli update repository-vault dev web-app --vault '{"size":"30G"}'
```
Update repository size

```bash
rediacc-cli update repository-vault prod api --vault-file new-config.json
```
Update repository config from file

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update repository-vault example-team my-repo
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateRepositoryVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "repoName": "my-repo"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the schedule | ops-team |
| `current_schedule_name` | string | Yes | - |  |  |
| `new_name` | string | Yes | - | New schedule name (unique within team) | daily-backup |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update schedule example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateScheduleName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "currentScheduleName": "example-currentScheduleName",
    "newScheduleName": "example-newScheduleName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the schedule | ops-team |
| `vault` | string | No | - | JSON with schedule configuration | `{"cron": "0 2 * * *", "function": "repo_push", "machine": "backup-01", "params": {...}}` |
| `schedule` | string | Yes | - |  |  |
| `vault_version` | string | No | - |  |  |

#### Examples

```bash
rediacc-cli update schedule-vault ops backup --vault '{"cron":"0 3 * * *"}'
```
Change schedule time to 3 AM

```bash
rediacc-cli update schedule-vault prod sync --vault-file new-schedule.json
```
Update complete schedule config

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update schedule-vault example-team daily-backup
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateScheduleVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "scheduleName": "daily-backup"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the storage | backup-team |
| `current_storage_name` | string | Yes | - |  |  |
| `new_name` | string | Yes | - | New storage name (unique within team) | new-backup |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update storage example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateStorageName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "currentStorageName": "example-currentStorageName",
    "newStorageName": "example-newStorageName"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the storage | backup-team |
| `vault` | string | No | - | JSON with storage credentials and config | `{"type": "s3", "bucket": "backups", "access_key": "...", "secret_key": "..."}` |
| `storage` | string | Yes | - |  |  |
| `vault_version` | string | No | - |  |  |

#### Examples

```bash
rediacc-cli update storage-vault backup s3-main --vault-file new-creds.json
```
Update S3 credentials from file

```bash
rediacc-cli update storage-vault data azure-storage --vault '{"container":"new-container"}'
```
Change Azure container

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update storage-vault example-team backup-storage
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateStorageVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "storageName": "backup-storage"
}'
```

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

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `new_name` | string | Yes | - | New team name (must be unique) | new-team-name |
| `current_team_name` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli update team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateTeamName" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "currentTeamName": "example-currentTeamName",
    "newTeamName": "example-newTeamName"
}'
```

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

