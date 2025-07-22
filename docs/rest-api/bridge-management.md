---
sidebar_position: 7
---

# Bridge Management

Bridges serve as connection points between regions and machines. They provide a way to organize and connect machines across different regions within a company.

## Create Bridge

Creates a new bridge within a specified region.

### Endpoint

```
POST /api/StoredProcedure/CreateBridge
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "regionName": "string",
  "bridgeName": "string",
  "bridgeVault": "string"
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
          "bridgeId": "number",
          "name": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- Bridge names must be unique within a region.
- The bridge vault content must be valid JSON.
- Bridge information is stored with encryption for security.

## Update Bridge Name

Changes the name of an existing bridge.

### Endpoint

```
POST /api/StoredProcedure/UpdateBridgeName
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "regionName": "string",
  "currentBridgeName": "string",
  "newBridgeName": "string"
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
          "bridgeName": "string",
          "regionName": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- The current bridge must exist in the specified region.
- The new bridge name must not already exist within the region.
- The new bridge name cannot be empty.

## Update Bridge Secure Data

Updates the encrypted vault data for a bridge.

### Endpoint

```
POST /api/StoredProcedure/UpdateBridgeVault
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "regionName": "string",
  "bridgeName": "string",
  "bridgeVault": "string",
  "vaultVersion": "number"
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
          "bridgeName": "string",
          "vaultVersion": "number",
          "result": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- The bridge must exist in the specified region.
- The bridge vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Bridge

Removes a bridge and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteBridge
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "regionName": "string",
  "bridgeName": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- The bridge must exist in the specified region.
- All machines associated with the bridge must be removed before the bridge can be deleted.
- The bridge's vault data is securely deleted when the bridge is removed.

## Reset Bridge Authorization

Resets the authorization credentials for a bridge, requiring re-authentication.

### Endpoint

```
POST /api/StoredProcedure/ResetBridgeAuthorization
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "regionName": "string",
  "bridgeName": "string"
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
          "bridgeName": "string",
          "authorizationReset": "boolean",
          "resetTimestamp": "datetime"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- The bridge must exist in the specified region.
- This action invalidates all existing authentication tokens for the bridge.
- Machines connected to this bridge will need to re-authenticate.

## Get Region Bridges

Retrieves all bridges within a specified region.

### Endpoint

```
POST /api/StoredProcedure/GetRegionBridges
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "regionName": "string"
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
          "bridgeId": "number",
          "bridgeName": "string",
          "machineCount": "number",
          "isActive": "boolean",
          "createdDate": "datetime",
          "lastModifiedDate": "datetime"
        },
        {
          "bridgeId": "number",
          "bridgeName": "string",
          "machineCount": "number",
          "isActive": "boolean",
          "createdDate": "datetime",
          "lastModifiedDate": "datetime"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- Returns all bridges within the region with their associated machine counts.
- Bridges are returned in alphabetical order by name.
