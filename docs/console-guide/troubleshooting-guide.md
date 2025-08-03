---
sidebar_position: 30
---

# Troubleshooting Guide

This comprehensive guide helps you diagnose and resolve common issues in the Rediacc Console. Each issue includes symptoms, causes, and step-by-step solutions.

## Login Issues

### Cannot Access Login Page

**Symptoms**:
- Browser shows "Cannot reach this page"
- ERR_CONNECTION_REFUSED error
- Timeout errors

**Causes & Solutions**:

1. **Console service not running**
   ```bash
   # Check service status
   systemctl status rediacc-console
   
   # Start service if stopped
   systemctl start rediacc-console
   ```

2. **Incorrect URL**
   - Verify the correct URL format: `https://your-domain.com/console-guide/`
   - Note the trailing `/console-guide/` path

3. **Firewall blocking access**
   - Check firewall rules for port 7322 (development) or 443 (production)
   - Add exception if needed

### Login Credentials Rejected

**Symptoms**:
- "Invalid credentials" error message
- Login form shakes or shows red border

**Solutions**:

1. **Verify credentials**
   - Email is case-sensitive
   - Check for extra spaces
   - Try password reset if forgotten

2. **Account status**
   - Account may be deactivated
   - Contact administrator to verify status

3. **Browser issues**
   - Clear cookies for the domain
   - Try incognito/private browsing mode
   - Disable password managers temporarily

### Client-Side Encryption Password Issues

**Symptoms**:
- Warning: "Your company has not enabled vault encryption yet"
- Encryption password field ignored
- Cannot decrypt vault data

**Solutions**:

1. **Vault encryption not enabled**
   - This is informational, not an error
   - Contact admin to enable vault encryption
   - Password field will be ignored until enabled

2. **Incorrect master password**
   - Verify the shared master password with your team
   - Password is case-sensitive
   - No password recovery available - must be reset by admin

## Dashboard Loading Issues

### Widgets Show Loading Indefinitely

**Symptoms**:
- Spinning loaders that never complete
- "Loading..." text persists
- Empty data sections

**Solutions**:

1. **Check API connectivity**
   - Open browser Developer Tools (F12)
   - Go to Network tab
   - Look for failed API calls (red entries)
   - Check Console tab for JavaScript errors

2. **Token expiration**
   - Log out and log back in
   - This refreshes authentication tokens

3. **Clear browser cache**
   ```
   Ctrl+Shift+Delete (Windows/Linux)
   Cmd+Shift+Delete (Mac)
   ```
   - Select "Cached images and files"
   - Choose time range "All time"

### Incorrect Data Display

**Symptoms**:
- Wrong resource counts
- Missing queue items
- Stale activity feed

**Solutions**:

1. **Manual refresh**
   - Click Refresh button (↻) on affected widget
   - Or press F5 to reload entire page

2. **Check team selection**
   - Verify correct team is selected in dropdown
   - Some data is team-specific

3. **Permission issues**
   - Confirm you have access to view the data
   - Check with administrator for permission updates

## Resource Management Issues

### Cannot Add Machine

**Symptoms**:
- "Create" button disabled in Add Machine dialog
- Form validation errors
- Connection test fails

**Solutions**:

1. **Required fields validation**
   - All fields marked with * are required
   - Red text appears under invalid fields
   - Fill all required fields:
     - Region
     - Bridge  
     - Machine Name
     - IP Address
     - Username
     - Datastore Path

2. **SSH connection test failing**
   - **Verify SSH access**:
     ```bash
     ssh user@ip-address
     ```
   - **Check firewall**: Port 22 (or custom SSH port) must be open
   - **Verify credentials**: Username and password/key must be correct
   - **SSH service running**: Ensure SSH daemon is active on target

3. **Name conflicts**
   - Machine names must be unique
   - Try a different name if one already exists

### Machine Shows as Offline

**Symptoms**:
- Red status indicator
- "Connection failed" in connectivity test
- Queue items stuck in PENDING

**Solutions**:

1. **Test connectivity manually**
   - Click "Connectivity Test" button
   - Review specific error message

2. **Verify machine configuration**
   - Click Edit on the machine
   - Verify IP address hasn't changed
   - Check if SSH port is correct
   - Confirm credentials are still valid

3. **Network issues**
   - Check if machine is powered on
   - Verify network connectivity
   - Test from bridge server:
     ```bash
     ping machine-ip
     ssh user@machine-ip
     ```

## Queue Processing Issues

### Tasks Stuck in PENDING Status

**Symptoms**:
- Queue items remain yellow (PENDING) for extended time
- "Oldest: Xh" warning in Queue Overview
- STALE_PENDING status appears

**Solutions**:

1. **Check bridge status**
   - Go to System → Regions & Infrastructure
   - Verify bridges show "Access" status
   - Check bridge machine count > 0

2. **Bridge not processing**
   - Bridge service may be stopped
   - Contact admin to restart bridge service:
     ```bash
     ./bridge --bridge-mode token=xxx api_url=xxx master_password=xxx
     ```

3. **Machine assignment issues**
   - Verify machine is assigned to correct bridge
   - Check if bridge type matches task requirements
   - Global bridges can't process region-specific tasks

### High Failure Rate

**Symptoms**:
- Many tasks showing red (FAILED) status
- Repeated retry attempts
- Error messages in queue details

**Solutions**:

1. **Check common failure patterns**
   - Click on failed task for error details
   - Look for patterns:
     - Authentication failures
     - Network timeouts
     - Missing dependencies
     - Insufficient permissions

2. **Resource availability**
   - Verify target machine has sufficient:
     - Disk space
     - Memory
     - CPU resources
   - Check datastore path exists and is writable

