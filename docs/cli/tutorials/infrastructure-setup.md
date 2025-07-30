# Infrastructure Setup Workflows

This guide covers setting up and managing your Rediacc infrastructure, including regions, bridges, and machines.

## Infrastructure Architecture

### Key Components

1. **Regions**: Logical groupings for infrastructure (e.g., us-east, europe-west)
2. **Bridges**: Queue processors that execute tasks on machines
3. **Machines**: Remote servers where actual work is performed

```
Company
  └── Regions (us-east, eu-west)
       └── Bridges (processing nodes)
            └── Machines (execution targets)
```

## Initial Infrastructure Setup

### Step 1: Create Regions

Start by defining your geographic or logical regions:

```bash
# Create primary region
rediacc-cli create region us-east --vault '{
  "description": "Primary US East Coast region",
  "datacenter": "AWS us-east-1",
  "contact": "ops-us@company.com"
}'

# Create secondary regions
rediacc-cli create region eu-west --vault '{
  "description": "European region for GDPR compliance",
  "datacenter": "AWS eu-west-1",
  "contact": "ops-eu@company.com"
}'

rediacc-cli create region asia-pac --vault '{
  "description": "Asia Pacific region",
  "datacenter": "AWS ap-southeast-1",
  "contact": "ops-apac@company.com"
}'

# List all regions
rediacc-cli list regions
```

### Step 2: Deploy Bridges

Bridges are the workhorses that process queue items:

```bash
# Create production bridge
rediacc-cli create bridge us-east prod-bridge-01 --vault '{
  "type": "production",
  "batch_size": 5,
  "poll_interval": 30,
  "max_retries": 3,
  "resources": {
    "cpu": "4 cores",
    "memory": "16GB"
  }
}'

# Create development bridge
rediacc-cli create bridge us-east dev-bridge-01 --vault '{
  "type": "development",
  "batch_size": 3,
  "poll_interval": 60
}'

# List bridges in a region
rediacc-cli list bridges us-east
```

### Step 3: Configure Bridge Service

To run a bridge, you need to start the bridge process with appropriate credentials:

```bash
# Get bridge token
rediacc-cli login --email bridge-user@company.com \
  --target prod-bridge-01 \
  --expiration 8760  # 1 year

# Start bridge service (on the bridge server)
./bridge --bridge-mode \
  token=$BRIDGE_TOKEN \
  api_url=https://api.rediacc.com \
  master_password=$MASTER_PASSWORD \
  batch_size=5
```

### Step 4: Add Machines

Machines are the targets where tasks are executed:

```bash
# Add web servers
rediacc-cli create machine "Web Team" prod-bridge-01 web-server-01 --vault '{
  "ip": "10.0.1.10",
  "user": "rediacc",
  "ssh_port": 22,
  "datastore": "/mnt/rediacc",
  "role": "web-server",
  "specs": {
    "cpu": "8 cores",
    "memory": "32GB",
    "storage": "500GB SSD"
  }
}'

# Add database servers
rediacc-cli create machine "Database Team" prod-bridge-01 db-server-01 --vault '{
  "ip": "10.0.2.10",
  "user": "rediacc",
  "ssh_port": 22,
  "datastore": "/mnt/rediacc",
  "role": "database",
  "specs": {
    "cpu": "16 cores",
    "memory": "64GB",
    "storage": "2TB SSD"
  }
}'

# Add backup servers
rediacc-cli create machine "Operations" prod-bridge-01 backup-server-01 --vault '{
  "ip": "10.0.3.10",
  "user": "rediacc",
  "ssh_port": 22,
  "datastore": "/mnt/backup",
  "role": "backup",
  "specs": {
    "cpu": "4 cores",
    "memory": "16GB",
    "storage": "10TB HDD"
  }
}'
```

## Infrastructure Patterns

### Multi-Region Deployment

Deploy infrastructure across multiple regions for redundancy:

```bash
#!/bin/bash
# deploy-multi-region.sh

REGIONS=("us-east" "us-west" "eu-west")
TEAM="Global Operations"

for region in "${REGIONS[@]}"; do
  echo "Setting up region: $region"
  
  # Create region if not exists
  rediacc-cli create region "$region" --vault '{
    "tier": "production",
    "sla": "99.9%"
  }'
  
  # Deploy primary and backup bridges
  for bridge_type in "primary" "backup"; do
    bridge_name="${region}-${bridge_type}-bridge"
    
    rediacc-cli create bridge "$region" "$bridge_name" --vault '{
      "type": "'$bridge_type'",
      "auto_failover": true,
      "health_check_interval": 60
    }'
  done
  
  # Add monitoring machine in each region
  rediacc-cli create machine "$TEAM" "${region}-primary-bridge" \
    "${region}-monitor-01" --vault '{
      "role": "monitoring",
      "services": ["prometheus", "grafana", "alertmanager"]
    }'
done
```

