# Teams Management

Teams are the core organizational unit in Rediacc for collaboration, resource management, and access control. This guide covers all team-related operations including creation, member management, and team configuration.

## Overview

Team operations include:
- **Team Management**: Create, delete, and configure teams
- **Member Management**: Add and remove team members
- **Access Control**: Team-based permissions and resource access
- **Vault Operations**: Secure team configuration storage

## Team Operations

### List Teams

View all teams in your company:

```bash
# List teams (table format)
rediacc-cli list teams

# JSON output
rediacc-cli list teams --output json
```

**Example output:**
```
Team Name     Members  Machines  Repos  Storage  Schedules  
-----------  --------  --------  -----  -------  ----------  
Development         5        12      8        3         15  
Operations          3         8      4        2         10  
Security            2         4      2        1          5  
```

**JSON output includes vault data:**
```json
{
  "teamName": "Development",
  "companyName": "YourCompany",
  "memberCount": 5,
  "machineCount": 12,
  "repoCount": 8,
  "scheduleCount": 15,
  "storageCount": 3,
  "isMember": 1,
  "vaultContent": "{\"lead\": \"john@company.com\"}",
  "vaultVersion": 1
}
```

### Create Team

Create a new team:

```bash
# Create team
rediacc-cli create team "Development"

# Create team with vault data
rediacc-cli create team "Operations" --vault '{"description": "System operations team"}'

# Create team with vault from file
rediacc-cli create team "Security" --vault-file team-config.json
```

**Success output:**
```
Successfully created team: Development
```

:::info Resource Limits
Team creation is subject to your subscription limits. Check your limits with `rediacc-cli list resource-limits`.
:::

### Update Team

Update team name or vault data:

```bash
# Rename team
rediacc-cli update team "OldName" --new-name "NewName"

# Update vault data
rediacc-cli update team "Development" --vault '{"lead": "jane@company.com", "budget": 100000}'

# Update vault from file with version control
rediacc-cli update team "Development" --vault-file config.json --vault-version 2
```

### Delete Team

Delete a team and all its resources:

```bash
# Delete team (with confirmation)
rediacc-cli rm team "Old Team"

# Force delete without confirmation
rediacc-cli rm team "Old Team" --force
```

**Warning:** Deleting a team removes all associated machines, repositories, storage, and schedules.

## Team Vault Management

### Set Team Vault

Directly manage team vault data:

```bash
# Set vault data interactively (enter JSON and press Ctrl+D)
rediacc-cli vault set team "Development"

# Set vault data from file
rediacc-cli vault set team "Development" vault-data.json

# Set vault data from stdin
echo '{"config": "value"}' | rediacc-cli vault set team "Development" -

# Set with specific version
rediacc-cli vault set team "Development" data.json --vault-version 3
```

### View Team Vault

Team vault data is included when listing teams:

```bash
# View specific team's vault content
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .vaultContent'

# Check vault version
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .vaultVersion'
```

## Member Management

### Add Team Member

Add users to a team:

```bash
# Add user to team
rediacc-cli team-member add "Development" user@company.com

# Add multiple users
for user in dev1@company.com dev2@company.com dev3@company.com; do
  rediacc-cli team-member add "Development" $user
done
```

**Success output:**
```
Successfully added user@company.com to team Development
```

### Remove Team Member

Remove users from a team:

```bash
# Remove user from team (with confirmation)
rediacc-cli team-member remove "Development" user@company.com

# Force removal without confirmation
rediacc-cli team-member remove "Development" user@company.com --force

# Remove multiple users
for user in user1@company.com user2@company.com; do
  rediacc-cli team-member remove "Development" $user --force
done
```

### List Team Members

Team membership information is shown in the team list:

```bash
# See member count for all teams
rediacc-cli list teams

# Get detailed team info
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development")'

# Check if you're a member of a team
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .isMember'
```

## Team Resources

### Team Machines

Machines are associated with teams for access control:

```bash
# Create machine for team
rediacc-cli create machine "Development" "london-bridge" "web-server-1" \
  --vault '{"ip": "192.168.1.10", "role": "web"}'

# List team's machine count
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .machineCount'
```

### Team Repositories

Repositories belong to teams:

```bash
# Create repository for team
rediacc-cli create repository "Development" "app-backend" \
  --vault '{"type": "git", "url": "git@github.com:company/backend.git"}'

# Check repository count
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .repoCount'
```

### Team Storage

Storage allocations per team:

```bash
# Create storage for team
rediacc-cli create storage "Development" "dev-backups" \
  --vault '{"size": "1TB", "type": "s3"}'

# View storage count
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .storageCount'
```

### Team Schedules

Schedules for automated tasks:

```bash
# Create schedule for team
rediacc-cli create schedule "Development" "nightly-backup" \
  --vault '{"cron": "0 2 * * *", "task": "backup"}'

# Check schedule count
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "Development") | .scheduleCount'
```

## Team Workflows

### Complete Team Setup

```bash
#!/bin/bash
# Script to set up a complete team environment

TEAM_NAME="Mobile Development"

# 1. Create team
rediacc-cli create team "$TEAM_NAME" \
  --vault '{"description": "Mobile app development team", "budget": 50000}'

# 2. Add team members
MEMBERS=("alice@company.com" "bob@company.com" "charlie@company.com")
for member in "${MEMBERS[@]}"; do
  rediacc-cli team-member add "$TEAM_NAME" $member
done

# 3. Create development machines
rediacc-cli create machine "$TEAM_NAME" "dev-bridge" "mobile-dev-1" \
  --vault '{"os": "Ubuntu 22.04", "cores": 4, "ram": "16GB"}'

rediacc-cli create machine "$TEAM_NAME" "dev-bridge" "mobile-build-1" \
  --vault '{"os": "macOS", "cores": 8, "ram": "32GB"}'

# 4. Create repositories
rediacc-cli create repository "$TEAM_NAME" "mobile-app" \
  --vault '{"type": "git", "main_branch": "develop"}'

rediacc-cli create repository "$TEAM_NAME" "mobile-api" \
  --vault '{"type": "git", "main_branch": "main"}'

# 5. Set up storage
rediacc-cli create storage "$TEAM_NAME" "mobile-artifacts" \
  --vault '{"size": "500GB", "type": "s3", "bucket": "mobile-builds"}'

# 6. Create schedules
rediacc-cli create schedule "$TEAM_NAME" "nightly-tests" \
  --vault '{"cron": "0 1 * * *", "command": "npm test"}'

echo "Team $TEAM_NAME setup complete!"
```

### Team Migration

```bash
#!/bin/bash
# Migrate team to new structure

OLD_TEAM="Legacy Team"
NEW_TEAM="Modern Team"

# 1. Create new team with updated config
OLD_VAULT=$(rediacc-cli list teams --output json | jq -r ".data[] | select(.teamName == \"$OLD_TEAM\") | .vaultContent")
rediacc-cli create team "$NEW_TEAM" --vault "$OLD_VAULT"

# 2. Get team members (you'll need to track members separately)
# Then add them to new team
rediacc-cli team-member add "$NEW_TEAM" "member@company.com"

# 3. Migrate configurations
echo "Migration from $OLD_TEAM to $NEW_TEAM started"

# 4. After verification, remove old team
read -p "Delete old team $OLD_TEAM? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  rediacc-cli rm team "$OLD_TEAM" --force
fi
```

### Team Access Audit

```bash
#!/bin/bash
# Audit team access and resources

echo "=== Team Access Audit ==="
echo

# List all teams with access info
rediacc-cli list teams --output json | jq -r '.data[] | 
  "\(.teamName):\n  Members: \(.memberCount)\n  You have access: \(if .isMember == 1 then "Yes" else "No" end)\n  Resources: \(.machineCount) machines, \(.repoCount) repos, \(.storageCount) storage\n"'

# Check your team memberships
echo "=== Your Team Memberships ==="
rediacc-cli list teams --output json | jq -r '.data[] | select(.isMember == 1) | .teamName'
```

