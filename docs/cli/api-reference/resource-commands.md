# Resource Commands

Commands for managing resources in the Rediacc system. These commands allow you to create, list, inspect, update, and remove various resources.

## Quick Navigation

- **[Create Commands](#create-commands)** - Create new resources
- **[List Commands](#list-commands)** - View and filter resources
- **[Inspect Commands](#inspect-commands)** - Get detailed resource information
- **[Update Commands](#update-commands)** - Modify existing resources
- **[Remove Commands](#remove-commands)** - Delete resources

## Create Commands

For creating new resources in the system. See [full create command reference](./create-commands.md) for detailed parameters and examples.

### Available Create Commands:
- `create bridge` - Create a new bridge for task processing
- `create company` - Create a new company account
- `create machine` - Add a new machine to a team
- `create queue-item` - Create a new task in the queue
- `create region` - Define a new geographic region
- `create repository` - Create a new code repository
- `create schedule` - Set up automated task scheduling
- `create storage` - Create distributed storage resource
- `create team` - Create a new team within a company
- `create user` - Add a new user account

## List Commands

For viewing and filtering resources. See [full list command reference](./list-commands.md) for detailed filtering options.

### Available List Commands:
- `list bridges` - Show all bridges in a team
- `list lookup-data` - View system reference data
- `list machines` - Display team machines
- `list queue-audit-logs` - View queue operation history
- `list queue-items` - Show queue tasks
- `list regions` - Display available regions
- `list repositories` - List code repositories
- `list schedules` - View scheduled tasks
- `list storages` - Show distributed storage resources
- `list team-members` - Display team membership
- `list teams` - Show all teams in company
- `list users` - View company users

## Inspect Commands

For getting detailed information about specific resources. See [full inspect command reference](./inspect-commands.md) for output formats.

### Available Inspect Commands:
- `inspect bridge` - View bridge details and configuration
- `inspect company` - Display company information
- `inspect distributed-storage` - Show storage configuration
- `inspect machine` - Get machine details and status
- `inspect queue-item` - View task details and execution history
- `inspect repository` - Display repository information
- `inspect schedule` - Show schedule configuration
- `inspect user` - View user account details

## Update Commands

For modifying existing resources. See [full update command reference](./update-commands.md) for modifiable fields.

### Available Update Commands:
- `update bridge` - Rename a bridge
- `update company` - Modify company settings
- `update machine` - Change machine configuration
- `update queue-item` - Modify queue task properties
- `update repository` - Update repository settings
- `update storage` - Change storage configuration
- `update team` - Modify team properties
- `update user` - Update user account information

## Remove Commands

For deleting resources from the system. See [full remove command reference](./rm-commands.md) for safety options.

### Available Remove Commands:
- `rm bridge` - Delete a bridge (with safety checks)
- `rm machine` - Remove a machine from team
- `rm queue-item` - Cancel or delete a queue task
- `rm repository` - Delete a repository and its data
- `rm schedule` - Remove a scheduled task
- `rm storage` - Delete distributed storage resource
- `rm team` - Remove a team (requires empty team)
- `rm user` - Deactivate a user account

## Common Options

Most resource commands support these options:

- `--output json` - Output in JSON format for scripting
- `--force` - Skip confirmation prompts (use with caution)
- `--team <name>` - Specify team context for operation
- `--help` - Show command-specific help

## Examples

```bash
# Create a new machine
rediacc create machine --name prod-server-01 --team production

# List all machines with JSON output
rediacc list machines --team production --output json

# Inspect a specific machine
rediacc inspect machine prod-server-01

# Update machine configuration
rediacc update machine prod-server-01 --status maintenance

# Remove a machine (with confirmation)
rediacc rm machine old-server --team production
```

## Best Practices

1. **Always specify team context** when working with team resources
2. **Use inspect before update** to verify current state
3. **Enable --force only in scripts** after thorough testing
4. **Check dependencies before removal** to avoid orphaned resources
5. **Use JSON output for automation** and parsing in scripts