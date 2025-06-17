---
sidebar_position: 11
---

# Repository Management

Repositories provide a way to store and manage code, configurations, or other version-controlled assets within a team. Each repository has a secure vault that can contain metadata or configuration related to the repository.

## Create Repository

Creates a new repository within a team.

### Endpoint

```
POST /api/StoredProcedure/CreateRepository
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
  "repoName": "string",
  "repoVault": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
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
- Repository names must be unique within a team.
- The repository vault content must be valid JSON.
- Repository information is stored with encryption for security.

## Update Repository Name

Changes the name of an existing repository.

### Endpoint

```
POST /api/StoredProcedure/UpdateRepositoryName
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
  "currentRepoName": "string",
  "newRepoName": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "repoName": "string",
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
- The current repository must exist in the specified team.
- The new repository name must not already exist within the team.
- The new repository name cannot be empty.

## Update Repository Secure Data

Updates the encrypted vault data for a repository.

### Endpoint

```
POST /api/StoredProcedure/UpdateRepositoryVault
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
  "repoName": "string",
  "repoVault": "string",
  "vaultVersion": "number"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "repoName": "string",
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
- The repository must exist in the specified team.
- The repository vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Repository

Removes a repository and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteRepository
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
  "repoName": "string"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "repoName": "string",
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
- The repository must exist in the specified team.
- The repository's vault data is securely deleted when the repository is removed.
