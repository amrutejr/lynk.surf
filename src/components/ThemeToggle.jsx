import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const options = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ];

    return (
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700">
            {options.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;
                return (
                    <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`relative p-2 rounded-full transition-all duration-200 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                        title={`Switch to ${option.label} mode`}
                        aria-label={`Switch to ${option.label} mode`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="theme-toggle"
                                className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">
                            <Icon className="w-4 h-4" />
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeToggle;
