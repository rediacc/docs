---
sidebar_position: 2
---

# Advanced Deployment Strategies

This tutorial covers advanced deployment patterns and strategies using the Rediacc Console for production-grade applications.

## Prerequisites

- Completed the [Getting Started](./getting-started.md) tutorial
- Multiple machines configured
- Repository credentials set up
- Basic understanding of Docker and container orchestration

## Multi-Stage Deployments

### Overview

Multi-stage deployments allow you to progressively roll out changes across environments.

### Setting Up Environments

#### 1. Create Environment-Specific Machines

Add machines for each environment:

```yaml
# Development
Machine Name: dev-app-01
Team: Development
Tags: [dev, app-server]

# Staging
Machine Name: staging-app-01
Team: Staging
Tags: [staging, app-server, pre-prod]

# Production
Machine Name: prod-app-01, prod-app-02, prod-app-03
Team: Production
Tags: [prod, app-server, critical]
```

#### 2. Configure Environment Variables

For each machine, set environment-specific variables:

**Development:**
```yaml
NODE_ENV: development
API_URL: https://api-dev.company.com
DEBUG: true
LOG_LEVEL: debug
```

**Staging:**
```yaml
NODE_ENV: staging
API_URL: https://api-staging.company.com
DEBUG: false
LOG_LEVEL: info
```

**Production:**
```yaml
NODE_ENV: production
API_URL: https://api.company.com
DEBUG: false
LOG_LEVEL: warning
```

### Deployment Pipeline

#### 1. Create Deployment Scripts

Create a repository with deployment scripts:

```bash
# deploy/dev.sh
#!/bin/bash
echo "Deploying to development..."
docker-compose -f docker-compose.dev.yml up -d
./scripts/run-tests.sh
```

```bash
# deploy/staging.sh
#!/bin/bash
echo "Deploying to staging..."
docker-compose -f docker-compose.staging.yml up -d
./scripts/smoke-tests.sh
./scripts/integration-tests.sh
```

```bash
# deploy/prod.sh
#!/bin/bash
echo "Deploying to production..."
./scripts/pre-deploy-checks.sh
docker-compose -f docker-compose.prod.yml up -d
./scripts/health-checks.sh
./scripts/post-deploy-verification.sh
```

#### 2. Create Deployment Schedules

Set up automated deployment pipeline:

**Development - Continuous Deployment:**
```yaml
Schedule Name: dev-continuous-deploy
Cron: */30 * * * *  # Every 30 minutes
Machine: dev-app-01
Script: deploy/dev.sh
Repository: app-main
Branch: develop
```

**Staging - Daily Deployment:**
```yaml
Schedule Name: staging-daily-deploy
Cron: 0 2 * * *  # 2 AM daily
Machine: staging-app-01
Script: deploy/staging.sh
Repository: app-main
Branch: staging
Dependencies:
  - Wait for: dev-tests-passed
```

**Production - Weekly Release:**
```yaml
Schedule Name: prod-weekly-release
Cron: 0 3 * * 1  # Monday 3 AM
Machine: prod-app-01
Script: deploy/prod.sh
Repository: app-main
Branch: main
Manual Approval: required
```

## Blue-Green Deployments

### Architecture Setup

#### 1. Create Color-Coded Machine Groups

**Blue Environment:**
```yaml
Machines:
  - prod-blue-01
  - prod-blue-02
  - prod-blue-03
Load Balancer Target: blue-backend
```

**Green Environment:**
```yaml
Machines:
  - prod-green-01
  - prod-green-02
  - prod-green-03
Load Balancer Target: green-backend
```

#### 2. Deployment Process

Create a blue-green deployment script:

```bash
#!/bin/bash
# blue-green-deploy.sh

# Determine inactive environment
ACTIVE=$(curl -s http://lb.company.com/active)
if [ "$ACTIVE" = "blue" ]; then
    TARGET="green"
else
    TARGET="blue"
fi

echo "Deploying to $TARGET environment..."

# Deploy to inactive environment
for machine in $(rediacc-cli list machines --tag "prod-$TARGET"); do
    rediacc-cli queue create \
        --machine "$machine" \
        --script "deploy/update.sh" \
        --wait
done

# Run health checks
./scripts/health-check.sh --environment "$TARGET"

# Switch traffic
if [ $? -eq 0 ]; then
    echo "Switching traffic to $TARGET..."
    ./scripts/switch-traffic.sh "$TARGET"
else
    echo "Health checks failed, aborting switch"
    exit 1
fi
```

### Rollback Strategy

Quick rollback script:

