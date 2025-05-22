# Installation

This guide covers installing and setting up the Rediacc CLI on your system.

## System Requirements

- **Operating System**: Linux, macOS, or Windows
- **Architecture**: x86_64 (amd64) or ARM64
- **Network**: HTTPS access to your Rediacc server
- **Go** (optional): 1.21+ for building from source

## Installation Methods

### Option 1: Download Binary (Recommended)

Download the latest release for your platform:

```bash
# Linux x86_64
curl -L -o rediacc https://releases.rediacc.com/latest/rediacc-linux-amd64
chmod +x rediacc
sudo mv rediacc /usr/local/bin/

# macOS x86_64
curl -L -o rediacc https://releases.rediacc.com/latest/rediacc-darwin-amd64
chmod +x rediacc
sudo mv rediacc /usr/local/bin/

# macOS ARM64 (M1/M2)
curl -L -o rediacc https://releases.rediacc.com/latest/rediacc-darwin-arm64
chmod +x rediacc
sudo mv rediacc /usr/local/bin/

# Windows (PowerShell)
Invoke-WebRequest -Uri "https://releases.rediacc.com/latest/rediacc-windows-amd64.exe" -OutFile "rediacc.exe"
# Add to PATH or move to desired location
```

### Option 2: Build from Source

```bash
# Clone the repository
git clone https://github.com/rediacc/cli.git
cd cli

# Build the binary
go build -o bin/rediacc main.go

# Install to system PATH
sudo cp bin/rediacc /usr/local/bin/
```

### Option 3: Using Go Install

```bash
go install github.com/rediacc/cli@latest
```

## Verify Installation

```bash
# Check version
rediacc --version

# View help
rediacc --help
```

## Initial Setup

### 1. Configure Server Connection

Set your Rediacc server URL:

```bash
# Set server URL
rediacc config set server.url "https://your-rediacc-server.com"

# Verify configuration
rediacc config get server.url
```

### 2. Set Output Preferences (Optional)

```bash
# Set default output format
rediacc config set format.default table

# Enable colors
rediacc config set format.colors true

# View all settings
rediacc config list
```

### 3. Test Connection

```bash
# Test server connectivity
rediacc auth status
```

You should see: `Status: Not logged in`

## Authentication Setup

### Create Company (First Time Setup)

If you're setting up a new Rediacc instance:

```bash
# Create your company with admin user
rediacc company create \
  --name "Your Company Name" \
  --admin-email admin@yourcompany.com \
  --admin-password securepassword123
```

### Login

```bash
# Login with your credentials
rediacc auth login \
  --email admin@yourcompany.com \
  --password securepassword123

# Verify login
rediacc auth status
```

## Configuration File

The CLI stores configuration in `~/.rediacc-cli.yaml`:

```yaml
server:
  url: "https://your-rediacc-server.com"
  timeout: "30s"
auth:
  email: "admin@yourcompany.com"
  session_token: "..."
  request_credential: "..."
format:
  default: "table"
  colors: true
  timestamps: true
```

## Environment Variables

Override configuration with environment variables:

```bash
# Server URL
export REDIACC_SERVER_URL="https://your-server.com"

# Enable debug mode
export REDIACC_DEBUG=true

# Override config file location
export REDIACC_CONFIG="/path/to/config.yaml"
```

## Shell Completion

Enable tab completion for your shell:

### Bash
```bash
# Add to ~/.bashrc
source <(rediacc completion bash)

# Or install system-wide
rediacc completion bash | sudo tee /etc/bash_completion.d/rediacc
```

### Zsh
```bash
# Add to ~/.zshrc
source <(rediacc completion zsh)
```

### Fish
```bash
rediacc completion fish | source
```

## Troubleshooting

### Connection Issues

```bash
# Test server connectivity
curl -v https://your-rediacc-server.com/health

# Check CLI configuration
rediacc config list

# Enable debug mode
rediacc --debug auth status
```

### Permission Issues

```bash
# Check file permissions
ls -la ~/.rediacc-cli.yaml

# Reset configuration
rm ~/.rediacc-cli.yaml
rediacc config set server.url "https://your-server.com"
```

### Build Issues

```bash
# Check Go version
go version

# Clean and rebuild
go clean -cache
go mod tidy
go build -o bin/rediacc main.go
```

## Next Steps

- [Authentication Guide](./authentication.md) - Learn about login and user management
- [Configuration Reference](./configuration.md) - Complete configuration options
- [Getting Started Tutorial](./tutorial.md) - Step-by-step walkthrough