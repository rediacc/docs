---
sidebar_position: 15
---

# Desktop Integration

The Rediacc Console provides powerful desktop integration features through the Tauri framework, enabling native system capabilities and seamless integration with Rediacc CLI tools.

## Overview

The desktop version of Rediacc Console extends the web interface with native capabilities:
- Direct file system access
- Python CLI tool integration
- SSH terminal access
- File synchronization
- System integration

## Architecture

### Technology Stack
- **Tauri**: Rust-based desktop application framework
- **React 18**: Frontend framework
- **TypeScript**: Type-safe development
- **Native APIs**: System-level integration

### Communication Flow
```
React Frontend ←→ Tauri Commands (Rust) ←→ System/CLI Tools
```

## Features

### 1. Python CLI Integration

The desktop app seamlessly integrates with all Rediacc CLI tools:

#### Available Commands
- `rediacc-cli`: Main CLI for API operations
- `rediacc-cli-sync`: File synchronization with rsync
- `rediacc-cli-term`: Interactive SSH terminal access

#### Implementation
```typescript
// Execute CLI commands from the desktop app
const result = await invoke('execute_python_script', {
  scriptName: 'rediacc-cli',
  args: ['list', 'machines', '--team', 'Default']
});
```

### 2. File Synchronization

Direct file sync capabilities without leaving the Console:

#### Upload Files
```typescript
await invoke('execute_python_script', {
  scriptName: 'rediacc-cli-sync',
  args: [
    'upload',
    '--local', './project',
    '--machine', 'prod-server',
    '--repo', 'webapp'
  ]
});
```

#### Download Files
```typescript
await invoke('execute_python_script', {
  scriptName: 'rediacc-cli-sync',
  args: [
    'download',
    '--machine', 'prod-server',
    '--repo', 'webapp',
    '--local', './backup',
    '--verify'
  ]
});
```

### 3. Terminal Access

Built-in SSH terminal functionality:

```typescript
// Open terminal to repository
await invoke('execute_python_script', {
  scriptName: 'rediacc-cli-term',
  args: ['--machine', 'server', '--repo', 'webapp']
});
```

### 4. File System Operations

Native file system access for local operations:

```typescript
// List directory contents
const files = await invoke('list_directory', {
  path: '/home/user/projects'
});

// Read file contents
const content = await invoke('read_file', {
  path: '/home/user/config.json'
});
```

### 5. System Information

Access system details and configuration:

```typescript
// Get system info
const systemInfo = await invoke('get_system_info');
// Returns: { os: 'linux', arch: 'x64', version: '5.15.0' }

// Detect Python version
const pythonVersion = await invoke('get_python_version');
```

## Platform Support

### Operating Systems
- **Linux**: Full support with native integration
- **macOS**: Full support with platform-specific optimizations
- **Windows**: Full support via MSYS2 for rsync functionality

### Platform-Specific Features

#### Linux
- Native package manager integration
- System service management
- Distribution detection

#### macOS
- macOS menu bar integration
- Native notifications
- Keychain support

#### Windows
- Windows system tray
- Native Windows notifications
- Credential manager integration

## Security

### Process Isolation
- Commands run in isolated processes
- No direct shell access
- Sanitized command arguments

### Credential Management
- Secure credential storage using OS keychain
- Encrypted communication with backend
- No credentials in memory

## Configuration

### Desktop-Specific Settings

```json
{
  "desktop": {
    "pythonPath": "/usr/bin/python3",
    "cliPath": "~/.rediacc/cli",
    "terminal": {
      "defaultShell": "/bin/bash",
      "fontSize": 14
    },
    "sync": {
      "defaultOptions": ["--verify", "--progress"]
    }
  }
}
```

### Environment Variables
- `REDIACC_PYTHON_PATH`: Override Python executable
- `REDIACC_CLI_PATH`: Custom CLI installation path
- `REDIACC_DESKTOP_MODE`: Enable desktop-specific features

## Advanced Features

### 1. Batch Operations

Execute multiple CLI commands efficiently:

```typescript
const batchResults = await invoke('execute_batch', {
  commands: [
    { script: 'rediacc-cli', args: ['list', 'machines'] },
    { script: 'rediacc-cli', args: ['list', 'repos'] }
  ]
});
```

### 2. File Watchers

Monitor local directories for changes:

```typescript
await invoke('watch_directory', {
  path: './src',
  callback: 'sync_on_change'
});
```

### 3. Custom Scripts

Run custom Python scripts with CLI integration:

```typescript
await invoke('run_custom_script', {
  script: 'backup_all.py',
  env: { TEAM: 'Production' }
});
```

## Troubleshooting

### Common Issues

#### Python Not Found
```bash
# Set Python path explicitly
export REDIACC_PYTHON_PATH=/usr/local/bin/python3
```

#### CLI Tools Not Available
```bash
# Reinstall CLI tools
./rediacc setup --reinstall
```

#### Permission Errors
- Ensure proper file permissions
- Run with appropriate user privileges
- Check OS-specific security settings

### Debug Mode

Enable debug logging:
```bash
REDIACC_DEBUG=1 ./rediacc-console
```

## Best Practices

### 1. Resource Management
- Close unused terminal sessions
- Cancel long-running operations when needed
- Monitor system resource usage

### 2. Security
- Use OS keychain for credentials
- Enable two-factor authentication
- Regular security updates

### 3. Performance
- Use batch operations for multiple commands
- Enable file sync compression
- Configure appropriate timeouts

## API Reference

### Tauri Commands

#### execute_python_script
```typescript
interface ExecutePythonScriptArgs {
  scriptName: string;
  args: string[];
  env?: Record<string, string>;
  timeout?: number;
}
```

#### list_directory
```typescript
interface ListDirectoryArgs {
  path: string;
  includeHidden?: boolean;
  recursive?: boolean;
}
```

#### Terminal Commands
```typescript
interface TerminalArgs {
  machine: string;
  repo?: string;
  command?: string;
  interactive?: boolean;
}
```

## Migration from Web

### Feature Parity
Most web features are available in desktop with enhancements:
- All web functionality retained
- Additional native capabilities
- Offline mode support
- Local file access

### Data Synchronization
- Settings sync across platforms
- Shared authentication tokens
- Unified configuration

## Future Enhancements

### Planned Features
- Offline queue processing
- Local backup capabilities
- Advanced file preview
- Integrated code editor
- Native performance monitoring

### Community Requests
- Plugin system for extensions
- Custom theme support
- Keyboard shortcut customization
- Multi-window support