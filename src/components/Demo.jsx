import React from 'react';
import { Play } from 'lucide-react';

const Demo = () => {
    return (
        <section id="demo" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">See it in Action</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Watch how LynkSurf transforms your LinkedIn workflow in seconds.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                    <div className="aspect-video bg-slate-900 flex items-center justify-center relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                            <Play className="h-8 w-8 text-white fill-current ml-1" />
                        </div>
                        <p className="absolute bottom-8 text-white font-medium z-10">Watch 1-minute demo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
