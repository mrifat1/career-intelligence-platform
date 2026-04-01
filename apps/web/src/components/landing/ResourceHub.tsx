"use client";

import React, { useState, useEffect } from "react";
import { FeaturedResources } from "./FeaturedResources";
import { TechSectorGrid } from "./TechSectorGrid";
import { Loader2 } from "lucide-react";

export const ResourceHub: React.FC = () => {
    const [data, setData] = useState<{ featured: any; sectors: any } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [featuredRes, sectorsRes] = await Promise.all([
                    fetch("http://localhost:3001/resource/featured"),
                    fetch("http://localhost:3001/resource/sectors")
                ]);

                const featured = await featuredRes.json();
                const sectors = await sectorsRes.json();

                console.log("Featured Resources:", featured);
                console.log("Tech Sectors:", sectors);

                setData({ featured, sectors });
            } catch (error) {
                console.error("Failed to fetch landing data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest animate-pulse">Loading Resources...</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {/* Section 1: Featured Resources (Categorized) */}
                {data?.featured && <FeaturedResources data={data.featured} />}

                {/* Section 2: Tech Sectors */}
                {data?.sectors && <TechSectorGrid sectors={data.sectors} />}
            </div>
        </div>
    );
};
