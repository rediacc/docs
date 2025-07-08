---
sidebar_position: 3
---

# Monitoring and Alerting Setup

This tutorial guides you through setting up comprehensive monitoring and alerting for your Rediacc infrastructure.

## Prerequisites

- Completed [Getting Started](./getting-started.md) tutorial
- At least one machine configured
- Basic understanding of metrics and logging

## Overview

Effective monitoring helps you:
- Detect issues before they impact users
- Understand system performance
- Track resource utilization
- Maintain compliance with audit requirements

## Step 1: Enable System Monitoring

### 1.1 Configure Audit Settings

Navigate to **Audit** in the sidebar:

1. Set retention period:
   ```yaml
   Retention: 90 days
   Archive: S3 bucket
   Compression: enabled
   ```

2. Configure audit levels:
   ```yaml
   Authentication: Full
   Resource Changes: Full
   Queue Operations: Summary
   Remote Access: Full with session recording
   ```

### 1.2 Set Up Dashboard Widgets

Customize your dashboard for monitoring:

1. Go to **Dashboard**
2. Click **Customize Layout**
3. Add monitoring widgets:
   - Queue Performance
   - Machine Health
   - Resource Utilization
   - Recent Failures

## Step 2: Machine-Level Monitoring

### 2.1 Install Monitoring Agent

Deploy monitoring agent to all machines:

```bash
#!/bin/bash
# deploy-monitoring.sh

# Install monitoring tools
apt-get update
apt-get install -y prometheus-node-exporter collectd

# Configure node exporter
cat > /etc/systemd/system/node_exporter.service << EOF
[Unit]
Description=Node Exporter
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/prometheus-node-exporter
Restart=always

[Install]
WantedBy=multi-user.target
EOF

systemctl enable node_exporter
systemctl start node_exporter
```

### 2.2 Configure Metrics Collection

Set up metrics collection schedule:

1. Navigate to **Resources** → **Schedules**
2. Create new schedule:
   ```yaml
   Name: metrics-collection
   Cron: */5 * * * *  # Every 5 minutes
   Script: collect-metrics.sh
   Machines: All production machines
   ```

### 2.3 Metrics Collection Script

```bash
#!/bin/bash
# collect-metrics.sh

# Collect system metrics
TIMESTAMP=$(date +%s)
HOSTNAME=$(hostname)

# CPU metrics
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)

# Memory metrics
MEMORY=$(free -m | awk 'NR==2{printf "%.2f", $3*100/$2}')

# Disk metrics
DISK_USAGE=$(df -h / | awk 'NR==2{print $5}' | sed 's/%//')

# Docker metrics
CONTAINERS=$(docker ps -q | wc -l)
IMAGES=$(docker images -q | wc -l)

# Network metrics
RX_BYTES=$(cat /sys/class/net/eth0/statistics/rx_bytes)
TX_BYTES=$(cat /sys/class/net/eth0/statistics/tx_bytes)

# Store metrics
cat > /tmp/metrics-${TIMESTAMP}.json << EOF
{
  "timestamp": ${TIMESTAMP},
  "hostname": "${HOSTNAME}",
  "cpu_usage": ${CPU_USAGE},
  "memory_usage": ${MEMORY},
  "disk_usage": ${DISK_USAGE},
  "containers": ${CONTAINERS},
  "docker_images": ${IMAGES},
  "network_rx": ${RX_BYTES},
  "network_tx": ${TX_BYTES}
}
EOF

# Upload to storage
rediacc-cli storage upload \
  --storage metrics-storage \
  --file /tmp/metrics-${TIMESTAMP}.json \
  --path metrics/${HOSTNAME}/${TIMESTAMP}.json
```

## Step 3: Application Monitoring

### 3.1 Container Health Checks

Implement health checks for all containers:

```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    image: myapp:latest
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

### 3.2 Application Metrics Endpoint

Create metrics endpoint in your application:

```javascript
// metrics.js
const express = require('express');
const router = express.Router();

