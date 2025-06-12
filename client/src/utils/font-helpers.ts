// Font Utility Helper Functions
// Provides consistent font application across the website

export const fontClasses = {
  // Primary font (headers and brand)
  primary: 'font-primary',
  
  // Secondary font (navigation and UI)
  secondary: 'font-secondary',
  
  // Description font (body text and paragraphs)
  description: 'font-description',
  
  // Button font
  button: 'font-button',
  
  // Monospace font
  mono: 'font-mono',
};

export const getFontClass = (type: keyof typeof fontClasses): string => {
  return fontClasses[type];
};

// Helper function to apply font classes to existing className strings
export const withFont = (fontType: keyof typeof fontClasses, existingClasses = ''): string => {
  return `${fontClasses[fontType]} ${existingClasses}`.trim();
};

// Specific font utility functions
export const headerFont = (additionalClasses = '') => withFont('primary', additionalClasses);
export const bodyFont = (additionalClasses = '') => withFont('description', additionalClasses);
export const buttonFont = (additionalClasses = '') => withFont('button', additionalClasses);
export const navFont = (additionalClasses = '') => withFont('secondary', additionalClasses);
export const monoFont = (additionalClasses = '') => withFont('mono', additionalClasses);

// Font size utilities that work with the font system
export const fontSizes = {
  xs: 'text-xs',
  sm: 'text-sm', 
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

// Combined font and size utilities
export const headerWithSize = (size: keyof typeof fontSizes, additionalClasses = '') => 
  `${fontClasses.primary} ${fontSizes[size]} ${additionalClasses}`.trim();

export const bodyWithSize = (size: keyof typeof fontSizes, additionalClasses = '') => 
  `${fontClasses.description} ${fontSizes[size]} ${additionalClasses}`.trim();

export const buttonWithSize = (size: keyof typeof fontSizes, additionalClasses = '') => 
  `${fontClasses.button} ${fontSizes[size]} ${additionalClasses}`.trim();