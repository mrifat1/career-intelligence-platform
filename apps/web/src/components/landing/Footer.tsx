import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <span className="text-2xl font-bold text-gray-900">Career<span className="text-blue-600">Intell</span></span>
                        <p className="mt-2 text-sm text-gray-600">
                            Your intelligent career companion
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/companies" className="text-gray-600 hover:text-gray-900">Companies</Link></li>
                            <li><Link href="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
                            <li><Link href="/interview-prep" className="text-gray-600 hover:text-gray-900">Interview Prep</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                            <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
                            <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} CareerIntell. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-gray-600">Twitter</Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600">LinkedIn</Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
