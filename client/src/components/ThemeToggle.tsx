import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-dark-blue', 'theme-dark-purple', 'theme-dark-pink');
    
    // Apply new theme
    if (newTheme === 'light') {
      root.classList.add('theme-light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1e293b';
    } else {
      root.classList.add('theme-dark-blue'); // Default dark theme
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full border-2 border-[#E5042F]/30 bg-black/20 backdrop-blur-sm hover:border-[#E5042F]/60 transition-all duration-300 flex items-center justify-center group"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-[#1e293b] group-hover:text-[#E5042F] transition-colors duration-300" />
        )}
      </div>
      
      {/* HUD corner brackets */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#E5042F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#E5042F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#E5042F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#E5042F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};