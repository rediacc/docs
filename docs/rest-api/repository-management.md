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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "repoName": "Backend API",
  "repoVault": "{\"description\":\"Main backend API repository\",\"settings\":{...}}"
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
          "name": "Backend API"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "currentRepoName": "Backend API",
  "newRepoName": "Core API"
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
          "repoName": "Core API",
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
- The current repository must exist in the specified team.
- The new repository name must not already exist within the team.
- The new repository name cannot be empty.

## Update Repository Secure Data

Updates the encrypted vault data for a repository.

### Endpoint

```
POST /api/StoredProcedure/UpdateRepositorySecureData
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
  "repoName": "Core API",
  "repoVault": "{\"description\":\"Core API with unified interfaces\",\"settings\":{...}}",
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
          "repoName": "Core API",
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "repoName": "Core API"
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
- The repository must exist in the specified team.
- The repository's vault data is securely deleted when the repository is removed.

## Get Team Repositories

Retrieves a list of all repositories within a team.

### Endpoint

```
POST /api/StoredProcedure/GetTeamRepositories
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team"
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
          "repoName": "Core API",
          "vaultVersion": 2,
          "vaultContent": "{\"description\":\"Core API with unified interfaces\",\"settings\":{...}}",
          "teamName": "Engineering Team"
        },
        {
          "repoName": "Frontend",
          "vaultVersion": 1,
          "vaultContent": "{\"description\":\"Web frontend application\",\"settings\":{...}}",
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
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.
