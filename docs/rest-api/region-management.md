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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "EMEA",
  "regionVault": "{\"location\":\"Europe\",\"settings\":{...}}"
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
          "regionId": 3,
          "name": "EMEA"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "currentRegionName": "EMEA",
  "newRegionName": "Europe Middle East Africa"
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
          "regionName": "Europe Middle East Africa",
          "result": "Region name updated successfully"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "Europe Middle East Africa",
  "regionVault": "{\"location\":\"Europe\",\"timezone\":\"CET\",\"settings\":{...}}",
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
          "regionName": "Europe Middle East Africa",
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "regionName": "Europe Middle East Africa"
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
          "regionId": 1,
          "regionName": "US East",
          "bridgeCount": 5,
          "machineCount": 45,
          "createdDate": "2024-01-01T08:00:00Z",
          "lastModifiedDate": "2024-01-10T14:30:00Z"
        },
        {
          "regionId": 2,
          "regionName": "US West",
          "bridgeCount": 3,
          "machineCount": 28,
          "createdDate": "2024-01-01T08:00:00Z",
          "lastModifiedDate": "2024-01-08T11:20:00Z"
        },
        {
          "regionId": 3,
          "regionName": "Europe Middle East Africa",
          "bridgeCount": 8,
          "machineCount": 72,
          "createdDate": "2024-01-05T09:00:00Z",
          "lastModifiedDate": "2024-01-15T16:45:00Z"
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