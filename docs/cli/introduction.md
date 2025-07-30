# CLI Introduction

> **Eliminate The 'Works On My Machine' Problems That Keep Developers Frustrated.**
>
> **Is Your Development Environment Slowing You Down? Code Without Constraints.**

The Rediacc CLI is a powerful command-line interface that provides comprehensive access to the Rediacc platform's features. Built with Python for cross-platform compatibility and designed for automation, it enables infrastructure management, backup operations, team collaboration, queue management, and system administration from your terminal.

## Overview

The CLI communicates with Rediacc's middleware API to provide secure, authenticated access to:

- **Authentication & User Management** - Login, user creation, session management, and 2FA support
- **Company Administration** - Company setup, settings, and subscription management  
- **Team Management** - Team creation, member management, and collaboration tools
- **Infrastructure Operations** - Region, bridge, and machine management
- **Resource Management** - Repository, storage, and schedule management
- **Queue Operations** - Create and manage queue items, process jobs with bash functions
- **Permission Management** - Create groups, assign permissions, and manage user access
- **Configuration** - CLI settings stored in `~/.rediacc/config.json`

## Architecture

```
CLI (Python) → HTTP/REST → Middleware (.NET) → SQL Server (Stored Procedures)
```

The CLI acts as a client to the Rediacc middleware, which handles business logic and database operations through stored procedures.

## Key Features

### 🔐 **Secure Authentication**
- Session-based login with automatic token refresh
- Two-factor authentication (2FA) support
- Role-based permissions and access control
- Secure password hashing (SHA-256)

### 🏢 **Company Management**
- Company creation with activation codes
- User provisioning and activation
- Subscription plan management (COMMUNITY, ADVANCED, PREMIUM, ELITE)
- Company vault for secure configuration storage

### 👥 **Team Collaboration**
- Team creation and management
- Member assignment and removal
- Secure vault operations with versioning
- Team-based resource isolation

### 🏗️ **Infrastructure Control**
- Multi-region deployment management
- Bridge and machine orchestration
- Resource scaling and monitoring
- Vault-based configuration management

### 📦 **Queue Management**
- Create queue items for job execution
- Support for bash functions with parameters
- Priority-based queue processing (1-5 levels)
- Response tracking and completion status

### 📊 **Flexible Output**
- Multiple output formats: text and JSON
- Colored terminal output for better readability
- Machine-readable JSON for automation
- Table formatting for list operations

## Quick Start

1. **Installation**: Install Python 3 and download the CLI script
2. **Configuration**: Set the server URL environment variable
3. **Authentication**: Login with your credentials
4. **Explore**: Use built-in help to discover commands

```bash
# Set server URL (optional, defaults to localhost:8080)
export REDIACC_API_URL="https://your-server.com"

# Login
rediacc-cli login --email user@example.com --password yourpassword

# Create your first company (if needed)
rediacc-cli create company "Your Company" --email admin@company.com --password adminpass

# List available commands
rediacc-cli -h

# Get help for specific commands
rediacc-cli create -h
rediacc-cli list -h
```

## Getting Help

Every command includes comprehensive help documentation:

```bash
# Global help
rediacc-cli -h

# Command help
rediacc-cli create -h
rediacc-cli list -h

# Subcommand help
rediacc-cli create company -h
rediacc-cli create user -h
```

## Configuration

The CLI stores configuration in `~/.rediacc/config.json`. The configuration is automatically managed when you login/logout:

```bash
# Configuration is stored automatically on login
rediacc-cli login --email user@example.com

# View current authentication status
cat ~/.rediacc/config.json

# Logout clears the stored credentials
rediacc-cli logout
```

### Environment Variables

```bash
# Set middleware server URL (defaults to localhost:8080)
export REDIACC_API_URL="https://api.rediacc.com"

# Set middleware port (defaults to 8080)
export SYSTEM_MIDDLEWARE_PORT="8080"
```

## Next Steps

- [Installation Guide](./installation.md) - How to install and set up the CLI
- [Quick Start](./quick-start.md) - Authentication and basic commands
- [Tutorials](./tutorials/authentication-workflows.md) - Workflow-focused guides
- [API Reference](./api-reference/index.md) - Complete command documentation
- [Configuration Reference](./configuration.md) - Complete configuration options