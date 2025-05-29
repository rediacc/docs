---
sidebar_position: 2
---

# Authentication

Authentication in the Rediacc Middleware system is based on secure request sessions. When you authenticate, you receive a request token that must be included in subsequent API calls. Each API response refreshes this token, and you must use the new token for the next request.

## Create Authentication Request

Creates a new authentication session and returns a request credential token that can be used for subsequent API calls.

### Endpoint

```
POST /api/StoredProcedure/CreateAuthenticationRequest
```

### Headers

```
Content-Type: application/json
Rediacc-UserEmail: {user-email}
Rediacc-UserHash: {user-password-hash}
```

### Request Body

```json
{
  "name": "Session Name",  // A name to identify this authentication session
  "twoFactorCode": "123456"  // Optional: TOTP code if 2FA is enabled for the user
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "nextRequestCredential": "7f5040b0-a0c7-4a08-9176-bdc386bd9bd4"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The user must exist in the system and be activated.
- The user email must be a valid email format (contains '@' and at least one '.' after '@').
- The user hash must be exactly 32 bytes.
- The session name cannot be empty.
- The verification data (transmitted automatically) cannot be empty.
- The provided user hash must correctly decrypt the stored password for the user.
- If 2FA is enabled for the user, a valid TOTP code must be provided.
- TOTP codes are 6-digit numbers and valid for 30 seconds, with a 1-step window for time skew.

## Two-Factor Authentication

Rediacc supports Time-based One-Time Password (TOTP) two-factor authentication for additional security.

### TOTP Implementation

- TOTP follows the RFC 6238 standard, compatible with authenticator apps like Google Authenticator and Authy
- Each user can have a unique TOTP secret stored securely in their vault
- TOTP codes are 6 digits and valid for 30 seconds
- A time skew window of ±30 seconds is allowed to account for clock differences

### Setting Up 2FA

2FA can be enabled or disabled using the UpdateUser2FA procedure. When enabling 2FA:

1. The system generates a secure Base32-encoded secret key
2. The secret is stored encrypted in the user's vault
3. A QR code or manual entry key should be provided to the user for their authenticator app
4. The user must verify their 2FA setup by entering a valid code before 2FA is fully enabled

### Authenticating with 2FA

When 2FA is enabled for a user:

1. The user provides their regular credentials (email and password hash)
2. The system checks if 2FA is enabled for the user
3. If enabled, the system expects a 6-digit TOTP code in the authentication request
4. The system validates the TOTP code against the stored secret
5. Only if all verification steps pass is the authentication successful

## Logout User Session

Ends an authentication session, invalidating the request token.

### Endpoint

```
POST /api/StoredProcedure/LogoutUserSession
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "userEmail": "user@example.com",
          "result": "Session successfully logged out"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The request token must be valid and active.
- After logout, the token cannot be used for further API calls.

## Get User Sessions

Retrieves a list of active authentication sessions for the current user.

### Endpoint

```
POST /api/StoredProcedure/GetUserSessions
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "requestName": "Session Name",
          "requestTime": "2025-05-03T10:15:30.123Z",
          "userEmail": "user@example.com",
          "permissionsName": "Administrators"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- For security reasons, only information about the current user's sessions is returned.
- The system maintains a timestamp of when each session was last used.