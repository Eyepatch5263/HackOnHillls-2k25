"use client"
import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollison";
import { IconCodeAsterisk, IconFileCode2 } from "@tabler/icons-react";
import { Geist, Inria_Serif } from "next/font/google";
import { FeatureCard } from "@/components/ui/FeatureCard";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const inriaSerif = Inria_Serif({
    subsets: ["latin"],
    weight: ["400", "700"]

});
const Landing = () => {
    return (
        <BackgroundBeamsWithCollision>
            <div className="flex flex-col">
                <div className="relative min-h-screen h-screen w-screen text-white">
                    <div className="relative z-10 mt-10 container mx-auto px-4 py-16 h-full flex items-center justify-between">
                        <div className="max-w-4xl mt-30">
                            <h1 className={`text-6xl ${geistSans.className} font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text`}>
                                Hack On Hills - 2K25
                            </h1>
                            <p className={`${inriaSerif.className} text-xl text-gray-300 mb-8`}>
                                Join the ultimate coding experience where innovation meets technology.
                                48 hours of coding, learning, and building the future.
                            </p>
                            <div className="space-x-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200">
                                    Register
                                </button>
                                <button className="border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200">
                                    Explore
                                </button>
                            </div>
                            <div className="flex mt-20 space-x-10">
                                <FeatureCard
                                    icon={<IconFileCode2 className="w-8 h-8" />}
                                    title="Innovate"
                                    description="Create groundbreaking projects with your team"
                                />
                                <FeatureCard
                                    icon={<IconFileCode2 className="w-8 h-8" />}
                                    title="Collaborate"
                                    description="Work together with fellow hackers to solve challenges"
                                />
                                <FeatureCard
                                    icon={<IconFileCode2 className="w-8 h-8" />}
                                    title="Learn"
                                    description="Gain new skills and knowledge from workshops and mentors"
                                />
                            </div>

                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-72 h-72 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 rounded-full opacity-30 animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <IconCodeAsterisk className="w-32 h-32 text-blue-400" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </BackgroundBeamsWithCollision>
    )

}

export default Landing
