# Auth Commands

Commands for auth operations.

## Table of Contents

- [auth privilege](#auth-privilege)
- [auth status](#auth-status)


## auth privilege


### privilege

Grant special privileges to auth request

#### API Information

**Endpoint:** `POST /api/StoredProcedure/PrivilegeAuthenticationRequest`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Elevates an authentication request with special privileges. Used for administrative operations requiring enhanced permissions.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `request_hash` | Authentication request hash | true | a1b2c3d4e5f6... |
| `privilege` | Privilege level to grant | true | admin |

#### Examples

```bash
rediacc-cli auth privilege a1b2c3d4e5f6789 admin
```
Grant admin privilege to request

```bash
rediacc-cli auth privilege xyz123 elevated
```
Grant elevated access

#### Notes

Requires existing admin permissions. Use with caution. Privileges are temporary for the session.

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


## auth status


### status

Check authentication request status

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetRequestAuthenticationStatus`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Queries the status of a pending authentication request by its hash. Used to verify if an authentication attempt succeeded.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `request_hash` | Authentication request hash | true | a1b2c3d4e5f6... |

#### Examples

```bash
rediacc-cli auth status a1b2c3d4e5f6789
```
Check status of auth request

#### Notes

Request hashes are provided during login attempts. Status includes pending, authorized, or expired.

#### Business Rules

- Requires active authentication token to display status
- Shows current user email, company, and assigned teams
- Displays token creation time and expiration status
- Lists all permission groups assigned to the user
- Shows whether 2FA is enabled for the account
- Indicates if account is activated or pending activation
- Returns error if no valid token is present
- Token details include the token ID (not the full token value)
- Useful for verifying session validity before operations
- Does not refresh or extend token lifetime

