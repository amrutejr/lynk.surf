import React from 'react';
import { Download, MousePointer, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <Download className="h-8 w-8 text-white" />,
        title: "1. Install Extension",
        description: "Add LynkSurf to Chrome in one click. It automatically integrates with your LinkedIn interface.",
        color: "bg-brand-500"
    },
    {
        icon: <MousePointer className="h-8 w-8 text-white" />,
        title: "2. Select a Tool",
        description: "Click the LynkSurf icon on any post, comment, or profile to access the AI toolkit.",
        color: "bg-purple-500"
    },
    {
        icon: <Sparkles className="h-8 w-8 text-white" />,
        title: "3. Get AI Output",
        description: "Instantly generate comments, summaries, or insights and post them with confidence.",
        color: "bg-pink-500"
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-slate-900 dark:bg-black text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it Works</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Getting started is easy. No complex setup required.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 dark:bg-slate-800 -z-10 origin-left"
                    ></motion.div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3, duration: 0.6 }}
                            className="relative"
                        >
                            <div className={`w-24 h-24 mx-auto rounded-2xl ${step.color} flex items-center justify-center shadow-lg shadow-white/5 mb-8 rotate-3 hover:rotate-6 transition-transform duration-300`}>
                                {step.icon}
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
