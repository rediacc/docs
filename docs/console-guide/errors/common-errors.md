---
sidebar_position: 90
---

# Common Errors and Solutions

This page documents common errors encountered in the Rediacc Console and their solutions.

## Authentication Errors

### Invalid Credentials

**Error Message:**
```
Authentication failed: Invalid email or password
```

**Cause:** Incorrect login credentials

**Solution:**
1. Verify email address is correct
2. Check password (case-sensitive)
3. Reset password if forgotten
4. Contact administrator if account is locked

### Token Expired

**Error Message:**
```
Session expired. Please login again.
```

**Cause:** Security token has expired

**Solution:**
1. Log in again with your credentials
2. Check "Remember me" for longer sessions
3. Review session timeout settings with admin

### Vault Decryption Failed

**Error Message:**
```
Failed to decrypt vault data: Invalid encryption password
```

**Cause:** Wrong client-side encryption password

**Solution:**
1. Verify encryption password
2. Check with team members for correct password
3. Contact administrator if password was changed

## Connection Errors

### SSH Connection Failed

**Error Message:**
```
Failed to establish SSH connection to machine: Connection refused
```

**Possible Causes:**
- SSH service not running
- Firewall blocking connection
- Wrong IP address or port
- Network connectivity issues

**Solutions:**
1. Verify SSH service is running:
   ```bash
   sudo systemctl status sshd
   ```
2. Check firewall rules:
   ```bash
   sudo ufw status
   ```
3. Test network connectivity:
   ```bash
   ping machine-ip-address
   telnet machine-ip-address 22
   ```
4. Verify SSH configuration allows connections

### Authentication Key Rejected

**Error Message:**
```
Permission denied (publickey)
```

**Cause:** SSH key authentication failed

**Solutions:**
1. Verify private key format (should start with `-----BEGIN OPENSSH PRIVATE KEY-----`)
2. Check public key is in `~/.ssh/authorized_keys` on target machine
3. Verify key permissions:
   ```bash
   chmod 600 ~/.ssh/authorized_keys
   chmod 700 ~/.ssh
   ```
4. Regenerate and re-add SSH keys if necessary

### Datastore Access Denied

**Error Message:**
```
Cannot access datastore path: Permission denied
```

**Cause:** Insufficient permissions on datastore directory

**Solution:**
```bash
# On the target machine
sudo chown -R rediacc-user:rediacc-group /opt/rediacc/datastore
sudo chmod -R 755 /opt/rediacc/datastore
```

## Queue Errors

### Task Stuck in Pending

**Symptoms:** Task remains in pending state indefinitely

**Possible Causes:**
- No bridge available
- Bridge not processing tasks
- Machine offline
- Resource constraints

**Solutions:**
1. Check bridge status:
   ```bash
   rediacc-cli list bridges --status
   ```
2. Verify machine is online and accessible
3. Check bridge logs for errors
4. Restart bridge if necessary
5. Verify queue priority settings

### Task Failed with Exit Code

**Error Message:**
```
Task failed with exit code: 1
```

**Cause:** Script or command returned non-zero exit code

**Solutions:**
1. Check task logs for specific error
2. Verify script syntax
3. Check required dependencies are installed
4. Test script manually on machine
5. Review environment variables

### Queue Processing Timeout

**Error Message:**
```
Task exceeded maximum execution time
```

**Cause:** Task took longer than allowed timeout

**Solutions:**
1. Increase timeout in task configuration
2. Optimize script performance
3. Break large tasks into smaller ones
4. Check for infinite loops or hanging processes

## Resource Errors

### Machine Capacity Exceeded

**Error Message:**
```
Cannot assign task: Machine at capacity
```

**Cause:** Machine has reached maximum concurrent task limit

**Solutions:**
1. Wait for current tasks to complete
2. Increase machine capacity limits
3. Add more machines to the pool
4. Distribute load across regions

### Storage Quota Exceeded

**Error Message:**
```
Storage operation failed: Quota exceeded
```

**Cause:** Storage limit reached

**Solutions:**
1. Clean up old backups
2. Implement retention policies
3. Increase storage quota
4. Archive to cheaper storage tiers

### Repository Clone Failed

**Error Message:**
```
Failed to clone repository: Authentication failed
```

**Cause:** Repository credentials invalid or expired

