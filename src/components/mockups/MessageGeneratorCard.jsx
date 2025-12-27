import React from 'react';
import { Sparkles } from 'lucide-react';

const MessageGeneratorCard = () => {
    return (
        <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="text-sm font-bold text-slate-900 dark:text-white">Generate Message</div>
            </div>

            <div className="p-5 flex-1 flex flex-col bg-slate-50/50 dark:bg-slate-900/50">
                <div className="bg-brand-50/50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-4 rounded-r-lg mb-6">
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Generate a personalized welcome message based on the profile you're currently viewing.
                    </p>
                </div>

                <button className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold py-3.5 rounded-full shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-colors">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    Generate Message
                </button>
            </div>
        </div>
    );
};

export default MessageGeneratorCard;
