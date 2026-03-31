import { NavBar } from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";
import { ResourceHub } from "@/components/landing/ResourceHub";
import { Footer } from "@/components/landing/Footer";

export default function Page(): JSX.Element {
    return (
        <div className="min-h-screen bg-[#050510]">
            <NavBar />
            <Hero />
            <ResourceHub />
            <Footer />
        </div>
    );
}
