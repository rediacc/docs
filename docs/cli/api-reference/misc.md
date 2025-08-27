# Miscellaneous

Other commands and utilities.

## Table of Contents

- [is-registered](#is-registered)
- [update-image-machine-assignment](#update-image-machine-assignment)
- [update-user2-f-a](#update-user2-f-a)

## is-registered

is-registered command

#### API Information

**Endpoint:** `POST /api/StoredProcedure/IsRegistered`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `userName` | string | Yes | - |  |  |


#### Examples

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc misc is-registered
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/IsRegistered" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "userName": "example-user_name"
}'
```

#### Success Message

`Operation completed successfully`

## update-image-machine-assignment

update-image-machine-assignment command

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateImageMachineAssignment`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `image` | string | Yes | - |  |  |
| `pool` | string | Yes | - |  |  |
| `team` | string | Yes | - |  |  |
| `newName` | string | Yes | - |  |  |


#### Examples

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc misc update-image-machine-assignment
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateImageMachineAssignment" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "image": "example-image",
    "pool": "example-pool",
    "team": "example-team"
}'
```

#### Success Message

`Operation completed successfully`

## update-user2-f-a

update-user2-f-a command

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateUserTFA`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `enable` | string | Yes | - |  |  |
| `userHash` | string | Yes | - |  |  |
| `currentCode` | string | Yes | - |  |  |
| `generateOnly` | boolean | Yes | - |  |  |
| `verificationCode` | string | Yes | - |  |  |
| `secret` | string | Yes | - |  |  |
| `confirmEnable` | boolean | Yes | - |  |  |


#### Examples

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc misc update-user2-f-a
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateUserTFA" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "enable": "example-enable",
    "userHash": "example-user_hash",
    "currentCode": "example-current_code"
}'
```

