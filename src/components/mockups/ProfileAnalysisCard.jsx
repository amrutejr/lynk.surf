import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Save, TrendingUp, Zap, Award } from 'lucide-react';

const ProfileAnalysisCard = () => {
    return (
        <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-5 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="w-24 h-24" />
                </div>
                <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        <span className="font-semibold text-xs tracking-wide">AI ANALYSIS</span>
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 px-2 py-1 rounded text-[10px] font-bold text-green-100">
                        98% MATCH
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold tracking-tight">Abhinav Amrute</h3>
                    <p className="text-brand-100 text-xs mt-1 font-medium opacity-90 truncate">NST'29 | BTech. CS (AI & ML) | Blockchain & AI Enthusiast</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4 flex-1 overflow-y-auto custom-scrollbar bg-slate-50/50 dark:bg-slate-900/50">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50 relative group">
                    <div className="absolute -left-1 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-400 to-purple-400 rounded-r"></div>
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3.5 h-3.5 text-brand-500" />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">Professional Summary</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        Abhinav is a skilled Creator at <span className="font-semibold text-slate-900 dark:text-white">Blitsum</span>, leveraging expertise in <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-1 rounded">JavaScript</span> and <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-1 rounded">Flutter</span>. Strong foundation in CS from Newton School of Technology.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2 text-purple-600 dark:text-purple-400">
                            <Award className="w-4 h-4" />
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Style</p>
                        <p className="text-slate-700 dark:text-slate-200 font-bold text-xs">Innovative</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Tone</p>
                        <p className="text-slate-700 dark:text-slate-200 font-bold text-xs">Friendly</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2 text-green-600 dark:text-green-400">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Impact</p>
                        <p className="text-slate-700 dark:text-slate-200 font-bold text-xs">High</p>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-3">
                <button className="flex-1 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-slate-200 dark:shadow-none flex items-center justify-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" /> Full Report
                </button>
                <button className="px-4 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 transition-colors">
                    <Save className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default ProfileAnalysisCard;
