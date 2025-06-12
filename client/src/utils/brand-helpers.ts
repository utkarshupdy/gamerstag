// Brand System Helper Functions
// Utilities for working with the centralized brand system

import { brandConfig } from '@/config/brand';

/**
 * Get brand color CSS variable reference
 */
export const getBrandColor = (colorKey: keyof typeof brandConfig.colors) => {
  const colorMap = {
    primary: 'var(--brand-primary)',
    white: 'var(--brand-white)', 
    secondary: 'var(--brand-secondary)',
    dark: 'var(--brand-dark)',
    background: 'var(--brand-background)'
  };
  
  return colorMap[colorKey] || colorMap.primary;
};

/**
 * Get brand color with opacity using RGB variables
 */
export const getBrandColorWithOpacity = (colorKey: 'primary' | 'white', opacity: number) => {
  const rgbMap = {
    primary: 'var(--brand-primary-rgb)',
    white: 'var(--brand-white-rgb)'
  };
  
  return `rgba(${rgbMap[colorKey]}, ${opacity})`;
};

/**
 * Generate Tailwind classes for brand colors
 */
export const brandClasses = {
  // Text colors
  text: {
    primary: 'text-[var(--brand-primary)]',
    white: 'text-[var(--brand-white)]',
    secondary: 'text-[var(--brand-secondary)]',
    dark: 'text-[var(--brand-dark)]'
  },
  
  // Background colors
  bg: {
    primary: 'bg-[var(--brand-primary)]',
    white: 'bg-[var(--brand-white)]',
    secondary: 'bg-[var(--brand-secondary)]',
    dark: 'bg-[var(--brand-dark)]',
    background: 'bg-[var(--brand-background)]'
  },
  
  // Border colors
  border: {
    primary: 'border-[var(--brand-primary)]',
    white: 'border-[var(--brand-white)]',
    secondary: 'border-[var(--brand-secondary)]',
    dark: 'border-[var(--brand-dark)]'
  },
  
  // Hover states
  hover: {
    textPrimary: 'hover:text-[var(--brand-primary)]',
    textWhite: 'hover:text-[var(--brand-white)]',
    bgPrimary: 'hover:bg-[var(--brand-primary)]',
    bgWhite: 'hover:bg-[var(--brand-white)]',
    borderPrimary: 'hover:border-[var(--brand-primary)]',
    borderWhite: 'hover:border-[var(--brand-white)]'
  }
};

/**
 * Generate dynamic classes with opacity
 */
export const withOpacity = {
  bgPrimary: (opacity: number) => `bg-[rgba(var(--brand-primary-rgb),${opacity})]`,
  bgWhite: (opacity: number) => `bg-[rgba(var(--brand-white-rgb),${opacity})]`,
  borderPrimary: (opacity: number) => `border-[rgba(var(--brand-primary-rgb),${opacity})]`,
  borderWhite: (opacity: number) => `border-[rgba(var(--brand-white-rgb),${opacity})]`,
  textPrimary: (opacity: number) => `text-[rgba(var(--brand-primary-rgb),${opacity})]`,
  textWhite: (opacity: number) => `text-[rgba(var(--brand-white-rgb),${opacity})]`
};

/**
 * Update CSS variables dynamically (for theme switching)
 */
export const updateBrandColors = (newColors: Partial<typeof brandConfig.colors>) => {
  const root = document.documentElement;
  
  Object.entries(newColors).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--brand-${key}`, value);
      
      // Update RGB values for primary and white colors
      if (key === 'primary' || key === 'white') {
        const rgb = hexToRgb(value);
        if (rgb) {
          root.style.setProperty(`--brand-${key}-rgb`, rgb);
        }
      }
    }
  });
};

/**
 * Convert hex color to RGB string
 */
function hexToRgb(hex: string): string | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r}, ${g}, ${b}`;
}

/**
 * Preset color themes for quick switching
 */
export const colorThemes = {
  default: {
    primary: '#E5042F',
    white: '#FFFFFF'
  },
  blue: {
    primary: '#0066FF',
    white: '#FFFFFF'
  },
  purple: {
    primary: '#7C3AED',
    white: '#FFFFFF'
  },
  green: {
    primary: '#059669',
    white: '#FFFFFF'
  },
  orange: {
    primary: '#EA580C',
    white: '#FFFFFF'
  }
};

/**
 * Apply a preset theme
 */
export const applyTheme = (themeName: keyof typeof colorThemes) => {
  const theme = colorThemes[themeName];
  if (theme) {
    updateBrandColors(theme);
  }
};