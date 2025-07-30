# Region

Region operations.

## Table of Contents

- [update-region-vault](#update-region-vault)


## update-region-vault

#### API Information

**Endpoint:** `POST /api/StoredProcedure/UpdateRegionVault`

**Authentication:** Required (token-based with Rediacc-RequestToken header)

#### Parameters

| Parameter | Type | Required | Default | Description | Example |
|-----------|------|----------|---------|-------------|---------|
| `region` | string | Yes | - |  |  |
| `vault` | string | No | - |  |  |
| `vault_version` | string | No | - |  |  |

##### Auto-Generated CLI Examples

```bash
# Basic usage (required parameters only)
rediacc-cli region update-region-vault us-east
```

##### Auto-Generated cURL Examples

```bash
# Using token authentication
curl -X POST "https://www.rediacc.com/api/StoredProcedure/UpdateRegionVault" \
  -H "Content-Type: application/json" \
  -H "Rediacc-RequestToken: YOUR_TOKEN_HERE" \
  -d '{
    "regionName": "us-east"
}'
```

