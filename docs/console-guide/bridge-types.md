---
sidebar_position: 13
---

# Bridge Types and Management

Understanding the different bridge types and management models is crucial for optimizing your Rediacc infrastructure. This guide explains the various bridge configurations available in the system.

## Bridge Types

Bridges are displayed with distinct icons in the Console to help identify their type at a glance.

### Global Bridges

Global bridges are designed to handle tasks across multiple regions and provide centralized processing capabilities.

**Visual Indicator:** 🌐 Cloud-server icon
**Display Format:** "Global Bridges" in bridge selection dropdowns

**Characteristics:**
- Can process tasks from any region
- Ideal for centralized deployments
- Provides load balancing across regions
- Suitable for organizations with multi-region infrastructure
- Often used as default fallback option

**Use Cases:**
- Cross-region backup operations
- Centralized monitoring tasks
- Global compliance scanning
- Multi-region deployments

### Regular Bridges

Regular bridges are region-specific and designed for localized task processing.

**Visual Indicator:** 🔌 API icon
**Display Format:** Custom bridge name (e.g., "My Bridge")

**Characteristics:**
- Process tasks only within their assigned region
- Lower latency for regional operations
- Better for compliance with data residency requirements
- Simplified network configuration
- Can be assigned to specific machines

**Use Cases:**
- Region-specific backups
- Local machine management
- Compliance-restricted operations
- Isolated environment management

## Management Models

### Cloud-Managed Bridges

Cloud-managed bridges are hosted and maintained by Rediacc infrastructure.

**Visual Indicator:** 💻 Desktop icon with "Cloud-Managed" label
**System Display:** Shows in the Management column of the bridges table

**Benefits:**
- No infrastructure management required
- Automatic updates and patches
- Built-in high availability
- Reduced operational overhead

**Considerations:**
- Requires outbound internet connectivity
- May have compliance implications
- Usage is metered based on your plan

**When to Use:**
- Small to medium deployments
- Organizations without dedicated IT infrastructure
- Proof of concept implementations
- Development and testing environments

### Self-Managed Bridges

Self-managed bridges run on your own infrastructure, giving you complete control.

**Visual Indicator:** 💻 Desktop icon with "Self-Managed" label
**System Display:** Shows in the Management column of the bridges table

**Benefits:**
- Full control over infrastructure
- Can run in air-gapped environments
- Customizable performance specifications
- No external dependencies

**Considerations:**
- Requires infrastructure management
- Manual updates required
- You manage high availability
- Higher operational overhead

**When to Use:**
- High-security environments
- Air-gapped networks
- Large-scale deployments
- Compliance-restricted scenarios

## Configuration Examples

### Setting Up a Global Cloud-Managed Bridge

1. Navigate to **System** > **Regions & Infrastructure**
2. Select your region
3. Click **Create Bridge**
4. Configure:
   - **Bridge Name**: `global-bridge-01`
   - **Type**: Global
   - **Management**: Cloud-Managed
5. Click **Create**

The bridge will automatically provision and connect to your infrastructure.

### Setting Up a Regional Self-Managed Bridge

1. First, install the bridge software on your server:
   ```bash
   ./bridge --bridge-mode \
     token=<your-api-token> \
     api_url=https://www.rediacc.com \
     master_password=<your-password> \
     batch_size=5
   ```

2. In the Console:
   - Navigate to **System** > **Regions & Infrastructure**
   - Select your region
   - Click **Create Bridge**
   - Configure:
     - **Bridge Name**: `regional-bridge-01`
     - **Type**: Regular
     - **Management**: Self-Managed
   - Copy the provided token

3. Update your bridge configuration with the token

## Performance Considerations

### Global Bridges
- **Pros**: Better resource utilization, automatic failover
- **Cons**: Potential latency for distant regions
- **Best Practice**: Deploy 1-2 global bridges per geographic area

### Regular Bridges
- **Pros**: Low latency, predictable performance
- **Cons**: Requires more bridges for multi-region setups
- **Best Practice**: Deploy 1 bridge per 50-100 machines in region

## Monitoring Bridge Health

### Key Metrics
- **Access Status**: Shows in the bridge list with a green checkmark
- **Machine Count**: Number of machines assigned to the bridge
- **Queue Load**: Monitor through the Queue page
- **Last Connection**: Available in bridge details

### Troubleshooting
1. **Bridge Shows No Access**:
   - Check network connectivity
   - Verify API token is valid
   - Review firewall rules

2. **High Queue Backlog**:
   - Consider adding more bridges
   - Check bridge server resources
   - Review task priorities

## Security Best Practices

### For Cloud-Managed Bridges
- Use vault encryption for sensitive data
- Regularly rotate API tokens
- Monitor audit logs for unusual activity

### For Self-Managed Bridges
- Run bridges in isolated networks when possible
- Use dedicated service accounts
- Implement log forwarding to SIEM
- Regular security updates

## Migration Strategies

### Moving from Cloud-Managed to Self-Managed
1. Deploy self-managed bridge infrastructure
2. Create new self-managed bridges in Console
3. Gradually reassign machines to new bridges
4. Monitor queue processing during transition
5. Decommission cloud-managed bridges

### Switching Bridge Types
1. Create new bridge with desired type
2. Update machine assignments in batches
3. Monitor queue distribution
4. Remove old bridge after verification

## Best Practices Summary

1. **Start Simple**: Begin with cloud-managed bridges for POCs
2. **Plan for Growth**: Design bridge topology for future scale
3. **Monitor Performance**: Use queue metrics to optimize placement
4. **Security First**: Choose management model based on security requirements
5. **Document Configuration**: Maintain bridge architecture diagrams

## Related Documentation

- [System Settings](./system.md) - General infrastructure configuration
- [Architecture Overview](./architecture.md) - Understanding system components
- [Queue Management](./queue.md) - Monitoring task processing
- [Security Hardening](./tutorials/security-hardening.md) - Security best practices