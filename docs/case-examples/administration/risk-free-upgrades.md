---
sidebar_position: 3
---

# Risk-Free Upgrades

## Problem

:::info System Administrator's Plan
Mehmet is an experienced system administrator who manages large-scale databases. He decides to **upgrade a 100 TB PostgreSQL database from version 13 to 14**. His plan:

1. **Take a backup** → However, backing up takes **7 days** due to data size
2. **Perform the upgrade on the weekend** → Departments are notified of an outage on **Saturday 01:00-05:00**
:::

## Crisis

:::danger Unexpected Error
- An **unexpected error** occurs during the upgrade
- The database **can neither revert to the old version nor proceed to the new version**
- Even external support teams cannot solve the problem
:::

:::caution Impacts
- Customers **cannot access payment and order systems**
- Company employees (**5000+ people**) cannot work
- **Reputation loss** and increasing complaints begin
:::

:::note Temporary Solution
- The last backup is loaded onto **a new server** → **Hardware cost doubles**
- Thursday and Friday data are **only in the live environment**, so data loss occurs
- **Two databases with different versions** are created → Inconsistencies increase
:::

## Rediacc Solution

:::tip Mehmet's Solution
Mehmet solves the problem fundamentally with Rediacc:
:::

:::info Key Features
1. **Instant Cloning:**
   - A **clone of the 100 TB database is created within seconds**
   - Upgrade tests are performed **without affecting the live system**

2. **Hourly Snapshots:**
   - It is determined **which step has been failing since when** during the upgrade process
   - Problematic operations are **identified in advance** and corrected

3. **Seamless Upgrade:**
   - If the upgrade fails, **the live environment is not affected**
   - If the upgrade succeeds, the new live environment becomes the latest clone
:::

:::success Result
- Time and Cost Savings:
  - Backup time was reduced from **7 days to 10 seconds**
- Risk-Free Upgrade:
  - Errors were detected in advance in the test environment → **No problems in the live system**
- Zero Downtime:
  - Customers and employees **felt no disruption**
:::