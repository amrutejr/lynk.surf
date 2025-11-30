import React from 'react';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Demo = () => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

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
                    <div
                        onClick={() => setIsVideoOpen(true)}
                        className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative group cursor-pointer overflow-hidden"
                    >
                        {/* Blurred Background Effects */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/30 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>

                        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 shadow-2xl">
                            <Play className="h-8 w-8 text-white fill-current ml-1" />
                        </div>
                        <p className="absolute bottom-8 text-white font-medium z-10 tracking-wide">Watch 1-minute demo</p>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoSrc="/videos/4.mp4"
            />
        </section>
    );
};

export default Demo;
