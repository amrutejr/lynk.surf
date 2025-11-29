import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart2, MessageSquare, X } from 'lucide-react';
import ToneSelectorCard from './mockups/ToneSelectorCard';
import DatabaseCard from './mockups/DatabaseCard';
import MessageGeneratorCard from './mockups/MessageGeneratorCard';

const HeroMockup = () => {
    const [activeTab, setActiveTab] = useState('enhance');

    return (
        <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-4">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>

            {/* Main Extension Window */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-[400px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col"
            >
                {/* Window Controls (Mac Style) */}
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Header */}
                <div className="px-5 py-4 flex items-center justify-between bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-500 fill-brand-500" />
                        <span className="text-xl font-bold text-brand-600 dark:text-brand-400 tracking-tight">LynkSurf</span>
                    </div>
                    <X className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-200" />
                </div>

                {/* Tabs */}
                <div className="flex px-5 border-b border-slate-100 dark:border-slate-800">
                    <button
                        onClick={() => setActiveTab('enhance')}
                        className={`flex items-center gap-2 pb-3 px-1 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'enhance' ? 'border-brand-500 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                    >
                        <Sparkles className="w-4 h-4" /> Enhance
                    </button>
                    <button
                        onClick={() => setActiveTab('database')}
                        className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'database' ? 'border-brand-500 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                    >
                        <BarChart2 className="w-4 h-4" /> Database
                    </button>
                    <button
                        onClick={() => setActiveTab('message')}
                        className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'message' ? 'border-brand-500 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                    >
                        <MessageSquare className="w-4 h-4" /> Message
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-slate-50/50 dark:bg-slate-900/50 min-h-[400px]">
                    {activeTab === 'enhance' && <ToneSelectorCard />}
                    {activeTab === 'database' && <DatabaseCard />}
                    {activeTab === 'message' && <MessageGeneratorCard />}
                </div>

            </motion.div>
        </div>
    );
};

export default HeroMockup;
