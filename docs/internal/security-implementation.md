---
sidebar_position: 3
title: Security Implementation Details
description: Internal documentation for Rediacc security implementation
---

# Security Implementation Details

This document contains internal details about the security implementation in Rediacc. This information is confidential and should not be shared with external parties.

## Authentication System

### Two-Factor Authentication Implementation

The two-factor authentication system in Rediacc implements the Time-based One-Time Password (TOTP) algorithm according to RFC 6238:

- **Secret Generation**: 
  - 160-bit (20-byte) random secrets are generated using a cryptographically secure random number generator
  - Secrets are Base32-encoded for compatibility with authenticator apps
  - QR code URIs follow the format: `otpauth://totp/Rediacc:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Rediacc`

- **Verification Process**:
  - TOTP codes are 6-digit numbers valid for 30 seconds
  - The system allows a ±1 step window to account for time skew
  - Codes are validated using HMAC-SHA1 with the steps:
    1. Calculate time step from Unix time: `T = floor((Current Unix time) / 30)`
    2. Create HMAC-SHA1 hash using the secret key and T
    3. Extract 4 bytes from the hash using dynamic truncation
    4. Take the last 6 digits of the extracted number as the TOTP code

- **Database Storage**:
  - TOTP secrets are stored in the user's vault, encrypted with the user's password-derived key
  - 2FA activation status is tracked in the User record
  - Failed verification attempts are logged and trigger lockouts after 5 consecutive failures

- **Recovery Mechanisms**:
  - Each user is provided with 10 recovery codes when enabling 2FA
  - Recovery codes are one-time use and stored hashed in the database
  - Hardware security key support is available as a backup authentication method

## Encryption Architecture

### Vault Encryption System

The vault encryption system provides multi-layered security for sensitive data:

- **Key Hierarchy**:
  - Each company has a randomly generated 64-character company passphrase
  - User password hashes are used to encrypt/decrypt the company passphrase
  - The company passphrase is used to encrypt/decrypt all vault data
  - This system ensures that data can only be accessed by authenticated users

- **Encryption Algorithms**:
  - AES-256 in GCM mode for all vault data encryption
  - PBKDF2-HMAC-SHA256 with 100,000 iterations for password key derivation
  - Unique initialization vectors for each encryption operation
  - MAC validation to prevent tampering with encrypted data

- **Chunked Storage Implementation**:
  - Large vault data is split into chunks of 3072 characters maximum
  - Each chunk has a sequence number for reassembly
  - References between chunks are maintained using secure identifiers
  - Chunks are individually encrypted and stored in the database

- **Decryption Flow**:
  1. User provides email and password
  2. System retrieves the encrypted company passphrase for that user
  3. System derives encryption key from the user's password
  4. System attempts to decrypt the company passphrase
  5. If successful, the decrypted company passphrase is used to decrypt vault data
  6. Vault data chunks are reassembled if needed

### Database Security

- **Column-Level Encryption**:
  - Sensitive columns are encrypted using SQL Server's `ENCRYPTBYPASSPHRASE` function
  - Different encryption keys are used for different data categories
  - Key rotation is supported through re-encryption processes

- **Stored Procedure Security**:
  - All database access is through stored procedures
  - Dynamic SQL is avoided to prevent SQL injection
  - Input validation is performed at both application and database levels
  - Least privilege principle applied to stored procedure permissions

- **Audit System**:
  - All sensitive data access is logged
  - Logs include user ID, timestamp, IP address, and operation type
  - Log data is stored in a separate secure database
  - Automated monitoring for suspicious access patterns

## Session Management

### Request Token System

Session security is implemented through a secure request token system:

- **Token Generation**:
  - Request tokens are cryptographically secure random UUIDs
  - Tokens are regenerated with each API call for maximum security
  - Previous tokens are invalidated immediately after use

- **Session Expiration**:
  - Sliding expiration window of 30 minutes by default
  - Configurable session timeouts by company administrators
  - Force logout capability for all sessions or individual sessions
  - Automatic session termination for inactive users

- **Request Verification**:
  - Each request includes a verification token
  - Verification tokens are matched against stored values
  - This prevents replay attacks using captured request tokens
  - All API calls must include both request token and verification token

- **Cross-Site Request Forgery Protection**:
  - Anti-CSRF tokens included in all forms
  - Tokens are validated on form submission
  - Cookie attributes include SameSite=Strict and HttpOnly
  - Origin and referrer validation for all API requests

## Access Control System

### Permission Implementation

The role-based access control system is structured as follows:

- **Permission Groups**:
  - Each permission group contains a collection of specific permissions
  - The "Administrators" group automatically includes all permissions
  - Custom permission groups can be created with any combination of individual permissions
  - Permission inheritance is supported through a hierarchical model

- **Permission Types**:
  - Each permission is tied to a specific API endpoint or function
  - Read permissions: Allow viewing data
  - Write permissions: Allow creating or modifying data
  - Delete permissions: Allow removing data
  - Admin permissions: Allow configuration changes

- **Permission Checks**:
  - Every API call includes permission verification
  - Permissions are checked at the controller level and again at the service level
  - Failed permission checks are logged for security auditing
  - Temporary permission elevation is supported for specific operations with additional authentication

- **Data Isolation**:
  - Users can only access data within their assigned teams
  - Cross-team data access requires explicit permissions
  - Resource owners can grant temporary access to specific resources
  - All cross-boundary access is heavily logged

## Security Monitoring

### Real-Time Defense System

The system includes active security monitoring:

- **Threat Detection Rules**:
  - Login attempt patterns indicating brute force attacks
  - Unusual access patterns or abnormal data access volumes
  - Geographical access anomalies based on user behavior
  - Sensitive operation monitoring (bulk data downloads, permission changes)

- **Response Actions**:
  - Automatic account lockout after suspicious activity
  - IP address blocking for potential attack sources
  - Forced password resets for potentially compromised accounts
  - Administrator notification for high-severity security events

- **Machine Learning Components**:
  - Behavioral user profiling to detect account compromise
  - Anomaly detection for transaction and data access patterns
  - Adaptive thresholds based on historical usage patterns
  - Continuous model retraining based on new data