router.get('/metrics', (req, res) => {
  const metrics = {
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    cpu: process.cpuUsage(),
    requests: {
      total: global.requestCount || 0,
      errors: global.errorCount || 0,
      avgResponseTime: global.avgResponseTime || 0
    }
  };
  
  res.json(metrics);
});

module.exports = router;
```

### 3.3 Log Aggregation

Set up centralized logging:

```bash
#!/bin/bash
# setup-logging.sh

# Configure Docker logging
cat > /etc/docker/daemon.json << EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3",
    "labels": "environment,service",
    "env": "NODE_ENV,SERVICE_NAME"
  }
}
EOF

# Restart Docker
systemctl restart docker

# Set up log forwarding
cat > /opt/rediacc/scripts/forward-logs.sh << 'EOF'
#!/bin/bash
# Forward logs to central storage

LOGS_DIR="/var/lib/docker/containers"
STORAGE="logs-storage"

for container in $(docker ps -q); do
  CONTAINER_ID=$(docker inspect -f '{{.Id}}' $container)
  LOG_FILE="${LOGS_DIR}/${CONTAINER_ID}/${CONTAINER_ID}-json.log"
  
  if [ -f "$LOG_FILE" ]; then
    # Compress and upload
    gzip -c "$LOG_FILE" | rediacc-cli storage upload \
      --storage "$STORAGE" \
      --stdin \
      --path "logs/$(date +%Y/%m/%d)/${container}.log.gz"
  fi
done
EOF

chmod +x /opt/rediacc/scripts/forward-logs.sh
```

## Step 4: Setting Up Alerts

### 4.1 Define Alert Rules

Create alert configuration:

```yaml
# alerts.yaml
alerts:
  - name: high_cpu_usage
    condition: cpu_usage > 80
    duration: 5m
    severity: warning
    notification:
      - email
      - slack
  
  - name: disk_space_low
    condition: disk_usage > 90
    duration: 1m
    severity: critical
    notification:
      - email
      - pagerduty
  
  - name: container_restart
    condition: container_restarts > 3
    duration: 10m
    severity: warning
    notification:
      - email
  
  - name: queue_backlog
    condition: pending_tasks > 100
    duration: 15m
    severity: warning
    notification:
      - email
      - slack
```

### 4.2 Alert Processing Script

```bash
#!/bin/bash
# process-alerts.sh

# Load alert rules
ALERTS_FILE="/opt/rediacc/config/alerts.yaml"

# Check each metric
check_cpu_alert() {
  local cpu_usage=$1
  if (( $(echo "$cpu_usage > 80" | bc -l) )); then
    send_alert "high_cpu_usage" "CPU usage is ${cpu_usage}%"
  fi
}

check_disk_alert() {
  local disk_usage=$1
  if (( $(echo "$disk_usage > 90" | bc -l) )); then
    send_alert "disk_space_low" "Disk usage is ${disk_usage}%" "critical"
  fi
}

check_queue_alert() {
  local pending=$(rediacc-cli queue status --format json | jq '.pending')
  if [ "$pending" -gt 100 ]; then
    send_alert "queue_backlog" "Queue has $pending pending tasks"
  fi
}

send_alert() {
  local alert_name=$1
  local message=$2
  local severity=${3:-warning}
  
  # Send email
  echo "$message" | mail -s "[$severity] Alert: $alert_name" ops@company.com
  
  # Send to Slack
  if [ "$severity" = "critical" ]; then
    curl -X POST -H 'Content-type: application/json' \
      --data "{\"text\":\"🚨 [$severity] $alert_name: $message\"}" \
      $SLACK_WEBHOOK_URL
  fi
}

# Main monitoring loop
while true; do
  # Get current metrics
  METRICS=$(cat /tmp/latest-metrics.json)
  
  CPU=$(echo "$METRICS" | jq '.cpu_usage')
  DISK=$(echo "$METRICS" | jq '.disk_usage')
  
  # Check alerts
  check_cpu_alert "$CPU"
  check_disk_alert "$DISK"
  check_queue_alert
  
  sleep 60
