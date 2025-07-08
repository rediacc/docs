---
sidebar_position: 1
---

# Getting Started with Rediacc Console

This step-by-step tutorial will guide you through your first experience with the Rediacc Console, from login to deploying your first application.

## Prerequisites

Before starting, ensure you have:
- A Rediacc account with valid credentials
- Access to at least one team
- Basic understanding of SSH and Docker

## Step 1: Logging In

### 1.1 Access the Console

Navigate to your Rediacc Console URL:
```
http://localhost:7322/console/
```

### 1.2 Enter Credentials

1. **Email**: Enter your registered email address
2. **Password**: Enter your password
3. **Client-Side Encryption Password**: If prompted, enter your encryption password

:::tip
The encryption password is used to secure your vault data and is never sent to Rediacc servers.
:::

### 1.3 Complete Login

Click **Sign In** to access the dashboard.

## Step 2: Understanding the Dashboard

Upon login, you'll see the main dashboard with several key sections:

### 2.1 Account Health
Shows the overall status of your infrastructure:
- Resource limits
- Usage warnings
- Plan status

### 2.2 Queue Overview
Real-time view of task execution:
- Pending tasks
- Processing tasks
- Completed tasks
- Failed tasks

### 2.3 Resource Usage
Visual representation of resource consumption:
- Bridges
- Machines
- Regions
- Repositories
- Storage
- Teams
- Users

### 2.4 Recent Activity
Audit log showing recent operations in your account.

## Step 3: Adding Your First Machine

### 3.1 Navigate to Resources

1. Click **Resources** in the sidebar
2. Ensure you're on the **Machines** tab

### 3.2 Add Machine

1. Click **Add Machine**
2. Fill in the basic information:

```yaml
Machine Name: my-first-server
Team: Select your team
Region: Default Region
Bridge: Global Bridges
```

### 3.3 Configure Connection

Enter your server details:

```yaml
IP Address: 192.168.1.100
SSH Port: 22
Username: ubuntu
Datastore Path: /opt/rediacc
```

### 3.4 Add SSH Key

1. Generate an SSH key pair if needed:
   ```bash
   ssh-keygen -t ed25519 -f rediacc_key
   ```

2. Add the public key to your server:
   ```bash
   ssh-copy-id -i rediacc_key.pub ubuntu@192.168.1.100
   ```

3. Paste the private key in the console

### 3.5 Test and Save

1. Click **Test Connection**
2. Verify the connection succeeds
3. Click **Save**

## Step 4: Creating a Repository Configuration

### 4.1 Switch to Repositories Tab

1. In Resources, click **Repo (Credentials)**
2. Click **Create Repo (Credentials)**

### 4.2 Configure Git Repository

For a GitHub repository:

```yaml
Repository Name: my-app
Repository Type: Git
URL: https://github.com/username/my-app.git
Team: Your team name
```

### 4.3 Add Authentication

Choose one method:

**Personal Access Token:**
1. Generate a token on GitHub
2. Enter the token in the credentials field

**SSH Key:**
1. Add your SSH key to GitHub
2. Use the SSH URL format
3. Paste the private key

### 4.4 Save Repository

Click **Save** to store the configuration.

## Step 5: Deploying from Marketplace

### 5.1 Navigate to Marketplace

Click **Marketplace** in the sidebar.

### 5.2 Choose a Template

For this tutorial, select **Nginx** (a simple web server):

1. Find the Nginx card
2. Click **Preview** to see details
3. Click **Deploy**

### 5.3 Configure Deployment

1. **Name**: my-nginx-server
2. **Machine**: Select your newly added machine
3. **Repository**: Create a new repo or select existing
4. **Port**: 8080 (or your preferred port)

### 5.4 Deploy

1. Review the configuration
2. Click **Deploy Now**
3. Monitor the deployment in the Queue section

## Step 6: Monitoring Your Deployment

### 6.1 Check Queue Status

1. Click **Queue** in the sidebar
2. Find your deployment task
3. Monitor progress:
   - Yellow: Pending
   - Blue: Processing
   - Green: Completed
   - Red: Failed

### 6.2 View Logs

Click on the queue item to see:
- Execution logs
- Error messages (if any)
- Completion status

### 6.3 Verify Deployment

1. Navigate to Resources → Machines
2. Click **Remote** on your machine
3. Run verification commands:
   ```bash
   docker ps
   curl http://localhost:8080
   ```

## Step 7: Setting Up Automated Backups

### 7.1 Configure Storage

1. Go to Resources → Storage
2. Click **Add Storage**
3. Configure S3 storage:

```yaml
Storage Name: backup-storage
Type: S3
Bucket: my-backups
Region: us-east-1
Access Key: YOUR_ACCESS_KEY
Secret Key: YOUR_SECRET_KEY
```

### 7.2 Create Backup Schedule

1. Go to Resources → Schedules
2. Click **Add Schedule**
3. Configure:

```yaml
Schedule Name: daily-backup
Cron Expression: 0 2 * * *
Machine: my-first-server
Script: backup.sh
Storage: backup-storage
```

## Step 8: Managing Users and Teams

### 8.1 Access System Settings

1. Click **System** in the sidebar
2. Navigate to the Users tab

### 8.2 Create a New User

1. Click **Create User**
2. Fill in details:
   - Email address
   - Permission group
   - Team assignment

### 8.3 Create a Team

1. Switch to Teams tab
2. Click **Create Team**
3. Configure:
   - Team name
   - Team vault settings
   - Member assignments

## Common Tasks Quick Reference

### Viewing Audit Logs
**Audit** → Filter by date/type → Export if needed

### Checking System Architecture
**Architecture** → Interactive view of your infrastructure

### Managing Permissions
**System** → **Permissions** → Configure role-based access

### Emergency Actions
**System** → **Danger Zone** → Block users, export vaults, etc.

## Troubleshooting

### Can't Connect to Machine

1. Verify SSH key is correct
2. Check firewall rules
3. Ensure machine is accessible
4. Run Connectivity Test

### Deployment Failed

1. Check queue logs
2. Verify repository credentials
3. Ensure Docker is installed
4. Check disk space

### Permission Denied

1. Verify user permissions
2. Check team assignments
3. Review vault encryption settings

## Best Practices

1. **Regular Backups**: Set up automated backups for all critical data
2. **Access Control**: Use teams to organize access
3. **Monitoring**: Check dashboard regularly
4. **Documentation**: Document your infrastructure in vault notes
5. **Security**: Rotate SSH keys and tokens regularly

## Next Steps

Now that you've completed the basic setup:

1. [Explore Advanced Queue Features](../queue.md)
2. [Set Up Complex Deployments](./advanced-deployments.md)
3. [Configure Monitoring](./monitoring-setup.md)
4. [Implement Security Best Practices](../authentication.md#security-best-practices)

## Getting Help

If you encounter issues:

1. Check the [Known Issues](../known-issues.md) page
2. Review audit logs for error details
3. Contact your system administrator
4. Submit a support ticket

Congratulations! You've successfully set up your first Rediacc infrastructure. Continue exploring the console to discover more powerful features.