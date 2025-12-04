import React from 'react';
import { Chrome, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroMockup from './HeroMockup';



const Hero = ({ onInstallClick }) => {




    return (
        <div className="relative pt-24 pb-12 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-brand-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-pink-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
            </div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6"
                        >
                            <Chrome className="h-4 w-4" />
                            Now Available on Chrome Webstore
                        </motion.div>

                        <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                            The Ultimate <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">LinkedIn Tool</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Supercharge your professional presence with AI. LynkSurf enhances your comments, posts, and profile analysis directly within LinkedIn.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://chromewebstore.google.com/detail/jkckjfgippgdfglphmnneggeepjogbjg?utm_source=item-share-cb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30"
                            >
                                <Chrome className="h-5 w-5" /> Install Extension
                            </motion.a>
                        </motion.div>




                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-auto h-[400px] w-full"
                    >
                        <div className="relative w-full max-w-lg mx-auto h-full flex items-center justify-center">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                            <div className="relative w-full h-full">
                                <HeroMockup />
                            </div>
                        </div>

                        {/* Floating elements removed as they are now integrated in the mockup */}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
