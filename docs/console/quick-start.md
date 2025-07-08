---
sidebar_position: 2
---

# Quick Start Guide

Get up and running with the Rediacc Console in minutes. This guide covers the essential steps to start managing your infrastructure through the web interface.

## Prerequisites

Before you begin:
- Valid Rediacc account credentials
- Supported web browser (Chrome, Firefox, Safari, or Edge)
- Network access to the console URL
- Appropriate permissions for your intended tasks

## Step 1: Access the Console

1. Open your web browser
2. Navigate to your Rediacc Console URL:
   ```
   https://your-domain.com/console/
   ```
   Or for local development:
   ```
   http://localhost:7322/console/
   ```

## Step 2: Log In

1. Enter your **email address**
2. Enter your **password**
3. If vault encryption is enabled, enter your **client-side encryption password**
4. Click **Sign In**

> **Note**: If you see a warning about vault encryption not being enabled, the encryption password field will be ignored.

## Step 3: Navigate the Dashboard

After login, you'll see the main dashboard with:

- **Account Health**: System status overview
- **Queue Overview**: Current task processing status
- **Resource Usage**: Infrastructure utilization
- **Recent Activity**: Latest system events

## Step 4: Basic Operations

### Managing Resources

1. Click **Resources** in the sidebar
2. Select your team from the dropdown
3. View your machines, repositories, and storage
4. Click **Add Machine** to add new infrastructure

### Deploying from Marketplace

1. Click **Marketplace** in the sidebar
2. Browse available templates
3. Click **Deploy** on your chosen template
4. Configure and launch

### Viewing Queue Status

1. Click **Queue** in the sidebar
2. Filter by team or status
3. View active, completed, and failed tasks
4. Click on a task for detailed information

### Checking Audit Logs

1. Click **Audit** in the sidebar
2. Set date range for your search
3. Filter by entity type or user
4. Export logs for compliance

### System Configuration

1. Click **System** in the sidebar
2. Manage users and teams
3. Configure regions and bridges
4. Access danger zone for critical operations

## Common Tasks

### Adding a New Machine

1. Navigate to **Resources**
2. Click **Add Machine**
3. Fill in:
   - Machine name
   - IP address
   - SSH credentials
   - Bridge assignment
4. Test connectivity
5. Save configuration

### Creating a Team

1. Go to **System** > **Teams** tab
2. Click **Create Team**
3. Enter team name
4. Add team members
5. Configure team vault

### Monitoring Queue Items

1. Open **Queue** page
2. Use filters to find specific tasks
3. Check status indicators:
   - 🕐 Pending (yellow)
   - 🔄 Processing (blue)
   - ✅ Completed (green)
   - ❌ Failed (red)

### Exporting Audit Logs

1. Navigate to **Audit**
2. Set date range
3. Apply filters as needed
4. Click **Export**
5. Choose format (CSV, JSON, or PDF)

## Tips for Success

### Navigation Shortcuts

- Click the Rediacc logo to return to dashboard
- Use the hamburger menu to collapse sidebar
- Toggle Expert Mode for advanced features
- Switch themes with the sun/moon icon

### Performance Tips

- Use filters to reduce data loads
- Paginate through large result sets
- Export data for offline analysis
- Refresh only when necessary

### Security Best Practices

- Log out when finished
- Don't share credentials
- Use strong passwords
- Monitor audit logs regularly

## Getting Help

### In-Console Help

- Hover over icons for tooltips
- Check information icons (ℹ️) for context
- Review error messages carefully
- Use the notification bell for alerts

### Additional Resources

- [Detailed Console Documentation](./introduction.md)
- [Authentication Guide](./authentication.md)
- [Resource Management](./resources/index.md)
- [System Settings](./system.md)

### Support Channels

- Internal IT helpdesk
- System administrator
- Rediacc documentation
- Community forums

## Next Steps

Now that you're familiar with the basics:

1. **Explore each section** to understand available features
2. **Set up your resources** according to your infrastructure
3. **Configure teams** for proper access control
4. **Create schedules** for automated tasks
5. **Monitor queues** to ensure smooth operations

Remember to check the [Known Issues](./known-issues.md) page if you encounter any problems.