---
sidebar_position: 1
---

# Zero-Cost

## Problem

Mehmet works as a system administrator in an e-commerce company. The company has a **10 TB** database and needs a **daily full backup**. This is because:

- In the past, restoring from incremental and differential backups required **synchronization of multiple files**.
- These methods were **specific to SQL Server**, making the process complex and time-consuming.

The company continued taking full backups daily because it prioritized security. However, this situation:

- Raised **storage costs** to unbearable levels.
- Created an additional burden of backup time and resource consumption.

## Solution

Mehmet discovered Rediacc, and with this system:

- **Full backups appear to be taken**, but only **changed data** is physically stored.
- For example, if there are **average daily changes of 100 GB** in a 10 TB database, the system **records only those 100 GB**.
- Backups work **completely and seamlessly during restoration**, even if stored as a single file.

**Advantages:**

1. Cost Savings:
   - Even with **100 GB** daily changes in a 10 TB database, the monthly storage cost is limited to **~3 TB** (it was **~300 TB** with the old system).

2. Universal Support:
   - Rediacc is not limited to SQL Server. It works compatibly with **MySQL, PostgreSQL, MongoDB**, and all other databases.
   - No need for **separate know-how** for different systems.

3. Time and Resource Efficiency:
   - Backup time is reduced from **hours to minutes**.
   - The load on disk and network resources decreases by 90%.

**Result:**
Thanks to Rediacc, the company:
- Reduced storage costs by **90%**.
- Standardized backup and restore processes.
- Met all its needs with **a single solution** for different database systems.