done
```

## Step 5: Creating Monitoring Dashboards

### 5.1 Queue Performance Dashboard

Monitor queue health and performance:

```javascript
// queue-monitor.js
const monitoring = {
  async getQueueMetrics() {
    const metrics = await rediacc.queue.getMetrics();
    
    return {
      throughput: {
        tasksPerMinute: metrics.completed / metrics.timeWindow,
        avgProcessingTime: metrics.totalTime / metrics.completed,
        successRate: (metrics.succeeded / metrics.completed) * 100
      },
      current: {
        pending: metrics.pending,
        processing: metrics.processing,
        failed: metrics.failed
      },
      trends: {
        hourly: await this.getHourlyTrends(),
        daily: await this.getDailyTrends()
      }
    };
  }
};
```

### 5.2 Machine Health Dashboard

Real-time machine status:

```bash
#!/bin/bash
# machine-health-dashboard.sh

# Generate HTML dashboard
cat > /var/www/dashboard/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <title>Machine Health Dashboard</title>
  <meta http-equiv="refresh" content="30">
  <style>
    .healthy { background: #4CAF50; }
    .warning { background: #FF9800; }
    .critical { background: #F44336; }
  </style>
</head>
<body>
  <h1>Machine Health Status</h1>
  <div id="machines"></div>
  
  <script>
    async function updateDashboard() {
      const response = await fetch('/api/machine-health');
      const machines = await response.json();
      
      const html = machines.map(m => `
        <div class="machine ${m.status}">
          <h3>${m.name}</h3>
          <p>CPU: ${m.cpu}% | Memory: ${m.memory}% | Disk: ${m.disk}%</p>
          <p>Tasks: ${m.tasks} | Uptime: ${m.uptime}</p>
        </div>
      `).join('');
      
      document.getElementById('machines').innerHTML = html;
    }
    
    updateDashboard();
    setInterval(updateDashboard, 30000);
  </script>
</body>
</html>
EOF
```

## Step 6: Performance Monitoring

### 6.1 Response Time Tracking

```bash
#!/bin/bash
# track-response-times.sh

# Test endpoint response times
ENDPOINTS=(
  "https://api.company.com/health"
  "https://app.company.com/"
  "https://admin.company.com/api/status"
)

for endpoint in "${ENDPOINTS[@]}"; do
  RESPONSE_TIME=$(curl -o /dev/null -s -w '%{time_total}' "$endpoint")
  
  # Log response time
  echo "$(date +%s),${endpoint},${RESPONSE_TIME}" >> /var/log/response-times.csv
  
  # Alert if slow
  if (( $(echo "$RESPONSE_TIME > 2.0" | bc -l) )); then
    send_alert "slow_response" "Endpoint $endpoint took ${RESPONSE_TIME}s"
  fi
done
```

### 6.2 Resource Utilization Trends

```python
#!/usr/bin/env python3
# analyze-trends.py

import json
import numpy as np
from datetime import datetime, timedelta

def analyze_resource_trends():
    # Load historical metrics
    metrics = load_metrics_history()
    
    # Calculate trends
    cpu_trend = calculate_trend(metrics, 'cpu_usage')
    memory_trend = calculate_trend(metrics, 'memory_usage')
    
    # Predict future usage
    cpu_prediction = predict_usage(cpu_trend, hours=24)
    
    # Generate report
    report = {
        'timestamp': datetime.now().isoformat(),
        'trends': {
            'cpu': {
                'current': metrics[-1]['cpu_usage'],
                'trend': cpu_trend,
                'prediction_24h': cpu_prediction
            },
            'memory': {
                'current': metrics[-1]['memory_usage'],
                'trend': memory_trend
            }
        },
        'recommendations': generate_recommendations(metrics)
    }
    
    return report

def generate_recommendations(metrics):
    recommendations = []
    
    # Check for consistent high usage
    recent_cpu = [m['cpu_usage'] for m in metrics[-12:]]
    if np.mean(recent_cpu) > 70:
        recommendations.append({
            'type': 'scaling',
            'message': 'Consider adding more machines - CPU consistently above 70%'
        })
    
    return recommendations
```

## Step 7: Incident Response

### 7.1 Automated Recovery

```bash
#!/bin/bash
# auto-recovery.sh

# Define recovery actions
recover_container() {
  local container=$1
  
  echo "Attempting to recover container: $container"
  
  # Try restart first
  if ! docker restart "$container"; then
    # If restart fails, recreate
    docker stop "$container"
    docker rm "$container"
    docker-compose up -d "$container"
  fi
  
  # Verify recovery
  sleep 10
  if docker ps | grep -q "$container"; then
    echo "Container $container recovered successfully"
    send_alert "recovery_success" "Container $container has been recovered"
  else
    echo "Failed to recover container $container"
    send_alert "recovery_failed" "Container $container recovery failed" "critical"
  fi
}

# Monitor and recover
while true; do
  # Check all containers
  for container in $(docker ps -a --format "{{.Names}}"); do
    STATUS=$(docker inspect -f '{{.State.Status}}' "$container")
    
    if [ "$STATUS" != "running" ]; then
      recover_container "$container"
    fi
  done
  
  sleep 60
done
```

### 7.2 Incident Logging

```bash
#!/bin/bash
# log-incident.sh

log_incident() {
  local severity=$1
  local component=$2
  local description=$3
  
  INCIDENT_ID=$(uuidgen)
  TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  
  # Create incident record
  cat > "/var/log/incidents/${INCIDENT_ID}.json" << EOF
{
  "id": "${INCIDENT_ID}",
  "timestamp": "${TIMESTAMP}",
  "severity": "${severity}",
  "component": "${component}",
  "description": "${description}",
  "status": "open",
  "actions": []
}
EOF
  
  # Notify team
  send_alert "incident_created" "New $severity incident: $description" "$severity"
  
  echo "$INCIDENT_ID"
}

update_incident() {
  local incident_id=$1
  local action=$2
  
  # Add action to incident log
  jq --arg action "$action" \
     --arg timestamp "$(date -u +"%Y-%m-%dT%H:%M:%SZ")" \
     '.actions += [{"timestamp": $timestamp, "action": $action}]' \
     "/var/log/incidents/${incident_id}.json" > tmp.json && \
     mv tmp.json "/var/log/incidents/${incident_id}.json"
}
```

## Best Practices

### 1. Monitoring Strategy

- **Proactive Monitoring**: Set thresholds before issues occur
- **Baseline Establishment**: Understand normal behavior
- **Alert Fatigue Prevention**: Only alert on actionable items
- **Regular Review**: Update thresholds based on trends

### 2. Data Retention

```yaml
Retention Policy:
  Raw Metrics: 7 days
  Aggregated Metrics: 90 days
  Incident Logs: 1 year
  Audit Logs: 7 years (compliance)
```

### 3. Security Monitoring

- Monitor authentication attempts
- Track privilege escalations
- Alert on unusual access patterns
- Regular security audits

### 4. Performance Optimization

- Use sampling for high-frequency metrics
- Aggregate data before storage
- Implement efficient queries
- Archive old data

## Troubleshooting Monitoring Issues

### No Metrics Data

1. Verify monitoring agent is running
2. Check network connectivity
3. Confirm storage permissions
4. Review collection scripts

### False Alerts

1. Adjust thresholds based on baselines
2. Implement alert dampening
3. Use compound conditions
4. Review historical data

### Missing Alerts

1. Verify alert rules syntax
2. Check notification channels
3. Test alert conditions manually
4. Review processing logs

## Next Steps

- [Backup Strategies](./backup-strategies.md)
- [Security Hardening](./security-hardening.md)
- [Performance Tuning](./performance-tuning.md)
- [Disaster Recovery Planning](./disaster-recovery.md)