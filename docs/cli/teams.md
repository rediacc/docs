# Teams Management

Teams are the core organizational unit in Rediacc for collaboration, resource management, and access control. This guide covers all team-related operations including creation, member management, and team configuration.

## Overview

Team operations include:
- **Team Management**: Create, delete, and configure teams
- **Member Management**: Add, remove, and manage team members
- **Access Control**: Team-based permissions and resource access
- **Vault Operations**: Secure team data storage

## Team Operations

### List Teams

View all teams in your company:

```bash
# List teams (table format)
rediacc teams list

# JSON output
rediacc teams list --output json
```

**Example output:**
```json
[
  {
    "teamName": "Development",
    "companyName": "YourCompany",
    "memberCount": 5,
    "machineCount": 12,
    "repoCount": 8,
    "scheduleCount": 15,
    "storageCount": 3,
    "isMember": 1,
    "vaultContent": "{}",
    "vaultVersion": 1
  },
  {
    "teamName": "Operations", 
    "companyName": "YourCompany",
    "memberCount": 3,
    "machineCount": 8,
    "repoCount": 4,
    "scheduleCount": 10,
    "storageCount": 2,
    "isMember": 0,
    "vaultContent": "{}",
    "vaultVersion": 1
  }
]
```

### Create Team

Create a new team:

```bash
# Create team
rediacc teams create "Development"

# Create team with description
rediacc teams create "QA Team" --description "Quality Assurance and Testing"
```

**Success output:**
```
✓ Team 'Development' created successfully
```

:::info Resource Limits
Team creation is subject to your subscription limits. If you exceed the limit, upgrade your subscription or contact support.
:::

### Delete Team

Delete an existing team:

```bash
# Delete team (requires confirmation)
rediacc teams delete "Old Team"

# Force delete without confirmation
rediacc teams delete "Old Team" --force
```

**Warning:** Deleting a team removes all associated resources, schedules, and configurations.

### Rename Team

Change a team's name:

```bash
# Rename team
rediacc teams rename "Old Name" "New Name"
```

## Member Management

### List Team Members

View all members of a team:

```bash
# List members
rediacc teams members list "Development"

# JSON output
rediacc teams members list "Development" --output json
```

**Example output:**
```json
[
  {
    "userEmail": "dev1@company.com",
    "userName": "John Developer",
    "role": "Member",
    "joinDate": "2024-01-15",
    "lastActive": "2024-03-10",
    "permissions": "Developer"
  },
  {
    "userEmail": "lead@company.com", 
    "userName": "Jane Lead",
    "role": "Team Lead",
    "joinDate": "2024-01-01",
    "lastActive": "2024-03-11",
    "permissions": "Team Admin"
  }
]
```

### Add Team Member

Add a user to a team:

```bash
# Add member to team
rediacc teams members add "Development" "newdev@company.com"

# Add with specific role
rediacc teams members add "Development" "senior@company.com" --role "Team Lead"
```

**Requirements:**
- User must exist in the company
- User must be activated
- You must have permission to manage the team

### Remove Team Member

Remove a user from a team:

```bash
# Remove member
rediacc teams members remove "Development" "olddev@company.com"

# Force removal without confirmation
rediacc teams members remove "Development" "olddev@company.com" --force
```

### Update Member Role

Change a member's role in the team:

```bash
# Update member role
rediacc teams members role "Development" "dev@company.com" "Team Lead"

# Remove elevated role (back to member)
rediacc teams members role "Development" "dev@company.com" "Member"
```

## Team Configuration

### Team Information

Get detailed information about a team:

```bash
# View team details
rediacc teams info "Development"

# JSON output
rediacc teams info "Development" --output json
```

### Team Settings

Configure team settings:

```bash
# View team settings
rediacc teams settings "Development"

# Update team description
rediacc teams settings "Development" set description "Full-stack development team"

# Set team defaults
rediacc teams settings "Development" set default_region "us-east-1"
rediacc teams settings "Development" set backup_retention "30d"
```

## Vault Operations

Teams have secure vaults for storing encrypted configuration data.

### View Team Vault

```bash
# View vault contents
rediacc teams vault get "Development"

# JSON output
rediacc teams vault get "Development" --output json
```

**Example vault structure:**
```json
{
  "environment": {
    "staging_url": "https://staging.company.com",
    "production_url": "https://app.company.com"
  },
  "credentials": {
    "database_config": "encrypted_data_here",
    "api_keys": "encrypted_keys_here"
  },
  "settings": {
    "deployment_branch": "main",
    "auto_deploy": true
  }
}
```

### Update Team Vault

```bash
# Interactive vault update
rediacc teams vault update "Development"

# Update from file
rediacc teams vault update "Development" --file vault-config.json

# Update specific key
rediacc teams vault set "Development" "environment.staging_url" "https://new-staging.com"
```

## Team Workflows

### Complete Team Setup

