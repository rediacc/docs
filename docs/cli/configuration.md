# Configuration Reference

The Rediacc CLI uses a YAML configuration file to store settings, authentication information, and user preferences. This guide covers all configuration options and management commands.

## Configuration File

### Default Location
- **Linux/macOS**: `~/.rediacc-cli.yaml`
- **Windows**: `%USERPROFILE%\.rediacc-cli.yaml`

### Custom Location
```bash
# Use custom config file
rediacc --config /path/to/config.yaml command

# Set via environment variable
export REDIACC_CONFIG="/path/to/config.yaml"
```

## Configuration Management

### View Configuration

```bash
# View all settings
rediacc config list

# Get specific value
rediacc config get server.url
rediacc config get auth.email

# Show configuration file path
rediacc config path
```

### Update Configuration

```bash
# Set single value
rediacc config set server.url "https://rediacc.company.com"
rediacc config set format.default "json"

# Set nested values
rediacc config set auth.email "user@company.com"
rediacc config set jobs.ssh_timeout "60s"
```

### Reset Configuration

```bash
# Reset specific setting to default
rediacc config unset format.colors

# Reset all settings (requires confirmation)
rediacc config reset

# Create new config file
rediacc config init
```

## Configuration Schema

### Complete Configuration Structure

```yaml
# Server Configuration
server:
  url: "https://rediacc.company.com"     # Required: Rediacc server URL
  timeout: "30s"                         # Request timeout duration
  retry_attempts: 3                      # Number of retry attempts
  retry_delay: "2s"                      # Delay between retries

# Authentication
auth:
  email: "user@company.com"              # Logged-in user email
  session_token: "..."                   # Session authentication token
  request_credential: "..."              # Request credential UUID
  auto_refresh: true                     # Auto-refresh tokens

# Output Formatting
format:
  default: "table"                       # Default output format (table, json, yaml, text)
  colors: true                           # Enable colored output
  timestamps: true                       # Show timestamps in output
  headers: true                          # Show table headers
  compact: false                         # Compact output mode

# Job Configuration
jobs:
  default_datastore_size: "100G"        # Default datastore size
  ssh_timeout: "30s"                    # SSH connection timeout
  ssh_retry_attempts: 3                  # SSH retry attempts
  ssh_retry_delay: "5s"                 # SSH retry delay
  ssh_key_path: "~/.ssh/id_rsa"         # Default SSH key path
  parallel_jobs: 5                      # Max parallel job execution

# Infrastructure Defaults
infra:
  default_region: "us-east-1"           # Default region for operations
  default_bridge: ""                    # Global Bridges name
  machine_check_interval: "30s"         # Machine health check interval

# Teams
teams:
  default_vault_size: "10G"             # Default team vault size
  auto_join: false                      # Auto-join newly created teams

# Logging
logging:
  level: "info"                         # Log level (debug, info, warn, error)
  file: ""                              # Log file path (empty = stdout)
  max_size: "100M"                      # Max log file size
  max_backups: 5                        # Number of log backups to keep

# Advanced
advanced:
  debug: false                          # Global debug mode
  profile: false                        # Enable performance profiling
  cache_ttl: "5m"                       # Response cache TTL
  user_agent: "rediacc-cli/1.0.0"       # Custom User-Agent header
```

## Server Configuration

### Basic Server Setup

```bash
# Set server URL
rediacc config set server.url "https://rediacc.company.com"

# Set timeout for slow networks
rediacc config set server.timeout "60s"

# Configure retries
rediacc config set server.retry_attempts 5
rediacc config set server.retry_delay "3s"
```

### SSL/TLS Configuration

```bash
# For self-signed certificates (not recommended for production)
rediacc config set server.skip_tls_verify true

# Custom CA certificate
rediacc config set server.ca_cert "/path/to/ca.pem"

# Client certificate authentication
rediacc config set server.client_cert "/path/to/client.pem"
rediacc config set server.client_key "/path/to/client.key"
```

## Authentication Configuration

### Session Management

```bash
# Enable automatic token refresh
rediacc config set auth.auto_refresh true

# Set session timeout
rediacc config set auth.session_timeout "24h"

# Clear stored credentials
rediacc config set auth.email ""
rediacc config set auth.session_token ""
rediacc config set auth.request_credential ""
```

### Multi-User Setup

```bash
# Save different profiles
rediacc config set --profile production auth.email "admin@company.com"
rediacc config set --profile staging auth.email "test@company.com"

# Switch between profiles
rediacc --profile production auth status
rediacc --profile staging auth status
```

## Output Formatting

### Format Options

```bash
# Set default output format
rediacc config set format.default "json"    # json, yaml, table, text

# Configure table formatting
rediacc config set format.colors true       # Enable colors
rediacc config set format.headers true      # Show headers
rediacc config set format.compact false     # Compact mode

# Timestamp formatting
rediacc config set format.timestamps true
rediacc config set format.timezone "UTC"
```

### Format Examples

```bash
# Table format (default)
rediacc teams list
# ┌──────────────┬─────────────┬──────────────┐
# │ Team Name    │ Members     │ Resources    │
# ├──────────────┼─────────────┼──────────────┤
# │ Development  │ 5           │ 12 machines  │
# └──────────────┴─────────────┴──────────────┘

# JSON format
rediacc teams list --output json
# [{"teamName": "Development", "memberCount": 5}]

# YAML format
rediacc teams list --output yaml
# - teamName: Development
#   memberCount: 5

# Text format (for scripting)
rediacc teams list --output text
# Development 5 12
```

