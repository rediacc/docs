# Team-Member Commands

Commands for team-member operations.

## Table of Contents

- [team-member add](#team-member-add)
- [team-member remove](#team-member-remove)


## team-member add


### add

Add user to team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/CreateTeamMembership`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Grants a user membership in a team, giving them access to all team resources including machines, repositories, and storages.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name | true | dev-team |
| `email` | User email address | true | developer@company.com |

#### Examples

```bash
rediacc-cli team-member add dev-team john@company.com
```
Add John to development team

```bash
rediacc-cli team-member add production admin@company.com
```
Add admin to production team

#### Notes

User must exist and be activated. You must be a team member to add others. Changes take effect immediately.

#### Business Rules

- Requires team admin or company admin permissions
- User must already have an account in the company
- User must have activated their account
- Cannot add users from other companies
- Users can be members of multiple teams
- Team role determines permissions within that team only
- Adding as Admin grants full control over team resources
- Member role provides read and basic write access
- Operation is logged in audit trail
- Triggers notification email to the added user


## team-member remove


### remove

Remove user from team

#### API Information

**Endpoint:** `POST /api/StoredProcedure/DeleteUserFromTeam`
**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Details

Revokes a user's team membership, removing their access to all team resources. The user remains in the company.

#### Parameters

| Parameter | Description | Required | Example |
|-----------|-------------|----------|---------|
| `team` | Team name | true | dev-team |
| `email` | User email to remove | true | former-member@company.com |
| `force` | Skip confirmation prompt | false | --force |

#### Examples

```bash
rediacc-cli team-member remove dev-team contractor@external.com
```
Remove contractor with confirmation

```bash
rediacc-cli team-member remove production ex-employee@company.com --force
```
Force remove without confirmation

#### Notes

Cannot remove last team member. User loses access immediately. Consider impact on active work.

#### Business Rules

- Requires team admin or company admin permissions
- Cannot remove the last admin from a team
- User immediately loses access to all team resources
- Active sessions for team resources are terminated
- Does not delete the user account from the company
- User can be re-added to the team later if needed
- Removal is logged in audit trail
- Any running operations by the user continue to completion
- User's personal data and contributions are preserved
- Triggers notification email to the removed user

