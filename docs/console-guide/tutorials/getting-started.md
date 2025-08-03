---
sidebar_position: 1
---

# Getting Started with Rediacc Console

This comprehensive tutorial will guide you through your first steps with the Rediacc Console, from initial login to deploying your first application. By the end of this guide, you'll be comfortable navigating the console and performing essential tasks.

## Prerequisites

Before starting this tutorial, ensure you have:
- Valid Rediacc account credentials (email and password)
- Access to the Rediacc Console URL
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of SSH and Docker concepts
- At least one Linux server with SSH access (for machine setup)

## Step 1: Your First Login

### 1.1 Navigate to the Console

Open your web browser and navigate to:
```
http://localhost:7322/console-guide/
```

For production environments, use your organization's console URL (e.g., `https://console.yourcompany.com`).

### 1.2 Understanding the Login Screen

The login screen has three main components:

1. **Email Field**: Your registered email address
2. **Password Field**: Your account password  
3. **Client-Side Encryption Password**: Used for vault encryption (may be optional based on company settings)

Additionally, you'll notice:
- **Language Selector**: Change the interface language (bottom of form)
- **Theme Toggle**: Switch between light and dark modes (top right)
- **Registration Link**: For new users (if enabled by your organization)

:::tip Language Selection
The console supports multiple languages including English, Spanish, French, German, Chinese, Japanese, and more. Select your preferred language before logging in for the best experience.
:::

### 1.3 Complete the Login Process

1. Enter your email address (e.g., `admin@rediacc.io`)
2. Enter your password
3. If the encryption password field appears:
   - Enter your organization's shared encryption password
   - This password protects all vault data and is never sent to Rediacc servers
4. Click **Sign In**

:::warning First-Time Login
If this is your first login:
- Your administrator should have provided temporary credentials
- You may be prompted to change your password immediately
- Store the encryption password securely - it cannot be recovered if lost
:::

:::info Login Troubleshooting
Common login issues:
- **"Invalid credentials"**: Double-check email and password
- **"Encryption password required"**: Contact your admin for the organization's encryption password
- **"Account locked"**: Too many failed attempts - contact administrator
- **"Session expired"**: Clear browser cache and try again
:::

## Step 2: Exploring the Dashboard

After successful login, you'll arrive at the main dashboard - your command center for managing infrastructure.

### 2.1 Dashboard Layout Overview

The interface is organized into distinct areas:

**Header Bar** (Top):
- **Company Name & Tier**: Shows "REDIACC.IO" and your subscription level (e.g., "Elite")
- **Language Selector**: Change interface language on the fly
- **Theme Toggle**: Switch between light/dark modes
- **Notification Bell**: System alerts and important messages

**Sidebar Navigation** (Left):
- **Logo**: Click to return to dashboard from anywhere
- **Primary Sections**:
  - 📦 **Resources**: Infrastructure management
  - 🛒 **Marketplace**: Pre-built templates
  - ⚡ **Queue**: Task monitoring
  - 📜 **Audit**: Activity logs
- **System Sections** (below separator):
  - 🔧 **Architecture**: Infrastructure visualization
  - ⚙️ **System**: Administrative settings
- **User Profile**: Shows email, company, and Expert mode toggle
- **Logout Button**: Secure session termination

### 2.2 Account Health Widget

Located at the top-left, this provides instant system status:

**Status Indicators**:
- 🟢 **Good**: All systems operational, no issues
- 🟡 **Warning**: Some resources approaching limits
- 🔴 **Critical**: Immediate action required

**Key Metrics**:
- Resources at limit (should be 0)
- Resources near limit (monitor if > 0)
- Plan sufficiency assessment

### 2.3 Queue Overview Widget

Real-time task execution summary:

- **Pending** (🕐): Tasks waiting for processing
- **Processing** (🔄): Currently executing tasks
- **Completed** (✅): Successfully finished tasks
- **Failed** (❌): Tasks that encountered errors

Click "Manage" to jump to detailed queue view.

### 2.4 Resource Usage Meters

Visual progress bars showing consumption vs. limits:

| Resource | Description | Typical Limits |
|----------|-------------|----------------|
| **Bridges** | Task processors | 50-200 |
| **Machines** | Compute nodes | 200-1000 |
| **Regions** | Geographic groups | 10-50 |
| **Repos** | Code repositories | 100-500 |
| **Schedules** | Automated tasks | 15-100 |
| **Storage** | Backup destinations | 100-500 |
| **Teams** | Organizational units | 25-100 |
| **Users** | Account members | 25-500 |

