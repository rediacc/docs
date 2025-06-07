# Permissions Management

Permissions in Rediacc control access to resources and operations through a role-based system. The CLI provides commands for managing permission groups, assigning permissions, and controlling user access.

## Overview

Permission management includes:
- **Permission Groups**: Named collections of permissions
- **Permission Assignment**: Adding/removing permissions from groups
- **User Assignment**: Assigning users to permission groups
- **Access Control**: Managing who can access what resources

## Permission Group Management

### List Permission Groups

```bash
# List all permission groups in your company
rediacc-cli permission list-groups

# JSON output
rediacc-cli permission list-groups --output json
```

**Example output:**
```
Permission Group      
--------------------  
Administrators        
Developers            
Team Leads            
```

### Create Permission Group

```bash
# Create a new permission group
rediacc-cli permission create-group "DevOps Engineers"

# Create another group
rediacc-cli permission create-group "QA Team"
```

**Response:**
```
Successfully created permission group: DevOps Engineers
```

### Get Permission Group Details

```bash
# View details of a specific permission group
rediacc-cli permission list-group "Administrators"

# JSON output for parsing
rediacc-cli permission list-group "Administrators" --output json
```

**Example output:**
```
Permission Name              
---------------------------  
system.admin                 
user.manage                  
team.manage                  
machine.manage               
```

### Delete Permission Group

```bash
# Delete a permission group (with confirmation)
rediacc-cli permission delete-group "Unused Group"

# Force delete without confirmation
rediacc-cli permission delete-group "Old Group" --force
```

## Permission Management

### Add Permission to Group

```bash
# Add a permission to a group
rediacc-cli permission add "DevOps Engineers" "machine.manage"

# Add another permission
rediacc-cli permission add "DevOps Engineers" "system.monitor"
```

**Response:**
```
Successfully added permission: machine.manage to group DevOps Engineers
```

### Remove Permission from Group

```bash
# Remove a permission from a group (with confirmation)
rediacc-cli permission remove "DevOps Engineers" "system.admin"

# Force removal without confirmation
rediacc-cli permission remove "DevOps Engineers" "old.permission" --force
```

## User Permission Assignment

### Assign User to Permission Group

```bash
# Assign a user to a permission group
rediacc-cli permission assign user@company.com "DevOps Engineers"

# Assign to administrators
rediacc-cli permission assign admin@company.com "Administrators"
```

**Response:**
```
Successfully assigned permission group DevOps Engineers to user user@company.com
```

### View User Permissions

Users can check their assigned permission groups by listing users:

```bash
# List all users (shows permission groups)
rediacc-cli list users

# Get specific user info (JSON format shows permissions)
rediacc-cli list users --output json | grep -A 10 "user@company.com"
```

## Default Permission Groups

### Common Groups

**Administrators**
- Full system access
- Can manage all resources
- Can create/delete users and teams
- System configuration access

**Developers**
- Team participation
- Machine access
- Repository management
- Job execution

**Team Leads**
- Team management
- Member assignment
- Resource allocation
- Reporting access

**Users**
- Basic access
- Team participation
- Resource viewing
- Personal settings

## Permission Workflow Examples

### Setting Up a New Team

```bash
#!/bin/bash
# Script to set up a new development team with proper permissions

# 1. Create the permission group
rediacc-cli permission create-group "Mobile Dev Team"

# 2. Add necessary permissions
rediacc-cli permission add "Mobile Dev Team" "team.mobile.manage"
rediacc-cli permission add "Mobile Dev Team" "machine.mobile.access"
rediacc-cli permission add "Mobile Dev Team" "repository.create"
rediacc-cli permission add "Mobile Dev Team" "job.execute"

# 3. Create team
rediacc-cli create team "Mobile Development"

# 4. Create users and assign permissions
for email in dev1@company.com dev2@company.com dev3@company.com; do
  rediacc-cli create user $email --password "temp123"
  rediacc-cli user activate $email
  rediacc-cli permission assign $email "Mobile Dev Team"
  rediacc-cli team-member add "Mobile Development" $email
done

echo "Mobile development team setup complete!"
```

### Managing Administrative Access

```bash
#!/bin/bash
# Manage admin permissions carefully

# Create a limited admin group
rediacc-cli permission create-group "Limited Admins"

# Add specific admin permissions (not full system access)
rediacc-cli permission add "Limited Admins" "user.create"
rediacc-cli permission add "Limited Admins" "user.activate"
rediacc-cli permission add "Limited Admins" "team.create"
rediacc-cli permission add "Limited Admins" "machine.view"

# Assign to trusted users
rediacc-cli permission assign teamlead@company.com "Limited Admins"
```

### Permission Audit Script

