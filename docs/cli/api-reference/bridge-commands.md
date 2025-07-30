# Bridge

Bridge operations.

## Table of Contents

- [reset-auth](#reset-auth)


## reset-auth

Generate new bridge credentials

#### API Information

**Endpoint:** `POST /api/StoredProcedure/ResetBridgeAuthorization`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Resets the authentication credentials for a bridge. The running bridge process will need to be restarted with new credentials.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `name` | Bridge name to reset | true | main-bridge |
| `force` | Skip confirmation prompt | false | --force |

#### Examples

```bash
rediacc-cli bridge reset-auth main-bridge
```
Reset bridge auth with confirmation

```bash
rediacc-cli bridge reset-auth compromised-bridge --force
```
Force reset without confirmation

#### Notes

Use when credentials are compromised. Requires bridge restart. Get new token with 'login --target bridge-name'.

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

