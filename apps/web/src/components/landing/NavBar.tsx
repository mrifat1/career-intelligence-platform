import Link from "next/link";
import { Button } from "@repo/ui";


export function NavBar() {
    return (
        <nav className="sticky top-0 w-full z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">Career<span className="text-blue-600">Intell</span></span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/companies" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Companies
                        </Link>
                        <Link href="/jobs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Jobs
                        </Link>
                        <Link href="/interview-prep" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Interview Prep
                        </Link>
                        <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Log in
                        </Link>
                        <Link href="/register">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
