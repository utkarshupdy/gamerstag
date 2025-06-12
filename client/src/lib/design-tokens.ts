// Global Design System - GAMERS TAG
// This file contains all design tokens including typography, colors, spacing, and layout

export const designTokens = {
  // Color System
  colors: {
    // Primary Brand Colors
    primary: {
      red: '#E5042F',
      redDark: '#a5031f',
      redLight: '#ff1744',
      redGlow: 'rgba(229, 4, 47, 0.6)',
      redShadow: 'rgba(229, 4, 47, 0.3)',
    },
    
    // Background Colors
    background: {
      primary: '#000000',
      secondary: '#171717',
      card: '#1a1a1a',
      glass: 'rgba(23, 23, 23, 0.8)',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    
    // Text Colors
    text: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      muted: '#6b7280',
      accent: '#E5042F',
    },
    
    // Border Colors
    border: {
      default: '#171717',
      accent: 'rgba(229, 4, 47, 0.3)',
      accentHover: 'rgba(229, 4, 47, 0.6)',
      glass: 'rgba(229, 4, 47, 0.2)',
    },
    
    // Status Colors
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    }
  },

  // Typography System
  typography: {
    // Font Families
    fonts: {
      primary: "'Jost', sans-serif",
      heading: "'Orbitron', monospace",
      mono: "'Space Grotesk', sans-serif",
    },
    
    // Font Sizes
    sizes: {
      // Display Sizes (Hero titles)
      display: {
        xl: '5rem',    // 80px
        lg: '4rem',    // 64px
        md: '3rem',    // 48px
        sm: '2.5rem',  // 40px
      },
      
      // Heading Sizes
      heading: {
        h1: '2.25rem', // 36px
        h2: '1.875rem', // 30px
        h3: '1.5rem',   // 24px
        h4: '1.25rem',  // 20px
        h5: '1.125rem', // 18px
        h6: '1rem',     // 16px
      },
      
      // Body Text Sizes
      body: {
        xl: '1.25rem',  // 20px
        lg: '1.125rem', // 18px
        md: '1rem',     // 16px
        sm: '0.875rem', // 14px
        xs: '0.75rem',  // 12px
      },
      
      // Gaming UI Sizes
      gaming: {
        stat: '3rem',     // 48px - For statistics numbers
        counter: '2rem',  // 32px - For counters
        label: '0.75rem', // 12px - For small labels
      }
    },
    
    // Font Weights
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    
    // Line Heights
    lineHeights: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    }
  },

  // Spacing System
  spacing: {
    // Base spacing unit (4px)
    base: '0.25rem',
    
    // Standard spacing scale
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    '4xl': '5rem',  // 80px
    '5xl': '6rem',  // 96px
    
    // Section spacing
    section: {
      sm: '2rem',     // 32px
      md: '3rem',     // 48px
      lg: '4rem',     // 64px
      xl: '5rem',     // 80px
      '2xl': '6rem',  // 96px
    },
    
    // Component spacing
    component: {
      tight: '0.5rem',    // 8px
      normal: '1rem',     // 16px
      relaxed: '1.5rem',  // 24px
      loose: '2rem',      // 32px
    }
  },

  // Layout System
  layout: {
    // Container max widths
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    
    // Grid gaps
    grid: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    
    // Border radius
    radius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    }
  },

  // Animation System
  animation: {
    // Duration
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '1000ms',
    },
    
    // Easing
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  },

  // Component-specific tokens
  components: {
    // Navigation
    nav: {
      height: '4rem',
      padding: '1rem',
      blur: 'blur(16px)',
    },
    
    // Cards
    card: {
      padding: {
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      shadow: {
        normal: '0 8px 32px rgba(0, 0, 0, 0.5)',
        hover: '0 15px 40px rgba(0, 0, 0, 0.6)',
        glow: '0 0 20px rgba(229, 4, 47, 0.3)',
      }
    },
    
    // Buttons
    button: {
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
      },
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      }
    }
  }
};

