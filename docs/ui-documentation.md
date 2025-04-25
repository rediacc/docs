---
sidebar_position: 3
---

# UI Documentation

## Rediacc Web Application Overview

The Rediacc web application is designed to provide a comprehensive management interface for the Rediacc system, which allows software and large data to operate across different machines without requiring installation. The interface provides a logical hierarchy of navigation and functionality based on the system's architecture.

This document outlines the UI structure, navigation, page details, data fields, and user flows of the application.

## Navigation Menu Structure

The application has a hierarchical navigation menu reflecting the entity relationships in the database:

### Main Navigation

- **Dashboard** - Overview of the system
- **Infrastructure**
  - Regions
  - Bridges
  - Machines
- **Team Management**
  - Teams
  - Participants (Users)
- **Resources**
  - Repositories
  - Storage
  - Schedules
- **Operations**
  - Queue Management
- **Administration**
  - Company Settings
  - User Management

## Page Details & Data Fields

### Authentication Pages

#### Login Page

![Login Page](/img/ui/login-page.svg)

- Email address
- Password
- Login button

#### Register Page

- Company name
- Admin email
- Password
- Confirm password

### Dashboard

![Dashboard](/img/ui/dashboard-page.svg)

Overview showing:
- Active machines count
- Queue items count
- Teams count
- Repositories count
- Recent activities
- System status

### Infrastructure Pages

#### Regions Page

![Regions Page](/img/ui/regions-page.svg)

- Table listing regions with:
  - Region name
  - Bridge count
  - Creation date
- Add/Edit/Remove region buttons
- **Vault data (encrypted):**
  - Region credentials (API keys, connection strings)
  - Security configuration
  - Resource allocation limits
  - Location information (physical address, GPS coordinates)
  - Compliance information

#### Bridges Page

![Bridges Page](/img/ui/bridges-page.svg)

- Region selector at the top
- Table listing bridges with:
  - Bridge name
  - Machine count
  - Status indicator
  - Last connection timestamp
- Add/Edit/Remove bridge buttons
- **Vault data (encrypted):**
  - Bridge connection parameters
  - Security certificates/keys
  - Network configuration
  - Authentication tokens
  - Monitoring parameters

#### Machines Page

![Machines Page](/img/ui/machines-page.svg)

- Team and Bridge selectors at the top
- Table listing machines with:
  - Machine name
  - Bridge name
  - Status indicator
  - Queue item count
  - Last activity timestamp
- Add/Edit/Remove machine buttons
- Move machine to another bridge option
- **Vault data (encrypted):**
  - Machine specifications
  - CPU, memory, disk details
  - OS information
  - IP addresses and network configuration
  - SSH credentials
  - Performance metrics
  - Backup settings

### Team Management Pages

#### Teams Page

![Teams Page](/img/ui/teams-page.svg)

- Table listing teams with:
  - Team name
  - Member count
  - Machine count
  - Repository count
- Add/Edit/Remove team buttons
- **Vault data (encrypted):**
  - Team-specific security policies
  - Access control configurations
  - Integration settings with external systems
  - Project metadata
  - Budget information

#### Participants Page

![Participants Page](/img/ui/participants-page.svg)

- Team selector at the top
- Table listing team members with:
  - User email
  - Activation status
  - Last login date
- Add/Remove participant buttons

### Resources Pages

#### Repositories Page

![Repositories Page](/img/ui/repositories-page.svg)

- Team selector at the top
- Table listing repositories with:
  - Repository name
  - Size
  - Last updated date
- Add/Edit/Remove repo buttons
- **Vault data (encrypted):**
  - Repository URLs
  - Authentication credentials
  - Access tokens
  - Branch information
  - Backup configurations
  - Clone settings

#### Storage Page

![Storage Page](/img/ui/storage-page.svg)

- Team selector at the top
- Table listing storage with:
  - Storage name
  - Size
  - Type
  - Location
- Add/Edit/Remove storage buttons
- **Vault data (encrypted):**
  - Storage connection strings
  - Access credentials
  - Encryption keys
  - Retention policies
  - Backup schedules
  - Performance settings

#### Schedules Page

![Schedules Page](/img/ui/schedules-page.svg)

- Team selector at the top
- Table listing schedules with:
  - Schedule name
  - Status (active/inactive)
  - Next run time
  - Last run time
- Add/Edit/Remove schedule buttons
- **Vault data (encrypted):**
  - Schedule triggers
  - Task definitions
  - Notification settings
  - Dependencies
  - Failure handling rules
  - Resource allocation

### Operations Pages

#### Queue Management Page

![Queue Management Page](/img/ui/queue-page.svg)

- Team and optional Machine selectors at the top
- Table listing queue items with:
  - Queue ID
  - Machine name
  - Submission time
  - Status
  - Response status
- Add queue item button
- Respond to queue item option
- Remove queue item option
- **Vault data (encrypted for both queue items and responses):**
  - Queue item parameters
  - Task details
  - Priority information
  - Dependencies
  - Response data
  - Error logs
  - Performance metrics

