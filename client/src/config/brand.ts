// Global Brand Configuration
// Change colors and assets here to update across the entire website

export const brandConfig = {
  // Primary Brand Colors
  colors: {
    primary: '#E5042F',      // Main red color - change this to update all red elements
    white: '#FFFFFF',        // Main white color - change this to update all white elements
    secondary: '#00D9FF',    // Cyan accent color
    dark: '#000000',         // Black color
    background: '#0A0A0A',   // Dark background
  },
  
  // Brand Assets
  assets: {
    logo: '/logo.svg',       // Main logo path - update this to change logo everywhere
    logoIcon: '/logo-icon.svg', // Icon-only version
    favicon: '/favicon.ico', // Favicon
  },
  
  // Brand Text
  text: {
    name: 'GAMERS TAG',
    tagline: 'Gaming Super App',
    copyright: '© 2025',
  },

  // Typography System
  fonts: {
    primary: 'Orbitron',        // Headers and brand text
    secondary: 'Space Grotesk', // Navigation and UI elements
    description: 'Jost',        // All descriptions and body text
    button: 'Jost',            // Button text
    mono: 'JetBrains Mono',     // Code and technical text
  },
  
  // Derived colors (automatically calculated from primary colors)
  derived: {
    get primaryRgb() {
      return hexToRgb(brandConfig.colors.primary);
    },
    get whiteRgb() {
      return hexToRgb(brandConfig.colors.white);
    },
    get primaryWithOpacity() {
      return (opacity: number) => `rgba(${brandConfig.derived.primaryRgb}, ${opacity})`;
    },
    get whiteWithOpacity() {
      return (opacity: number) => `rgba(${brandConfig.derived.whiteRgb}, ${opacity})`;
    }
  }
};

// Utility function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r}, ${g}, ${b}`;
}

// CSS Custom Properties Generator
export const generateCSSVariables = () => {
  return `
    :root {
      --brand-primary: ${brandConfig.colors.primary};
      --brand-white: ${brandConfig.colors.white};
      --brand-secondary: ${brandConfig.colors.secondary};
      --brand-dark: ${brandConfig.colors.dark};
      --brand-background: ${brandConfig.colors.background};
      --brand-primary-rgb: ${brandConfig.derived.primaryRgb};
      --brand-white-rgb: ${brandConfig.derived.whiteRgb};
    }
  `;
};

// Tailwind color utilities
export const tw = {
  primary: 'text-[var(--brand-primary)]',
  primaryBg: 'bg-[var(--brand-primary)]',
  primaryBorder: 'border-[var(--brand-primary)]',
  white: 'text-[var(--brand-white)]',
  whiteBg: 'bg-[var(--brand-white)]',
  whiteBorder: 'border-[var(--brand-white)]',
  
  // With opacity
  primaryBgOpacity: (opacity: number) => `bg-[rgba(var(--brand-primary-rgb),${opacity})]`,
  whiteBgOpacity: (opacity: number) => `bg-[rgba(var(--brand-white-rgb),${opacity})]`,
  primaryBorderOpacity: (opacity: number) => `border-[rgba(var(--brand-primary-rgb),${opacity})]`,
  whiteBorderOpacity: (opacity: number) => `border-[rgba(var(--brand-white-rgb),${opacity})]`,
};