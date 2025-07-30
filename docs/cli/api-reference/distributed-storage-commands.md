# Distributed-Storage

Distributed-Storage operations.

## Table of Contents

- [create-cluster](#create-cluster)
- [create-distributed-storage-pool](#create-distributed-storage-pool)
- [create-distributed-storage-rbd-clone](#create-distributed-storage-rbd-clone)
- [create-distributed-storage-rbd-image](#create-distributed-storage-rbd-image)
- [create-distributed-storage-rbd-snapshot](#create-distributed-storage-rbd-snapshot)
- [delete-cluster](#delete-cluster)
- [delete-distributed-storage-pool](#delete-distributed-storage-pool)
- [delete-distributed-storage-rbd-clone](#delete-distributed-storage-rbd-clone)
- [delete-distributed-storage-rbd-image](#delete-distributed-storage-rbd-image)
- [delete-distributed-storage-rbd-snapshot](#delete-distributed-storage-rbd-snapshot)
- [list-distributed-storage-cluster-machines](#list-distributed-storage-cluster-machines)
- [list-distributed-storage-clusters](#list-distributed-storage-clusters)
- [list-distributed-storage-pools](#list-distributed-storage-pools)
- [list-distributed-storage-rbd-clones](#list-distributed-storage-rbd-clones)
- [list-distributed-storage-rbd-images](#list-distributed-storage-rbd-images)
- [list-distributed-storage-rbd-snapshots](#list-distributed-storage-rbd-snapshots)
- [update-distributed-storage-pool-vault](#update-distributed-storage-pool-vault)
- [update-machine-distributed-storage](#update-machine-distributed-storage)
- [update-vault](#update-vault)


## create-cluster

Create a distributed storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateDistributedStorageCluster`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Creates a cluster configuration for distributed storage across multiple machines. Enables redundant storage with automatic replication and failover.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `vault` | string | No | - | JSON configuration for the cluster | `{"replication_factor": 3, "storage_class": "ssd"}` |
| `vault-file` | string | No | - | File containing JSON vault data | cluster-config.json |
| `cluster` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage create-cluster
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateDistributedStorageCluster" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "clusterName": "example-clusterName"
}'
```

#### Business Rules

- User must be authenticated with valid credentials
- User must be a member of the specified team
- Cluster name must be unique within the team
- Team must exist in your company
- Cluster configuration requires specific parameters in vault data
- Pool PG number must be between 1 and 1024
- New clusters start with PENDING status
- No subscription plan restrictions for creating clusters
- Vault data is encrypted using company master password
- Cluster creation is logged in audit trail


## create-distributed-storage-pool

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateDistributedStoragePool`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `cluster` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage create-distributed-storage-pool example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateDistributedStoragePool" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "clusterName": "example-clusterName",
    "teamName": "example-team",
    "poolName": "example-poolName"
}'
```


## create-distributed-storage-rbd-clone

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateDistributedStorageRbdClone`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `snapshot` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `clone` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage create-distributed-storage-rbd-clone example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateDistributedStorageRbdClone" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "snapshotName": "example-snapshotName",
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team",
    "cloneName": "example-cloneName"
}'
```


## create-distributed-storage-rbd-image

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateDistributedStorageRbdImage`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `machine` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage create-distributed-storage-rbd-image example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateDistributedStorageRbdImage" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "poolName": "example-poolName",
    "teamName": "example-team",
    "imageName": "example-imageName",
    "machineName": "my-machine-01"
}'
```


## create-distributed-storage-rbd-snapshot

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateDistributedStorageRbdSnapshot`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `snapshot` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage create-distributed-storage-rbd-snapshot example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateDistributedStorageRbdSnapshot" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team",
    "snapshotName": "example-snapshotName"
}'
```


## delete-cluster

Delete a distributed storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteDistributedStorageCluster`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Permanently removes a distributed storage cluster configuration. Does not delete data on machines, only the cluster configuration.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `force` | string | No | - | Skip confirmation prompt | --force |
| `cluster` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage delete-cluster
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeleteDistributedStorageCluster" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "clusterName": "example-clusterName"
}'
```

#### Business Rules

- User must be authenticated with valid credentials
- User must be either an administrator or team member
- Cluster must exist in the specified team
- Cluster must have zero nodes before deletion
- Cannot delete cluster with machines still attached
- Deletion removes cluster configuration and credentials
- Associated vault data is automatically cleaned up
- Machine distributed storage flags remain unchanged
- Operation is permanent and cannot be undone
- Deletion is logged in audit trail for compliance


## delete-distributed-storage-pool

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteDistributedStoragePool`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage delete-distributed-storage-pool example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeleteDistributedStoragePool" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## delete-distributed-storage-rbd-clone

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteDistributedStorageRbdClone`

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
rediacc-cli distributed-storage delete-distributed-storage-rbd-clone example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeleteDistributedStorageRbdClone" \
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


## delete-distributed-storage-rbd-image

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteDistributedStorageRbdImage`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage delete-distributed-storage-rbd-image example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeleteDistributedStorageRbdImage" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## delete-distributed-storage-rbd-snapshot

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteDistributedStorageRbdSnapshot`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `snapshot` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage delete-distributed-storage-rbd-snapshot example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeleteDistributedStorageRbdSnapshot" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "snapshotName": "example-snapshotName",
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## list-distributed-storage-cluster-machines

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStorageClusterMachines`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `cluster` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage list-distributed-storage-cluster-machines
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetDistributedStorageClusterMachines" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "clusterName": "example-clusterName"
}'
```


## list-distributed-storage-clusters

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStorageClusters`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage list-distributed-storage-clusters
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetDistributedStorageClusters" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
}'
```


## list-distributed-storage-pools

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStoragePools`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - |  |  |
| `cluster` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage list-distributed-storage-pools example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetDistributedStoragePools" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "clusterName": "example-clusterName"
}'
```


## list-distributed-storage-rbd-clones

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStorageRbdClones`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `snapshot` | string | Yes | - |  |  |
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage list-distributed-storage-rbd-clones example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetDistributedStorageRbdClones" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "snapshotName": "example-snapshotName",
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## list-distributed-storage-rbd-images

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStorageRbdImages`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage list-distributed-storage-rbd-images example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetDistributedStorageRbdImages" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## list-distributed-storage-rbd-snapshots

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStorageRbdSnapshots`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage list-distributed-storage-rbd-snapshots example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetDistributedStorageRbdSnapshots" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## update-distributed-storage-pool-vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateDistributedStoragePoolVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `vault_version` | string | No | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage update-distributed-storage-pool-vault example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateDistributedStoragePoolVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "poolName": "example-poolName",
    "teamName": "example-team"
}'
```


## update-machine-distributed-storage

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateMachineDistributedStorage`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - |  |  |
| `machine` | string | Yes | - |  |  |
| `cluster` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage update-machine-distributed-storage example-team my-machine-01
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateMachineDistributedStorage" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team",
    "machineName": "my-machine-01",
    "clusterName": "example-clusterName"
}'
```


## update-vault

Update cluster configuration vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateDistributedStorageClusterVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Updates the encrypted configuration for a distributed storage cluster including replication settings, storage policies, and performance parameters.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `cluster` | string | Yes | - | Cluster name | main-cluster |
| `vault` | string | No | - | JSON configuration data | `{"replication_factor": 3, "consistency_level": "strong"}` |
| `vault-file` | string | No | - | File containing JSON vault data | cluster-config.json |
| `vault-version` | string | No | - | Vault schema version (default: 1) | 2 |
| `vault_version` | string | No | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli distributed-storage update-vault
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateDistributedStorageClusterVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "clusterName": "example-clusterName"
}'
```

#### Business Rules

- User must be authenticated with valid credentials
- User must be a member of the team owning the cluster
- Cluster must exist before updating vault
- Vault data must be provided as text (cannot be empty)
- Maximum vault chunk size is 3,072 characters
- Large vaults automatically split into multiple chunks
- Vault data is encrypted with company master password
- Each update increments vault version number
- Previous vault data is completely replaced
- Update is logged in audit trail

