"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import {
    Plus,
    Search,
    MoreVertical,
    Edit2,
    Trash2,
    ExternalLink,
    CheckCircle2,
    XCircle,
    Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ResourceForm } from "@/components/ResourceForm";

interface Resource {
    id: string;
    title: string;
    author: string;
    url: string;
    type: string;
    difficulty: string;
    isFeatured: boolean;
    categories: { id: string; name: string }[];
}

export default function ResourcesPage() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const res = await fetch("http://localhost:3001/resource");
            const data = await res.json();
            setResources(data);
        } catch (error) {
            console.error("Failed to fetch resources:", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleFeatured = async (id: string, current: boolean) => {
        try {
            await fetch(`http://localhost:3001/resource/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isFeatured: !current })
            });
            fetchResources();
        } catch (error) {
            console.error("Failed to toggle featured status:", error);
        }
    };

    const deleteResource = async (id: string) => {
        if (!confirm("Are you sure you want to delete this resource?")) return;
        try {
            await fetch(`http://localhost:3001/resource/${id}`, {
                method: "DELETE"
            });
            fetchResources();
        } catch (error) {
            console.error("Failed to delete resource:", error);
        }
    };

    const handleEdit = (resource: Resource) => {
        setSelectedResource(resource);
        setShowForm(true);
    };

    const handleAdd = () => {
        setSelectedResource(null);
        setShowForm(true);
    };

    const filteredResources = resources.filter(res =>
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                            Resources
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                            Manage your learning library ({resources.length} items)
                        </p>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                    >
                        <Plus size={16} />
                        Add Resource
                    </button>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-white/[0.02]">
                                    <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Resource</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Category</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Difficulty</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Featured</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center gap-3">
                                                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loading Resources...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredResources.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center">
                                            <p className="text-slate-400 font-medium italic">No resources found matching your search.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredResources.map((res) => (
                                        <tr key={res.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.01] transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{res.title}</span>
                                                    <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{res.author}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-wrap gap-1">
                                                    {res.categories.map((cat, i) => (
                                                        <span key={i} className="text-[9px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                                            {cat.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className={cn(
                                                    "text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest",
                                                    res.difficulty === "BEGINNER" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400" :
                                                        res.difficulty === "INTERMEDIATE" ? "bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400" :
                                                            "bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400"
                                                )}>
                                                    {res.difficulty}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <button
                                                    onClick={() => toggleFeatured(res.id, res.isFeatured)}
                                                    className="mx-auto block p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                                >
                                                    {res.isFeatured ? (
                                                        <CheckCircle2 size={18} className="text-emerald-500" />
                                                    ) : (
                                                        <XCircle size={18} className="text-slate-300 dark:text-slate-700" />
                                                    )}
                                                </button>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <a href={res.url} target="_blank" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                    <button
                                                        onClick={() => handleEdit(res)}
                                                        className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                                    >
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteResource(res.id)}
                                                        className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showForm && (
                <ResourceForm
                    resource={selectedResource}
                    onClose={() => setShowForm(false)}
                    onSuccess={fetchResources}
                />
            )}
        </AdminLayout>
    );
}
