import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="bg-brand-600 text-white py-2 overflow-hidden relative z-40">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                    className="flex gap-8 items-center"
                >
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-sm font-medium tracking-wide">Now Available on Chrome WebStore</span>
                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                        </React.Fragment>
                    ))}
                </motion.div>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                    className="flex gap-8 items-center"
                >
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={`duplicate-${i}`}>
                            <span className="text-sm font-medium tracking-wide">Now Available on Chrome WebStore</span>
                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