Each meter shows:
- Current usage (e.g., "2 / 50")
- Visual fill percentage
- Green checkmark when healthy

### 2.5 Recent Activity Feed

Live audit log showing latest operations:

**Event Types**:
- 🔵 **Info**: General operations (TOKEN VALIDATED)
- 🟢 **Success**: Completed actions (REQUEST CREATED)
- 🟡 **Warning**: Notable events
- 🔴 **Error**: Failed operations

Each entry shows:
- Event type and description
- Category (Authentication, Team, Request)
- Timestamp (relative and absolute)
- User attribution
- Detailed message

### 2.6 Queue Details Section

Two visualization panels:

**Today's Activity**:
- Created: New tasks today
- Completed: Finished tasks
- Cancelled: Stopped tasks
- Failed: Error count

**Machine Queue Status**:
- Table showing queue distribution per machine
- Pending and active counts
- Quick identification of bottlenecks

**Priority Breakdown**:
- Visual representation of task priorities
- Helps identify if high-priority tasks are queued

### 2.7 Subscription & Plans

Bottom-right panel showing:
- Current subscription tier
- Active license count
- Days remaining
- Monthly cost
- Available upgrade options

### 2.8 Interface Controls

**Expert Mode Toggle** (in sidebar):
- Located under user profile
- Enables advanced features
- Shows additional technical details
- Recommended for experienced users

**Theme Switcher**:
- Sun icon for light mode
- Moon icon for dark mode
- Persists across sessions

**Language Selector**:
- Dropdown with flag icons
- Instant translation
- No page reload required

## Step 3: Setting Up Your First Team

Before adding machines, you need a team - the primary organizational unit in Rediacc.

### 3.1 Navigate to Team Management

1. Click **System** in the sidebar
2. Click the **Teams** tab
3. You'll see a list of existing teams (if any)

### 3.2 Create a New Team

1. Click **Create Team** button
2. Fill in the team details:
   - **Team Name**: Use a descriptive name (e.g., "Development Team", "Production Team")
   - **Description**: Brief purpose of the team
   - **Initial Members**: Can be added later
3. Click **Save**

### 3.3 Configure Team Vault

The team vault stores shared credentials securely:

1. Find your new team in the list
2. Click **Configure Vault**
3. Add SSH credentials:
   ```json
   {
     "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----\n[Your private key content]\n-----END OPENSSH PRIVATE KEY-----",
     "SSH_PUBLIC_KEY": "ssh-ed25519 AAAAC3... your-comment",
     "DEFAULT_USER": "ubuntu"
   }
   ```
4. Add any additional team-specific configuration
5. Click **Save Vault**

:::info Vault Security
- Team vaults are encrypted using your organization's encryption password
- Only team members can access vault contents
- Vaults are versioned - changes are tracked
- Never share vault contents outside secure channels
:::

## Step 4: Adding Your First Machine

Now let's add a compute resource where tasks will be executed.

### 4.1 Understanding Machine Prerequisites

Before adding a machine, ensure your target server has:
- SSH access enabled
- Docker installed and running
- A user with sudo privileges
- Port 22 (SSH) accessible from the bridge
- At least 10GB free disk space

### 4.2 Navigate to Machine Management

1. Click **Resources** in the sidebar
2. Select your team from the dropdown (e.g., "Private Team")
3. Ensure you're on the **Machines** tab (desktop icon)

### 4.3 Add a New Machine

1. Click **➕ Add Machine** button
2. Fill in the configuration:

**Basic Information**:
```yaml
Machine Name: dev-server-01  # Use consistent naming
Team: Development Team       # Select your team
Region: Default Region       # Geographic/logical grouping
Bridge: Global Bridges       # For cloud-managed execution
```

### 4.4 Configure Machine Vault

The machine vault contains connection details:

1. In the **Machine Vault** section, configure:
   ```json
   {
     "ip": "192.168.1.100",
     "user": "ubuntu",
     "port": 22,
     "datastore": "/opt/rediacc/datastore"
   }
   ```

2. **Important fields**:
   - `ip`: Server's IP address (public or private)
   - `user`: SSH username
   - `port`: SSH port (default: 22)
   - `datastore`: Where Rediacc stores data on the machine

### 4.5 Prepare SSH Access

If you haven't already set up SSH keys:

1. **Generate a new SSH key pair** (on your local machine):
   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/rediacc_key -C "rediacc-access"
   ```

2. **Copy the public key to your server**:
   ```bash
   ssh-copy-id -i ~/.ssh/rediacc_key.pub ubuntu@192.168.1.100
   ```

3. **Verify access works**:
   ```bash
   ssh -i ~/.ssh/rediacc_key ubuntu@192.168.1.100 'echo "SSH access confirmed"'
   ```

4. **Add the private key to your team vault** (if not already done)

### 4.6 Test and Save

1. Click **Test Connectivity** button
2. Wait for the test to complete
3. Look for success indicators:
   - ✅ SSH connection established
   - ✅ Docker is installed
   - ✅ User has appropriate permissions
   - ✅ Datastore path is writable

4. If all tests pass, click **Save**

:::troubleshooting Connection Test Failed?
**Common issues and solutions**:

**SSH Connection Failed**:
- Verify IP address is correct and reachable
- Check firewall allows port 22 (or custom SSH port)
- Ensure SSH key in team vault matches server's authorized_keys
- Verify username exists on the server

**Docker Not Found**:
```bash
# Install Docker on Ubuntu/Debian:
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
# Log out and back in for group changes
```

**Permission Denied**:
```bash
# Ensure user has sudo access:
sudo usermod -aG sudo ubuntu
# Or add specific sudoers entry:
echo "ubuntu ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/ubuntu
```

**Datastore Path Issues**:
```bash
# Create and set permissions:
sudo mkdir -p /opt/rediacc/datastore
sudo chown -R ubuntu:ubuntu /opt/rediacc
```
:::

### 4.7 Verify Machine Addition

After saving:
1. You'll return to the machine list
2. Your new machine appears with status indicators
3. Queue items column shows current workload
4. Last updated shows recent activity
5. Actions available: Edit, Remote, Trace, Delete

## Step 5: Creating Your First Repository

Repositories store your application code and deployment configurations.

### 5.1 Understanding Repository Types

Rediacc supports multiple repository types:
- **Git**: GitHub, GitLab, Bitbucket, or any Git server
- **Docker Registry**: Docker Hub, private registries
- **OCI Registry**: Container registries following OCI spec
- **File Storage**: Direct file access repositories

### 5.2 Navigate to Repository Management

1. Stay in **Resources** section
2. Click the **Repo (Credentials)** tab (inbox icon)
3. You'll see any existing repositories

### 5.3 Add a Git Repository

Let's add a GitHub repository as an example:

1. Click **➕ Add Repository**
2. Configure the repository:

**Basic Settings**:
```yaml
Repository Name: my-web-app     # Descriptive name
Repository Type: Git            # Select from dropdown
Team: Development Team          # Your team
Description: Main web application repository
```

**Repository URL**:
- For public repos: `https://github.com/username/repo.git`
- For private repos: Use HTTPS or SSH URL

### 5.4 Configure Authentication

For private repositories, add credentials to the vault:

**Option 1: Personal Access Token (Recommended)**
```json
{
  "auth_type": "token",
  "username": "your-github-username",
  "token": "ghp_xxxxxxxxxxxxxxxxxxxx"
}
```

**Option 2: SSH Key**
```json
{
  "auth_type": "ssh",
  "ssh_private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\n[key content]\n-----END OPENSSH PRIVATE KEY-----"
}
```

**Option 3: Username/Password (Not recommended)**
```json
{
  "auth_type": "basic",
  "username": "your-username",
  "password": "your-password"
}
```

### 5.5 Generate Access Tokens

**For GitHub**:
1. Go to Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Generate and copy token

**For GitLab**:
1. Go to User Settings → Access Tokens
2. Create token with `read_repository` scope
3. Copy the token

**For Bitbucket**:
1. Go to Personal settings → App passwords
2. Create app password with repository read access
3. Use username and app password

### 5.6 Test and Save

1. Click **Test Connection** to verify access
2. If successful, click **Save**
3. Repository appears in your list

:::tip Repository Best Practices
- Use access tokens instead of passwords
- Limit token permissions to minimum required
- Rotate tokens regularly (every 90 days)
- Use separate repositories for different applications
- Document repository purpose in description
:::

## Step 6: Deploying from the Marketplace

The Marketplace provides pre-configured application templates for quick deployment.

### 6.1 Explore the Marketplace

1. Click **Marketplace** (🛒) in the sidebar
2. You'll see templates organized by category:
   - **Databases**: MongoDB, PostgreSQL, MySQL, MSSQL
   - **Quick Start**: Nginx, WordPress
   - **Monitoring**: Prometheus + Grafana
   - **Caching**: Redis
   - **Messaging**: Kafka, RabbitMQ
   - **Authentication**: Keycloak
   - **Search**: Elasticsearch
   - **Development**: GitLab
   - **Management**: Portainer
   - **API Gateway**: Kong
   - **Networking**: CloudFlare tunnels

