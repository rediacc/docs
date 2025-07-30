# Authentication

Manage authentication and sessions.

## Table of Contents

- [login](#login)
- [logout](#logout)


## login

Authenticate with the Rediacc API

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateAuthenticationRequest`

**Authentication:** Required (credential-based with Rediacc-UserEmail and Rediacc-UserHash headers)

#### Details

Creates an authentication session and receives an API token for subsequent requests. Supports two-factor authentication and permission requests.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `email` | User email address | false | user@company.com |
| `password` | User password | false | SecureP@ssw0rd |
| `master-password` | Master password for vault encryption | false | VaultM@sterKey |
| `session-name` | Name for this session | false | Development Workstation |
| `tfa-code` | Two-factor authentication code | false | 123456 |
| `permissions` | Requested permission group | false | admin |
| `expiration` | Token expiration in hours (default: 24) | false | 48 |
| `target` | Target resource for specialized tokens | false | bridge-01 |

#### Examples

```bash
rediacc-cli login
```
Interactive login with prompts

```bash
rediacc-cli login --email user@company.com --password 'P@ssw0rd'
```
Direct login with credentials

```bash
rediacc-cli login --email admin@company.com --tfa-code 123456 --permissions admin
```
Admin login with 2FA

#### Notes

Credentials can be provided as arguments or through interactive prompts. Token is saved locally for future use.

#### Business Rules

- Email and password are required (via args or prompts)
- Account must be activated before first login
- Failed login attempts are tracked and may lock account
- 2FA code required if two-factor authentication is enabled
- Token expires after specified hours (max varies by plan)
- Session name helps identify tokens in audit logs
- Permission requests may require additional authorization
- Master password is stored in memory for vault operations
- Token is saved to ~/.rediacc/config.json
- Multiple named tokens can be stored simultaneously


## logout

Log out and invalidate current session

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteUserRequest`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Terminates the current authentication session on the server and removes the stored token locally. The token becomes immediately invalid.

#### Examples

```bash
rediacc-cli logout
```
Log out current session

#### Notes

This invalidates the token on the server. Any operations using this token will fail after logout.

#### Business Rules

- Requires valid authentication token
- Token is immediately invalidated on server
- Removes token from local configuration
- Clears stored master password from memory
- Does not affect other active sessions
- Cannot be undone - must login again
- Logout is logged in audit trail
- Any running operations continue to completion
- Does not affect saved named tokens
- Recommended before leaving workstation

