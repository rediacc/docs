# User & Permission Commands

Commands for managing users, authentication, and permissions in the Rediacc system.

## Quick Navigation

- **[User Commands](#user-commands)** - User account management
- **[Auth Commands](#auth-commands)** - Authentication operations
- **[Permission Commands](#permission-commands)** - Permission group management

## User Commands

For managing user accounts. See [full user command reference](./user-commands.md) for detailed parameters.

### Available User Commands:
- `user activate` - Activate a pending user account
- `user enable` - Enable a disabled user account
- `user reset-password` - Reset user password

### Common User Operations:

```bash
# Activate a new user
rediacc user activate pending@company.com

# Enable a previously disabled account
rediacc user enable john@company.com --reason "Rejoined team"

# Reset a user's password
rediacc user reset-password jane@company.com
```

## Auth Commands

For authentication and privilege management. See [full auth command reference](./auth-commands.md) for security details.

### Available Auth Commands:
- `auth privilege` - Grant special privileges to auth request
- `auth status` - Check authentication request status

### Authentication Examples:

```bash
# Check current authentication status
rediacc auth status

# Grant elevated privileges (admin only)
rediacc auth privilege a1b2c3d4e5f6789 admin
```

## Permission Commands

For managing permission groups and access control. See [full permission command reference](./permission-commands.md) for group management.

### Available Permission Commands:
- `permission create-group` - Create a new permission group
- `permission delete-group` - Delete a permission group
- `permission list-groups` - List all permission groups
- `permission list-group` - Show permissions in a specific group
- `permission add` - Add permission to a group
- `permission remove` - Remove permission from a group
- `permission assign` - Assign permission group to user

### Permission Management Flow:

```bash
# 1. Create a custom permission group
rediacc permission create-group developers

# 2. Add permissions to the group
rediacc permission add developers CreateMachine
rediacc permission add developers CreateRepository
rediacc permission add developers GetTeamMachines

# 3. Assign the group to a user
rediacc permission assign developer@company.com developers

# 4. View group permissions
rediacc permission list-group developers

# 5. List all groups and their members
rediacc permission list-groups
```

## Access Control Overview

### Permission Groups

Rediacc uses a role-based access control system with permission groups:

1. **System Groups** (cannot be modified):
   - `Administrators` - Full system access
   - `Users` - Default user permissions
   - `Bridges` - Special group for bridge services

2. **Custom Groups** - Created by administrators for specific roles

### Key Concepts

- **Users can only belong to one permission group**
- **Permissions correspond to API endpoints** (e.g., `CreateMachine`, `DeleteUser`)
- **Changes take effect immediately** - No re-login required
- **Inheritance** - No permission inheritance; each group is independent

## Security Best Practices

1. **Principle of Least Privilege** - Grant only necessary permissions
2. **Regular Audits** - Review permission groups periodically
3. **Custom Groups** - Create role-specific groups instead of using admin
4. **Documentation** - Document what each custom group is for
5. **Remove Unused Groups** - Delete groups that are no longer needed

## Common Workflows

### Setting Up a New Team Member

```bash
# 1. Create user account
rediacc create user --email newdev@company.com --name "New Developer"

# 2. Add to team
rediacc team-member add dev-team newdev@company.com

# 3. Assign appropriate permissions
rediacc permission assign newdev@company.com developers
```

### Creating a Read-Only Role

```bash
# 1. Create the group
rediacc permission create-group read-only

# 2. Add only read permissions
rediacc permission add read-only GetTeamMachines
rediacc permission add read-only GetRepositories
rediacc permission add read-only GetQueueItems

# 3. Assign to contractors or auditors
rediacc permission assign auditor@external.com read-only
```

## Troubleshooting

- **"Permission denied"** - Check user's permission group with `permission list-groups`
- **"Cannot modify system group"** - System groups like Administrators cannot be changed
- **"User not found"** - Ensure user is activated with `user activate`
- **"Invalid permission name"** - Use `list lookup-data` to see valid permission names