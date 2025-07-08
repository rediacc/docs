---
sidebar_position: 5
---

# Security Hardening Guide

This comprehensive guide covers security best practices and hardening procedures for your Rediacc infrastructure to protect against threats and ensure compliance.

## Prerequisites

- Administrative access to Rediacc Console
- Understanding of [Authentication](../authentication.md) system
- SSH access to infrastructure machines
- Basic security knowledge

## Overview

Security hardening involves:
- **Access Control**: Limiting and monitoring access
- **Encryption**: Protecting data at rest and in transit
- **Network Security**: Firewall and connection policies
- **Audit & Compliance**: Tracking and reporting
- **Incident Response**: Detection and mitigation

## Step 1: Access Control Hardening

### 1.1 User Account Security

#### Enforce Strong Passwords

Navigate to **System** → **Settings** and configure:

```yaml
Password Policy:
  Minimum Length: 14
  Require Uppercase: true
  Require Lowercase: true
  Require Numbers: true
  Require Special Characters: true
  Password History: 10
  Maximum Age: 90 days
  Lockout Threshold: 5 attempts
  Lockout Duration: 30 minutes
```

#### Implement Multi-Factor Authentication

```bash
#!/bin/bash
# enable-mfa.sh

# Configure TOTP for all admin users
for user in $(rediacc-cli list users --group Administrators); do
  rediacc-cli user enable-mfa \
    --email "$user" \
    --type TOTP \
    --require-on-login true
done

# Configure backup codes
rediacc-cli mfa generate-backup-codes \
  --count 10 \
  --store-encrypted true
```

### 1.2 Permission Management

#### Principle of Least Privilege

Create role-based permission groups:

```yaml
Permission Groups:
  Viewers:
    - View resources
    - View audit logs
    - No modification rights
  
  Operators:
    - Viewers permissions
    - Create/modify resources
    - Execute queue items
    - No system changes
  
  Administrators:
    - Full system access
    - User management
    - Security settings
    - Audit access
```

#### Regular Permission Audits

```bash
#!/bin/bash
# audit-permissions.sh

# Generate permission report
rediacc-cli audit permissions \
  --output permissions-audit-$(date +%Y%m%d).csv

# Check for excessive permissions
rediacc-cli audit analyze \
  --type over-privileged \
  --threshold 90days \
  --action report

# Remove stale permissions
rediacc-cli audit cleanup \
  --inactive-days 180 \
  --dry-run false
```

### 1.3 SSH Key Management

#### Rotate SSH Keys Regularly

```bash
#!/bin/bash
# rotate-ssh-keys.sh

# Generate new SSH key pair
ssh-keygen -t ed25519 -a 100 -f new_rediacc_key -C "rediacc-$(date +%Y%m%d)"

# Update all machines
for machine in $(rediacc-cli list machines --format json | jq -r '.[].name'); do
  echo "Updating SSH key for $machine"
  
  # Add new key
  rediacc-cli machine add-key \
    --name "$machine" \
    --key-file new_rediacc_key.pub
  
  # Test new key
  if rediacc-cli machine test-ssh --name "$machine" --key new_rediacc_key; then
    # Remove old key
    rediacc-cli machine remove-key \
      --name "$machine" \
      --key-id old-key-id
  fi
done

# Update team vault
rediacc-cli vault update \
  --team Default \
  --key SSH_PRIVATE_KEY \
  --file new_rediacc_key
```

## Step 2: Network Security

### 2.1 Firewall Configuration

#### Machine-Level Firewalls

```bash
#!/bin/bash
# configure-firewall.sh

# UFW configuration for Rediacc machines
configure_machine_firewall() {
  # Reset firewall
  ufw --force reset
  
  # Default policies
  ufw default deny incoming
  ufw default allow outgoing
  
  # Allow SSH from bridge servers only
  for bridge_ip in $(get_bridge_ips); do
    ufw allow from $bridge_ip to any port 22 proto tcp comment "SSH from bridge"
  done
  
  # Allow application ports
  ufw allow 80/tcp comment "HTTP"
  ufw allow 443/tcp comment "HTTPS"
  
  # Allow Docker communication
  ufw allow in on docker0
  ufw allow from 172.16.0.0/12 to any port 2376 proto tcp comment "Docker API"
  
  # Enable firewall
  ufw --force enable
  
  # Log configuration
  ufw logging high
}

# Apply to all machines
for machine in $(rediacc-cli list machines); do
  rediacc-cli queue create \
    --machine "$machine" \
    --script configure-firewall.sh \
    --priority 1
done
```

### 2.2 Network Segmentation

#### Implement VLANs

