"use client";

import React from "react";
import { Globe, Smartphone, Brain, Database, Layers } from "lucide-react";

interface Stack {
    name: string;
    slug: string;
}

interface Sector {
    name: string;
    icon: React.ReactNode;
    stacks: Stack[];
    description: string;
}

interface TechSectorGridProps {
    sectors: Sector[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
    "Web Development": <Globe className="w-5 h-5 text-indigo-600 dark:text-blue-400" />,
    "Backend Development": <Database className="w-5 h-5 text-indigo-600 dark:text-emerald-400" />,
    "Mobile Development": <Smartphone className="w-5 h-5 text-indigo-600 dark:text-purple-400" />,
    "AI & Machine Learning": <Brain className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
    "Software Engineering": <Layers className="w-5 h-5 text-indigo-600 dark:text-orange-400" />,
    "Career & Guidance": <Globe className="w-5 h-5 text-indigo-600 dark:text-yellow-400" />,
};

export const TechSectorGrid: React.FC<TechSectorGridProps> = ({ sectors }) => {
    const mappedSectors = sectors.map(s => ({
        ...s,
        icon: ICON_MAP[s.name] || <Globe className="w-5 h-5 text-slate-400" />
    }));

    return (
        <div className="space-y-10 pt-10 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        Tech Sectors
                    </h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em] ml-4">
                    Specialized Learning Paths for your career
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mappedSectors.map((sector, i) => (
                    <div
                        key={i}
                        className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all flex flex-col gap-5 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                {sector.icon}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-1">
                                {sector.stacks.length} STACKS
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                                {sector.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 italic font-medium">
                                {sector.description}
                            </p>
                        </div>

                        <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                                {sector.stacks.slice(0, 6).map((stack, j) => (
                                    <a
                                        key={j}
                                        href={`/resources?topic=${stack.slug}`}
                                        className="text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-indigo-500/30" />
                                        {stack.name}
                                    </a>
                                ))}
                                {sector.stacks.length > 6 && (
                                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase mt-1">
                                        +{sector.stacks.length - 6} MORE
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
