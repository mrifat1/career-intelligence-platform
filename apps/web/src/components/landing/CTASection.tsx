import Link from "next/link";
import { Button } from "@repo/ui";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Ready to accelerate your career?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using CareerIntell to land their dream jobs.
                </p>
                <Link href="/register">
                    <Button className="h-14 px-8 text-lg rounded-lg bg-white text-blue-600 hover:bg-gray-50 shadow-lg inline-flex items-center gap-2">
                        Get Started for Free
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