**Solutions:**
1. Update repository credentials
2. Regenerate access tokens
3. Verify repository permissions
4. Check network access to repository

## System Errors

### Database Connection Lost

**Error Message:**
```
Lost connection to database server
```

**Cause:** Database server unavailable

**Solutions:**
1. Check database server status
2. Verify network connectivity
3. Review database logs
4. Contact system administrator
5. Wait for automatic reconnection

### API Rate Limit Exceeded

**Error Message:**
```
API rate limit exceeded. Try again later.
```

**Cause:** Too many API requests

**Solutions:**
1. Wait for rate limit reset
2. Implement request throttling
3. Use batch operations
4. Cache frequently accessed data

### Vault Version Mismatch

**Error Message:**
```
Vault version mismatch: Expected v2, got v1
```

**Cause:** Outdated vault configuration

**Solutions:**
1. Update vault configuration
2. Migrate vault data to new version
3. Check for pending updates
4. Contact support if migration fails

## Deployment Errors

### Docker Not Found

**Error Message:**
```
docker: command not found
```

**Cause:** Docker not installed on machine

**Solution:**
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### Container Start Failed

**Error Message:**
```
Error response from daemon: Conflict. Container name already in use
```

**Cause:** Container with same name exists

**Solutions:**
1. Remove existing container:
   ```bash
   docker rm -f container-name
   ```
2. Use unique container names
3. Implement cleanup in deployment scripts

### Image Pull Failed

**Error Message:**
```
Error pulling image: unauthorized
```

**Cause:** Registry authentication failed

**Solutions:**
1. Update registry credentials
2. Docker login to registry:
   ```bash
   docker login registry-url
   ```
3. Verify image exists and is accessible
4. Check registry permissions

## Performance Issues

### Slow Console Response

**Symptoms:** Console interface is sluggish

**Possible Causes:**
- Large dataset queries
- Network latency
- Browser cache issues
- Server resource constraints

**Solutions:**
1. Clear browser cache
2. Use pagination for large lists
3. Enable browser developer tools and check for errors
4. Contact administrator to check server resources

### High Memory Usage

**Error Message:**
```
Out of memory: Kill process
```

**Cause:** Process exceeded memory limits

**Solutions:**
1. Increase memory limits
2. Optimize resource usage
3. Add swap space:
   ```bash
   sudo fallocate -l 4G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

## Security Errors

### Permission Denied

**Error Message:**
```
Permission denied: Insufficient privileges
```

**Cause:** User lacks required permissions

**Solutions:**
1. Verify user role and permissions
2. Request access from administrator
3. Check team membership
4. Review permission groups

### Certificate Verification Failed

**Error Message:**
```
SSL certificate verification failed
```

**Cause:** Invalid or expired SSL certificate

**Solutions:**
1. Update SSL certificates
2. Check certificate expiration
3. Verify certificate chain
4. For testing only: disable verification (not recommended for production)

## Troubleshooting Steps

### General Debugging Process

1. **Check Logs**
   - Console browser logs (F12)
   - API server logs
   - Bridge logs
   - Machine system logs

2. **Verify Configuration**
   - Connection settings
   - Credentials
   - Permissions
   - Network accessibility

3. **Test Isolation**
   - Test individual components
   - Use CLI tools for direct testing
   - Verify from different machines

4. **Escalation Path**
   - Try known working configuration
   - Consult documentation
   - Check known issues
   - Contact support

### Useful Commands

```bash
# Test SSH connectivity
ssh -v user@machine-ip

# Check Docker status
docker info

# Verify disk space
df -h

# Check system resources
top
htop
free -m

# Network diagnostics
netstat -an | grep LISTEN
ss -tlnp

# Process list
ps aux | grep rediacc

# System logs
journalctl -xe
tail -f /var/log/syslog
```

## Getting Help

If you cannot resolve an error:

1. **Gather Information**
   - Error message
   - Steps to reproduce
   - System configuration
   - Recent changes

2. **Check Resources**
   - This documentation
   - [Known Issues](../known-issues.md)
   - Community forums
   - Support portal

3. **Contact Support**
   - Include all gathered information
   - Provide logs and screenshots
   - Describe attempted solutions
   - Include ticket priority

Remember: Most errors have been encountered before. Check documentation and forums before escalating to support.