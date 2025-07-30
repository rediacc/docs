# Machine

Machine operations.

## Table of Contents

- [list-machine-assignment-status](#list-machine-assignment-status)
- [update-machine-cluster-assignment](#update-machine-cluster-assignment)
- [update-machine-cluster-removal](#update-machine-cluster-removal)
- [update-machine-vault](#update-machine-vault)


## list-machine-assignment-status

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetMachineAssignmentStatus`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `machine` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli machine list-machine-assignment-status example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetMachineAssignmentStatus" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "machineName": "my-machine-01",
    "teamName": "example-team"
}'
```


## update-machine-cluster-assignment

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineClusterAssignment`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `cluster` | string | Yes | - |  |  |
| `machine` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli machine update-machine-cluster-assignment example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineClusterAssignment" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "clusterName": "example-clusterName",
    "machineName": "my-machine-01",
    "teamName": "example-team"
}'
```


## update-machine-cluster-removal

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineClusterRemoval`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `machine` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli machine update-machine-cluster-removal example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineClusterRemoval" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "machineName": "my-machine-01",
    "teamName": "example-team"
}'
```


## update-machine-vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - |  |  |
| `machine` | string | Yes | - |  |  |
| `vault_version` | string | No | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli machine update-machine-vault example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "machineName": "my-machine-01"
}'
```

