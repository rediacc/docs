# Inspect

Inspect operations.

## Table of Contents

- [machine](#machine)
- [repository](#repository)


## machine

Get detailed information about a machine

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamMachines`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows comprehensive information about a specific machine including its configuration, status, assigned bridge, and decrypted vault data.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the machine | true | production |
| `name` | Machine name | true | web-server-01 |

#### Examples

```bash
rediacc-cli inspect machine prod web-01
```
Inspect production web server

```bash
rediacc-cli inspect machine dev database --output json
```
Get machine details in JSON format

#### Notes

Shows decrypted vault if master password is set. Includes IP address, SSH credentials, and custom configuration.

#### Business Rules

- Requires team member or higher permissions
- Machine must belong to specified team
- Shows machine GUID and creation timestamp
- Displays current status and assigned bridge
- Vault data is decrypted if master password is set
- Machine names are case-insensitive for lookup
- Shows SSH connection details from vault
- Includes datastore path configuration
- Reveals all custom fields in machine vault
- Access is logged in audit trail


## repository

Get detailed info about a repository

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetTeamRepositories`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Shows comprehensive information about a specific repository including vault configuration, size, and settings.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team that owns the repository | true | dev-team |
| `name` | Repository name | true | web-app |

#### Examples

```bash
rediacc-cli inspect repository dev-team web-app
```
Inspect web-app repository

```bash
rediacc-cli inspect repository prod api --output json
```
Get repository details in JSON

#### Notes

Shows decrypted vault if master password is set. Includes size, type, and configuration details.

#### Business Rules

- Requires team member or higher permissions
- Repository must belong to specified team
- Shows repository GUID and creation timestamp
- Displays associated machine and its status
- Vault data is decrypted if master password is set
- Repository names are case-insensitive for lookup
- Shows Docker configuration if present in vault
- Includes mount paths and datastore locations
- Reveals environment variables stored in vault
- Access is logged in audit trail

