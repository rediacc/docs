---
sidebar_position: 16
---

# Notifications

The Rediacc Console includes a real-time notification system that keeps you informed about important events, system updates, and task completions. Notifications appear in the notification bell located in the header navigation.

## Overview

The notification system provides:
- **Real-time Updates**: Instant notifications for system events
- **Persistent Storage**: Notifications are saved until manually cleared
- **Type Categorization**: Different notification types for various events
- **Read Status Tracking**: Distinguish between read and unread notifications
- **Batch Management**: Mark all as read or clear all notifications at once

## Accessing Notifications

### Notification Bell

The notification bell icon is located in the top-right corner of the header navigation:
- **Badge Count**: Shows the number of unread notifications as a small red badge
- **Click to Open**: Opens the notification dropdown panel
- **Real-time Updates**: Badge count updates automatically when new notifications arrive

### Notification Panel

When clicked, the notification bell opens a dropdown panel (400px wide) displaying:
- **Header Section**: 
  - "Notifications" title on the left
  - Action buttons on the right: "Mark all as read" and "Clear all"
- **Notification List**: Scrollable list of all notifications (max height: 400px)
- **Empty State**: "No notifications" message when list is empty

## Notification Types

Notifications are categorized by type, each with its own icon and color:

### Success Notifications
- **Icon**: ✅ Green check circle
- **Color**: Green (#52c41a)
- **Tag**: SUCCESS (green background)
- **Use Cases**:
  - Task completed successfully
  - Resource created
  - Operation succeeded
  - Configuration saved

### Error Notifications
- **Icon**: ❌ Red exclamation circle
- **Color**: Red (#ff4d4f)
- **Tag**: ERROR (red background)
- **Use Cases**:
  - Task failed
  - Connection error
  - Permission denied
  - Validation failed

### Warning Notifications
- **Icon**: ⚠️ Yellow warning triangle
- **Color**: Yellow (#faad14)
- **Tag**: WARNING (yellow background)
- **Use Cases**:
  - Resource limits approaching
  - Stale queue items
  - Configuration issues
  - Deprecation notices

### Info Notifications
- **Icon**: ℹ️ Blue info circle
- **Color**: Blue (#1890ff)
- **Tag**: INFO (blue background)
- **Use Cases**:
  - System updates
  - Status changes
  - General information
  - Tips and hints

## Notification Structure

Each notification displays the following information in the dropdown:

```
[Icon] Title                    [Type Tag]    [X]
Message description with full details
Timestamp (e.g., "2 minutes ago")
```

### Components:
1. **Type Icon**: Visual indicator of notification type (left side)
2. **Title**: Brief summary of the notification (bold text)
3. **Type Tag**: Colored tag showing notification category (e.g., SUCCESS, ERROR)
4. **Close Button**: X icon to remove individual notification
5. **Message**: Detailed description of the event (gray text)
6. **Timestamp**: Relative time since notification created (e.g., "5 minutes ago")

## Managing Notifications

### Individual Actions

#### Mark as Read
- Click on any notification to mark it as read
- Read notifications appear with reduced opacity
- Unread count in badge updates automatically
- Unread notifications have bold titles

#### Remove Notification
- Click the X button on any notification
- Removes the notification permanently
- Cannot be undone
- Updates the unread count if notification was unread

### Bulk Actions

Located in the notification panel header:

#### Mark All as Read
- **Button Text**: "Mark all as read" (blue link)
- **Action**: Marks all notifications as read
- **Disabled State**: Grayed out when no unread notifications exist
- **Effect**: Clears the badge count immediately

#### Clear All
- **Button Text**: "Clear all" (red link)
- **Action**: Removes all notifications permanently
- **Warning**: No confirmation dialog - use carefully
- **Effect**: Empties the notification list completely

## Common Notifications

### Queue Notifications
- **Task Started**: When a queue item begins processing
- **Task Completed**: Successful task completion with green check icon
- **Task Failed**: Task encountered an error with red X icon
- **Queue Stale**: Task hasn't updated in expected time with warning icon

### Resource Notifications
- **Machine Added**: New machine successfully configured
- **Connection Test**: Results of connectivity tests
- **Resource Limit**: Approaching or at resource limits (warning)
- **Vault Updated**: Configuration changes saved (success)

### System Notifications
- **Login Success**: Successful authentication (info)
- **Session Expiring**: Warning before session timeout
- **Permission Changes**: Updates to user permissions
- **System Maintenance**: Scheduled downtime notices

### Deployment Notifications
- **Template Deployed**: Marketplace template deployment status
- **Repository Created**: New repository configuration
- **Schedule Triggered**: Scheduled task execution
- **Backup Completed**: Successful backup operations

## Notification Behavior

### Persistence
- Notifications persist in Redux state
- Survive page refreshes within session
- Cleared only by explicit user action
- No automatic expiration or cleanup

### Real-time Updates
- New notifications appear instantly
- No page refresh required for new notifications
- Badge count updates immediately
- Smooth animations for new entries

### Visual Feedback
- Unread notifications have bold titles
- Read notifications show with reduced opacity
- Hover effects on clickable elements
- Smooth transitions for all interactions

## Best Practices

### Notification Management
1. **Regular Review**: Check notifications at least daily
2. **Clear Completed**: Remove processed notifications to reduce clutter
3. **Monitor Errors**: Address error notifications promptly
4. **Use Bulk Actions**: Clear all when notification list gets too long

### Response Guidelines
- **Error Notifications**: Investigate and resolve immediately
- **Warning Notifications**: Plan remediation actions within 24 hours
- **Success Notifications**: Verify expected outcomes were achieved
- **Info Notifications**: Review for awareness, no action typically required

### Notification Hygiene
- Don't let notifications accumulate beyond 50 items
- Use "Mark all as read" after reviewing all notifications
- Clear resolved error/warning notifications immediately
- Keep success notifications briefly for confirmation

## Technical Details

### Implementation
- Built with React and Ant Design components
- Redux state management for persistence
- Dropdown component with 400px width constraint
- Relative time formatting using dayjs library

### Performance
- Efficient list rendering for up to 100 notifications
- Minimal re-renders using React optimization
- Small memory footprint in browser
- Fast open/close animations

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- No special permissions needed
- Responsive design adapts to screen size

## Troubleshooting

### Notifications Not Appearing
1. Refresh the browser page
2. Check if JavaScript is enabled
3. Clear browser cache and cookies
4. Verify you're logged in properly

### Badge Count Incorrect
1. Click notification bell to sync state
2. Use "Mark all as read" to reset count
3. Clear browser storage if issue persists
4. Log out and back in

### Performance Issues
1. Clear old notifications using "Clear all"
2. Limit active notifications to under 50
3. Check browser console for errors
4. Disable browser extensions temporarily

## Related Features

- **[Dashboard](./dashboard.md)**: Recent Activity feed shows audit events
- **[Queue Management](./queue.md)**: Queue status triggers notifications
- **[Audit Logs](./audit.md)**: Complete history of all system events
- **[System Settings](./system.md)**: User preferences and configuration