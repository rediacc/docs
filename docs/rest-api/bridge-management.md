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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA",
  "bridgeName": "Frankfurt Bridge",
  "bridgeVault": "{\"endpoint\":\"frankfurt.example.com\",\"settings\":{...}}"
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
          "bridgeId": 5,
          "name": "Frankfurt Bridge"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA",
  "currentBridgeName": "Frankfurt Bridge",
  "newBridgeName": "Frankfurt Main Bridge"
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
          "bridgeName": "Frankfurt Main Bridge",
          "regionName": "EMEA"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA",
  "bridgeName": "Frankfurt Main Bridge",
  "bridgeVault": "{\"endpoint\":\"frankfurt-main.example.com\",\"settings\":{...}}",
  "vaultVersion": 1
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
          "bridgeName": "Frankfurt Main Bridge",
          "vaultVersion": 2,
          "result": "Vault updated successfully"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA",
  "bridgeName": "Frankfurt Main Bridge"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [],
  "outputs": {}
}
```

### Business Rules

- The specified region must exist in the user's company.
- The bridge must exist in the specified region.
- All machines associated with the bridge must be removed before the bridge can be deleted.
- The bridge's vault data is securely deleted when the bridge is removed.
