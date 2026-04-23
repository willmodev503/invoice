'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    
    <header className="flex items-center justify-between px-6 py-4 rounded-md bg-main-gradient text-white shadow-soft">
      
      {/* Título */}
      <h1 className="text-lg font-semibold tracking-tight">
        theme
      </h1>

      {/* Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm backdrop-blur hover:bg-white/20 transition-colors"
      >
        {theme === 'dark' ? (
          <SunIcon className="w-5" />
        ) : (
          <MoonIcon className="w-5" />
        )}
        <span className="hidden ">
          {theme === 'dark' ? 'Claro' : 'Oscuro'}
        </span>
      </button>

    </header>
  );
}