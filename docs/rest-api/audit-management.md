# Audit Management

Audit management provides comprehensive logging and monitoring capabilities for tracking system activities, entity histories, and generating dashboard reports.

## Get Audit Logs

Retrieve audit logs for the company with filtering options.

### Endpoint
`POST /api/StoredProcedure/GetAuditLogs`

### Headers
```
Content-Type: application/json
Rediacc-RequestToken: <your-auth-token>
```

### Request Body
```json
{
  "CompanyGuid": "<company-guid>",
  "PageNumber": 1,
  "PageSize": 50,
  "StartDate": "2024-01-01T00:00:00Z",
  "EndDate": "2024-12-31T23:59:59Z",
  "EntityType": "User",
  "EntityGuid": "<entity-guid>",
  "ActionType": "Create"
}
```

### Response
```json
{
  "Success": true,
  "AuditLogs": [
    {
      "AuditGuid": "<audit-guid>",
      "Timestamp": "2024-01-15T10:30:00Z",
      "UserGuid": "<user-guid>",
      "UserEmail": "user@example.com",
      "EntityType": "User",
      "EntityGuid": "<entity-guid>",
      "EntityName": "John Doe",
      "ActionType": "Create",
      "ActionDetails": "User account created",
      "IpAddress": "192.168.1.1",
      "UserAgent": "Mozilla/5.0..."
    }
  ],
  "TotalCount": 150,
  "PageNumber": 1,
  "PageSize": 50
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
Rediacc-RequestToken: <your-auth-token>
```

### Request Body
```json
{
  "CompanyGuid": "<company-guid>",
  "DateRange": "Last30Days"
}
```

### Response
```json
{
  "Success": true,
  "DashboardData": {
    "Summary": {
      "TotalUsers": 45,
      "ActiveUsers": 38,
      "TotalTeams": 8,
      "TotalMachines": 120,
      "TotalQueueItems": 5430,
      "FailedQueueItems": 23
    },
    "ActivityMetrics": {
      "DailyActiveUsers": [...],
      "QueueProcessingRate": [...],
      "ErrorRate": [...]
    },
    "ResourceUtilization": {
      "StorageUsed": 450.5,
      "StorageLimit": 1000,
      "BandwidthUsed": 890.2,
      "BandwidthLimit": 2000
    }
  },
  "GeneratedAt": "2024-01-15T10:30:00Z"
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
Rediacc-RequestToken: <your-auth-token>
```

### Request Body
```json
{
  "CompanyGuid": "<company-guid>",
  "GraphType": "ResourceHierarchy",
  "IncludeMetrics": true
}
```

### Response
```json
{
  "Success": true,
  "GraphData": {
    "Nodes": [
      {
        "Id": "<node-id>",
        "Type": "Company",
        "Name": "Example Corp",
        "Properties": {...}
      },
      {
        "Id": "<node-id>",
        "Type": "Team",
        "Name": "Development Team",
        "Properties": {...}
      }
    ],
    "Edges": [
      {
        "Source": "<source-node-id>",
        "Target": "<target-node-id>",
        "Type": "Contains",
        "Properties": {...}
      }
    ],
    "Metadata": {
      "TotalNodes": 156,
      "TotalEdges": 245,
      "GraphType": "ResourceHierarchy"
    }
  },
  "GeneratedAt": "2024-01-15T10:30:00Z"
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
Rediacc-RequestToken: <your-auth-token>
```

### Request Body
```json
{
  "EntityType": "QueueItem",
  "EntityGuid": "<entity-guid>",
  "IncludeRelated": true,
  "MaxDepth": 3
}
```

### Response
```json
{
  "Success": true,
  "AuditTrace": {
    "Entity": {
      "Type": "QueueItem",
      "Guid": "<entity-guid>",
      "Name": "Process Order #12345"
    },
    "Timeline": [
      {
        "Timestamp": "2024-01-15T09:00:00Z",
        "Action": "Created",
        "Actor": "user@example.com",
        "Details": "Queue item created with priority: High"
      },
      {
        "Timestamp": "2024-01-15T09:05:00Z",
        "Action": "Processing",
        "Actor": "machine-01",
        "Details": "Started processing"
      }
    ],
    "RelatedEntities": [
      {
        "Type": "Machine",
        "Guid": "<machine-guid>",
        "Name": "machine-01",
        "Relationship": "Processor"
      }
    ]
  }
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
Rediacc-RequestToken: <your-auth-token>
```

### Request Body
```json
{
  "EntityType": "Team",
  "EntityGuid": "<entity-guid>",
  "IncludeVaultChanges": false
}
```

### Response
```json
{
  "Success": true,
  "EntityHistory": {
    "Entity": {
      "Type": "Team",
      "Guid": "<team-guid>",
      "CurrentName": "Development Team"
    },
    "Changes": [
      {
        "ChangeGuid": "<change-guid>",
        "Timestamp": "2024-01-10T14:30:00Z",
        "ChangeType": "Create",
        "ChangedBy": "admin@example.com",
        "FieldChanges": [
          {
            "Field": "Name",
            "OldValue": null,
            "NewValue": "Dev Team"
          }
        ]
      },
      {
        "ChangeGuid": "<change-guid>",
        "Timestamp": "2024-01-12T10:15:00Z",
        "ChangeType": "Update",
        "ChangedBy": "manager@example.com",
        "FieldChanges": [
          {
            "Field": "Name",
            "OldValue": "Dev Team",
            "NewValue": "Development Team"
          }
        ]
      }
    ],
    "TotalChanges": 2
  }
}
```

### Business Rules
- Requires valid authentication token
- User must have entity history viewing permissions
- Entity must belong to user's company
- Vault changes are excluded by default for security
- History is returned in chronological order (oldest first)