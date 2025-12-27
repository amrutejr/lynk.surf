import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Coffee, Rocket, Smile } from 'lucide-react';

const tones = [
    {
        name: 'Professional',
        desc: 'Clear, concise, and business-focused',
        icon: <Briefcase className="h-5 w-5" />,
        color: 'bg-slate-500'
    },
    {
        name: 'Friendly',
        desc: 'Warm, approachable, and authentic',
        icon: <Smile className="h-5 w-5" />,
        color: 'bg-blue-500'
    },
    {
        name: 'Casual',
        desc: 'Relaxed, informal, and conversational',
        icon: <Coffee className="h-5 w-5" />,
        color: 'bg-amber-500'
    },
    {
        name: 'Bold',
        desc: 'Confident, energetic, and persuasive',
        icon: <Rocket className="h-5 w-5" />,
        color: 'bg-purple-500'
    },
];

const ToneOptions = () => {
    return (
        <section id="tone-options" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Match your unique voice
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            Whether you want to sound professional, friendly, or bold, LynkSurf adapts to your style. Choose from preset tones or create your own custom persona.
                        </p>

                        <div className="space-y-4">
                            {tones.map((tone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-700 transition-colors cursor-pointer group"
                                >
                                    <div className={`w-10 h-10 rounded-full ${tone.color} flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform`}>
                                        {tone.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{tone.name}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{tone.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
                        <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                <div>
                                    <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                                    <div className="h-3 w-20 bg-slate-100 dark:bg-slate-700 rounded"></div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-700 rounded"></div>
                                <div className="h-4 w-4/6 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold">Professional</span>
                                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold">Concise</span>
                                </div>
                                <div className="p-4 bg-brand-50 dark:bg-slate-900 rounded-xl border border-brand-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                    "Great insights on the market trends! I particularly agree with your point about AI adoption. It's definitely reshaping how we approach productivity."
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ToneOptions;
