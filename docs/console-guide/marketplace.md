---
sidebar_position: 40
---

# Template Marketplace

The Template Marketplace provides a curated collection of pre-configured application templates that can be quickly deployed to your repositories. These templates save time by providing production-ready configurations for popular software stacks.

![Template Marketplace](./assets/screenshots/console-marketplace-overview.png)


## Overview

The Marketplace offers ready-to-deploy templates for:
- Database systems
- Web servers and applications
- Monitoring and observability tools
- Message queuing systems
- Authentication services
- Development platforms
- And more...

Each template includes:
- Docker configuration files
- Environment setup
- Default security settings
- Documentation
- Quick start guides

## Interface Components

### Search and Filter

#### Search Bar
- Enter keywords to find specific templates
- Search by name, technology, or description
- Real-time filtering as you type

#### View Toggle
- **Grid View** (default): Visual card layout
- **List View**: Compact table format

### Template Categories

Templates are organized into functional categories:

#### 🗄️ Databases
Database systems for data storage and management:
- **MongoDB**: NoSQL document database with Mongo Express admin
- **MSSQL**: Microsoft SQL Server 2022 using Docker
- **MySQL**: MariaDB with phpMyAdmin interface
- **PostgreSQL**: PostgreSQL with performance benchmarking tools

#### 🚀 Quick Start
Simple templates to get started quickly:
- **Nginx**: Minimal web server deployment
- **WordPress**: Full CMS with MySQL database

#### 📊 Monitoring
Observability and monitoring solutions:
- **Prometheus + Grafana**: Complete monitoring stack

#### 💾 Caching
In-memory data stores:
- **Redis**: High-performance cache and message broker

#### 📨 Messaging
Message queuing and streaming:
- **Kafka**: Distributed event streaming with UI
- **RabbitMQ**: AMQP message broker with management

#### 🔐 Authentication
Identity and access management:
- **Keycloak**: Enterprise SSO solution

#### 🔍 Search Engines
Full-text search and analytics:
- **Elasticsearch**: Search engine with Kibana

#### 💻 Development Tools
Development platforms and tools:
- **GitLab**: Self-hosted Git repository manager

#### 🎛️ Management
Infrastructure management:
- **Portainer**: Docker container management UI

#### 🌐 API Gateway
API management and routing:
- **Kong**: Cloud-native API gateway

#### ☁️ Networking
Network and routing solutions:
- **Cloud Switch**: Cloudflare tunnel for local services

## Template Information

Each template card displays:

### Visual Elements
- **Icon**: Technology-specific icon
- **Name**: Template name
- **Description**: Brief explanation of functionality

### Metadata Tags
- **Difficulty Level**:
  - 🟢 Beginner: Simple, minimal configuration
  - 🟡 Intermediate: Some configuration required
  - 🔴 Advanced: Complex setup, expertise needed

- **Technology Tags**: Related technologies (e.g., MongoDB, Docker)
- **Special Tags**:
  - Production Ready
  - Clustered
  - HA (High Availability)
  - Development

### Action Buttons
- **👁️ Preview**: View template details and configuration
- **🚀 Deploy**: Start deployment process

## Using Templates

### Preview Template

1. Click **Preview** on any template card
2. Review includes:
   - Full description
   - System requirements
   - Configuration options
   - Environment variables
   - Port mappings
   - Volume mounts
3. View docker-compose.yml content
4. Check documentation links

### Deploy Template

1. Click **Deploy** on your chosen template
2. The "Create Repo (Credentials)" dialog opens
3. Configure deployment settings:
   - **Team**: Select target team from dropdown
   - **Repository Name**: Enter unique name for the repository
   - **Machine**: Select target machine (must have Docker environment)
   - **Size**: Specify storage allocation (e.g., 10G, 100G, 1T)
   - **Access Password**: Set repository access password
4. Template details are pre-selected and shown
5. Advanced options available:
   - Import/Export JSON configuration
   - Raw JSON editor (Expert Mode)
6. Click **Create** to deploy

### Deployment Dialog Details

