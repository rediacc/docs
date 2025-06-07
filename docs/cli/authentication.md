# Authentication

The Rediacc CLI provides comprehensive authentication and user management capabilities. All operations are secured through session-based authentication with automatic credential refresh.

## Overview

Authentication in Rediacc CLI involves:
- **Session Management**: Login/logout with automatic token refresh
- **User Management**: Create, activate, and manage user accounts
- **Permission Control**: Role-based access through permission groups

## Login & Session Management

### Login

```bash
# Basic login
rediacc-cli login --email user@example.com --password mypassword

# Login with session name
rediacc-cli login --email user@example.com --password mypassword --session-name "My CLI Session"

# Login with 2FA code
rediacc-cli login --email user@example.com --password mypassword --tfa-code 123456

# Login with specific permissions
rediacc-cli login --email user@example.com --password mypassword --permissions "Administrators"

# Login with token expiration (hours)
rediacc-cli login --email user@example.com --password mypassword --expiration 48

# Login for specific target (e.g., bridge token)
rediacc-cli login --email user@example.com --password mypassword --target "bridge-name"
```

**Response:**
```
Successfully logged in as user@example.com
```

### Logout

```bash
# Logout current session
rediacc-cli logout
```

**Response:**
```
Successfully logged out
```

## User Management

### List Users

List all users in your company:

```bash
# List users (table format)
rediacc-cli list users

# List users (JSON format)
rediacc-cli list users --output json
```

**Example output:**
```json
{
  "userEmail": "admin@company.com",
  "activated": true,
  "companyName": "YourCompany",
  "permissionsName": "Administrators",
  "teamCount": 2,
  "vaultContent": "{}",
  "vaultVersion": 1
}
```

### Create User

Create a new user account:

```bash
# Create user (will prompt for password)
rediacc-cli create user newuser@company.com

# Create user with password
rediacc-cli create user newuser@company.com --password securepassword123

# Create user with activation code
rediacc-cli create user newuser@company.com --password securepassword123 --activation-code 12345
```

:::info Password Input
If password is not provided via --password flag, you'll be prompted to enter it securely.
:::

### Get User Company

Get the company associated with the authenticated user:

```bash
# Get user's company information
rediacc-cli list user-company

# JSON output
rediacc-cli list user-company --output json
```

### Activate User

Activate a user account:

```bash
# Activate user with default code (111111)
rediacc-cli user activate user@company.com

# Activate user with specific code
rediacc-cli user activate user@company.com --code 123456
```

### Deactivate User

Deactivate a user account:

```bash
# Deactivate user (with confirmation)
rediacc-cli user deactivate user@company.com

# Deactivate user (skip confirmation)
rediacc-cli user deactivate user@company.com --force
```

### Update Password

Change the current user's password:

```bash
# Update password (will prompt for new password)
rediacc-cli user update-password

# Update password directly
rediacc-cli user update-password --new-password newsecurepassword123
```

### Update Email

Change a user's email address:

```bash
# Update user email
rediacc-cli user update-email current@company.com new@company.com
```

### Update 2FA Settings

Enable or disable two-factor authentication:

```bash
# Enable 2FA (will prompt for password)
rediacc-cli user update-2fa 1

# Disable 2FA with current code
rediacc-cli user update-2fa 0 --password mypassword --current-code 123456

# Enable 2FA with password
rediacc-cli user update-2fa true --password mypassword
```

## Authentication Workflow

### For New Installations

1. **Create Company**: First-time setup creates company and admin user
2. **Login**: Use admin credentials to access the system
3. **Create Users**: Add team members and assign permissions
4. **Activate Users**: Enable user accounts for login

```bash
# Step 1: Create company (first time only)
rediacc-cli create company "Your Company" \
  --email admin@company.com \
  --password adminpass123 \
  --plan COMMUNITY

# Step 2: Login as admin
rediacc-cli login \
  --email admin@company.com \
  --password adminpass123

# Step 3: Create team members
rediacc-cli create user user1@company.com \
  --password userpass123

# Step 4: Activate the user
rediacc-cli user activate user1@company.com

# Step 5: Users can now login
rediacc-cli login \
  --email user1@company.com \
  --password userpass123
```

