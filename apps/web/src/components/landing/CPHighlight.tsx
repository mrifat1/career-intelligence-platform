"use client";

import React from "react";
import { Trophy, ExternalLink, Star } from "lucide-react";

interface CPHighlightProps {
    language: "BANGLA" | "ENGLISH";
    priceFilter: "FREE" | "PAID" | "ALL";
}

export const CPHighlight: React.FC<CPHighlightProps> = ({ language, priceFilter }) => {
    // Mock data for demonstration
    const resources = [
        {
            title: "Mastering DSA & Competitive Programming",
            author: "Farhan Hossain",
            rating: 4.8,
            type: "Paid",
            lang: "Bangla",
            isPaid: true,
            language: "BANGLA",
        },
        {
            title: "LeetCode Prep - Algorithm & Data Structures",
            author: "Adnan Azim",
            rating: 4.9,
            type: "Free",
            lang: "English",
            isPaid: false,
            language: "ENGLISH",
        },
        {
            title: "Competitive C++ in Bengali",
            author: "Shahed Ahmed",
            rating: 4.7,
            type: "Free",
            lang: "Bangla",
            isPaid: false,
            language: "BANGLA",
        },
    ];

    const filtered = resources.filter(res => {
        const langMatch = res.language === language;
        const priceMatch = priceFilter === "ALL" || (priceFilter === "PAID" && res.isPaid) || (priceFilter === "FREE" && !res.isPaid);
        return langMatch && priceMatch;
    });

    return (
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/40 to-blue-900/20 border border-indigo-500/20 p-8 shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Trophy size={160} className="text-white" />
            </div>

            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Trophy className="text-yellow-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Competitive Programming</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.length > 0 ? (
                        filtered.map((res, i) => (
                            <div key={i} className="group bg-gray-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${res.isPaid ? "bg-purple-500/20 text-purple-400" : "bg-green-500/20 text-green-400"
                                        }`}>
                                        {res.type}
                                    </span>
                                    <span className="text-xs text-gray-500">{res.lang}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                                    {res.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4">by {res.author}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                        <Star size={14} fill="currentColor" />
                                        <span>{res.rating}</span>
                                    </div>
                                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium">
                                        Explore <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-gray-500 italic">
                            No resources found for the selected filters.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
