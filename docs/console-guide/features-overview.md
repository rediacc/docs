---
sidebar_position: 5
---

# Features Overview

This comprehensive guide covers all features available in the Rediacc Console, providing an in-depth look at capabilities, workflows, and best practices.

## Core Features

### 1. Dashboard & Analytics

The dashboard provides real-time insights into your infrastructure:

#### Account Health
- **Overall Status Indicator**: Visual health status (Good/Warning/Critical)
- **Resource Limit Monitoring**: Track resources approaching or at limits
- **Plan Sufficiency**: Automatic assessment of current plan adequacy

#### Queue Analytics
- **Real-time Statistics**: Pending, Processing, Completed, Failed counts
- **Priority Distribution**: Visual breakdown of task priorities
- **Machine Queue Status**: Queue items per machine
- **Today's Activity**: Daily task creation and completion metrics

#### Resource Usage Visualization
- **Infrastructure Resources**: Bridges, Machines, Regions, Repositories
- **Configuration Resources**: Schedules, Storage, Teams, Users
- **Visual Progress Bars**: Immediate usage visualization
- **Color-coded Status**: Green (healthy), Yellow (warning), Red (critical)

#### Activity Monitoring
- **Recent Activity Feed**: Live audit event stream
- **Event Categories**: Authentication, Team, Request operations
- **User Attribution**: Track who performed each action
- **Timestamp Precision**: Exact timing of all events

### 2. Resource Management

Comprehensive infrastructure resource management across multiple categories:

#### Machine Management
**Features:**
- SSH-based machine configuration
- Docker environment verification
- Connectivity testing
- Remote terminal access
- Queue item tracking per machine
- Vault version control

**Grouping Options:**
- By Machine (default)
- By Bridge assignment
- By Team ownership
- By Region location
- By Repository usage
- By Status (active/inactive)
- By Grand Repository

**Actions:**
- Edit machine configuration
- Remote terminal access
- Trace execution history
- Delete machine

#### Repository Management
**Supported Types:**
- Git repositories (GitHub, GitLab, Bitbucket)
- Docker registries (Docker Hub, private registries)
- OCI registries
- Custom repository types

**Authentication Methods:**
- SSH keys
- Personal access tokens
- Username/password
- OAuth tokens

#### Storage Configuration
**Supported Backends (51 providers):**
- **Cloud Storage**: Amazon S3, Azure Blob, Google Cloud Storage
- **File Hosting**: Dropbox, Google Drive, OneDrive, Box
- **Object Storage**: Backblaze B2, Wasabi, MinIO, OpenStack Swift
- **Traditional**: FTP, SFTP, WebDAV
- **Specialized**: Nextcloud, ownCloud, Seafile, pCloud
- **CDN**: Cloudflare R2, Bunny.net
- **Archive**: Amazon Glacier, Azure Archive

**Features:**
- Encryption at rest
- Access control with IAM integration
- Retention policies and lifecycle rules
- Cross-region replication
- Bandwidth throttling
- Connection pooling

#### Schedule Management
**Capabilities:**
- Cron expression support
- Dependency chains
- Retry policies
- Failure notifications
- Execution history

### 3. Queue Management System

Advanced distributed task execution with comprehensive monitoring:

#### Filtering & Search
- **Team-based filtering**: View tasks by organizational unit
- **Status filtering**: All statuses or specific states
- **Date range selection**: Custom time windows
- **Task ID search**: Direct GUID lookup
- **Include/exclude options**: Completed, Cancelled, Stale items

#### Task States
- **Pending**: Awaiting bridge assignment
- **Assigned**: Claimed by bridge
- **Processing**: Currently executing
- **Completed**: Successfully finished
- **Failed**: Encountered errors
- **Cancelling**: Termination requested
- **Cancelled**: Successfully stopped
- **Stale**: No recent updates

#### Task Information
- Task ID with copy functionality
- Priority levels (Highest, High, Normal, Low)
- Team and machine assignment
- Region and bridge allocation
- Retry count tracking
- Creator attribution
- Age and creation timestamp

#### Actions
- **Trace**: View detailed execution logs
- **Cancel**: Stop active tasks
- **Export**: Download queue data (CSV, JSON, PDF)

### 4. System Management

Comprehensive system configuration and administration:

#### User Management
**Features:**
- User creation and deactivation
- Permission group assignment
- Activity tracking
- Session management

**Permission Groups:**
- Administrators
- Operators
- Viewers
- Bridges (system accounts)
- Custom groups

#### Team Management
- Team creation and configuration
- Member assignment
- Team vault management
- Resource allocation

#### Permission System
- Role-based access control
- Granular permissions
- Inheritance models
- Audit trail

#### Infrastructure Configuration

**Regions:**
- Geographic or logical grouping
- Bridge assignment
- Vault versioning
- Access control

**Bridges:**
- **Scope Types**: 
  - Global bridges: Can process tasks from any region
  - Regional bridges: Limited to specific geographic regions
- **Management Types**:
  - Cloud-managed: Automatically provisioned and scaled
  - Self-managed: Deployed on your infrastructure
- Token management and authentication
- Machine assignment and load balancing
- Performance monitoring and health checks

### 5. Security Features

#### Vault System
**Types:**
- Company Vault: Organization-wide settings
- Team Vault: Team-specific credentials
- Personal Vault: User preferences
- Machine Vault: Connection details

**Encryption:**
- Client-side encryption with AES-256-GCM
- Master password protection (never transmitted)
- Zero-knowledge architecture
- Vault versioning (v1, v2 with migration support)
- Automatic field detection and encryption
- Secure key derivation with PBKDF2