```bash
#!/bin/bash
# rollback.sh

CURRENT=$(curl -s http://lb.company.com/active)
if [ "$CURRENT" = "blue" ]; then
    PREVIOUS="green"
else
    PREVIOUS="blue"
fi

echo "Rolling back to $PREVIOUS environment..."
./scripts/switch-traffic.sh "$PREVIOUS"
```

## Canary Deployments

### Progressive Rollout

#### 1. Configure Canary Machines

```yaml
# Canary pool (10% of traffic)
Machines:
  - prod-canary-01
Tags: [production, canary]

# Stable pool (90% of traffic)
Machines:
  - prod-stable-01
  - prod-stable-02
  - prod-stable-03
  - prod-stable-04
  - prod-stable-05
Tags: [production, stable]
```

#### 2. Canary Deployment Script

```bash
#!/bin/bash
# canary-deploy.sh

# Deploy to canary
echo "Deploying to canary..."
rediacc-cli queue create \
    --machine prod-canary-01 \
    --script "deploy/update.sh" \
    --priority high

# Monitor for 30 minutes
echo "Monitoring canary deployment..."
sleep 1800

# Check metrics
ERROR_RATE=$(./scripts/check-error-rate.sh --machine prod-canary-01)
if (( $(echo "$ERROR_RATE > 0.05" | bc -l) )); then
    echo "Error rate too high: $ERROR_RATE"
    ./scripts/rollback-canary.sh
    exit 1
fi

# Progressive rollout to stable
echo "Rolling out to stable pool..."
for i in {1..5}; do
    rediacc-cli queue create \
        --machine "prod-stable-0$i" \
        --script "deploy/update.sh" \
        --priority normal
    
    # Wait between each machine
    sleep 300
    
    # Check health
    ./scripts/health-check.sh --machine "prod-stable-0$i"
done
```

## Rolling Updates

### Configure Rolling Update Parameters

```yaml
Deployment Config:
  Strategy: Rolling
  Max Unavailable: 1
  Max Surge: 1
  Health Check Grace Period: 60s
  Update Order: oldest-first
```

### Rolling Update Script

```bash
#!/bin/bash
# rolling-update.sh

MACHINES=$(rediacc-cli list machines --team Production --tag app-server)
TOTAL=$(echo "$MACHINES" | wc -l)
BATCH_SIZE=2

echo "Starting rolling update for $TOTAL machines..."

# Process in batches
for ((i=0; i<$TOTAL; i+=BATCH_SIZE)); do
    BATCH=$(echo "$MACHINES" | sed -n "$((i+1)),$((i+BATCH_SIZE))p")
    
    echo "Updating batch $((i/BATCH_SIZE + 1))..."
    
    # Update machines in parallel
    for machine in $BATCH; do
        (
            # Drain connections
            rediacc-cli queue create \
                --machine "$machine" \
                --script "scripts/drain-connections.sh" \
                --wait
            
            # Update application
            rediacc-cli queue create \
                --machine "$machine" \
                --script "deploy/update.sh" \
                --wait
            
            # Health check
            ./scripts/health-check.sh --machine "$machine"
        ) &
    done
    
    # Wait for batch to complete
    wait
    
    # Verify batch health
    for machine in $BATCH; do
        if ! ./scripts/verify-deployment.sh --machine "$machine"; then
            echo "Deployment verification failed for $machine"
            ./scripts/rollback-all.sh
            exit 1
        fi
    done
    
    echo "Batch completed successfully"
    sleep 30  # Stabilization period
done
```

## Feature Flag Deployments

### Setup Feature Flags

#### 1. Create Feature Flag Configuration

```yaml
# feature-flags.yaml
features:
  new-ui:
    enabled: false
    rollout: 0
    whitelist: []
  
  payment-v2:
    enabled: true
    rollout: 10  # 10% of users
    whitelist: ["beta-testers"]
  
  advanced-analytics:
    enabled: true
    rollout: 100
    blacklist: ["free-tier"]
```

#### 2. Deploy with Feature Flags

```bash
#!/bin/bash
# feature-deploy.sh

# Update feature flags first
rediacc-cli storage upload \
    --storage config-store \
    --file feature-flags.yaml \
    --path /configs/features.yaml

# Deploy application
for machine in $(rediacc-cli list machines --team Production); do
    rediacc-cli queue create \
        --machine "$machine" \
        --script "deploy/update-with-flags.sh" \
        --env "FEATURE_FLAG_URL=s3://config-store/configs/features.yaml"
done

# Monitor feature metrics
./scripts/monitor-features.sh
```

## Disaster Recovery Deployments

### Multi-Region Setup

#### 1. Configure Regions

```yaml
Primary Region:
  Name: us-east-1
  Machines:
    - prod-use1-01
    - prod-use1-02
  Storage: s3-us-east-1
  
Secondary Region:
  Name: us-west-2
  Machines:
    - prod-usw2-01
    - prod-usw2-02
  Storage: s3-us-west-2
  Mode: standby
```

