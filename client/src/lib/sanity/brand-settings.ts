import { client } from '../sanity';

export interface BrandColors {
  primary: { hex: string; };
  white: { hex: string; };
  secondary?: { hex: string; };
  dark?: { hex: string; };
  background?: { hex: string; };
}

export interface BrandFonts {
  primary: string;
  primaryCustom?: string;
  secondary: string;
  secondaryCustom?: string;
  description: string;
  descriptionCustom?: string;
  button: string;
  buttonCustom?: string;
}

export interface BrandLogos {
  mainLogo?: {
    asset: { _ref: string; url: string; };
    alt?: string;
  };
  logoIcon?: {
    asset: { _ref: string; url: string; };
    alt?: string;
  };
  logoLight?: {
    asset: { _ref: string; url: string; };
    alt?: string;
  };
  logoDark?: {
    asset: { _ref: string; url: string; };
    alt?: string;
  };
  favicon?: {
    asset: { _ref: string; url: string; };
    alt?: string;
  };
}

export interface BrandText {
  name: string;
  tagline?: string;
  description?: string;
}

export interface BrandAdvanced {
  customCSS?: string;
  fontImportURLs?: string[];
  enableDarkMode?: boolean;
}

export interface BrandSettings {
  colors: BrandColors;
  fonts: BrandFonts;
  logos: BrandLogos;
  brandText: BrandText;
  advanced?: BrandAdvanced;
}

const BRAND_SETTINGS_QUERY = `*[_type == "brandSettings"][0]{
  colors,
  fonts,
  logos{
    mainLogo{
      asset->{
        _id,
        url
      },
      alt
    },
    logoIcon{
      asset->{
        _id,
        url
      },
      alt
    },
    logoLight{
      asset->{
        _id,
        url
      },
      alt
    },
    logoDark{
      asset->{
        _id,
        url
      },
      alt
    },
    favicon{
      asset->{
        _id,
        url
      },
      alt
    }
  },
  brandText,
  advanced
}`;

export async function fetchBrandSettings(): Promise<BrandSettings | null> {
  try {
    const settings = await client.fetch(BRAND_SETTINGS_QUERY);
    return settings;
  } catch (error) {
    console.warn('Failed to fetch brand settings from Sanity:', error);
    return null;
  }
}

export function getFontName(fontConfig: { name: string; custom?: string }): string {
  return fontConfig.name === 'custom' && fontConfig.custom 
    ? fontConfig.custom 
    : fontConfig.name;
}

export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r}, ${g}, ${b}`;
}

export function applyBrandSettings(settings: BrandSettings): void {
  const root = document.documentElement;
  
  // Apply colors
  if (settings.colors.primary?.hex) {
    root.style.setProperty('--brand-primary', settings.colors.primary.hex);
    root.style.setProperty('--brand-primary-rgb', hexToRgb(settings.colors.primary.hex));
  }
  
  if (settings.colors.white?.hex) {
    root.style.setProperty('--brand-white', settings.colors.white.hex);
    root.style.setProperty('--brand-white-rgb', hexToRgb(settings.colors.white.hex));
  }
  
  if (settings.colors.secondary?.hex) {
    root.style.setProperty('--brand-secondary', settings.colors.secondary.hex);
  }
  
  if (settings.colors.dark?.hex) {
    root.style.setProperty('--brand-dark', settings.colors.dark.hex);
  }
  
  if (settings.colors.background?.hex) {
    root.style.setProperty('--brand-background', settings.colors.background.hex);
  }
  
  // Apply fonts
  if (settings.fonts) {
    const primaryFont = getFontName({ 
      name: settings.fonts.primary, 
      custom: settings.fonts.primaryCustom 
    });
    root.style.setProperty('--font-primary', `'${primaryFont}', monospace`);
    
    const secondaryFont = getFontName({ 
      name: settings.fonts.secondary, 
      custom: settings.fonts.secondaryCustom 
    });
    root.style.setProperty('--font-secondary', `'${secondaryFont}', sans-serif`);
    
    const descriptionFont = getFontName({ 
      name: settings.fonts.description, 
      custom: settings.fonts.descriptionCustom 
    });
    root.style.setProperty('--font-description', `'${descriptionFont}', sans-serif`);
    
    const buttonFont = getFontName({ 
      name: settings.fonts.button, 
      custom: settings.fonts.buttonCustom 
    });
    root.style.setProperty('--font-button', `'${buttonFont}', sans-serif`);
  }
  
  // Apply custom CSS if provided
  if (settings.advanced?.customCSS) {
    const customStyleId = 'sanity-custom-css';
    let customStyle = document.getElementById(customStyleId) as HTMLStyleElement;
    
    if (!customStyle) {
      customStyle = document.createElement('style');
      customStyle.id = customStyleId;
      document.head.appendChild(customStyle);
    }
    
    customStyle.textContent = settings.advanced.customCSS;
  }
  
  // Load custom fonts if URLs are provided
  if (settings.advanced?.fontImportURLs?.length) {
    settings.advanced.fontImportURLs.forEach(url => {
      const linkId = `font-import-${url.replace(/[^a-zA-Z0-9]/g, '')}`;
      
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
      }
    });
  }
}

// Default fallback settings
export const defaultBrandSettings: BrandSettings = {
  colors: {
    primary: { hex: '#E5042F' },
    white: { hex: '#FFFFFF' },
    secondary: { hex: '#00D9FF' },
    dark: { hex: '#000000' },
    background: { hex: '#0A0A0A' },
  },
  fonts: {
    primary: 'Orbitron',
    secondary: 'Space Grotesk',
    description: 'Jost',
    button: 'Jost',
  },
  logos: {},
  brandText: {
    name: 'GAMERS TAG',
    tagline: 'Gaming Super App',
    description: 'The world\'s first gaming super app connecting gamers, esports professionals, and gaming companies worldwide.',
  },
  advanced: {
    enableDarkMode: true,
  },
};