### Environment Segregation

Separate infrastructure for different environments:

```bash
#!/bin/bash
# setup-environments.sh

# Production environment
rediacc-cli create region production --vault '{
  "environment": "production",
  "change_control": "required",
  "access": "restricted"
}'

rediacc-cli create bridge production prod-bridge --vault '{
  "priority": "high",
  "sla": "99.99%",
  "monitoring": "enabled"
}'

# Staging environment
rediacc-cli create region staging --vault '{
  "environment": "staging",
  "refresh_from": "production",
  "refresh_schedule": "weekly"
}'

rediacc-cli create bridge staging stage-bridge --vault '{
  "priority": "medium",
  "auto_refresh": true
}'

# Development environment
rediacc-cli create region development --vault '{
  "environment": "development",
  "auto_cleanup": true,
  "retention_days": 30
}'

rediacc-cli create bridge development dev-bridge --vault '{
  "priority": "low",
  "developer_access": true
}'
```

### High Availability Setup

Configure infrastructure for high availability:

```bash
#!/bin/bash
# setup-ha-infrastructure.sh

REGION="us-east"
TEAM="Site Reliability"

# Create redundant bridges
for i in {1..3}; do
  rediacc-cli create bridge "$REGION" "ha-bridge-0${i}" --vault '{
    "cluster": "ha-primary",
    "role": "active",
    "failover_group": "primary",
    "health_endpoint": "http://ha-bridge-0'$i'.internal:8080/health"
  }'
done

# Create load-balanced web tier
for i in {1..4}; do
  rediacc-cli create machine "$TEAM" "ha-bridge-01" "web-0${i}" --vault '{
    "tier": "web",
    "load_balancer": "web-lb.internal",
    "health_check": "/health",
    "auto_replace": true
  }'
done

# Create replicated database tier
for i in {1..3}; do
  role=$([ $i -eq 1 ] && echo "primary" || echo "replica")
  
  rediacc-cli create machine "$TEAM" "ha-bridge-02" "db-0${i}" --vault '{
    "tier": "database",
    "role": "'$role'",
    "replication": {
      "mode": "async",
      "lag_threshold": 100
    }
  }'
done
```

## Machine Management

### Machine Lifecycle

Complete machine setup and management:

```bash
#!/bin/bash
# machine-lifecycle.sh

TEAM="Infrastructure"
BRIDGE="prod-bridge-01"
MACHINE="app-server-01"

# 1. Create machine
echo "Creating machine..."
rediacc-cli create machine "$TEAM" "$BRIDGE" "$MACHINE" --vault '{
  "ip": "10.0.1.50",
  "user": "rediacc",
  "ssh_port": 22,
  "datastore": "/mnt/rediacc",
  "os": "Ubuntu 22.04",
  "configured_date": "'$(date -I)'"
}'

# 2. Test connectivity
echo "Testing machine connectivity..."
rediacc-cli create queue-item "$TEAM" "$MACHINE" "$BRIDGE" \
  --vault '{"function": "hello"}' \
  --priority 1

# 3. Initialize machine
echo "Initializing machine..."
rediacc-cli create queue-item "$TEAM" "$MACHINE" "$BRIDGE" \
  --vault '{"function": "os_setup"}' \
  --priority 1

# 4. Update machine status
rediacc-cli update machine-status "$TEAM" "$MACHINE" "production-ready"

# 5. Monitor machine
echo "Machine ready. To check status:"
echo "rediacc-cli inspect machine $MACHINE"
```

### Machine Maintenance

Perform maintenance operations:

```bash
#!/bin/bash
# machine-maintenance.sh

TEAM="$1"
MACHINE="$2"

if [ -z "$TEAM" ] || [ -z "$MACHINE" ]; then
  echo "Usage: $0 <team> <machine>"
  exit 1
fi

# 1. Set maintenance status
echo "Setting maintenance mode..."
rediacc-cli update machine-status "$TEAM" "$MACHINE" "maintenance"

# 2. Drain active tasks
echo "Waiting for active tasks to complete..."
# Check queue items for this machine
rediacc-cli list queue --machine "$MACHINE" --status PROCESSING

# 3. Perform maintenance tasks
echo "Running maintenance tasks..."
MAINTENANCE_TASKS=(
  "system_update"
  "disk_cleanup"
  "log_rotation"
  "security_patches"
)

for task in "${MAINTENANCE_TASKS[@]}"; do
  rediacc-cli create queue-item "$TEAM" "$MACHINE" \
    "$(rediacc-cli inspect machine $MACHINE | grep bridgeName | cut -d: -f2)" \
    --vault '{"function": "'$task'"}' \
    --priority 1
  
  echo "Executed: $task"
  sleep 5
done

# 4. Restore to production
echo "Restoring to production..."
rediacc-cli update machine-status "$TEAM" "$MACHINE" "online"

echo "Maintenance complete for $MACHINE"
```

