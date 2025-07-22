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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "scheduleName": "string",
  "scheduleVault": "string"
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "currentScheduleName": "string",
  "newScheduleName": "string"
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
          "scheduleName": "string",
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "scheduleName": "string",
  "scheduleVault": "string",
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
          "scheduleName": "string",
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
Rediacc-RequestToken: string
```

### Request Body

```json
{
  "teamName": "string",
  "scheduleName": "string"
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
          "scheduleName": "string",
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
- The schedule must exist in the specified team.
- The schedule's vault data is securely deleted when the schedule is removed.
