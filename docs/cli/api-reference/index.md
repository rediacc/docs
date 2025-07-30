# Rediacc CLI API Reference

This documentation is automatically generated from the CLI configuration file and provides a complete reference for all available commands and functions.

## Documentation Structure

The API reference is organized into the following sections:

### Core Operations

- **[Queue Functions](queue-functions.md)** - Queue functions are executed on machines via the bridge system. They handle repository management, system setup, and data operations.

### Resource Management

- **[Create](create-commands.md)** - Create new resources in the system.
- **[List](list-commands.md)** - List and view resources.
- **[Rm](rm-commands.md)** - Remove resources from the system.
- **[Update](update-commands.md)** - Update existing resources.

### Operations

- **[Audit](audit-commands.md)** - Audit operations.
- **[Auth](auth-commands.md)** - Auth operations.
- **[Authentication](authentication.md)** - Manage authentication and sessions.
- **[Bridge](bridge-commands.md)** - Bridge operations.
- **[Clone](clone-commands.md)** - Clone operations.
- **[Company](company-commands.md)** - Company operations.
- **[Distributed-Storage](distributed-storage-commands.md)** - Distributed-Storage operations.
- **[Inspect](inspect-commands.md)** - Inspect operations.
- **[Machine](machine-commands.md)** - Machine operations.
- **[Misc](misc-commands.md)** - Misc operations.
- **[Permission](permission-commands.md)** - Permission operations.
- **[Queue](queue-commands.md)** - Queue operations.
- **[Region](region-commands.md)** - Region operations.
- **[Team](team-commands.md)** - Team operations.
- **[Team-Member](team-member-commands.md)** - Team-Member operations.
- **[User](user-commands.md)** - User operations.
- **[Vault](vault-commands.md)** - Vault operations.

## Command Structure

Most commands follow this pattern:

```bash
rediacc-cli <command> [subcommand] [arguments] [options]
```

### Common Options

- `--output json` - Output results in JSON format
- `--force` - Skip confirmation prompts
- `--help` - Show command help

## Authentication

All commands (except `login` and `create company`) require authentication. Use `rediacc-cli login` to authenticate before running other commands.

## Error Handling

Commands return standard exit codes:
- `0` - Success
- `1` - General error
- `2` - Authentication error
- `3` - Permission denied
- `4` - Resource not found
- `5` - Validation error
