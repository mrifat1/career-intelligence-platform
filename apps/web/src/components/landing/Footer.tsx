import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-[#050510] border-t border-white/5 pt-20 pb-10">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 space-y-4">
                        <span className="text-2xl font-black text-white tracking-tighter">
                            Pathshala<span className="text-blue-500">.io</span>
                        </span>
                        <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">
                            Empowering the next generation of Bengali tech talent.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li><Link href="/resources" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Resources</Link></li>
                            <li><Link href="/career-tracks" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Career Tracks</Link></li>
                            <li><Link href="/jobs" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Job Openings</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Support</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Community Blog</Link></li>
                            <li><Link href="/mentorship" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Mentorship</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600 font-medium">
                        © {new Date().getFullYear()} Pathshala.io. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors"><span className="sr-only">Twitter</span>Twitter</Link>
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors"><span className="sr-only">LinkedIn</span>LinkedIn</Link>
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors"><span className="sr-only">GitHub</span>GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
