---
sidebar_position: 1
---

# What is Rediacc?

> **Amateurs Hope For Successful Deployments. Professionals Ensure Them. Which Are You?**

Rediacc is a system software that enables software applications and large data sets to run on different machines without requiring installation, featuring fast cloning and backup capabilities. SSH connection is sufficient.

## Definitions

**Container:** Think of a container as a portable package that contains everything a piece of software needs to run. Similar to how shipping containers can be moved from ship to truck without unpacking, software containers can run on any machine without installation. Rediacc uses containers to create multiple instances of the same software within seconds.

**Service:** Any standalone software application that provides specific functionality. Examples include:
- Databases (MySQL, PostgreSQL, Oracle)
- Web servers (Apache, Nginx)
- Applications (GitLab, Jira, custom apps)
- API services

Each service has its own set of files, ranging from a single executable to thousands of files and directories.

**Repo:** Short for "repository," a repo in Rediacc is like a virtual hard drive that contains all the files and configurations for your services. Key points:
- Size ranges from 4 GB to thousands of TB
- Can hold multiple related services
- Has its own isolated environment (Docker instance)
- Can be quickly cloned, backed up, or moved between machines

Think of repos as self-contained environments where your services live. If two services need to run on the same machine, put them in the same repo. If they need to run on different machines, create separate repos.

**CoW (Copy-on-Write) File System:** A smart storage technology that saves space and time. Here's how it works:

- **Efficient Copying:** When you copy a file, no actual duplication happens until changes are made. It's like having two people share the same book - no need for a second copy until one person wants to write notes in their copy.

- **Space-Saving Changes:** Only the modified parts consume additional storage. For example:
  * If you copy a 10 GB database file and change just 5 MB of data, you only use 10 GB + 5 MB of space (not 20 GB)
  * If you make 100 copies of a repo for testing and don't change anything, they take up the same space as one copy

- **Fast Backups:** Backups take seconds instead of hours because only references are created, not full copies. Actual duplication happens only for changed data.

## How Does It Work?

Rediacc intelligently uses the capabilities of the operating system kernel (e.g., file system isolation and resource management) to:

- Clone services within seconds,
- Keep backups efficiently,
- Store all data encrypted,
- Run software seamlessly in different environments.

## Key Benefits

- **Zero-Cost Backups**: Save up to 90% on storage costs with differential backup technology that stores only changed data.
- **Time Travel**: Restore systems to any point in time with automated snapshots.
- **Cross Backup**: Securely back up data to remote servers with minimal bandwidth usage.
- **Security**: End-to-end encryption for all repositories and real-time defense against suspicious activities.
- **Seamless Scaling**: Instantly clone environments to handle peak demand and sync back to on-premise systems when needed.
- **Risk-Free Upgrades**: Test changes on instant clones without affecting production systems.

## Origin Story

Rediacc was born from the founder's personal challenges with data loss and system availability. Originally conceived as "Remote Dictionary Accelerated" (a GPU-accelerated version of Redis), the name evolved to also represent "Ready to Accelerate"—reflecting its mission to help businesses operate with flexibility and resilience, ready to accelerate whenever opportunities or challenges arise.

## Management Interface

Rediacc includes a comprehensive web application for managing:
- Infrastructure (regions, bridges, machines)
- Teams and users
- Resources (repositories, storage, schedules)
- Operations (queue management)
- Administration (company settings, user management)

Available in multiple tiers from Community to Elite, Rediacc provides scalable solutions for individual developers, growing teams, businesses, and enterprise organizations.