3. **Vault data issues**
   - Credentials may have changed
   - Update machine vault with new credentials
   - Verify SSH keys are still valid

### Queue Performance Degradation

**Symptoms**:
- Slow task processing
- Increasing pending count
- Bridge appears overloaded

**Solutions**:

1. **Add more bridges**
   - Create additional bridges for load distribution
   - Consider regional bridges for better locality

2. **Optimize task priorities**
   - Review priority distribution
   - Adjust non-critical tasks to lower priority
   - Cancel unnecessary pending tasks

3. **Check bridge resources**
   - Bridge server may need more CPU/memory
   - Network bandwidth may be saturated
   - Consider upgrading bridge infrastructure

## Permission and Access Issues

### "Access Denied" Errors

**Symptoms**:
- Red error notifications
- Features grayed out or hidden
- "Unauthorized" API responses

**Solutions**:

1. **Verify permission group**
   - Check your permission group in System → Users
   - Different groups have different access levels:
     - **Users**: Basic access
     - **Power Users**: Extended features
     - **Administrators**: Full access

2. **Team membership**
   - Ensure you're member of required teams
   - Some resources are team-specific
   - Ask admin to add you to teams

3. **Feature limitations**
   - Some features require specific subscription tier
   - Check if feature is available in your plan

### Session Timeout Issues

**Symptoms**:
- Suddenly logged out
- "Session expired" message
- Must log in frequently

**Solutions**:

1. **Extend session timeout**
   - Contact admin to increase session duration
   - Default is 24 hours

2. **Browser settings**
   - Don't use "Clear cookies on exit" setting
   - Add console URL to exceptions

3. **Multiple tabs**
   - Avoid opening console in multiple tabs
   - Can cause token sync issues

## Browser-Specific Issues

### Console Not Loading in Browser

**Symptoms**:
- Blank white page
- JavaScript errors in console
- Partially loaded interface

**Solutions**:

1. **Update browser**
   - Ensure using supported browser version:
     - Chrome 90+
     - Firefox 88+
     - Safari 14+
     - Edge 90+

2. **Disable problematic extensions**
   - Ad blockers may interfere
   - Disable all extensions temporarily
   - Re-enable one by one to identify culprit

3. **JavaScript enabled**
   - Console requires JavaScript
   - Check browser settings

### Display Issues

**Symptoms**:
- Overlapping elements
- Broken layouts
- Missing icons

**Solutions**:

1. **Zoom level**
   - Reset browser zoom to 100%
   - Ctrl+0 (Windows/Linux) or Cmd+0 (Mac)

2. **Clear cache and hard reload**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

3. **Check console errors**
   - F12 → Console tab
   - Look for CSS or resource loading errors

## Performance Issues

### Slow Page Loading

**Symptoms**:
- Long initial load times
- Sluggish interface
- Delayed responses

**Solutions**:

1. **Network latency**
   - Check ping time to console server
   - Consider using closer regional endpoint

2. **Browser performance**
   - Close unnecessary tabs
   - Restart browser
   - Clear browser cache

3. **Large data sets**
   - Use filters to reduce data
   - Paginate through results
   - Export and analyze offline

### High Memory Usage

**Symptoms**:
- Browser becomes unresponsive
- "Page unresponsive" warnings
- System slowdown

**Solutions**:

1. **Reduce open panels**
   - Close unused tabs in console
   - Limit dashboard widgets

2. **Regular refresh**
   - Refresh page every few hours
   - Clears accumulated memory

3. **Browser choice**
   - Chrome/Edge typically perform better
   - Avoid older browser versions

## Data Integrity Issues

### Missing or Incorrect Data

**Symptoms**:
- Resources not appearing
- Counts don't match reality
- Historical data missing

**Solutions**:

1. **Sync issues**
   - Click Refresh on affected sections
   - Wait for background sync to complete

2. **Filter settings**
   - Check if filters are hiding data
   - Reset filters to defaults

3. **Permission changes**
   - Recent permission changes may affect visibility
   - Log out and back in to refresh permissions

### Vault Decryption Errors

**Symptoms**:
- "Failed to decrypt vault" errors
- Credentials not working
- Configuration appears corrupted

**Solutions**:

1. **Master password mismatch**
   - Verify using correct master password
   - Password may have been changed
   - Contact admin for current password

2. **Vault version conflicts**
   - Older vault versions may be incompatible
   - Admin can migrate vault data

3. **Corruption recovery**
   - Export vault backup if possible
   - Admin can restore from backup
   - May need to recreate configuration

## Getting Additional Help

### Collecting Diagnostic Information

When issues persist, collect:

1. **Browser information**
   - Browser name and version
   - Operating system
   - Screenshot of issue

2. **Error details**
   - Exact error message
   - Time of occurrence
   - Steps to reproduce

3. **Console logs**
   - F12 → Console tab
   - Copy any error messages
   - Include in support ticket

4. **Network trace**
   - F12 → Network tab
   - Reproduce issue
   - Export as HAR file

### Escalation Path

1. **Check documentation**
   - Review relevant guides
   - Search for error messages

2. **Internal support**
   - Contact system administrator
   - Check internal wiki/runbooks

3. **Rediacc support**
   - Elite plan: Priority support
   - Include diagnostic information
   - Provide reproduction steps

### Emergency Procedures

For critical issues:

1. **System-wide outage**
   - Check [status page]
   - Contact on-call administrator
   - Have backup access methods ready

2. **Security incidents**
   - Immediately notify security team
   - Document all observations
   - Preserve logs and evidence

3. **Data loss concerns**
   - Stop all operations
   - Contact administrator immediately
   - Do not attempt recovery without guidance