# Getting Started Tutorial

This step-by-step tutorial will guide you through setting up and using the Rediacc CLI for the first time. By the end, you'll have a working Rediacc environment with teams, users, and basic automation.

## Prerequisites

- Rediacc CLI installed ([Installation Guide](./installation.md))
- Access to a Rediacc server
- Basic command-line knowledge

## Step 1: Initial Configuration

### Configure Server Connection

First, set up your connection to the Rediacc server:

```bash
# Set your Rediacc server URL
rediacc config set server.url "https://your-rediacc-server.com"

# Verify the configuration
rediacc config get server.url
```

### Test Connectivity

```bash
# Test server connection
rediacc auth status
```

You should see: `Status: Not logged in` (which confirms connectivity).

## Step 2: Company Setup (First Time Only)

If you're setting up a new Rediacc instance, create your company:

```bash
# Create your company with admin user
rediacc company create \
  --name "Acme Corporation" \
  --admin-email admin@acme.com \
  --admin-password SecureAdmin123!

# Expected output:
# ✓ Company 'Acme Corporation' created successfully
# ✓ Admin user 'admin@acme.com' activated
```

:::info Skip This Step
If your company already exists, skip to Step 3 and login with your existing credentials.
:::

## Step 3: Authentication

### Login

```bash
# Login with your admin credentials
rediacc auth login \
  --email admin@acme.com \
  --password SecureAdmin123!

# Expected output:
# Logging in as admin@acme.com...
# ✓ Successfully logged in as admin@acme.com
```

### Verify Login

```bash
# Check authentication status
rediacc auth status

# Expected output:
# Status: Logged in as admin@acme.com
# Server: https://your-rediacc-server.com
# Session: Active
# Request Credential: abc123...
```

## Step 4: Company Overview

### View Company Information

```bash
# Get company details
rediacc company info --output json
```

**Example output:**
```json
{
  "companyName": "Acme Corporation",
  "adminUser": "admin@acme.com", 
  "totalUsers": 1,
  "totalTeams": 1,
  "subscriptionPlan": "Community"
}
```

### List Current Users and Teams

```bash
# List company users
rediacc auth user list

# List teams
rediacc teams list
```

You should see your admin user and a "Default Team".

## Step 5: Create Teams

### Create Development Team

```bash
# Create development team
rediacc teams create "Development"

# Expected output:
# ✓ Team 'Development' created successfully
```

### Create Operations Team

```bash
# Create operations team  
rediacc teams create "Operations"

# Expected output:
# ✓ Team 'Operations' created successfully
```

### Verify Teams

```bash
# List all teams
rediacc teams list --output json
```

You should now see three teams: "Default Team", "Development", and "Operations".

## Step 6: User Management

### Create Team Members

```bash
# Create development team member
rediacc auth user create \
  --email developer@acme.com \
  --password DevPass123!

# Note: You'll be prompted for admin password for security
# Enter: SecureAdmin123!

# Create operations team member
rediacc auth user create \
  --email operator@acme.com \
  --password OpsPass123!
```

### Add Users to Teams

```bash
# Add developer to Development team
rediacc teams members add "Development" "developer@acme.com"

# Add operator to Operations team
rediacc teams members add "Operations" "operator@acme.com"

# Add admin to both teams
rediacc teams members add "Development" "admin@acme.com"
rediacc teams members add "Operations" "admin@acme.com"
```

### Verify Team Membership

```bash
# Check Development team members
rediacc teams members list "Development"

# Check Operations team members
rediacc teams members list "Operations"
```

## Step 7: Infrastructure Setup

### Create Regions

```bash
# Create primary region
rediacc infra regions create "primary" \
  --display-name "Primary Data Center" \
  --location "Virginia, USA"

# Create secondary region
rediacc infra regions create "secondary" \
  --display-name "Secondary Data Center" \
  --location "Oregon, USA"
```

### Create Bridges

```bash
# Create bridge in primary region
rediacc infra bridges create "bridge-primary" \
  --region "primary" \
  --endpoint "bridge1.acme.com"

# Create bridge in secondary region
rediacc infra bridges create "bridge-secondary" \
  --region "secondary" \
  --endpoint "bridge2.acme.com"
```

### Create Test Machines

```bash
# Create development machine
rediacc infra machines create "dev-web-1" \
  --team "Development" \
  --bridge "bridge-primary" \
  --ip "10.0.1.100"

# Create production machine
rediacc infra machines create "prod-web-1" \
  --team "Operations" \
  --bridge "bridge-primary" \
  --ip "10.0.1.200"
```

## Step 8: Basic Job Setup

### Create Repositories

```bash
# Create development backup repository
rediacc jobs repos create "dev-backup" \
  --type "local" \
  --path "/backup/dev" \
  --team "Development"

# Create production backup repository
rediacc jobs repos create "prod-backup" \
  --type "local" \
  --path "/backup/prod" \
  --team "Operations"
```