### Bridge Reassignment

Move machines between bridges for load balancing:

```bash
#!/bin/bash
# reassign-machines.sh

SOURCE_BRIDGE="overloaded-bridge"
TARGET_BRIDGE="new-bridge"
TEAM="Operations"

# Get machines from source bridge
echo "Finding machines on $SOURCE_BRIDGE..."
MACHINES=$(rediacc-cli list team-machines "$TEAM" --output json | \
  jq -r '.data[] | select(.bridgeName == "'$SOURCE_BRIDGE'") | .machineName')

# Reassign half the machines
count=0
total=$(echo "$MACHINES" | wc -l)
target=$((total / 2))

echo "Reassigning $target of $total machines..."

for machine in $MACHINES; do
  if [ $count -lt $target ]; then
    echo "Moving $machine to $TARGET_BRIDGE"
    rediacc-cli update machine-bridge "$TEAM" "$machine" "$TARGET_BRIDGE"
    ((count++))
  fi
done

echo "Reassignment complete. New distribution:"
rediacc-cli list team-machines "$TEAM" | grep -E "$SOURCE_BRIDGE|$TARGET_BRIDGE"
```

## Monitoring and Troubleshooting

### Infrastructure Health Check

Monitor infrastructure status:

```bash
#!/bin/bash
# infra-health-check.sh

echo "=== Infrastructure Health Report ==="
date
echo

# 1. Region status
echo "## Regions"
rediacc-cli list regions

# 2. Bridge status by region
echo -e "\n## Bridges"
for region in $(rediacc-cli list regions --output json | jq -r '.data[].regionName'); do
  echo -e "\nRegion: $region"
  rediacc-cli list bridges "$region"
done

# 3. Machine distribution
echo -e "\n## Machine Distribution"
rediacc-cli list team-machines --output json | jq -r '
  .data | group_by(.bridgeName) | 
  map({bridge: .[0].bridgeName, count: length}) | 
  .[] | "\(.bridge): \(.count) machines"'

# 4. Queue health
echo -e "\n## Queue Status"
rediacc-cli list queue --status PENDING | head -10
echo "..."
echo "Total pending: $(rediacc-cli list queue --status PENDING --output json | jq '.data | length')"
```

### Troubleshooting Common Issues

**Bridge Not Processing Tasks**
```bash
# Check bridge logs (on bridge server)
tail -f /var/log/rediacc/bridge.log

# Verify bridge token
rediacc-cli login --target bridge-name

# Check queue for errors
rediacc-cli list queue --bridge bridge-name --status FAILED
```

**Machine Unreachable**
```bash
# Test with hello function
rediacc-cli create queue-item team machine bridge \
  --vault '{"function": "hello"}' \
  --priority 1

# Check machine details
rediacc-cli inspect machine machine-name

# Verify SSH connectivity (from bridge)
ssh rediacc@machine-ip -p 22 "echo 'Connection successful'"
```

**Region Performance Issues**
```bash
# Check bridge load
for bridge in $(rediacc-cli list bridges region --output json | jq -r '.data[].bridgeName'); do
  active=$(rediacc-cli list queue --bridge $bridge --status PROCESSING --output json | jq '.data | length')
  echo "$bridge: $active active tasks"
done

# Add more bridges if needed
rediacc-cli create bridge region new-bridge --vault '{"batch_size": 10}'
```

## Best Practices

### Infrastructure Naming
```bash
# Use consistent naming patterns
<region>-<environment>-<type>-<number>

# Examples:
"us-east-prod-bridge-01"
"eu-west-staging-web-03"
"asia-pac-dev-db-01"
```

### Capacity Planning
1. **Bridges**: 1 bridge per 50-100 machines
2. **Batch Size**: 3-10 items based on task complexity
3. **Poll Interval**: 30-60 seconds for production
4. **Machine Datastore**: Minimum 100GB free space

### Security Configuration
```bash
# Machine vault best practices
{
  "ip": "10.0.1.10",
  "user": "rediacc",              # Never use root
  "ssh_port": 2222,               # Non-standard port
  "datastore": "/mnt/rediacc",    # Dedicated partition
  "ssh_key_type": "ed25519",      # Modern key type
  "firewall_rules": {
    "allow_from": ["10.0.0.0/8"],
    "deny_all_others": true
  }
}
```

## Related Guides
- [Team Management Workflow](./team-management-workflow.md)
- [Job Orchestration](./job-orchestration.md)
- [API Reference: Region Commands](../api-reference/create-commands.md#region)
- [API Reference: Bridge Commands](../api-reference/create-commands.md#bridge)
- [API Reference: Machine Commands](../api-reference/create-commands.md#machine)