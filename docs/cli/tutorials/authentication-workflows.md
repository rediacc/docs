# Authentication Workflows

This guide covers common authentication scenarios and best practices for managing users and sessions in Rediacc.

## Authentication Concepts

### Token Chain Security
Rediacc uses a unique token chain system where each API response provides a new token for the next request. This prevents token replay attacks and ensures secure session management.

### Permission Groups
Users are assigned to permission groups that control access to API endpoints:
- **Administrators**: Full system access
- **Users**: Standard access to team resources
- **Bridges**: Special accounts for automated systems
- **Custom Groups**: Available with paid subscriptions

## Common Workflows

### Initial Company Setup

When setting up Rediacc for the first time:

```bash
# 1. Create company and admin account
rediacc-cli create company "Acme Corporation" \
  --email admin@acme.com \
  --password AdminPass123! \
  --plan COMMUNITY

# 2. Login as admin
rediacc-cli login --email admin@acme.com

# 3. Set master password for vault encryption
rediacc-cli vault set-password

# 4. Create initial team structure
rediacc-cli create team "Development"
rediacc-cli create team "Production"
```

### User Onboarding Process

Standardized process for adding new team members:

```bash
# 1. Admin creates user account
rediacc-cli create user developer@acme.com

# 2. Admin activates the account
rediacc-cli user activate developer@acme.com

# 3. Admin assigns to teams
rediacc-cli team-member add Development developer@acme.com

# 4. Admin assigns permission group (if needed)
rediacc-cli permission assign developer@acme.com developers

# 5. New user logs in and changes password
rediacc-cli login --email developer@acme.com
rediacc-cli user update-password
```

### Managing Service Accounts

For automated systems and CI/CD pipelines:

```bash
# 1. Create dedicated service account
rediacc-cli create user ci-service@acme.com \
  --password $(openssl rand -base64 32)

# 2. Activate account
rediacc-cli user activate ci-service@acme.com

# 3. Create bridge for the service
rediacc-cli create bridge us-east ci-bridge

# 4. Get bridge-specific token
rediacc-cli login --email ci-service@acme.com \
  --target ci-bridge \
  --expiration 8760  # 1 year

# 5. Add to required teams
rediacc-cli team-member add Production ci-service@acme.com
```

### Implementing 2FA

Enhance security with two-factor authentication:

```bash
# 1. User enables 2FA
rediacc-cli user update-2fa true --password CurrentPass123

# 2. Scan QR code with authenticator app

# 3. Future logins require 2FA code
rediacc-cli login --email user@acme.com \
  --password CurrentPass123 \
  --tfa-code 123456

# 4. To disable 2FA (requires current code)
rediacc-cli user update-2fa false \
  --password CurrentPass123 \
  --current-code 654321
```

### Session Management for Scripts

Best practices for automated scripts:

```bash
#!/bin/bash
# script-with-auth.sh

# Store credentials securely
REDIACC_EMAIL="${REDIACC_EMAIL:-service@acme.com}"
REDIACC_PASSWORD="${REDIACC_PASSWORD}"

# Login at script start
rediacc-cli login \
  --email "$REDIACC_EMAIL" \
  --password "$REDIACC_PASSWORD" \
  --expiration 2

# Set error handling
set -e
trap 'rediacc-cli logout' EXIT

# Your script operations
rediacc-cli list teams
rediacc-cli create repository Production my-app

# Logout handled by trap
```

### Bulk User Management

Managing multiple users efficiently:

```bash
# Export current users
rediacc-cli list users --output json > users-backup.json

# Find inactive users
rediacc-cli list users --output json | \
  jq '.data[] | select(.activated == false) | .userEmail'

# Bulk user creation from CSV
cat users.csv | while IFS=, read -r email team role; do
  # Create user
  rediacc-cli create user "$email"
  
  # Activate
  rediacc-cli user activate "$email"
  
  # Add to team
  rediacc-cli team-member add "$team" "$email"
  
  # Assign role if specified
  if [ -n "$role" ]; then
    rediacc-cli permission assign "$email" "$role"
  fi
done
```

### Emergency Access Recovery

When locked out or credentials compromised:

```bash
# 1. Admin deactivates compromised account
rediacc-cli user deactivate compromised@acme.com --force

# 2. Create new credentials
rediacc-cli create user temporary@acme.com
rediacc-cli user activate temporary@acme.com

# 3. Grant necessary permissions
rediacc-cli permission assign temporary@acme.com Administrators

# 4. Fix the issue, then clean up
rediacc-cli user deactivate temporary@acme.com
```

## Security Best Practices

### Password Management
- Use strong, unique passwords (16+ characters)
- Never hardcode passwords in scripts
- Use environment variables or secure vaults
- Rotate service account passwords regularly

### Token Security
- Tokens expire based on --expiration setting
- Default expiration is 24 hours
- Use shorter expiration for high-security operations
- Never share or log authentication tokens

### Audit Trail
Monitor authentication events:
```bash
# View authentication audit logs
rediacc-cli list audit-logs \
  --entity-filter User \
  --start-date $(date -d '7 days ago' --iso-8601)

# Check active sessions
rediacc-cli list sessions
```

## Troubleshooting

### Common Issues

**Token Expired During Long Operations**
```bash
# Use longer expiration for batch operations
rediacc-cli login --expiration 168  # 7 days
```

**Permission Denied**
```bash
# Check current permissions
rediacc-cli list users --output json | \
  jq '.data[] | select(.userEmail == "user@acme.com")'

# Verify team membership
rediacc-cli list team-members Production
```

**Account Locked**
```bash
# Admin checks user status
rediacc-cli list users | grep user@acme.com

# Reactivate if needed
rediacc-cli user activate user@acme.com
```

## Advanced Scenarios

### Multi-Environment Authentication
```bash
# Production environment
export REDIACC_API_URL=https://api.rediacc.com
rediacc-cli login --email prod-user@acme.com

# Development environment
export REDIACC_API_URL=https://dev-api.rediacc.com
rediacc-cli login --email dev-user@acme.com
```

### Delegated Authentication
For applications that need to act on behalf of users:
```bash
# Create application service account
rediacc-cli create user app-service@acme.com

# Grant specific permissions
rediacc-cli permission create-group app-services
rediacc-cli permission add app-services GetTeamMachines
rediacc-cli permission add app-services GetTeamRepositories
rediacc-cli permission assign app-service@acme.com app-services
```

## Related Guides
- [Team Management Workflow](./team-management-workflow.md)
- [Permission Management](./permission-management.md)
- [API Reference: Authentication Commands](../api-reference/authentication.md)
- [API Reference: User Commands](../api-reference/user-commands.md)