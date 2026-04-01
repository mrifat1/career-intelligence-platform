"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Loader2
} from "lucide-react";
import { CategoryForm } from "@/components/CategoryForm";

interface Category {
    id: string;
    name: string;
    slug: string;
    _count?: {
        resources: number;
    };
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:3001/resource/categories");
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteCategory = async (id: string) => {
        if (!confirm("Are you sure? This might affect resources attached to this category.")) return;
        try {
            await fetch(`http://localhost:3001/resource/categories/${id}`, {
                method: "DELETE"
            });
            fetchCategories();
        } catch (error) {
            console.error("Failed to delete category:", error);
        }
    };

    const handleEdit = (cat: Category) => {
        setSelectedCategory(cat);
        setShowForm(true);
    };

    const handleAdd = () => {
        setSelectedCategory(null);
        setShowForm(true);
    };

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                            Categories
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                            Organize your resources taxonomy ({categories.length} total)
                        </p>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                    >
                        <Plus size={16} />
                        New Category
                    </button>
                </div>

                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading ? (
                        <div className="col-span-full py-20 flex flex-col items-center gap-3">
                            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loading Categories...</p>
                        </div>
                    ) : filteredCategories.length === 0 ? (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-slate-400 font-medium italic">No categories found.</p>
                        </div>
                    ) : (
                        filteredCategories.map((cat) => (
                            <div key={cat.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl group hover:border-indigo-500/30 transition-all shadow-sm flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{cat.name}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">Slug: {cat.slug}</p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                    <div className="text-[10px] font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 rounded uppercase tracking-wider">
                                        Resources: {cat._count?.resources || 0}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(cat)}
                                            className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            onClick={() => deleteCategory(cat.id)}
                                            className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {showForm && (
                <CategoryForm
                    category={selectedCategory}
                    onClose={() => setShowForm(false)}
                    onSuccess={fetchCategories}
                />
            )}
        </AdminLayout>
    );
}
