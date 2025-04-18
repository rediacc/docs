---
sidebar_position: 1
---

# What is Rediacc?

Rediacc is a system software that enables software applications and large data sets to run on different machines without requiring installation, featuring fast cloning and backup capabilities. SSH connection is sufficient.

## Definitions

**Container:** System software that allows any software to run on different machines without requiring installation. It can create multiple instances of the same software within seconds.

**Service:** Can be a database like Oracle, an on-premise GitLab service, or an application providing REST API services. Each service has its own files, which can consist of a single executable file or thousands of files.

**Repo:** A virtual disk file called "repo" in Rediacc. Its size can range from 4 GB to thousands of TB. It contains services and all files related to these services.

- A server can have a single repo or multiple repos. This preference affects performance and distribution flexibility. For example, if phpMyAdmin and MySQL run under the same repo, they start on the same server. Separate repos should be created for them to run on different servers.

- Each repo has its own container host instance (Docker Instance). Services with the same name don't conflict in different repos; this situation is automatically managed by Rediacc.

**CoW (Copy-on-Write) File System:** Rediacc is built on this file system.

- When a file is copied, it is not physically duplicated; instead, it is treated as if there are two copies.

- If one of the files changes, *only the changed part* occupies a new area on the disk. For example, if a 1 GB text file is copied and "ABC" is added to the end, the total size of the two files becomes 1 GB + 3 bytes.

- This system is also used in backing up repos. When taking a backup on the same machine, only a virtual copy of the repo is created.

## How Does It Work?

Rediacc intelligently uses the capabilities of the operating system kernel (e.g., file system isolation and resource management) to:

- Clone services within seconds,
- Keep backups efficiently,
- Store all data encrypted,
- Run software seamlessly in different environments.