The deployment dialog provides:
- **Automatic template selection**: Shows selected template name
- **Required fields validation**: Ensures all necessary fields are filled
- **Team-based filtering**: Only shows machines for selected team
- **Size validation**: Accepts standard size formats (G, T)
- **Password generation**: Auto-generate secure passwords option
- **Configuration backup**: Export JSON before deployment

### Deployment Process

When deploying a template:

1. **Validation**
   - Verify team permissions
   - Check machine availability
   - Validate repository name uniqueness
   - Confirm resource limits

2. **Repository Creation**
   - Create repository on selected machine
   - Apply vault configuration
   - Set access credentials

3. **Template Installation**
   - Copy template files to repository
   - Apply environment settings
   - Configure Docker containers

4. **Service Initialization**
   - Pull required Docker images
   - Create networks and volumes
   - Start containers
   - Run health checks

## Template Categories Details

### Database Templates

**Best for**: Data persistence needs
- Includes popular SQL and NoSQL options
- Pre-configured with admin interfaces
- Backup scripts included
- Performance tuning defaults

### Quick Start Templates

**Best for**: Getting started quickly
- Minimal configuration required
- Basic but functional setups
- Good for testing and development
- Easy to extend

### Enterprise Templates

**Best for**: Production deployments
- High availability configurations
- Security hardening
- Monitoring integration
- Scalability built-in

## Best Practices

### Before Deploying

1. **Review Requirements**
   - Check CPU/memory needs
   - Verify port availability
   - Plan storage requirements

2. **Understand Configuration**
   - Read template documentation
   - Note default credentials
   - Plan customizations

3. **Security Considerations**
   - Change default passwords
   - Configure firewall rules
   - Enable encryption where available

### After Deployment

1. **Immediate Actions**
   - Change default credentials
   - Configure backups
   - Set up monitoring

2. **Optimization**
   - Tune performance settings
   - Configure resource limits
   - Enable caching

3. **Maintenance**
   - Schedule updates
   - Monitor logs
   - Plan scaling

## Customizing Templates

### Modification Options

Templates can be customized:
- Environment variables
- Resource allocations
- Network settings
- Volume mappings
- Additional services

### Creating Custom Templates

To create your own templates:
1. Start with existing template
2. Modify configuration
3. Test thoroughly
4. Document changes
5. Submit for review

## Troubleshooting

### Common Issues

**Deployment Fails**
- Check resource availability
- Verify network connectivity
- Review error logs
- Confirm prerequisites

**Service Won't Start**
- Check port conflicts
- Verify image availability
- Review configuration syntax
- Check permissions

**Performance Issues**
- Monitor resource usage
- Check network latency
- Review logs for errors
- Optimize configuration

### Getting Help

For template issues:
1. Check template documentation
2. Review deployment logs
3. Search knowledge base
4. Contact support team

## Template Updates

### Version Management

- Templates are versioned
- Updates are tested before release
- Changelog provided
- Backward compatibility noted

### Update Process

1. Notification of updates
2. Review changes
3. Test in development
4. Schedule production update
5. Monitor after update

## Security Notes

### Default Security

All templates include:
- Secure defaults where possible
- Documentation of security settings
- Credential management guidance
- Network isolation options

### Your Responsibility

You must:
- Change all default passwords
- Configure appropriate access controls
- Enable encryption features
- Regular security updates
- Monitor for vulnerabilities

## Performance Optimization

### Resource Planning

Consider:
- Expected load
- Growth projections
- Peak usage times
- Redundancy needs

### Monitoring Integration

Templates support:
- Prometheus metrics
- Log aggregation
- Health endpoints
- Custom dashboards

## Advanced Features

### Multi-Service Templates

Some templates include:
- Multiple connected services
- Shared networks
- Inter-service authentication
- Load balancing

### Scaling Options

Templates support:
- Horizontal scaling
- Vertical scaling
- Auto-scaling rules
- Load distribution

## Future Enhancements

Planned marketplace features:
- User-submitted templates
- Ratings and reviews
- One-click updates
- Template composition
- AI-powered recommendations