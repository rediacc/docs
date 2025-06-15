---
sidebar_position: 3
---

# Company Management

Companies are the top-level organizational units in the Rediacc Middleware system. Each company can have multiple teams, regions, and users.

## Create New Company

Creates a new company in the system and registers the initial administrator user.

### Endpoint

```
POST /api/StoredProcedure/CreateNewCompany
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
  "companyName": "Acme Corporation"
}
```

### Response

```json
{
  "failure": 0,
  "errors": [],
  "tables": [],
  "outputs": {}
}
```

### Business Rules

- The user email must be a valid email format (contains '@' and at least one '.' after '@').
- The user hash must be exactly 32 bytes.
- Each company is created with:
  - A default "Administrators" permission group
  - A default team named "Default Team"
  - A default region named "Default Region"
  - A Global Bridges named "Global Bridges" in the default region
- The initial user is created with the "Administrators" permission group but is not activated.
- The user must be activated separately using the ActivateUserAccount procedure.
- The user is automatically added to the "Default Team".

## Get Company Secure Data

Retrieves the secure data vault for the current user's company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyVault
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
          "companyName": "Acme Corporation",
          "vaultVersion": 1,
          "vaultContent": "{\"description\":\"Company data...\",\"settings\":{...}}"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Users can only access data for their own company.
- The vault content is encrypted in the database and decrypted using the company passphrase derived from the user's password.

## Update Company Secure Data

Updates the secure data vault for the current user's company.

### Endpoint

```
POST /api/StoredProcedure/UpdateCompanyVault
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "companyVault": "{\"description\":\"Updated company data...\",\"settings\":{...}}",
  "vaultVersion": 1
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
          "companyName": "Acme Corporation",
          "vaultVersion": 2,
          "result": "Vault updated successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- The provided vault content must be valid JSON.
- The vault version must match the current version to prevent conflicts from concurrent updates.
- After successful update, the vault version is incremented.
- Users can only update data for their own company.

## Get User Company Details

Retrieves details about the current user's company, including statistics.

### Endpoint

```
POST /api/StoredProcedure/GetUserCompany
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
          "companyName": "Acme Corporation",
          "vaultVersion": 2,
          "vaultContent": "{\"description\":\"Company data...\",\"settings\":{...}}",
          "teamCount": 3,
          "regionCount": 2,
          "userCount": 15
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- For security, users can only view information about their own company.
- The statistics include counts of teams, regions, and users associated with the company.

## Get Company Vaults

Retrieves multiple secure data vaults associated with the company.

### Endpoint

```
POST /api/StoredProcedure/GetCompanyVaults
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "vaultNames": ["settings", "billing", "integrations"]
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
          "vaultName": "settings",
          "vaultVersion": 3,
          "vaultContent": "{\"theme\":\"dark\",\"timezone\":\"UTC\"}"
        },
        {
          "vaultName": "billing",
          "vaultVersion": 1,
          "vaultContent": "{\"plan\":\"premium\",\"billingCycle\":\"monthly\"}"
        },
        {
          "vaultName": "integrations",
          "vaultVersion": 2,
          "vaultContent": "{\"slack\":{\"enabled\":true},\"teams\":{\"enabled\":false}}"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Users can only access vaults for their own company.
- Multiple vault names can be requested in a single call.
- Each vault is independently versioned.
- Vault content is encrypted and decrypted using the company passphrase.

## Update Company Vaults

Updates multiple secure data vaults for the company in a single operation.

### Endpoint

```
POST /api/StoredProcedure/UpdateCompanyVaults
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "vaults": [
    {
      "vaultName": "settings",
      "vaultContent": "{\"theme\":\"light\",\"timezone\":\"EST\"}",
      "vaultVersion": 3
    },
    {
      "vaultName": "billing",
      "vaultContent": "{\"plan\":\"enterprise\",\"billingCycle\":\"annual\"}",
      "vaultVersion": 1
    }
  ]
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
          "vaultName": "settings",
          "vaultVersion": 4,
          "result": "Updated successfully"
        },
        {
          "vaultName": "billing",
          "vaultVersion": 2,
          "result": "Updated successfully"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- All vault contents must be valid JSON.
- Each vault version must match the current version to prevent conflicts.
- All updates are performed atomically - either all succeed or all fail.
- After successful update, each vault version is incremented.

## Update Company Block User Requests

Enables or disables the ability for new users to request access to join the company.

### Endpoint

```
POST /api/StoredProcedure/UpdateCompanyBlockUserRequests
```

### Headers

```
Content-Type: application/json
Rediacc-RequestToken: {request-credential}
```

### Request Body

```json
{
  "blockUserRequests": true
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
          "companyName": "Acme Corporation",
          "blockUserRequests": true,
          "updatedTime": "2025-05-03T18:00:00.000Z"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules

- Only users with administrator permissions can update this setting.
- When enabled (true), new users cannot request to join the company.
- When disabled (false), new users can request access which must be approved by an administrator.
- This setting does not affect existing users or pending requests.
