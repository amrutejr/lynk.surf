import React from 'react';
import { motion } from 'framer-motion';
import { Image, Smile, Calendar, Settings, Sparkles, Send, PenTool } from 'lucide-react';

const PostEnhancerCard = () => {
    return (
        <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3 bg-white dark:bg-slate-900">
                <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden ring-2 ring-white dark:ring-slate-700">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abhinav" alt="User" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900"></div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Abhinav Amrute</h4>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                        <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">Creator</span>
                        <span>•</span>
                        <span>Post to Anyone</span>
                    </div>
                </div>
            </div>

            <div className="p-5 flex-1 bg-slate-50/30 dark:bg-slate-900/30">
                <div className="relative">
                    <textarea
                        className="w-full h-24 bg-transparent text-xs text-slate-800 dark:text-slate-200 leading-relaxed resize-none focus:outline-none font-medium placeholder-slate-400"
                        defaultValue="Unlock the Power of Coding: Embark on a Python Journey Today! 🐍&#10;&#10;Discover the fundamentals of this versatile language and explore its vast applications in data science and AI."
                    />
                    <div className="absolute bottom-0 right-0">
                        <span className="text-[10px] text-slate-400 font-medium">142/3000</span>
                    </div>
                </div>
            </div>

            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
                <div className="flex gap-4 text-slate-400 dark:text-slate-500">
                    <Image className="w-4 h-4 cursor-pointer hover:text-brand-500 transition-colors" />
                    <Calendar className="w-4 h-4 cursor-pointer hover:text-brand-500 transition-colors" />
                    <Smile className="w-4 h-4 cursor-pointer hover:text-brand-500 transition-colors" />
                </div>

                <div className="flex gap-2">
                    <button className="relative group overflow-hidden bg-gradient-to-r from-brand-100 to-purple-100 dark:from-brand-900/30 dark:to-purple-900/30 text-brand-700 dark:text-brand-300 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:shadow-md transition-all border border-brand-200 dark:border-brand-800">
                        <Sparkles className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                        <span>Enhance</span>
                        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    <button className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-slate-200 dark:shadow-none flex items-center gap-1">
                        Post <Send className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostEnhancerCard;
