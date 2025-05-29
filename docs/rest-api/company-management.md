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
  - A default bridge named "Default Bridge" in the default region
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
