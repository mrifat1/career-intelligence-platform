"use client";

import React from "react";
import { Globe, BookOpen, DollarSign } from "lucide-react";

interface ResourceTogglesProps {
    language: "BANGLA" | "ENGLISH";
    setLanguage: (lang: "BANGLA" | "ENGLISH") => void;
    priceFilter: "FREE" | "PAID" | "ALL";
    setPriceFilter: (filter: "FREE" | "PAID" | "ALL") => void;
}

export const ResourceToggles: React.FC<ResourceTogglesProps> = ({
    language,
    setLanguage,
    priceFilter,
    setPriceFilter,
}) => {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            {/* Language Toggle */}
            <div className="flex p-1 bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800">
                <button
                    onClick={() => setLanguage("BANGLA")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${language === "BANGLA"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                >
                    <Globe size={18} />
                    <span>Bangla</span>
                </button>
                <button
                    onClick={() => setLanguage("ENGLISH")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${language === "ENGLISH"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                >
                    <Globe size={18} />
                    <span>English</span>
                </button>
            </div>

            {/* Price Toggle */}
            <div className="flex p-1 bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800">
                <button
                    onClick={() => setPriceFilter("FREE")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${priceFilter === "FREE"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                >
                    <BookOpen size={18} />
                    <span>Free</span>
                </button>
                <button
                    onClick={() => setPriceFilter("PAID")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${priceFilter === "PAID"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                >
                    <DollarSign size={18} />
                    <span>Paid</span>
                </button>
                <button
                    onClick={() => setPriceFilter("ALL")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${priceFilter === "ALL"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                >
                    <span>All</span>
                </button>
            </div>
        </div>
    );
};