### 6.2 Understanding Template Cards

Each template shows:
- **Icon**: Visual identifier
- **Name**: Template name
- **Description**: What it does
- **Difficulty**: Beginner/Intermediate/Advanced
- **Tags**: Technology stack, deployment type
- **Actions**: Preview and Deploy buttons

### 6.3 Deploy Your First Application

Let's deploy Nginx as a simple example:

1. Find **Nginx** in the Quick Start section
2. Click **Preview** to see:
   - Detailed description
   - Required resources
   - Configuration options
   - Docker compose contents
3. Click **Deploy**

### 6.4 Configure the Deployment

The deployment wizard appears with several steps:

**Step 1: Basic Configuration**
```yaml
Deployment Name: my-first-nginx      # Unique identifier
Team: Development Team               # Select your team
Machine: dev-server-01              # Your target machine
Repository: Create new              # Or select existing
```

**Step 2: Repository Setup** (if creating new)
```yaml
Repository Name: nginx-demo
Repository Type: File
Description: Nginx deployment configuration
```

**Step 3: Application Settings**
```yaml
Port Mapping: 8080:80              # Host:Container
Environment Variables:
  - NGINX_HOST: example.com
  - NGINX_PORT: 80
Volume Mounts:
  - ./html:/usr/share/nginx/html
```

**Step 4: Advanced Options** (optional)
```yaml
Priority: Normal                   # Queue priority
Restart Policy: unless-stopped     # Container restart
Memory Limit: 512m                # Resource constraints
CPU Limit: 0.5                    # Half CPU core
```

### 6.5 Review and Deploy

1. **Review Configuration**: Check all settings
2. **Deployment Preview**: See generated docker-compose.yml
3. **Confirm Deployment**: Click **Deploy Now**

### 6.6 Monitor Deployment Progress

After clicking deploy:

1. You're redirected to the **Queue** page
2. Find your deployment task (look for your deployment name)
3. Monitor the status progression:
   - 🕐 **PENDING**: Waiting for bridge to pick up
   - 🔄 **ASSIGNED**: Bridge claimed the task
   - ⚡ **PROCESSING**: Deployment in progress
   - ✅ **COMPLETED**: Successfully deployed
   - ❌ **FAILED**: Error occurred (check logs)

### 6.7 View Deployment Logs

1. Click on the **Task ID** to expand details
2. Click **Trace** button to see:
   - Command execution log
   - Docker pull progress
   - Container startup messages
   - Any errors or warnings

Example successful log:
```
[2025-01-08 15:30:45] Starting deployment: my-first-nginx
[2025-01-08 15:30:46] Pulling nginx:latest...
[2025-01-08 15:30:52] Creating container...
[2025-01-08 15:30:53] Starting nginx_demo_1...
[2025-01-08 15:30:54] Container started successfully
[2025-01-08 15:30:54] Nginx is accessible at http://192.168.1.100:8080
[2025-01-08 15:30:55] Deployment completed successfully
```

### 6.8 Verify Your Deployment

1. **Option 1: Browser Test**
   - Open `http://[machine-ip]:8080`
   - You should see the Nginx welcome page

2. **Option 2: Remote Terminal**
   - Go to Resources → Machines
   - Click **Remote** button on your machine
   - In the terminal, run:
     ```bash
     # Check container status
     docker ps
     
     # Test nginx locally
     curl http://localhost:8080
     
     # View container logs
     docker logs nginx_demo_1
     ```

3. **Option 3: Command Line Test**
   ```bash
   curl http://192.168.1.100:8080
   ```

:::success Deployment Success!
Congratulations! You've successfully deployed your first application using Rediacc. The Nginx server is now running on your machine and accessible via the configured port.
:::

### 6.9 Understanding What Happened

Behind the scenes, Rediacc:
1. Created a repository on your machine
2. Generated a docker-compose.yml file
3. Pulled the Nginx Docker image
4. Started the container with your configuration
5. Set up port mappings and volumes
6. Ensured the container auto-starts

### 6.10 Next Marketplace Deployments

Try these templates next:
- **PostgreSQL**: Database with web admin
- **WordPress**: Full CMS with MySQL
- **Prometheus + Grafana**: Monitoring stack
- **GitLab**: Self-hosted Git service

## Step 7: Understanding the Queue System

The queue system is the heart of Rediacc's task execution. Let's explore it in detail.

### 7.1 Navigate to Queue Management