```yaml
Network Architecture:
  Management VLAN:
    - ID: 10
    - Subnet: 10.1.10.0/24
    - Access: Bridges, Admin workstations
    
  Production VLAN:
    - ID: 20
    - Subnet: 10.1.20.0/24
    - Access: Production machines
    - Isolation: Inter-VLAN routing restricted
    
  DMZ VLAN:
    - ID: 30
    - Subnet: 10.1.30.0/24
    - Access: Public-facing services
    - Restrictions: No access to internal VLANs
```

### 2.3 VPN Configuration

```bash
#!/bin/bash
# setup-vpn.sh

# Install WireGuard
apt-get update && apt-get install -y wireguard

# Generate VPN keys
wg genkey | tee server_private.key | wg pubkey > server_public.key

# Configure WireGuard
cat > /etc/wireguard/wg0.conf << EOF
[Interface]
Address = 10.200.0.1/24
ListenPort = 51820
PrivateKey = $(cat server_private.key)

# Bridge connections
[Peer]
PublicKey = BRIDGE_PUBLIC_KEY
AllowedIPs = 10.200.0.2/32
PersistentKeepalive = 25

# Admin connections
[Peer]
PublicKey = ADMIN_PUBLIC_KEY
AllowedIPs = 10.200.0.10/32
EOF

# Enable and start VPN
systemctl enable wg-quick@wg0
systemctl start wg-quick@wg0

# Configure firewall for VPN
ufw allow 51820/udp comment "WireGuard VPN"
ufw route allow in on wg0 out on eth0
```

## Step 3: Data Encryption

### 3.1 Encryption at Rest

#### Disk Encryption

```bash
#!/bin/bash
# enable-disk-encryption.sh

# For new installations - LUKS encryption
cryptsetup luksFormat /dev/sdb
cryptsetup open /dev/sdb encrypted_disk
mkfs.ext4 /dev/mapper/encrypted_disk

# Mount encrypted volume
mkdir -p /mnt/secure
mount /dev/mapper/encrypted_disk /mnt/secure

# Auto-mount configuration
echo "encrypted_disk /dev/sdb none luks" >> /etc/crypttab
echo "/dev/mapper/encrypted_disk /mnt/secure ext4 defaults 0 2" >> /etc/fstab
```

#### Database Encryption

```sql
-- Enable Transparent Data Encryption (TDE)
ALTER DATABASE rediacc SET ENCRYPTION ON;

-- Create master key
CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'Strong!Passw0rd';

-- Create certificate
CREATE CERTIFICATE RediaccCert 
WITH SUBJECT = 'Rediacc Database Encryption';

-- Backup certificate
BACKUP CERTIFICATE RediaccCert 
TO FILE = '/secure/RediaccCert.cer'
WITH PRIVATE KEY (
  FILE = '/secure/RediaccCert.pvk',
  ENCRYPTION BY PASSWORD = 'Certificate!Password'
);
```

### 3.2 Encryption in Transit

#### TLS Configuration

```nginx
# nginx-ssl.conf
server {
    listen 443 ssl http2;
    server_name console.company.com;
    
    # Modern TLS configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # Certificates
    ssl_certificate /etc/ssl/certs/rediacc.crt;
    ssl_certificate_key /etc/ssl/private/rediacc.key;
    
    # OCSP stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/ssl/certs/ca-bundle.crt;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" always;
}
```

### 3.3 Vault Encryption Hardening

```javascript
// enhanced-vault-encryption.js
const crypto = require('crypto');

class EnhancedVaultEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.saltLength = 32;
    this.tagLength = 16;
    this.iterations = 100000;
  }

  deriveKey(password, salt) {
    return crypto.pbkdf2Sync(password, salt, this.iterations, 32, 'sha256');
  }

  encrypt(data, masterPassword) {
    const salt = crypto.randomBytes(this.saltLength);
    const key = this.deriveKey(masterPassword, salt);
    const iv = crypto.randomBytes(16);
    
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    
    let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'base64');
    encrypted += cipher.final('base64');
    
    const tag = cipher.getAuthTag();
    
    return {
      encrypted,
      salt: salt.toString('base64'),
      iv: iv.toString('base64'),
      tag: tag.toString('base64')
    };
  }

  decrypt(encryptedData, masterPassword) {
    const salt = Buffer.from(encryptedData.salt, 'base64');
    const key = this.deriveKey(masterPassword, salt);
    const iv = Buffer.from(encryptedData.iv, 'base64');
    const tag = Buffer.from(encryptedData.tag, 'base64');
    
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    decipher.setAuthTag(tag);
    
    let decrypted = decipher.update(encryptedData.encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    
    return JSON.parse(decrypted);
  }
}
```

## Step 4: Audit and Compliance

### 4.1 Comprehensive Audit Logging

