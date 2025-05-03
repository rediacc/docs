---
sidebar_position: 6
---

# Region Management

Regions represent geographic or logical divisions within a company. Each region can contain multiple bridges, which in turn connect to machines. The region management API allows you to create, update, and organize resources by region.

## Create Region

Creates a new region within the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/CreateRegion
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "Europe",
  "regionVault": "{\"description\":\"European operations region\",\"settings\":{...}}"
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
          "name": "Europe"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Region names must be unique within a company.
- The region vault content must be valid JSON.
- Region information is stored with encryption for security.

## Update Region Name

Changes the name of an existing region.

### Endpoint

```
POST /api/StoredProcedure/UpdateRegionName
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "currentRegionName": "Europe",
  "newRegionName": "EMEA"
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
          "regionName": "EMEA"
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

- All bridges associated with the region must be removed before the region can be deleted.
- The region's vault data is securely deleted when the region is removed.

## Get All Company Regions

Retrieves a list of all regions in the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/GetAllCompanyRegions
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
          "regionName": "EMEA",
          "vaultVersion": 2,
          "vaultContent": "{\"description\":\"Europe, Middle East, and Africa operations\",\"settings\":{...}}",
          "bridgeCount": 3
        },
        {
          "regionName": "Americas",
          "vaultVersion": 1,
          "vaultContent": "{\"description\":\"North and South America operations\",\"settings\":{...}}",
          "bridgeCount": 2
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Users can only view regions in their own company.
- The response includes the bridge count for each region.
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.

## Get Region Bridges

Retrieves a list of all bridges within a specific region.

### Endpoint

```
POST /api/StoredProcedure/GetRegionBridges
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA"
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
          "bridgeName": "Frankfurt Bridge",
          "vaultVersion": 1,
          "vaultContent": "{\"endpoint\":\"frankfurt.example.com\",\"settings\":{...}}",
          "regionName": "EMEA",
          "machineCount": 5
        },
        {
          "bridgeName": "London Bridge",
          "vaultVersion": 1,
          "vaultContent": "{\"endpoint\":\"london.example.com\",\"settings\":{...}}",
          "regionName": "EMEA",
          "machineCount": 3
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The user must have access to the region (be in the same company).
- The response includes the machine count for each bridge.
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The new region name must not already exist within the company.
- The new region name cannot be empty.

## Update Region Secure Data

Updates the encrypted vault data for a region.

### Endpoint

```
POST /api/StoredProcedure/UpdateRegionSecureData
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
  "regionVault": "{\"description\":\"Europe, Middle East, and Africa operations\",\"settings\":{...}}",
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
          "regionName": "EMEA",
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

- The region vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Region

Removes a region and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteRegion
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA"