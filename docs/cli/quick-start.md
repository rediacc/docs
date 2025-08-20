# Quick Start Guide

Get up and running with Rediacc CLI in minutes. This guide covers authentication and your first commands.

## Prerequisites

- Rediacc CLI installed ([Installation Guide](./installation.md))
- Active Rediacc account
- API server URL (default: https://api.rediacc.com)

## First-Time Setup

### 1. Authenticate

Start by logging into your Rediacc account:

```bash
rediacc login
```

You'll be prompted for:
- Email address
- Password
- Master password (for vault encryption)

For non-interactive login:
```bash
rediacc login --email user@company.com --password 'YourPassword'
```

:::tip
Your authentication token is stored in `~/.rediacc/config.json` and automatically refreshed with each API call.
:::

### 2. Verify Connection

Check your authentication and company membership:

```bash
# Show current user's company
rediacc list user-company

# List available teams
rediacc list teams
```

### 3. Essential Commands

Here are the most common commands to get started:

#### View Resources
```bash
# List all teams you have access to
rediacc list teams

# View machines in a team
rediacc list team-machines production-team

# Show all users in your company
rediacc list users

# Check resource limits
rediacc list resource-limits
```

#### Create Your First Team
```bash
# Create a new team
rediacc create team dev-team

# Add a team member
rediacc team-member add dev-team colleague@company.com

# View team members
rediacc list team-members dev-team
```

#### Set Up Infrastructure
```bash
# Create a region
rediacc create region us-east

# Create a bridge in the region
rediacc create bridge us-east main-bridge

# Create a machine
rediacc create machine dev-team main-bridge web-server
```

## Working with Vaults

Vaults store encrypted configuration data. Set your master password to decrypt vault contents:

```bash
# Set master password for the session
rediacc vault set-password

# View decrypted vault data
rediacc inspect machine web-server
```

## Command Structure

All commands follow this pattern:
```bash
rediacc <action> <resource> [arguments] [options]
```

**Actions**: `create`, `list`, `update`, `rm`, `inspect`  
**Resources**: `team`, `machine`, `user`, `repository`, etc.  
**Options**: `--output json`, `--force`, `--help`

## Getting Help

```bash
# General help
rediacc --help

# Command-specific help
rediacc create team --help

# List all available commands
rediacc list --help
```

## Next Steps

- [Team Management Workflow](./tutorials/team-management-workflow.md) - Organize users and permissions
- [Infrastructure Setup](./tutorials/infrastructure-setup.md) - Configure regions, bridges, and machines
- [API Reference](./api-reference/index.md) - Complete command documentation

## Troubleshooting

### Authentication Issues
- Token expired: Run `rediacc login` again
- Wrong password: Check CAPS LOCK and special characters
- Connection failed: Verify `SYSTEM_API_URL` environment variable

### Permission Errors
- Ensure you're a member of the target team
- Check your permission group with `rediacc list users`
- Contact your administrator for access

### Vault Decryption
- Set master password: `rediacc vault set-password`
- Wrong password shows encrypted base64 strings
- Master password is per-company, not per-user