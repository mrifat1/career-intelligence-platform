import { NavBar } from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { JobShowcase } from "@/components/landing/JobShowcase";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function Page(): JSX.Element {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <Hero />
            <FeatureSection />
            <JobShowcase />
            <CTASection />
            <Footer />
        </div>
    );
}
