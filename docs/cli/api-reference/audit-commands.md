# Audit Commands

Commands for audit operations.

## Table of Contents

- [audit trace](#audit-trace)


## audit trace


### trace

Get detailed audit trail for entity

#### API Information

**Endpoint:** `POST /api/StoredProcedure/GetEntityAuditTrace`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Retrieves comprehensive audit information for a specific entity including all changes, access logs, and related operations.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `entity_type` | Type of entity (Team, Machine, User, Region, Bridge) | true | Machine |
| `credential` | Entity credential (GUID) | true | 550e8400-e29b-41d4-a716-446655440000 |
| `max-records` | Maximum records to retrieve | false | 1000 |

#### Examples

```bash
rediacc-cli audit trace Machine 550e8400-e29b-41d4-a716-446655440000
```
Get full audit trail for machine

```bash
rediacc-cli audit trace User 123e4567-e89b-12d3-a456-426614174000 --max-records 50
```
Get last 50 audit entries for user

#### Notes

More detailed than entity-history. Includes access logs, failed attempts, and related entity changes.

#### Business Rules

- User must be authenticated with valid credentials
- Regular users can only view their own audit history
- Team members can view audit for team resources
- Administrators can view all company entity audits
- Audit retention varies by subscription tier (7-365 days)
- Maximum 100 records shown at once
- Sensitive operations masked for non-administrators
- Entity must exist and belong to your company
- Region, bridge, permissions require admin access
- Results sorted newest to oldest

