import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

import icon from '../assets/icon.webp';

const Footer = () => {
    return (
        <footer id="support" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12"
                >
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={icon} alt="LynkSurf Logo" className="h-8 w-8 rounded-lg" width="32" height="32" />
                            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">LynkSurf</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                            The ultimate AI-powered companion for LinkedIn professionals. Draft comments, analyze profiles, and grow your network faster.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-start-4 lg:col-start-5">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:support@lynk.surf" className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">
                                    support@lynk.surf
                                </a>
                            </li>
                        </ul>
                    </div>


                </motion.div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        © {new Date().getFullYear()} LynkSurf. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
