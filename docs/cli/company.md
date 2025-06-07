# Company Management

Company management commands handle company creation, configuration, and administration. These commands are essential for setting up and managing your Rediacc organization.

## Overview

Company operations include:
- **Company Creation**: Initial setup with admin user
- **Company Information**: View dashboard and subscription details
- **Subscription Management**: View plans and resource limits
- **Vault Operations**: Secure company-wide configuration storage
- **Data Graph**: Access company resource relationships

## Company Operations

### Create Company

Create a new company with admin user (first-time setup):

```bash
# Create company with basic plan
rediacc-cli create company "Your Company Name" \
  --email admin@yourcompany.com \
  --password securepassword123

# Create with specific subscription plan
rediacc-cli create company "Enterprise Corp" \
  --email admin@enterprise.com \
  --password adminpass123 \
  --plan PREMIUM

# Create with custom activation code
rediacc-cli create company "Startup Inc" \
  --email founder@startup.com \
  --password founderpass \
  --activation-code "SPECIAL2024"
```

**Available Plans:**
- `COMMUNITY` - Free tier with basic features (default)
- `ADVANCED` - Enhanced features and limits
- `PREMIUM` - Professional features with priority support
- `ELITE` - Enterprise features with maximum resources

**What happens:**
1. Creates new company record
2. Creates admin user account  
3. Sets up default permissions
4. Initializes subscription plan
5. Returns success confirmation

**Success output:**
```
Successfully created company: Your Company Name
```

### View Company Dashboard

Get comprehensive company information including limits and usage:

```bash
# View dashboard information
rediacc-cli list resource-limits

# JSON output for parsing
rediacc-cli list resource-limits --output json
```

**Example output:**
```
Company Name    Plan        Max Teams  Max Regions  Max Machines  Max Storage  
-------------  ----------  ----------  -----------  ------------  -----------  
Your Company   COMMUNITY            3            2            10           50  
```

### View Subscription Information

Check current subscription details:

```bash
# View subscription info
rediacc-cli list subscription

# JSON format with full details
rediacc-cli list subscription --output json
```

**JSON output includes:**
```json
{
  "companyName": "Your Company",
  "subscriptionPlan": "COMMUNITY",
  "maxTeams": 3,
  "maxRegions": 2, 
  "maxMachines": 10,
  "maxStorage": 50,
  "currentTeams": 2,
  "currentRegions": 1,
  "currentMachines": 5,
  "currentStorage": 20
}
```

## Company Vault Management

### View Company Vault

Access company-wide configuration data:

```bash
# View company vault
rediacc-cli list company-vault

# JSON output
rediacc-cli list company-vault --output json
```

### Update Company Vault

Store company-wide configuration:

```bash
# Set company vault data interactively
rediacc-cli vault set company ""

# Set from file
rediacc-cli vault set company "" company-config.json

# Set from stdin
echo '{"billing_email": "billing@company.com"}' | rediacc-cli vault set company "" -
```

:::info Company Name Parameter
The company name parameter is ignored for vault updates - you can only update your own company's vault. Pass an empty string "" or any value.
:::

## Data Management

### Company Data Graph

View relationships between all company resources:

```bash
# Get company data graph
rediacc-cli list data-graph

# JSON format for visualization
rediacc-cli list data-graph --output json
```

**Data graph includes:**
- Teams and their resources
- Regions and bridges
- Machines and associations
- User memberships
- Resource dependencies

### Lookup Data

Get context-specific lookup data:

```bash
# Get all lookup data
rediacc-cli list lookup-data

# Get data for specific context
rediacc-cli list lookup-data --context machine_create
rediacc-cli list lookup-data --context queue_create
```

**Available contexts:**
- `machine_create` - Data for creating machines
- `queue_create` - Data for creating queue items
- `team_create` - Data for team creation
- `user_create` - Data for user creation

## User's Company Information

Users can check their company association:

```bash
# Get current user's company
rediacc-cli list user-company

# JSON output
rediacc-cli list user-company --output json
```

**Output:**
```
Company Name      
---------------  
Your Company     
```

## Subscription Management

### Subscription Plans

**Community Plan:**
- 3 teams maximum
- 2 regions maximum
- 10 machines maximum
- 50GB storage
- Basic support

**Advanced Plan:**
- 10 teams maximum
- 5 regions maximum
- 50 machines maximum
- 500GB storage
- Standard support

**Premium Plan:**
- 50 teams maximum
- 20 regions maximum
- 500 machines maximum
- 5TB storage
- Priority support
- Queue priorities 1-5

**Elite Plan:**
- Unlimited teams
- Unlimited regions
- Unlimited machines
- Unlimited storage
- 24/7 dedicated support
- All features enabled

### Check Resource Usage

Monitor resource consumption against limits:

```bash
#!/bin/bash
# Script to check resource usage

# Get current usage
DASHBOARD=$(rediacc-cli list resource-limits --output json | jq '.data[0]')

# Extract limits
MAX_TEAMS=$(echo $DASHBOARD | jq -r '.maxTeams')
MAX_MACHINES=$(echo $DASHBOARD | jq -r '.maxMachines')
MAX_STORAGE=$(echo $DASHBOARD | jq -r '.maxStorage')

# Get current counts
TEAMS=$(rediacc-cli list teams --output json | jq '.data | length')
REGIONS=$(rediacc-cli list regions --output json | jq '.data | length')

echo "Resource Usage Report"
echo "===================="
echo "Teams: $TEAMS / $MAX_TEAMS"
echo "Regions: $REGIONS / $(echo $DASHBOARD | jq -r '.maxRegions')"
echo "Machines: Used / $MAX_MACHINES"
echo "Storage: Used / ${MAX_STORAGE}GB"
```

## Company Setup Workflows

### Complete Company Setup

```bash
#!/bin/bash
# Complete company setup script

COMPANY_NAME="Tech Startup"
ADMIN_EMAIL="admin@techstartup.com"
ADMIN_PASS="SecureAdminPass123!"

# 1. Create company
echo "Creating company..."
rediacc-cli create company "$COMPANY_NAME" \
  --email "$ADMIN_EMAIL" \
  --password "$ADMIN_PASS" \
  --plan ADVANCED

# 2. Login as admin
echo "Logging in..."
rediacc-cli login --email "$ADMIN_EMAIL" --password "$ADMIN_PASS"

# 3. Set company vault
echo "Configuring company..."
rediacc-cli vault set company "" << EOF
{
  "billing_contact": "billing@techstartup.com",
  "technical_contact": "tech@techstartup.com",
  "timezone": "America/New_York",
  "industry": "Technology",
  "compliance": ["SOC2", "ISO27001"]
}
EOF

# 4. Create initial teams
echo "Creating teams..."
rediacc-cli create team "Engineering"
rediacc-cli create team "Operations"
rediacc-cli create team "Security"

# 5. Create initial users
echo "Creating users..."
for user in john@techstartup.com jane@techstartup.com; do
  rediacc-cli create user $user --password "TempPass123"
  rediacc-cli user activate $user
done

echo "Company setup complete!"
```

### Multi-Environment Setup

```bash
#!/bin/bash
# Set up multiple environments

# Create regions for different environments
ENVIRONMENTS=("Development" "Staging" "Production")

for env in "${ENVIRONMENTS[@]}"; do
  # Create region
  rediacc-cli create region "$env" \
    --vault "{\"environment\": \"$env\", \"criticality\": \"high\"}"
  
  # Create bridges
  rediacc-cli create bridge "$env" "${env,,}-bridge-1" \
    --vault "{\"location\": \"us-east-1\"}"
done

# Set up environment-specific teams
for env in "${ENVIRONMENTS[@]}"; do
  rediacc-cli create team "$env Team" \
    --vault "{\"environment\": \"$env\", \"access_level\": \"restricted\"}"
done
```

