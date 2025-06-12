import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'theme-dark-blue' | 'theme-dark-purple' | 'theme-dark-pink' | 'theme-light' | 'theme-light-gaming' | 'theme-light-pro';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isLight: boolean;
  isDark: boolean;
};

const initialState: ThemeProviderState = {
  theme: 'theme-dark-blue',
  setTheme: () => null,
  toggleTheme: () => null,
  isLight: false,
  isDark: true,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'theme-dark-blue',
  storageKey = 'gamers-tag-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove(
      'theme-dark-blue',
      'theme-dark-purple', 
      'theme-dark-pink',
      'theme-light',
      'theme-light-gaming',
      'theme-light-pro'
    );
    
    // Add current theme
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    toggleTheme: () => {
      const newTheme = theme.includes('dark') ? 'theme-light' : 'theme-dark-blue';
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    isLight: theme.includes('light'),
    isDark: theme.includes('dark'),
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

export const themeConfig = {
  themes: [
    {
      name: 'Neon Blue',
      value: 'theme-dark-blue' as Theme,
      type: 'dark',
      color: '#00d4ff'
    },
    {
      name: 'Purple Cyber',
      value: 'theme-dark-purple' as Theme,
      type: 'dark', 
      color: '#8b5cf6'
    },
    {
      name: 'Pink Gaming',
      value: 'theme-dark-pink' as Theme,
      type: 'dark',
      color: '#ec4899'
    },
    {
      name: 'Gaming White',
      value: 'theme-light-gaming' as Theme,
      type: 'light',
      color: '#0ea5e9'
    },
    {
      name: 'Professional',
      value: 'theme-light-pro' as Theme,
      type: 'light',
      color: '#3182ce'
    }
  ]
};