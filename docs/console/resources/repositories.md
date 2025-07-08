---
sidebar_position: 2
---

# Repository Management

The Repository Management interface allows you to configure and manage various types of repositories that can be deployed and maintained through the Rediacc system. This includes Git repositories, Docker registries, and other version control systems.

## Overview

Repositories in Rediacc serve as the source for your applications and services. They contain the code, configuration files, and deployment scripts that the system uses to manage your infrastructure.

![Repository Management](../assets/resources-repositories.png)

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

## Creating a Repository

To add a new repository:

1. Navigate to **Resources** in the main menu
2. Select the **Repo (Credentials)** tab
3. Click **Create Repo (Credentials)**
4. Fill in the repository details:

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

## Managing Repositories

### Editing Repository Details

1. Click the **Edit** button next to the repository
2. Update the necessary fields
3. Click **Save** to apply changes

:::caution
Changing repository URLs or authentication credentials may affect running deployments. Ensure all dependent services are updated accordingly.
:::

### Viewing Repository History

The **Trace** button provides access to:
- Authentication attempts
- Clone/pull operations
- Deployment history
- Error logs

### Deleting a Repository

1. Click the **Delete** button
2. Confirm the deletion
3. Note: This removes the repository configuration but does not affect the actual repository

:::warning
Deleting a repository configuration will prevent any services using it from updating. Ensure no active deployments depend on the repository before deletion.
:::

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

## Integration with Marketplace

Repositories can be used as templates in the Marketplace:

1. Create a repository with a `rediacc.yaml` configuration
2. Define deployment parameters and requirements
3. Submit for Marketplace inclusion (admin approval required)

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