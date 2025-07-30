# List

List and view resources.

## Table of Contents

- [audit-logs](#audit-logs)
- [bridges](#bridges)
- [company-vault](#company-vault)
- [data-graph](#data-graph)
- [entity-history](#entity-history)
- [lookup-data](#lookup-data)
- [regions](#regions)
- [resource-limits](#resource-limits)
- [sessions](#sessions)
- [subscription](#subscription)
- [team-machines](#team-machines)
- [team-members](#team-members)
- [team-repositories](#team-repositories)
- [team-schedules](#team-schedules)
- [team-storages](#team-storages)
- [teams](#teams)
- [user-company](#user-company)
- [users](#users)


## audit-logs

View audit trail of system changes

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetAuditLogs`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows detailed audit logs of all system modifications including who made changes, when, and what was changed. Essential for compliance, security monitoring, and troubleshooting.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `start-date` | Start date for audit logs (ISO 8601 format) | false | 2024-01-01T00:00:00Z |
| `end-date` | End date for audit logs (ISO 8601 format) | false | 2024-01-31T23:59:59Z |
| `entity-filter` | Filter by entity type | false | Machine |
| `max-records` | Maximum records to retrieve (default: 1000) | false | 500 |

#### Examples

```bash
rediacc-cli list audit-logs --start-date 2024-01-01T00:00:00Z
```
Get audit logs from specific date

```bash
rediacc-cli list audit-logs --entity-filter Team --max-records 100
```
Get last 100 team-related changes

#### Notes

Audit logs are retained based on subscription tier. Includes create, update, delete operations and authentication events.

#### Business Rules

- User must be authenticated
- Can only see audit logs for your own company
- Default time period is 30 days if no start date provided
- Start date must come before end date
- Default limit is 1,000 records, maximum is 10,000
- Administrators see all company audit logs
- Regular users only see logs for resources they have access to
- Entity type filtering is optional
- Sensitive operations masked for non-administrators
- Users can always view their own user account logs


## bridges

List bridges in a specific region

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetRegionBridges`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Bridges are autonomous queue processors that execute tasks on machines. They poll for queue items and manage SSH connections to target machines.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `region` | Name of the region to list bridges from | true | us-east |

#### Examples

```bash
rediacc-cli list bridges us-east
```
List all bridges in the us-east region

#### Notes

Bridges must be running in bridge mode to process queue items.

#### Business Rules

- User must be authenticated with a valid token
- Region must exist within your company
- Region names are case-sensitive
- Regular users can only see vault data for bridges they have access to through team machines
- Access determined by: user is member of team that has machines using the bridge
- Administrators can see all bridge information including sensitive vault data
- Bridge credentials and user emails only visible to administrators
- Machine count shown for each bridge
- HasAccess indicator shows if user can use the bridge
- Special 'Global Bridges' entry may be shown for cloud-managed bridges


## company-vault

View company-wide vault configuration

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Displays the encrypted vault data stored at the company level. This typically contains global settings and shared credentials.

#### Examples

```bash
rediacc-cli list company-vault
```
View company vault contents

#### Notes

Requires company admin permissions. Vault data is automatically decrypted if you have the master password configured.

#### Business Rules

- User must be logged in with valid credentials
- Can only access vault data for your own company
- Returns company's main vault content and version
- Includes company name for identification
- Request must pass security validation
- Cross-company access not permitted
- GetCompanyVaults (admin-only) shows ALL vaults across organization
- Administrators can view decrypted credentials and sensitive data
- Two-factor authentication vaults excluded for security
- Bridge users allowed access for automated operations


## data-graph

Display company infrastructure as a hierarchical graph

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyDataGraphJson`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows the complete infrastructure topology including regions, bridges, teams, machines, and their relationships in a graph format.

#### Examples

```bash
rediacc-cli list data-graph
```
Display infrastructure graph

```bash
rediacc-cli list data-graph --output json | jq '.graph'
```
Extract graph data for visualization

#### Notes

Useful for understanding infrastructure topology and dependencies. JSON output can be used with graph visualization tools.

#### Business Rules

- User must be authenticated with valid credentials
- Can only view data for your own company
- Administrators see all infrastructure across the company
- Regular users only see infrastructure they have access to
- Access determined through team membership chain
- Users see teams they belong to and resources owned by those teams
- Machines only visible if user is member of owning team
- Bridges/regions visible if user has access to machines within them
- Data organized in hierarchical levels for visualization
- Both nodes and relationships filtered based on access rights


## entity-history

View change history for a specific entity

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetEntityHistory`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows the modification history for a specific entity (team, machine, user, etc.) identified by its credential GUID. Includes who made changes, when, and what was changed.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `entity_type` | Type of entity (Team, Machine, User, Region, Bridge, Repository, Storage, Schedule) | true | Machine |
| `credential` | Entity's unique credential (GUID) | true | 550e8400-e29b-41d4-a716-446655440000 |
| `max-records` | Maximum records to retrieve (default: 500) | false | 100 |

#### Examples

```bash
rediacc-cli list entity-history Machine 550e8400-e29b-41d4-a716-446655440000
```
View history for a specific machine

```bash
rediacc-cli list entity-history Team 123e4567-e89b-12d3-a456-426614174000 --max-records 50
```
View last 50 changes to a team

#### Notes

Get the credential from 'inspect' commands. History includes creates, updates, deletes, and vault changes.

#### Business Rules

- User must be authenticated
- Entity type is required and must be valid
- Entity credential (GUID) is mandatory
- Entity must exist in your company
- Access rules vary by entity type and user role
- Maximum 5,000 records, default 500
- Users can view their own history, admins see all
- Team/machine/repo access requires membership
- Sensitive operations filtered for non-administrators
- Access denial protects entity existence information


## lookup-data

Get dropdown/selection data for UI components

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetLookupData`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Provides lookup data used for dropdowns and selection lists in UI components. Returns teams, regions, bridges, machines, users, and other selectable resources based on your permissions.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `context` | Optional context filter (e.g., 'machine_create', 'queue_create') | false | machine_create |

#### Examples

```bash
rediacc-cli list lookup-data
```
Get all available lookup data

```bash
rediacc-cli list lookup-data --context queue_create
```
Get lookup data specific to queue creation

#### Notes

Returns different data based on user permissions. Admins see all resources, regular users see only accessible resources.

#### Business Rules

- User must be authenticated with valid token
- User must belong to a company
- Regular users only see teams they are members of
- Regular users only see machines belonging to their teams
- Regular users only see bridges/regions with accessible machines
- Regular users only see users in shared teams
- Administrators see all company resources
- Optional context parameter filters data for specific use cases
- Company isolation enforced - no cross-company visibility
- All data returned as JSON with value/label pairs


## regions

List all regions in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyRegions`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows geographic regions where you can deploy bridges and infrastructure. Each region can contain multiple bridges for distributed task processing.

#### Examples

```bash
rediacc-cli list regions
```
Display all regions with their vault configurations

#### Notes

Regions define geographic or logical boundaries for infrastructure deployment.

#### Business Rules

- User must be authenticated with a valid token
- Token must be active and not expired
- User must belong to a company
- Only regions within your company are visible
- Administrators can see full vault data for all regions
- Non-administrators cannot see sensitive vault data
- Bridge count is shown for each region
- Regions are sorted alphabetically by name
- No team membership required to view regions
- Empty result set is returned if no regions exist


## resource-limits

Display company resource limits and current usage

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyDashboardJson`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows your subscription limits and current usage for all resource types including teams, machines, bridges, repositories, and more. Multiple subscriptions stack their limits.

#### Examples

```bash
rediacc-cli list resource-limits
```
View resource usage vs limits in table format

```bash
rediacc-cli list resource-limits --output json | jq '.resourceLimits'
```
Extract resource limits data for monitoring

#### Notes

Useful for capacity planning and monitoring when approaching subscription limits. Returns 402 Payment Required when limits are exceeded.

#### Business Rules

- User must be authenticated and belong to a company
- Resource limits are additive across multiple active subscriptions
- Tracks 8 resource types: regions, teams, bridges, machines, repositories, schedules, storage, users
- Shows current usage count vs total allowed limit
- Usage percentage calculated for each resource type
- Default to Community tier if no active subscription
- Queue priority feature only for Premium/Elite tiers
- Resource limits by tier: Community (2), Advanced (3-10), Premium (5-50), Elite (10-200)
- Resources at 80% or more flagged as near limit
- Upgrade recommended if 3+ resources at 80% capacity


## sessions

List active sessions and authentication requests

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetUserRequests`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all active authentication sessions including session names, creation time, expiration, permissions, and originating IP addresses. Helps monitor access and detect unauthorized sessions.

#### Examples

```bash
rediacc-cli list sessions
```
View all active sessions

```bash
rediacc-cli list sessions --output json | jq '.[] | select(.sessionName | contains("CLI"))'
```
Filter CLI sessions

#### Notes

Sessions expire based on tokenExpirationHours setting. Bridge tokens may have extended expiration. Use 'logout' to terminate current session.

#### Business Rules

- Valid session token required with matching verification code
- Only active sessions are accepted (not expired or logged out)
- Token rotation up to 3 times before requiring latest token
- Users can only see their own sessions
- Company maintenance mode blocks non-administrator access
- Two-factor authentication must be completed if enabled
- Sessions sorted by creation time (newest first)
- Shows session name, creation time, permissions, and expiration
- No administrative override - admins also see only their own sessions
- Zero trust security model with full authentication on every request


## subscription

Show subscription details and billing information

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyDashboardJson`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Displays active subscriptions, plan details, expiration dates, and feature limits. Multiple subscriptions stack their resource limits. Shows both current usage and available capacity.

#### Examples

```bash
rediacc-cli list subscription
```
View subscription status and limits

```bash
rediacc-cli list subscription --output json | jq '.subscriptions'
```
Extract subscription data for monitoring

#### Notes

Plans: COMMUNITY (free), ADVANCED, PREMIUM, ELITE. Higher tiers offer more resources, priority levels, and features like schedules and distributed storage.

#### Business Rules

- User must be authenticated with valid session
- Can only view subscription information for your own company
- Shows highest tier subscription when multiple are active
- Subscription priority: Elite > Premium > Advanced > Community
- Active subscriptions must have ACTIVE status and future end date
- Resource limits are cumulative across all active subscriptions
- Trial subscriptions identified if 45 days or less (non-Community)
- Expiration warnings shown for subscriptions ending within 30 days
- Feature access varies by tier (Analytics for Premium/Elite, etc.)
- Queue priority features only visible to Premium/Elite subscribers


## team-machines

List machines in a specific team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamMachines`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all machines assigned to a team including their status, assigned bridge, vault configuration, and queue statistics. Machine names are unique across the company.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name to list machines from (comma-separated for multiple teams) | true | production-team |

#### Examples

```bash
rediacc-cli list team-machines production-team
```
List all machines in production team

```bash
rediacc-cli list team-machines team1,team2
```
List machines from multiple teams

#### Notes

You must be a member of the team to see its machines. Shows queue count for each machine.

#### Business Rules

- Valid user authentication required with active session
- User must be a member of the team to see machines
- Company boundary enforced - only see machines in your company
- Multiple teams supported with comma-separated names
- No team filter returns machines from all your teams
- Shows machine details including bridge, region, queue count
- Vault information includes encrypted credentials and settings
- Results sorted by team name then machine name
- Invalid team names silently filtered out
- Real-time queue count helps understand workload


## team-members

List members of a specific team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamMembers`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all users who have access to a team's resources. Team members can manage all resources within the team.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name to list members from | true | production-team |

#### Examples

```bash
rediacc-cli list team-members production-team
```
List all members of production team

#### Notes

You must be a member of the team to view its membership. Shows email addresses and join dates.

#### Business Rules

- User must be authenticated with valid token
- Can only view members of teams you belong to
- Company boundary restriction applies
- Team filtering with comma-separated names supported
- No team specified returns members from all your teams
- Shows user email and activation status
- Results are deduplicated - each user appears once
- No special permissions required beyond team membership
- Team names are case-sensitive
- No administrative override for non-member access


## team-repositories

List all repositories owned by a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamRepositories`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all code repositories associated with a team. Repositories are isolated environments for storing code, data, or applications with Docker support.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name to list repositories from | true | dev-team |

#### Examples

```bash
rediacc-cli list team-repositories dev-team
```
List all repositories in dev-team

```bash
rediacc-cli list team-repositories prod --output json | jq '.[].repoName'
```
Extract repository names from production team

#### Notes

You must be a member of the team. Shows repository names, credentials, and vault status.

#### Business Rules

- User must be logged in with valid credentials
- User must belong to the company
- User must be member of the team to view repositories
- Team name filtering with exact case-sensitive match
- Multiple teams supported with comma-separated names
- No team specified returns repositories from all your teams
- Shows repository name, GUID, and parent repository ID
- Vault data decrypted using company passphrase
- Results sorted by team name then repository name
- Three-level access control: authentication, company, team


## team-schedules

List scheduled tasks for a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamSchedules`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all scheduled tasks (cron jobs) configured for a team. Schedules automatically create queue items at specified intervals.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name to list schedules from | true | ops-team |

#### Examples

```bash
rediacc-cli list team-schedules ops-team
```
List all schedules in ops-team

```bash
rediacc-cli list team-schedules backup-team --output json
```
Get schedule details in JSON format

#### Notes

Requires Premium or Elite subscription. Shows cron expressions, target machines, and functions. You must be a team member.

#### Business Rules

- User must be authenticated with valid token
- Must be member of the team to view schedules
- Teams must belong to user's company
- Schedule viewing has no subscription limits
- Creating schedules requires Premium/Elite subscription
- Optional team filtering with comma-separated names
- Shows schedule name, team, and encrypted configuration
- Vault data includes cron expressions and parameters
- Results sorted by team name then schedule name
- Company encryption passphrase used for vault decryption


## team-storages

List storage resources for a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamStorages`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all external storage configurations for a team. Storage resources represent S3 buckets, Azure Blob Storage, or network shares used for backups and data exchange.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name to list storages from | true | data-team |

#### Examples

```bash
rediacc-cli list team-storages data-team
```
List all storage resources in data-team

```bash
rediacc-cli list team-storages backup --output json | jq '.[] | select(.storageName | contains("s3"))'
```
Find all S3 storage resources

#### Notes

You must be a member of the team. Storage credentials are encrypted in vaults. Used with repo_push/repo_pull functions.

#### Business Rules

- User must be logged in with valid credentials
- User account must be activated
- Can only access storage from your own company
- Must be member of the team to view storage
- Maintenance mode blocks non-administrator access
- Team name filtering supports comma-separated values
- Shows storage name, team, and decrypted configuration
- Storage credentials automatically decrypted
- Results sorted by team name then storage name
- Failed authentication results in 403 error


## teams

List all teams in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyTeams`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Displays teams with membership information, resource counts, and vault access. Only shows vault data for teams where you are a member.

#### Examples

```bash
rediacc-cli list teams
```
List all teams in table format

```bash
rediacc-cli list teams --output json
```
List all teams in JSON format for scripting

#### Notes

Requires authentication. Vault content is only visible for teams you belong to.

#### Business Rules

- User must be authenticated with valid credentials
- User must belong to a company to retrieve team information
- All teams in the company are visible to all users
- Vault data (sensitive information) is only visible for teams where you are a member
- Teams are sorted alphabetically by name
- Statistics show member count, machine count, repository count, schedule count, and storage count
- Encrypted vault data requires company passphrase for decryption
- No cross-company access is allowed
- Membership status indicator shows 1 for member, 0 for non-member
- Company name is included for context


## user-company

Display which company the current user belongs to

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetUserCompany`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows the company information for the currently authenticated user. Useful for verifying you're logged into the correct company account.

#### Examples

```bash
rediacc-cli list user-company
```
Display current user's company

#### Notes

Requires authentication. Shows company name and ID.

#### Business Rules

- Valid authentication token required
- Token rotation required for security
- Active session must not be expired
- Users can only view their own company information
- No cross-company access allowed
- Company name and vault data returned
- Shows team count, region count, and user count statistics
- Each user associated with exactly one company
- Company passphrase used to decrypt vault data
- Failed validation returns no company information


## users

List all users in your company

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyUsers`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all user accounts including their email, status (active/inactive), permission groups, 2FA status, and last login information. Useful for user management and audit purposes.

#### Examples

```bash
rediacc-cli list users
```
Display all company users in table format

```bash
rediacc-cli list users --output json | jq '.[] | select(.isActive == false)'
```
Find all inactive users

#### Notes

Requires authentication. Shows user status, permissions, and security settings. Personal information like passwords is never exposed.

#### Business Rules

- User must be logged in with valid authentication token
- Token must be active and not expired
- User account must be activated
- Token rotation required for security
- Users can only view users from their own company
- Administrators can see all users and their vault data
- Non-administrators can only see users who share at least one team with them
- Vault data (sensitive information) only visible to administrators
- Shows permission groups (Administrators, Users, or Bridges)
- Company boundary enforcement prevents cross-company visibility

