---
sidebar_position: 14
---

# Lookup Management

Lookup management provides a way to retrieve reference data and available options for various system entities. This is particularly useful for populating dropdown menus, validating user input, and understanding available system options.

## Get Lookup Data

Retrieves lookup data for various entity types within the system.

### Endpoint

```
POST /api/StoredProcedure/GetLookupData
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "lookupType": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "isActive": "boolean",
          "additionalData": "object"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Available Lookup Types

- `permissions` - Returns all available permission names that can be assigned to permission groups
- `teams` - Returns all teams in the user's company
- `regions` - Returns all regions in the user's company
- `bridges` - Returns all bridges in the user's company
- `machines` - Returns all machines accessible to the user
- `permissionGroups` - Returns all permission groups in the user's company
- `users` - Returns all users in the user's company
- `queueStatuses` - Returns available queue item status values
- `queuePriorities` - Returns available queue priority levels (if applicable to subscription)
- `dateRanges` - Returns standard date range options for filtering

### Response Fields

The response structure varies based on the lookup type:

#### Permissions Lookup
```json
{
  "permissionName": "string",
  "category": "string",
  "description": "string"
}
```

#### Teams Lookup
```json
{
  "teamName": "string",
  "memberCount": "number",
  "isUserMember": "boolean"
}
```

#### Regions Lookup
```json
{
  "regionName": "string",
  "regionId": "number",
  "bridgeCount": "number"
}
```

#### Bridges Lookup
```json
{
  "bridgeName": "string",
  "bridgeId": "number",
  "regionName": "string",
  "machineCount": "number"
}
```

#### Machines Lookup
```json
{
  "machineName": "string",
  "machineId": "number",
  "teamName": "string",
  "bridgeName": "string"
}
```

#### Permission Groups Lookup
```json
{
  "permissionGroupName": "string",
  "userCount": "number",
  "permissionCount": "number"
}
```

#### Users Lookup
```json
{
  "userEmail": "string",
  "userId": "number",
  "isActivated": "boolean",
  "permissionGroupName": "string"
}
```

#### Queue Statuses Lookup
```json
{
  "status": "string",
  "displayName": "string",
  "description": "string"
}
```

#### Queue Priorities Lookup
```json
{
  "priority": "number",
  "displayName": "string",
  "description": "string"
}
```

#### Date Ranges Lookup
```json
{
  "rangeName": "string",
  "displayName": "string",
  "daysBack": "number"
}
```

### Business Rules

- Requires valid authentication token
- User can only access lookup data for their own company
- Some lookup types may return filtered results based on user permissions
- The `machines` lookup only returns machines from teams where the user is a member
- The `queuePriorities` lookup returns null for Community and Advanced subscriptions
- Results are typically sorted alphabetically by name or display order
- The response may be cached for performance optimization

### Example Usage

#### Get All Available Permissions
```json
{
  "lookupType": "permissions"
}
```

#### Get All Teams
```json
{
  "lookupType": "teams"
}
```

#### Get All Regions
```json
{
  "lookupType": "regions"
}
```

### Error Handling

If an invalid lookup type is provided, the response will include an error:

```json
{
  "failure": 1,
  "errors": [
    {
      "errorCode": "INVALID_LOOKUP_TYPE",
      "errorMessage": "The specified lookup type is not valid"
    }
  ],
  "resultSets": [],
  "outputs": {}
}
```