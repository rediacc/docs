---
sidebar_position: 13
---

# Storage Management

Storage resources provide a way to manage data storage locations, configurations, or other storage-related assets within a team. Each storage resource has a secure vault that can contain metadata or configuration details.

## Create Storage

Creates a new storage resource within a team.

### Endpoint

```
POST /api/StoredProcedure/CreateStorage
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "storageName": "string",
  "storageVault": "string"
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
          "name": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- Storage names must be unique within a team.
- The storage vault content must be valid JSON.
- Storage information is stored with encryption for security.

## Update Storage Name

Changes the name of an existing storage resource.

### Endpoint

```
POST /api/StoredProcedure/UpdateStorageName
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "currentStorageName": "string",
  "newStorageName": "string"
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
          "storageName": "string",
          "teamName": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The current storage resource must exist in the specified team.
- The new storage name must not already exist within the team.
- The new storage name cannot be empty.

## Update Storage Secure Data

Updates the encrypted vault data for a storage resource.

### Endpoint

```
POST /api/StoredProcedure/UpdateStorageVault
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "storageName": "string",
  "storageVault": "string",
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
          "storageName": "string",
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

- The requesting user must be a member of the specified team.
- The storage resource must exist in the specified team.
- The storage vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Storage

Removes a storage resource and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteStorage
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "storageName": "string"
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
          "storageName": "string",
          "result": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The storage resource must exist in the specified team.
- The storage resource's vault data is securely deleted when the storage is removed.
