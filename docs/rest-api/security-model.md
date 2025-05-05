---
sidebar_position: 15
---

# Security Model

The Rediacc Middleware system implements a robust security model to protect sensitive data and ensure proper access controls. This section describes the key security concepts and mechanisms used in the system.

## Encryption Overview

All sensitive data in the Rediacc Middleware system is encrypted using strong encryption:

1. **Vault Encryption**: All vault data (JSON objects) is encrypted in the database using SQL Server's `ENCRYPTBYPASSPHRASE` function.
2. **Password Security**: User passwords are never stored directly. Instead, a hash of the password is used as an encryption key.
3. **Company Passphrase**: Each company has a random passphrase that is used to encrypt all vault data associated with the company.
4. **Decryption**: Data is decrypted only when needed, using the company passphrase derived from the user's password.
5. **Chunked Storage**: Large vault data is automatically split into chunks of manageable size (max 3072 characters per chunk) for secure and efficient storage and retrieval.

## Authentication Flow

The authentication flow in Rediacc Middleware follows these steps:

1. **Company Creation**:
   - When a company is created, a random 64-character passphrase is generated.
   - This passphrase is encrypted with the initial admin user's password hash.
   - The encrypted passphrase is stored in the user record.

2. **User Authentication**:
   - The user provides their email and password hash.
   - The system retrieves the encrypted company passphrase from the user record.
   - The system decrypts the company passphrase using the provided password hash.
   - If the decryption succeeds, the user is authenticated.
   - If 2FA is enabled for the user, a valid TOTP code must also be provided.

3. **Session Management**:
   - Upon successful authentication, a unique request credential (GUID) is generated.
   - The credential is used to encrypt the company passphrase, and the result is stored in a request record.
   - The request credential is returned to the client for use in subsequent API calls.
   - Each API call refreshes the request credential, implementing a sliding session expiration.

## Two-Factor Authentication

The system implements Time-based One-Time Password (TOTP) two-factor authentication:

1. **Secret Generation**:
   - Each user can have a unique TOTP secret key.
   - Keys are generated using a cryptographically secure random generator.
   - Keys are Base32-encoded for easy input into authenticator apps.

2. **Secret Storage**:
   - TOTP secrets are stored encrypted in the user's vault.
   - Secrets are never exposed in plaintext form through API responses.

3. **Code Validation**:
   - TOTP codes are 6-digit numbers valid for 30 seconds.
   - The system allows a ±1 step window to account for clock skew.
   - The validation uses HMAC-SHA1 as specified by RFC 6238.

4. **Implementation**:
   - 2FA is implemented directly in the database using T-SQL.
   - The implementation includes Base32 encoding/decoding and HMAC-SHA1 functionality.

## Authorization Model

The authorization model in Rediacc Middleware is based on permissions and team membership:

1. **Permission Groups**:
   - Each company can define multiple permission groups (e.g., Administrators, Developers, Viewers).
   - Each permission group contains a set of specific permissions.
   - Each user is assigned to one permission group.

2. **Permissions**:
   - Permissions are defined at the procedure level (e.g., CreateMachine, GetTeamMachines).
   - Each API endpoint checks that the user has the corresponding permission.
   - The "Administrators" permission group automatically includes all permissions.

3. **Team Membership**:
   - Resources like machines, repositories, and schedules belong to teams.
   - Users must be members of a team to access its resources.
   - Team membership is managed through participation records.

## Vault System

The vault system provides secure storage for structured data:

1. **Vault Structure**:
   - Each vault has a unique credential (GUID).
   - Vaults store encrypted JSON data.
   - Each vault has a version number for optimistic concurrency control.
   - Each vault belongs to a specific resource (company, team, machine, etc.).

2. **Chunked Storage**:
   - Large vault data is automatically split into multiple chunks.
   - Each chunk has a maximum size of 3072 characters.
   - Chunks are stored with order information for proper reassembly.
   - The chunking is transparent to API consumers.

3. **Vault Operations**:
   - Create: Creates a new vault with initial data.
   - Read: Retrieves and decrypts vault data, automatically reassembling chunked data.
   - Update: Updates vault data with new content, handling chunking as needed.
   - Delete: Securely removes a vault and all its associated chunks.

4. **Concurrency Control**:
   - When updating a vault, the client must provide the current version number.
   - If the version matches, the update proceeds and the version is incremented.
   - If the version does not match, the update fails with a concurrency error.

## Request Verification

To prevent replay attacks and ensure request integrity:

1. Each request includes a verification token (generated by the client).
2. The verification token is stored with the request credential in the database.
3. Subsequent requests must include both the request credential and the matching verification token.
4. This ensures that intercepted request credentials cannot be used without the verification token.

## Secure Data Handling

The system implements several security best practices for data handling:

1. **Data Minimization**:
   - Only necessary data is included in responses.
   - Sensitive data is only decrypted when needed.

2. **Key Rotation**:
   - Users can change their passwords, which automatically re-encrypts their copy of the company passphrase.
   - Request credentials are refreshed with each API call.

3. **Session Expiration**:
   - Sessions automatically expire after a period of inactivity.
   - Users can explicitly log out to invalidate their session.

4. **Password Handling**:
   - The system never stores plain text passwords.
   - Password hashes are generated client-side and never transmitted as plain text.
   - The system uses the password hash only for decryption, not for direct comparison.

5. **Random String Generation**:
   - Enhanced random string generation for security-critical components.
   - Supports multiple encoding formats (Alphanumeric, Base32, Alphanumeric with special characters).
   - Used for session tokens, verification data, and 2FA secrets.

## Database Security

The database security model includes:

1. **Least Privilege**:
   - Stored procedures run with minimal database permissions.
   - Direct table access is restricted.

2. **Parameterized Queries**:
   - All SQL is executed through parameterized stored procedures.
   - This prevents SQL injection attacks.

3. **Data Encryption**:
   - Sensitive data is encrypted at rest in the database.
   - Encryption keys are not stored in the database.

4. **Foreign Key Constraints**:
   - Relationships between tables are enforced at the database level.
   - This ensures data integrity and prevents orphaned records.