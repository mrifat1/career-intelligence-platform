"use client";

import React from "react";
import { ResourceCarousel } from "./ResourceCarousel";
import { TechSectorGrid } from "./TechSectorGrid";

export const ResourceHub: React.FC = () => {
    return (
        <div className="bg-[#050510] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* Section 1: Resource Carousel (Algorithms, DS, etc.) */}
                <ResourceCarousel />

                {/* Section 2: Tech Sectors (Web, Mobile, AI) */}
                <TechSectorGrid />
            </div>
        </div>
    );
};
