# Dynamic Resource Allocation

## Overview

Rediacc uses **pool-based dynamic resource allocation** to ensure fair and efficient distribution of server resources (CPU and memory) across all users. The system monitors actual resource consumption in real-time and enforces limits based on subscription tiers.

## Resource Pools

Server resources are divided into two pools:

```
Total System Resources
├── OS Reserve (20%)        - Reserved for operating system
└── Usable Resources (80%)
    ├── Shared Pool (70%)   - Available to ALL users
    └── Reserved Pool (30%) - Exclusive to paid customers
```

### Shared Pool (70%)
- **Access**: All subscription tiers (Community, Advanced, Premium, Elite)
- **Purpose**: Fair baseline access for everyone
- **Enforcement**: Community tier is limited to this pool only

### Reserved Pool (30%)
- **Access**: Paid tiers only (Advanced, Premium, Elite)
- **Purpose**: Guaranteed resources for paying customers
- **Benefit**: Paid customers can always access resources, even when Community users are active

## How Admission Control Works

When a new task requests resources, the system:

1. **Checks actual consumption** via real-time monitoring
2. **Calculates pool limits** based on percentages
3. **Compares usage to limits** for the requesting tier
4. **Allows or blocks** the request

### Community Tier Limits
Community users can create new tasks if:
```
Community Actual Usage < Shared Pool Capacity (70%)
```

**Example** (1000 MB usable resources):
- Shared pool: 700 MB
- Current Community usage: 450 MB
- **Result**: ✅ New Community task allowed (450 < 700)

If Community usage reaches 700 MB:
- **Result**: ❌ New Community tasks blocked until resources free up

### Paid Tier Limits
Paid customers (Advanced, Premium, Elite) can create tasks if:
```
Paid Actual Usage < Total Usable Resources (100%)
```

**Example** (1000 MB usable resources):
- Total available: 1000 MB (700 MB shared + 300 MB reserved)
- Current Paid usage: 850 MB
- **Result**: ✅ New Paid task allowed (850 < 1000)

**Guaranteed Access**: Even if Community users consume the entire shared pool (700 MB), paid customers can still use the reserved pool (300 MB).

## Real-Time Monitoring

The system tracks **actual resource consumption**, not theoretical limits:

- **Memory**: Actual MB used by running tasks
- **CPU**: Actual processing power consumed (measured in millicores)
- **Frequency**: Checked when new tasks request resources

This approach ensures:
- **Fairness**: Users only "pay" for what they actually use
- **Efficiency**: Unused allocated resources don't block others
- **Accuracy**: Decisions based on real data, not estimates

## Container Resource Limits

Each task runs in an isolated container with generous resource ceilings:

| Resource | Limit | Purpose |
|----------|-------|---------|
| Memory | 256 MB | Safety ceiling to prevent runaway tasks |
| CPU | 2 cores | Generous allocation for performance |

**Note**: These are safety limits, not strict allocations. Containers use only what they need.

## Subscription Tier Benefits

### Community (Free)
- **Access**: Shared pool only (70% of resources)
- **Task lifetime**: 2 hours maximum
- **Priority**: Lower (processed after paid tiers)

### Advanced
- **Access**: Shared + Reserved pools (100% of resources)
- **Task lifetime**: 6 hours maximum
- **Priority**: Higher than Community

### Premium
- **Access**: Shared + Reserved pools (100% of resources)
- **Task lifetime**: 12 hours maximum
- **Priority**: Higher than Advanced

### Elite
- **Access**: Shared + Reserved pools (100% of resources)
- **Task lifetime**: 24 hours maximum
- **Priority**: Highest priority processing

## What Happens When Resources Are Full

If a task cannot be created due to resource limits:

1. **Request is skipped** (not queued)
2. **Task remains in pending state** in the database
3. **System automatically retries** with the next eligible company
4. **Higher priority tasks** (paid tiers) are tried first
5. **Resources automatically free** as tasks complete

**Result**: The system self-balances, ensuring paid customers always get priority access while allowing Community users to utilize any available capacity.

## Example Scenarios

### Scenario 1: Light Load
**System**: 8 GB usable memory
**Shared Pool**: 5.6 GB (70%)
**Reserved Pool**: 2.4 GB (30%)
**Current Usage**: 2 GB Community, 1 GB Paid

**New Requests**:
- ✅ Community task: Allowed (2 GB < 5.6 GB)
- ✅ Paid task: Allowed (1 GB < 8 GB)

### Scenario 2: Community at Capacity
**System**: 8 GB usable memory
**Shared Pool**: 5.6 GB (70%)
**Reserved Pool**: 2.4 GB (30%)
**Current Usage**: 5.6 GB Community, 0 GB Paid

**New Requests**:
- ❌ Community task: Blocked (5.6 GB = 5.6 GB)
- ✅ Paid task: Allowed (can use reserved 2.4 GB)

### Scenario 3: System at Capacity
**System**: 8 GB usable memory
**Current Usage**: 5 GB Community, 3 GB Paid (8 GB total)

**New Requests**:
- ❌ Community task: Blocked (shared pool full)
- ❌ Paid task: Blocked (all resources in use)
- **Next**: As tasks complete, paid customers get priority for freed resources

## Configuration

System administrators can tune resource allocation via environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PAID_RESOURCE_RESERVE_PERCENT` | 30 | Percentage reserved for paid customers |
| `OS_RESERVE_PERCENT` | 20 | Percentage reserved for operating system |

**Note**: These settings affect the pool sizes but not the core allocation logic.

## Benefits

### For Community Users
- **Fair access** to 70% of system resources
- **No artificial restrictions** when resources available
- **Automatic balancing** ensures efficient utilization

### For Paid Customers
- **Guaranteed 30% reservation** never shared with free tier
- **Full 100% access** when available
- **Higher priority** during resource contention
- **Predictable performance** even during peak usage

### For System Operators
- **Automatic scaling** based on actual server capacity
- **Real-time monitoring** of resource distribution
- **No manual limit tuning** required
- **Efficient resource utilization** across all tiers
