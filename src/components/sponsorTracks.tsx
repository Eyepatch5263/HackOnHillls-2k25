"use client"
import { Wallet, Code, Zap, Database } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
import { Geist, Inria_Serif, Sansita } from "next/font/google";
// import { style } from "framer-motion/client";

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
const sponsors = [
  {
    id: 1,
    name: "Etherum blue",
    amount: "₹1,00,000",
    description: "Innovative solutions and projects built on Ethereum",
    icon: Wallet,
    color: "#627EEA", // Ethereum blue
  },
  {
    id: 2,
    name: "Solana purple",
    amount: "₹50,000",
    description: "High-performance blockchain applications and NFTs",
    icon: Zap,
    color: "#9900FF", // Solana purple
  },
  {
    id: 3,
    name: "Polygon purple",
    amount: "₹30,000",
    description: "Scaling solutions for Web3 developers and enterprises",
    icon: Database,
    color: "#8247E5", // Polygon purple
  },
  {
    id: 4,
    name: "Algorand black",
    amount: "₹30,000",
    description: "Carbon-negative blockchain for sustainable applications",
    icon: Code,
    color: "#000000", // Algorand black
  },
]

export default function SponsorTracks() {
  return (
    <section
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-br from-slate-600 via-blue-950/50 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className={`text-4xl ${sansita.className} font-bold mb-4 text-White`}>Sponsor Tracks</h2>
          <p className={`text-gray-600 ${sansita.className}`} style={{ color: 'rgb(193, 195, 197)' }} >
            Choose from our sponsor tracks and build innovative solutions. Each track offers prizes and mentorship
            opportunities.
          </p>
        </motion.div>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-lg h-full flex flex-col border-2 border-transparent group-hover:border-blue-500 transition-all duration-300" style={{background: 'rgb(39, 50, 69)'}}>
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                    <sponsor.icon className="w-6 h-6 text-[#4285F4]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>

                <div className="text-2xl font-bold mb-3 text-[#4285F4]">{sponsor.amount}</div>

                <p className="text-white text-sm mb-6">{sponsor.description}</p>

                <div className="mt-auto">
                  <div className="h-1 w-16 bg-[#4285F4] group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

