---
sidebar_position: 14
---

# Error Handling

The Rediacc Middleware API returns standardized error messages when something goes wrong. This section describes the common error patterns and how to handle them.

## Error Response Format

When an error occurs, the API returns a response with a non-zero failure code and a description of the error in the errors array:

```json
{
  "failure": 1,
  "errors": [
    "Error message describing what went wrong"
  ],
  "resultSets": [],
  "outputs": {}
}
```

## Common Error Codes

The failure code indicates the general type of error:

- `1`: Authentication or permission error
- `2`: Resource not found
- `3`: Resource already exists
- `4`: Invalid input
- `5`: Validation error
- `6`: Business rule violation
- `7`: System error

## Authentication Errors

Authentication errors occur when there is a problem with the request token or user credentials:

```json
{
  "failure": 1,
  "errors": [
    "Invalid request credential or verification data."
  ],
  "resultSets": [],
  "outputs": {}
}
```

Common authentication errors include:

- Invalid request token
- Expired request token
- Invalid user email or password hash
- User not activated
- Insufficient permissions

## Resource Not Found Errors

Resource not found errors occur when the requested resource does not exist:

```json
{
  "failure": 2,
  "errors": [
    "Team \"Engineering Team\" not found in your company."
  ],
  "resultSets": [],
  "outputs": {}
}
```

Common resource not found errors include:

- User not found
- Team not found
- Machine not found
- Repository not found
- Queue item not found
- Bridge not found
- Region not found

## Resource Already Exists Errors

Resource already exists errors occur when trying to create a resource with a name that already exists:

```json
{
  "failure": 3,
  "errors": [
    "Machine with name \"Web Server 1\" already exists in team \"Engineering Team\"."
  ],
  "resultSets": [],
  "outputs": {}
}
```

Common resource already exists errors include:

- User with email already exists
- Team with name already exists
- Machine with name already exists
- Repository with name already exists
- Bridge with name already exists
- Region with name already exists

## Invalid Input Errors

Invalid input errors occur when the request body contains invalid data:

```json
{
  "failure": 4,
  "errors": [
    "Machine vault data must be valid JSON."
  ],
  "resultSets": [],
  "outputs": {}
}
```

Common invalid input errors include:

- Invalid JSON in vault data
- Invalid email format
- Missing required fields
- Invalid data types
- Invalid vault version for updates

## Validation Errors

Validation errors occur when the input data fails to meet specific validation rules:

```json
{
  "failure": 5,
  "errors": [
    "User hash must be exactly 32 bytes."
  ],
  "resultSets": [],
  "outputs": {}
}
```

Common validation errors include:

- User hash size incorrect
- Name cannot be empty
- Vault content too large
- Invalid characters in name fields

## Business Rule Violations

Business rule violation errors occur when the request violates a business rule or constraint:

```json
{
  "failure": 6,
  "errors": [
    "Cannot remove team \"Engineering Team\" because it has associated machines. Remove machines first."
  ],
  "resultSets": [],
  "outputs": {}
}
```

Common business rule violation errors include:

- Cannot remove resource with dependencies
- Cannot remove last administrator
- Cannot remove own user account
- Cannot deactivate own user account
- Cannot remove last team in company
- Queue item already has a response

## System Errors

System errors occur when there is an internal problem with the middleware server:

```json
{
  "failure": 7,
  "errors": [
    "Internal server error. Please try again later."
  ],
  "resultSets": [],
  "outputs": {}
}
```

System errors are rare and typically indicate a problem with the server configuration, database connection, or other infrastructure issues.

## Best Practices for Error Handling

When working with the Rediacc Middleware API, follow these best practices for error handling:

1. Always check the `failure` field in the response to determine if an error occurred.
2. Display the error messages from the `errors` array to the user or log them for debugging.
3. For authentication errors, redirect the user to the login page or refresh the authentication token.
4. For resource not found errors, refresh the resource list or provide a way for the user to create the resource.
5. For resource already exists errors, prompt the user to choose a different name.
6. For invalid input errors, validate the input on the client side before sending the request.
7. For business rule violation errors, guide the user through the necessary steps to resolve the constraint.
8. For system errors, retry the request after a delay or contact the system administrator.
