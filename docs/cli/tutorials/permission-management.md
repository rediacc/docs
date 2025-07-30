# Permission Management Workflows

This guide covers implementing role-based access control (RBAC) and managing permissions in Rediacc.

## Permission System Overview

Rediacc uses a group-based permission system:
- **Permission Groups**: Collections of allowed API operations
- **Users**: Assigned to one permission group
- **Permissions**: Individual API endpoints that can be called

### Default Permission Groups

1. **Administrators**: Full system access
2. **Users**: Standard access to assigned teams
3. **Bridges**: Special accounts for automation

## Setting Up Custom Permissions

### Creating Permission Groups

Design permission groups for different roles:

```bash
# Developer group with code-related permissions
rediacc-cli permission create-group "developers"

# Add development-related permissions
rediacc-cli permission add "developers" "GetTeamRepositories"
rediacc-cli permission add "developers" "CreateRepository"
rediacc-cli permission add "developers" "UpdateRepositoryVault"
rediacc-cli permission add "developers" "GetTeamMachines"
rediacc-cli permission add "developers" "CreateQueueItem"

# Operations group with infrastructure permissions
rediacc-cli permission create-group "operations"

# Add ops permissions
rediacc-cli permission add "operations" "GetCompanyRegions"
rediacc-cli permission add "operations" "GetRegionBridges"
rediacc-cli permission add "operations" "CreateMachine"
rediacc-cli permission add "operations" "UpdateMachineStatus"
rediacc-cli permission add "operations" "GetQueueItemsNext"

# Read-only auditor group
rediacc-cli permission create-group "auditors"

# Add read-only permissions
rediacc-cli permission add "auditors" "GetCompanyUsers"
rediacc-cli permission add "auditors" "GetCompanyTeams"
rediacc-cli permission add "auditors" "GetAuditLogs"
rediacc-cli permission add "auditors" "GetEntityHistory"
```

### Assigning Users to Groups

Map users to appropriate permission groups:

```bash
# Assign developers
for dev in alice@company.com bob@company.com charlie@company.com; do
  rediacc-cli permission assign "$dev" "developers"
done

# Assign operations team
for ops in david@company.com eve@company.com; do
  rediacc-cli permission assign "$ops" "operations"
done

# Assign auditor
rediacc-cli permission assign auditor@company.com "auditors"
```

## Role-Based Access Patterns

### Hierarchical Permissions

Implement permission inheritance:

```bash
#!/bin/bash
# setup-hierarchical-permissions.sh

# Base permissions for all authenticated users
rediacc-cli permission create-group "authenticated"
BASE_PERMS=(
  "GetUserCompany"
  "GetUserRequests"
  "UpdateUserPassword"
  "DeleteUserRequest"
)

for perm in "${BASE_PERMS[@]}"; do
  rediacc-cli permission add "authenticated" "$perm"
done

# Team member permissions (includes base)
rediacc-cli permission create-group "team-members"
for perm in "${BASE_PERMS[@]}"; do
  rediacc-cli permission add "team-members" "$perm"
done

MEMBER_PERMS=(
  "GetTeamMachines"
  "GetTeamRepositories"
  "GetTeamMembers"
  "CreateQueueItem"
)

for perm in "${MEMBER_PERMS[@]}"; do
  rediacc-cli permission add "team-members" "$perm"
done

# Team lead permissions (includes team member)
rediacc-cli permission create-group "team-leads"
# Copy all team-member permissions
for perm in "${BASE_PERMS[@]}" "${MEMBER_PERMS[@]}"; do
  rediacc-cli permission add "team-leads" "$perm"
done

# Add lead-specific permissions
LEAD_PERMS=(
  "CreateTeamMembership"
  "DeleteUserFromTeam"
  "UpdateTeamName"
  "CreateMachine"
  "DeleteMachine"
)

for perm in "${LEAD_PERMS[@]}"; do
  rediacc-cli permission add "team-leads" "$perm"
done
```

### Department-Specific Permissions

Create permissions for different departments:

