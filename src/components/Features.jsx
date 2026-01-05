import React from 'react';
import { MessageSquare, Edit3, Wand2, Database, UserCheck, Search } from 'lucide-react';
import { motion } from 'framer-motion';

// Import videos
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';
import video4 from '../assets/videos/4.mp4';
import video5 from '../assets/videos/5.mp4';
import video6 from '../assets/videos/6.mp4';

const features = [
    {
        id: 'drafter',
        icon: <MessageSquare className="h-6 w-6 text-brand-600" aria-hidden="true" />,
        title: "Comment Auto Drafter",
        tagline: "Instant, context-aware replies",
        description: "Generate thoughtful comments instantly based on the post's content and your professional persona.",
        video: video1,
        // Bento Config
        colSpan: "md:col-span-12",
        variant: "large"
    },
    {
        id: 'enhancer',
        icon: <Edit3 className="h-6 w-6 text-purple-600" aria-hidden="true" />,
        title: "Comment Enhancer",
        tagline: "Polish your thoughts",
        description: "Refine your quick drafts into polished, engaging comments.",
        video: video2,
        colSpan: "md:col-span-6",
        variant: "small"
    },
    {
        id: 'post',
        icon: <Wand2 className="h-6 w-6 text-pink-600" aria-hidden="true" />,
        title: "Post Enhancer",
        tagline: "Rough ideas to viral content",
        description: "Transform simple bullet points into structured, engaging LinkedIn posts with perfect formatting.",
        video: video3,
        colSpan: "md:col-span-6",
        variant: "small"
    },
    {
        id: 'database',
        icon: <Database className="h-6 w-6 text-amber-600" aria-hidden="true" />,
        title: "Email Database",
        tagline: "Find leads instantly",
        description: "Access a vast database of verified professional emails directly from LinkedIn profiles.",
        video: video4,
        colSpan: "md:col-span-12",
        variant: "large"
    },
    {
        id: 'summariser',
        icon: <UserCheck className="h-6 w-6 text-green-600" aria-hidden="true" />,
        title: "Profile Summariser",
        tagline: "Get the gist fast",
        description: "Instantly summarize long profiles to understand key skills.",
        video: video5,
        colSpan: "md:col-span-6",
        variant: "medium"
    },
    {
        id: 'analyzer',
        icon: <Search className="h-6 w-6 text-indigo-600" aria-hidden="true" />,
        title: "Profile Analyzer",
        tagline: "Deep insights",
        description: "Find conversation starters and connection opportunities.",
        video: video6,
        colSpan: "md:col-span-6",
        variant: "medium"
    }
];

const FeatureCard = ({ feature }) => {
    const isLarge = feature.variant === 'large';

    return (
        <div className={`h-full group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-brand-500/30 transition-all duration-300
            ${isLarge ? 'bg-gradient-to-br from-brand-50/80 via-white to-white dark:from-slate-800 dark:to-slate-900' : 'bg-white dark:bg-slate-800'}
        `}>
            {/* Content Container */}
            <div className={`p-6 ${isLarge ? 'md:p-10 flex flex-col md:flex-row gap-8 md:items-center h-full' : 'flex flex-col h-full'}`}>

                {/* Text Content */}
                <div className={`${isLarge ? 'md:flex-1' : 'mb-6'}`}>
                    <div className={`
                        w-12 h-12 mb-4
                        bg-white dark:bg-slate-700/50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-600 group-hover:scale-110 transition-transform duration-300
                    `}>
                        {React.cloneElement(feature.icon, {
                            className: feature.icon.props.className
                        })}
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">
                        {feature.title}
                    </h3>

                    <p className="text-brand-600 dark:text-brand-400 font-medium mb-4 text-sm">
                        {feature.tagline}
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                        {feature.description}
                    </p>
                </div>

                {/* Media Content */}
                <div className={`${isLarge ? 'md:flex-1 h-full min-h-[250px]' : 'flex-1 min-h-[200px]'}`}>
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner relative group-hover:shadow-brand-500/20 transition-all">
                        {feature.video ? (
                            <video
                                src={feature.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-800">
                                <span className="text-xs text-slate-500">Preview</span>
                            </div>
                        )}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Power-packed Features
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Everything you need to dominate LinkedIn, beautifully integrated into one extension.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${feature.colSpan}`}
                        >
                            <FeatureCard feature={feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
