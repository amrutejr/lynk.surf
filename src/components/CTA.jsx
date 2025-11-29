import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden bg-brand-600 dark:bg-brand-700 px-6 py-16 sm:px-12 sm:py-24 text-center"
                >
                    {/* Background patterns */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                            Supercharge your LinkedIn Engagement Today
                        </h2>
                        <p className="text-brand-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                            Join thousands of professionals who are saving time and building better connections with LynkSurf.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg"
                            >
                                Install Extension <ArrowRight className="h-5 w-5" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
