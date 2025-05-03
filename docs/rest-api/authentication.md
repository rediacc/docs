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
  "name": "Session Name"  // A name to identify this authentication session
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
          "nextReqeustCredential": "7f5040b0-a0c7-4a08-9176-bdc386bd9bd4"
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
