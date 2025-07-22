---
sidebar_position: 6
---

# Region Management

Regions represent geographic or logical divisions within a company. They provide a way to organize bridges and infrastructure across different locations or environments.

## Create Region

Creates a new region within the company.

### Endpoint

```
POST /api/StoredProcedure/CreateRegion
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
  "regionVault": "string"
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
          "regionId": "number",
          "name": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Region names must be unique within the company.
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "currentRegionName": "string",
  "newRegionName": "string"
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
          "regionName": "string",
          "result": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The current region must exist in the user's company.
- The new region name must not already exist within the company.
- The new region name cannot be empty.
- All references to the region are automatically updated.

## Update Region Secure Data

Updates the encrypted vault data for a region.

### Endpoint

```
POST /api/StoredProcedure/UpdateRegionVault
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
  "regionVault": "string",
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
          "regionName": "string",
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

- The region must exist in the user's company.
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
  "resultSets": [],
  "outputs": {}
}
```

### Business Rules

- The region must exist in the user's company.
- All bridges within the region must be removed before the region can be deleted.
- The region's vault data is securely deleted when the region is removed.

## Get Company Regions

Retrieves all regions within the company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyRegions
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
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
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "regionId": "number",
          "regionName": "string",
          "bridgeCount": "number",
          "machineCount": "number",
          "createdDate": "datetime",
          "lastModifiedDate": "datetime"
        },
        {
          "regionId": "number",
          "regionName": "string",
          "bridgeCount": "number",
          "machineCount": "number",
          "createdDate": "datetime",
          "lastModifiedDate": "datetime"
        },
        {
          "regionId": "number",
          "regionName": "string",
          "bridgeCount": "number",
          "machineCount": "number",
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

- Returns all regions within the user's company.
- Includes aggregate counts of bridges and machines per region.
- Regions are returned in alphabetical order by name.