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
        icon: <MessageSquare className="h-8 w-8 text-brand-600" aria-hidden="true" />,
        title: "Comment Auto Drafter",
        tagline: "Instant, context-aware replies",
        description: "Generate thoughtful comments instantly based on the post's content and your professional persona. Save hours of writing time while maintaining high engagement.",
        video: video1,
        color: "from-brand-50 to-white dark:from-slate-800 dark:to-slate-900"
    },
    {
        id: 'enhancer',
        icon: <Edit3 className="h-8 w-8 text-purple-600" aria-hidden="true" />,
        title: "Comment Enhancer",
        tagline: "Polish your thoughts",
        description: "Refine your quick drafts into polished, engaging comments. Turn brief notes into professional responses that demonstrate thought leadership.",
        video: video2,
        color: "from-purple-50 to-white dark:from-slate-800 dark:to-slate-900"
    },
    {
        id: 'post',
        icon: <Wand2 className="h-8 w-8 text-pink-600" aria-hidden="true" />,
        title: "Post Enhancer",
        tagline: "Rough ideas to viral content",
        description: "Transform simple bullet points into structured, engaging LinkedIn posts with perfect formatting, hashtags, and emotional hooks.",
        video: video3,
        color: "from-pink-50 to-white dark:from-slate-800 dark:to-slate-900"
    },
    {
        id: 'database',
        icon: <Database className="h-8 w-8 text-amber-600" aria-hidden="true" />,
        title: "Email Database",
        tagline: "Find leads instantly",
        description: "Access a vast database of verified professional emails directly from LinkedIn profiles. Connect with decision-makers outside the platform.",
        video: video4,
        color: "from-amber-50 to-white dark:from-slate-800 dark:to-slate-900"
    },
    {
        id: 'summariser',
        icon: <UserCheck className="h-8 w-8 text-green-600" aria-hidden="true" />,
        title: "Profile Summariser",
        tagline: "Get the gist fast",
        description: "Instantly summarize long profiles to understand key skills, experience, and mutual interests before connecting or messaging.",
        video: video5,
        color: "from-green-50 to-white dark:from-slate-800 dark:to-slate-900"
    },
    {
        id: 'analyzer',
        icon: <Search className="h-8 w-8 text-indigo-600" aria-hidden="true" />,
        title: "Profile Analyzer",
        tagline: "Deep insights",
        description: "Find conversation starters and connection opportunities based on recent activity, shared skills, and career trajectory.",
        video: video6,
        color: "from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900"
    }
];

const FeatureCard = ({ feature, index }) => {
    // We use a constant offset so they stack exactly on top of each other
    // (or with a tiny offset if desired, e.g., index * 4)
    const topOffset = 110;
    const cardRef = React.useRef(null);
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const checkSticky = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                // Check if the card is at or above its sticky position (with a small epsilon for float precision)
                setIsSticky(rect.top <= topOffset + 1);
            }
        };

        window.addEventListener('scroll', checkSticky, { passive: true });
        // Check initially
        checkSticky();

        return () => window.removeEventListener('scroll', checkSticky);
    }, [topOffset]);

    return (
        <div
            ref={cardRef}
            className="sticky transition-[top] duration-200"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
                // Constant bottom margin to ensure smooth scrolling flow
                marginBottom: '40px'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
            >
                <div className={`
                    relative w-full overflow-hidden rounded-3xl 
                    border border-slate-200 dark:border-slate-700 
                    bg-gradient-to-br ${feature.color}
                    transition-shadow duration-300
                    ${isSticky ? 'shadow-sm' : 'shadow-xl'} dark:shadow-none 
                    flex flex-col md:flex-row
                    h-auto md:h-[500px] lg:h-[550px]
                `}>

                    {/* Text Section */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
                        <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-slate-100 dark:border-slate-600 text-3xl">
                            {feature.icon}
                        </div>

                        <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {feature.title}
                        </h3>

                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 w-fit mb-6">
                            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                                {feature.tagline}
                            </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-md">
                            {feature.description}
                        </p>
                    </div>

                    {/* Media Section */}
                    <div className="flex-1 relative min-h-[300px] md:min-h-full bg-slate-100 dark:bg-slate-900/50">
                        {/* Abstract Background Shapes */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        </div>

                        <div className="absolute inset-4 md:inset-8 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-slate-900">
                            {feature.video ? (
                                <video
                                    src={feature.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-800">
                                    <span className="text-slate-500">Preview</span>
                                </div>
                            )}
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 md:mb-32"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Power-packed Features
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg text-balance">
                        Every tool you need to dominate LinkedIn, engineered for growth and productivity.
                    </p>
                </motion.div>

                {/* Stacking Cards Container */}
                <div className="flex flex-col gap-8 md:gap-0 pb-24 relative overflow-visible">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
