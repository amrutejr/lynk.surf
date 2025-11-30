import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, Settings, Move, CheckCircle } from 'lucide-react';

const InstallGuideModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    How to Install LynkSurf
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Download Extension</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            The <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">lynksurf.crx</code> file should have started downloading automatically.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Open Extensions Page</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                            Open a new tab and navigate to:
                                        </p>
                                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg flex justify-between items-center group cursor-pointer" onClick={() => navigator.clipboard.writeText('chrome://extensions')}>
                                            <code className="text-xs font-mono text-slate-700 dark:text-slate-300">chrome://extensions</code>
                                            <span className="text-xs text-brand-600 dark:text-brand-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Enable Developer Mode</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            Toggle the <strong>"Developer mode"</strong> switch in the top right corner of the extensions page.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Drag & Drop</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            Drag the downloaded <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">.crx</code> file from your downloads bar or folder and drop it onto the extensions page.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
                                <button
                                    onClick={onClose}
                                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-brand-500/20"
                                >
                                    I've Installed It
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default InstallGuideModal;
