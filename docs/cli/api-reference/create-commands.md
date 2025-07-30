# Create Commands

Commands for creating new resources in the system.

## Table of Contents

- [create bridge](#create-bridge)
- [create company](#create-company)
- [create machine](#create-machine)
- [create queue-item](#create-queue-item)
- [create region](#create-region)
- [create repository](#create-repository)
- [create schedule](#create-schedule)
- [create storage](#create-storage)
- [create team](#create-team)
- [create user](#create-user)


## create bridge


### bridge

Create a new bridge for task processing

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateBridge`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Bridges are autonomous queue processors that poll for tasks and execute them on machines via SSH. They run in bridge mode and can process multiple queue items in parallel. Each bridge must belong to a region.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `region` | Region where the bridge will be created | true | us-east |
| `name` | Unique name for the bridge | true | bridge-01 |
| `vault` | JSON configuration for the bridge (batch size, timeout settings) | false | `{"batch_size": 5, "poll_interval": 30}` |
| `vault-file` | File containing JSON vault configuration | false | bridge-config.json |

#### Examples

```bash
rediacc-cli create bridge us-east bridge-01
```
Create a basic bridge

```bash
rediacc-cli create bridge us-east high-priority-bridge --vault '{"batch_size":10}'
```
Create bridge with custom batch size

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


## create company


### company

Create a new company account with admin user

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateNewCompany`
**Authentication:** Required (credential-based with Rediacc-UserEmail and Rediacc-UserHash headers)

#### Details

Creates a new Rediacc company along with its admin user account. The email and password parameters are used to create the admin user who will own the company. This is typically the first step in setting up a new Rediacc deployment.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `name` | Company name | true | Acme Corporation |
| `email` | Admin user email address | true | admin@acme.com |
| `password` | Admin user password | true | SecurePass123! |
| `activation-code` | Activation code for company creation | false | ABC123 |
| `plan` | Initial subscription plan | false | ADVANCED |

#### Examples

```bash
rediacc-cli create company 'Acme Corp' --email admin@acme.com
```
Create company with Community plan

```bash
rediacc-cli create company 'Enterprise Inc' --email admin@enterprise.com --plan ELITE
```
Create company with Elite plan

#### Notes

The admin user is automatically activated and becomes the company owner. Activation codes are provided by Rediacc sales.

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


## create machine


### machine

Create a new machine in a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateMachine`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Machines are remote servers that execute tasks via SSH. They must be associated with a team and connected through a bridge. Machine names must be unique across the entire company.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that will own this machine | true | production-team |
| `bridge` | Bridge to connect through (must exist in a region) | true | us-east-bridge-01 |
| `name` | Unique name for the machine (company-wide) | true | web-server-01 |
| `vault` | JSON with machine config (ip, user, ssh_port, datastore) | false | `{"ip": "10.0.0.5", "user": "rediacc", "datastore": "/mnt/datastore"}` |

#### Examples

```bash
rediacc-cli create machine production-team us-east-bridge web-01
```
Create a basic machine

```bash
rediacc-cli create machine prod us-bridge db-01 --vault '{"ip":"10.0.0.10"}'
```
Create machine with IP configuration

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


## create queue-item


### queue-item

Create a queue item for task execution

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateQueueItem`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Queue items represent tasks to be executed on machines by bridges. The bridge polls for items, executes them on the target machine via SSH, and reports results back.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the machine | true | production-team |
| `machine` | Target machine for execution | true | web-server-01 |
| `bridge` | Bridge to process this queue item | true | us-east-bridge-01 |
| `priority` | Priority level (1=highest, 5=lowest) | false | 1 |
| `vault` | JSON with task configuration and parameters | false | `{"function": "deploy", "version": "1.2.3"}` |

#### Examples

```bash
rediacc-cli create queue-item prod web-01 us-bridge --priority 3
```
Create standard priority queue item

```bash
rediacc-cli create queue-item prod db-01 bridge-01 --priority 1 --vault-file task.json
```
Create high priority item with task config

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


## create region


### region

Create a new region for organizing bridges

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateRegion`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Regions are logical or geographic groupings for bridges. They help organize infrastructure deployment across different locations or environments. Bridges must be associated with a region.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `name` | Unique name for the region (e.g., us-east, europe-west) | true | us-east |
| `vault` | JSON configuration for the region (provider settings, metadata) | false | `{"provider": "aws", "zone": "us-east-1"}` |
| `vault-file` | File containing JSON vault configuration | false | region-config.json |

#### Examples

```bash
rediacc-cli create region us-east
```
Create a basic region

```bash
rediacc-cli create region europe-west --vault '{"provider":"azure","location":"westeurope"}'
```
Create region with provider configuration

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


## create repository


### repository

Create a new repository for code and data storage

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateRepository`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Repositories are isolated environments for storing code, data, or applications. They support Docker-based deployments via Rediaccfile, have dedicated storage volumes, and can be synchronized across machines.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that will own this repository | true | dev-team |
| `name` | Unique name for the repository within the team | true | web-app |
| `vault` | JSON configuration (size, type, settings) | false | `{"size": "10G", "type": "docker"}` |
| `vault-file` | File containing JSON vault configuration | false | repo-config.json |
| `guid` | Optional specific GUID for the repository | false | 550e8400-e29b-41d4-a716-446655440000 |

#### Examples

```bash
rediacc-cli create repository dev-team web-app
```
Create a basic repository

```bash
rediacc-cli create repository prod backend-api --vault '{"size":"20G","backup":"daily"}'
```
Create repository with size and backup configuration

```bash
rediacc-cli create repository dev legacy-app --guid 550e8400-e29b-41d4-a716-446655440000
```
Create repository with specific GUID

#### Notes

Repository names must be unique within a team. After creation, deploy code using 'rediacc sync' or manage with queue functions like 'repo_new', 'repo_up', etc.

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


## create schedule


### schedule

Create a scheduled task

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateSchedule`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Schedules automatically create queue items at specified intervals. They support cron expressions, time zones, and can be configured to run specific functions on target machines.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that will own this schedule | true | ops-team |
| `name` | Unique name for the schedule within the team | true | daily-backup |
| `vault` | JSON with schedule configuration (cron, function, target) | false | `{"cron": "0 2 * * *", "timezone": "UTC", "function": "repo_push", "machine": "backup-01", "params": {...}}` |
| `vault-file` | File containing JSON schedule configuration | false | schedule-config.json |

#### Examples

```bash
rediacc-cli create schedule ops-team daily-backup
```
Create a basic schedule

```bash
rediacc-cli create schedule prod hourly-sync --vault '{"cron":"0 * * * *","function":"repo_pull","machine":"sync-01"}'
```
Create hourly sync schedule

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


## create storage


### storage

Create a new storage resource

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateStorage`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Storage resources represent external storage systems like S3 buckets, Azure Blob Storage, or network shares. They're used for backups, archives, and data exchange between systems.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that will own this storage | true | data-team |
| `name` | Unique name for the storage within the team | true | backup-s3 |
| `vault` | JSON with storage credentials and configuration | false | `{"type": "s3", "bucket": "my-backups", "region": "us-east-1", "access_key": "...", "secret_key": "..."}` |
| `vault-file` | File containing JSON vault configuration with credentials | false | storage-creds.json |

#### Examples

```bash
rediacc-cli create storage backup-team s3-archive
```
Create a basic storage resource

```bash
rediacc-cli create storage prod azure-backup --vault-file azure-config.json
```
Create Azure storage with credentials from file

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


## create team


### team

Create a new team in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateTeam`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Teams are organizational units that own machines, repositories, and other resources. Team members can manage all resources within the team.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `name` | Unique name for the team | true | production-team |
| `vault` | JSON object with team configuration (SSH keys, settings) | false | `{"SSH_PRIVATE_KEY": "-----BEGIN RSA..."}` |
| `vault-file` | File containing JSON vault data | false | team-config.json |

#### Examples

```bash
rediacc-cli create team production-team
```
Create a basic team

```bash
rediacc-cli create team dev-team --vault-file team-config.json
```
Create team with vault configuration from file

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


## create user


### user

Create a new user in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateNewUser`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Creates a new user account that can access the company resources. Users must be activated before they can log in.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `email` | User's email address | true | john.doe@company.com |
| `password` | User's password (will be prompted if not provided) | false | SecurePass123! |
| `activation-code` | Activation code for user creation | false | USER456 |

#### Examples

```bash
rediacc-cli create user john.doe@company.com
```
Create user and prompt for password

```bash
rediacc-cli create user jane.smith@company.com --password 'Pass123!'
```
Create user with specified password

#### Notes

New users must be activated using 'rediacc-cli user activate' before they can log in. Company admins can provide activation codes.

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

