import React from 'react';
import { Eye, Pencil, Trash2, Download } from 'lucide-react';

const DatabaseCard = () => {
    return (
        <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="text-sm font-bold text-slate-900 dark:text-white">Saved Profiles</div>
            </div>

            <div className="p-4 flex-1 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col gap-4">
                <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow-sm">
                    Test: Add Sample Profile
                </button>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                    <div className="grid grid-cols-[1fr_1.5fr_0.8fr] gap-2 p-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Name</div>
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Email</div>
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider text-right">Actions</div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr_0.8fr] gap-2 p-4 items-center">
                        <div className="text-xs font-medium text-slate-900 dark:text-white">
                            John<br />Doe
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 truncate">
                            john.doe@example.com
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <button className="text-slate-400 hover:text-brand-500 transition-colors" aria-label="View Profile">
                                <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button className="text-slate-400 hover:text-blue-500 transition-colors" aria-label="Edit Profile">
                                <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button className="text-slate-400 hover:text-red-500 transition-colors" aria-label="Delete Profile">
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                <button className="w-full mt-auto bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-3 rounded-full text-sm transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">
                        <Download className="w-3 h-3 text-white" />
                    </div>
                    Export to CSV
                </button>
            </div>
        </div>
    );
};

export default DatabaseCard;
