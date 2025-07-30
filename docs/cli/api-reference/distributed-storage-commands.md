# Distributed-Storage

Distributed-Storage operations.

## Table of Contents

- [add-machines](#add-machines)
- [create-cluster](#create-cluster)
- [delete-cluster](#delete-cluster)
- [get-cluster](#get-cluster)
- [list-clusters](#list-clusters)
- [remove-machines](#remove-machines)
- [update-status](#update-status)
- [update-vault](#update-vault)


## add-machines

Add machines to a storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/AddMachinesToDistributedStorage`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Adds one or more machines as storage nodes to a distributed storage cluster. Machines must have sufficient storage capacity.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the cluster | true | storage-team |
| `cluster` | Cluster name | true | main-cluster |
| `machines` | Comma-separated list of machine names | true | storage-01,storage-02,storage-03 |

#### Examples

```bash
rediacc-cli distributed-storage add-machines storage-team main-cluster storage-01,storage-02
```
Add two machines to cluster

```bash
rediacc-cli distributed-storage add-machines data backup-cluster storage-03
```
Add single machine to cluster

#### Notes

Machines must be in the same team. Triggers data rebalancing. Monitor cluster health after adding.

#### Business Rules

- User must be authenticated with valid credentials
- User must be a member of the specified team
- Cluster must exist in the team
- Machines must exist in the same team as cluster
- First machine added becomes the primary node
- Subsequent machines become secondary nodes
- Machines already in cluster are silently skipped
- Machine gets marked as distributed storage node
- Multiple machines can be added in one operation
- Addition is logged in audit trail


## create-cluster

Create a distributed storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateDistributedStorageCluster`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Creates a cluster configuration for distributed storage across multiple machines. Enables redundant storage with automatic replication and failover.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that will own the cluster | true | storage-team |
| `name` | Unique name for the cluster | true | main-cluster |
| `vault` | JSON configuration for the cluster | false | `{"replication_factor": 3, "storage_class": "ssd"}` |
| `vault-file` | File containing JSON vault data | false | cluster-config.json |

#### Examples

```bash
rediacc-cli distributed-storage create-cluster storage-team main-cluster
```
Create a basic storage cluster

```bash
rediacc-cli distributed-storage create-cluster data replicated-storage --vault '{"replication_factor":3}'
```
Create cluster with 3x replication

#### Notes

Requires Elite subscription. Add machines after creation. Cluster names must be unique within a team.

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


## delete-cluster

Delete a distributed storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteDistributedStorageCluster`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Permanently removes a distributed storage cluster configuration. Does not delete data on machines, only the cluster configuration.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the cluster | true | storage-team |
| `name` | Cluster name to delete | true | old-cluster |
| `force` | Skip confirmation prompt | false | --force |

#### Examples

```bash
rediacc-cli distributed-storage delete-cluster storage-team old-cluster
```
Delete cluster with confirmation

```bash
rediacc-cli distributed-storage delete-cluster data temp-cluster --force
```
Force delete without confirmation

#### Notes

Remove all machines from cluster first. Data on machines is preserved. This action cannot be undone.

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


## get-cluster

Get details of a specific storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetDistributedStorageCluster`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows detailed information about a distributed storage cluster including configuration, member machines, and health status.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the cluster | true | storage-team |
| `name` | Cluster name | true | main-cluster |

#### Examples

```bash
rediacc-cli distributed-storage get-cluster storage-team main-cluster
```
View cluster details

```bash
rediacc-cli distributed-storage get-cluster data replicated-storage --output json
```
Get cluster info in JSON format

#### Notes

Shows machine membership, replication status, and storage utilization. Requires team membership.

#### Business Rules

- User must be authenticated with valid credentials
- User must be a member of the specified team
- Team must exist in your company
- Cluster must exist within the team
- Returns cluster configuration and all node information
- Shows which machine is the primary node
- Includes encrypted vault data for the cluster
- Read-only operation that doesn't modify data
- No special permissions required beyond team membership
- Operation fails if cluster doesn't exist


## list-clusters

List all storage clusters for a team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/ListDistributedStorageClusters`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows all distributed storage clusters owned by a team including their status and machine counts.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name to list clusters from | true | storage-team |

#### Examples

```bash
rediacc-cli distributed-storage list-clusters storage-team
```
List all clusters in storage-team

```bash
rediacc-cli distributed-storage list-clusters data --output json | jq '.[] | select(.status == "HEALTHY")'
```
Find healthy clusters

#### Notes

Elite subscription feature. Shows cluster health, machine count, and storage capacity.

#### Business Rules

- User must be authenticated with valid credentials
- Can optionally filter by specific team name
- Without team filter shows clusters from all your teams
- User must be member of teams to see their clusters
- Shows cluster status, configuration, and node count
- Results sorted by creation date (newest first)
- No pagination limits on results
- Team membership required for visibility
- Cannot see clusters from teams you're not in
- Read-only operation that doesn't modify data


## remove-machines

Remove machines from a storage cluster

#### API Information

**Endpoint:** `POST /api/StoredProcedure/RemoveMachinesFromDistributedStorage`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Removes machines from a distributed storage cluster. Data is migrated to remaining nodes before removal.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the cluster | true | storage-team |
| `cluster` | Cluster name | true | main-cluster |
| `machines` | Comma-separated list of machine names | true | storage-01,storage-02 |
| `force` | Skip confirmation prompt | false | --force |

#### Examples

```bash
rediacc-cli distributed-storage remove-machines storage-team main-cluster storage-01
```
Remove machine with confirmation

```bash
rediacc-cli distributed-storage remove-machines data backup old-node-01,old-node-02 --force
```
Remove multiple machines without confirmation

#### Notes

Ensure sufficient capacity remains. Data migration may take time. Monitor cluster during rebalancing.

#### Business Rules

- User must be authenticated with valid credentials
- User must be a member of the team owning the cluster
- Only machines belonging to the team can be removed
- Can remove any machine including primary nodes
- Non-existent machines are silently skipped
- Machine's storage node flag updated if not in other clusters
- Multiple machines can be removed in one operation
- Removal is immediate with no prerequisite checks
- Cluster modified timestamp is updated
- Removal is logged in audit trail


## update-status

Update cluster operational status

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateDistributedStorageClusterStatus`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Changes the operational status of a distributed storage cluster. Used for maintenance or to control cluster availability.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the cluster | true | storage-team |
| `cluster` | Cluster name | true | main-cluster |
| `status` | New status (ONLINE, OFFLINE, MAINTENANCE) | true | MAINTENANCE |

#### Examples

```bash
rediacc-cli distributed-storage update-status storage-team main-cluster MAINTENANCE
```
Put cluster in maintenance mode

```bash
rediacc-cli distributed-storage update-status data backup-cluster ONLINE
```
Bring cluster back online

#### Notes

OFFLINE prevents new writes. MAINTENANCE allows reads but not writes. Monitor cluster health after status changes.

#### Business Rules

- User must be authenticated with valid credentials
- User must be a member of the team owning the cluster
- Cluster must exist in the specified team
- Status must be one of: PENDING, INITIALIZING, ACTIVE, DEGRADED, FAILED, MAINTENANCE
- Any status can transition to any other valid status
- Status change takes effect immediately
- Previous status is recorded for tracking
- Cluster modified timestamp is updated
- Status change is atomic (all or nothing)
- Change is logged in audit trail with old and new status


## update-vault

Update cluster configuration vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateDistributedStorageClusterVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Updates the encrypted configuration for a distributed storage cluster including replication settings, storage policies, and performance parameters.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the cluster | true | storage-team |
| `cluster` | Cluster name | true | main-cluster |
| `vault` | JSON configuration data | false | `{"replication_factor": 3, "consistency_level": "strong"}` |
| `vault-file` | File containing JSON vault data | false | cluster-config.json |
| `vault-version` | Vault schema version (default: 1) | false | 2 |

#### Examples

```bash
rediacc-cli distributed-storage update-vault storage main-cluster --vault '{"replication_factor":5}'
```
Increase replication factor

```bash
rediacc-cli distributed-storage update-vault data backup --vault-file new-cluster-config.json
```
Update cluster config from file

#### Notes

Changes may require cluster restart. Some settings trigger data rebalancing. Elite subscription required.

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

