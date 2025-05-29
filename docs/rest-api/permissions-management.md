---
sidebar_position: 10
---

# Permissions Management

The permissions system in Rediacc Middleware controls what actions users can perform. Permissions are organized into permission groups, and each user is assigned to one permission group.

## Create Permission Group

Creates a new permission group within the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/CreatePermissionGroup
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "permissionGroupName": "Developers"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "permissionGroupName": "Developers",
          "result": "Permission group created successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Permission group names must be unique within a company.
- The permission group name cannot be empty.
- New permission groups are created without any permissions; permissions must be added separately.

## Add Permission To Group

Adds a specific permission to a permission group.

### Endpoint

```
POST /api/StoredProcedure/AddPermissionToGroup
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "permissionGroupName": "Developers",
  "permissionName": "CreateMachine"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "permissionName": "CreateMachine",
          "permissionGroupName": "Developers",
          "result": "Permission added successfully to group"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The permission group must exist in the user's company.
- The permission name must correspond to a valid procedure name in the system.
- The permission must not already exist in the group.

## Remove Permission From Group

Removes a permission from a permission group.

### Endpoint

```
POST /api/StoredProcedure/DeletePermissionFromGroup
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "permissionGroupName": "Developers",
  "permissionName": "CreateMachine"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "permissionsId": 3,
          "permissionGroupName": "Developers",
          "companyId": 1,
          "removedPermissionName": "CreateMachine",
          "result": "Permission removed successfully from group"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The permission group must exist in the user's company.
- The permission must exist in the specified group.

## Change User Permission Group

Assigns a user to a different permission group.

### Endpoint

```
POST /api/StoredProcedure/UpdateUserPermissionGroup
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "userEmail": "user@example.com",
  "permissionGroupName": "Developers"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "userEmail": "user@example.com",
          "permissionGroupName": "Developers",
          "result": "Permissions updated successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The target user must be in the same company as the authenticated user.
- The permission group must exist in the user's company.

## Delete Permission Group

Removes a permission group.

### Endpoint

```
POST /api/StoredProcedure/DeletePermissionGroup
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "permissionGroupName": "Developers"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "removedPermissionGroupName": "Developers",
          "result": "Permission group removed successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The permission group must exist in the user's company.
- The permission group must not be in use by any users.
- The 'Administrators' permission group cannot be removed.

## Get Company Permission Groups

Retrieves a list of all permission groups in the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyPermissionGroups
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "permissionGroupName": "Administrators",
          "userCount": 2,
          "permissions": "AddPermissionToGroup, AddQueueItemResponse, AddUserToTeam, ..."
        },
        {
          "permissionGroupName": "Developers",
          "userCount": 5,
          "permissions": "CreateMachine, CreateQueueItem, GetTeamMachines, GetTeamQueueItems"
        },
        {
          "permissionGroupName": "Viewers",
          "userCount": 8,
          "permissions": "GetTeamMachines, GetTeamQueueItems, GetTeamMembers"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Users can only view permission groups in their own company.
- The response includes the user count for each permission group.
- The permissions are returned as a comma-separated list.

## Get Permission Group Details

Retrieves detailed information about a specific permission group, including all of its permissions.

### Endpoint

```
POST /api/StoredProcedure/GetPermissionGroupDetails
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "permissionGroupName": "Developers"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "permissionGroupName": "Developers",
          "permissionName": "CreateMachine"
        },
        {
          "permissionGroupName": "Developers",
          "permissionName": "CreateQueueItem"
        },
        {
          "permissionGroupName": "Developers",
          "permissionName": "GetTeamMachines"
        },
        {
          "permissionGroupName": "Developers",
          "permissionName": "GetTeamQueueItems"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The permission group must exist in the user's company.
- The response includes a separate row for each permission in the group.
- Permissions are sorted alphabetically by name.