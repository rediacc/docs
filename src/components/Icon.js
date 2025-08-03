import React from 'react';
import {
  Shield,
  HardDrive,
  TrendingUp,
  RefreshCw,
  Clock,
  Globe,
  Rocket,
  BarChart3,
  Lock,
  Database,
  Server,
  Cloud,
  Zap,
  Activity,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Users,
  Building,
  Briefcase,
  Code,
  Terminal,
  Cpu,
  Network,
  Package,
  GitBranch,
  Settings,
  ShieldCheck,
  Key,
  Archive,
  Download,
  Upload,
  Play,
  Layers,
  Box,
  CircuitBoard,
  Workflow,
  Timer,
  History,
  CloudUpload,
  CloudDownload,
  ServerCrash,
  ShieldAlert,
  ShieldOff,
  Gauge,
  BookOpen,
  Home,
  Wrench,
  RotateCw,
  Store,
  Monitor,
  Smartphone,
  Gamepad2,
  Radio,
  CreditCard,
  DollarSign,
  TrendingDown,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Check,
  X,
  Minus,
  Plus,
  Copy,
  ClipboardCheck,
  FileCode,
  FolderOpen,
  Save,
  Search,
  Filter,
  SortAsc,
  Grid,
  List,
  LayoutGrid,
  Boxes,
  Package2,
  Truck,
  MapPin,
  Navigation,
  Compass,
  Map,
  Target,
  Crosshair,
  Flag,
  Award,
  Trophy,
  Medal,
  Star,
  Heart,
  ThumbsUp,
  MessageSquare,
  Mail,
  Send,
  Bell,
  BellOff,
  Volume,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Plug,
  Lightbulb,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Eye,
  EyeOff,
  Palette,
  Brush,
  Sparkles,
  FlaskConical,
  Microscope,
  Stethoscope,
  Building2,
  Factory,
  Warehouse,
  ShoppingCart,
  Scale,
  Calculator,
  Calendar,
  CalendarClock,
  AlarmClock
} from 'lucide-react';

// Icon mapping for backward compatibility and semantic naming
const iconMap = {
  // Core features
  'backup': HardDrive,
  'security': Shield,
  'scaling': TrendingUp,
  'disaster-recovery': RefreshCw,
  'time-travel': Clock,
  'multi-cloud': Globe,
  'automation': Workflow,
  'performance': Gauge,
  
  // Technical icons
  'server': Server,
  'database': Database,
  'cloud': Cloud,
  'network': Network,
  'cpu': Cpu,
  'storage': Archive,
  'api': Plug,
  'code': Code,
  'terminal': Terminal,
  'docker': Package2,
  'kubernetes': Boxes,
  
  // Business/Industry
  'enterprise': Building,
  'healthcare': Stethoscope,
  'finance': DollarSign,
  'ecommerce': ShoppingCart,
  'saas': Cloud,
  'gaming': Gamepad2,
  'media': Play,
  'manufacturing': Factory,
  
  // Actions
  'deploy': Rocket,
  'upload': Upload,
  'download': Download,
  'sync': RefreshCw,
  'migrate': CloudUpload,
  'restore': RotateCw,
  'monitor': Activity,
  'analyze': BarChart3,
  'optimize': Zap,
  'configure': Settings,
  'integrate': GitBranch,
  
  // Status/States
  'success': CheckCircle,
  'error': XCircle,
  'warning': AlertCircle,
  'info': Info,
  'active': Power,
  'inactive': PowerOff,
  'protected': ShieldCheck,
  'vulnerable': ShieldOff,
  'locked': Lock,
  'unlocked': Key,
  
  // UI/Navigation
  'arrow-right': ArrowRight,
  'chevron-right': ChevronRight,
  'external': ExternalLink,
  'menu': List,
  'grid': Grid,
  'search': Search,
  'filter': Filter,
  'sort': SortAsc,
  'home': Home,
  'docs': BookOpen,
  
  // Team/People
  'team': Users,
  'user': Users,
  'support': MessageSquare,
  'contact': Mail,
  
  // Metrics
  'uptime': Activity,
  'downtime': TrendingDown,
  'latency': Timer,
  'bandwidth': Wifi,
  'cost': DollarSign,
  'savings': TrendingUp,
  'efficiency': Gauge,
  'speed': Zap,
  
  // Development
  'devops': CircuitBoard,
  'ci-cd': Workflow,
  'testing': FlaskConical,
  'debugging': Microscope,
  'version': GitBranch,
  'release': Package,
  'build': Wrench,
  
  // Default fallback
  'default': Box
};

/**
 * Icon component wrapper for Lucide React icons
 * Provides consistent styling and accessibility features
 */
export const Icon = ({ 
  name, 
  size = 24, 
  color = 'currentColor',
  className = '',
  strokeWidth = 2,
  ariaLabel,
  style = {},
  ...props 
}) => {
  // Get the icon component from the map
  const IconComponent = iconMap[name] || iconMap['default'];
  
  // Combine styles
  const combinedStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...style
  };
  
  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`lucide-icon ${className}`}
      style={combinedStyle}
      aria-label={ariaLabel || name}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

/**
 * Feature icon component with background
 * Used for feature cards and showcases
 */
export const FeatureIcon = ({ 
  name, 
  size = 48,
  bgColor = 'var(--ifm-color-primary)',
  iconColor = 'white',
  className = '',
  style = {},
  ...props 
}) => {
  const IconComponent = iconMap[name] || iconMap['default'];
  
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: '12px',
    background: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  };
  
  return (
    <div 
      className={`feature-icon-container ${className}`}
      style={containerStyle}
      {...props}
    >
      <IconComponent
        size={size * 0.6}
        color={iconColor}
        strokeWidth={2}
        aria-hidden="true"
      />
    </div>
  );
};

// Export the icon map for reference
export const availableIcons = Object.keys(iconMap);

// Export individual icon components for direct use
export {
  Shield,
  HardDrive,
  TrendingUp,
  RefreshCw,
  Clock,
  Globe,
  Rocket,
  BarChart3,
  Lock,
  Database,
  Server,
  Cloud,
  Zap,
  Activity,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Users,
  Building,
  ShieldCheck
};

export default Icon;