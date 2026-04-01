"use client";

import Link from "next/link";
import { Button } from "@repo/ui";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function NavBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            ResourceHub<span className="text-indigo-600 dark:text-indigo-500">.io</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/resources" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white font-bold text-[11px] uppercase tracking-widest transition-colors">
                            Resources
                        </Link>
                        <Link href="/career-tracks" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white font-bold text-[11px] uppercase tracking-widest transition-colors">
                            Career Tracks
                        </Link>

                        <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all active:scale-95"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        <Link href="/login" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white font-bold text-[11px] uppercase tracking-widest transition-colors pl-2">
                            Log in
                        </Link>
                        <Link href="/register">
                            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-6 h-11 font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
                                Join Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
