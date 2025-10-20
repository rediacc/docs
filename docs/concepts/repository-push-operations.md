---
sidebar_position: 4
title: Repository Push Operations
description: Understanding online and offline push operations for safe repository backups
---

# Repository Push Operations

Push operations allow you to create backups of your repositories to remote storage locations. Understanding the difference between online and offline pushes is crucial for maintaining data integrity and implementing effective backup strategies.

## Overview

A push operation creates a snapshot of your repository and transfers it to a remote storage location (machine or storage system). The critical distinction lies in whether the repository is mounted (online) or unmounted (offline) during the push operation.

## Online vs Offline Push

### Quick Comparison

| Aspect | Online Push | Offline Push |
|--------|-------------|--------------|
| **Repository State** | Mounted (services running) | Unmounted (services stopped) |
| **Convenience** | High - no service interruption | Low - requires downtime |
| **Data Consistency** | Potentially inconsistent | Guaranteed consistent |
| **Use Case** | Regular/frequent backups | Critical recovery points |
| **Risk Level** | Medium | Minimal |
| **Recommended Frequency** | Hourly/daily | Weekly/monthly |

### Online Push (Mounted Repository)

An online push backs up your repository while it remains mounted and services continue running.

**Advantages:**
- No service downtime required
- Can be performed frequently without disruption
- Ideal for regular backup schedules
- Minimal impact on operations

**Potential Risks:**
- **Database inconsistencies**: Open transactions may be interrupted mid-process
- **Partial data writes**: Applications actively writing files may result in incomplete or corrupted data
- **File locks**: Temporary files and locks may be captured in the snapshot
- **Cache states**: In-memory caches may not match disk state

**Best For:**
- Hourly or frequent backup schedules
- Non-critical backup points
- Development and staging environments
- Situations where downtime is not acceptable

### Offline Push (Unmounted Repository)

An offline push backs up your repository after it has been unmounted and all services have stopped.

**Advantages:**
- Guaranteed data consistency
- No risk of corrupted or partial data
- Clean snapshot without temporary files
- All database transactions completed
- Cache and disk states synchronized

**Disadvantages:**
- Requires service downtime
- More disruptive to operations
- Cannot be performed as frequently

**Best For:**
- Critical recovery points
- Weekly or monthly comprehensive backups
- Production environment safety snapshots
- Compliance and audit requirements
- Before major system changes

## Best Practices

### Hybrid Backup Strategy

Combine both approaches for optimal protection:

```
Daily Schedule:
- 08:00 - Online push (convenient daily backup)
- 12:00 - Online push (midday backup)
- 16:00 - Online push (afternoon backup)
- 20:00 - Online push (evening backup)

Weekly Schedule:
- Sunday 02:00 - Offline push (weekly consistent snapshot)
```

### When to Choose Online Push

Use online pushes when:
- You need frequent backup points (hourly/multiple times daily)
- Downtime is not acceptable
- You have other offline backups as safety anchors
- Data change rate is moderate
- Recovery Point Objective (RPO) is measured in hours

### When to Choose Offline Push

Use offline pushes when:
- Creating critical recovery points
- Before major deployments or updates
- For compliance or audit requirements
- Weekly/monthly comprehensive backups
- Data integrity is paramount
- You can afford brief downtime

### Recommended Pattern

1. **Frequent online pushes** for operational flexibility (multiple per day)
2. **Regular offline pushes** for guaranteed consistency (weekly)
3. **Pre-change offline pushes** before major updates or deployments

This ensures you have:
- Recent recovery points (online pushes)
- Fully consistent safety checkpoints (offline pushes)
- Maximum data protection with minimal disruption

## Online Push Risks in Detail

### Database Services

**Risk**: Active database transactions may be interrupted

**Example Scenario:**
```
Time 12:00:00 - Transaction begins (UPDATE 1000 records)
Time 12:00:15 - Push operation captures snapshot
Time 12:00:30 - Transaction completes
Result: Snapshot contains partial transaction (inconsistent state)
```

**Mitigation:**
- Schedule during low-activity periods
- Use database-specific backup tools for critical data
- Maintain weekly offline pushes as safety net

### File Write Operations

**Risk**: Applications writing files may produce partial data

**Example Scenario:**
```
Application writing large log file (100MB)
- 50MB written to disk
- Push operation captures snapshot
- Remaining 50MB written after snapshot
Result: Incomplete file in backup
```

**Mitigation:**
- Implement application-level flush mechanisms
- Use offline pushes for critical file-based systems
- Verify backup integrity periodically

### Temporary Files and Locks

**Risk**: Temporary state captured in snapshot

