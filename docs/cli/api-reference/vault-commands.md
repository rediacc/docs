# Vault

Vault operations.

## Table of Contents

- [clear-password](#clear-password)
- [set](#set)
- [set-password](#set-password)
- [status](#status)


## clear-password

Clear the stored master password

#### Details

Removes the master password from local configuration. You'll need to re-enter it for future vault operations.

#### Examples

```bash
rediacc-cli vault clear-password
```
Remove stored master password

#### Notes

Use this for security when done with vault operations. Does not affect encrypted data.

#### Business Rules

- This is a local client-side operation (no server API call)
- Only clears the password from current CLI session memory
- Does not affect other CLI sessions or users
- Vault fields will show as encrypted base64 strings after clearing
- You can set the password again anytime with vault set-password
- Clearing does not log you out or affect authentication
- Executes immediately without confirmation prompt
- Automatically happens when you exit the CLI or logout
- Useful for security when sharing terminal or taking a break
- Does not modify any encrypted data stored on the server


## set

Update vault data for any resource type

#### Details

Updates the encrypted vault configuration for teams, machines, regions, bridges, company, repositories, storages, or schedules. Vaults store sensitive configuration data and credentials.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `resource_type` | string | Yes | - | Type of resource to update | machine |
| `name` | string | No | - | Resource name (not needed for 'company') | web-server-01 |
| `file` | string | No | - | File containing JSON vault data (use '-' for stdin) | vault-config.json |
| `team` | string | No | - | Team name (required for machine, repository, storage, schedule) | dev-team |
| `region` | string | No | - | Region name (required for bridge) | us-east |
| `vault-version` | string | No | - | Vault schema version | 2 |

#### Examples

```bash
rediacc-cli vault set machine web-01 machine-config.json --team prod
```
Update machine vault from file

```bash
echo '{"SSH_PRIVATE_KEY":"..."}' | rediacc-cli vault set team dev-team -
```
Update team vault from stdin

```bash
rediacc-cli vault set company company-settings.json
```
Update company-wide vault

#### Notes

Vault data is encrypted with master password. Always backup current vault before updating. Use 'inspect' commands to view current vault.

#### Business Rules

- User must be authenticated to perform this operation
- User must have appropriate access to the entity
- Vault data must be valid JSON format
- Vault data is encrypted with master password before storage
- Maximum vault size is 64KB after encryption
- Company vault requires company admin permissions
- Team vault requires team membership
- Entity-specific vaults require team membership
- Previous vault data is completely replaced
- Vault updates are tracked in audit logs for security


## set-password

Set the master password for vault encryption

#### Details

Configures the master password used to encrypt and decrypt all vault data. This password is stored locally and never transmitted. Required for vault operations.

#### Examples

```bash
rediacc-cli vault set-password
```
Set master password with secure prompt

#### Notes

Password is stored in local configuration. Use a strong password. Required for viewing/updating vault data.

#### Business Rules

- This is a local client-side operation (no server API call)
- The password is stored only in memory during the current CLI session
- Password is never saved to disk or configuration files
- Required to decrypt vault data returned from API responses
- Password remains in memory until CLI exits or you use clear-password
- Each company may have its own master password
- Wrong password will result in garbled vault data when decrypting
- Password input is hidden for security (no echo to terminal)
- No password complexity requirements enforced by the client
- Used for both encryption and decryption of vault fields


## status

Show vault encryption status

#### Details

Displays whether a master password is configured and provides information about vault encryption status.

#### Examples

```bash
rediacc-cli vault status
```
Check vault configuration status

#### Notes

Shows if master password is set but not the password itself.

#### Business Rules

- This is primarily a local operation with one API call if needed
- User must be authenticated to check vault status
- Automatically fetches company vault info if not cached
- Shows if cryptography library is installed locally
- Displays current company name from authentication
- Indicates if company requires vault encryption
- Shows if master password is set in current session
- Read-only operation that doesn't modify any data
- Helps troubleshoot vault access issues
- Supports JSON output mode for scripting

