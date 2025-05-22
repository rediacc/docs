# CLI Introduction

The Rediacc CLI is a powerful command-line interface that provides comprehensive access to the Rediacc platform's features. Built with Go and designed for automation, it enables infrastructure management, backup operations, team collaboration, and system administration from your terminal.

## Overview

The CLI communicates with Rediacc's middleware API to provide secure, authenticated access to:

- **Authentication & User Management** - Login, user creation, and session management
- **Company Administration** - Company setup, settings, and subscription management  
- **Team Management** - Team creation, member management, and collaboration tools
- **Infrastructure Operations** - Region, bridge, and machine management
- **Job Management** - Backup jobs, repository management, and scheduling
- **Configuration** - CLI settings, output formatting, and preferences

## Architecture

```
CLI (Go) → HTTP/REST → Middleware (.NET) → SQL Server (Stored Procedures)
```

The CLI acts as a client to the Rediacc middleware, which handles business logic and database operations through stored procedures.

## Key Features

### 🔐 **Secure Authentication**
- Session-based login with automatic credential refresh
- Multi-factor authentication support
- Role-based permissions and access control

### 🏢 **Company Management**
- Company creation and configuration
- User provisioning and activation
- Subscription and limits management

### 👥 **Team Collaboration**
- Team creation and management
- Member assignment and permissions
- Secure vault operations

### 🏗️ **Infrastructure Control**
- Multi-region deployment management
- Bridge and machine orchestration
- Resource scaling and monitoring

### 📊 **Flexible Output**
- Multiple output formats: table, JSON, YAML, text
- Colored output and formatting options
- Scriptable automation support

## Quick Start

1. **Installation**: Download the binary or build from source
2. **Configuration**: Set up your server connection
3. **Authentication**: Login with your credentials
4. **Explore**: Use built-in help to discover commands

```bash
# Check CLI version
rediacc --version

# Configure server
rediacc config set server.url "https://your-server.com"

# Login
rediacc auth login --email user@example.com

# Explore available commands
rediacc --help
```

## Getting Help

Every command includes comprehensive help documentation:

```bash
# Global help
rediacc --help

# Command group help
rediacc auth --help

# Specific command help
rediacc auth login --help
```

## Configuration

The CLI uses a YAML configuration file located at `~/.rediacc-cli.yaml` by default. All settings can be managed through the CLI:

```bash
# View current configuration
rediacc config list

# Set a configuration value
rediacc config set format.default json

# Get a specific value
rediacc config get server.url
```

## Next Steps

- [Installation Guide](./installation.md) - How to install and set up the CLI
- [Authentication](./authentication.md) - Login and user management
- [Company Management](./company.md) - Company administration
- [Teams](./teams.md) - Team collaboration features
- [Configuration Reference](./configuration.md) - Complete configuration options