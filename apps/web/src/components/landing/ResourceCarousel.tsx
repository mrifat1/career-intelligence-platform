"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { ResourceCard } from "./ResourceCard";

export const ResourceCarousel: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [sections, setSections] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/resource/landing");

                const data = await response.json();
                console.log("data", data);
                setSections(data.carousel);
            } catch (error) {
                console.error("Failed to fetch from backend:", error);
            }
        };
        fetchData();
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };


    return (
        <div className="space-y-6 pt-6">
            <div className="flex items-end justify-between border-b border-white/5 pb-6">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black text-white tracking-tighter uppercase flex items-center gap-2">
                        <div className="w-2 h-6 bg-cyan-500 rounded-full" />
                        Featured Resources
                    </h2>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Foundational Computer Science Tracks</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-10 scrollbar-hide scroll-smooth no-scrollbar relative"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {sections.map((section, i) => (
                    <ResourceCard key={i} category={section.category} resources={section.resources} />
                ))}

                {/* Visual hint for more content */}
                <div className="flex-shrink-0 w-8" />
            </div>
        </div>
    );
};
