"use client"
import { Geist, Sansita } from 'next/font/google';
import Image from 'next/image'
import React from 'react'


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const sansita = Sansita({
    subsets: ["latin"],
    weight: ["400", "700"]
})
const About = () => {
    return (
        <section className="bg-gradient-to-br from-black via-slate-600 to-blue-950/50 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className={`text-4xl font-bold sm:text-5xl ${sansita.className}`}>Hack On Hills</h2>
                    <div className="mt-2 h-1 w-24 bg-purple-400 mx-auto"></div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-xl mb-6">
                            Hack On Hills 2K25 is more than just a hackathon—it's a launchpad for the next generation of tech
                            innovators. For 48 exhilarating hours, you'll collaborate, create, and push the boundaries of what's
                            possible in technology.
                        </p>
                        <p className="text-lg mb-6">
                            Whether you're a coding wizard, a design guru, or a visionary entrepreneur, HackInnovate is your stage to
                            shine. Join us as we tackle real-world challenges, learn cutting-edge technologies, and shape the future
                            of innovation.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden">
                        <Image
                            src="/heck.png?height=400&width=600"
                            alt="Hackers collaborating"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "When", content: "March 15-17, 2025", icon: "🗓️" },
                        { title: "Where", content: "Tech Hub, Silicon Valley", icon: "📍" },
                        { title: "Who", content: "500+ innovators from around the globe", icon: "🌍" },
                    ].map((item, index) => (
                        <div key={index} className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-purple-200">{item.content}</p>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    )
}


export default About
