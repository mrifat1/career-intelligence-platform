"use client";

import React from "react";
import {
    Compass,
    Code,
    Cpu,
    Terminal,
    Rocket,
    ChevronRight,
    Monitor,
    Database,
    Brain,
    Network
} from "lucide-react";

const stages = [
    {
        id: "1st-year",
        title: "1st Year (Explore Tech)",
        description: "Build a strong foundation in logic, math, and core programming languages.",
        icon: <Compass className="text-blue-400" />,
        topics: ["Programming Fundamentals", "CS Basics", "Mathematics"],
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "2nd-year",
        title: "2nd Year (Core CS)",
        description: "Deep dive into data structures, algorithms, and object-oriented design.",
        icon: <Code className="text-purple-400" />,
        topics: ["Data Structures", "Algorithms", "Development"],
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: "3rd-year",
        title: "3rd Year (Specialization)",
        description: "Choose your path: Web, Mobile, Data Science, or Software Engineering.",
        icon: <Cpu className="text-indigo-400" />,
        topics: ["Machine Learning", "Web Development", "Interview Prep"],
        color: "from-indigo-500/20 to-blue-500/20",
    },
    {
        id: "4th-year",
        title: "4th Year (Job Ready)",
        description: "Prepare for the industry with system design, networking, and capstone projects.",
        icon: <Terminal className="text-orange-400" />,
        topics: ["System Design", "Networking", "Placement"],
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        id: "graduate",
        title: "Graduate (Career Growth)",
        description: "Advanced topics, leadership, and scaling your professional impact.",
        icon: <Rocket className="text-emerald-400" />,
        topics: ["Growth", "Leadership", "Advanced Topics"],
        color: "from-emerald-500/20 to-teal-500/20",
    },
];

export const StageBrowser: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">Browse by Stage</h3>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500">Structured Paths</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {stages.map((stage) => (
                    <div
                        key={stage.id}
                        className={`group flex flex-col relative overflow-hidden bg-gradient-to-br ${stage.color} border border-white/5 rounded-3xl p-6 transition-all hover:scale-[1.02] hover:border-white/10 active:scale-[0.98]`}
                    >
                        <div className="p-3 bg-gray-900/80 rounded-2xl w-fit mb-6 shadow-xl">
                            {stage.icon}
                        </div>

                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                            {stage.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                            {stage.description}
                        </p>

                        <div className="mt-auto space-y-3">
                            <div className="space-y-1">
                                {stage.topics.map((topic, j) => (
                                    <div key={j} className="flex items-center gap-2 text-xs text-gray-400">
                                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                                        <span>{topic}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="flex items-center justify-between w-full p-3 bg-white/5 rounded-xl text-sm font-semibold text-white group-hover:bg-white/10 transition-colors mt-4">
                                View Path
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