```bash
# 1. Create team
rediacc teams create "Data Science"

# 2. Add team members
rediacc teams members add "Data Science" "scientist1@company.com"
rediacc teams members add "Data Science" "scientist2@company.com"
rediacc teams members add "Data Science" "lead@company.com" --role "Team Lead"

# 3. Configure team settings
rediacc teams settings "Data Science" set description "ML and data analytics team"
rediacc teams settings "Data Science" set default_region "us-west-2"

# 4. Set up team vault
rediacc teams vault set "Data Science" "ml_models.storage" "s3://ml-models-bucket"
rediacc teams vault set "Data Science" "jupyter.url" "https://jupyter.company.com"

# 5. Verify setup
rediacc teams info "Data Science"
rediacc teams members list "Data Science"
```

### Team Migration

```bash
# Export team configuration
rediacc teams info "Development" --output json > team-config.json
rediacc teams members list "Development" --output json > team-members.json
rediacc teams vault get "Development" --output json > team-vault.json

# Create new team with same configuration
rediacc teams create "Development-New"

# Restore members (script)
cat team-members.json | jq -r '.[].userEmail' | while read email; do
  rediacc teams members add "Development-New" "$email"
done

# Restore vault
rediacc teams vault update "Development-New" --file team-vault.json
```

## Access Control

### Team Permissions

Teams control access to resources:

- **Team Members**: Can view team resources and participate in operations
- **Team Leads**: Can manage team members and modify team settings
- **Team Admins**: Full control over team configuration and resources

### Resource Access

Teams provide access to:
- **Machines**: Infrastructure resources assigned to the team
- **Repositories**: Code repositories and backup targets
- **Schedules**: Automated backup and maintenance schedules
- **Storage**: Team-specific storage allocations

### Permission Examples

```bash
# Check your team memberships
rediacc teams list | grep '"isMember": 1'

# View teams you can manage
rediacc teams list --role admin

# Check specific team permissions
rediacc teams permissions "Development"
```

## Monitoring and Reporting

### Team Usage

```bash
# View team resource usage
rediacc teams usage "Development"

# Historical usage data
rediacc teams usage "Development" --period "30d"
```

### Team Activity

```bash
# Recent team activity
rediacc teams activity "Development"

# Member activity
rediacc teams activity "Development" --member "dev@company.com"
```

### Team Reports

```bash
# Generate team report
rediacc teams report "Development" --format pdf --output team-report.pdf

# Weekly summary
rediacc teams report "Development" --period "7d" --format email
```

## Automation Examples

### Team Provisioning Script

```bash
#!/bin/bash
# Automated team provisioning

TEAM_NAME="$1"
TEAM_LEAD="$2"
MEMBERS="$3"  # Comma-separated list

# Create team
rediacc teams create "$TEAM_NAME"

# Add team lead
rediacc teams members add "$TEAM_NAME" "$TEAM_LEAD" --role "Team Lead"

# Add members
IFS=',' read -ra MEMBER_LIST <<< "$MEMBERS"
for member in "${MEMBER_LIST[@]}"; do
  rediacc teams members add "$TEAM_NAME" "$member"
done

# Set default configuration
rediacc teams settings "$TEAM_NAME" set backup_retention "30d"
rediacc teams settings "$TEAM_NAME" set default_region "us-east-1"

echo "Team '$TEAM_NAME' provisioned successfully"
```

### Team Cleanup Script

```bash
#!/bin/bash
# Remove inactive team members

TEAM_NAME="$1"
DAYS_INACTIVE="$2"

# Get members inactive for specified days
INACTIVE_MEMBERS=$(rediacc teams members list "$TEAM_NAME" --output json | \
  jq -r --arg days "$DAYS_INACTIVE" \
  '.[] | select(.lastActive < (now - ($days | tonumber) * 86400)) | .userEmail')

# Remove inactive members
for member in $INACTIVE_MEMBERS; do
  echo "Removing inactive member: $member"
  rediacc teams members remove "$TEAM_NAME" "$member" --force
done
```

## Error Handling

### Common Errors

**Team Not Found:**
```
Error: failed to get team info: API error: Team 'NonExistent' not found in your company
```

**Permission Denied:**
```
Error: failed to add member: API error: Insufficient permissions to manage team 'Development'
```

**Resource Limits:**
```
Error: failed to create team: API error: Resource limit exceeded for teams. Please upgrade your subscription
```

**User Already Member:**
```
Error: failed to add member: API error: User 'user@company.com' is already a member of team 'Development'
```

### Troubleshooting

```bash
# Check team existence
rediacc teams list | grep "TeamName"

# Verify your team permissions
rediacc teams list --show-roles

# Check user status
rediacc auth user info user@company.com

# Debug mode
rediacc --debug teams members add "Development" "user@company.com"
```

## Best Practices

### Organization
- Use descriptive team names
- Align teams with organizational structure
- Document team purposes and responsibilities
- Regular review of team membership

### Security
- Limit team lead permissions appropriately
- Regular audit of team access
- Use team vaults for sensitive data
- Monitor team activity logs

### Resource Management
- Monitor team resource usage
- Set appropriate team quotas
- Regular cleanup of unused teams
- Document team resource allocations

### Collaboration
- Clear team member roles
- Regular team member reviews
- Use team vaults for shared configuration
- Maintain team documentation