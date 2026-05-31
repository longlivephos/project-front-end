"use client";

import Tag from "@/components/Tag";
import Image from "next/image";

const integrations = [
    {
        name: "Figma",
        description: "Figma is a collaborative interface design tool.",
        icon: "/assets/images/figma-logo.svg",
        bg: "bg-[#1E1E1E]",
    },
    {
        name: "GitHub",
        description: "GitHub is the leading platform for code collaboration.",
        icon: "/assets/images/github-logo.svg",
        bg: "bg-neutral-800",
    },
    {
        name: "Notion",
        description: "Notion is an all-in-one workspace for notes and docs.",
        icon: "/assets/images/notion-logo.svg",
        bg: "bg-neutral-800",
    },
    {
        name: "Framer",
        description: "Framer is a professional website prototyping tool.",
        icon: "/assets/images/framer-logo.svg",
        bg: "bg-neutral-800",
    },
    {
        name: "Slack",
        description: "Slack is a messaging platform for teams.",
        icon: "/assets/images/slack-logo.svg",
        bg: "bg-neutral-800",
    },
    {
        name: "Relume",
        description: "Relume is a library of Figma & Webflow components.",
        icon: "/assets/images/relume-logo.svg",
        bg: "bg-neutral-800",
    },
];

function IntegrationCard({
    name,
    description,
    icon,
    bg,
}: {
    name: string;
    description: string;
    icon: string;
    bg: string;
}) {
    return (
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 flex flex-col gap-4">
            <div
                className={`size-16 rounded-2xl flex items-center justify-center ${bg} border border-white/10`}
            >
                <Image
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <div>
                <h3 className="text-white font-medium text-lg">{name}</h3>
                <p className="text-white/50 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
}

export default function Integrations() {
    return (
        <section className="py-24 lg:py-36 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Heading & description */}
                    <div className="lg:sticky lg:top-24">
                        <Tag>Integrations</Tag>
                        <h2 className="text-4xl md:text-5xl font-medium mt-6 leading-tight">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers seamlessly connects with your favorite tools, making
                            it easy to plug into any workflow and collaborate across
                            platforms.
                        </p>
                    </div>

                    {/* Right: Integration Cards Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {integrations.map((integration) => (
                            <IntegrationCard
                                key={integration.name}
                                {...integration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}