1. Click **Queue** (⚡) in the sidebar
2. You'll see the queue dashboard with filters and statistics

### 7.2 Queue Filtering Options

The queue page provides powerful filtering:

**Team Filter**:
- Select specific team or "All Teams"
- Only see tasks for teams you have access to

**Status Filter**:
- All statuses (default)
- Specific status (Pending, Processing, etc.)

**Date Range**:
- Today, Last 7 days, Last 30 days
- Custom date range picker

**Task ID Search**:
- Direct GUID lookup
- Paste task ID from logs or API

**Additional Options**:
- ☑️ Include Completed (default on)
- ☐ Include Cancelled 
- ☐ Only Stale Items

### 7.3 Understanding Queue States

Each task progresses through states:

1. **PENDING** (🕐 Yellow)
   - Task created and waiting
   - No bridge has claimed it yet
   - May wait based on bridge availability

2. **ASSIGNED** (🔵 Blue)
   - Bridge has claimed the task
   - Preparation in progress
   - Usually brief state

3. **PROCESSING** (⚡ Blue spinning)
   - Active execution on machine
   - Can see partial results
   - May take seconds to hours

4. **COMPLETED** (✅ Green)
   - Task finished successfully
   - Full results available
   - Permanent record kept

5. **FAILED** (❌ Red)
   - Task encountered an error
   - Check logs for details
   - May be retryable

6. **CANCELLING** (🔄 Orange)
   - Cancellation requested
   - Bridge stopping execution
   - Cleanup in progress

7. **CANCELLED** (⭕ Gray)
   - Successfully stopped
   - Partial results may exist
   - No further processing

8. **STALE** (⚠️ Yellow warning)
   - No updates for extended period
   - Bridge may have crashed
   - Requires investigation

### 7.4 Queue Item Details

Each queue item shows:

**Column Information**:
- **Task ID**: Unique identifier (click to copy)
- **Status**: Current state with icon
- **Priority**: Highest, High, Normal, Low
- **Age**: Time since creation
- **Team**: Owning team
- **Machine**: Target machine with icon
- **Region**: Geographic/logical location
- **Bridge**: Processing bridge
- **Response**: Has results (Yes/No)
- **Retries**: Attempt count (0/2 format)
- **Created By**: User who initiated
- **Created**: Exact timestamp

**Row Actions**:
- **Trace**: View detailed execution log
- **Cancel**: Stop active task (if applicable)

### 7.5 Viewing Task Traces

Click **Trace** on any task to see:

1. **Execution Timeline**:
   ```
   2025-01-08 15:30:45 - Task created by admin@rediacc.io
   2025-01-08 15:30:46 - Assigned to bridge "Global Bridges"
   2025-01-08 15:30:47 - Execution started on machine dev-server-01
   2025-01-08 15:30:48 - Running: docker-compose up -d
   2025-01-08 15:31:02 - Container started successfully
   2025-01-08 15:31:03 - Task completed
   ```

2. **Command Output**:
   - STDOUT (standard output)
   - STDERR (error output)
   - Exit codes

3. **Machine Information**:
   - Connection details
   - Environment variables
   - Working directory

### 7.6 Managing Queue Priority

Priority affects processing order:

**Priority Levels**:
1. **Highest**: Emergency tasks, processed first
2. **High**: Important operations
3. **Normal**: Standard priority (default)
4. **Low**: Background tasks, processed last

**Setting Priority**:
- During task creation
- In deployment wizards
- Via API calls

### 7.7 Queue Performance Tips

**Optimal Queue Management**:
1. **Distribute Load**: Use multiple bridges for parallel processing
2. **Set Appropriate Priorities**: Don't make everything "Highest"
3. **Monitor Queue Depth**: High pending count indicates bottleneck
4. **Use Regional Bridges**: For geo-distributed infrastructure
5. **Implement Retries**: For transient failures

**Warning Signs**:
- Consistently high pending count
- Many stale items
- High failure rate
- Uneven bridge utilization

## Step 8: Monitoring with Audit Logs

Audit logs provide complete visibility into all system activities.

### 8.1 Access the Audit System

1. Click **Audit** (📜) in the sidebar
2. The audit page loads with recent events

### 8.2 Understanding Audit Events

**Event Categories**:
- **Authentication**: Login/logout, token validation, session management
- **Team Operations**: Team creation, modification, member changes
- **Resource Management**: Machine/repo/storage CRUD operations
- **Queue Activities**: Task creation, status changes, completions
- **System Changes**: Configuration updates, permission changes
- **Security Events**: Failed logins, access denials, suspicious activity

