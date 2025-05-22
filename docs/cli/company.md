# Company Management

Company management commands handle company creation, configuration, and administration. These commands are essential for setting up and managing your Rediacc organization.

## Overview

Company operations include:
- **Company Creation**: Initial setup with admin user
- **Company Information**: View settings and details
- **User Management**: Company-wide user operations
- **Subscription Management**: Plan and limits information
- **Vault Operations**: Secure company data storage

## Company Operations

### Create Company

Create a new company with admin user (first-time setup):

```bash
# Create company with admin user
rediacc company create \
  --name "Your Company Name" \
  --admin-email admin@yourcompany.com \
  --admin-password securepassword123
```

**What happens:**
1. Creates new company record
2. Creates admin user account
3. Automatically activates admin user
4. Sets up default team and permissions
5. Assigns Community subscription plan

**Success output:**
```
✓ Company 'Your Company Name' created successfully
✓ Admin user 'admin@yourcompany.com' activated
```

### Company Information

View detailed company information:

```bash
# View company details
rediacc company info

# JSON output for scripting
rediacc company info --output json
```

**Example output:**
```json
{
  "companyName": "Your Company Name",
  "adminUser": "admin@yourcompany.com",
  "totalUsers": 5,
  "totalTeams": 3,
  "subscriptionPlan": "Community",
  "vaultContent": "{}",
  "vaultVersion": 1
}
```

## User Management

### List Company Users

View all users in your company:

```bash
# List all company users
rediacc company users list

# JSON format
rediacc company users list --output json
```

**Example output:**
```json
[
  {
    "userEmail": "admin@company.com",
    "activated": true,
    "permissionsName": "Administrators", 
    "teamCount": 2,
    "joinDate": "2024-01-15"
  },
  {
    "userEmail": "user@company.com",
    "activated": true,
    "permissionsName": "Users",
    "teamCount": 1,
    "joinDate": "2024-01-20"
  }
]
```

### User Limits

View user limits for your subscription:

```bash
# Check user limits
rediacc company limits users
```

**Example output:**
```
User Limits:
  Current Users: 5
  Maximum Users: 10
  Subscription: Professional
  Upgrade Available: Yes
```

## Vault Operations

Company vaults store encrypted configuration and sensitive data.

### View Vault

```bash
# View company vault contents
rediacc company vault get

# JSON format
rediacc company vault get --output json
```

### Update Vault

```bash
# Update vault data (interactive editor)
rediacc company vault update

# Update from file
rediacc company vault update --file vault-config.json
```

**Example vault structure:**
```json
{
  "settings": {
    "backup_retention": "30d",
    "default_region": "us-east-1"
  },
  "integrations": {
    "slack_webhook": "https://hooks.slack.com/...",
    "email_notifications": true
  }
}
```

## Subscription Management

### View Subscription

```bash
# View current subscription details
rediacc company subscription

# JSON output
rediacc company subscription --output json
```

**Example output:**
```json
{
  "planName": "Professional",
  "status": "Active",
  "startDate": "2024-01-01",
  "endDate": "2025-01-01",
  "limits": {
    "users": 50,
    "teams": 10,
    "storage": "1TB",
    "machines": 100
  },
  "features": [
    "Advanced Security",
    "Priority Support",
    "API Access"
  ]
}
```

### Upgrade Subscription

```bash
# View available plans
rediacc company subscription plans

# Upgrade to new plan
rediacc company subscription upgrade --plan enterprise
```

## Administrative Tasks

### Company Settings

```bash
# View company settings
rediacc company settings

# Update company name
rediacc company settings set name "New Company Name"

# Update default settings
rediacc company settings set default_region "us-west-2"
```

### Audit Logs

```bash
# View company audit logs
rediacc company audit

# Filter by date
rediacc company audit --since "2024-01-01"

# Filter by user
rediacc company audit --user admin@company.com
```

## Multi-Company Scenarios

### Switch Companies

If you have access to multiple companies:

