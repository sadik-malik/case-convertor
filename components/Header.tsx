import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = (t: Theme) => {
      if (t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextThemeMap: Record<Theme, Theme> = {
      light: 'dark',
      dark: 'system',
      system: 'light',
    };
    const nextTheme = nextThemeMap[theme];
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <i className="fas fa-sun text-orange-500" aria-hidden="true"></i>;
      case 'dark': return <i className="fas fa-moon text-blue-400" aria-hidden="true"></i>;
      case 'system': return <i className="fas fa-desktop text-slate-400" aria-hidden="true"></i>;
    }
  };

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 w-full transition-colors">
      <div className="px-4 sm:px-8 h-16 flex items-center justify-between w-full">
        <div className="flex items-center">
          <a href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity">
            Case<span className="text-blue-600">Convertor</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
            aria-label={`Toggle theme (Current: ${theme})`}
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;