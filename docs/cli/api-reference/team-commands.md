# Team

Team operations.

## Table of Contents

- [update-team-vault](#update-team-vault)


## update-team-vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateTeamVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `team` | string | Yes | - |  |  |
| `vault` | string | No | - |  |  |
| `vault_version` | string | No | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc team update-team-vault example-team
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateTeamVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "teamName": "example-team"
}'
```