**Common Issues:**
- Lock files preventing service restart
- Temporary processing files consuming space
- Cache directories with stale data
- Socket files that won't work in restored environment

**Mitigation:**
- Regular cleanup of temporary directories
- Offline pushes for clean snapshots
- Post-restore cleanup procedures

## Recovery Considerations

### From Online Push

When recovering from an online push:
1. Expect potential data inconsistencies
2. Run database repair/recovery tools
3. Verify application state
4. Check for incomplete transactions
5. Review logs for anomalies

### From Offline Push

When recovering from an offline push:
1. Data should be consistent and ready
2. Minimal verification needed
3. Clean application state
4. No partial transactions
5. Faster recovery process

## Monitoring and Validation

### Backup Verification

Regularly verify your backups:
- Test restoration procedures
- Validate data integrity
- Check file completeness
- Verify database consistency
- Document recovery time

### Tracking Metrics

Monitor these metrics:
- Backup success rate
- Backup duration
- Storage consumption
- Recovery time objective (RTO)
- Recovery point objective (RPO)

## Use Case Examples

### Example 1: E-commerce Platform

**Strategy:**
- Online push every 4 hours (6 daily backups)
- Offline push every Sunday at 2 AM
- Pre-deployment offline push before major releases

**Rationale:**
- Frequent online pushes minimize data loss risk (max 4 hours)
- Weekly offline push provides guaranteed consistent recovery point
- Pre-deployment backup enables safe rollback

### Example 2: Development Environment

**Strategy:**
- Online push every 2 hours during work hours
- No scheduled offline pushes
- Manual offline push before major refactoring

**Rationale:**
- Development data less critical than production
- Frequent online pushes sufficient
- Offline pushes only when needed

### Example 3: Production Database

**Strategy:**
- Online push every hour (24/7)
- Offline push daily at 3 AM (low traffic period)
- Immediate offline push before schema changes

**Rationale:**
- Maximum data protection with hourly backups
- Daily offline push ensures daily consistent recovery point
- Schema changes require guaranteed consistent backup

## Integration with Rediacc Features

### Smart Deduplication Benefits

Both online and offline pushes benefit from Smart deduplication:
- Only changed data is transferred
- Storage costs remain minimal
- Push operations complete quickly
- Multiple backups don't multiply storage costs

Learn more: [Smart Deduplication](/concepts/smart-deduplication)

### Queue Priority

Push operations can be prioritized in the queue system:
- **P1 (Highest)**: Emergency pre-change backups (33-second timeout - may not complete)
- **P2 (High)**: Critical scheduled offline pushes
- **P3 (Above Normal)**: Important online pushes
- **P4 (Normal)**: Regular scheduled backups
- **P5 (Low)**: Optional or redundant backups

## Compliance and Audit

### Meeting Requirements

For compliance purposes:
- Offline pushes provide certifiable consistent backups
- Audit trails track all push operations
- Retention policies can be automated
- Recovery testing demonstrates capability

### Documentation

Maintain records of:
- Backup schedules and actual execution times
- Success/failure rates
- Recovery tests performed
- Data integrity verifications
- Retention policy adherence

## Troubleshooting

### Online Push Shows Warnings

**Issue**: System warns about data consistency risks

**Action**:
- Acknowledge the trade-off between convenience and consistency
- Ensure offline pushes are scheduled regularly
- Consider scheduling online pushes during lower activity periods

### Push Operations Taking Too Long

**Issue**: Push operations exceeding expected duration

**Possible Causes**:
- High data change rate between pushes
- Network bandwidth limitations
- Storage performance issues

**Solutions**:
- Increase push frequency (less data per push)
- Upgrade network capacity
- Optimize storage performance
- Consider compression options

### Recovery from Push Fails

**Issue**: Restored repository has issues

**From Online Push**:
- Run database consistency checks
- Use database repair tools
- Review application logs
- Consider restoring from latest offline push instead

**From Offline Push**:
- Should be rare - contact support
- Check storage integrity
- Verify push operation logs
- Attempt restoration from different offline push

## Conclusion

Understanding the distinction between online and offline pushes is crucial for implementing an effective backup strategy. While online pushes provide convenience and minimal disruption, offline pushes guarantee data consistency.

**Key Takeaways:**
1. Use online pushes for frequent, convenient backups
2. Use offline pushes for guaranteed consistent recovery points
3. Implement a hybrid strategy combining both approaches
4. Always have recent offline pushes for critical recovery scenarios
5. Test your recovery procedures regularly

The best backup strategy isn't the one that creates the most backups—it's the one that balances operational needs with data protection requirements while ensuring you can actually recover when needed.
