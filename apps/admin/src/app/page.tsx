"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import {
    Users,
    BookOpen,
    CheckCircle2,
    Layers,
    TrendingUp,
    ArrowUpRight,
    LucideIcon,
    Loader2
} from "lucide-react";

interface StatCardProps {
    label: string;
    value: string | number;
    change: string;
    icon: LucideIcon;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, change, icon: Icon, color }) => (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl group hover:border-indigo-500/30 transition-all shadow-sm">
        <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-2xl ${color}`}>
                <Icon size={20} />
            </div>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest bg-emerald-50 dark:bg-emerald-400/10 px-2 py-1 rounded-lg">
                <TrendingUp size={10} />
                {change}
            </div>
        </div>
        <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">{label}</p>
        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mt-1">{value}</h3>
    </div>
);

export default function Dashboard() {
    const [stats, setStats] = useState({ resources: 0, categories: 0, featured: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [resData, catData] = await Promise.all([
                    fetch("http://localhost:3001/resource").then(r => r.json()),
                    fetch("http://localhost:3001/resource/categories").then(r => r.json())
                ]);
                setStats({
                    resources: resData.length,
                    categories: catData.length,
                    featured: resData.filter((r: any) => r.isFeatured).length
                });
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        Dashboard
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
                        System Overview & Quick Stats
                    </p>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StatCard
                            label="Total Resources"
                            value={stats.resources}
                            change="+4%"
                            icon={BookOpen}
                            color="bg-indigo-50 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400"
                        />
                        <StatCard
                            label="Total Categories"
                            value={stats.categories}
                            change="+2%"
                            icon={Layers}
                            color="bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
                        />
                        <StatCard
                            label="Featured Assets"
                            value={stats.featured}
                            change="+12%"
                            icon={CheckCircle2}
                            color="bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 space-y-6">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Quick Navigation</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="/resources" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all group">
                                <BookOpen size={24} className="mb-3 text-indigo-600 group-hover:text-white" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-center">Manage Resources</span>
                            </a>
                            <a href="/categories" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all group">
                                <Layers size={24} className="mb-3 text-blue-600 group-hover:text-white" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-center">Manage Categories</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 space-y-6">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Platform Status</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-400/5 border border-emerald-100 dark:border-emerald-500/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Backend API</span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 uppercase">Operational</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-400/5 border border-emerald-100 dark:border-emerald-500/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Database</span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 uppercase">Connected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