### For Existing Users

```bash
# Login
rediacc-cli login --email your@email.com --password yourpassword

# Work with CLI
rediacc-cli list teams
rediacc-cli list users
rediacc-cli list regions

# Create resources
rediacc-cli create team "Development"
rediacc-cli create region "US-East"

# Logout when done
rediacc-cli logout
```

## Security Features

### Session Management
- **Token Chain**: Each request receives a new token for the next request
- **Secure Storage**: Credentials stored in `~/.rediacc/config.json`
- **Automatic Update**: Tokens are automatically updated after each API call
- **Session Expiration**: Configure token expiration with --expiration flag

### Password Security
- **Hash Protection**: Passwords are SHA-256 hashed with 0x prefix before transmission
- **Secure Headers**: Authentication uses Rediacc-UserEmail and Rediacc-UserHash headers
- **Token Authentication**: API operations use Rediacc-RequestToken header
- **No Plain Text**: Passwords never transmitted or stored in plain text

### Permission Control
- **Role-Based Access**: Users assigned to permission groups
- **Company Isolation**: Users can only access their company's resources
- **Team Membership**: Access controlled through team participation

## Configuration

### Authentication Settings

Authentication configuration is automatically managed:

```bash
# Configuration is stored on login
rediacc-cli login --email user@example.com

# View stored configuration
cat ~/.rediacc/config.json

# Configuration is cleared on logout
rediacc-cli logout
```

### Server Settings

```bash
# Set server URL via environment variable
export REDIACC_API_URL="https://your-server.com"

# Set middleware port
export SYSTEM_MIDDLEWARE_PORT="8080"
```

## Error Handling

### Common Authentication Errors

**Invalid Credentials:**
```
Error: Login failed: API Error: User with email user@example.com not found, not activated, or has invalid permissions.
```

**Session Expired:**
```
Error: Not authenticated. Please login first.
```

**Invalid Token:**
```
Error: API Error: Invalid request credential or verification data.
```

**User Not Found:**
```
Error: API Error: User with email user@example.com not found.
```

### Troubleshooting

```bash
# Check server connectivity
echo $REDIACC_API_URL

# Verify configuration exists
ls -la ~/.rediacc/config.json

# Re-login if session expired
rediacc-cli logout
rediacc-cli login --email your@email.com

# Use JSON output for debugging
rediacc-cli list users --output json

# Check middleware connectivity
curl -X POST $REDIACC_API_URL/api/StoredProcedure/GetCompanyUsers
```

## Best Practices

### Security
- Use strong passwords (12+ characters, mixed case, numbers, symbols)
- Logout when finished working
- Don't share credentials or session tokens
- Regularly rotate passwords

### Automation
- Use environment variables for server configuration
- Store credentials securely in CI/CD systems
- Use service accounts for automated scripts
- Implement proper error handling

### Team Management
- Create users with appropriate permission levels
- Use descriptive email addresses
- Document user roles and responsibilities
- Regularly audit user access

## Examples

### Complete User Onboarding

```bash
# Admin creates new user
rediacc-cli create user newbie@company.com \
  --password temp123

# Admin activates user
rediacc-cli user activate newbie@company.com

# New user can now login
rediacc-cli login \
  --email newbie@company.com \
  --password temp123

# User changes their own password
rediacc-cli user update-password --new-password newsecurepass123

# User enables 2FA
rediacc-cli user update-2fa 1 --password newsecurepass123
```

### Batch User Operations

```bash
# List all users and save to file
rediacc-cli list users --output json > users.json

# Parse JSON output with jq
rediacc-cli list users --output json | jq '.data[] | select(.activated == false)'

# Activate multiple users (bash script)
for email in user1@company.com user2@company.com; do
  rediacc-cli user activate $email
done

# Create multiple users from file
while IFS=, read -r email password; do
  rediacc-cli create user "$email" --password "$password"
done < users.csv
```