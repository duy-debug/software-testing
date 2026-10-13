import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      title={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer border select-none ${
        isDark
          ? 'bg-slate-800/90 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border-slate-700/80 shadow-md shadow-slate-950/40 hover:border-amber-400/40'
          : 'bg-white hover:bg-slate-50 text-indigo-600 hover:text-indigo-700 border-slate-200 shadow-sm hover:border-indigo-300'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-semibold tracking-wide">
          {isDark ? 'Giao diện Tối' : 'Giao diện Sáng'}
        </span>
      )}
    </button>
  );
};
