# Create

Create new resources in the system.

## Table of Contents

- [bridge](#bridge)
- [company](#company)
- [machine](#machine)
- [queue-item](#queue-item)
- [region](#region)
- [repository](#repository)
- [schedule](#schedule)
- [storage](#storage)
- [team](#team)
- [user](#user)


## bridge

Create a new bridge for task processing

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateBridge`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Bridges are autonomous queue processors that poll for tasks and execute them on machines via SSH. They run in bridge mode and can process multiple queue items in parallel. Each bridge must belong to a region.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `region` | string | Yes | - | Region where the bridge will be created | us-east |
| `vault` | string | No | - | JSON configuration for the bridge (batch size, timeout settings) | `{"batch_size": 5, "poll_interval": 30}` |
| `bridge` | string | Yes | - |  |  |

#### Examples

```bash
rediacc-cli create bridge us-east bridge-01
```
Create a basic bridge

```bash
rediacc-cli create bridge us-east high-priority-bridge --vault '{"batch_size":10}'
```
Create bridge with custom batch size

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create bridge bridge-01 us-east
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateBridge" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "regionName": "us-east",
    "bridgeName": "bridge-01"
}'
```

#### Notes

After creation, start the bridge with './bridge --bridge-mode token=&lt;token&gt; api_url=&lt;url&gt; master_password=&lt;pwd&gt;'. Use 'rediacc-cli login --target bridge-name' to get a bridge-specific token.

#### Business Rules

- Bridge name must be unique within the region
- Region must exist and belong to the user's company
- Bridge vault data cannot be null or empty
- Company must not have exceeded bridge resource limits
- User must have appropriate permissions
- Vault data must be valid JSON format
- Resource limits depend on subscription plan
- Bridge names are case-sensitive
- A bridge user account is automatically created for authentication
- Bridge credentials are stored securely in the vault


## company

Create a new company account with admin user

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateNewCompany`

**Authentication:** Required (credential-based with Rediacc-UserEmail and Rediacc-UserHash headers)

#### Details

Creates a new Rediacc company along with its admin user account. The email and password parameters are used to create the admin user who will own the company. This is typically the first step in setting up a new Rediacc deployment.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `activation_code` | string | No | - |  |  |
| `vault_defaults` | string | No | - |  |  |
| `company_name` | string | Yes | - |  |  |
| `subscription_plan` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create company
```

##### Auto-Generated cURL Examples

```bash
# Using credential authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateNewCompany" \
  -H "Content-Type: application/json" \
  -H "Rediacc-UserEmail: user@example.com" \
  -H "Rediacc-UserHash: YOUR_PASSWORD_HASH" \
  -d '{
    "companyName": "example-companyName",
    "subscriptionPlan": "example-subscriptionPlan"
}'
```

#### Business Rules

- Password hash must be exactly 32 bytes when hashed
- Activation code must be exactly 6 characters
- User email must not already exist in the system
- Email format must be valid (contains @ and .)
- Subscription plan must exist and be active (COMMUNITY, ADVANCED, PREMIUM, or ELITE)
- Company name is required and cannot be empty
- Default company vault configuration will be applied automatically
- COMMUNITY plan gets 10 years subscription, other plans get 30-day trial
- Company creation is atomic - all or nothing operation
- Email validation checks for proper format with @ symbol and domain


## machine

Create a new machine in a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateMachine`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Machines are remote servers that execute tasks via SSH. They must be associated with a team and connected through a bridge. Machine names must be unique across the entire company.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that will own this machine | production-team |
| `bridge` | string | Yes | - | Bridge to connect through (must exist in a region) | us-east-bridge-01 |
| `vault` | string | No | - | JSON with machine config (ip, user, ssh_port, datastore) | `{"ip": "10.0.0.5", "user": "rediacc", "datastore": "/mnt/datastore"}` |
| `machine` | string | Yes | - |  |  |

#### Examples

```bash
rediacc-cli create machine production-team us-east-bridge web-01
```
Create a basic machine

```bash
rediacc-cli create machine prod us-bridge db-01 --vault '{"ip":"10.0.0.10"}'
```
Create machine with IP configuration

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create machine example-team my-machine-01 bridge-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateMachine" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "bridgeName": "bridge-01",
    "machineName": "my-machine-01"
}'
```

#### Notes

You must be a member of the team. The bridge must exist and be accessible. Machine creation counts against subscription limits.

#### Business Rules

- Machine name must be unique across the entire company (not just within team)
- User must be a member of the specified team
- Bridge must exist in a region within the company
- Company must not have exceeded machine resource limits
- Machine vault data cannot be null or empty
- Vault data must be valid JSON format
- Team must exist within the user's company
- Resource limits depend on subscription plan
- Machine names are case-sensitive
- Bridge must be accessible and properly configured


## queue-item

Create a queue item for task execution

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateQueueItem`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Queue items represent tasks to be executed on machines by bridges. The bridge polls for items, executes them on the target machine via SSH, and reports results back.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that owns the machine | production-team |
| `machine` | string | Yes | - | Target machine for execution | web-server-01 |
| `bridge` | string | Yes | - | Bridge to process this queue item | us-east-bridge-01 |
| `vault` | string | No | - | JSON with task configuration and parameters | `{"function": "deploy", "version": "1.2.3"}` |
| `priority` | string | No | 3 | Priority level (1=highest, 5=lowest) | 1 |

#### Examples

```bash
rediacc-cli create queue-item prod web-01 us-bridge --priority 3
```
Create standard priority queue item

```bash
rediacc-cli create queue-item prod db-01 bridge-01 --priority 1 --vault-file task.json
```
Create high priority item with task config

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create queue-item example-team my-machine-01 bridge-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateQueueItem" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "machineName": "my-machine-01",
    "bridgeName": "bridge-01",
    "priority": "example-priority"
}'
```

#### Notes

Priority 1-2 requires Premium/Elite subscription. Community/Advanced limited to priority 3-5. You must be a team member.

#### Business Rules

- Priority must be between 1 and 5 (1=highest, 5=lowest)
- Priority levels 1-2 require Premium or Elite subscription
- Community/Advanced plans automatically reset priority to 4 (default)
- User must be a member of the team that owns the machine
- Machine must exist and belong to the specified team
- Bridge must exist and be accessible
- Machine can be optional for bridge-only queue items
- Queue vault data must be valid JSON format
- Task execution is subject to subscription concurrency limits
- Bridge must be in the same company as the machine


## region

Create a new region for organizing bridges

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateRegion`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Regions are logical or geographic groupings for bridges. They help organize infrastructure deployment across different locations or environments. Bridges must be associated with a region.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `name` | string | Yes | - | Unique name for the region (e.g., us-east, europe-west) | us-east |
| `vault` | string | No | - | JSON configuration for the region (provider settings, metadata) | `{"provider": "aws", "zone": "us-east-1"}` |
| `vault-file` | string | No | - | File containing JSON vault configuration | region-config.json |

#### Examples

```bash
rediacc-cli create region us-east
```
Create a basic region

```bash
rediacc-cli create region europe-west --vault '{"provider":"azure","location":"westeurope"}'
```
Create region with provider configuration

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create region example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateRegion" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "regionName": "us-east"
}'
```

#### Notes

Regions cannot be deleted if they contain bridges. Region names must be unique across the company.

#### Business Rules

- Region name must be unique within the company
- Region vault data cannot be null or empty
- Company must not have exceeded region resource limits
- User must pass authentication and authorization checks
- Vault data must be valid JSON format
- Resource limits depend on subscription plan
- Region names are case-sensitive
- Regions with bridges cannot be deleted
- Region creation is tracked in audit log
- Admin permissions may be required depending on company settings


## repository

Create a new repository for code and data storage

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateRepository`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Repositories are isolated environments for storing code, data, or applications. They support Docker-based deployments via Rediaccfile, have dedicated storage volumes, and can be synchronized across machines.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that will own this repository | dev-team |
| `vault` | string | No | - | JSON configuration (size, type, settings) | `{"size": "10G", "type": "docker"}` |
| `parent_repo` | string | No | - |  |  |
| `repository` | string | Yes | - |  |  |
| `repo_guid` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create repository example-team my-repo
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateRepository" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "repoName": "my-repo",
    "repoGuid": "example-repoGuid"
}'
```

#### Business Rules

- Repository name must be unique within the team
- User must be a member of the specified team
- Repository vault data cannot be null or empty
- Company must not have exceeded repository resource limits
- Team must exist within the user's company
- Vault data must be valid JSON format
- Parent repository must exist if specified
- Resource limits depend on subscription plan
- Repository names are case-sensitive
- Parent repository must be in the same team
- GUID must be a valid UUID format if specified
- GUID must be unique across all repositories if specified
- GUID is auto-generated if not provided


## schedule

Create a scheduled task

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateSchedule`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Schedules automatically create queue items at specified intervals. They support cron expressions, time zones, and can be configured to run specific functions on target machines.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that will own this schedule | ops-team |
| `vault` | string | No | - | JSON with schedule configuration (cron, function, target) | `{"cron": "0 2 * * *", "timezone": "UTC", "function": "repo_push", "machine": "backup-01", "params": {...}}` |
| `schedule` | string | Yes | - |  |  |

#### Examples

```bash
rediacc-cli create schedule ops-team daily-backup
```
Create a basic schedule

```bash
rediacc-cli create schedule prod hourly-sync --vault '{"cron":"0 * * * *","function":"repo_pull","machine":"sync-01"}'
```
Create hourly sync schedule

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create schedule example-team daily-backup
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateSchedule" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "scheduleName": "daily-backup"
}'
```

#### Notes

Schedules require Premium or Elite subscription. Cron expressions follow standard format. Schedule execution creates queue items with configured priority.

#### Business Rules

- Schedule name must be unique within the team
- User must be a member of the specified team
- Schedule vault data cannot be null or empty
- Company must not have exceeded schedule resource limits
- Schedules require Premium or Elite subscription plan
- Team must exist within the user's company
- Vault data must be valid JSON format
- Resource limits depend on subscription plan
- Schedule names are case-sensitive
- Cron expressions must follow standard format


## storage

Create a new storage resource

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateStorage`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Storage resources represent external storage systems like S3 buckets, Azure Blob Storage, or network shares. They're used for backups, archives, and data exchange between systems.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - | Team that will own this storage | data-team |
| `vault` | string | No | - | JSON with storage credentials and configuration | `{"type": "s3", "bucket": "my-backups", "region": "us-east-1", "access_key": "...", "secret_key": "..."}` |
| `storage` | string | Yes | - |  |  |

#### Examples

```bash
rediacc-cli create storage backup-team s3-archive
```
Create a basic storage resource

```bash
rediacc-cli create storage prod azure-backup --vault-file azure-config.json
```
Create Azure storage with credentials from file

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create storage example-team backup-storage
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateStorage" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "storageName": "backup-storage"
}'
```

#### Notes

Storage credentials are encrypted in the vault. Supported types include S3, Azure Blob, GCS, SFTP, and SMB. Used with 'repo_push' and 'repo_pull' queue functions.

#### Business Rules

- Storage name must be unique within the team
- User must be a member of the specified team
- Storage vault data cannot be null or empty
- Company must not have exceeded storage resource limits
- Team must exist within the user's company
- Vault data must be valid JSON format
- Resource limits depend on subscription plan
- Storage names are case-sensitive
- Credentials in vault are automatically encrypted
- Storage types must be supported (S3, Azure, GCS, SFTP, SMB)


## team

Create a new team in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateTeam`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Teams are organizational units that own machines, repositories, and other resources. Team members can manage all resources within the team.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `name` | string | Yes | - | Unique name for the team | production-team |
| `vault` | string | No | - | JSON object with team configuration (SSH keys, settings) | `{"SSH_PRIVATE_KEY": "-----BEGIN RSA..."}` |
| `vault-file` | string | No | - | File containing JSON vault data | team-config.json |

#### Examples

```bash
rediacc-cli create team production-team
```
Create a basic team

```bash
rediacc-cli create team dev-team --vault-file team-config.json
```
Create team with vault configuration from file

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create team example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateTeam" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team"
}'
```

#### Notes

Team creation counts against your subscription limits. The creator automatically becomes a team member.

#### Business Rules

- Team name must be unique within the company
- Team vault data cannot be null or empty
- User must pass authentication and authorization checks
- Company must not have exceeded team resource limits
- Creator is automatically added as a team member
- Team names are case-sensitive
- Vault data must be valid JSON format
- Resource limits depend on subscription plan
- Team creation is tracked in audit log
- Bridge users cannot be added to teams


## user

Create a new user in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateNewUser`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Creates a new user account that can access the company resources. Users must be activated before they can log in.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `activation_code` | string | No | - |  |  |
| `new_user_email` | string | Yes | - |  |  |
| `new_user_hash` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli create user
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateNewUser" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "newUserEmail": "example-newUserEmail",
    "newUserHash": "example-newUserHash"
}'
```

#### Business Rules

- User email must not already exist in the system
- Password hash must be exactly 32 bytes
- Activation code must be exactly 6 characters
- Email format validation is performed
- Company must not have exceeded user resource limits
- User creation is atomic with transactional safety
- New users are created in inactive state and must be activated
- Empty user vault is created automatically
- Resource limits depend on subscription plan
- User email must be unique across the entire system

