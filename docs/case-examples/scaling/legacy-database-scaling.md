---
sidebar_position: 2
---

# Legacy Database Scaling

## Problem

The company's services in the cloud environment were **struggling to respond**. As a solution, the software team:
- Performed **horizontal scaling with Kubernetes** and **increased the number of servers 10 times**.
- However, performance improved **only 2 times**.

**Bottleneck Detection:**
- It was understood that the source of the problem was a **legacy database that cannot be scaled**.
- The database could not work in a distributed manner like in modern architectures.

**Dilemma:**
- Migrating to a modern database **could take years** → It required rewriting code, data migration, and testing processes.
- Cost and time loss were unacceptable.

## Crisis

- Customers are complaining due to **slow query times**.
- Server costs are increasing, but **performance is not satisfactory**.
- Risk of **reputation loss** increases in a competitive market.

## Rediacc Solution

System engineer Yüksel, using Rediacc's cross-backup feature:

1. **Real-time Data Replication:**
   - Changes in the legacy database were transferred to other servers **at 10-15 minute intervals**.
   - **Only changed data** was synchronized → **Bandwidth consumption reduced by 95%**.

2. **Query Distribution:**
   - Read queries were **distributed to multiple machines**.
   - Write operations were kept **in the main database** to ensure consistency.

3. **Cost-Free Scaling:**
   - The legacy system was supported with additional servers **without being changed**.
   - No need for new hardware acquisition → **Cloud servers were rented hourly** for cost optimization.

**Result:**
- Performance Increase:
  - Query times were reduced from **55 seconds to 7 seconds**.
  - System capacity increased **8 times**.
- Cost Control:
  - Savings from rewriting the legacy system → **Financial resources were preserved**.
- Time Gain:
  - The solution was implemented **within 3 weeks**.
  - Customer complaints were resolved by **90%**.