import React from 'react';
import {
  BarChart3,
  Zap,
  Target,
  DollarSign,
  TrendingUp,
  Shield,
  AlertTriangle,
  Activity,
  Cpu,
  HardDrive,
  Network,
  CloudUpload,
  Database,
  RefreshCw,
  CheckCircle,
  XCircle,
  Info,
  AlertCircle,
  Lightbulb,
  Rocket,
  Lock,
  Globe,
  Briefcase,
  Sparkles,
  Gamepad2,
  Palette,
  Trophy,
  Repeat,
  Tent,
  Flame,
  Users,
  Wrench,
  Star,
  MapPin,
  Building,
  Package,
  Truck,
  FileText,
  GraduationCap,
  Settings,
  GitBranch,
  Heart,
  Sun,
  Bird,
  Gift,
  ShoppingBag,
  Monitor,
  Calendar,
} from 'lucide-react';

// Feature Icons for pages
export const PredictiveAnalyticsIcon = ({ size = 32, color = "var(--ifm-color-primary)" }) => 
  <BarChart3 size={size} color={color} />;

export const InstantProvisioningIcon = ({ size = 32, color = "var(--ifm-color-primary)" }) => 
  <Zap size={size} color={color} />;

export const SmartLoadBalancingIcon = ({ size = 32, color = "var(--ifm-color-primary)" }) => 
  <Target size={size} color={color} />;

export const CostOptimizationIcon = ({ size = 32, color = "var(--ifm-color-primary)" }) => 
  <DollarSign size={size} color={color} />;

// Service Icons for Professional Services
export const DataMigrationIcon = ({ size = 24, color = "currentColor" }) => 
  <Truck size={size} color={color} />;

export const RansomwareRecoveryIcon = ({ size = 24, color = "currentColor" }) => 
  <Shield size={size} color={color} />;

export const SecurityAssessmentIcon = ({ size = 24, color = "currentColor" }) => 
  <FileText size={size} color={color} />;

export const InfrastructureScalingIcon = ({ size = 24, color = "currentColor" }) => 
  <TrendingUp size={size} color={color} />;

export const TeamTrainingIcon = ({ size = 24, color = "currentColor" }) => 
  <GraduationCap size={size} color={color} />;

export const PerformanceOptimizationIcon = ({ size = 24, color = "currentColor" }) => 
  <Activity size={size} color={color} />;

export const CustomIntegrationIcon = ({ size = 24, color = "currentColor" }) => 
  <Settings size={size} color={color} />;

// Pricing and Discount Icons
export const BlackFridayIcon = ({ size = 24, color = "currentColor" }) => 
  <ShoppingBag size={size} color={color} />;

export const CyberMondayIcon = ({ size = 24, color = "currentColor" }) => 
  <Monitor size={size} color={color} />;

export const NewYearIcon = ({ size = 24, color = "currentColor" }) => 
  <Calendar size={size} color={color} />;

export const SummerSaleIcon = ({ size = 24, color = "currentColor" }) => 
  <Sun size={size} color={color} />;

export const EarlyBirdIcon = ({ size = 24, color = "currentColor" }) => 
  <Bird size={size} color={color} />;

export const ValentinesIcon = ({ size = 24, color = "currentColor" }) => 
  <Heart size={size} color={color} />;

// General Icons
export const LightbulbIcon = ({ size = 24, color = "currentColor" }) => 
  <Lightbulb size={size} color={color} />;

export const SpeedIcon = ({ size = 24, color = "currentColor" }) => 
  <Zap size={size} color={color} />;

// Utility function to get icon by name
export const getIconByName = (name, props = {}) => {
  const iconMap = {
    'predictive-analytics': PredictiveAnalyticsIcon,
    'instant-provisioning': InstantProvisioningIcon,
    'smart-load-balancing': SmartLoadBalancingIcon,
    'cost-optimization': CostOptimizationIcon,
    'data-migration': DataMigrationIcon,
    'ransomware-recovery': RansomwareRecoveryIcon,
    'security-assessment': SecurityAssessmentIcon,
    'infrastructure-scaling': InfrastructureScalingIcon,
    'team-training': TeamTrainingIcon,
    'performance-optimization': PerformanceOptimizationIcon,
    'custom-integration': CustomIntegrationIcon,
    'black-friday': BlackFridayIcon,
    'cyber-monday': CyberMondayIcon,
    'new-year': NewYearIcon,
    'summer-sale': SummerSaleIcon,
    'early-bird': EarlyBirdIcon,
    'valentines': ValentinesIcon,
    'lightbulb': LightbulbIcon,
    'speed': SpeedIcon,
  };
  
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};