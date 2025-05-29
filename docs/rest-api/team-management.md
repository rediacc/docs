---
sidebar_position: 5
---

# Team Management

Teams are collaborative groups within a company, providing a way to organize users and resources. Each team can have multiple members and associated resources such as machines, repositories, schedules, and storage.

## Create Team

Creates a new team within the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/CreateTeam
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Development Team",
  "teamVault": "{\"description\":\"Team focused on product development\",\"settings\":{...}}"
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
          "name": "Development Team"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Team names must be unique within a company.
- The team vault content must be valid JSON.
- The creating user is automatically added as a member of the new team.
- Team information is stored with encryption for security.

## Update Team Name

Changes the name of an existing team.

### Endpoint

```
POST /api/StoredProcedure/UpdateTeamName
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "currentTeamName": "Development Team",
  "newTeamName": "Engineering Team"
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
          "teamName": "Engineering Team",
          "companyName": "Acme Corporation",
          "memberCount": 5
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the team.
- The new team name must not already exist within the company.
- The new team name cannot be empty.

## Update Team Secure Data

Updates the encrypted vault data for a team.

### Endpoint

```
POST /api/StoredProcedure/UpdateTeamSecureData
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
  "teamVault": "{\"description\":\"Team focused on engineering excellence\",\"settings\":{...}}",
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
          "teamName": "Engineering Team",
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

- The requesting user must be a member of the team.
- The team vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Team

Removes a team and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteTeam
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
  "tables": [],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the team.
- The last team in a company cannot be deleted.
- All associated resources (machines, repositories, schedules, storage) must be removed before deleting the team.
- All user participations in the team are automatically removed.

## Add User To Team

Adds an existing user as a member of a team.

### Endpoint

```
POST /api/StoredProcedure/AddUserToTeam
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "team": "Engineering Team",
  "newUserEmail": "user@example.com"
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
          "addedUserEmail": "user@example.com",
          "teamName": "Engineering Team",
          "result": "User successfully added to team"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the team.
- The user to be added must be in the same company.
- The user to be added must be activated.
- The user must not already be a member of the team.

## Remove User From Team

Removes a user from a team.

### Endpoint

```
POST /api/StoredProcedure/DeleteUserFromTeam
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "team": "Engineering Team",
  "removeUserEmail": "user@example.com"
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
          "userEmail": "user@example.com",
          "teamName": "Engineering Team",
          "result": "User successfully removed from team"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the team.
- The user to be removed must be a member of the team.
- Users cannot remove themselves from a team.

## Get Team Members

Retrieves a list of all users who are members of a team.

### Endpoint

```
POST /api/StoredProcedure/GetTeamMembers
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "team": "Engineering Team"
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
          "userEmail": "user1@example.com",
          "activated": true,
          "teamName": "Engineering Team",
          "companyName": "Acme Corporation"
        },
        {
          "userEmail": "user2@example.com",
          "activated": true,
          "teamName": "Engineering Team",
          "companyName": "Acme Corporation"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the team.
- The response includes each member's activation status.

## Get All Company Teams

Retrieves a list of all teams in the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyTeams
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
          "teamName": "Engineering Team",
          "vaultVersion": 2,
          "vaultContent": "{\"description\":\"Team focused on engineering excellence\",\"settings\":{...}}",
          "companyName": "Acme Corporation",
          "isMember": 1,
          "memberCount": 5,
          "machineCount": 3,
          "repoCount": 2,
          "scheduleCount": 1,
          "storageCount": 2
        },
        {
          "teamName": "Marketing Team",
          "vaultVersion": 1,
          "vaultContent": "{\"description\":\"Team focused on marketing campaigns\",\"settings\":{...}}",
          "companyName": "Acme Corporation",
          "isMember": 0,
          "memberCount": 3,
          "machineCount": 1,
          "repoCount": 1,
          "scheduleCount": 0,
          "storageCount": 1
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Users can see all teams in their company, even teams they are not members of.
- The response includes statistics about each team (member count, resource counts, etc.).
- The `isMember` field (1 or 0) indicates if the authenticated user is a member of each team.
- Vault content is only decrypted for teams where the user is a member.