## Best Practices

### Initial Setup

1. **Strong Admin Password**: Use complex passwords for admin accounts
2. **Activation Codes**: Use custom activation codes for production
3. **Plan Selection**: Choose appropriate plan for expected usage
4. **Vault Configuration**: Store important company metadata

### Ongoing Management

1. **Regular Audits**: Review user access quarterly
2. **Monitor Limits**: Track resource usage vs. limits
3. **Vault Backups**: Export company vault regularly
4. **User Lifecycle**: Deactivate unused accounts

### Security Considerations

1. **Admin Access**: Limit admin account usage
2. **Activation Control**: Manage activation codes carefully
3. **Vault Encryption**: Sensitive data is auto-encrypted
4. **Access Logs**: Monitor company access patterns

## Troubleshooting

### Common Issues

**Company Already Exists:**
```
Error: API Error: Company with this name already exists
```
Solution: Choose a different company name or contact support.

**Invalid Activation Code:**
```
Error: API Error: Invalid activation code
```
Solution: Use the correct activation code or default (111111 for testing).

**Subscription Limit Reached:**
```
Error: API Error: Maximum teams/machines/storage reached for subscription
```
Solution: Upgrade your subscription plan or remove unused resources.

### Debug Commands

```bash
# Check if logged in and company
cat ~/.rediacc/config.json

# Verify company exists
rediacc-cli list user-company

# Check current limits
rediacc-cli list resource-limits --output json

# View subscription details
rediacc-cli list subscription --output json
```

## Migration and Backup

### Export Company Configuration

```bash
#!/bin/bash
# Export company configuration

DATE=$(date +%Y%m%d)
BACKUP_DIR="company-backup-$DATE"
mkdir -p $BACKUP_DIR

# Export company vault
rediacc-cli list company-vault --output json > $BACKUP_DIR/company-vault.json

# Export subscription info
rediacc-cli list subscription --output json > $BACKUP_DIR/subscription.json

# Export teams
rediacc-cli list teams --output json > $BACKUP_DIR/teams.json

# Export users
rediacc-cli list users --output json > $BACKUP_DIR/users.json

# Export regions and bridges
rediacc-cli list regions --output json > $BACKUP_DIR/regions.json

# Create backup archive
tar -czf company-backup-$DATE.tar.gz $BACKUP_DIR/
rm -rf $BACKUP_DIR

echo "Company backup created: company-backup-$DATE.tar.gz"
```

### Company Health Check

```bash
#!/bin/bash
# Company health check script

echo "=== Company Health Check ==="
echo

# Check authentication
if ! rediacc-cli list user-company >/dev/null 2>&1; then
  echo "❌ Not authenticated"
  exit 1
fi

# Get company info
COMPANY=$(rediacc-cli list user-company --output json | jq -r '.data[0].companyName')
echo "✅ Company: $COMPANY"

# Check subscription
PLAN=$(rediacc-cli list subscription --output json | jq -r '.data[0].subscriptionPlan')
echo "✅ Subscription: $PLAN"

# Check resource usage
LIMITS=$(rediacc-cli list resource-limits --output json | jq '.data[0]')
echo "✅ Resource Limits:"
echo "   Teams: $(rediacc-cli list teams --output json | jq '.data | length') / $(echo $LIMITS | jq -r '.maxTeams')"
echo "   Regions: $(rediacc-cli list regions --output json | jq '.data | length') / $(echo $LIMITS | jq -r '.maxRegions')"

# Check active users
USERS=$(rediacc-cli list users --output json | jq '.data | length')
ACTIVE=$(rediacc-cli list users --output json | jq '.data | map(select(.activated == true)) | length')
echo "✅ Users: $ACTIVE active / $USERS total"

echo
echo "Health check complete!"
```