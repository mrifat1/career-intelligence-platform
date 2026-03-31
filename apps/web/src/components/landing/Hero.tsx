import Link from "next/link";
import { Button } from "@repo/ui";
import { Search } from "lucide-react";

export function Hero() {
    return (
        <div className="relative bg-[#050510] pt-12 pb-10 overflow-hidden border-b border-white/5">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tighter">
                    Resource<span className="text-blue-500">Hub</span>
                </h1>

                <div className="max-w-xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative flex items-center bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl p-1.5 pl-5">
                        <Search className="text-gray-500 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="অ্যালগরিদম বা রিয়্যাক্ট খুঁজুন..."
                            className="bg-transparent border-none focus:ring-0 text-white flex-1 px-3 text-base placeholder:text-gray-600"
                        />
                        <Button className="h-10 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 transition-all">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
