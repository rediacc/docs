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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "teamVault": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "currentTeamName": "string",
  "newTeamName": "string"
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
          "teamName": "string",
          "companyName": "string",
          "memberCount": "number"
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
POST /api/StoredProcedure/UpdateTeamVault
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
  "teamVault": "string",
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
          "teamName": "string",
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string"
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

- The requesting user must be a member of the team.
- The last team in a company cannot be deleted.
- All associated resources (machines, repositories, schedules, storage) must be removed before deleting the team.
- All user participations in the team are automatically removed.

## Add User To Team

Adds an existing user as a member of a team.

### Endpoint

```
POST /api/StoredProcedure/CreateTeamMembership
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
  "newUserEmail": "string"
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
          "addedUserEmail": "string",
          "teamName": "string",
          "result": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "team": "string",
  "removeUserEmail": "string"
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
          "userEmail": "string",
          "teamName": "string",
          "result": "string"
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

## Get All Company Teams

Retrieves a list of all teams in the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyTeams
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
          "teamName": "string",
          "vaultVersion": "number",
          "vaultContent": "string",
          "companyName": "string",
          "isMember": "number",
          "memberCount": "number",
          "machineCount": "number",
          "repoCount": "number",
          "scheduleCount": "number",
          "storageCount": "number"
        },
        {
          "teamName": "string",
          "vaultVersion": "number",
          "vaultContent": "string",
          "companyName": "string",
          "isMember": "number",
          "memberCount": "number",
          "machineCount": "number",
          "repoCount": "number",
          "scheduleCount": "number",
          "storageCount": "number"
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
