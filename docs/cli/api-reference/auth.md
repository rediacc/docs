# Authentication

Authentication and session management commands.

## Table of Contents

- [login](#login)
- [logout](#logout)
- [privilege](#privilege)
- [status](#status)

## login

Authenticate with the Rediacc API

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateAuthenticationRequest`

**Authentication:** Required (credential-based with Rediacc-UserEmail and Rediacc-UserHash headers)

#### Details

Creates an authentication session and receives an API token for subsequent requests. Supports two-factor authentication and permission requests.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `email` | string | No | - | User email address | user@company.com |
| `password` | string | No | - | User password | SecureP@ssw0rd |
| `master-password` | string | No | - | Master password for vault encryption | VaultM@sterKey |
| `session-name` | string | No | - | Name for this session | Development Workstation |
| `tfa-code` | string | No | - | Two-factor authentication code | 123456 |
| `permissions` | string | No | - | Requested permission group | admin |
| `expiration` | string | No | - | Token expiration in hours (default: 24) | 48 |
| `target` | string | No | - | Target resource for specialized tokens | bridge-01 |


#### Examples

```bash
rediacc login
```
Interactive login with prompts

```bash
rediacc login --email user@company.com --password 'P@ssw0rd'
```
Direct login with credentials

```bash
rediacc login --email admin@company.com --tfa-code 123456 --permissions admin
```
Admin login with TFA

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc login
```

##### Auto-Generated cURL Examples

```bash
# Using credential authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/CreateAuthenticationRequest" \
  -H "Content-Type: application/json" \
  -H "Rediacc-UserEmail: user@company.com" \
  -H "Rediacc-UserHash: YOUR_PASSWORD_HASH" \
  -d '{
    "email": "user@company.com",
    "password": "SecureP@ssw0rd",
    "master-password": "VaultM@sterKey"
}'
```

#### Notes

Credentials can be provided as arguments or through interactive prompts. Token is saved locally for future use.

#### Business Rules

- Email and password are required (via args or prompts)
- Account must be activated before first login
- Failed login attempts are tracked and may lock account
- TFA code required if two-factor authentication is enabled
- Token expires after specified hours (max varies by plan)
- Session name helps identify tokens in audit logs
- Permission requests may require additional authorization
- Master password is stored in memory for vault operations
- Token is saved to ~/.rediacc/config.json
- Multiple named tokens can be stored simultaneously

#### Success Message

`Successfully logged in as {email}`

## logout

Log out and invalidate current session

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteUserRequest`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Terminates the current authentication session on the server and removes the stored token locally. The token becomes immediately invalid.

#### Parameters

No parameters required.


#### Examples

```bash
rediacc logout
```
Log out current session

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc logout
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/DeleteUserRequest" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{}'
```

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

#### Success Message

`Successfully logged out`

## privilege

Grant special privileges to auth request

#### API Information

**Endpoint:** `POST /api/StoredProcedure/PrivilegeAuthenticationRequest`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Elevates an authentication request with special privileges. Used for administrative operations requiring enhanced permissions.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `2FACode` | string | Yes | - |  |  |
| `tFACode` | string | Yes | - |  |  |


#### Examples

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc auth privilege
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/PrivilegeAuthenticationRequest" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "2FACode": "example-2_f_a_code",
    "tFACode": "example-t_f_a_code"
}'
```

#### Business Rules

- Only available to users with privilege escalation permissions
- May require re-entering password for security verification
- Elevated privileges are temporary and session-specific
- Privilege elevation is logged in audit trail
- Cannot escalate beyond maximum assigned permission level
- Some operations may require approval from another admin
- Elevation automatically expires after timeout period
- Failed elevation attempts are logged and may trigger alerts
- Cannot be used to bypass company-level restrictions
- Revoked immediately if suspicious activity is detected

#### Success Message

`Successfully privileged authentication request`

## status

Check authentication request status

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetRequestAuthenticationStatus`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Queries the status of a pending authentication request by its hash. Used to verify if an authentication attempt succeeded.

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `requestHash` | string | Yes | - | Authentication request hash | a1b2c3d4e5f6... |


#### Examples

```bash
rediacc auth status a1b2c3d4e5f6789
```
Check status of auth request

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc auth status --request-hash <value>
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/GetRequestAuthenticationStatus" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "requestHash": "a1b2c3d4e5f6..."
}'
```

#### Notes

Request hashes are provided during login attempts. Status includes pending, authorized, or expired.

#### Business Rules

- Requires active authentication token to display status
- Shows current user email, company, and assigned teams
- Displays token creation time and expiration status
- Lists all permission groups assigned to the user
- Shows whether TFA is enabled for the account
- Indicates if account is activated or pending activation
- Returns error if no valid token is present
- Token details include the token ID (not the full token value)
- Useful for verifying session validity before operations
- Does not refresh or extend token lifetime