## Job Configuration

### SSH Settings

```bash
# SSH configuration
rediacc config set jobs.ssh_timeout "45s"
rediacc config set jobs.ssh_key_path "~/.ssh/rediacc_rsa"
rediacc config set jobs.ssh_retry_attempts 5

# SSH connection options
rediacc config set jobs.ssh_port 22
rediacc config set jobs.ssh_user "rediacc"
rediacc config set jobs.ssh_strict_host_key_checking false
```

### Job Execution

```bash
# Parallel job settings
rediacc config set jobs.parallel_jobs 10
rediacc config set jobs.max_job_duration "2h"

# Default datastore settings
rediacc config set jobs.default_datastore_size "500G"
rediacc config set jobs.datastore_type "ssd"
```

## Environment Variables

Override any configuration setting with environment variables:

```bash
# Server settings
export REDIACC_SERVER_URL="https://rediacc.company.com"
export REDIACC_SERVER_TIMEOUT="60s"

# Authentication
export REDIACC_AUTH_EMAIL="user@company.com"
export REDIACC_AUTH_PASSWORD="password"  # For scripts only

# Output formatting
export REDIACC_FORMAT_DEFAULT="json"
export REDIACC_FORMAT_COLORS="false"

# Debug mode
export REDIACC_DEBUG="true"

# Custom config file
export REDIACC_CONFIG="/etc/rediacc/config.yaml"
```

## Configuration Profiles

### Multiple Environments

Create separate configurations for different environments:

```bash
# Production profile
rediacc config init --profile production
rediacc config set --profile production server.url "https://prod.rediacc.com"
rediacc config set --profile production format.default "json"

# Staging profile  
rediacc config init --profile staging
rediacc config set --profile staging server.url "https://staging.rediacc.com"
rediacc config set --profile staging format.default "table"

# Development profile
rediacc config init --profile dev
rediacc config set --profile dev server.url "http://localhost:8080"
rediacc config set --profile dev logging.level "debug"
```

### Using Profiles

```bash
# Use specific profile
rediacc --profile production auth login
rediacc --profile staging teams list
rediacc --profile dev --debug company info

# Set default profile
export REDIACC_PROFILE="production"
```

## Configuration Validation

### Validate Configuration

```bash
# Check configuration validity
rediacc config validate

# Test server connectivity
rediacc config test-connection

# Verify authentication
rediacc config test-auth
```

### Configuration Health Check

```bash
# Comprehensive configuration check
rediacc config health-check

# Example output:
# ✓ Configuration file exists and is readable
# ✓ Server URL is valid and reachable
# ✓ Authentication credentials are present
# ✗ SSH key file not found at ~/.ssh/id_rsa
# ⚠ Server timeout is very high (60s)
```

## Backup and Migration

### Export Configuration

```bash
# Export current configuration
rediacc config export > rediacc-config-backup.yaml

# Export without sensitive data
rediacc config export --safe > rediacc-config-safe.yaml
```

### Import Configuration

```bash
# Import configuration
rediacc config import rediacc-config-backup.yaml

# Merge with existing configuration
rediacc config import --merge rediacc-config-partial.yaml
```

### Migration Between Systems

```bash
# On source system
rediacc config export --safe > config-export.yaml

# On target system
rediacc config import config-export.yaml
rediacc config set auth.email "user@company.com"  # Re-add sensitive data
rediacc auth login  # Re-authenticate
```

## Security Considerations

### Protect Sensitive Data

```bash
# Secure configuration file permissions
chmod 600 ~/.rediacc-cli.yaml

# Don't store passwords in config (use environment variables)
export REDIACC_AUTH_PASSWORD="mypassword"

# Use dedicated service accounts for automation
rediacc config set auth.email "service@company.com"
```

### Configuration File Encryption

```bash
# Encrypt configuration file (requires gpg)
gpg --symmetric --cipher-algo AES256 ~/.rediacc-cli.yaml

# Decrypt for use
gpg --decrypt ~/.rediacc-cli.yaml.gpg > ~/.rediacc-cli.yaml
```

## Troubleshooting

### Common Issues

**Configuration File Not Found:**
```bash
# Check file path
rediacc config path

# Create new config
rediacc config init
```

**Invalid Configuration:**
```bash
# Validate syntax
rediacc config validate

# Reset to defaults
rediacc config reset
```

**Permission Denied:**
```bash
# Fix file permissions
chmod 644 ~/.rediacc-cli.yaml

# Check file ownership
ls -la ~/.rediacc-cli.yaml
```

### Debug Configuration

```bash
# Enable debug mode
rediacc config set logging.level "debug"

# Debug specific operations
rediacc --debug config get server.url
rediacc --debug auth login
```

## Best Practices

### Organization
- Use descriptive profile names
- Document configuration changes
- Regular configuration backups
- Version control for team configurations

### Security  
- Restrict configuration file permissions
- Don't commit sensitive data to version control
- Use environment variables for secrets
- Regular credential rotation

### Performance
- Optimize timeout values for your network
- Configure appropriate retry settings
- Use caching where beneficial
- Monitor configuration performance impact