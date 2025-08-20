# Team Management Workflows

Teams are the foundation of collaboration in Rediacc. This guide covers practical workflows for organizing teams, managing members, and coordinating resources.

## Team Design Patterns

### Functional Teams
Organize by technical function or expertise:

```bash
# Development teams by technology
rediacc create team "Frontend Development"
rediacc create team "Backend Services"
rediacc create team "Mobile Development"
rediacc create team "Data Engineering"

# Operations teams by responsibility
rediacc create team "Site Reliability"
rediacc create team "Security Operations"
rediacc create team "Database Administration"
```

### Project-Based Teams
Create cross-functional teams for specific projects:

```bash
# Project team with metadata
rediacc create team "Project Phoenix" --vault '{
  "project_code": "PHX-2024",
  "start_date": "2024-01-01",
  "end_date": "2024-12-31",
  "budget": 500000,
  "lead": "project.lead@company.com",
  "stakeholders": ["cto@company.com", "product@company.com"]
}'
```

### Environment-Based Teams
Separate teams for different deployment environments:

```bash
# Environment teams
rediacc create team "Production Systems"
rediacc create team "Staging Environment"
rediacc create team "Development Sandbox"
rediacc create team "QA Testing"
```

## Team Lifecycle Management

### Creating a Complete Team Environment

Here's a comprehensive script to set up a new team with all resources:

```bash
#!/bin/bash
# setup-team.sh - Complete team setup automation

TEAM_NAME="Data Platform"
TEAM_LEAD="alice@company.com"
REGION="us-east"
BRIDGE="data-bridge"

echo "Setting up team: $TEAM_NAME"

# 1. Create the team with metadata
rediacc create team "$TEAM_NAME" --vault '{
  "description": "Data platform and analytics team",
  "lead": "'$TEAM_LEAD'",
  "cost_center": "CC-DATA-001",
  "slack_channel": "#data-platform",
  "on_call_rotation": "https://pagerduty.com/schedules/data"
}'

# 2. Create infrastructure
echo "Creating infrastructure..."

# Create dedicated bridge if needed
rediacc create bridge "$REGION" "$BRIDGE" --vault '{
  "type": "dedicated",
  "resources": "high-memory"
}'

# Create machines for different purposes
MACHINES=(
  "data-etl-01:ETL processing server"
  "data-analytics-01:Analytics workbench"
  "data-warehouse-01:Data warehouse node"
)

for machine_spec in "${MACHINES[@]}"; do
  IFS=':' read -r machine_name description <<< "$machine_spec"
  
  rediacc create machine "$TEAM_NAME" "$BRIDGE" "$machine_name" --vault '{
    "description": "'"$description"'",
    "specs": {
      "cpu": "16 cores",
      "memory": "64GB",
      "storage": "2TB SSD"
    }
  }'
done

# 3. Set up repositories
echo "Creating repositories..."

REPOS=(
  "etl-pipelines:Apache Airflow DAGs and scripts"
  "analytics-notebooks:Jupyter notebooks and analyses"
  "data-models:dbt models and transformations"
)

for repo_spec in "${REPOS[@]}"; do
  IFS=':' read -r repo_name description <<< "$repo_spec"
  
  rediacc create repository "$TEAM_NAME" "$repo_name" --vault '{
    "description": "'"$description"'",
    "tech_stack": ["python", "sql", "spark"]
  }'
done

# 4. Configure storage
echo "Setting up storage..."

rediacc create storage "$TEAM_NAME" "data-lake" --vault '{
  "type": "s3",
  "bucket": "company-data-lake",
  "region": "us-east-1",
  "lifecycle_policy": "archive_after_90_days"
}'

rediacc create storage "$TEAM_NAME" "ml-models" --vault '{
  "type": "s3",
  "bucket": "company-ml-models",
  "versioning": true
}'

# 5. Add team members
echo "Adding team members..."

MEMBERS=(
  "$TEAM_LEAD:lead"
  "bob@company.com:senior-engineer"
  "carol@company.com:data-analyst"
  "dave@company.com:ml-engineer"
)

for member_spec in "${MEMBERS[@]}"; do
  IFS=':' read -r email role <<< "$member_spec"
  
  rediacc team-member add "$TEAM_NAME" "$email"
  
  # Store role in user's vault (if needed)
  echo "Added $email as $role"
done

# 6. Create schedules for automated tasks
echo "Setting up schedules..."

rediacc create schedule "$TEAM_NAME" "daily-etl" --vault '{
  "cron": "0 2 * * *",
  "description": "Daily ETL pipeline run",
  "machine": "data-etl-01",
  "command": "airflow trigger_dag daily_etl",
  "notifications": {
    "on_failure": "#data-platform-alerts"
  }
}'

rediacc create schedule "$TEAM_NAME" "weekly-cleanup" --vault '{
  "cron": "0 3 * * 0",
  "description": "Weekly temporary data cleanup",
  "machine": "data-warehouse-01",
  "command": "/opt/scripts/cleanup.sh"
}'

echo "Team setup complete!"
echo "Summary:"
rediacc list teams --output json | jq '.data[] | select(.teamName == "'$TEAM_NAME'")'
```

