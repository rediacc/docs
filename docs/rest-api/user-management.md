---
sidebar_position: 4
---

# User Management

The user management API allows you to create, activate, and manage user accounts within your company.

## Enable User Account

Activates a previously created user account, allowing the user to log in.

### Endpoint

```
POST /api/StoredProcedure/ActivateUserAccount
```

### Headers

```
Content-Type: application/json
```

### Request Body

```json
{
  "userEmail": string
}
```

### Response

```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "userEmail": string,
          "activated": boolean,
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- The user must exist in the system.
- An empty response with failure code 0 indicates success.
- If the user is already activated, an error will be returned.

## Create New User

Creates a new user account within the same company as the authenticated user.

### Endpoint

```
POST /api/StoredProcedure/CreateNewUser
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "newUserEmail": string,
  "newUserHash": string
}
```

### Response

```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "userEmail": string,
          "companyPassphrase": string,
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- The new user is created in the same company as the authenticated user.
- The email address must not already exist in the system.
- The user hash must be exactly 32 bytes.
- The new user is initially not activated and must be activated using ActivateUserAccount.
- The new user is automatically added to the same teams as the creating user.

## Manage User 2FA

Enables or disables two-factor authentication for a user.

### Endpoint

```
POST /api/StoredProcedure/UpdateUser2FA
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

For enabling 2FA:
```json
{
  "action": "enable",
  "verificationCode": string  // Optional for initial setup verification
}
```

For disabling 2FA:
```json
{
  "action": "disable",
  "verificationCode": string  // Required to confirm identity
}
```

### Response

When enabling 2FA (first call without verification code):
```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "secretKey": string,
          "qrCodeUri": string,
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

When completing 2FA setup (with verification code):
```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

When disabling 2FA:
```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- Users can only enable/disable 2FA for their own account.
- When enabling 2FA, a secret key is generated and must be verified with a valid TOTP code.
- When disabling 2FA, a valid TOTP code must be provided to confirm identity.
- The 2FA secret is stored encrypted in the user's vault.
- The setup process generates a QR code URI that can be displayed to the user for scanning with authenticator apps.

## Update User Email

Changes the email address of a user.

### Endpoint

```
POST /api/StoredProcedure/UpdateUserEmail
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "currentUserEmail": string,
  "newUserEmail": string
}
```

### Response

```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "userEmail": string,
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- The target user must be in the same company as the authenticated user.
- The new email must not already be used by another user.
- The new email must be a valid email format (contains '@' and at least one '.' after '@').

## Update User Password

Changes the password of the authenticated user.

### Endpoint

```
POST /api/StoredProcedure/UpdateUserPassword
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "userNewPass": string
}
```

### Response

```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 0,
      "data": [
        {
          "nextRequestCredential": string
        }
      ]
    },
    {
      "resultSetIndex": 1,
      "data": [
        {
          "userEmail": string,
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- The new password hash must be exactly 32 bytes.
- The company's secure data is re-encrypted with the new password.
- The password change generates a new request token that must be used for subsequent API calls.

## Disable User Account

Deactivates a user account, preventing the user from logging in.

### Endpoint

```
POST /api/StoredProcedure/UpdateUserToDeactivated
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "userEmail": string
}
```

### Response

```json
{
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "userEmail": string,
          "result": string
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- The target user must be in the same company as the authenticated user.
- Users cannot deactivate their own accounts.
- The system prevents deactivating the last administrator in the company.
- All active sessions for the deactivated user are automatically terminated.

## Get All Company Users

Retrieves a list of all users in the authenticated user's company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyUsers
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
  "failure": number,
  "errors": array,
  "tables": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "userEmail": string,
          "activated": boolean,
          "vaultVersion": number,
          "vaultContent": string,
          "permissionsName": string,
          "companyName": string,
          "teamCount": number,
          "twoFactorEnabled": boolean
        }
      ]
    }
  ],
  "outputs": object
}
```

### Business Rules

- Users can only view user information within their own company.
- The response includes each user's activation status, permission group, team participation count, and 2FA status.
- The vault content is decrypted using the company passphrase derived from the authenticated user's password.