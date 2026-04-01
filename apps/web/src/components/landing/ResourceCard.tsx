"use client";

import React from "react";
import { User, FileText, PlayCircle, BookOpen, Github } from "lucide-react";

interface Resource {
    title: string;
    author: string;
    url: string;
    type: string;
    difficulty: string;
}

interface ResourceCardProps {
    category: string;
    resources: Resource[];
}

const TYPE_ICON: Record<string, any> = {
    "BLOG_POST": <FileText size={12} />,
    "VIDEO_SERIES": <PlayCircle size={12} />,
    "BOOK": <BookOpen size={12} />,
    "GITHUB_REPO": <Github size={12} />,
    "INTERACTIVE_COURSE": <PlayCircle size={12} />,
};

const DIFFICULTY_COLOR: Record<string, string> = {
    "BEGINNER": "text-green-400 bg-green-400/10",
    "INTERMEDIATE": "text-yellow-400 bg-yellow-400/10",
    "ADVANCED": "text-red-400 bg-red-400/10",
};

export const ResourceCard: React.FC<ResourceCardProps> = ({ category, resources }) => {
    return (
        <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all group flex flex-col h-[450px] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">{category}</h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">{resources.length} Selected Items</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <User size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-white" />
                </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar pr-1 scroll-smooth">
                {resources.map((res, i) => (
                    <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3 p-4 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:bg-white dark:hover:bg-white/[0.05] transition-all group/link shadow-sm hover:shadow-md"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400 transition-colors leading-snug">
                                {res.title}
                            </span>
                            <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400 transition-all border border-slate-100 dark:border-slate-700">
                                {TYPE_ICON[res.type] || <FileText size={14} />}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-2.5 py-1.5 rounded-lg">
                                <span>{res.author}</span>
                            </div>

                            <span className="text-[9px] text-slate-400 dark:text-slate-600 font-bold uppercase ml-auto tracking-widest">
                                {res.type.replace('_', ' ')}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-6">
                <button className="w-full py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all border border-slate-100 dark:border-slate-800">
                    Explore All
                </button>
            </div>
        </div>
    );
};
