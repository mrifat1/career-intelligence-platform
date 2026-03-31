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
        <div className="flex-shrink-0 w-[450px] bg-[#0a0a1a] border border-white/5 rounded-2xl p-5 hover:border-cyan-500/30 transition-all group flex flex-col h-[400px] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
                <div className="space-y-0.5">
                    <h3 className="text-lg font-black text-white tracking-tight uppercase">{category}</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{resources.length} Available Items</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <span className="text-cyan-400 text-xs">★</span>
                </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar pr-1">
                {resources.map((res, i) => (
                    <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all group/link"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <span className="text-sm font-bold text-gray-200 group-hover/link:text-cyan-400 transition-colors leading-snug">
                                {res.title}
                            </span>
                            <div className={`p-1 rounded-md bg-white/5 text-gray-500 group-hover/link:text-cyan-400 group-hover/link:bg-cyan-400/10 transition-all`}>
                                {TYPE_ICON[res.type] || <FileText size={12} />}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md">
                                <User size={10} className="text-gray-500" />
                                <span>{res.author}</span>
                            </div>

                            <span className={`text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-md ${DIFFICULTY_COLOR[res.difficulty] || 'text-gray-400 bg-gray-400/10'}`}>
                                {res.difficulty}
                            </span>

                            <span className="text-[9px] text-gray-600 font-bold uppercase ml-auto">
                                {res.type.replace('_', ' ')}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
                <button className="flex-1 py-2.5 rounded-xl bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/5 italic">
                    Load More
                </button>
            </div>
        </div>
    );
};