**Event Severity Levels**:
- 🔵 **INFO**: Normal operations
- 🟢 **SUCCESS**: Successful completions
- 🟡 **WARNING**: Notable but not critical
- 🔴 **ERROR**: Failures requiring attention
- 🟣 **CRITICAL**: Security or system issues

### 8.3 Filtering Audit Logs

**Available Filters**:

1. **Date Range**:
   - Preset: Today, Yesterday, Last 7/30 days
   - Custom: Specific date range
   - Time: Down to hour/minute precision

2. **Entity Type**:
   - Authentication events only
   - Team operations
   - Machine changes
   - Queue activities
   - All types (default)

3. **User Filter**:
   - Specific user's actions
   - System operations
   - Bridge activities

4. **Severity Filter**:
   - Critical only
   - Errors and above
   - All severities

5. **Text Search**:
   - Search in event descriptions
   - Find specific IPs
   - Locate resource names

### 8.4 Reading Audit Entries

Each entry contains:

```
[ICON] EVENT_TYPE | Category | Time ago
Event #ID • By user@email.com
Detailed description of what occurred, including relevant IDs and values
```

Example entries:
```
🔵 TOKEN VALIDATED | Authentication | 2 minutes ago
Authentication #1234 • By admin@rediacc.io
Token validated for user: admin@rediacc.io, IP: 192.168.1.50, IsOldToken: 0

🟢 MACHINE CREATED | Team | 5 minutes ago
Machine #5678 • By admin@rediacc.io
Machine created: dev-server-01, Team: Development Team, Region: Default

❌ QUEUE ITEM FAILED | Queue | 10 minutes ago
Queue #9012 • By system
Task failed on machine prod-01: Docker service not running
```

### 8.5 Exporting Audit Data

1. Apply your desired filters
2. Click **Export** dropdown
3. Choose format:

**CSV Format**:
- Best for Excel/spreadsheets
- Includes all columns
- Easy filtering and sorting

**JSON Format**:
- Programmatic processing
- Complete data structure
- Integration with tools

**PDF Format**:
- Compliance reports
- Management summaries
- Archived records

### 8.6 Audit Best Practices

**Regular Review**:
1. Daily: Check for failures and errors
2. Weekly: Review access patterns
3. Monthly: Analyze trends and usage

**Security Monitoring**:
- Failed login attempts
- Unusual access times
- Permission changes
- New user creation
- Vault access

**Compliance Requirements**:
- Export monthly reports
- Archive for retention period
- Document investigations
- Track privileged actions

## Step 9: Basic Administration

Let's explore essential administrative tasks.

### 9.1 User Management

Navigate to **System** → **Users** tab:

**Creating Users**:
1. Click **Create User**
2. Fill in the form:
   ```yaml
   Email: newuser@company.com
   Display Name: John Smith
   Permission Group: Operators     # Choose appropriate level
   Default Team: Development Team  # Initial assignment
   Temporary Password: [Generated] # User must change on first login
   ```
3. Click **Create**

**Permission Groups**:
- **Administrators**: Full system access, all operations
- **Operators**: Manage resources, deploy apps, view logs
- **Viewers**: Read-only access, no modifications
- **Bridges**: System accounts for bridge authentication

**User Actions**:
- **Permissions**: Modify user's access level
- **Trace**: View user's activity history
- **Deactivate**: Disable account (preserves history)
- **Delete**: Remove user (admin only)

### 9.2 Team Management

Switch to **Teams** tab:

**Creating Teams**:
1. Click **Create Team**
2. Configure team:
   ```yaml
   Team Name: Mobile Development
   Description: iOS and Android app team
   Team Lead: john.smith@company.com
   Initial Members: [Select from user list]
   ```

**Team Vault Configuration**:
Each team has an encrypted vault for:
- SSH keys for machine access
- API tokens for repositories
- Database credentials
- Service passwords
- Custom configuration

Example team vault:
```json
{
  "SSH_PRIVATE_KEY": "-----BEGIN OPENSSH PRIVATE KEY-----...",
  "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx",
  "DOCKER_REGISTRY": "registry.company.com",
  "DOCKER_USERNAME": "deploy-bot",
  "DOCKER_PASSWORD": "secure-password",
  "SLACK_WEBHOOK": "https://hooks.slack.com/services/..."
}
```

### 9.3 Permission Management

Click **Permissions** tab:

**Understanding Permissions**:
- **Resource Permissions**: Create, read, update, delete resources
- **Queue Permissions**: Create tasks, view all queues, cancel any task
- **System Permissions**: User management, system configuration
- **Audit Permissions**: View logs, export data

