import { Bot, Briefcase, TrendingUp, Users, Shield, Zap } from "lucide-react";

const features = [
    {
        name: "AI Interview Coach",
        description: "Practice with our advanced AI that simulates real interview scenarios and provides instant feedback.",
        icon: Bot,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        name: "Salary Insights",
        description: "Access verified salary data broken down by role, location, and experience level.",
        icon: TrendingUp,
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        name: "Company Reviews",
        description: "Get the inside scoop on company culture, interview processes, and work-life balance.",
        icon: Briefcase,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        name: "Community",
        description: "Connect with peers, share experiences, and get advice from industry mentors.",
        icon: Users,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        name: "Verified Jobs",
        description: "Browse high-quality job listings from top tech companies, verified for authenticity.",
        icon: Shield,
        color: "text-teal-600",
        bgColor: "bg-teal-50",
    },
    {
        name: "Resume Builder",
        description: "Create ATS-friendly resumes with our smart builder and expert-approved templates.",
        icon: Zap,
        color: "text-pink-600",
        bgColor: "bg-pink-50",
    },
];

export function FeatureSection() {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to succeed
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A complete toolkit designed to support every stage of your career journey
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-200"
                        >
                            <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                                <feature.icon className={`h-6 w-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