```bash
#!/bin/bash
# Audit permission groups and assignments

echo "=== Permission Groups ==="
rediacc-cli permission list-groups

echo -e "\n=== Permission Details ==="
for group in $(rediacc-cli permission list-groups --output json | jq -r '.data[].permissionGroupName'); do
  echo -e "\nGroup: $group"
  echo "Permissions:"
  rediacc-cli permission list-group "$group" --output json | jq -r '.data[].permissionName' | sed 's/^/  - /'
done

echo -e "\n=== User Assignments ==="
rediacc-cli list users --output json | jq -r '.data[] | "\(.userEmail): \(.permissionsName)"'
```

## Best Practices

### Security Guidelines

1. **Principle of Least Privilege**
   - Grant only necessary permissions
   - Start with minimal access
   - Add permissions as needed
   - Regular permission reviews

2. **Separation of Duties**
   - Separate admin roles
   - Different groups for different tasks
   - Avoid permission overlap
   - Clear responsibility boundaries

3. **Regular Audits**
   - Review permission groups monthly
   - Check for unused permissions
   - Verify user assignments
   - Remove inactive users

### Naming Conventions

```bash
# Use descriptive group names
rediacc-cli permission create-group "Production Database Admins"
rediacc-cli permission create-group "Staging Environment Users"
rediacc-cli permission create-group "Backup Operators"

# Use hierarchical permission names
"system.admin"           # Full system access
"system.monitor"         # Read-only system monitoring
"team.create"           # Can create teams
"team.manage"           # Can manage existing teams
"team.*.view"           # Can view all teams
"machine.prod.manage"   # Can manage production machines
"machine.dev.access"    # Can access development machines
```

### Permission Categories

Common permission patterns:
- `*.view` - Read-only access
- `*.create` - Can create new resources
- `*.manage` - Can modify existing resources
- `*.delete` - Can remove resources
- `*.admin` - Full administrative access

## Integration with Other Features

### Team-Based Permissions

```bash
# Create team-specific permission group
rediacc-cli permission create-group "Backend Team Permissions"

# Add team-related permissions
rediacc-cli permission add "Backend Team Permissions" "team.backend.manage"
rediacc-cli permission add "Backend Team Permissions" "machine.backend-*.access"

# Assign to team members
rediacc-cli team-member add "Backend" developer@company.com
rediacc-cli permission assign developer@company.com "Backend Team Permissions"
```

### Machine Access Control

```bash
# Create machine operator group
rediacc-cli permission create-group "Production Operators"

# Add machine-specific permissions
rediacc-cli permission add "Production Operators" "machine.prod-*.view"
rediacc-cli permission add "Production Operators" "machine.prod-*.connect"
rediacc-cli permission add "Production Operators" "job.prod.execute"

# Assign to operators
rediacc-cli permission assign operator@company.com "Production Operators"
```

## Troubleshooting

### Common Issues

**Permission Denied:**
```
Error: API Error: User does not have permission to perform this action
```
Solution: Check user's permission group assignments and ensure the required permission is included.

**Group Not Found:**
```
Error: API Error: Permission group not found
```
Solution: Verify the group name is correct using `rediacc-cli permission list-groups`.

**User Not Found:**
```
Error: API Error: User with email user@company.com not found
```
Solution: Ensure the user exists and is activated before assigning permissions.

### Debug Commands

```bash
# Check if user exists and their permissions
rediacc-cli list users --output json | jq '.data[] | select(.userEmail == "user@company.com")'

# List all permission groups
rediacc-cli permission list-groups --output json

# Check specific group permissions
rediacc-cli permission list-group "GroupName" --output json
```

## Migration and Backup

### Export Permission Configuration

```bash
#!/bin/bash
# Export permission configuration for backup

# Export all permission groups
echo "=== Permission Groups ===" > permissions-backup.txt
rediacc-cli permission list-groups --output json >> permissions-backup.txt

# Export group details
for group in $(rediacc-cli permission list-groups --output json | jq -r '.data[].permissionGroupName'); do
  echo -e "\n=== Group: $group ===" >> permissions-backup.txt
  rediacc-cli permission list-group "$group" --output json >> permissions-backup.txt
done

# Export user assignments
echo -e "\n=== User Assignments ===" >> permissions-backup.txt
rediacc-cli list users --output json | jq '.data[] | {email: .userEmail, permissions: .permissionsName}' >> permissions-backup.txt

echo "Permission configuration exported to permissions-backup.txt"
```

### Restore Permissions

```bash
#!/bin/bash
# Script to restore permission groups from backup

# Read group definitions from backup and recreate
# This is a simplified example - real restoration would parse the backup file

# Recreate groups
rediacc-cli permission create-group "Administrators"
rediacc-cli permission create-group "Developers"
rediacc-cli permission create-group "Team Leads"

# Add permissions back
rediacc-cli permission add "Administrators" "system.admin"
rediacc-cli permission add "Developers" "machine.dev.access"
rediacc-cli permission add "Team Leads" "team.manage"

# Reassign users
rediacc-cli permission assign admin@company.com "Administrators"
rediacc-cli permission assign dev@company.com "Developers"
```