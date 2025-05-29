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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "bridgeName": "Frankfurt Main Bridge",
  "machineName": "Dev Server 1",
  "machineVault": "{\"ipAddress\":\"192.168.1.100\",\"specs\":{\"cpu\":8,\"ram\":\"32GB\"}}"
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
          "name": "Dev Server 1"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "currentMachineName": "Dev Server 1",
  "newMachineName": "Production Server 1"
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
          "machineName": "Production Server 1",
          "bridgeName": "Frankfurt Main Bridge",
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "machineName": "Production Server 1",
  "newBridgeName": "London Bridge"
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
          "machineName": "Production Server 1",
          "teamName": "Engineering Team",
          "bridgeName": "London Bridge",
          "regionName": "EMEA"
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "machineName": "Production Server 1",
  "machineVault": "{\"ipAddress\":\"10.0.1.10\",\"specs\":{\"cpu\":16,\"ram\":\"64GB\"}}",
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
          "machineName": "Production Server 1",
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
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "teamName": "Engineering Team",
  "machineName": "Production Server 1"
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
- The machine must exist in the specified team.
- All queue items associated with the machine must be removed before the machine can be deleted.
- The machine's vault data is securely deleted when the machine is removed.

## Get Team Machines

Retrieves a list of all machines within a team.

### Endpoint

```
POST /api/StoredProcedure/GetTeamMachines
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
          "machineName": "Web Server 1",
          "vaultVersion": 1,
          "vaultContent": "{\"ipAddress\":\"10.0.1.20\",\"specs\":{...}}",
          "bridgeName": "London Bridge",
          "regionName": "EMEA",
          "teamName": "Engineering Team",
          "queueCount": 3
        },
        {
          "machineName": "Database Server",
          "vaultVersion": 2,
          "vaultContent": "{\"ipAddress\":\"10.0.1.21\",\"specs\":{...}}",
          "bridgeName": "London Bridge",
          "regionName": "EMEA",
          "teamName": "Engineering Team",
          "queueCount": 0
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The requesting user must be a member of the specified team.
- The response includes information about the bridge and region associated with each machine.
- The response includes the queue count for each machine.
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.