// Typography utility classes
export const typographyClasses = {
  // Display text (Hero titles)
  displayXl: `font-['Orbitron'] font-bold text-[5rem] leading-tight`,
  displayLg: `font-['Orbitron'] font-bold text-[4rem] leading-tight`,
  displayMd: `font-['Orbitron'] font-bold text-[3rem] leading-tight`,
  displaySm: `font-['Orbitron'] font-bold text-[2.5rem] leading-tight`,
  
  // Headings
  h1: `font-['Orbitron'] font-bold text-[2.25rem] leading-tight`,
  h2: `font-['Orbitron'] font-bold text-[1.875rem] leading-tight`,
  h3: `font-['Orbitron'] font-semibold text-[1.5rem] leading-normal`,
  h4: `font-['Orbitron'] font-semibold text-[1.25rem] leading-normal`,
  h5: `font-['Orbitron'] font-medium text-[1.125rem] leading-normal`,
  h6: `font-['Orbitron'] font-medium text-[1rem] leading-normal`,
  
  // Body text
  bodyXl: `font-['Jost'] font-normal text-[1.25rem] leading-relaxed`,
  bodyLg: `font-['Jost'] font-normal text-[1.125rem] leading-relaxed`,
  bodyMd: `font-['Jost'] font-normal text-[1rem] leading-normal`,
  bodySm: `font-['Jost'] font-normal text-[0.875rem] leading-normal`,
  bodyXs: `font-['Jost'] font-normal text-[0.75rem] leading-normal`,
  
  // Gaming UI text
  gamingStat: `font-['Orbitron'] font-bold text-[3rem] leading-tight`,
  gamingCounter: `font-['Orbitron'] font-bold text-[2rem] leading-tight`,
  gamingLabel: `font-['Jost'] font-medium text-[0.75rem] leading-normal`,
};

// Color utility classes
export const colorClasses = {
  // Text colors
  textPrimary: 'text-white',
  textSecondary: 'text-gray-300',
  textMuted: 'text-gray-400',
  textAccent: 'text-[#E5042F]',
  
  // Background colors
  bgPrimary: 'bg-black',
  bgSecondary: 'bg-[#171717]',
  bgCard: 'bg-[#1a1a1a]',
  bgAccent: 'bg-[#E5042F]',
  
  // Border colors
  borderDefault: 'border-[#171717]',
  borderAccent: 'border-[#E5042F]/30',
  borderAccentHover: 'border-[#E5042F]/60',
};

// Spacing utility classes
export const spacingClasses = {
  // Section spacing
  sectionSm: 'py-8',      // 32px
  sectionMd: 'py-12',     // 48px
  sectionLg: 'py-16',     // 64px
  sectionXl: 'py-20',     // 80px
  section2xl: 'py-24',    // 96px
  
  // Container padding
  containerPadding: 'px-4 md:px-6 lg:px-8',
  
  // Component spacing
  componentTight: 'space-y-2',
  componentNormal: 'space-y-4',
  componentRelaxed: 'space-y-6',
  componentLoose: 'space-y-8',
};

// Common background patterns
export const backgroundPatterns = {
  // Animated cyberpunk background
  cyberpunkBackground: `
    fixed inset-0 z-[-1]
    bg-gradient-to-br from-black via-[#171717] to-black
    bg-[length:400%_400%]
    animate-[gradientShift_15s_ease_infinite]
    before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_20%_80%,rgba(229,4,47,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(229,4,47,0.1)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(229,4,47,0.05)_0%,transparent_50%)]
  `,
  
  // Glass morphism background
  glassBackground: `
    bg-black/20 backdrop-blur-xl
    border border-[#E5042F]/20
    shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(229,4,47,0.1),0_0_20px_rgba(229,4,47,0.1)]
  `,
  
  // HUD panel background
  hudBackground: `
    bg-gradient-to-br from-[#171717]/90 to-black/80
    border border-[#E5042F]/30
    backdrop-blur-md
    shadow-[0_0_20px_rgba(229,4,47,0.2),inset_0_1px_0_rgba(229,4,47,0.1)]
  `,
};

export default designTokens;