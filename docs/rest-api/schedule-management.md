---
sidebar_position: 12
---

# Schedule Management

Schedules provide a way to manage recurring tasks, cron jobs, or other timed operations within a team. Each schedule has a secure vault that can contain configuration details.

## Create Schedule

Creates a new schedule within a team.

### Endpoint

```
POST /api/StoredProcedure/CreateSchedule
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
  "scheduleName": "Daily Backup",
  "scheduleVault": "{\"cronExpression\":\"0 0 * * *\",\"action\":\"backup\",\"settings\":{...}}"
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
          "name": "Daily Backup"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- Schedule names must be unique within a team.
- The schedule vault content must be valid JSON.
- Schedule information is stored with encryption for security.

## Update Schedule Name

Changes the name of an existing schedule.

### Endpoint

```
POST /api/StoredProcedure/UpdateScheduleName
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
  "currentScheduleName": "Daily Backup",
  "newScheduleName": "Nightly Backup"
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
          "scheduleName": "Nightly Backup",
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
- The current schedule must exist in the specified team.
- The new schedule name must not already exist within the team.
- The new schedule name cannot be empty.

## Update Schedule Secure Data

Updates the encrypted vault data for a schedule.

### Endpoint

```
POST /api/StoredProcedure/UpdateScheduleVault
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
  "scheduleName": "Nightly Backup",
  "scheduleVault": "{\"cronExpression\":\"0 0 * * *\",\"action\":\"full-backup\",\"settings\":{...}}",
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
          "scheduleName": "Nightly Backup",
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
- The schedule must exist in the specified team.
- The schedule vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Schedule

Removes a schedule and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteSchedule
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
  "scheduleName": "Nightly Backup"
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
- The schedule must exist in the specified team.
- The schedule's vault data is securely deleted when the schedule is removed.

## Get Team Schedules

Retrieves a list of all schedules within a team.

### Endpoint

```
POST /api/StoredProcedure/GetTeamSchedules
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
          "scheduleName": "Nightly Backup",
          "vaultVersion": 2,
          "vaultContent": "{\"cronExpression\":\"0 0 * * *\",\"action\":\"full-backup\",\"settings\":{...}}",
          "teamName": "Engineering Team"
        },
        {
          "scheduleName": "Weekly Maintenance",
          "vaultVersion": 1,
          "vaultContent": "{\"cronExpression\":\"0 0 * * 0\",\"action\":\"maintenance\",\"settings\":{...}}",
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