#### 2. Failover Script

```bash
#!/bin/bash
# disaster-recovery.sh

PRIMARY_REGION="us-east-1"
SECONDARY_REGION="us-west-2"

# Check primary region health
if ! ./scripts/check-region-health.sh "$PRIMARY_REGION"; then
    echo "Primary region unhealthy, initiating failover..."
    
    # Promote secondary databases
    rediacc-cli queue create \
        --machine prod-usw2-db-01 \
        --script "scripts/promote-to-primary.sh" \
        --priority critical
    
    # Update DNS
    ./scripts/update-dns.sh --region "$SECONDARY_REGION"
    
    # Scale up secondary region
    for i in {3..5}; do
        rediacc-cli queue create \
            --machine "prod-usw2-0$i" \
            --script "deploy/scale-up.sh"
    done
    
    # Notify operations team
    ./scripts/send-alert.sh "Failover to $SECONDARY_REGION completed"
fi
```

## Monitoring Deployments

### Real-Time Monitoring Dashboard

Create a monitoring script that tracks deployments:

```bash
#!/bin/bash
# monitor-deployment.sh

DEPLOYMENT_ID=$1

while true; do
    clear
    echo "=== Deployment Monitor - ID: $DEPLOYMENT_ID ==="
    echo ""
    
    # Queue status
    QUEUE_STATUS=$(rediacc-cli queue get --id "$DEPLOYMENT_ID")
    echo "Status: $QUEUE_STATUS"
    
    # Machine health
    echo -e "\nMachine Health:"
    for machine in $(rediacc-cli list machines --deployment "$DEPLOYMENT_ID"); do
        HEALTH=$(./scripts/check-health.sh "$machine")
        echo "  $machine: $HEALTH"
    done
    
    # Application metrics
    echo -e "\nApplication Metrics:"
    echo "  Response Time: $(./scripts/get-metric.sh response-time)"
    echo "  Error Rate: $(./scripts/get-metric.sh error-rate)%"
    echo "  Active Users: $(./scripts/get-metric.sh active-users)"
    
    # Logs tail
    echo -e "\nRecent Logs:"
    rediacc-cli queue logs --id "$DEPLOYMENT_ID" --tail 5
    
    sleep 5
done
```

### Deployment Validation

Comprehensive validation script:

```bash
#!/bin/bash
# validate-deployment.sh

DEPLOYMENT_ID=$1
CHECKS_PASSED=0
TOTAL_CHECKS=0

echo "Running deployment validation..."

# Function to run a check
run_check() {
    local check_name=$1
    local check_command=$2
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if eval "$check_command"; then
        echo "✅ $check_name"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        echo "❌ $check_name"
    fi
}

# Run validation checks
run_check "Container Health" "./scripts/check-containers.sh"
run_check "Service Endpoints" "./scripts/test-endpoints.sh"
run_check "Database Connectivity" "./scripts/test-database.sh"
run_check "Cache Performance" "./scripts/test-cache.sh"
run_check "SSL Certificates" "./scripts/verify-ssl.sh"
run_check "API Response Times" "./scripts/measure-api-performance.sh"
run_check "Error Rates" "[ $(./scripts/get-error-rate.sh) -lt 1 ]"
run_check "Resource Usage" "./scripts/check-resources.sh"

# Summary
echo ""
echo "Validation Summary: $CHECKS_PASSED/$TOTAL_CHECKS checks passed"

if [ $CHECKS_PASSED -eq $TOTAL_CHECKS ]; then
    echo "✅ Deployment validation successful!"
    exit 0
else
    echo "❌ Deployment validation failed!"
    exit 1
fi
```

## Best Practices

### 1. Pre-Deployment Checklist

Always verify before deploying:
- [ ] All tests passing in CI/CD
- [ ] Database migrations tested
- [ ] Rollback plan documented
- [ ] Monitoring alerts configured
- [ ] Team notified of deployment window

### 2. Deployment Windows

Schedule deployments during:
- Low traffic periods
- After backup completion
- When team is available
- Outside of critical business hours

### 3. Communication

Keep stakeholders informed:
- Pre-deployment notification
- Progress updates
- Post-deployment summary
- Incident communication plan

### 4. Documentation

Document every deployment:
- Changes included
- Rollback procedures
- Known issues
- Performance impact

## Next Steps

- [Set Up Monitoring](./monitoring-setup.md)
- [Configure Automated Backups](./backup-strategies.md)
- [Implement Security Hardening](./security-hardening.md)
- [Optimize Performance](./performance-tuning.md)