"use client";

import React from "react";
import { GraduationCap, Award, Rocket, ChevronRight } from "lucide-react";
import { ResourceCard } from "./ResourceCard";

interface Resource {
    title: string;
    author: string;
    url: string;
    type: string;
    difficulty: string;
}

interface TrackData {
    name: string;
    beginner: Resource[];
    intermediate: Resource[];
    advanced: Resource[];
}

interface FeaturedResourcesProps {
    data: {
        cp: TrackData;
        fundamental: TrackData;
    };
}

const DifficultyHeader: React.FC<{ icon: React.ReactNode, label: string, color: string }> = ({ icon, label, color }) => (
    <div className={`flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg border w-fit ${color}`}>
        {icon}
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </div>
);

export const FeaturedResources: React.FC<FeaturedResourcesProps> = ({ data }) => {
    const tracks = [data.cp, data.fundamental];

    return (
        <div className="space-y-20">
            {tracks.map((track, i) => (
                <div key={i} className="space-y-8">
                    <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                                {track.name}
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em] ml-4">
                            Step-by-step guidance from beginner to advanced
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Beginner */}
                        <div className="space-y-4">
                            <DifficultyHeader
                                icon={<GraduationCap size={14} />}
                                label="Beginner"
                                color="text-emerald-600 bg-emerald-50 border-emerald-100 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/10"
                            />
                            <div className="space-y-4">
                                {track.beginner.length > 0 ? (
                                    <ResourceCard category="Foundations" resources={track.beginner} />
                                ) : (
                                    <p className="text-slate-400 text-xs italic">No resources found</p>
                                )}
                            </div>
                        </div>

                        {/* Intermediate */}
                        <div className="space-y-4">
                            <DifficultyHeader
                                icon={<Award size={14} />}
                                label="Intermediate"
                                color="text-amber-600 bg-amber-50 border-amber-100 dark:text-amber-400 dark:bg-amber-400/10 dark:border-amber-400/10"
                            />
                            <div className="space-y-4">
                                {track.intermediate.length > 0 ? (
                                    <ResourceCard category="Scaling Up" resources={track.intermediate} />
                                ) : (
                                    <p className="text-slate-400 text-xs italic">No resources found</p>
                                )}
                            </div>
                        </div>

                        {/* Advanced */}
                        <div className="space-y-4">
                            <DifficultyHeader
                                icon={<Rocket size={14} />}
                                label="Advanced"
                                color="text-rose-600 bg-rose-50 border-rose-100 dark:text-rose-400 dark:bg-rose-400/10 dark:border-rose-400/10"
                            />
                            <div className="space-y-4">
                                {track.advanced.length > 0 ? (
                                    <ResourceCard category="Mastery" resources={track.advanced} />
                                ) : (
                                    <p className="text-slate-400 text-xs italic">Coming Soon</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
