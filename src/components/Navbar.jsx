import React, { useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

import icon from '../assets/icon.webp';

const Navbar = ({ onInstallClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser, loginWithGoogle, logout } = useAuth();

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src={icon} alt="LynkSurf Logo" className="h-8 w-8 rounded-lg" width="32" height="32" />
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">LynkSurf</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Features</a>
                        <a href="#how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">How it Works</a>
                        <a href="#demo" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Demo</a>
                        <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Pricing</a>
                        <ThemeToggle />
                        {currentUser ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {currentUser.photoURL ? (
                                        <img src={currentUser.photoURL} alt="User" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center text-brand-600 font-bold">
                                            {currentUser.email[0].toUpperCase()}
                                        </div>
                                    )}
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 hidden lg:block">
                                        {currentUser.displayName || currentUser.email.split('@')[0]}
                                    </span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="text-sm font-medium text-slate-500 hover:text-red-500 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={loginWithGoogle}
                                className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
                            >
                                Log in with Google
                            </button>
                        )}
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300" aria-label="Toggle mobile menu">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#features" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Features</a>
                            <a href="#how-it-works" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">How it Works</a>
                            <a href="#demo" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Demo</a>
                            <a href="#pricing" className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Pricing</a>
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
                                {currentUser ? (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 px-3">
                                            {currentUser.photoURL && (
                                                <img src={currentUser.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                                            )}
                                            <span className="font-medium text-slate-900 dark:text-white">
                                                {currentUser.displayName}
                                            </span>
                                        </div>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-3 py-2 text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/10 rounded-md"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={loginWithGoogle}
                                        className="block text-center w-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-brand-500/20"
                                    >
                                        Log in with Google
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
