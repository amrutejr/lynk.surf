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
        <nav className="fixed top-0 left-0 w-full z-[9999] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
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
                            <motion.button
                                onClick={loginWithGoogle}
                                initial="collapsed"
                                whileHover="expanded"
                                className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 h-10 px-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 flex items-center justify-center overflow-hidden whitespace-nowrap"
                            >
                                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <motion.span
                                    variants={{
                                        collapsed: {
                                            maxWidth: 0,
                                            opacity: 0,
                                            transition: { duration: 2, ease: "easeInOut" }
                                        },
                                        expanded: {
                                            maxWidth: 200,
                                            opacity: 1,
                                            transition: { duration: 0.6, ease: "easeInOut" }
                                        }
                                    }}
                                    className="overflow-hidden whitespace-nowrap"
                                >
                                    <span className="pl-2">Sign up with Google</span>
                                </motion.span>
                            </motion.button>
                        )}
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300" aria-label="Toggle mobile menu">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div >
            </div >

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
                                        className="w-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Sign up with Google
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