```yaml
Audit Configuration:
  Log Level: Detailed
  Retention: 7 years
  
  Events to Log:
    - All authentication attempts
    - Permission changes
    - Resource modifications
    - Queue executions
    - Vault access
    - API calls
    - SSH sessions
    
  Log Format:
    - Timestamp (UTC)
    - User ID and email
    - Source IP
    - Action performed
    - Resource affected
    - Result (success/failure)
    - Error details if failed
```

### 4.2 Compliance Monitoring

```bash
#!/bin/bash
# compliance-check.sh

# HIPAA Compliance Check
check_hipaa_compliance() {
  echo "=== HIPAA Compliance Check ==="
  
  # Check encryption
  check_encryption_status
  
  # Check access controls
  verify_access_controls
  
  # Check audit logs
  verify_audit_completeness
  
  # Check backup encryption
  verify_backup_encryption
}

# SOC2 Compliance Check
check_soc2_compliance() {
  echo "=== SOC2 Compliance Check ==="
  
  # Check security policies
  verify_security_policies
  
  # Check change management
  verify_change_management
  
  # Check incident response
  verify_incident_response
}

# PCI DSS Compliance Check
check_pci_compliance() {
  echo "=== PCI DSS Compliance Check ==="
  
  # Check network segmentation
  verify_network_segmentation
  
  # Check key management
  verify_key_management
  
  # Check vulnerability scanning
  run_vulnerability_scan
}

# Generate compliance report
generate_compliance_report() {
  local report_date=$(date +%Y%m%d)
  local report_file="compliance-report-${report_date}.pdf"
  
  {
    echo "Rediacc Compliance Report"
    echo "Generated: $(date)"
    echo "========================"
    
    check_hipaa_compliance
    check_soc2_compliance
    check_pci_compliance
    
  } | pandoc -o "$report_file"
  
  # Encrypt and sign report
  gpg --encrypt --sign --recipient compliance@company.com "$report_file"
}
```

### 4.3 Security Information and Event Management (SIEM)

```yaml
SIEM Integration:
  Provider: Splunk
  
  Log Sources:
    - Rediacc audit logs
    - System logs (syslog)
    - Application logs
    - Security device logs
    - Network flow data
    
  Alerts:
    - Multiple failed login attempts
    - Privilege escalation
    - Unauthorized access attempts
    - Suspicious API usage
    - Vault access anomalies
    
  Dashboards:
    - Security overview
    - User activity
    - Threat indicators
    - Compliance status
```

## Step 5: Container Security

### 5.1 Docker Security

```dockerfile
# Secure Dockerfile example
FROM alpine:3.18

# Run as non-root user
RUN addgroup -g 1000 -S appgroup && \
    adduser -u 1000 -S appuser -G appgroup

# Install security updates
RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
      ca-certificates \
      tzdata && \
    rm -rf /var/cache/apk/*

# Copy application
COPY --chown=appuser:appgroup app /app

# Security configurations
RUN chmod -R 750 /app && \
    find /app -type f -exec chmod 640 {} \;

# Switch to non-root user
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD ["/app/healthcheck"]

# Run application
ENTRYPOINT ["/app/entrypoint.sh"]
```

### 5.2 Container Scanning

```bash
#!/bin/bash
# scan-containers.sh

# Scan all images
for image in $(docker images --format "{{.Repository}}:{{.Tag}}"); do
  echo "Scanning $image"
  
  # Vulnerability scan
  trivy image --severity HIGH,CRITICAL "$image"
  
  # Security benchmark
  docker-bench-security --image "$image"
  
  # Store results
  trivy image --format json --output "scan-results/${image//\//-}.json" "$image"
done

# Check for outdated base images
for dockerfile in $(find . -name Dockerfile); do
  base_image=$(grep "^FROM" "$dockerfile" | awk '{print $2}')
  latest_version=$(docker pull "$base_image" 2>&1 | grep "Status:" | grep -o "Image is up to date" || echo "Update available")
  
  if [[ "$latest_version" != "Image is up to date" ]]; then
    echo "WARNING: $dockerfile uses outdated base image $base_image"
  fi
done
```

## Step 6: Incident Response

### 6.1 Incident Response Plan

```yaml
Incident Response Phases:
  1. Preparation:
    - Team contacts defined
    - Tools ready
    - Procedures documented
    
  2. Detection:
    - Automated alerts
    - Manual reporting
    - Threat hunting
    
  3. Containment:
    - Isolate affected systems
    - Preserve evidence
    - Prevent spread
    
  4. Eradication:
    - Remove threat
    - Patch vulnerabilities
    - Update defenses
    
  5. Recovery:
    - Restore services
    - Monitor for reinfection
    - Validate operations
    
  6. Lessons Learned:
    - Document incident
    - Update procedures
    - Train team
```