#### Authentication
- Multi-factor authentication support
- Automatic token rotation (new token per request)
- Session management with expiration
- IP whitelisting and geographic validation
- Comprehensive audit logging
- Request queuing to prevent race conditions
- Failed attempt tracking and lockout

#### Danger Zone Controls
- **Block User Requests**: Emergency access control
- **Export All Vaults**: Backup sensitive data
- **Encryption Settings**: Re-encrypt all vaults

### 6. Marketplace

Pre-built application templates for rapid deployment:

#### Available Templates
- Web servers (Nginx, Apache)
- Databases (PostgreSQL, MySQL, MongoDB)
- Application stacks (Node.js, Python, Ruby)
- CI/CD tools (Jenkins, GitLab Runner)
- Monitoring solutions

#### Deployment Features
- One-click deployment
- Configuration customization
- Environment variables
- Port mapping
- Volume configuration

### 7. Audit System

Comprehensive activity tracking and compliance:

#### Event Types
- Authentication events
- Resource modifications
- Queue operations
- System changes
- Security events

#### Features
- Real-time event streaming
- Advanced filtering
- Export capabilities
- Retention policies
- Compliance reporting

## Advanced Features

### Expert Mode
Toggle advanced features for experienced users:
- Additional configuration options
- Detailed technical information
- Advanced filtering capabilities
- Direct API access
- Extended machine grouping options (Grand Repository)
- Advanced vault management features
- Detailed system diagnostics
- Raw API response viewing

### Multi-Language Support
Comprehensive internationalization with 9 supported languages:
- **Languages**: English, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese
- **Complete UI Translation**: All interface elements fully translated
- **Regional Formatting**: Numbers, dates, and currency per locale
- **Dynamic Language Switching**: Change language without reload
- **Automatic Detection**: Based on browser/system settings

### Theme Support
- Light mode (default)
- Dark mode
- System preference detection
- Persistent preference storage

### Real-Time Updates
- WebSocket connections
- Live queue updates
- Activity streaming
- Resource monitoring

### CLI Integration
The Rediacc Console works seamlessly with CLI tools for enhanced capabilities:
- **Local Operations**: Use rediacc for API operations
- **File Synchronization**: Rsync-based transfers via rediacc-sync
- **SSH Terminal**: Terminal access via rediacc-term
- **Cross-Platform**: Works on Linux, macOS, and Windows
- **System Integration**: OS-specific optimizations
- **Offline Capabilities**: Work without internet connection
- **Cross-Platform**: Windows, macOS, and Linux support

## Integration Features

### API Access
All console features available via REST API:
- Token-based authentication
- Comprehensive endpoints
- Batch operations
- Webhook support

### CLI Integration
Command-line access to all features:
```bash
# Machine management
rediacc list machines --team Production
rediacc create machine --name prod-01

# Queue operations
rediacc queue list --status pending
rediacc queue cancel --task-id <guid>

# Resource management
rediacc create repo --name myapp --type git
rediacc create storage --name backups --type s3
```

### Automation Support
- REST API for programmatic access
- Webhook notifications
- Event-driven workflows
- CI/CD integration

## Performance Features

### Scalability
- Distributed queue processing
- Horizontal bridge scaling
- Regional distribution
- Load balancing

### Optimization
- Connection pooling
- Caching strategies
- Batch operations
- Async processing

### Monitoring
- Performance metrics
- Resource utilization
- Queue depth tracking
- Latency monitoring

## Compliance Features

### Audit Trail
- Complete activity logging
- User attribution
- Timestamp accuracy
- Immutable records

### Data Governance
- Retention policies
- Data classification
- Access controls
- Export capabilities

### Security Compliance
- Encryption standards
- Access logging
- Session management
- Password policies

## Workflow Automation

### Queue Automation
- Priority-based processing
- Retry mechanisms
- Failure handling
- Dependency management

### Scheduled Operations
- Cron-based scheduling
- Recurring tasks
- Maintenance windows
- Batch processing

### Event-Driven Actions
- Queue triggers
- Resource events
- Threshold alerts
- Custom webhooks

## Best Practices

### Resource Organization
1. Use consistent naming conventions
2. Group resources by environment
3. Implement tagging strategies
4. Regular cleanup procedures

### Security Hardening
1. Regular key rotation
2. Minimal permission assignment
3. Audit log review
4. Vault encryption

### Performance Optimization
1. Queue priority management
2. Resource limit monitoring
3. Bridge distribution
4. Connection pooling

### Operational Excellence
1. Regular backups
2. Disaster recovery testing
3. Monitoring implementation
4. Documentation maintenance

## Feature Availability by Plan

### Essential Features (All Plans)
- Basic dashboard
- Machine management
- Queue operations
- User authentication

### Professional Features
- Advanced filtering
- Export capabilities
- API access
- Multiple teams

### Elite Features
- Unlimited resources
- Priority support
- Custom integrations
- Advanced analytics

## Future Roadmap

### Planned Enhancements
- GraphQL API
- Mobile applications
- Enhanced analytics
- AI-powered insights

### Community Requests
- Terraform provider
- Kubernetes operator
- Slack integration
- Custom dashboards

## Summary

The Rediacc Console provides a comprehensive platform for:
- Infrastructure management
- Task orchestration
- Security compliance
- Operational automation

With its extensive feature set, the console enables organizations to efficiently manage distributed infrastructure while maintaining security and compliance standards.