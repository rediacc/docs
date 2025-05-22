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
# Interactive login
rediacc auth login --email user@example.com --password mypassword

# Check login status
rediacc auth status
```

**Response:**
```
Status: Logged in as user@example.com
Server: https://your-server.com
Session: Active
Request Credential: abc123...
```

### Logout

```bash
# Logout current session
rediacc auth logout
```

### Check Status

```bash
# View current authentication status
rediacc auth status
```

**Possible outputs:**
- `Status: Not logged in`
- `Status: Logged in as user@example.com`

## User Management

### List Users

List all users in your company:

```bash
# List users (table format)
rediacc auth user list

# List users (JSON format)
rediacc auth user list --output json
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
# Create user
rediacc auth user create \
  --email newuser@company.com \
  --password securepassword123
```

:::info Admin Password Required
When creating users, you'll be prompted to enter your admin password for security verification.
:::

### User Information

Get detailed information about a user:

```bash
# Get user details
rediacc auth user info user@company.com
```

### Activate User

Activate a user account:

```bash
# Activate user
rediacc auth user activate user@company.com
```

### Deactivate User

Deactivate a user account:

```bash
# Deactivate user
rediacc auth user deactivate user@company.com
```

### Update Password

Change a user's password:

```bash
# Update user password
rediacc auth user update-password user@company.com
```

## Authentication Workflow

### For New Installations

1. **Create Company**: First-time setup creates company and admin user
2. **Login**: Use admin credentials to access the system
3. **Create Users**: Add team members and assign permissions
4. **Activate Users**: Enable user accounts for login

```bash
# Step 1: Create company (first time only)
rediacc company create \
  --name "Your Company" \
  --admin-email admin@company.com \
  --admin-password adminpass123

# Step 2: Login as admin
rediacc auth login \
  --email admin@company.com \
  --password adminpass123

# Step 3: Create team members
rediacc auth user create \
  --email user1@company.com \
  --password userpass123

# Step 4: Users can now login
rediacc auth login \
  --email user1@company.com \
  --password userpass123
```

### For Existing Users

```bash
# Login
rediacc auth login --email your@email.com --password yourpassword

# Work with CLI
rediacc teams list
rediacc company info

# Logout when done
rediacc auth logout
```

## Security Features

### Session Management
- **Automatic Refresh**: Sessions are automatically refreshed during use
- **Secure Storage**: Credentials stored securely in config file
- **Timeout Handling**: Sessions expire after inactivity

### Password Security
- **Hash Protection**: Passwords are SHA-256 hashed before transmission
- **Secure Headers**: Authentication uses secure HTTP headers
- **Admin Verification**: Sensitive operations require admin password confirmation

### Permission Control
- **Role-Based Access**: Users assigned to permission groups
- **Company Isolation**: Users can only access their company's resources
- **Team Membership**: Access controlled through team participation

## Configuration

### Authentication Settings

```bash
# View auth configuration
rediacc config get auth

# Clear stored credentials
rediacc config set auth.email ""
rediacc config set auth.session_token ""
```

### Server Settings

```bash
# Set server URL
rediacc config set server.url "https://your-server.com"

# Set timeout
rediacc config set server.timeout "60s"
```

## Error Handling

### Common Authentication Errors

**Invalid Credentials:**
```
Error: login failed: API error: User with email user@example.com not found, not activated, or has invalid permissions.
```

**Session Expired:**
```
Error: API error: Invalid request credential or verification data.
```

**User Not Activated:**
```
Error: API error: User with email user@example.com not found, not activated, or has invalid permissions.
```

### Troubleshooting

```bash
# Check server connectivity
rediacc config get server.url

# Verify user status
rediacc auth status

# Re-login if session expired
rediacc auth logout
rediacc auth login --email your@email.com

# Debug mode for detailed errors
rediacc --debug auth login --email your@email.com
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
rediacc auth user create \
  --email newbie@company.com \
  --password temp123

# Admin activates user
rediacc auth user activate newbie@company.com

# New user can now login
rediacc auth login \
  --email newbie@company.com \
  --password temp123

# User changes password
rediacc auth user update-password newbie@company.com
```

### Batch User Operations

```bash
# List all users and save to file
rediacc auth user list --output json > users.json

# Check activation status
rediacc auth user list | grep -v "activated.*true"

# Activate multiple users (bash script)
for email in user1@company.com user2@company.com; do
  rediacc auth user activate $email
done
```