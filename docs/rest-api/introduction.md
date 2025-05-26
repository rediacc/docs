---
sidebar_position: 1
---

# Rediacc Middleware API

## Introduction

Rediacc Middleware is a secure data management system that provides a set of RESTful APIs for managing organizations, teams, users, and encrypted data vaults. The middleware facilitates secure communication and data exchange between different components of your application infrastructure.

## Key Features

- **Secure Authentication**: Session-based authentication with credential refresh
- **Company Management**: Create and manage company resources
- **Team Collaboration**: Organize users into teams and control access
- **Regional Organization**: Structure resources by geographic regions
- **Machine Management**: Register and manage machines and servers
- **Queue Processing**: Handle asynchronous tasks through a secure queue system
- **Encrypted Vaults**: Store sensitive JSON data with encryption

## API Overview

All API endpoints are accessed through HTTP POST requests to the following base URL:

```
http://your-server:7322/api/StoredProcedure/{procedure-name}
```

### Authentication Headers

Most API calls require the following authentication header:

```
Rediacc-RequestToken: {request-credential}
```

For initial authentication or company creation, use:

```
Rediacc-UserEmail: {user-email}
Rediacc-UserHash: {user-password-hash}
```

### Response Format

All API responses follow a standard JSON format:

```json
{
  "failure": 0,               // 0 indicates success, non-zero indicates error
  "errors": [],               // Array of error messages if failure is non-zero
  "tables": [                 // Array of result sets returned by the procedure
    {
      "resultSetIndex": 0,
      "data": [
        { ... }               // Objects containing the result data
      ]
    }
  ],
  "outputs": { ... }          // Output parameters from the procedure
}
```

## Getting Started

To begin using the Rediacc Middleware API, you must first:

1. [Create a company](/docs/rest-api/company-management#create-company)
2. [Activate your user account](/docs/rest-api/user-management#enable-user)
3. [Start an authentication session](/docs/rest-api/authentication#create-authentication-request)

Once these steps are completed, you can use the request token returned by the authentication process to make subsequent API calls.
