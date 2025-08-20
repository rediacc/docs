---
sidebar_position: 15
---

# Vault Versioning System

The Rediacc vault versioning system provides a robust mechanism for tracking configuration changes, enabling rollbacks, and maintaining an audit trail of all modifications to sensitive data.

## Overview

Every vault-enabled entity in Rediacc (machines, teams, bridges, regions, etc.) maintains a version history. This system ensures:

- **Configuration tracking**: Every change is recorded
- **Rollback capability**: Restore previous configurations
- **Audit compliance**: Complete change history
- **Change validation**: Test configurations before committing

## Version Format

Vault versions follow a simple incremental pattern:
- **v1**: Initial configuration
- **v2, v3, ...**: Subsequent updates
- Version numbers increment automatically
- Displayed in resultSets and lists throughout the Console
- Example: "v1" shown in machine, bridge, and region listings

## How Versioning Works

### Creating a New Version

When you modify any vault data, a new version is created:

1. **Edit Operation**: User modifies configuration
2. **Validation**: System validates the changes
3. **Encryption**: Data is encrypted with master password
4. **Storage**: New version saved, previous version retained
5. **Activation**: New version becomes active

### Version Metadata

Each version stores:
```json
{
  "version": "v2",
  "created_at": "2025-01-08T10:30:00Z",
  "created_by": "admin@rediacc.io",
  "change_summary": "Updated SSH key",
  "previous_version": "v1",
  "entity_type": "machine",
  "entity_id": "prod-server-01"
}
```

## Viewing Version History

### In the Console

1. Navigate to the resource (machine, team, etc.)
2. Click **Edit**
3. Look for the **Version History** section
4. View all previous versions with:
   - Version number
   - Timestamp
   - User who made the change
   - Change summary

### Via API

```bash
# Get version history for a machine
./rediacc get vault-history --type machine --name prod-server-01
```

## Version Operations

### Comparing Versions

The Console provides a diff view to compare versions:
1. Select two versions to compare
2. View side-by-side differences
3. See added, removed, and modified fields
4. Understand impact before rollback

### Rolling Back

To restore a previous version:

1. **Access Version History**
   - Navigate to the resource
   - Click Edit
   - Open Version History

2. **Select Previous Version**
   - Choose the version to restore
   - Review the configuration
   - Check the change summary

3. **Confirm Rollback**
   - Click "Restore This Version"
   - Provide rollback reason
   - Confirm the action

4. **New Version Created**
   - Rollback creates a new version
   - Original versions remain intact
   - Audit trail preserved

### Exporting Versions

Export specific versions for:
- Backup purposes
- Migration to other environments
- Compliance documentation
- Configuration templates

## Vault Types and Versioning

### Machine Vaults
Track changes to:
- SSH credentials
- IP addresses
- Port configurations
- Custom scripts
- Environment variables

### Team Vaults
Version control for:
- SSH private keys
- Shared credentials
- Team-wide settings
- Access permissions

### Bridge Vaults
Monitor updates to:
- API tokens
- Connection strings
- Performance settings
- Security configurations

### Storage Vaults
Track modifications to:
- Access keys
- Bucket configurations
- Endpoint URLs
- Encryption settings

## Best Practices

### Version Management

1. **Meaningful Changes**
   - Group related changes together
   - Avoid excessive small updates
   - Test before committing

2. **Change Documentation**
   - Always provide clear descriptions
   - Reference ticket numbers
   - Explain the purpose of changes

3. **Regular Reviews**
   - Audit version history quarterly
   - Clean up test versions
   - Document standard configurations

### Security Considerations

1. **Access Control**
   - Limit who can view history
   - Restrict rollback permissions
   - Monitor version access

2. **Sensitive Data**
   - Versions contain encrypted data
   - Ensure master password security
   - Regular key rotation

3. **Compliance**
   - Retain versions per policy
   - Export for audit requirements
   - Document rollback procedures

## Version Lifecycle

### Active Versions
- Currently in use
- Referenced by running systems
- Cannot be deleted

### Historical Versions
- Previous configurations
- Available for rollback
- Retained per retention policy

### Archived Versions
- Older than retention period
- Exported for compliance
- Removed from active system

## Troubleshooting

### Version Conflicts
**Problem**: Version mismatch errors
**Solution**:
1. Refresh the resource view
2. Check for concurrent edits
3. Merge changes if needed
4. Create new version

### Missing Versions
**Problem**: Expected version not visible
**Solution**:
1. Check user permissions
2. Verify retention policy
3. Look in audit logs
4. Contact administrator

### Rollback Failures
**Problem**: Cannot restore previous version
**Solution**:
1. Verify version compatibility
2. Check system dependencies
3. Test in staging first
4. Review error messages

## Advanced Features

### Version Branching
For complex environments:
- Create configuration branches
- Test changes in isolation
- Merge when validated
- Maintain production stability

### Automated Versioning
Integration options:
- CI/CD pipeline updates
- Scheduled rotations
- Policy-based changes
- Compliance updates

### Version Comparison API
```bash
# Compare two versions
./rediacc compare-vault \
  --type machine \
  --name prod-server-01 \
  --version1 v5 \
  --version2 v7
```

## Migration and Upgrades

### Version Migration
When upgrading Rediacc:
1. Versions automatically migrate
2. Format updates handled transparently
3. No manual intervention required
4. Backward compatibility maintained

### Bulk Version Updates
For system-wide changes:
1. Use bulk update tools
2. Preview changes first
3. Staged rollout recommended
4. Monitor for issues

## Related Documentation

- [Vault Management](./advanced-security.md#vault-encryption-protocol) - Understanding vault encryption
- [Audit Logs](./audit.md) - Tracking version changes
- [System Settings](./system.md) - Managing vault configurations
- [API Reference](./api-reference.md) - Programmatic version access