"use client"
import { Geist, Inria_Serif, Sansita } from "next/font/google";
import { useState, useEffect } from "react"
import Image from "next/image"
import { color, motion } from "framer-motion"
import { style } from "framer-motion/client";

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

export default function SponsorsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("sponsors-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const sponsorTiers = [
    {
      name: "Platinum",
      sponsors: [
        { name: "Sponsor 1" , logo: "/placeholder.svg?height=120&width=240", color: "#efdfdf" },
        { name: "Sponsor 2", logo: "/placeholder.svg?height=120&width=240", color: "#efdfdf" },
      ],
    },
    {
      name: "Gold",
      sponsors: [
        { name: "Sponsor 3", logo: "/placeholder.svg?height=100&width=200", color: "#efdfdf" },
        { name: "Sponsor 4", logo: "/placeholder.svg?height=100&width=200", color: "#efdfdf" },
        { name: "Sponsor 5", logo: "/placeholder.svg?height=100&width=200", color: "#efdfdf" },
      ],
    },
    {
      name: "Silver",
      sponsors: [
        { name: "Sponsor 6", logo: "/placeholder.svg?height=80&width=160", color: "#efdfdf" },
        { name: "Sponsor 7", logo: "/placeholder.svg?height=80&width=160", color: "#efdfdf" },
        { name: "Sponsor 8", logo: "/placeholder.svg?height=80&width=160", color: "#efdfdf" },
        { name: "Sponsor 9", logo: "/placeholder.svg?height=80&width=160", color: "#efdfdf" },
      ],
    },
  ]

  return (
    <section
      id="sponsors-section"
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%,rgb(72, 72, 72) 50%,rgb(2, 5, 43) 100%)',
      }}
    >
      {/* Retrowave Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgb(133, 142, 150) 1px, transparent 1px), linear-gradient(90deg,rgb(133, 142, 150) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          perspective: "1000px",
          transform: "rotateX(60deg)",
          backgroundPosition: "center",
        }}
      />

      {/* Pyramids */}
      <div className="absolute bottom-0 left-0 w-full h-64 z-0">
        <div
          className="absolute bottom-0 left-1/4 transform -translate-x-1/2"
          style={{
            width: "0",
            height: "0",
            borderLeft: "100px solid transparent",
            borderRight: "100px solid transparent",
            borderBottom: "180px solid rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          className="absolute bottom-0 left-2/4 transform -translate-x-1/2"
          style={{
            width: "0",
            height: "0",
            borderLeft: "150px solid transparent",
            borderRight: "150px solid transparent",
            borderBottom: "250px solid rgba(165, 173, 209, 0.15)",
          }}
        />
        <div
          className="absolute bottom-0 left-3/4 transform -translate-x-1/2"
          style={{
            width: "0",
            height: "0",
            borderLeft: "120px solid transparent",
            borderRight: "120px solid transparent",
            borderBottom: "200px solid rgba(3, 134, 195, 0.2)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl ${sansita.className} font-bold mb-4 text-white`}>
            Our Sponsors
          </h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-blue-500 to-slate-500"></div>
          <p className={`mt-6 text-gray-300 ${sansita.className} max-w-2xl mx-auto`}>
            We're grateful to our amazing sponsors who make Hack on Hills possible. Their support empowers the next
            generation of innovators.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + tierIndex * 0.1 }}
              className="text-center"
            >
              <div className="inline-block mb-8">
                <h3 className={`text-2xl ${sansita.className} font-semibold text-white px-6 py-2 rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(0,0,255,0.5)]`}>
                  {tier.name} Sponsors
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(255, 217, 0, 0.6)",
                    }}
                    className="p-6 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-5 flex items-center justify-center"
                    style={{
                      background: sponsor.color,
                      boxShadow: "0 0 15px #f7e98e )",
                    }}
                  >
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={tierIndex === 0 ? 240 : tierIndex === 1 ? 200 : 160}
                      height={tierIndex === 0 ? 120 : tierIndex === 1 ? 100 : 80}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-blue-800 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(247,233,142,0.8)] transition-shadow duration-300">
            Become a Sponsor
          </button>
          <p className="mt-4 text-white-300 text-sm">
            Interested in sponsoring Hack on Hills 2025? Contact us at
            <h2 className="text-grey-500">"sponsors@hacksonhills.com"</h2>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

