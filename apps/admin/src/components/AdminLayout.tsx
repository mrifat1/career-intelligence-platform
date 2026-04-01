"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    BookOpen,
    Tags,
    Settings,
    Menu,
    X,
    Sun,
    Moon,
    LogOut,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label, active }) => (
    <Link
        href={href}
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
            active
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
        )}
    >
        <span className={cn("transition-colors", active ? "text-white" : "group-hover:text-indigo-600 dark:group-hover:text-indigo-400")}>
            {icon}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
        {active && <ChevronRight size={14} className="ml-auto opacity-50" />}
    </Link>
);

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 transform lg:translate-x-0 lg:static lg:inset-0",
                    !sidebarOpen && "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Brand */}
                    <div className="flex items-center justify-between mb-10 px-2">
                        <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">
                            Admin<span className="text-indigo-600">Hub</span>
                        </span>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 text-slate-400 hover:text-slate-900"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        <SidebarItem
                            href="/"
                            icon={<LayoutDashboard size={18} />}
                            label="Dashboard"
                            active
                        />
                        <SidebarItem
                            href="/resources"
                            icon={<BookOpen size={18} />}
                            label="Resources"
                        />
                        <SidebarItem
                            href="/categories"
                            icon={<Tags size={18} />}
                            label="Categories"
                        />
                    </nav>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all font-bold text-xs uppercase tracking-widest"
                        >
                            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                        </button>
                        <SidebarItem
                            href="http://localhost:3000"
                            icon={<ExternalLink size={18} />}
                            label="View Site"
                        />
                        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all font-bold text-xs uppercase tracking-widest">
                            <LogOut size={18} />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-40">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 text-slate-400 hover:text-slate-900"
                    >
                        <Menu size={20} />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                            AD
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Admin User</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">Super Admin</p>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};