### Administration Pages

#### Company Settings Page

![Company Settings Page](/img/ui/company-settings-page.svg)

- Company name
- Logo
- Address information
- Contact details
- System preferences

#### User Management Page

![User Management Page](/img/ui/user-management-page.svg)

- Table listing all users with:
  - Email
  - Account status
  - Account creation date
  - Last login date
- Add/Activate/Deactivate user buttons
- Reset password option

## Security Features

![Advanced Security](/img/advanced-security.svg)

The application implements security for sensitive data through vault encryption:

- Sensitive information is stored in vault fields that are encrypted in the database
- Encrypted fields are visually indicated with a lock icon in the UI

Examples of encrypted data include:
- API keys and connection credentials
- Security certificates
- Network configuration details
- Authentication tokens
- Repository access credentials
- Task parameters and definitions

## Design Principles

The interface follows several key design principles:

- **Hierarchical Navigation:** Clear menu structure that mirrors system architecture
- **Entity Relationships:** UI reflects the relationships between entities (e.g., regions contain bridges)
- **Security Visibility:** Encrypted fields are clearly marked without exposing sensitive data
- **Consistent Actions:** Add, edit, remove functions appear consistently across entities
- **Responsive Design:** Designed for desktop browser use with adaptable components
- **Modal Interactions:** Forms for creating and editing items appear in modal dialogs

## User Flow and Setup Sequence

Based on the database design and foreign key relationships, here's the recommended setup sequence:

### Company Registration
1. Create the first admin account
2. System creates a default team, region, and bridge automatically

### Team Setup
1. Create additional teams as needed
2. Add participants (users) to teams

### Infrastructure Setup
1. Create regions (representing geographical or logical divisions)
2. Add bridges to regions (connection points)
3. Add machines to teams and assign them to bridges

### Resource Setup
1. Create repositories for code storage
2. Configure storage for data
3. Set up schedules for automated tasks

### Operations
1. Submit queue items to machines
2. Monitor and respond to queue items
3. View system status and logs

## Detailed User Scenario

### Initial Setup

#### Register Company
1. User enters company name "Acme Technologies", admin email "admin@acme.com", and password
2. System creates the company record with a default "Default Team", "Default Region", and "Default Bridge"
3. User receives an activation email and activates the account

#### Login to System
1. User logs in with credentials
2. System presents the dashboard showing the default configuration

### Infrastructure Setup

#### Create Additional Regions
1. User navigates to Infrastructure > Regions
2. Clicks "Add Region" and enters details for "West Coast Data Center"
3. In the form, user enters sensitive information like physical address and API keys (stored in vault)
4. Repeats for "East Coast Data Center" and "European Data Center"

#### Create Bridges
1. User navigates to Infrastructure > Bridges
2. Selects "West Coast Data Center" region
3. Clicks "Add Bridge" and creates "Production Bridge 1"
4. Enters sensitive information like connection parameters and security certificates (stored in vault)
5. Repeats for other regions

#### Add Machines
1. User navigates to Infrastructure > Machines
2. Selects "Default Team" and "Production Bridge 1"
3. Clicks "Add Machine" and creates "Web Server 1"
4. Enters sensitive machine details like credentials and network settings (stored in vault)
5. Repeats for additional machines

### Team Management

#### Create Teams
1. User navigates to Team Management > Teams
2. Clicks "Add Team" and creates "Development Team"
3. Enters sensitive team information like security policies (stored in vault)
4. Repeats for "Operations Team" and "Security Team"

#### Add Users and Assign to Teams
1. User navigates to Administration > User Management
2. Clicks "Add User" and creates accounts for team members
3. New users receive activation emails
4. User navigates to Team Management > Participants
5. Selects each team and adds appropriate members

### Resource Setup

#### Create Repositories
1. User navigates to Resources > Repositories
2. Selects "Development Team"
3. Clicks "Add Repository" and creates "Frontend Code"
4. Enters sensitive repository details like access credentials (stored in vault)
5. Repeats for other repositories

#### Configure Storage
1. User navigates to Resources > Storage
2. Selects "Operations Team"
3. Clicks "Add Storage" and creates "Backup Storage"
4. Enters sensitive storage details like connection strings (stored in vault)

#### Setup Schedules
1. User navigates to Resources > Schedules
2. Selects "Operations Team"
3. Clicks "Add Schedule" and creates "Nightly Backup"
4. Enters sensitive schedule details like task definitions (stored in vault)

### Operations

#### Submit Queue Items
1. User navigates to Operations > Queue Management
2. Selects "Development Team" and "Web Server 1"
3. Clicks "Add Queue Item" and creates a deployment task
4. Enters task parameters (stored in vault)

#### Respond to Queue Items
1. User navigates to Operations > Queue Management
2. Views pending queue items
3. Selects an item and clicks "Respond"
4. Enters response data (stored in vault)
5. System updates the queue item with response information 