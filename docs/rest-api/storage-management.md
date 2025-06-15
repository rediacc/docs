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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "storageName": "Production Database",
  "storageVault": "{\"type\":\"postgres\",\"connection\":{\"host\":\"db.example.com\"},\"settings\":{...}}"
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
          "name": "Production Database"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "currentStorageName": "Production Database",
  "newStorageName": "Main Database"
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
          "storageName": "Main Database",
          "teamName": "Engineering Team"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "storageName": "Main Database",
  "storageVault": "{\"type\":\"postgres\",\"version\":\"15\",\"connection\":{\"host\":\"db.example.com\"},\"settings\":{...}}",
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
          "storageName": "Main Database",
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "storageName": "Main Database"
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

- The requesting user must be a member of the specified team.
- The storage resource must exist in the specified team.
- The storage resource's vault data is securely deleted when the storage is removed.
