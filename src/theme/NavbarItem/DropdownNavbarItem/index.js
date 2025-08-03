import React from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import {
  Shield,
  Archive,
  TrendingUp,
  RefreshCw,
  History,
  Building,
  Workflow,
  Database,
  CloudUpload,
} from 'lucide-react';

// Map data-icon attribute to Lucide icons
const iconMap = {
  'shield': Shield,
  'archive': Archive,
  'trending-up': TrendingUp,
  'refresh-cw': RefreshCw,
  'history': History,
  'building': Building,
  'workflow': Workflow,
  'database': Database,
  'cloud-upload': CloudUpload,
};

export default function DropdownNavbarItemWrapper(props) {
  // Process items to add icons
  const processedProps = {
    ...props,
    items: props.items?.map(item => {
      const iconName = item['data-icon'];
      const Icon = iconName ? iconMap[iconName] : null;
      
      if (Icon) {
        return {
          ...item,
          label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon size={16} />
              <span>{typeof item.label === 'string' ? item.label : item.label}</span>
            </span>
          ),
        };
      }
      
      return item;
    }),
  };

  return <DropdownNavbarItem {...processedProps} />;
}