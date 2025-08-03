---
sidebar_position: 2
---

# Repository Management

The Repository Management interface allows you to configure and manage repository credentials that are used to access code repositories, Docker registries, and other version control systems within the Rediacc platform.

## Overview

Repository credentials in Rediacc are stored securely in the team vault and are used to:
- Access private Git repositories for code deployment
- Pull Docker images from private registries
- Authenticate with version control systems
- Enable automated deployments and updates

## Interface Overview

### Repository Credentials Table

The interface displays a simple table with the following columns:

| Column | Description |
|--------|-------------|
| **Repository Name** | Unique identifier with 📦 icon |
| **Team** | The team that owns these credentials |
| **Vault Version** | Configuration version (e.g., v1) |
| **Actions** | Edit, Trace, Delete buttons |

### Header Controls

- ➕ **Create Repo (Credentials)**: Add new repository credentials
- 🔄 **Refresh**: Update the repository list


## Repository Types

Rediacc supports multiple repository types:

### Git Repositories
- **GitHub**: Public and private repositories
- **GitLab**: Self-hosted or cloud-based repositories
- **Bitbucket**: Atlassian's Git solution
- **Generic Git**: Any Git-compatible repository with SSH/HTTPS access

### Container Registries
- **Docker Hub**: Public and private Docker images
- **GitHub Container Registry**: GitHub's container hosting service
- **GitLab Container Registry**: Integrated with GitLab repositories
- **Private Registries**: Self-hosted Docker registries

## Creating Repository Credentials

To add new repository credentials:

1. Navigate to **Resources** → **Repo (Credentials)**
2. Select your team from the dropdown
3. Click **Create Repo (Credentials)**
4. Configure the credential details:

### Basic Information
- **Repository Name**: A unique identifier for your repository
- **Repository Type**: Select from Git, Docker, or other supported types
- **URL**: The repository URL (HTTPS or SSH format)
- **Team**: Assign the repository to a specific team

### Authentication

Different authentication methods are supported based on the repository type:

#### SSH Key Authentication
```
-----BEGIN OPENSSH PRIVATE KEY-----
[Your private key here]
-----END OPENSSH PRIVATE KEY-----
```

#### Personal Access Token
For services like GitHub and GitLab:
- Generate a token with appropriate permissions
- Enter the token in the credentials field
- Ensure the token has read access (write access for deployment repos)

#### Username/Password
For basic authentication:
- **Username**: Your repository username
- **Password**: Your password or app-specific password

### Advanced Settings

#### Default Branch
Specify the default branch to use for deployments:
- `main` (default for new repositories)
- `master` (legacy default)
- Custom branch names

#### Webhook Configuration
Enable webhooks for automatic deployments:
- **Webhook URL**: Generated automatically by Rediacc
- **Secret**: Shared secret for webhook validation
- **Events**: Select which events trigger actions

## Managing Repository Credentials

### Repository Actions

Each repository credential entry provides three action buttons:

#### ✏️ Edit
Modify credential configuration:
- Update repository URL
- Change authentication method
- Rotate access tokens or keys
- Update vault encryption

#### 📊 Trace
View credential usage history:
- Authentication attempts
- Access logs from machines
- Error diagnostics
- Usage patterns

#### 🗑️ Delete
Remove repository credentials:
- Requires confirmation
- Archives credential history
- Does not affect the actual repository

:::caution
Changing or deleting repository credentials may affect:
- Running deployments using these credentials
- Scheduled tasks that pull from repositories
- Machines configured to use these repositories
:::

### Example Repository Entry

From the interface:
- **Name**: 📦 A2
- **Team**: Private Team
- **Vault Version**: v1
- **Actions**: Edit | Trace | Delete

## Repository Best Practices

### Security

1. **Use SSH Keys**: Prefer SSH key authentication over passwords
2. **Limit Permissions**: Use read-only access where possible
3. **Rotate Credentials**: Regularly update access tokens and keys
4. **Audit Access**: Review repository access logs periodically

### Organization

1. **Naming Conventions**: Use consistent naming patterns
   - `app-frontend-prod`
   - `service-api-staging`
   - `config-infrastructure`

2. **Team Assignment**: Assign repositories to appropriate teams
3. **Documentation**: Include README files with deployment instructions

### Performance

1. **Repository Size**: Keep repositories under 1GB for optimal performance
2. **Git LFS**: Use Git Large File Storage for binary assets
3. **Shallow Clones**: Enable shallow cloning for faster operations

## Integration with Other Components

### Machine Deployment
Repository credentials are used when:
- Deploying code to machines
- Pulling Docker images
- Cloning repositories for builds
- Updating application versions

### Queue System
Tasks in the queue can reference repository credentials to:
- Clone specific branches
- Pull tagged releases
- Access private repositories
- Deploy containerized applications

### Storage Integration
Repository artifacts can be:
- Backed up to configured storage
- Cached for faster deployments
- Archived for compliance

## Troubleshooting

### Common Issues

#### Authentication Failures
- Verify credentials are correct
- Check repository permissions
- Ensure SSH keys have proper format
- Validate token expiration dates

#### Connection Timeouts
- Verify repository URL is accessible
- Check network connectivity
- Review firewall rules
- Test from bridge servers

#### Clone Failures
- Check disk space on target machines
- Verify Git is installed and updated
- Review repository size limits
- Check for Git LFS requirements

### Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| `Permission denied (publickey)` | Invalid SSH key | Regenerate and update SSH key |
| `Repository not found` | Incorrect URL or permissions | Verify repository URL and access |
| `Authentication failed` | Invalid credentials | Update username/password or token |
| `Timeout exceeded` | Network issues | Check connectivity and firewall |

## API Access

Repositories can be managed via the REST API:

```bash
# List repositories
GET /api/StoredProcedure/GetRepositories?teamName=Default

# Create repository
POST /api/StoredProcedure/CreateRepository
{
  "repositoryName": "my-app",
  "teamName": "Default",
  "repositoryUrl": "git@github.com:user/repo.git",
  "vaultData": {
    "credentials": "encrypted:..."
  }
}

# Update repository
POST /api/StoredProcedure/UpdateRepository
{
  "repositoryId": 123,
  "vaultData": {
    "credentials": "encrypted:..."
  }
}
```

## Related Documentation

- [Machine Management](./machines.md) - Deploy repositories to machines
- [Storage Configuration](./storage.md) - Store repository artifacts
- [Schedule Management](./schedules.md) - Automate repository operations
- [Marketplace](../marketplace.md) - Share repositories as templates