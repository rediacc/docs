# Misc

Misc operations.

## Table of Contents

- [is-registered](#is-registered)
- [update-image-machine-assignment](#update-image-machine-assignment)
- [update-user2-f-a](#update-user2-f-a)


## is-registered

#### API Information

**Endpoint:** `POST /api/StoredProcedure/IsRegistered`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `user_name` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli misc is-registered
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/IsRegistered" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "userName": "example-userName"
}'
```


## update-image-machine-assignment

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateImageMachineAssignment`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `new_name` | string | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli misc update-image-machine-assignment example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateImageMachineAssignment" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "imageName": "example-imageName",
    "poolName": "example-poolName",
    "teamName": "example-team",
    "newMachineName": "example-newMachineName"
}'
```


## update-user2-f-a

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateUserTFA`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `enable` | string | Yes | - |  |  |
| `user_hash` | string | Yes | - |  |  |
| `current_code` | string | Yes | - |  |  |
| `generate_only` | boolean | Yes | - |  |  |
| `verification_code` | string | Yes | - |  |  |
| `secret` | string | Yes | - |  |  |
| `confirm_enable` | boolean | Yes | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli misc update-user2-f-a
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateUserTFA" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "enable": "example-enable",
    "userHash": "example-userHash",
    "currentCode": "example-currentCode",
    "generateOnly": true,
    "verificationCode": "example-verificationCode",
    "secret": "example-secret",
    "confirmEnable": true
}'
```

