"use client"
import { Wallet, Code, Zap, Database } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"

const sponsors = [
  {
    id: 1,
    name: "Ethereum",
    amount: "₹8,500+",
    description: "Innovative solutions and projects built on Ethereum",
    icon: Wallet,
    color: "#627EEA", // Ethereum blue
  },
  {
    id: 2,
    name: "Solana",
    amount: "₹6,200+",
    description: "High-performance blockchain applications and NFTs",
    icon: Zap,
    color: "#9945FF", // Solana purple
  },
  {
    id: 3,
    name: "Polygon",
    amount: "₹5,000+",
    description: "Scaling solutions for Web3 developers and enterprises",
    icon: Database,
    color: "#8247E5", // Polygon purple
  },
  {
    id: 4,
    name: "Algorand",
    amount: "₹4,800+",
    description: "Carbon-negative blockchain for sustainable applications",
    icon: Code,
    color: "#000000", // Algorand black
  },
]

export default function SponsorTracks() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-#FF6B35">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">SPONSOR TRACKS</h2>
          <p className="text-gray-600">
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
              <div className="absolute inset-0 bg-gray-200 rounded-lg transform transition-transform group-hover:scale-[1.02] duration-300"></div>

              <div className="relative p-6 rounded-lg h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                    <sponsor.icon className="w-6 h-6 text-[#4285F4]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>

                <div className="text-2xl font-bold mb-3 text-[#4285F4]">{sponsor.amount}</div>

                <p className="text-gray-600 text-sm mb-6">{sponsor.description}</p>

                <div className="mt-auto">
                  <div className="h-1 w-16 bg-[#4285F4] group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prize Pool Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 bg-gray-100 p-8 rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Total Prize Pool</h3>
              <p className="text-gray-600 mb-4 md:mb-0">
                Win exciting prizes and get a chance to be mentored by industry experts
              </p>
            </div>

            <div className="text-4xl md:text-5xl font-bold text-[#4285F4]">₹24,500+</div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#register"
              className="px-8 py-3 bg-[#4285F4] text-white font-medium rounded-md hover:bg-[#4285F4]/90 transition-colors"
            >
              Register Now
            </a>
            <a
              href="#tracks"
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              View Details
            </a>
          </div>
        </motion.div>

        {/* Sponsors Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-medium text-gray-500 mb-8">Our Sponsors</h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {sponsors.map((sponsor) => (
              <div key={`logo-${sponsor.id}`} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <sponsor.icon className="w-full h-full" style={{ color: sponsor.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

