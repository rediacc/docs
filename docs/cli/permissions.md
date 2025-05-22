# Permissions Management

Permissions in Rediacc control access to resources and operations through a role-based system. This guide covers permission groups, user assignments, and access control management.

## Overview

Permission system includes:
- **Permission Groups**: Named collections of permissions
- **User Assignment**: Assigning users to permission groups
- **Resource Access**: Controlling access to teams, machines, and operations
- **Administrative Control**: Managing the permission system itself

## Permission Groups

### List Permission Groups

```bash
# List all permission groups
rediacc permissions groups list

# JSON output
rediacc permissions groups list --output json
```

**Example output:**
```json
[
  {
    "groupName": "Administrators",
    "description": "Full system access",
    "userCount": 3,
    "permissions": [
      "user.create",
      "user.delete", 
      "team.create",
      "team.delete",
      "machine.manage",
      "system.admin"
    ]
  },
  {
    "groupName": "Team Leads",
    "description": "Team management permissions",
    "userCount": 8,
    "permissions": [
      "team.manage",
      "user.invite",
      "machine.view",
      "job.manage"
    ]
  }
]
```

### Create Permission Group

```bash
# Create new permission group
rediacc permissions groups create "Developers" \
  --description "Development team permissions"

# Create with initial permissions
rediacc permissions groups create "Backup Operators" \
  --description "Backup operation permissions" \
  --permissions "job.create,job.manage,repo.access"
```

### Permission Group Information

```bash
# Get group details
rediacc permissions groups info "Developers"

# List group members
rediacc permissions groups members "Developers"

# View group permissions
rediacc permissions groups permissions "Developers"
```

### Update Permission Group

```bash
# Update group description
rediacc permissions groups update "Developers" \
  --description "Full-stack development team"

# Rename permission group
rediacc permissions groups rename "Old Name" "New Name"
```

### Delete Permission Group

```bash
# Delete permission group
rediacc permissions groups delete "Unused Group"

# Force delete (removes user assignments)
rediacc permissions groups delete "Old Group" --force
```

## Permission Management

### Add Permissions to Group

```bash
# Add single permission
rediacc permissions add "Developers" "machine.create"

# Add multiple permissions
rediacc permissions add "Developers" \
  "machine.create,machine.delete,repo.create"

# Add all permissions from category
rediacc permissions add "Administrators" "system.*"
```

### Remove Permissions from Group

```bash
# Remove single permission
rediacc permissions remove "Developers" "machine.delete"

# Remove multiple permissions
rediacc permissions remove "Developers" \
  "machine.delete,repo.delete"

# Remove all permissions from category
rediacc permissions remove "Limited Users" "admin.*"
```

### List Available Permissions

```bash
# List all available permissions
rediacc permissions list

# Filter by category
rediacc permissions list --category "machine"
rediacc permissions list --category "team"

# Search permissions
rediacc permissions list --search "backup"
```

**Permission Categories:**
- `user.*` - User management
- `team.*` - Team operations
- `machine.*` - Machine management
- `job.*` - Job operations
- `repo.*` - Repository access
- `system.*` - System administration

## User Assignment

### Assign User to Group

```bash
# Assign user to permission group
rediacc permissions assign "user@company.com" "Developers"

# Assign user to multiple groups
rediacc permissions assign "admin@company.com" \
  "Administrators,Team Leads"

# Assign with expiration
rediacc permissions assign "contractor@company.com" "Developers" \
  --expires "2024-12-31"
```

### Remove User from Group

```bash
# Remove user from group
rediacc permissions unassign "user@company.com" "Developers"

# Remove user from all groups
rediacc permissions unassign "user@company.com" --all

# Remove user from multiple groups
rediacc permissions unassign "user@company.com" \
  "Developers,Team Leads"
```

### View User Permissions

```bash
# View user's permission groups
rediacc permissions user "user@company.com"

# View effective permissions
rediacc permissions user "user@company.com" --effective

# Check specific permission
rediacc permissions check "user@company.com" "machine.create"
```

## Permission Hierarchy

### Default Permission Groups

**Administrators**
- Full system access
- User and team management
- System configuration
- All resource operations

**Team Leads**
- Team member management
- Team resource access
- Job scheduling and monitoring
- Limited user invitation

**Users**
- Basic team participation
- Job execution and monitoring
- Resource viewing
- Personal settings management

**Guests**
- Read-only access
- Limited team visibility
- No modification permissions

### Custom Permission Groups

```bash
# Create specialized groups
rediacc permissions groups create "Backup Administrators" \
  --permissions "job.*,repo.*,storage.*"

rediacc permissions groups create "Security Auditors" \
  --permissions "audit.view,log.view,user.view,team.view"

rediacc permissions groups create "Machine Operators" \
  --permissions "machine.view,machine.connect,job.execute"

rediacc permissions groups create "Read Only Users" \
  --permissions "*.view"
```

## Access Control Examples

### Team-Based Access

```bash
# Create team-specific permission groups
rediacc permissions groups create "Development Team" \
  --permissions "team.Development.manage,machine.dev-*.access"

rediacc permissions groups create "Operations Team" \
  --permissions "team.Operations.manage,machine.prod-*.access,job.*"

# Assign users to team groups
rediacc permissions assign "dev1@company.com" "Development Team"
rediacc permissions assign "ops1@company.com" "Operations Team"
```

### Role-Based Access

```bash
# Create role-based groups
rediacc permissions groups create "Senior Developers" \
  --permissions "machine.create,repo.create,job.manage,team.*.view"

rediacc permissions groups create "Junior Developers" \
  --permissions "machine.view,repo.view,job.view,team.*.view"

rediacc permissions groups create "DevOps Engineers" \
  --permissions "machine.*,job.*,repo.*,system.monitor"
```

