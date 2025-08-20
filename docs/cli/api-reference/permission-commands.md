# Permission

Permission operations.

## Table of Contents

- [add](#add)
- [assign](#assign)
- [create-group](#create-group)
- [delete-group](#delete-group)
- [list-group](#list-group)
- [list-groups](#list-groups)
- [remove](#remove)


## add

Add permission to a group

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreatePermissionInGroup`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Grants a specific API endpoint permission to a permission group. Users in the group gain access to that endpoint.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `group` | string | Yes | - | Permission group to modify | developers |
| `name` | string | Yes | - | Permission name (API endpoint) | CreateMachine |

#### Examples

```bash
rediacc permission add developers CreateMachine
```
Allow developers to create machines

```bash
rediacc permission add read-only GetTeamMachines
```
Allow read-only users to list machines

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission add example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreatePermissionInGroup" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "permissionGroupName": "example-permissionGroupName",
    "permissionName": "example-permissionName"
}'
```

#### Notes

Permission names correspond to API endpoints. Use 'list lookup-data' to see available permissions.

#### Business Rules

- User must be authenticated with valid credentials
- Permission group must exist in your company
- Cannot add permissions to Administrators group (has all permissions)
- Cannot add permissions to Bridges group (protected system group)
- Permission must be a valid system permission name
- Cannot add duplicate permissions to a group
- Only custom groups can have permissions added
- Permission names must match approved API endpoints
- Each addition is logged in audit trail
- Company boundaries are strictly enforced


## assign

Assign permission group to user

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateUserAssignedPermissions`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes a user's permission group, granting them all permissions associated with that group. Users can only belong to one permission group.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `group` | string | Yes | - | Permission group to assign | developers |
| `user_email` | string | Yes | - |  |  |

#### Examples

```bash
rediacc permission assign john@company.com developers
```
Give John developer permissions

```bash
rediacc permission assign contractor@external.com read-only
```
Limit contractor to read-only access

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission assign
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateUserAssignedPermissions" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "userEmail": "example-userEmail",
    "permissionGroupName": "example-permissionGroupName"
}'
```

#### Notes

Replaces user's current permission group. Changes take effect on next login. Requires admin permissions.

#### Business Rules

- User must be authenticated with valid credentials
- Target user must exist in your company
- Permission group must exist in your company
- Can only assign groups with equal or fewer privileges
- Only administrators can assign users to Bridges group
- Cannot remove last active administrator from company
- Changes take effect immediately for active sessions
- Higher privilege tokens are automatically downgraded
- Assignment is logged with token modification count
- Users can only belong to one permission group


## create-group

Create a new permission group

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreatePermissionGroup`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Creates a permission group that can be assigned to users. Permission groups control access to API endpoints and system features.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `name` | string | Yes | - | Unique name for the permission group | developers |

#### Examples

```bash
rediacc permission create-group developers
```
Create a developers permission group

```bash
rediacc permission create-group read-only
```
Create a read-only access group

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission create-group example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreatePermissionGroup" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "permissionGroupName": "example-permissionGroupName"
}'
```

#### Notes

Requires admin permissions. Group names must be unique within the company. Add permissions after creation.

#### Business Rules

- User must be authenticated with valid credentials
- Custom groups require paid subscription (Advanced, Premium, or Elite)
- Community plan users cannot create custom permission groups
- Group name must be unique within your company
- Cannot use reserved names: Administrators, Users, or Bridges
- Maximum group name length is 100 characters
- Group name cannot be empty or only whitespace
- Any authenticated user can create groups (with paid plan)
- New groups start empty with no permissions
- Group creation is logged in audit trail


## delete-group

Delete a permission group

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeletePermissionGroup`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Permanently removes a permission group. Users assigned to this group will lose those permissions.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `name` | string | Yes | - | Permission group name to delete | old-group |
| `force` | string | No | - | Skip confirmation prompt | --force |

#### Examples

```bash
rediacc permission delete-group temporary-access
```
Delete group with confirmation

```bash
rediacc permission delete-group test-group --force
```
Delete without confirmation

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission delete-group example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeletePermissionGroup" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "permissionGroupName": "example-permissionGroupName"
}'
```

#### Notes

Cannot delete system groups. Check user assignments before deletion. This is irreversible.

#### Business Rules

- User must be authenticated with valid credentials
- Cannot delete system groups: Administrators, Users, or Bridges
- Group must not have any users assigned to it
- Group must not be used by any active sessions
- Only custom permission groups can be deleted
- All permissions within the group are permanently removed
- Deletion works on any subscription plan (including Community)
- Group must exist in your company
- Operation is permanent and cannot be undone
- Deletion is logged in audit trail


## list-group

Show permissions in a specific group

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetPermissionGroupDetails`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Lists all API endpoint permissions granted to a permission group. Shows which operations users in this group can perform.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `name` | string | Yes | - | Permission group name | developers |

#### Examples

```bash
rediacc permission list-group developers
```
Show all permissions for developers

```bash
rediacc permission list-group Admins --output json
```
List admin permissions in JSON

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission list-group example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetPermissionGroupDetails" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "permissionGroupName": "example-permissionGroupName"
}'
```

#### Notes

Permission names correspond to API endpoints. Compare groups to understand access levels.

#### Business Rules

- User must be authenticated with valid credentials
- Only administrators can view group details
- Group must exist in your company
- Shows all permissions in the group alphabetically
- Group names are case-sensitive
- Works for both system and custom groups
- No limit on permissions displayed
- Company-specific access only
- Access attempts are tracked for security
- Returns error if group doesn't exist


## list-groups

List all permission groups

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCompanyPermissionGroups`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all permission groups in the company including system groups and custom groups. Displays group names and member counts.

#### Examples

```bash
rediacc permission list-groups
```
Display all permission groups

```bash
rediacc permission list-groups --output json
```
Get groups in JSON format

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission list-groups
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetCompanyPermissionGroups" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
}'
```

#### Notes

System groups like 'Admins' and 'Bridges' cannot be modified. Shows user count for each group.

#### Business Rules

- User must be authenticated with valid credentials
- Only administrators can view permission groups
- Shows all groups for your company (system and custom)
- Displays group name, user count, and permission count
- Lists all permissions for each group
- Results sorted alphabetically by group name
- No filtering or pagination available
- Maintenance mode blocks non-admin access
- Operation is company-specific
- Failed attempts are logged for security


## remove

Remove permission from a group

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeletePermissionFromGroup`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Revokes a specific API endpoint permission from a permission group. Users in the group lose access to that endpoint.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `group` | string | Yes | - | Permission group to modify | developers |
| `name` | string | Yes | - | Permission name to remove | DeleteMachine |
| `force` | string | No | - | Skip confirmation prompt | --force |

#### Examples

```bash
rediacc permission remove developers DeleteMachine
```
Revoke machine deletion from developers

```bash
rediacc permission remove contractors CreateBridge --force
```
Remove permission without confirmation

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc permission remove example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeletePermissionFromGroup" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "permissionGroupName": "example-permissionGroupName",
    "permissionName": "example-permissionName"
}'
```

#### Notes

Takes effect immediately for all users in the group. Use 'list-group' to see current permissions.

#### Business Rules

- User must be authenticated with valid credentials
- Permission group must exist in your company
- Cannot modify Administrators group (protected)
- Cannot modify Bridges group (protected)
- Permission must exist in the specified group
- Users group can have permissions removed
- Users immediately lose access to removed function
- Change takes effect without requiring re-login
- Removal is permanent and logged in audit trail
- Only appropriate admin privileges allow this operation