**Creating Custom Groups**:
1. Click **Create Permission Group**
2. Name: "DevOps Engineers"
3. Select permissions:
   - ✓ All resource operations
   - ✓ Queue management
   - ✓ Audit log access
   - ✗ User management (admin only)

### 9.4 Managing Infrastructure

**Regions**:
1. In **Regions & Infrastructure** section
2. Create logical groupings:
   - Geographic: US-East, EU-West, APAC
   - Environmental: Development, Staging, Production
   - Purpose: Compute, Storage, Database

**Bridges**:
- **Global Bridges**: Managed by Rediacc, always available
- **Regional Bridges**: Dedicated to specific regions
- **Self-Managed**: Your own bridge instances

Bridge configuration:
```yaml
Bridge Name: prod-bridge-01
Type: Regional
Region: US-East Production
Management: Self-Managed
Capacity: 10 concurrent tasks
```

### 9.5 System Settings

**Company Vault**:
- Organization-wide settings
- Shared across all teams
- Master encryption password
- License keys

**Personal Settings**:
- User preferences
- Interface customization
- Notification settings
- API tokens

## Step 10: Understanding the Danger Zone

The Danger Zone contains powerful administrative actions. Access with caution!

### 10.1 Location and Access

1. Navigate to **System**
2. Scroll to bottom **⚠️ Danger Zone** section
3. These operations require administrator permissions

### 10.2 Available Actions

**Block User Requests**:
- Immediately blocks all non-admin users
- Terminates active sessions
- Emergency response tool
- Use during security incidents

**Export All Vaults**:
- Downloads all encrypted vault data
- Includes all teams, machines, repos
- Sensitive credential backup
- Store securely offline

**Encryption Password Settings**:
- Re-encrypt all vaults
- Force password rotation
- Sign out all users
- Cannot be undone

:::danger Critical Operations
These actions have system-wide impact. Always:
- Notify team before execution
- Have backups ready
- Document the reason
- Test in non-production first
:::

## Common Tasks Quick Reference

### Daily Operations

| Task | Navigation | Quick Steps |
|------|------------|-------------|
| **Check queue status** | Queue | Review pending/failed tasks |
| **Deploy application** | Marketplace → Template → Deploy | Select, configure, deploy |
| **Add new server** | Resources → Machines → Add | Configure SSH and test |
| **View recent activity** | Dashboard or Audit | Check for errors/warnings |
| **Remote terminal** | Resources → Machines → Remote | Direct SSH access |

### Weekly Maintenance

| Task | Navigation | Steps |
|------|------------|-------|
| **Review audit logs** | Audit → Filter last 7 days | Export if needed |
| **Check resource usage** | Dashboard → Usage meters | Plan for limits |
| **Update credentials** | Resources → Repos/Storage | Rotate tokens |
| **Team review** | System → Teams | Add/remove members |

### Administrative Tasks

| Task | Navigation | Authorization |
|------|------------|---------------|
| **Create user** | System → Users → Create | Admin only |
| **Modify permissions** | System → Permissions | Admin only |
| **Configure regions** | System → Regions | Admin only |
| **Emergency block** | System → Danger Zone | Admin + confirm |

## Troubleshooting Common Issues

### Connection Problems

**Machine connectivity test fails**:
```bash
# On the target machine, verify:
# 1. SSH service is running
sudo systemctl status ssh

# 2. Port 22 is open
sudo ufw status

# 3. User can connect
ssh -i /path/to/key user@localhost

# 4. Docker is installed
docker --version

# 5. Correct permissions
ls -la ~/.ssh/authorized_keys
```

**"Permission denied" errors**:
- Verify SSH key matches between team vault and server
- Check username is correct
- Ensure user has sudo privileges
- Verify datastore path permissions

### Deployment Issues

**Container fails to start**:
1. Check queue trace for specific error
2. Common causes:
   - Port already in use
   - Image pull failed
   - Insufficient resources
   - Invalid configuration

**Repository access denied**:
- Verify credentials in repo vault
- Check token hasn't expired
- Ensure repo URL is correct
- Test access manually

### Queue Problems

**Tasks stuck in PENDING**:
- No available bridges
- Bridge-machine assignment issue
- Check bridge status in System

**High failure rate**:
- Review common error patterns
- Check machine health
- Verify credentials are current
- Consider retry configuration

### Performance Issues

**Slow dashboard loading**:
- Large number of resources
- Clear browser cache
- Use filtering options
- Consider pagination settings