## Best Practices

### Team Organization

1. **Clear Naming**: Use descriptive team names that reflect purpose
   ```bash
   # Good examples
   rediacc-cli create team "Frontend Development"
   rediacc-cli create team "Database Administration"
   rediacc-cli create team "Customer Support Engineering"
   
   # Avoid generic names
   # "Team 1", "Group A", "Misc"
   ```

2. **Team Structure**: Organize teams by function or project
   - Development teams by technology stack
   - Operations teams by responsibility area
   - Cross-functional teams for projects

3. **Vault Data Standards**: Use consistent vault schemas
   ```json
   {
     "description": "Team purpose",
     "lead": "lead@company.com",
     "slack_channel": "#team-dev",
     "cost_center": "CC-1234",
     "tags": ["frontend", "react", "mobile"]
   }
   ```

### Security Practices

1. **Minimum Access**: Add only necessary members
2. **Regular Reviews**: Audit team membership quarterly
3. **Vault Encryption**: Sensitive data is automatically encrypted
4. **Access Logging**: All team operations are logged

### Resource Management

1. **Resource Limits**: Monitor team resource usage
   ```bash
   # Check team resources
   rediacc-cli list teams --output json | jq '.data[] | 
     {team: .teamName, machines: .machineCount, repos: .repoCount}'
   ```

2. **Cleanup Unused**: Remove inactive teams and members
3. **Cost Allocation**: Use vault data for budget tracking

## Troubleshooting

### Common Issues

**Team Creation Failed:**
```
Error: API Error: Maximum number of teams reached for subscription
```
Solution: Check your subscription limits or upgrade your plan.

**Member Add Failed:**
```
Error: API Error: User not found or not activated
```
Solution: Ensure the user exists and is activated first.

**Permission Denied:**
```
Error: API Error: User is not a member of the specified team
```
Solution: Verify you have access to the team or request access.

### Debug Commands

```bash
# Verify team exists
rediacc-cli list teams | grep "TeamName"

# Check team details
rediacc-cli list teams --output json | jq '.data[] | select(.teamName == "TeamName")'

# Verify user exists before adding
rediacc-cli list users | grep "user@company.com"

# Check your team memberships
rediacc-cli list teams --output json | jq '.data[] | select(.isMember == 1) | .teamName'
```

## Integration Examples

### CI/CD Integration

```bash
#!/bin/bash
# Setup team for CI/CD pipeline

# Create CI/CD team
rediacc-cli create team "CI-CD" --vault '{
  "description": "Continuous Integration and Deployment",
  "jenkins_url": "https://jenkins.company.com",
  "docker_registry": "registry.company.com"
}'

# Add CI/CD service accounts
rediacc-cli team-member add "CI-CD" "jenkins@company.com"
rediacc-cli team-member add "CI-CD" "github-actions@company.com"

# Create build machines
for i in {1..3}; do
  rediacc-cli create machine "CI-CD" "ci-bridge" "build-agent-$i" \
    --vault '{"type": "docker", "image": "company/build-agent:latest"}'
done
```

### Multi-Team Collaboration

```bash
#!/bin/bash
# Set up shared resources between teams

# Create shared storage accessible by multiple teams
TEAMS=("Frontend" "Backend" "QA")

for team in "${TEAMS[@]}"; do
  rediacc-cli create storage "$team" "shared-artifacts" \
    --vault '{
      "type": "nfs",
      "mount": "/shared/artifacts",
      "permissions": "read-only"
    }'
done

# Document sharing in team vaults
for team in "${TEAMS[@]}"; do
  rediacc-cli vault set team "$team" --vault '{
    "shared_resources": {
      "artifacts": "/shared/artifacts",
      "docs": "https://docs.company.com"
    }
  }'
done
```