---
sidebar_position: 8
---

# Machine Management

Machines represent servers, devices, or compute resources within a team. Each machine is associated with a bridge and can have queue items assigned to it.

## Create Machine

Creates a new machine within a team and connects it to a specified bridge.

### Endpoint

```
POST /api/StoredProcedure/CreateMachine
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
  "bridgeName": "string",
  "machineName": "string",
  "machineVault": "string"
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
- The specified bridge must exist in the user's company.
- Machine names must be unique within a team.
- The machine vault content must be valid JSON.
- Machine information is stored with encryption for security.

## Update Machine Name

Changes the name of an existing machine.

### Endpoint

```
POST /api/StoredProcedure/UpdateMachineName
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
  "currentMachineName": "string",
  "newMachineName": "string"
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
          "machineName": "string",
          "bridgeName": "string",
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
- The current machine must exist in the specified team.
- The new machine name must not already exist within the team.
- The new machine name cannot be empty.

## Change Machine Bridge

Moves a machine from one bridge to another.

### Endpoint

```
POST /api/StoredProcedure/UpdateMachineAssignedBridge
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
  "machineName": "string",
  "newBridgeName": "string"
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
          "machineName": "string",
          "teamName": "string",
          "bridgeName": "string",
          "regionName": "string"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The machine must exist in the specified team.
- The new bridge must exist in the user's company.
- The new bridge must be different from the current bridge.

## Update Machine Secure Data

Updates the encrypted vault data for a machine.

### Endpoint

```
POST /api/StoredProcedure/UpdateMachineVault
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
  "machineName": "string",
  "machineVault": "string",
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
          "machineName": "string",
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
- The machine must exist in the specified team.
- The machine vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.

## Delete Machine

Removes a machine and its associated vault data.

### Endpoint

```
POST /api/StoredProcedure/DeleteMachine
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
  "machineName": "string"
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
          "machineName": "string",
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
- The machine must exist in the specified team.
- All queue items associated with the machine must be removed before the machine can be deleted.
- The machine's vault data is securely deleted when the machine is removed.
