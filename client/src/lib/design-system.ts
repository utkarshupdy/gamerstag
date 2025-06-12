// GAMERS TAG Global Design System
// Single source of truth for all design tokens

export const DESIGN_SYSTEM = {
  // Color Palette
  colors: {
    brand: {
      primary: '#E5042F',
      dark: '#a5031f',
      light: '#ff1744',
      glow: 'rgba(229, 4, 47, 0.6)',
      shadow: 'rgba(229, 4, 47, 0.3)',
    },
    background: {
      primary: '#000000',
      secondary: '#171717',
      card: '#1a1a1a',
      glass: 'rgba(23, 23, 23, 0.8)',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      muted: '#6b7280',
      accent: '#E5042F',
    }
  },

  // Typography System
  typography: {
    fonts: {
      primary: "'Jost', sans-serif",
      heading: "'Orbitron', monospace",
      mono: "'Space Grotesk', sans-serif",
    },
    scale: {
      // Display sizes for hero sections
      'display-xl': 'gt-display-xl',
      'display-lg': 'gt-display-lg', 
      'display-md': 'gt-display-md',
      'display-sm': 'gt-display-sm',
      // Standard headings
      'h1': 'gt-heading-1',
      'h2': 'gt-heading-2',
      'h3': 'gt-heading-3',
      'h4': 'gt-heading-4',
      // Body text
      'body-xl': 'gt-body-xl',
      'body-lg': 'gt-body-lg',
      'body-md': 'gt-body-md',
      'body-sm': 'gt-body-sm',
      'body-xs': 'gt-body-xs',
      // Gaming-specific
      'stat': 'gt-gaming-stat',
      'counter': 'gt-gaming-counter',
      'label': 'gt-gaming-label',
    }
  },

  // Spacing System
  spacing: {
    sections: {
      xs: 'section-spacing-sm',    // 32px
      sm: 'section-spacing-md',    // 48px  
      md: 'section-spacing-lg',    // 64px
      lg: 'section-spacing-xl',    // 80px
      xl: 'section-spacing-2xl',   // 96px
    },
    components: {
      tight: 'space-y-2',
      normal: 'space-y-4', 
      relaxed: 'space-y-6',
      loose: 'space-y-8',
    }
  },

  // Layout Classes
  layout: {
    container: 'content-container',
    page: 'page-container',
    background: 'page-background',
  },

  // Component Styles
  components: {
    card: 'hud-box',
    panel: 'hud-panel',
    button: 'hud-button',
    glass: 'glass-card',
  }
};

// Utility functions for consistent styling
export const getTypographyClass = (variant: keyof typeof DESIGN_SYSTEM.typography.scale) => {
  return DESIGN_SYSTEM.typography.scale[variant];
};

export const getSectionSpacing = (size: keyof typeof DESIGN_SYSTEM.spacing.sections) => {
  return DESIGN_SYSTEM.spacing.sections[size];
};

export const getComponentSpacing = (size: keyof typeof DESIGN_SYSTEM.spacing.components) => {
  return DESIGN_SYSTEM.spacing.components[size];
};

// Page Layout Templates
export const PAGE_LAYOUTS = {
  standard: {
    hero: 'section-spacing-lg pt-32',
    content: 'section-spacing-md',
    footer: 'section-spacing-sm',
  },
  compact: {
    hero: 'section-spacing-md pt-24',
    content: 'section-spacing-sm', 
    footer: 'py-8',
  },
  spacious: {
    hero: 'section-spacing-xl pt-40',
    content: 'section-spacing-lg',
    footer: 'section-spacing-md',
  }
};

export default DESIGN_SYSTEM;