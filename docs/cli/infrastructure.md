# Infrastructure Management

Infrastructure commands manage regions, bridges, and machines in your Rediacc deployment. These commands provide control over the physical and virtual infrastructure that powers your backup and automation operations.

## Overview

Infrastructure management includes:
- **Regions**: Geographic deployment areas
- **Bridges**: Connection points between regions and machines
- **Machines**: Virtual or physical compute resources
- **Networking**: Connectivity and routing configuration

## Region Management

Regions represent geographic deployment areas for your infrastructure.

### List Regions

```bash
# List all regions
rediacc infra regions list

# JSON output
rediacc infra regions list --output json
```

**Example output:**
```json
[
  {
    "regionName": "us-east-1",
    "displayName": "US East (Virginia)",
    "status": "Active",
    "bridgeCount": 3,
    "machineCount": 25,
    "location": "Virginia, USA",
    "created": "2024-01-01T00:00:00Z"
  },
  {
    "regionName": "eu-west-1", 
    "displayName": "EU West (Ireland)",
    "status": "Active",
    "bridgeCount": 2,
    "machineCount": 18,
    "location": "Dublin, Ireland", 
    "created": "2024-01-15T00:00:00Z"
  }
]
```

### Create Region

```bash
# Create new region
rediacc infra regions create "us-west-2" \
  --display-name "US West (Oregon)" \
  --location "Oregon, USA"

# Create with custom configuration
rediacc infra regions create "ap-south-1" \
  --display-name "Asia Pacific (Mumbai)" \
  --location "Mumbai, India" \
  --timezone "Asia/Kolkata"
```

### Region Information

```bash
# Get region details
rediacc infra regions info "us-east-1"

# JSON output
rediacc infra regions info "us-east-1" --output json
```

### Update Region

```bash
# Update region settings
rediacc infra regions update "us-east-1" \
  --display-name "US East (Updated)" \
  --timezone "America/New_York"

# Enable/disable region
rediacc infra regions enable "us-east-1"
rediacc infra regions disable "us-east-1"
```

### Delete Region

```bash
# Delete region (requires confirmation)
rediacc infra regions delete "old-region"

# Force delete
rediacc infra regions delete "old-region" --force
```

## Bridge Management

Bridges provide connectivity between regions and manage machine connections.

### List Bridges

```bash
# List all bridges
rediacc infra bridges list

# List bridges in specific region
rediacc infra bridges list --region "us-east-1"

# JSON output
rediacc infra bridges list --output json
```

**Example output:**
```json
[
  {
    "bridgeName": "bridge-1",
    "regionName": "us-east-1", 
    "status": "Connected",
    "machineCount": 12,
    "lastSeen": "2024-03-11T10:30:00Z",
    "version": "v1.2.3",
    "endpoint": "bridge1.us-east-1.rediacc.com"
  }
]
```

### Create Bridge

```bash
# Create bridge in region
rediacc infra bridges create "bridge-2" \
  --region "us-east-1" \
  --endpoint "bridge2.company.com"

# Create with custom settings
rediacc infra bridges create "bridge-3" \
  --region "eu-west-1" \
  --endpoint "bridge3.company.com" \
  --port 8443 \
  --ssl-cert "/path/to/cert.pem"
```

### Bridge Information

```bash
# Get bridge details
rediacc infra bridges info "bridge-1"

# Check bridge status
rediacc infra bridges status "bridge-1"

# View bridge logs
rediacc infra bridges logs "bridge-1" --tail 100
```

### Update Bridge

```bash
# Update bridge configuration
rediacc infra bridges update "bridge-1" \
  --endpoint "new-bridge1.company.com" \
  --port 8443

# Restart bridge
rediacc infra bridges restart "bridge-1"

# Upgrade bridge
rediacc infra bridges upgrade "bridge-1" --version "v1.3.0"
```

## Machine Management

Machines are the compute resources that execute your backup and automation tasks.

### List Machines

```bash
# List all machines
rediacc infra machines list

# Filter by team
rediacc infra machines list --team "Development"

# Filter by region
rediacc infra machines list --region "us-east-1"

# JSON output
rediacc infra machines list --output json
```

**Example output:**
```json
[
  {
    "machineName": "web-server-1",
    "teamName": "Development",
    "bridgeName": "bridge-1",
    "regionName": "us-east-1",
    "status": "Online",
    "lastSeen": "2024-03-11T11:00:00Z",
    "ipAddress": "10.0.1.100",
    "operatingSystem": "Ubuntu 22.04",
    "architecture": "x86_64",
    "resources": {
      "cpu": "4 cores",
      "memory": "8GB",
      "storage": "100GB"
    }
  }
]
```

### Create Machine

```bash
# Create machine
rediacc infra machines create "web-server-2" \
  --team "Development" \
  --bridge "bridge-1" \
  --ip "10.0.1.101"

# Create with detailed configuration
rediacc infra machines create "db-server-1" \
  --team "Operations" \
  --bridge "bridge-2" \
  --ip "10.0.2.50" \
  --os "CentOS 8" \
  --arch "x86_64" \
  --cpu "8 cores" \
  --memory "16GB"
```

### Machine Information

```bash
# Get machine details
rediacc infra machines info "web-server-1"

# Check machine status
rediacc infra machines status "web-server-1"

# View machine metrics
rediacc infra machines metrics "web-server-1"
```

### Update Machine

```bash
# Update machine configuration
rediacc infra machines update "web-server-1" \
  --team "Production" \
  --bridge "bridge-2"

# Update machine resources
rediacc infra machines update "web-server-1" \
  --cpu "8 cores" \
  --memory "16GB"
```

### Machine Operations

