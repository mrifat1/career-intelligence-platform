import Link from "next/link";
import { Button } from "@repo/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <div className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
                        <Sparkles className="h-4 w-4" />
                        <span>AI-Powered Career Intelligence</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Your Career Journey,
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            Powered by Intelligence
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Discover company insights, prepare for interviews with AI, explore verified salaries,
                        and connect with a community of professionals—all in one platform.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/register">
                            <Button className="h-14 px-8 text-lg rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center gap-2 w-full sm:w-auto">
                                Get Started Free
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/companies">
                            <Button className="h-14 px-8 text-lg rounded-lg bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 w-full sm:w-auto">
                                Explore Companies
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-4">Trusted by professionals at</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                            <span className="text-2xl font-semibold">Google</span>
                            <span className="text-2xl font-semibold">Microsoft</span>
                            <span className="text-2xl font-semibold">Amazon</span>
                            <span className="text-2xl font-semibold">Meta</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
