"use client";

import React from "react";
import { PlayCircle, FileText, Github, Share2, Heart } from "lucide-react";

interface ResourceGridProps {
    language: "BANGLA" | "ENGLISH";
    priceFilter: "FREE" | "PAID" | "ALL";
}

export const ResourceGrid: React.FC<ResourceGridProps> = ({ language, priceFilter }) => {
    // Mock data for trending resources
    const resources = [
        {
            title: "Modern Web Development with React - Bangla & English",
            author: "Sumit Saha",
            rating: 4.8,
            duration: "20 min",
            difficulty: "Beginner",
            type: "VIDEO_SERIES",
            isPaid: false,
            language: "BANGLA",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400&h=250",
        },
        {
            title: "Python for Data Science - Bangla & English",
            author: "Jhankar Mahbub",
            rating: 4.9,
            duration: "15 min",
            difficulty: "Intermediate",
            type: "COURSE",
            isPaid: true,
            language: "BANGLA",
            thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",
        },
        {
            title: "Mastering Database Systems",
            author: "Hitesh Choudhary",
            rating: 4.7,
            duration: "30 min",
            difficulty: "Advanced",
            type: "VIDEO_SERIES",
            isPaid: false,
            language: "ENGLISH",
            thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400&h=250",
        },
        {
            title: "Next.js 14 Full Stack Marathon",
            author: "LWS Bangla",
            rating: 4.9,
            duration: "10 hours",
            difficulty: "Expert",
            type: "VIDEO_SERIES",
            isPaid: false,
            language: "BANGLA",
            thumbnail: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=400&h=250",
        },
    ];

    const filtered = resources.filter(res => {
        const langMatch = res.language === language;
        const priceMatch = priceFilter === "ALL" || (priceFilter === "PAID" && res.isPaid) || (priceFilter === "FREE" && !res.isPaid);
        return langMatch && priceMatch;
    });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Trending Resources</h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
                    View All Resources
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.length > 0 ? (
                    filtered.map((res, i) => (
                        <div key={i} className="group bg-gray-950 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all flex flex-col">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={res.thumbnail}
                                    alt={res.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${res.isPaid ? "bg-purple-600 text-white" : "bg-green-600 text-white"
                                        }`}>
                                        {res.isPaid ? "Paid" : "Free"}
                                    </span>
                                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                                        {res.language}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <PlayCircle className="text-white w-12 h-12" />
                                </div>
                            </div>

                            <div className="p-5 space-y-3 flex-1 flex flex-col">
                                <div className="flex items-center justify-between text-[10px] text-gray-500 font-semibold uppercase tracking-widest">
                                    <span>{res.type.replace("_", " ")}</span>
                                    <span>{res.difficulty}</span>
                                </div>

                                <h4 className="text-white font-bold leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {res.title}
                                </h4>

                                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">
                                        {res.author.charAt(0)}
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">{res.author}</span>
                                    <div className="ml-auto flex items-center gap-1">
                                        <Heart size={14} className="text-gray-600 hover:text-red-500 transition-colors cursor-pointer" />
                                        <Share2 size={14} className="text-gray-600 hover:text-blue-500 transition-colors cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-24 text-center bg-gray-900/20 border border-dashed border-white/10 rounded-3xl">
                        <p className="text-gray-500 font-medium">No resources found for the current filters.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 text-blue-400 text-sm hover:underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
