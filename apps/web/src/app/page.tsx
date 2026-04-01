import { NavBar } from "@/components/landing/NavBar";
import { ResourceHub } from "@/components/landing/ResourceHub";
import { Footer } from "@/components/landing/Footer";

export default function Page(): JSX.Element {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <NavBar />
            <ResourceHub />
            <Footer />
        </div>
    );
}
