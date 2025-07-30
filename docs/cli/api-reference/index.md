# Rediacc CLI API Reference

This documentation is automatically generated from the CLI configuration file and provides a complete reference for all available commands and functions.

## Documentation Structure

The API reference is organized into the following sections:

### Core Operations

- **[Queue Functions](queue-functions.md)** - 

### Resource Management

- **[Update Commands](update-commands.md)** - 
- **[Rm Commands](rm-commands.md)** - 
- **[List Commands](list-commands.md)** - 
- **[Create Commands](create-commands.md)** - 

### Operations

- **[Distributed-Storage Commands](distributed-storage-commands.md)** - 
- **[Vault Commands](vault-commands.md)** - 
- **[Auth Commands](auth-commands.md)** - 
- **[Inspect Commands](inspect-commands.md)** - 
- **[Team-Member Commands](team-member-commands.md)** - 
- **[Company Commands](company-commands.md)** - 
- **[Authentication](authentication.md)** - 
- **[User Commands](user-commands.md)** - 
- **[Permission Commands](permission-commands.md)** - 
- **[Audit Commands](audit-commands.md)** - 
- **[Queue Commands](queue-commands.md)** - 
- **[Bridge Commands](bridge-commands.md)** - 

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