### Resource-Specific Access

```bash
# Database administrators
rediacc permissions groups create "Database Admins" \
  --permissions "machine.db-*.manage,job.backup.*,repo.database.*"

# Web administrators  
rediacc permissions groups create "Web Admins" \
  --permissions "machine.web-*.manage,job.web.*,repo.web.*"

# Storage administrators
rediacc permissions groups create "Storage Admins" \
  --permissions "storage.*,repo.*,job.backup.*"
```

## Auditing and Compliance

### Permission Auditing

```bash
# Audit user permissions
rediacc permissions audit users

# Audit permission group usage
rediacc permissions audit groups

# Check for excessive permissions
rediacc permissions audit --excessive

# Generate compliance report
rediacc permissions audit --compliance --format pdf
```

### Permission History

```bash
# View permission changes
rediacc permissions history

# User permission history
rediacc permissions history --user "user@company.com"

# Permission group history
rediacc permissions history --group "Administrators"

# Recent changes
rediacc permissions history --since "7d"
```

### Access Logs

```bash
# View access attempts
rediacc permissions logs access

# Failed access attempts
rediacc permissions logs access --failed

# User access patterns
rediacc permissions logs access --user "user@company.com"

# Resource access logs
rediacc permissions logs access --resource "machine.prod-web-1"
```

## Security Best Practices

### Principle of Least Privilege

```bash
# Start with minimal permissions
rediacc permissions groups create "New Users" \
  --permissions "team.*.view,user.profile.manage"

# Grant additional permissions as needed
rediacc permissions add "New Users" "machine.view"

# Regular permission reviews
rediacc permissions audit --unused --period "90d"
```

### Separation of Duties

```bash
# Separate administrative roles
rediacc permissions groups create "User Admins" \
  --permissions "user.*,team.manage"

rediacc permissions groups create "System Admins" \
  --permissions "machine.*,system.*"

rediacc permissions groups create "Security Admins" \
  --permissions "audit.*,permissions.*,security.*"
```

### Time-Limited Access

```bash
# Temporary elevated access
rediacc permissions assign "contractor@company.com" "Administrators" \
  --expires "2024-06-30" \
  --reason "Project deployment"

# Emergency access
rediacc permissions assign "oncall@company.com" "Emergency Response" \
  --expires "24h" \
  --auto-remove true
```

## Automation and Integration

### Automated Permission Management

```bash
#!/bin/bash
# Automated user onboarding

USER_EMAIL="$1"
TEAM="$2"
ROLE="$3"

# Create user if doesn't exist
if ! rediacc auth user info "$USER_EMAIL" >/dev/null 2>&1; then
  rediacc auth user create --email "$USER_EMAIL" --password "temp123"
fi

# Assign based on role
case "$ROLE" in
  "developer")
    rediacc permissions assign "$USER_EMAIL" "Developers"
    rediacc teams members add "$TEAM" "$USER_EMAIL"
    ;;
  "lead")
    rediacc permissions assign "$USER_EMAIL" "Team Leads"
    rediacc teams members add "$TEAM" "$USER_EMAIL" --role "lead"
    ;;
  "admin")
    rediacc permissions assign "$USER_EMAIL" "Administrators"
    ;;
esac

echo "User $USER_EMAIL onboarded with role $ROLE"
```

### Permission Synchronization

```bash
#!/bin/bash
# Sync permissions with external system

# Export current permissions
rediacc permissions groups list --output json > current-permissions.json

# Compare with external source
EXTERNAL_PERMS="external-permissions.json"

# Update permissions based on differences
jq -r '.[] | .groupName' "$EXTERNAL_PERMS" | while read group; do
  if ! grep -q "$group" current-permissions.json; then
    echo "Creating new group: $group"
    DESCRIPTION=$(jq -r ".[] | select(.groupName==\"$group\") | .description" "$EXTERNAL_PERMS")
    rediacc permissions groups create "$group" --description "$DESCRIPTION"
  fi
done
```

## Troubleshooting

### Common Permission Issues

**Access Denied:**
```bash
# Check user permissions
rediacc permissions user "user@company.com" --effective

# Check specific permission
rediacc permissions check "user@company.com" "machine.create"

# View permission group assignments
rediacc permissions user "user@company.com"
```

**Permission Not Found:**
```bash
# List available permissions
rediacc permissions list --search "machine"

# Check permission category
rediacc permissions list --category "machine"
```

**Group Assignment Issues:**
```bash
# Verify group exists
rediacc permissions groups list | grep "GroupName"

# Check group permissions
rediacc permissions groups permissions "GroupName"

# Verify user assignment
rediacc permissions groups members "GroupName"
```

### Debug Permission Issues

```bash
# Enable permission debugging
rediacc --debug permissions check "user@company.com" "machine.create"

# Test permission scenarios
rediacc permissions test --user "user@company.com" --action "machine.create"

# Validate permission configuration
rediacc permissions validate
```

## Migration and Backup

### Export Permissions

```bash
# Export all permission groups
rediacc permissions export > permissions-backup.json

# Export specific group
rediacc permissions groups export "Administrators" > admin-perms.json

# Export user assignments
rediacc permissions assignments export > user-assignments.json
```

### Import Permissions

```bash
# Import permission groups
rediacc permissions import permissions-backup.json

# Import with merge
rediacc permissions import --merge partial-permissions.json

# Import user assignments
rediacc permissions assignments import user-assignments.json
```