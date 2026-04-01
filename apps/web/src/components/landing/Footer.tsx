import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-indigo-600/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 space-y-4">
                        <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                            ResourceHub<span className="text-indigo-600 dark:text-indigo-500">.io</span>
                        </span>
                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[200px] leading-relaxed font-medium">
                            The ultimate destination for Bangla-language programming resources.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li><Link href="/resources" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Resources</Link></li>
                            <li><Link href="/career-tracks" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Career Tracks</Link></li>
                            <li><Link href="/roadmap" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Learning Roadmaps</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Support</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Community Blog</Link></li>
                            <li><Link href="/mentorship" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Mentorship</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-500 dark:text-slate-600 font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} ResourceHub.io. Empowering Local Talent.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-xs font-bold text-slate-500 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-white transition-colors uppercase tracking-widest">Twitter</Link>
                        <Link href="#" className="text-xs font-bold text-slate-500 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-white transition-colors uppercase tracking-widest">LinkedIn</Link>
                        <Link href="#" className="text-xs font-bold text-slate-500 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-white transition-colors uppercase tracking-widest">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