**Queue processing delays**:
- Add more bridges
- Distribute across regions
- Check bridge capacity
- Monitor machine resources

## Best Practices

### 🔒 Security

1. **Access Control**
   - Principle of least privilege
   - Regular permission audits
   - Remove inactive users
   - Use teams for organization

2. **Credential Management**
   - Rotate keys every 90 days
   - Use access tokens not passwords
   - Store securely in vaults
   - Never commit credentials

3. **Audit Compliance**
   - Weekly log reviews
   - Export monthly reports
   - Investigation documentation
   - Retention policy adherence

### 🚀 Performance

1. **Resource Organization**
   - Consistent naming conventions
   - Logical region grouping
   - Balanced bridge distribution
   - Regular cleanup

2. **Queue Optimization**
   - Appropriate priority usage
   - Retry configuration
   - Failure monitoring
   - Load distribution

3. **Monitoring Strategy**
   - Dashboard health checks
   - Queue depth alerts
   - Resource usage tracking
   - Failure rate monitoring

### 🛠️ Operational Excellence

1. **Documentation**
   - Infrastructure as code
   - Runbook maintenance
   - Change documentation
   - Knowledge sharing

2. **Testing**
   - Pre-production validation
   - Rollback procedures
   - Disaster recovery drills
   - Performance benchmarks

3. **Automation**
   - Scheduled operations
   - Event-driven workflows
   - API integration
   - CI/CD pipelines

## Next Steps

### Immediate Actions
1. ✅ Complete your machine setup
2. ✅ Deploy a test application
3. ✅ Invite team members
4. ✅ Configure backups

### This Week
1. 📋 Document your infrastructure
2. 🔄 Set up scheduled tasks
3. 📊 Create monitoring dashboards
4. 🔐 Review security settings

### This Month
1. 🎯 Optimize queue performance
2. 🌍 Plan multi-region deployment
3. 🤖 Implement automation
4. 📈 Analyze usage patterns

### Advanced Topics to Explore

1. **[Advanced Deployments](./advanced-deployments.md)**
   - Multi-container applications
   - Service dependencies
   - Rolling updates
   - Blue-green deployments

2. **[Monitoring Setup](./monitoring-setup.md)**
   - Prometheus integration
   - Custom dashboards
   - Alert configuration
   - Performance metrics

3. **[Security Hardening](./security-hardening.md)**
   - Network isolation
   - Secrets management
   - Compliance controls
   - Incident response

4. **[API Integration](../api-reference.md)**
   - Automation scripts
   - Custom workflows
   - Third-party integration
   - Webhook configuration

## Getting Help

### Self-Service Resources

1. **In-Console Help**
   - Hover over icons for tooltips
   - Info icons (ℹ️) provide context
   - Error messages include solutions
   - Notification bell for alerts

2. **Documentation**
   - [Console Overview](../introduction.md)
   - [Features Guide](../features-overview.md)
   - [Known Issues](../known-issues.md)
   - [API Reference](../api-reference.md)

3. **Community Resources**
   - User forums
   - Knowledge base
   - Video tutorials
   - Best practices

### Support Channels

**For technical issues**:
1. Check error messages and logs
2. Review troubleshooting guide
3. Search knowledge base
4. Contact support team

**For account issues**:
1. Verify permissions
2. Check subscription status
3. Contact account manager
4. Submit support ticket

**Emergency support**:
- 24/7 hotline (Elite plan)
- Priority ticket queue
- Direct engineer access
- SLA guarantees

## Conclusion

Congratulations! 🎉 You've completed the comprehensive getting started guide for Rediacc Console. You now have:

✅ **A working infrastructure** with machines and repositories configured

✅ **Your first deployment** running successfully

✅ **Understanding of core concepts** including teams, vaults, and queues

✅ **Basic administrative skills** for managing users and resources

✅ **Troubleshooting knowledge** to resolve common issues

### Remember

- **Start small**: Build confidence with simple deployments
- **Document everything**: Future you will thank present you
- **Ask questions**: No question is too basic
- **Share knowledge**: Help others in your organization
- **Stay secure**: Security is everyone's responsibility
- **Keep learning**: Rediacc is constantly evolving

### Your Journey Continues

This is just the beginning of your Rediacc journey. As you become more comfortable with the platform, you'll discover powerful features that can transform how your organization manages infrastructure. Whether you're deploying applications, managing distributed systems, or building automation workflows, Rediacc Console provides the tools you need to succeed.

Welcome to the Rediacc community! We're excited to see what you'll build. 🚀