```bash
#!/bin/bash
# setup-department-permissions.sh

# Engineering Department
rediacc-cli permission create-group "engineering"

ENGINEERING_PERMS=(
  # Repository management
  "CreateRepository"
  "UpdateRepositoryName"
  "UpdateRepositoryVault"
  "DeleteRepository"
  
  # Development machines
  "GetTeamMachines"
  "CreateQueueItem"
  
  # CI/CD operations
  "CreateSchedule"
  "UpdateScheduleVault"
)

for perm in "${ENGINEERING_PERMS[@]}"; do
  rediacc-cli permission add "engineering" "$perm"
done

# Finance Department
rediacc-cli permission create-group "finance"

FINANCE_PERMS=(
  # Read-only access to resources
  "GetCompanyDashboardJson"
  "GetCompanyTeams"
  "GetTeamMachines"
  "GetTeamRepositories"
  
  # Audit capabilities
  "GetAuditLogs"
  "GetEntityHistory"
  
  # No write permissions
)

for perm in "${FINANCE_PERMS[@]}"; do
  rediacc-cli permission add "finance" "$perm"
done

# HR Department
rediacc-cli permission create-group "human-resources"

HR_PERMS=(
  # User management
  "CreateNewUser"
  "ActivateUserAccount"
  "UpdateUserToDeactivated"
  "GetCompanyUsers"
  
  # Team membership
  "CreateTeamMembership"
  "DeleteUserFromTeam"
  "GetTeamMembers"
)

for perm in "${HR_PERMS[@]}"; do
  rediacc-cli permission add "human-resources" "$perm"
done
```

## Permission Automation

### Permission Auditing

Regular permission reviews:

```bash
#!/bin/bash
# audit-permissions.sh

echo "=== Permission Audit Report ==="
echo "Generated: $(date)"
echo

# List all permission groups
echo "## Permission Groups"
rediacc-cli permission list-groups

# For each group, show assigned users
echo -e "\n## Group Assignments"
GROUPS=$(rediacc-cli permission list-groups --output json | jq -r '.data[].permissionGroupName')

for group in $GROUPS; do
  echo -e "\n### $group"
  
  # Get permissions in group
  PERM_COUNT=$(rediacc-cli permission list-group "$group" --output json | jq '.data | length')
  echo "Permissions: $PERM_COUNT"
  
  # Get users in group (would need to check all users)
  echo "Users:"
  rediacc-cli list users --output json | jq -r '.data[] | select(.permissionsName == "'$group'") | "  - " + .userEmail'
done

# Find users with admin access
echo -e "\n## Administrative Access"
rediacc-cli list users --output json | jq -r '.data[] | select(.permissionsName == "Administrators") | .userEmail'

# Check for inactive users with permissions
echo -e "\n## Inactive Users with Access"
rediacc-cli list users --output json | jq -r '.data[] | select(.activated == false and .permissionsName != null) | .userEmail + " (" + .permissionsName + ")"'
```

### Least Privilege Analysis

Identify over-privileged accounts:

```bash
#!/bin/bash
# analyze-privileges.sh

# Check for users with admin who shouldn't have it
echo "## Checking Admin Users"

ADMIN_USERS=$(rediacc-cli list users --output json | \
  jq -r '.data[] | select(.permissionsName == "Administrators") | .userEmail')

for user in $ADMIN_USERS; do
  # Check their recent activity
  RECENT_ACTIVITY=$(rediacc-cli list audit-logs \
    --entity-filter User \
    --start-date $(date -d '30 days ago' --iso-8601) \
    --output json | \
    jq --arg user "$user" '.data[] | select(.userEmail == $user)' | wc -l)
  
  if [ "$RECENT_ACTIVITY" -lt 5 ]; then
    echo "Low activity admin: $user (${RECENT_ACTIVITY} actions in 30 days)"
  fi
done

# Find users who might need more permissions
echo -e "\n## Permission Denied Errors"
# This would require parsing error logs
```

## Security Workflows

### Implementing Zero Trust

Configure minimal default permissions:

```bash
#!/bin/bash
# zero-trust-setup.sh

# Create minimal default group
rediacc-cli permission create-group "minimal-access"

# Only allow basic self-service operations
MINIMAL_PERMS=(
  "GetUserCompany"      # See own company
  "UpdateUserPassword"  # Change own password
  "DeleteUserRequest"   # Logout
)

for perm in "${MINIMAL_PERMS[@]}"; do
  rediacc-cli permission add "minimal-access" "$perm"
done

# Assign all new users to minimal by default
echo "Set company policy to assign new users to 'minimal-access' group"

# Create request-based elevation groups
rediacc-cli permission create-group "temporary-elevated"

# Add time-limited permissions
echo "Implement time-based permission expiry in application logic"
```

### Emergency Access Procedures

Handle permission escalation for incidents:

```bash
#!/bin/bash
# emergency-access.sh

REQUESTER="$1"
REASON="$2"
DURATION_HOURS="${3:-4}"  # Default 4 hours

if [ -z "$REQUESTER" ] || [ -z "$REASON" ]; then
  echo "Usage: $0 <email> <reason> [duration_hours]"
  exit 1
fi

echo "Emergency Access Request"
echo "Requester: $REQUESTER"
echo "Reason: $REASON"
echo "Duration: $DURATION_HOURS hours"

# Log the request
echo "[$(date)] Emergency access granted to $REQUESTER for: $REASON" >> /var/log/emergency-access.log

# Save current permissions
CURRENT_GROUP=$(rediacc-cli list users --output json | \
  jq -r '.data[] | select(.userEmail == "'$REQUESTER'") | .permissionsName')

echo "Current group: $CURRENT_GROUP"

# Grant temporary admin
rediacc-cli permission assign "$REQUESTER" "Administrators"

echo "Elevated permissions granted."
echo "Reminder: Revoke after $DURATION_HOURS hours"
echo "Command: rediacc-cli permission assign $REQUESTER '$CURRENT_GROUP'"

# Schedule automatic revocation (if using cron)
echo "rediacc-cli permission assign $REQUESTER '$CURRENT_GROUP'" | \
  at now + $DURATION_HOURS hours 2>/dev/null || \
  echo "Manual revocation required"
```

### Permission Change Workflow

Implement approval process for permission changes:

```bash
#!/bin/bash
# permission-change-request.sh

REQUEST_FILE="/var/log/permission-requests.log"

request_permission() {
  local user="$1"
  local requested_group="$2"
  local justification="$3"
  
  # Log request
  echo "[$(date)] REQUEST: $user -> $requested_group | $justification" >> "$REQUEST_FILE"
  
  # Notify approvers
  echo "Permission request submitted:"
  echo "User: $user"
  echo "Requested Group: $requested_group"
  echo "Justification: $justification"
  echo "Status: Pending approval"
}

approve_permission() {
  local user="$1"
  local new_group="$2"
  local approver="$3"
  
  # Log approval
  echo "[$(date)] APPROVED: $user -> $new_group | By: $approver" >> "$REQUEST_FILE"
  
  # Apply permission change
  rediacc-cli permission assign "$user" "$new_group"
  
  echo "Permission change applied"
}

# Usage examples
case "$1" in
  request)
    request_permission "$2" "$3" "$4"
    ;;
  approve)
    approve_permission "$2" "$3" "$4"
    ;;
  *)
    echo "Usage: $0 {request|approve} <user> <group> [justification/approver]"
    ;;
esac
```

## Best Practices

### Permission Naming Conventions

Use clear, action-based names:
```bash
Good: "CreateRepository", "GetTeamMachines", "UpdateUserPassword"
Bad: "RepoAccess", "MachineStuff", "UserOps"
```

### Group Organization

1. **Functional Groups**: Based on job function
   - developers, operations, security, finance
   
2. **Access Level Groups**: Based on privilege level
   - read-only, standard, elevated, admin
   
3. **Project Groups**: Temporary for specific projects
   - project-phoenix-devs, migration-team

### Security Guidelines

1. **Principle of Least Privilege**: Start minimal, add as needed
2. **Regular Reviews**: Audit permissions quarterly
3. **Separation of Duties**: Don't combine conflicting permissions
4. **Time-Based Access**: Use temporary elevations
5. **Audit Everything**: Log all permission changes

### Common Permission Sets

```bash
# Read-Only Observer
"GetCompany*"       # All company read operations
"GetTeam*"          # All team read operations
"GetUser*"          # All user read operations
"GetAuditLogs"      # Audit trail access

# Developer Standard
"*Repository*"      # All repository operations
"GetTeamMachines"   # View machines
"CreateQueueItem"   # Submit jobs
"GetQueueItems"     # Check job status

# Operations Standard  
"*Machine*"         # All machine operations
"*Bridge*"          # All bridge operations
"*QueueItem*"       # All queue operations
"GetAuditLogs"      # Troubleshooting

# Team Lead
"*Team*"            # All team operations
"CreateUser"        # Add team members
"*TeamMembership"   # Manage members
```

## Troubleshooting

### Permission Denied Errors

```bash
# Check user's current permissions
USER="user@company.com"

# Get user's group
GROUP=$(rediacc-cli list users --output json | \
  jq -r '.data[] | select(.userEmail == "'$USER'") | .permissionsName')

echo "User $USER is in group: $GROUP"

# List group permissions
rediacc-cli permission list-group "$GROUP"

# Check if specific permission exists
NEEDED_PERM="CreateMachine"
rediacc-cli permission list-group "$GROUP" --output json | \
  jq '.data[] | select(. == "'$NEEDED_PERM'")'
```

### Permission Sync Issues

```bash
# Force permission refresh
rediacc-cli logout
rediacc-cli login --email user@company.com

# Verify new permissions took effect
rediacc-cli list users --output json | \
  jq '.data[] | select(.userEmail == "user@company.com")'
```

## Related Guides
- [Authentication Workflows](./authentication-workflows.md)
- [Team Management Workflow](./team-management-workflow.md)
- [API Reference: Permission Commands](../api-reference/permission-commands.md)
- [API Reference: User Commands](../api-reference/user-commands.md)