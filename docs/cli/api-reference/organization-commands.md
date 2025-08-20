# Organization Commands

Commands for managing company and team organizational structure.

## Quick Navigation

- **[Company Commands](#company-commands)** - Company-level operations
- **[Team Member Commands](#team-member-commands)** - Team membership management

## Company Commands

For managing company-wide settings and operations. See [full company command reference](./company-commands.md) for detailed parameters.

### Available Company Commands:
- `company enable-tfa` - Enable two-factor authentication for the company
- `company enable-feature` - Enable specific features for the company
- `company enable-maintenance` - Put company in maintenance mode

### Company Management Examples:

```bash
# Enable TFA for entire company
rediacc company enable-tfa

# Enable a specific feature
rediacc company enable-feature advanced-permissions

# Enable maintenance mode
rediacc company enable-maintenance --reason "System upgrade"
```

## Team Member Commands

For managing team membership. See [full team member command reference](./team-member-commands.md) for role details.

### Available Team Member Commands:
- `team-member add` - Add user to team
- `team-member remove` - Remove user from team

### Team Membership Examples:

```bash
# Add a user to development team
rediacc team-member add dev-team developer@company.com

# Remove a user from team
rediacc team-member remove dev-team former-employee@company.com --force
```

## Organizational Structure

### Hierarchy Overview

```
Company
├── Teams
│   ├── Default (auto-created)
│   ├── Production
│   ├── Development
│   └── Testing
└── Users
    ├── Administrators
    ├── Team Members
    └── Service Accounts
```

### Key Concepts

1. **Company** - Top-level organization
   - Contains all teams and users
   - Controls company-wide features and settings
   - Manages billing and subscriptions

2. **Teams** - Logical groupings within a company
   - Own resources (machines, repositories, etc.)
   - Have dedicated members with specific roles
   - Isolated from other teams' resources

3. **Users** - Individual accounts
   - Can belong to multiple teams
   - Have one permission group across the company
   - Maintain personal settings and preferences

## Common Workflows

### Initial Company Setup

```bash
# 1. Create company (during first login)
rediacc create company --name "Tech Corp" --email admin@techcorp.com

# 2. Enable security features
rediacc company enable-tfa
rediacc company enable-feature audit-logging

# 3. Create teams
rediacc create team --name production --description "Production environment"
rediacc create team --name development --description "Development environment"
```

### Managing Team Access

```bash
# View current team members
rediacc list team-members --team production

# Add multiple users to a team
for user in alice@company.com bob@company.com carol@company.com; do
  rediacc team-member add production $user
done

# Bulk remove users from team
rediacc team-member remove dev-team contractor1@external.com --force
rediacc team-member remove dev-team contractor2@external.com --force
```

### Feature Management

Available features that can be enabled:

- `advanced-permissions` - Custom permission groups (required for paid plans)
- `audit-logging` - Enhanced audit trail capabilities
- `tfa-enforcement` - Mandatory TFA for all users
- `ip-restriction` - IP-based access control
- `sso-integration` - Single Sign-On support

## Best Practices

1. **Team Isolation** - Keep production and development teams separate
2. **Regular Reviews** - Audit team membership quarterly
3. **Documentation** - Document team purposes and access policies
4. **Minimal Teams** - Don't create unnecessary teams
5. **Clear Naming** - Use descriptive team names that indicate purpose

## Access Control

### Team Roles

When adding users to teams, they can have different roles:
- **Admin** - Full control over team resources
- **Member** - Read and basic write access
- **Viewer** - Read-only access (with appropriate permissions)

### Resource Ownership

- Resources are owned by teams, not individual users
- Users access resources through team membership
- Removing a user from a team revokes all resource access

## Troubleshooting

- **"Cannot remove last team member"** - Teams must have at least one member
- **"Feature not available"** - Check subscription plan for feature availability
- **"User not found"** - Ensure user has activated their account
- **"Already a team member"** - User is already in the specified team