### Team Member Onboarding

Standardized process for adding new team members:

```bash
#!/bin/bash
# onboard-team-member.sh

NEW_USER_EMAIL="$1"
TEAM_NAME="$2"

if [ -z "$NEW_USER_EMAIL" ] || [ -z "$TEAM_NAME" ]; then
  echo "Usage: $0 <email> <team_name>"
  exit 1
fi

echo "Onboarding $NEW_USER_EMAIL to $TEAM_NAME"

# 1. Check if user exists
if ! rediacc list users | grep -q "$NEW_USER_EMAIL"; then
  echo "Creating user account..."
  rediacc create user "$NEW_USER_EMAIL"
  rediacc user activate "$NEW_USER_EMAIL"
else
  echo "User already exists"
fi

# 2. Add to team
echo "Adding to team..."
rediacc team-member add "$TEAM_NAME" "$NEW_USER_EMAIL"

# 3. Grant appropriate permissions
echo "Setting up permissions..."
# Example: Add to team-specific permission group
rediacc permission assign "$NEW_USER_EMAIL" "${TEAM_NAME}-developers"

# 4. Send welcome information
echo "Onboarding complete! Send welcome email with:"
echo "- Team Slack channel"
echo "- Documentation links"
echo "- Team contacts"
echo "- First tasks"
```

### Team Offboarding

Safely remove team members and clean up access:

```bash
#!/bin/bash
# offboard-team-member.sh

USER_EMAIL="$1"

echo "Starting offboarding for $USER_EMAIL"

# 1. List user's team memberships
echo "Current team memberships:"
TEAMS=$(rediacc list teams --output json | jq -r '.data[] | select(.isMember == 1) | .teamName')

# 2. Remove from all teams
for team in $TEAMS; do
  echo "Removing from team: $team"
  rediacc team-member remove "$team" "$USER_EMAIL" --force
done

# 3. Deactivate user account
echo "Deactivating user account..."
rediacc user deactivate "$USER_EMAIL" --force

# 4. Audit trail
echo "Offboarding complete. Check audit logs:"
rediacc list audit-logs --entity-filter User | grep "$USER_EMAIL"
```

## Team Collaboration Patterns

### Shared Resources Between Teams

Set up resources accessible by multiple teams:

```bash
#!/bin/bash
# setup-shared-resources.sh

# Teams that need shared access
FRONTEND_TEAM="Frontend Development"
BACKEND_TEAM="Backend Services"
QA_TEAM="Quality Assurance"

# 1. Create shared storage for artifacts
for team in "$FRONTEND_TEAM" "$BACKEND_TEAM" "$QA_TEAM"; do
  rediacc create storage "$team" "shared-artifacts" --vault '{
    "type": "nfs",
    "server": "nfs.company.internal",
    "path": "/shared/build-artifacts",
    "mount_options": "ro,soft",
    "description": "Shared build artifacts between teams"
  }'
done

# 2. Create shared documentation repository
SHARED_REPO="documentation"
for team in "$FRONTEND_TEAM" "$BACKEND_TEAM"; do
  rediacc create repository "$team" "$SHARED_REPO" --vault '{
    "type": "git",
    "url": "git@github.com:company/docs.git",
    "branch": "main",
    "access": "read-write"
  }'
done

# 3. Document sharing arrangement in team vaults
for team in "$FRONTEND_TEAM" "$BACKEND_TEAM" "$QA_TEAM"; do
  current_vault=$(rediacc list teams --output json | \
    jq -r '.data[] | select(.teamName == "'$team'") | .vaultContent')
  
  updated_vault=$(echo "$current_vault" | jq '. + {
    "shared_resources": {
      "artifacts": "shared-artifacts",
      "documentation": "documentation",
      "api_specs": "https://api-docs.company.com"
    }
  }')
  
  rediacc update team "$team" --vault "$updated_vault"
done
```

### Cross-Team Service Accounts

Create service accounts that work across teams:

