import React from 'react';
import {
  Users,
  Wrench,
  Star,
  MapPin,
  Building,
  Globe,
} from 'lucide-react';

// Main contact icons - consistent 32px size for visual hierarchy
export const CollaborateIcon = () => (
  <Users 
    size={32} 
    color="var(--ifm-color-primary)" 
    aria-hidden="true"
    style={{ minWidth: '32px', minHeight: '32px' }}
  />
);

export const SupportIcon = () => (
  <Wrench 
    size={32} 
    color="var(--ifm-color-primary)" 
    aria-hidden="true"
    style={{ minWidth: '32px', minHeight: '32px' }}
  />
);

export const PartnershipsIcon = () => (
  <Star 
    size={32} 
    color="var(--ifm-color-primary)" 
    aria-hidden="true"
    style={{ minWidth: '32px', minHeight: '32px' }}
  />
);

// Location icons - consistent 24px size for secondary hierarchy
export const LocationIcon = () => (
  <MapPin 
    size={24} 
    color="var(--ifm-color-primary)" 
    aria-hidden="true"
    style={{ minWidth: '24px', minHeight: '24px' }}
  />
);

export const BuildingIcon = () => (
  <Building 
    size={24} 
    color="var(--ifm-color-primary)" 
    aria-hidden="true"
    style={{ minWidth: '24px', minHeight: '24px' }}
  />
);

export const GlobalIcon = () => (
  <Globe 
    size={24} 
    color="var(--ifm-color-primary)" 
    aria-hidden="true"
    style={{ minWidth: '24px', minHeight: '24px' }}
  />
);