import Link from "next/link";
import { Button } from "@repo/ui";


export function NavBar() {
    return (
        <nav className="sticky top-0 w-full z-50 bg-[#050510]/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <span className="text-2xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-colors">
                            Pathshala<span className="text-blue-500">.io</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="/resources" className="text-gray-400 hover:text-white font-semibold text-sm transition-colors uppercase tracking-widest">
                            Resources
                        </Link>
                        <Link href="/career-tracks" className="text-gray-400 hover:text-white font-semibold text-sm transition-colors uppercase tracking-widest">
                            Career Tracks
                        </Link>
                        <Link href="/mentorship" className="text-gray-400 hover:text-white font-semibold text-sm transition-colors uppercase tracking-widest">
                            Mentorship
                        </Link>
                        <Link href="/login" className="text-gray-400 hover:text-white font-semibold text-sm transition-colors uppercase tracking-widest">
                            Log in
                        </Link>
                        <Link href="/register">
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl px-8 h-12 font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
