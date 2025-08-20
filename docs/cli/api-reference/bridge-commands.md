# Bridge

Bridge operations.

## Table of Contents

- [reset-auth](#reset-auth)
- [update-bridge-vault](#update-bridge-vault)


## reset-auth

Generate new bridge credentials

#### API Information

**Endpoint:** `POST /api/StoredProcedure/ResetBridgeAuthorization`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Resets the authentication credentials for a bridge. The running bridge process will need to be restarted with new credentials.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `name` | string | Yes | - | Bridge name to reset | main-bridge |
| `force` | string | No | - | Skip confirmation prompt | --force |
| `cloud_managed` | string | No | - |  |  |
| `bridge` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc bridge reset-auth bridge-01 example-name
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/ResetBridgeAuthorization" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "bridgeName": "bridge-01"
}'
```

#### Business Rules

- User must be authenticated to perform this operation
- User must belong to the same company as the bridge
- Bridge must exist in the system
- Old authentication token will be immediately invalidated
- New token is generated using cryptographically secure randomness
- Bridge must be restarted with the new token to reconnect
- Active bridge connections will be terminated
- Any running tasks on the bridge will need to be retried
- Token reset is tracked in audit logs for security
- New token must be securely transmitted to bridge operator


## update-bridge-vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateBridgeVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `region` | string | Yes | - |  |  |
| `bridge` | string | Yes | - |  |  |
| `vault_version` | string | No | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc bridge update-bridge-vault bridge-01 us-east
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateBridgeVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "regionName": "us-east",
    "bridgeName": "bridge-01"
}'
```