```bash
# List accessible companies
rediacc company list

# Switch to different company
rediacc company switch "Other Company Name"

# View current company context
rediacc company current
```

## Configuration Examples

### Complete Company Setup

```bash
# 1. Create company
rediacc company create \
  --name "Acme Corporation" \
  --admin-email admin@acme.com \
  --admin-password securepass123

# 2. Login as admin
rediacc auth login \
  --email admin@acme.com \
  --password securepass123

# 3. Configure company settings
rediacc company settings set default_region "us-east-1"
rediacc company settings set backup_retention "90d"

# 4. Create teams
rediacc teams create "Development"
rediacc teams create "Operations"

# 5. Add users
rediacc auth user create \
  --email dev1@acme.com \
  --password userpass123

rediacc auth user create \
  --email ops1@acme.com \
  --password userpass123

# 6. Add users to teams
rediacc teams members add "Development" "dev1@acme.com"
rediacc teams members add "Operations" "ops1@acme.com"
```

### Backup Company Configuration

```bash
# Export company configuration
rediacc company info --output json > company-config.json
rediacc company vault get --output json > company-vault.json
rediacc company users list --output json > company-users.json
rediacc teams list --output json > company-teams.json

# Create backup archive
tar -czf company-backup-$(date +%Y%m%d).tar.gz \
  company-config.json \
  company-vault.json \
  company-users.json \
  company-teams.json
```

## Error Handling

### Common Errors

**Company Already Exists:**
```
Error: failed to create company: API error: Company with name 'Your Company' already exists
```

**Permission Denied:**
```
Error: failed to access company info: API error: Insufficient permissions
```

**Subscription Limits:**
```
Error: failed to create user: API error: Resource limit exceeded for users. Please upgrade your subscription
```

### Troubleshooting

```bash
# Check authentication
rediacc auth status

# Verify company access
rediacc company info

# Check subscription limits
rediacc company limits

# Debug mode
rediacc --debug company info
```

## Best Practices

### Security
- Use strong admin passwords
- Regularly audit user access
- Monitor subscription usage
- Backup vault data regularly

### Organization
- Use descriptive company names
- Document company settings
- Maintain user documentation
- Regular cleanup of inactive users

### Automation
- Script company setup processes
- Automate user provisioning
- Monitor subscription limits
- Regular configuration backups

## Integration Examples

### CI/CD Pipeline Setup

```bash
#!/bin/bash
# Company setup script for CI/CD

# Set server and authenticate
rediacc config set server.url "$REDIACC_SERVER"
rediacc auth login --email "$ADMIN_EMAIL" --password "$ADMIN_PASSWORD"

# Verify company setup
if ! rediacc company info >/dev/null 2>&1; then
  echo "Creating company..."
  rediacc company create \
    --name "$COMPANY_NAME" \
    --admin-email "$ADMIN_EMAIL" \
    --admin-password "$ADMIN_PASSWORD"
fi

# Configure settings
rediacc company settings set default_region "$DEFAULT_REGION"
rediacc company vault update --file "$VAULT_CONFIG_FILE"

echo "Company setup complete"
```

### Monitoring Script

```bash
#!/bin/bash
# Monitor company resource usage

# Get current usage
USERS=$(rediacc company users list --output json | jq length)
TEAMS=$(rediacc teams list --output json | jq length)

# Get limits
LIMITS=$(rediacc company subscription --output json)
MAX_USERS=$(echo "$LIMITS" | jq -r '.limits.users')
MAX_TEAMS=$(echo "$LIMITS" | jq -r '.limits.teams')

# Check thresholds
if [ "$USERS" -gt $((MAX_USERS * 80 / 100)) ]; then
  echo "WARNING: User limit 80% reached ($USERS/$MAX_USERS)"
fi

if [ "$TEAMS" -gt $((MAX_TEAMS * 80 / 100)) ]; then
  echo "WARNING: Team limit 80% reached ($TEAMS/$MAX_TEAMS)"
fi
```