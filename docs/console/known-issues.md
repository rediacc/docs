---
sidebar_position: 95
---

# Known Issues & Troubleshooting

This page documents known issues and common problems encountered in the Rediacc Console, along with their solutions.

## Vault Encryption Warning

### Issue
When logging in, you may see the warning message:
```
⚠️ Your company has not enabled vault encryption yet. The master password you entered will not be used.
```

### Cause
The organization has not yet enabled client-side vault encryption in the company settings.

### Solution
1. Navigate to System > Settings
2. Access Company Settings
3. Click "Configure Vault"
4. Enable vault encryption
5. Set the master encryption password
6. Notify all users of the new requirement

### Impact
- Client-side encryption password field is ignored
- Vault data is encrypted server-side only
- No client-side encryption benefits

## Common Console Issues

### Login Problems

**Issue: Cannot log in despite correct credentials**

Possible causes:
- Account deactivated
- Session token expired
- Browser cache issues
- Network connectivity

Solutions:
1. Clear browser cache and cookies
2. Try incognito/private mode
3. Check with administrator for account status
4. Verify network connectivity

**Issue: "Invalid Date" in resource tables**

Cause:
- Timestamp parsing error
- Timezone mismatch
- Missing data

Solution:
- Refresh the page
- Check browser console for errors
- Report to system administrator

### Performance Issues

**Issue: Console loads slowly**

Possible causes:
- Large datasets
- Network latency
- Browser performance
- Server load

Solutions:
1. Use filters to reduce data
2. Paginate results
3. Clear browser cache
4. Try different browser
5. Check network speed

**Issue: Operations timeout**

Cause:
- Long-running operations
- Network interruptions
- Server processing delays

Solution:
- Retry operation
- Check queue status
- Verify network stability
- Contact support if persistent

### Display Issues

**Issue: UI elements misaligned**

Possible causes:
- Browser zoom level
- Screen resolution
- CSS loading issues

Solutions:
1. Reset browser zoom to 100%
2. Refresh the page
3. Clear browser cache
4. Check browser compatibility

**Issue: Missing icons or images**

Cause:
- Asset loading failure
- Network blocking
- Cache corruption

Solution:
- Hard refresh (Ctrl+Shift+R)
- Check network tab for errors
- Disable ad blockers
- Clear cache

## Browser Compatibility

### Supported Browsers

Fully supported:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Limited support:
- Older versions
- Mobile browsers
- Opera
- Brave

Not supported:
- Internet Explorer
- Legacy Edge
- Outdated browsers

### Browser-Specific Issues

**Chrome/Edge**
- Hardware acceleration issues
- Extension conflicts

**Firefox**
- Websocket connectivity
- Font rendering

**Safari**
- Cookie handling
- LocalStorage limits

## Data Synchronization

### Issue: Stale data displayed

Symptoms:
- Old information shown
- Changes not reflected
- Counters incorrect

Solutions:
1. Manual refresh
2. Clear browser cache
3. Check auto-refresh settings
4. Verify API connectivity

### Issue: Conflicting updates

Cause:
- Multiple users editing
- Race conditions
- Network delays

Prevention:
- Coordinate changes
- Use locking mechanisms
- Refresh before editing

## Security Warnings

### Certificate Issues

**Issue: SSL certificate warnings**

Solutions:
1. Verify certificate validity
2. Check system date/time
3. Update browser
4. Contact IT for certificate renewal

### Cross-Origin Errors

**Issue: CORS policy blocks requests**

Cause:
- Misconfigured headers
- Domain mismatch
- Protocol mismatch

Solution:
- Verify console URL
- Check API configuration
- Use correct protocol (HTTP/HTTPS)

## Queue System Issues

### Tasks Stuck in Pending

Possible causes:
- Bridge offline
- Machine unavailable
- Configuration error

Troubleshooting:
1. Check bridge status
2. Verify machine connectivity
3. Review task configuration
4. Check vault credentials

### Failed Task Recovery

Steps:
1. Review error in queue details
2. Fix underlying issue
3. Retry task manually
4. Monitor completion

## Reporting Issues

### Information to Collect

When reporting issues:
1. Browser type and version
2. Console URL
3. User account
4. Steps to reproduce
5. Error messages
6. Screenshots
7. Browser console logs
8. Network tab data

### Where to Report

1. Internal IT helpdesk
2. System administrator
3. Rediacc support
4. GitHub issues (if applicable)

## Preventive Measures

### Regular Maintenance

1. Clear browser cache weekly
2. Update browsers regularly
3. Monitor system health
4. Review audit logs

### Best Practices

1. Use supported browsers
2. Maintain stable network
3. Follow security guidelines
4. Report issues promptly

## Emergency Procedures

### Console Inaccessible

1. Try alternate browser
2. Check system status page
3. Contact administrator
4. Use CLI as backup

### Data Loss Prevention

1. Regular exports
2. Audit log backups
3. Configuration documentation
4. Change tracking