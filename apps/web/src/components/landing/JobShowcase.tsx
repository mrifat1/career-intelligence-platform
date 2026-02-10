"use client";

import { useState } from "react";
import { Building2, MapPin, DollarSign, Star, Users, BookOpen, CheckCircle } from "lucide-react";

const sampleJobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        salary: "$150k - $200k",
        type: "Full-time",
        logo: "🔵",
        rating: 4.5,
        reviews: 1234,
        description: "Join our team to build scalable systems that impact billions of users worldwide.",
        interviewTopics: ["System Design", "Data Structures", "Algorithms"],
        companyReview: "Great work-life balance and innovative culture. Excellent benefits and learning opportunities.",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Microsoft",
        location: "Seattle, WA",
        salary: "$130k - $180k",
        type: "Full-time",
        logo: "🟦",
        rating: 4.3,
        reviews: 892,
        description: "Build cloud-native applications using cutting-edge technologies.",
        interviewTopics: ["React", "Node.js", "Azure"],
        companyReview: "Collaborative environment with strong mentorship programs and career growth.",
    },
];

export function JobShowcase() {
    const [selectedJob, setSelectedJob] = useState(sampleJobs[0]);
    const [activeTab, setActiveTab] = useState<"details" | "reviews" | "interview">("details");

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        All-in-One Career Platform
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Jobs, Company Reviews, and Interview Prep—everything you need in one place
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Job Listings Sidebar */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Jobs</h3>
                        {sampleJobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => setSelectedJob(job)}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedJob.id === job.id
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 bg-white hover:border-gray-300"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="text-3xl">{job.logo}</div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 truncate">{job.title}</h4>
                                        <p className="text-sm text-gray-600">{job.company}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                            <span className="text-sm text-gray-700">{job.rating}</span>
                                            <span className="text-sm text-gray-500">({job.reviews})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Job Details Panel */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
                        {/* Job Header */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-start gap-4">
                                <div className="text-5xl">{selectedJob.logo}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h3>
                                    <p className="text-lg text-gray-600 mt-1">{selectedJob.company}</p>
                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {selectedJob.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign className="h-4 w-4" />
                                            {selectedJob.salary}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Building2 className="h-4 w-4" />
                                            {selectedJob.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200">
                            <div className="flex">
                                <button
                                    onClick={() => setActiveTab("details")}
                                    className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "details"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Job Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("reviews")}
                                    className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "reviews"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    <Users className="h-4 w-4 inline mr-1" />
                                    Company Reviews
                                </button>
                                <button
                                    onClick={() => setActiveTab("interview")}
                                    className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "interview"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    <BookOpen className="h-4 w-4 inline mr-1" />
                                    Interview Prep
                                </button>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {activeTab === "details" && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">About the Role</h4>
                                    <p className="text-gray-600 leading-relaxed mb-6">{selectedJob.description}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">Verified by CareerIntell</span>
                                    </div>
                                </div>
                            )}

                            {activeTab === "reviews" && (
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-gray-900">{selectedJob.rating}</div>
                                            <div className="flex items-center gap-1 mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < Math.floor(selectedJob.rating)
                                                                ? "text-yellow-500 fill-yellow-500"
                                                                : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">{selectedJob.reviews} reviews</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 italic">"{selectedJob.companyReview}"</p>
                                            <p className="text-sm text-gray-500 mt-2">— Current Employee</p>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <p className="text-sm text-blue-800">
                                            💡 <strong>Pro Tip:</strong> Read authentic reviews from current and former employees
                                            to understand company culture before applying.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "interview" && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-4">Common Interview Topics</h4>
                                    <div className="space-y-3 mb-6">
                                        {selectedJob.interviewTopics.map((topic, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <BookOpen className="h-5 w-5 text-blue-600" />
                                                <span className="text-gray-700">{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <p className="text-sm text-green-800">
                                            🎯 <strong>AI Interview Prep:</strong> Practice with our AI coach for this specific
                                            role and get instant feedback on your answers.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