### Create Backup Jobs

```bash
# Create development backup job
rediacc jobs create backup \
  --name "dev-daily-backup" \
  --machine "dev-web-1" \
  --repository "dev-backup" \
  --schedule "0 2 * * *"

# Create production backup job
rediacc jobs create backup \
  --name "prod-daily-backup" \
  --machine "prod-web-1" \
  --repository "prod-backup" \
  --schedule "0 1 * * *"
```

## Step 9: Test Different User Perspectives

### Test as Developer

```bash
# Logout as admin
rediacc auth logout

# Login as developer
rediacc auth login \
  --email developer@acme.com \
  --password DevPass123!

# Check what developer can see
rediacc teams list
rediacc infra machines list
rediacc jobs list

# Logout developer
rediacc auth logout
```

### Test as Operator

```bash
# Login as operator
rediacc auth login \
  --email operator@acme.com \
  --password OpsPass123!

# Check operator access
rediacc teams list
rediacc infra machines list
rediacc jobs list

# Logout operator
rediacc auth logout
```

### Return to Admin

```bash
# Login back as admin
rediacc auth login \
  --email admin@acme.com \
  --password SecureAdmin123!
```

## Step 10: Configuration and Preferences

### Set Output Preferences

```bash
# Set default output format
rediacc config set format.default "table"

# Enable colors
rediacc config set format.colors true

# Test different formats
rediacc teams list
rediacc teams list --output json
rediacc teams list --output yaml
```

### Configure Job Defaults

```bash
# Set default SSH timeout
rediacc config set jobs.ssh_timeout "60s"

# Set default datastore size
rediacc config set jobs.default_datastore_size "100G"

# View all configuration
rediacc config list
```

## Step 11: Monitoring and Maintenance

### Check System Status

```bash
# Check infrastructure health
rediacc infra health

# Check job queue
rediacc queue list

# View recent activity
rediacc jobs monitor
```

### Basic Troubleshooting

```bash
# Test connectivity
rediacc config test-connection

# Verify authentication
rediacc auth status

# Check permissions
rediacc permissions user "admin@acme.com"
```

## Next Steps

Congratulations! You now have a basic Rediacc environment set up. Here are some next steps to explore:

### Learn More Features

1. **[Teams Management](./teams.md)** - Deep dive into team collaboration
2. **[Jobs Management](./jobs.md)** - Advanced backup and automation
3. **[Infrastructure](./infrastructure.md)** - Scale your infrastructure
4. **[Permissions](./permissions.md)** - Fine-tune access control

### Production Readiness

1. **Security Hardening**:
   ```bash
   # Use strong passwords
   # Configure SSL certificates
   # Set up proper firewall rules
   # Enable audit logging
   ```

2. **Backup Strategy**:
   ```bash
   # Configure offsite backups
   # Set up retention policies
   # Test restore procedures
   # Monitor backup health
   ```

3. **Monitoring Setup**:
   ```bash
   # Set up alerting
   # Configure log aggregation
   # Monitor resource usage
   # Create dashboards
   ```

### Automation Scripts

Create scripts to automate common tasks:

```bash
#!/bin/bash
# daily-checks.sh - Daily system health check

echo "=== Daily Rediacc Health Check ==="

# Check authentication
if ! rediacc auth status | grep -q "Logged in"; then
  echo "ERROR: Not authenticated"
  exit 1
fi

# Check infrastructure health
echo "Checking infrastructure health..."
rediacc infra health

# Check job status
echo "Checking recent jobs..."
rediacc jobs list --status "failed" --period "24h"

# Check resource usage
echo "Checking resource usage..."
rediacc infra usage

echo "=== Health check complete ==="
```

### Community and Support

- **Documentation**: Explore all CLI documentation sections
- **GitHub**: Report issues and contribute improvements
- **Community**: Join the Rediacc community forums
- **Support**: Contact support for enterprise assistance

## Troubleshooting Common Issues

### Connection Problems

```bash
# Check server URL
rediacc config get server.url

# Test connectivity
curl -v https://your-rediacc-server.com

# Check DNS resolution
nslookup your-rediacc-server.com
```

### Authentication Issues

```bash
# Clear credentials and re-login
rediacc auth logout
rediacc auth login --email your@email.com

# Check user status
rediacc auth user info your@email.com

# Verify company membership
rediacc company info
```

### Permission Errors

```bash
# Check your permissions
rediacc permissions user your@email.com

# Check team membership
rediacc teams list | grep "isMember.*1"

# Contact admin for access
```

This tutorial provides a solid foundation for using the Rediacc CLI. Continue exploring the documentation to unlock the full potential of your Rediacc deployment!