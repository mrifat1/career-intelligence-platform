"use client";

import React, { useState, useEffect } from "react";
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

const ICON_MAP: Record<string, React.ReactNode> = {
    "Web Development": <Globe className="w-5 h-5 text-blue-400" />,
    "Backend Development": <Database className="w-5 h-5 text-emerald-400" />,
    "Mobile Development": <Smartphone className="w-5 h-5 text-purple-400" />,
    "AI & Machine Learning": <Brain className="w-5 h-5 text-cyan-400" />,
    "Software Engineering": <Layers className="w-5 h-5 text-orange-400" />,
    "Career & Guidance": <Globe className="w-5 h-5 text-yellow-400" />,
};

export const TechSectorGrid: React.FC = () => {
    const [sectors, setSectors] = useState<Sector[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/resource/landing");
                const data = await response.json();
                const mappedSectors = data.sectors.map((s: { name: string; description: string; stacks: Stack[] }) => ({
                    ...s,
                    icon: ICON_MAP[s.name] || <Globe className="w-5 h-5 text-gray-400" />
                }));
                setSectors(mappedSectors);
            } catch (error) {
                console.error("Failed to fetch from backend:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="space-y-6 pt-10">
            <div className="flex items-end justify-between border-b border-white/5 pb-6">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black text-white tracking-tighter uppercase flex items-center gap-2">
                        <div className="w-2 h-6 bg-blue-500 rounded-full" />
                        Tech Sectors
                    </h2>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Specialized Learning Paths</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sectors.map((sector, i) => (
                    <div
                        key={i}
                        className="group bg-[#0a0a1a] border border-white/5 rounded-2xl p-5 hover:border-blue-500/30 transition-all flex flex-col gap-4"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                {sector.icon}
                            </div>
                            <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest mt-1">
                                {sector.stacks.length} STACKS
                            </span>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                {sector.name}
                            </h3>
                            <p className="text-[11px] text-gray-500 leading-snug line-clamp-2 italic font-medium">
                                {sector.description}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                                {sector.stacks.slice(0, 6).map((stack, j) => (
                                    <a
                                        key={j}
                                        href={`/resources?topic=${stack.slug}`}
                                        className="text-[10px] font-bold text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gray-800 group-hover:bg-blue-500/30" />
                                        {stack.name}
                                    </a>
                                ))}
                                {sector.stacks.length > 6 && (
                                    <span className="text-[9px] font-black text-gray-600 uppercase mt-1">
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
