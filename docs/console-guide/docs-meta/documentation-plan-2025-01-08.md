# Rediacc Console Documentation Plan
*Created: 2025-01-08*

## Current State Analysis

### What's Well Documented
1. **Introduction & Overview** - Good high-level coverage
2. **Quick Start Guide** - Basic getting started information
3. **Features Overview** - Comprehensive feature list (but needs validation)
4. **Authentication** - Login process and security
5. **Dashboard** - Basic dashboard features

### What Needs Improvement/Creation

#### 1. Missing Core Documentation
- **Marketplace** - No detailed marketplace documentation exists
- **Audit System** - audit.md exists but needs comprehensive content
- **Architecture Section** - No documentation for Architecture menu item
- **Notifications** - notifications.md exists but needs content
- **RClone Import** - rclone-import.md exists but needs content

#### 2. Incomplete/Outdated Documentation
- **Resources Section** - Needs detailed machine grouping options (7 different groupings found)
- **Queue Management** - Missing details on filtering, export options, task states
- **System Settings** - Missing danger zone operations, user sessions tab
- **Bridge Types** - Needs details on Global vs Regional, Cloud-managed vs Self-managed

#### 3. New Features to Document
- **Grand Repository** grouping option (Expert Mode only)
- **Vault Versioning** (v1, v2) - vault-versioning.md exists but needs content
- **User Sessions** management tab
- **Connectivity Test** feature for machines
- **Token rotation** and automatic authentication
- **Export functionality** (CSV, JSON, PDF) across multiple sections

## Documentation Priority Plan

### Phase 1: Critical Missing Content (High Priority)
1. **Marketplace Documentation** (marketplace.md)
   - Template categories and deployment
   - Configuration options
   - One-click deployment process
   
2. **Audit System** (audit.md)
   - Event types and categories
   - Filtering and search capabilities
   - Export options and compliance features
   
3. **Architecture Section** (architecture.md)
   - System architecture configuration
   - Infrastructure topology
   - Component relationships

### Phase 2: Feature Enhancements (Medium Priority)
1. **Queue Management Updates** (queue.md)
   - Detailed filtering options
   - Task state explanations
   - Export functionality
   - Priority system
   
2. **System Settings Expansion** (system.md)
   - Danger Zone operations
   - User Sessions tab
   - Encryption settings
   
3. **Resources Enhancement** (resources/*.md)
   - Machine grouping options (all 7 types)
   - Connectivity testing
   - Vault configuration

### Phase 3: Advanced Features (Low Priority)
1. **Vault Versioning** (vault-versioning.md)
   - Version differences
   - Migration process
   
2. **RClone Import** (rclone-import.md)
   - Import process
   - Supported providers
   
3. **Notifications** (notifications.md)
   - Notification types
   - Configuration options

## Documentation Standards

### Screenshot Requirements
- Focused on specific UI elements
- Annotated where necessary
- Updated to reflect current UI
- Stored in `/docs/console-guide/assets/screenshots/`

### Content Standards
- Validate all features through testing
- Include API endpoint references
- Cross-reference with CLI commands
- Provide step-by-step instructions
- Include troubleshooting sections

### Quality Checks
1. Test every documented feature
2. Verify API endpoints match StoredProcedure names
3. Ensure consistency with CLAUDE.md architecture
4. Update existing docs that have outdated information
5. Add missing information discovered during testing

## Implementation Timeline

### Week 1
- Complete Phase 1 documentation
- Take new screenshots for core features
- Update existing outdated content

### Week 2
- Complete Phase 2 documentation
- Create tutorial content
- Review and refine Phase 1 docs

### Week 3
- Complete Phase 3 documentation
- Comprehensive review
- Create index/navigation improvements

## Specific Findings to Address

1. **Machine Grouping** - Document all 7 grouping options:
   - By Machine (default)
   - By Bridge
   - By Team  
   - By Region
   - By Repository
   - By Status
   - By Grand Repository (Expert Mode)

2. **Queue States** - Document all states found:
   - PENDING
   - ASSIGNED
   - PROCESSING
   - COMPLETED
   - FAILED
   - CANCELLING
   - CANCELLED
   - STALE_PENDING

3. **Bridge Types** - Clarify:
   - Scope: Global vs Regional
   - Management: Cloud-managed vs Self-managed

4. **Export Options** - Document across all sections:
   - Queue export (CSV, JSON, PDF)
   - Audit export
   - Vault export (Danger Zone)

5. **Authentication Features**:
   - Token rotation mechanism
   - Client-side encryption password
   - Session management