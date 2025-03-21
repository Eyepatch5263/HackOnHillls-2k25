import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollison";
import { IconCode, IconFileCode2 } from "@tabler/icons-react";
import { Geist, Inria_Serif, Sansita } from "next/font/google";
import { FeatureCard } from './ui/FeatureCard';
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const inriaSerif = Inria_Serif({
    subsets: ["latin"],
    weight: ["400", "700"]
});
const sansita = Sansita({
    subsets: ["latin"],
    weight: ["400", "700"]
})

const Landing = () => {
    return (
        <BackgroundBeamsWithCollision className=''>
            <div className="flex h-screen w-screen flex-col">
                <div className="relative  text-white">
                    <div className="relative z-10 md:mt-20 container mx-auto px-4 py-16 h-full flex flex-col md:flex-row items-center justify-between">
                        <div className="max-w-4xl  md:mt-0 text-center md:text-left">
                            <h1 className={`text-4xl md:text-6xl ${sansita.className} text-white font-bold mb-6 text-transparent bg-clip-text`}>
                                Hack On Hills - 2K25
                            </h1>
                            <p className={`${inriaSerif.className} text-lg md:text-xl text-gray-300 mb-8`}>
                                Join the ultimate coding experience where innovation meets technology.
                                48 hours of coding, learning, and building the future.
                            </p>
                            <div className="space-y-4 space-x-4 md:space-y-0">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200">
                                    Register
                                </button>
                                <button className="border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200">
                                    Explore
                                </button>
                            </div>
                            <div className="flex flex-col md:flex-row mt-10 md:mt-20 space-y-10 md:space-y-0 md:space-x-10">
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

                        <div className="flex items-center justify-center mt-10 md:mt-0">
                            <div className="w-48 h-48 md:w-72 md:h-72 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-900 rounded-full opacity-80 animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <IconCode className="w-24 h-24 md:w-32 md:h-32 text-blue-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
};

export default Landing;