```bash
# Connect to machine
rediacc infra machines connect "web-server-1"

# Run command on machine
rediacc infra machines exec "web-server-1" "df -h"

# Transfer files
rediacc infra machines copy "local-file.txt" "web-server-1:/remote/path/"

# Reboot machine
rediacc infra machines reboot "web-server-1"
```

## Network Configuration

### Connectivity Testing

```bash
# Test region connectivity
rediacc infra network test-region "us-east-1"

# Test bridge connectivity
rediacc infra network test-bridge "bridge-1"

# Test machine connectivity
rediacc infra network test-machine "web-server-1"

# Comprehensive network test
rediacc infra network test-all
```

### Network Monitoring

```bash
# View network status
rediacc infra network status

# Monitor bandwidth usage
rediacc infra network bandwidth --period "24h"

# Check latency between regions
rediacc infra network latency "us-east-1" "eu-west-1"
```

## Monitoring and Maintenance

### Infrastructure Health

```bash
# Overall infrastructure health
rediacc infra health

# Region health check
rediacc infra health --region "us-east-1"

# Bridge health check
rediacc infra health --bridge "bridge-1"
```

### Resource Usage

```bash
# Infrastructure resource usage
rediacc infra usage

# Team resource allocation
rediacc infra usage --team "Development"

# Historical usage data
rediacc infra usage --period "30d"
```

### Maintenance Operations

```bash
# Schedule maintenance window
rediacc infra maintenance schedule \
  --region "us-east-1" \
  --start "2024-03-15T02:00:00Z" \
  --duration "4h" \
  --description "Security updates"

# View maintenance schedules
rediacc infra maintenance list

# Cancel maintenance
rediacc infra maintenance cancel "maintenance-id-123"
```

## Automation Examples

### Multi-Region Deployment

```bash
#!/bin/bash
# Deploy infrastructure across multiple regions

REGIONS=("us-east-1" "us-west-2" "eu-west-1")
TEAM="Production"

for region in "${REGIONS[@]}"; do
  echo "Setting up infrastructure in $region..."
  
  # Create bridge
  rediacc infra bridges create "bridge-$region" \
    --region "$region" \
    --endpoint "bridge-$region.company.com"
  
  # Create machines
  for i in {1..3}; do
    rediacc infra machines create "web-$region-$i" \
      --team "$TEAM" \
      --bridge "bridge-$region" \
      --ip "10.${i}.1.10${i}"
  done
  
  echo "Infrastructure deployed in $region"
done
```

### Health Monitoring Script

```bash
#!/bin/bash
# Monitor infrastructure health

# Check overall health
HEALTH=$(rediacc infra health --output json)
UNHEALTHY=$(echo "$HEALTH" | jq -r '.[] | select(.status != "Healthy") | .name')

if [ -n "$UNHEALTHY" ]; then
  echo "Unhealthy components detected:"
  echo "$UNHEALTHY"
  
  # Send alert
  curl -X POST "$SLACK_WEBHOOK" \
    -d "{\"text\": \"Infrastructure health alert: $UNHEALTHY\"}"
fi

# Check resource usage
USAGE=$(rediacc infra usage --output json)
HIGH_USAGE=$(echo "$USAGE" | jq -r '.[] | select(.usage > 80) | .resource')

if [ -n "$HIGH_USAGE" ]; then
  echo "High resource usage detected:"
  echo "$HIGH_USAGE"
fi
```

### Machine Provisioning

```bash
#!/bin/bash
# Provision machines for a team

TEAM="$1"
COUNT="$2"
BRIDGE="$3"
BASE_IP="$4"

for i in $(seq 1 "$COUNT"); do
  MACHINE_NAME="${TEAM,,}-machine-$i"
  IP_SUFFIX=$((100 + i))
  MACHINE_IP="${BASE_IP}${IP_SUFFIX}"
  
  echo "Creating machine: $MACHINE_NAME"
  rediacc infra machines create "$MACHINE_NAME" \
    --team "$TEAM" \
    --bridge "$BRIDGE" \
    --ip "$MACHINE_IP" \
    --cpu "4 cores" \
    --memory "8GB"
    
  # Wait for machine to come online
  while [ "$(rediacc infra machines status "$MACHINE_NAME" --output json | jq -r '.status')" != "Online" ]; do
    echo "Waiting for $MACHINE_NAME to come online..."
    sleep 10
  done
  
  echo "Machine $MACHINE_NAME is online"
done
```

## Error Handling

### Common Errors

**Region Not Found:**
```
Error: failed to get region info: API error: Region 'invalid-region' not found
```

**Bridge Connection Failed:**
```
Error: failed to create bridge: API error: Cannot connect to endpoint 'bridge.company.com:8443'
```

**Machine Offline:**
```
Error: failed to connect to machine: API error: Machine 'web-server-1' is offline
```

**Resource Limits:**
```
Error: failed to create machine: API error: Resource limit exceeded for machines in region 'us-east-1'
```

### Troubleshooting

```bash
# Check infrastructure connectivity
rediacc infra network test-all

# Verify infrastructure status
rediacc infra health

# Check resource limits
rediacc infra usage

# Debug specific component
rediacc --debug infra machines info "machine-name"
```

## Best Practices

### Planning
- Design region strategy based on geographic requirements
- Plan bridge capacity for expected machine load
- Consider network latency between regions
- Document infrastructure topology

### Security
- Use secure endpoints for bridges
- Implement proper firewall rules
- Regular security updates for machines
- Monitor access logs

### Performance
- Monitor resource usage regularly
- Plan capacity based on growth projections
- Optimize machine placement
- Regular performance testing

### Maintenance
- Schedule regular maintenance windows
- Keep bridges and machines updated
- Monitor health metrics continuously
- Implement automated failover procedures