### 6.2 Automated Response

```bash
#!/bin/bash
# incident-response.sh

respond_to_brute_force() {
  local source_ip=$1
  local target_user=$2
  
  # Block IP immediately
  iptables -A INPUT -s "$source_ip" -j DROP
  
  # Add to permanent blocklist
  echo "$source_ip" >> /etc/rediacc/blocklist.txt
  
  # Disable targeted account
  rediacc-cli user disable --email "$target_user" --reason "Brute force target"
  
  # Alert security team
  send_security_alert "Brute Force Attack" \
    "Source: $source_ip" \
    "Target: $target_user" \
    "Action: IP blocked, user disabled"
}

respond_to_privilege_escalation() {
  local user=$1
  local action=$2
  
  # Revoke all sessions
  rediacc-cli sessions revoke --user "$user" --all
  
  # Reset to minimal permissions
  rediacc-cli user set-group --email "$user" --group "Viewers"
  
  # Require password reset
  rediacc-cli user require-reset --email "$user"
  
  # Full audit
  rediacc-cli audit export \
    --user "$user" \
    --days 30 \
    --output "escalation-audit-${user}-$(date +%Y%m%d).csv"
}

# Monitor for incidents
tail -f /var/log/rediacc/security.log | while read line; do
  if echo "$line" | grep -q "BRUTE_FORCE"; then
    source_ip=$(echo "$line" | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}')
    target_user=$(echo "$line" | grep -o 'user:[^ ]*' | cut -d: -f2)
    respond_to_brute_force "$source_ip" "$target_user"
  fi
  
  if echo "$line" | grep -q "PRIVILEGE_ESCALATION"; then
    user=$(echo "$line" | grep -o 'user:[^ ]*' | cut -d: -f2)
    action=$(echo "$line" | grep -o 'action:[^ ]*' | cut -d: -f2)
    respond_to_privilege_escalation "$user" "$action"
  fi
done
```

## Step 7: Security Monitoring Dashboard

```javascript
// security-dashboard.js
const securityMetrics = {
  async getSecurityScore() {
    const checks = [
      this.checkPasswordPolicy(),
      this.checkMFAAdoption(),
      this.checkEncryption(),
      this.checkAuditLogging(),
      this.checkVulnerabilities(),
      this.checkCompliance()
    ];
    
    const results = await Promise.all(checks);
    const score = results.reduce((sum, result) => sum + result.score, 0) / results.length;
    
    return {
      overallScore: Math.round(score * 100),
      details: results,
      recommendations: this.generateRecommendations(results)
    };
  },
  
  async checkPasswordPolicy() {
    const policy = await api.getPasswordPolicy();
    let score = 0;
    
    if (policy.minLength >= 14) score += 0.25;
    if (policy.requireComplex) score += 0.25;
    if (policy.maxAge <= 90) score += 0.25;
    if (policy.historyCount >= 10) score += 0.25;
    
    return {
      category: 'Password Policy',
      score,
      details: policy
    };
  },
  
  async checkMFAAdoption() {
    const users = await api.getUsers();
    const mfaEnabled = users.filter(u => u.mfaEnabled).length;
    const adoption = mfaEnabled / users.length;
    
    return {
      category: 'MFA Adoption',
      score: adoption,
      details: {
        total: users.length,
        enabled: mfaEnabled,
        percentage: Math.round(adoption * 100)
      }
    };
  }
};
```

## Best Practices Summary

### Daily Security Tasks
1. Review security alerts
2. Check failed login attempts
3. Monitor system resources
4. Verify backup completion

### Weekly Security Tasks
1. Review user permissions
2. Update security patches
3. Scan for vulnerabilities
4. Test incident response

### Monthly Security Tasks
1. Rotate credentials
2. Review audit logs
3. Update security policies
4. Conduct security training

### Quarterly Security Tasks
1. Penetration testing
2. Disaster recovery drill
3. Compliance audit
4. Security assessment

## Security Checklist

- [ ] Strong password policy enabled
- [ ] MFA required for administrators
- [ ] SSH keys rotated quarterly
- [ ] Firewalls configured on all machines
- [ ] Network segmentation implemented
- [ ] Data encrypted at rest
- [ ] TLS 1.2+ enforced
- [ ] Audit logging enabled
- [ ] SIEM integration active
- [ ] Container scanning automated
- [ ] Incident response plan tested
- [ ] Security training completed
- [ ] Compliance requirements met
- [ ] Vulnerability scans scheduled
- [ ] Backup encryption verified

## Next Steps

- [Performance Tuning](./performance-tuning.md)
- [Disaster Recovery](./disaster-recovery.md)
- [Backup Strategies](./backup-strategies.md)
- [Monitoring Setup](./monitoring-setup.md)