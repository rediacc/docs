# Clone

Clone operations.

## Table of Contents

- [list-available-machines-for-clone](#list-available-machines-for-clone)
- [list-clone-machine-assignment-validation](#list-clone-machine-assignment-validation)
- [list-clone-machines](#list-clone-machines)
- [update-clone-machine-assignments](#update-clone-machine-assignments)
- [update-clone-machine-removals](#update-clone-machine-removals)


## list-available-machines-for-clone

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetAvailableMachinesForClone`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli clone list-available-machines-for-clone example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetAvailableMachinesForClone" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team"
}'
```


## list-clone-machine-assignment-validation

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCloneMachineAssignmentValidation`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - |  |  |
| `machine_names` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli clone list-clone-machine-assignment-validation example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetCloneMachineAssignmentValidation" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "machineNames": "example-machineNames"
}'
```


## list-clone-machines

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetCloneMachines`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `clone` | string | Yes | - |  |  |
| `snapshot` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli clone list-clone-machines example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetCloneMachines" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "cloneName": "example-cloneName",
    "snapshotName": "example-snapshotName",
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## update-clone-machine-assignments

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateCloneMachineAssignments`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `clone` | string | Yes | - |  |  |
| `snapshot` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `machine_names` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli clone update-clone-machine-assignments example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateCloneMachineAssignments" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "cloneName": "example-cloneName",
    "snapshotName": "example-snapshotName",
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team",
    "machineNames": "example-machineNames"
}'
```


## update-clone-machine-removals

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateCloneMachineRemovals`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `clone` | string | Yes | - |  |  |
| `snapshot` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `machine_names` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli clone update-clone-machine-removals example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateCloneMachineRemovals" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "cloneName": "example-cloneName",
    "snapshotName": "example-snapshotName",
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team",
    "machineNames": "example-machineNames"
}'
```

