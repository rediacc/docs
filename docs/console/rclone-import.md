---
sidebar_position: 17
---

# Rclone Import Wizard

The Rclone Import Wizard allows you to easily import storage configurations from rclone config files into Rediacc, streamlining the migration of existing storage backends.

## Overview

Rclone is a popular command-line tool for managing cloud storage. If you have existing rclone configurations, the import wizard helps you:

- Import multiple storage backends at once
- Automatically map rclone settings to Rediacc storage configurations
- Preserve authentication credentials and settings
- Validate configurations before import

## Accessing the Import Wizard

1. Navigate to **Resources** → **Storage** tab
2. Click the **Import from Rclone** button
3. The import wizard dialog will open

## Import Process

### Step 1: Upload Configuration

The wizard accepts rclone configurations in two formats:

#### Option A: Config File Upload
```ini
[mybackup]
type = s3
provider = AWS
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
region = us-east-1
bucket = my-backup-bucket

[cloudstore]
type = azureblob
account = mystorageaccount
key = YOUR_ACCOUNT_KEY
container = backups
```

#### Option B: Paste Configuration
Copy and paste your rclone configuration directly into the text area.

### Step 2: Preview & Select

After uploading or pasting your configuration:

1. **Preview Detected Storages**: The wizard displays all detected storage configurations
2. **Select Storages**: Choose which configurations to import using checkboxes
3. **Review Settings**: Verify that settings are correctly mapped
4. **Rename if Needed**: Optionally rename storage entries before import

### Step 3: Map to Rediacc

The wizard automatically maps common rclone settings:

| Rclone Type | Rediacc Provider | Mapped Settings |
|-------------|------------------|-----------------|
| s3 | Amazon S3 | Access key, secret, region, bucket |
| azureblob | Azure Blob | Account, key, container |
| gcs | Google Cloud Storage | Service account, project, bucket |
| sftp | SFTP | Host, user, password/key, path |
| ftp | FTP | Host, user, password, path |
| dropbox | Dropbox | Token, root folder |
| onedrive | OneDrive | Token, drive ID |
| b2 | Backblaze B2 | Account ID, application key, bucket |

### Step 4: Configure Additional Settings

For each imported storage, you can:

- **Set Encryption**: Enable client-side encryption
- **Configure Retention**: Set backup retention policies
- **Add Tags**: Organize with custom tags
- **Set Bandwidth Limits**: Configure upload/download limits
- **Test Connection**: Verify storage accessibility

### Step 5: Complete Import

1. **Review Summary**: Check all configurations before import
2. **Import to Team**: Select the target team for the storage configurations
3. **Click Import**: Begin the import process
4. **Verify Success**: Check imported storages in the Storage tab

## Supported Rclone Backends

The import wizard supports the most common rclone backends:

### Cloud Storage
- Amazon S3 (and S3-compatible)
- Google Cloud Storage
- Azure Blob Storage
- Backblaze B2
- Wasabi
- DigitalOcean Spaces
- MinIO

### File Storage
- SFTP/SSH
- FTP/FTPS
- WebDAV
- Local filesystem (for migration only)

### File Hosting Services
- Dropbox
- Google Drive
- OneDrive
- Box
- pCloud
- MEGA

### Object Storage
- OpenStack Swift
- Ceph
- IBM Cloud Object Storage

## Advanced Features

### Bulk Operations

- Import dozens of storage configurations at once
- Apply common settings to multiple storages
- Bulk testing of connections
- Export import summary

### Credential Handling

The wizard securely handles credentials:

- Credentials are encrypted during import
- OAuth tokens are refreshed if needed
- Service account keys are validated
- Passwords are stored in team vault

### Configuration Validation

Before import, the wizard validates:

- Required fields are present
- Credentials format is correct
- Bucket/container names are valid
- Network connectivity to endpoints

### Mapping Customization

For advanced users:

- Custom field mapping rules
- Provider-specific settings
- Advanced authentication options
- Custom endpoint configurations

## Common Use Cases

### Migration from Self-Hosted

Moving from self-managed infrastructure:

1. Export rclone config from current system
2. Import all storage backends at once
3. Update backup scripts to use Rediacc
4. Verify all storages are accessible

### Multi-Cloud Setup

Consolidating multiple cloud storages:

1. Gather rclone configs from different systems
2. Import all configurations
3. Organize by purpose (backups, archives, etc.)
4. Set appropriate retention policies

### Disaster Recovery

Setting up DR storage quickly:

1. Import pre-configured DR storage endpoints
2. Test all connections
3. Configure replication schedules
4. Document storage purposes

## Troubleshooting

### Import Failures

If import fails for specific storages:

1. **Check Credentials**: Ensure credentials are valid
2. **Verify Format**: Confirm rclone config syntax
3. **Test Manually**: Try the configuration with rclone first
4. **Review Logs**: Check browser console for errors

### Missing Settings

If some settings don't import:

1. **Check Mapping**: Some rclone settings may not have direct equivalents
2. **Manual Configuration**: Add missing settings after import
3. **Provider Differences**: Some providers have unique settings
4. **Contact Support**: For complex configurations

### Connection Issues

After import, if storages can't connect:

1. **Network Access**: Ensure Rediacc can reach storage endpoints
2. **Firewall Rules**: Check if IPs need whitelisting
3. **Authentication**: Verify credentials are current
4. **Bucket Permissions**: Ensure proper access rights

## Best Practices

### Before Import

1. **Backup Configurations**: Keep original rclone configs
2. **Test Connections**: Verify storages work with rclone
3. **Document Purpose**: Note what each storage is used for
4. **Check Credentials**: Ensure all credentials are current

### During Import

1. **Import in Batches**: For many storages, import in groups
2. **Test Incrementally**: Verify each batch before proceeding
3. **Use Descriptive Names**: Rename storages clearly
4. **Apply Consistent Settings**: Use templates for similar storages

### After Import

1. **Verify All Storages**: Test each imported storage
2. **Update Documentation**: Document the migration
3. **Configure Monitoring**: Set up alerts for storage issues
4. **Plan Decommission**: Schedule removal of old systems

## Security Considerations

### Credential Security

- All credentials are encrypted in transit
- Stored securely in team vault
- Never exposed in logs or UI
- Automatic credential rotation available

### Access Control

- Import requires storage management permissions
- Imported storages inherit team permissions
- Audit trail for all import operations
- Can restrict import feature by role

### Compliance

- Import process is fully audited
- Maintains data residency requirements
- Supports compliance tagging
- Encryption options for sensitive data

## Summary

The Rclone Import Wizard significantly simplifies the process of migrating existing storage configurations to Rediacc. By automating the conversion and validation process, it reduces migration time and potential errors while maintaining security and compliance requirements.