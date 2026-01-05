import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Simple Pricing</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
                        <div className="mb-4">
                            <span className="inline-block p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 mb-4">
                                <Star className="h-6 w-6" />
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Free</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">$0</span>
                                <span className="text-slate-500 dark:text-slate-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>50 comments per month</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Basic insights</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Community support</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-semibold hover:border-brand-600 hover:text-brand-600 dark:hover:border-brand-500 dark:hover:text-brand-500 transition-colors">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Monthly Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-brand-500 relative overflow-hidden transform md:-translate-y-4"
                    >
                        <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <div className="mb-4">
                            <span className="inline-block p-3 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-4">
                                <Zap className="h-6 w-6" />
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Monthly</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">$2</span>
                                <span className="text-slate-500 dark:text-slate-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Unlimited</strong> comments</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                <span>Advanced AI insights</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                <span>Early access to features</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20">
                            Subscribe Monthly
                        </button>
                    </motion.div>

                    {/* Yearly Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                        <div className="mb-4">
                            <span className="inline-block p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
                                <Crown className="h-6 w-6" />
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Yearly</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">$20</span>
                                <span className="text-slate-500 dark:text-slate-400">/year</span>
                            </div>
                            <p className="text-sm text-green-600 dark:text-green-400 mt-1 font-medium">Save ~17%</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Unlimited</strong> comments</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                <span>All Monthly features</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                <span>Dedicated support</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-semibold hover:border-purple-600 hover:text-purple-600 dark:hover:border-purple-500 dark:hover:text-purple-500 transition-colors">
                            Subscribe Yearly
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
