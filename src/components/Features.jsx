import React, { useRef, useState } from 'react';
import { MessageSquare, Edit3, Wand2, Database, UserCheck, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import videos
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';
import video4 from '../assets/videos/4.mp4';
import video5 from '../assets/videos/5.mp4';
import video6 from '../assets/videos/6.mp4';

const features = [
    {
        icon: <MessageSquare className="h-6 w-6 text-brand-600" />,
        title: "Comment Auto Drafter",
        tagline: "Instant, context-aware replies in seconds",
        description: "Generate thoughtful comments instantly based on the post's content and your professional persona.",
        color: "bg-blue-50",
        video: video1
    },
    {
        icon: <Edit3 className="h-6 w-6 text-purple-600" />,
        title: "Comment Enhancer",
        tagline: "Polish your thoughts into professional insights",
        description: "Refine your quick drafts into polished, engaging comments that stand out in the feed.",
        color: "bg-purple-50",
        video: video2
    },
    {
        icon: <Wand2 className="h-6 w-6 text-pink-600" />,
        title: "Post Enhancer",
        tagline: "Turn rough ideas into viral content",
        description: "Transform simple bullet points into structured, engaging LinkedIn posts with perfect formatting.",
        color: "bg-pink-50",
        video: video3
    },
    {
        icon: <Database className="h-6 w-6 text-amber-600" />,
        title: "Email Database",
        tagline: "Find contact info for leads instantly",
        description: "Access a vast database of verified professional emails directly from LinkedIn profiles.",
        color: "bg-amber-50",
        video: video4
    },
    {
        icon: <UserCheck className="h-6 w-6 text-green-600" />,
        title: "Profile Summariser",
        tagline: "Get the gist of any profile fast",
        description: "Instantly summarize long profiles to understand key skills, experience, and mutual interests.",
        color: "bg-green-50",
        video: video5
    },
    {
        icon: <Search className="h-6 w-6 text-indigo-600" />,
        title: "Profile Analyzer",
        tagline: "Deep insights for better networking",
        description: "Analyze profiles to find conversation starters and connection opportunities based on shared data.",
        color: "bg-indigo-50",
        video: video6
    }
];

const FeatureCard = ({ feature, isActive, onVideoEnd }) => {
    const videoRef = useRef(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0;
        }

        if (isActive && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(error => console.log("Video play failed:", error));
        } else if (!isActive && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isActive]);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-left">
                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center mb-6">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-3">{feature.tagline}</p>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        {feature.description}
                    </p>
                </div>

                <div className="flex-1 w-full">
                    <div className="rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-video flex items-center justify-center relative shadow-inner">
                        {feature.video ? (
                            <video
                                ref={videoRef}
                                src={feature.video}
                                muted
                                onEnded={onVideoEnd}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full">
                                <span className="text-slate-400 dark:text-slate-600 text-xs font-medium">Preview coming soon</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    const getCardStyle = (index) => {
        const diff = (index - currentIndex + features.length) % features.length;

        // Active card
        if (diff === 0) {
            return {
                zIndex: 20,
                scale: 1,
                opacity: 1,
                x: 0,
                display: 'block'
            };
        }
        // Next card (Right)
        if (diff === 1) {
            return {
                zIndex: 10,
                scale: 0.85,
                opacity: 0.2,
                x: '60%',
                display: 'block'
            };
        }
        // Previous card (Left)
        if (diff === features.length - 1) {
            return {
                zIndex: 10,
                scale: 0.85,
                opacity: 0.2,
                x: '-60%',
                display: 'block'
            };
        }

        // Hidden cards
        return {
            zIndex: 0,
            scale: 0.5,
            opacity: 0,
            x: 0,
            display: 'none'
        };
    };

    const lastScrollTime = useRef(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleWheel = (e) => {
        const now = Date.now();
        if (now - lastScrollTime.current < 500) return; // 500ms cooldown

        if (Math.abs(e.deltaX) > 20) {
            if (e.deltaX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            lastScrollTime.current = now;
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const diff = touchStartX.current - touchEndX.current;
        const now = Date.now();

        if (now - lastScrollTime.current < 500) return;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            lastScrollTime.current = now;
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            const now = Date.now();
            if (now - lastScrollTime.current < 500) return;

            if (e.key === 'ArrowLeft') {
                prevSlide();
                lastScrollTime.current = now;
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                lastScrollTime.current = now;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Everything you need to dominate LinkedIn
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        A complete suite of AI tools designed to save you time and boost your engagement.
                    </p>
                </motion.div>

                <div
                    className="relative h-[500px] flex items-center justify-center"
                    onWheel={handleWheel}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {features.map((feature, index) => {
                        const style = getCardStyle(index);
                        return (
                            <motion.div
                                key={index}
                                animate={style}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute w-full max-w-4xl px-4"
                                style={{
                                    zIndex: style.zIndex,
                                    pointerEvents: style.opacity === 1 ? 'auto' : 'none'
                                }}
                            >
                                <FeatureCard
                                    feature={feature}
                                    isActive={index === currentIndex}
                                    onVideoEnd={nextSlide}
                                />
                            </motion.div>
                        );
                    })}


                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`inline-block rounded-full transition-all duration-300 border border-slate-300 dark:border-slate-600 ${index === currentIndex
                                ? 'w-8 h-3 bg-brand-600 opacity-100'
                                : 'w-3 h-3 bg-slate-900 dark:bg-white opacity-50 hover:opacity-100 hover:bg-brand-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