```bash
#!/bin/bash
# setup-service-account.sh

SERVICE_NAME="ci-service"
SERVICE_EMAIL="${SERVICE_NAME}@company.com"

# 1. Create service account
rediacc create user "$SERVICE_EMAIL"
rediacc user activate "$SERVICE_EMAIL"

# 2. Create custom permission group for CI/CD
rediacc permission create-group "ci-cd-services"
rediacc permission add "ci-cd-services" "GetTeamMachines"
rediacc permission add "ci-cd-services" "GetTeamRepositories"
rediacc permission add "ci-cd-services" "CreateQueueItem"
rediacc permission assign "$SERVICE_EMAIL" "ci-cd-services"

# 3. Add to relevant teams
TEAMS=("Frontend Development" "Backend Services" "QA Testing")
for team in "${TEAMS[@]}"; do
  rediacc team-member add "$team" "$SERVICE_EMAIL"
done

# 4. Create bridge token for the service
rediacc create bridge "us-east" "ci-bridge"
rediacc login --email "$SERVICE_EMAIL" \
  --target "ci-bridge" \
  --expiration 8760  # 1 year

echo "Service account $SERVICE_EMAIL created and configured"
```

## Team Monitoring and Maintenance

### Team Health Check

Regular assessment of team resources and usage:

```bash
#!/bin/bash
# team-health-check.sh

echo "=== Team Health Report ==="
date

# 1. Team overview
echo -e "\n## Team Overview"
rediacc list teams | column -t

# 2. Resource utilization by team
echo -e "\n## Resource Utilization"
rediacc list teams --output json | jq -r '
  ["Team", "Members", "Machines", "Repos", "Storage", "Schedules"],
  ["----", "-------", "--------", "-----", "-------", "---------"],
  (.data[] | [
    .teamName,
    .memberCount,
    .machineCount,
    .repoCount,
    .storageCount,
    .scheduleCount
  ]) | @tsv' | column -t

# 3. Teams without recent activity (requires audit log access)
echo -e "\n## Team Activity (Last 30 days)"
# This would require parsing audit logs

# 4. Large teams that might need subdivision
echo -e "\n## Large Teams (>10 members)"
rediacc list teams --output json | \
  jq -r '.data[] | select(.memberCount > 10) | 
  "Team: \(.teamName) has \(.memberCount) members"'

# 5. Teams approaching resource limits
echo -e "\n## Resource Warnings"
# Compare against subscription limits
```

### Team Resource Cleanup

Remove unused resources and optimize costs:

```bash
#!/bin/bash
# cleanup-team-resources.sh

TEAM_NAME="$1"

if [ -z "$TEAM_NAME" ]; then
  echo "Usage: $0 <team_name>"
  exit 1
fi

echo "Analyzing resources for team: $TEAM_NAME"

# 1. Find unused machines (would need to check queue activity)
echo "Checking for idle machines..."
# Implementation would check machine activity

# 2. Identify orphaned repositories
echo "Checking repository usage..."
# Implementation would check last commit dates

# 3. Review storage utilization
echo "Analyzing storage usage..."
# Implementation would check storage metrics

# 4. Clean up old schedules
echo "Reviewing scheduled tasks..."
# Check for disabled or failing schedules

echo "Cleanup analysis complete. Review findings before taking action."
```

## Best Practices

### Team Naming Conventions
```bash
# Use clear, descriptive names
"Mobile Development"      # Good: Clear purpose
"Platform Engineering"    # Good: Specific function
"Team Alpha"             # Bad: Non-descriptive
"Misc"                   # Bad: Too vague
```

### Vault Data Standards
```json
{
  "description": "Team purpose and responsibilities",
  "lead": "team.lead@company.com",
  "created_date": "2024-01-15",
  "cost_center": "CC-1234",
  "slack_channel": "#team-channel",
  "documentation": "https://wiki.company.com/teams/data-platform",
  "on_call": {
    "primary": "primary@company.com",
    "secondary": "secondary@company.com",
    "escalation": "manager@company.com"
  },
  "tags": ["data", "analytics", "python"]
}
```

### Access Control Guidelines
1. **Principle of Least Privilege**: Grant minimum necessary access
2. **Regular Reviews**: Audit team membership quarterly
3. **Service Accounts**: Use dedicated accounts for automation
4. **Documentation**: Keep team wikis updated with access policies

## Related Guides
- [Authentication Workflows](./authentication-workflows.md)
- [Infrastructure Setup](./infrastructure-setup.md)
- [Permission Management](./permission-management.md)
- [API Reference: Team Commands](../api-reference/create-commands.md#team)
- [API Reference: Team Member Commands](../api-reference/team-member-commands.md)