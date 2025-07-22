# Audit Management

Audit management provides comprehensive logging and monitoring capabilities for tracking system activities, entity histories, and generating dashboard reports.

## Get Audit Logs

Retrieve audit logs for the company with filtering options.

### Endpoint
`POST /api/StoredProcedure/GetAuditLogs`

### Headers
```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body
```json
{
  "CompanyGuid": "string",
  "PageNumber": "number",
  "PageSize": "number",
  "StartDate": "datetime",
  "EndDate": "datetime",
  "EntityType": "string",
  "EntityGuid": "string",
  "ActionType": "string"
}
```

### Response
```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "AuditGuid": "string",
          "Timestamp": "datetime",
          "UserGuid": "string",
          "UserEmail": "string",
          "EntityType": "string",
          "EntityGuid": "string",
          "EntityName": "string",
          "ActionType": "string",
          "ActionDetails": "string",
          "IpAddress": "string",
          "UserAgent": "string"
        }
      ]
    }
  ],
  "outputs": {
    "TotalCount": "number",
    "PageNumber": "number",
    "PageSize": "number"
  }
}
```

### Business Rules
- Requires valid authentication token
- User must have audit log viewing permissions
- Can filter by date range, entity type, entity GUID, and action type
- Results are paginated

## Get Company Dashboard JSON

Retrieve company dashboard data in JSON format for analytics and reporting.

### Endpoint
`POST /api/StoredProcedure/GetCompanyDashboardJson`

### Headers
```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body
```json
{
  "CompanyGuid": "string",
  "DateRange": "string"
}
```

### Response
```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "DashboardData": {
            "Summary": {
              "TotalUsers": "number",
              "ActiveUsers": "number",
              "TotalTeams": "number",
              "TotalMachines": "number",
              "TotalQueueItems": "number",
              "FailedQueueItems": "number"
            },
            "ActivityMetrics": {
              "DailyActiveUsers": "array",
              "QueueProcessingRate": "array",
              "ErrorRate": "array"
            },
            "ResourceUtilization": {
              "StorageUsed": "number",
              "StorageLimit": "number",
              "BandwidthUsed": "number",
              "BandwidthLimit": "number"
            }
          },
          "GeneratedAt": "datetime"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules
- Requires valid authentication token
- User must have dashboard viewing permissions
- Date range options: "Last24Hours", "Last7Days", "Last30Days", "Last90Days", "Custom"
- Dashboard data is cached for performance (5-minute cache)

## Get Company Data Graph JSON

Retrieve company data in graph format for visualization purposes.

### Endpoint
`POST /api/StoredProcedure/GetCompanyDataGraphJson`

### Headers
```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body
```json
{
  "CompanyGuid": "string",
  "GraphType": "string",
  "IncludeMetrics": "boolean"
}
```

### Response
```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "GraphData": {
            "Nodes": [
              {
                "Id": "string",
                "Type": "string",
                "Name": "string",
                "Properties": "object"
              }
            ],
            "Edges": [
              {
                "Source": "string",
                "Target": "string",
                "Type": "string",
                "Properties": "object"
              }
            ],
            "Metadata": {
              "TotalNodes": "number",
              "TotalEdges": "number",
              "GraphType": "string"
            }
          },
          "GeneratedAt": "datetime"
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules
- Requires valid authentication token
- User must have data visualization permissions
- Graph types: "ResourceHierarchy", "PermissionStructure", "ActivityFlow", "DependencyMap"
- Large graphs may be truncated for performance

## Get Entity Audit Trace

Retrieve detailed audit trace for a specific entity showing all related activities.

### Endpoint
`POST /api/StoredProcedure/GetEntityAuditTrace`

### Headers
```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body
```json
{
  "EntityType": "string",
  "EntityGuid": "string",
  "IncludeRelated": "boolean",
  "MaxDepth": "number"
}
```

### Response
```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "AuditTrace": {
            "Entity": {
              "Type": "string",
              "Guid": "string",
              "Name": "string"
            },
            "Timeline": [
              {
                "Timestamp": "datetime",
                "Action": "string",
                "Actor": "string",
                "Details": "string"
              }
            ],
            "RelatedEntities": [
              {
                "Type": "string",
                "Guid": "string",
                "Name": "string",
                "Relationship": "string"
              }
            ]
          }
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules
- Requires valid authentication token
- User must have audit trace viewing permissions
- Entity must belong to user's company
- MaxDepth controls how many levels of related entities to include (1-5)

## Get Entity History

Retrieve complete change history for a specific entity.

### Endpoint
`POST /api/StoredProcedure/GetEntityHistory`

### Headers
```
Content-Type: application/json
Rediacc-RequestToken: string
```

### Request Body
```json
{
  "EntityType": "string",
  "EntityGuid": "string",
  "IncludeVaultChanges": "boolean"
}
```

### Response
```json
{
  "failure": 0,
  "errors": [],
  "resultSets": [
    {
      "resultSetIndex": 1,
      "data": [
        {
          "EntityHistory": {
            "Entity": {
              "Type": "string",
              "Guid": "string",
              "CurrentName": "string"
            },
            "Changes": [
              {
                "ChangeGuid": "string",
                "Timestamp": "datetime",
                "ChangeType": "string",
                "ChangedBy": "string",
                "FieldChanges": [
                  {
                    "Field": "string",
                    "OldValue": "string",
                    "NewValue": "string"
                  }
                ]
              }
            ],
            "TotalChanges": "number"
          }
        }
      ]
    }
  ],
  "outputs": {}
}
```

### Business Rules
- Requires valid authentication token
- User must have entity history viewing permissions
- Entity must belong to user's company
- Vault changes are excluded by default for security
- History is returned in chronological order (oldest first)