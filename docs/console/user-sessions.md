---
sidebar_position: 14
---

# User Sessions

The User Sessions feature in the Rediacc Console provides administrators with comprehensive visibility and control over active user sessions across the platform. This powerful administrative tool helps maintain security, troubleshoot access issues, and ensure proper resource utilization.

## Overview

The User Sessions management system allows administrators to:
- Monitor all active console and API sessions in real-time
- View detailed session information including authentication methods
- Track session duration and last activity timestamps
- Identify concurrent logins and service accounts
- Terminate sessions for security or maintenance purposes
- Analyze usage patterns and access trends

## Accessing User Sessions

To access the User Sessions feature:

1. Navigate to **System** in the sidebar (⚙️ setting icon)
2. Click on the **User Sessions** tab (🖥️ desktop icon)
3. View the comprehensive session monitoring interface

**Required Permissions**: Administrator role or User Management permissions

## Session Dashboard

### Statistics Cards

The top of the User Sessions tab displays four key metrics in card format:

1. **Total Sessions**
   - Shows the total number of sessions (both active and inactive)
   - Helps track overall system usage

2. **Active Sessions** 
   - Displays currently active sessions
   - Shown in green color (#3f8600) to indicate live status
   - Critical for monitoring current system load

3. **Unique Users**
   - Counts distinct users who have sessions
   - Useful for understanding user engagement

4. **Average Duration**
   - Calculates the mean session length in minutes
   - Helps identify usage patterns

### Session Management Table

Below the statistics, a comprehensive table displays all sessions with the following columns:

#### User Information
- **User**: Email address of the session owner
  - Current user's session is highlighted with a blue "Current Session" tag
  - Makes it easy to identify your own session

#### Session Details
- **Session Name**: Identifier for the session
- **IP Address**: Source IP of the connection
- **User Agent**: Browser and OS information (with ellipsis for long strings)

#### Status Information
- **Status**: Active (green tag) or Inactive (red tag)
- **Created At**: Session start timestamp (YYYY-MM-DD HH:mm:ss format)
  - Sortable column, default sorted by newest first
- **Last Activity**: Relative time since last action (e.g., "5 minutes ago")
- **Duration**: Calculated session length in minutes

#### Actions
- **Terminate Button**: Red "Terminate" link with close circle icon
  - Only enabled for active sessions
  - Shows confirmation dialog before termination

## Key Features

### Search Functionality

A search bar in the table header allows filtering by:
- User email
- IP address
- Session name

The search is case-insensitive and updates results in real-time.

### Session Termination

To terminate a session:

1. Locate the active session in the table
2. Click the **Terminate** button in the Actions column
3. Confirm the action in the popup dialog

**Important Notes**:
- Terminating your own session shows a special warning
- Only active sessions can be terminated
- Terminated sessions require the user to log in again

### Refresh Capability

A **Refresh** button next to the "User Sessions" title allows manual data refresh:
- Shows loading spinner while refreshing
- Updates all statistics and session data
- Useful for monitoring real-time changes

### Pagination

The table includes pagination controls:
- Default page size of 10 items
- Adjustable page size options
- Shows total count (e.g., "Total 25 items")

### Responsive Design

The table is horizontally scrollable (x: 1500px) to accommodate all columns on smaller screens.

## Technical Implementation

### Data Structure

Each session record includes:
```typescript
{
  requestId: string        // Unique session identifier
  userEmail: string       // User's email address
  sessionName: string     // Session name/identifier
  ipAddress: string      // Client IP address
  userAgent: string      // Browser/client information
  isActive: boolean      // Current session status
  createdAt: string      // ISO timestamp of creation
  lastActivity: string   // ISO timestamp of last action
}
```

### API Integration

The feature uses these API endpoints:
- `GET /api/UserRequests` - Fetch all sessions
- `DELETE /api/UserRequest/{requestId}` - Terminate a session

### Real-time Updates

Sessions are tracked through the token rotation system:
- Each API request updates the session's last activity
- Token rotation maintains session security
- Activity tracking happens automatically

## Security Considerations

### Session Security
- Sessions use rotating tokens for enhanced security
- Each session has a unique request ID
- IP addresses are tracked for security auditing

### Permission Requirements
- Only administrators can access the User Sessions tab
- Users can only see sessions within their organization
- Session termination is logged in audit trails

### Self-Termination Warning
When terminating your own session:
- A special warning appears in the confirmation dialog
- The system warns about immediate logout
- Current work should be saved before proceeding

## Best Practices

### Regular Monitoring
1. Review active sessions daily
2. Check for sessions from unexpected IP addresses
3. Monitor long-running sessions
4. Look for unusual activity patterns

### Security Response
1. Terminate suspicious sessions immediately
2. Investigate unexpected IP addresses
3. Review user agent strings for anomalies
4. Check session duration for outliers

### Performance Optimization
- Use search to quickly find specific sessions
- Sort by creation date to see newest sessions
- Filter by active status during investigations
- Regularly refresh data when monitoring

## Troubleshooting

### Sessions Not Updating
- Click the Refresh button to force update
- Check browser console for errors
- Verify network connectivity
- Clear browser cache if issues persist

### Unable to Terminate Sessions
- Ensure you have administrator permissions
- Verify the session is still active
- Check for network connectivity issues
- Review browser console for API errors

### Incorrect Statistics
- Refresh the page to recalculate
- Check for duplicate sessions
- Verify time zone settings
- Contact support if discrepancies continue

## Integration with Other Features

### Audit Logs
All session events are tracked:
- Session creation
- Termination actions
- Failed termination attempts

### Token System
Sessions utilize the platform's token rotation:
- Automatic token refresh
- Secure session management
- Seamless user experience

### Authentication
Sessions are created through:
- Standard login process
- API authentication
- SSO integration (if configured)

## Related Documentation

- [System Settings](./system.md) - Overview of system management features
- [Authentication](./authentication.md) - Login and security details
- [Audit Logs](./audit.md) - Activity tracking and monitoring
- [API Integration](./api-integration.md) - Token rotation system