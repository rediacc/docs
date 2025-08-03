# Console Documentation Update Plan - 2025-07-09

## Overview
This plan outlines the documentation updates needed based on live testing of the Rediacc Console at http://localhost:7322/console-guide/.

## Key Findings from Testing

### 1. Login Process
- ✅ Three-field login: Email, Password, and Client-Side Encryption Password
- ✅ Language selector available on login page
- ✅ Theme toggle (light/dark mode) available
- ✅ "Don't have an account? Register" link present

### 2. Dashboard
- ✅ Account Health widget showing overall status and resource limits
- ✅ Queue Overview with status counts (Pending, Processing, Completed, Failed)
- ✅ Resource Usage visualization with progress bars for all resources
- ✅ Recent Activity feed showing audit logs
- ✅ Queue Details with machine status and priority breakdown
- ✅ Subscription & Plans section showing current plan (Elite) and pricing

### 3. Resources Section
- ✅ Team selector dropdown at the top
- ✅ Four tabs: Machines, Repo (Credentials), Storage, Schedules
- ✅ Machines tab has grouping options (Machine, Bridge, Team, Region, Repository, Status, Grand Repository)
- ✅ Add Machine dialog with vault configuration, SSH settings, and JSON import/export
- ✅ Connectivity Test and Refresh buttons
- ✅ Table shows: Machine Name, Team, Region, Bridge, Queue Items, Last Updated, Vault Version, Actions

### 4. Queue Management
- ✅ Advanced filtering: Team, Status, Date Range, Task ID
- ✅ Options: Include Completed, Include Cancelled, Only Stale Items
- ✅ Status summary cards showing counts
- ✅ Four tabs: Active Queue, Completed, Cancelled, Failed
- ✅ Detailed queue table with Task ID, Status, Priority, Age, Team, Machine, Region, Bridge, Response, Retries, Created By, Actions

### 5. System Settings
- ✅ Company Settings and Personal Settings sections
- ✅ Users, Teams & Permissions tabs
- ✅ User Sessions tab for monitoring active sessions
- ✅ Regions & Infrastructure section with Bridges management
- ✅ Danger Zone with: Block User Requests, Export All Vaults, Encryption Password Settings

### 6. Navigation & UI Features
- ✅ Collapsible sidebar with logo
- ✅ Expert Mode toggle in sidebar
- ✅ User info display with company name
- ✅ Logout button
- ✅ Header with company name, plan tier, language selector, theme toggle, notifications bell

## Documentation Updates Needed

### 1. Update Existing Pages

#### introduction.md
- [ ] Update login process description to include Client-Side Encryption Password field
- [ ] Add information about Expert Mode toggle
- [ ] Update navigation section with actual menu items

#### dashboard.md
- [ ] Add detailed sections for each dashboard widget
- [ ] Include screenshots of each component
- [ ] Document the Queue Details section with priority breakdown
- [ ] Add subscription information display

#### resources/machines.md
- [ ] Document the grouping feature with all 7 options
- [ ] Explain the Add Machine dialog fields and vault configuration
- [ ] Document the JSON import/export functionality
- [ ] Add information about connectivity testing

#### queue.md
- [ ] Document advanced filtering options
- [ ] Explain the four queue tabs and their purposes
- [ ] Add information about stale queue items
- [ ] Document the task lifecycle states

#### system.md
- [ ] Document all tabs: Users, Teams, Permissions, User Sessions
- [ ] Add Regions & Infrastructure management section
- [ ] Document Danger Zone features with warnings
- [ ] Explain bridge types (Global vs Regular, Cloud-Managed vs Self-Managed)

### 2. New Pages to Create

#### user-sessions.md
- Document the User Sessions monitoring feature
- Explain session management capabilities

#### vault-versioning.md
- Explain vault version tracking
- Document how to view and manage vault versions

#### bridge-types.md
- Explain Global vs Regular bridges
- Document Cloud-Managed vs Self-Managed options

### 3. Screenshot Updates Needed
- [ ] Updated login page with encryption password field
- [ ] Dashboard with all widgets visible
- [ ] Resources page with grouping options
- [ ] Add Machine dialog
- [ ] Queue management with filters
- [ ] System settings tabs
- [ ] User Sessions view
- [ ] Danger Zone section

### 4. API Documentation Updates

#### api-reference.md
- [ ] Document token rotation mechanism
- [ ] Add encryption/decryption middleware information
- [ ] Document the Rediacc-RequestToken header

### 5. Error Documentation

#### errors/common-errors.md
- [ ] Add "Session expired" error
- [ ] Document encryption/decryption failures
- [ ] Add network error scenarios

## Priority Order

1. **High Priority** (Core functionality)
   - Update introduction.md with current login process
   - Update dashboard.md with actual widgets
   - Update queue.md with current features
   - Create user-sessions.md

2. **Medium Priority** (Important features)
   - Update resources/machines.md
   - Update system.md
   - Create vault-versioning.md
   - Create bridge-types.md

3. **Low Priority** (Reference material)
   - Update api-reference.md
   - Update errors/common-errors.md
   - Update all screenshots

## Implementation Notes

- All features have been validated through live testing
- Screenshots should be taken with Expert Mode enabled to show all features
- Documentation should reference the actual API endpoints (StoredProcedure pattern)
- Include warnings for dangerous operations (Danger Zone)
- Cross-reference CLI commands where applicable