import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const ToneSelectorCard = () => {
    const [selectedTone, setSelectedTone] = useState('Professional');

    const tones = [
        { id: 'Professional', icon: '💼', label: 'Professional' },
        { id: 'Friendly', icon: '😊', label: 'Friendly' },
        { id: 'Casual', icon: '👋', label: 'Casual' },
        { id: 'Bold', icon: '⚡', label: 'Bold' },
    ];

    return (
        <div className="h-full flex flex-col p-6 bg-slate-50/50 dark:bg-slate-900/50">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Select Tone</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {tones.map((tone) => (
                    <motion.button
                        key={tone.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTone(tone.id)}
                        className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${selectedTone === tone.id
                            ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-900/20 shadow-sm'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-200 dark:hover:border-brand-800'
                            }`}
                    >
                        <span className="text-4xl mb-3 filter drop-shadow-sm">{tone.icon}</span>
                        <span className={`font-bold text-sm ${selectedTone === tone.id ? 'text-brand-700 dark:text-brand-300' : 'text-slate-700 dark:text-slate-300'}`}>
                            {tone.label}
                        </span>
                    </motion.button>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-auto bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 transition-colors"
            >
                <Save className="w-5 h-5" /> Save Preferences
            </motion.button>
        </div>
    );
};

export default ToneSelectorCard;
