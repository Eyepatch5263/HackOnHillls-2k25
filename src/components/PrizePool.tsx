"use client";
import Image from "next/image"
import { Trophy, Award, Gift, Zap, ArrowRight } from "lucide-react"
import { Geist, Inria_Serif, Sansita } from "next/font/google";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { IconButton } from "./ui/buttons/icon-button"
import { LearnMoreButton } from "./ui/buttons/learn-more-button"
import { ViewDetailsButton } from "./ui/buttons/view-details-button"

// Configure fonts
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const inria = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inria',
});

const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-sansita',
});

// Define special prizes array
const specialPrizes = [
  {
    icon: <Zap className="h-5 w-5 text-[#00FFFF]" />,
    title: "Best AI/ML Hack",
    sponsor: "Sponsored by TechCorp",
    amount: "₹50,000",
    description: "For the most innovative use of artificial intelligence or machine learning in a project.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#00E6E6]" />,
    title: "Best Web3 Project",
    sponsor: "Sponsored by BlockChain Inc",
    amount: "₹40,000",
    description: "For the most creative and functional blockchain or web3 application.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#A15CFF]" />,
    title: "Best AR/VR Solution",
    sponsor: "Sponsored by ImmerseTech",
    amount: "₹35,000",
    description: "For the most immersive and practical augmented or virtual reality experience.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#F9DC5C]" />,
    title: "Best Hardware Hack",
    sponsor: "Sponsored by MakerSpace",
    amount: "₹30,000",
    description: "For the most innovative hardware project or IoT solution.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#FF6B35]" />,
    title: "Best Social Impact",
    sponsor: "Sponsored by Community First",
    amount: "₹25,000",
    description: "For the project that addresses a significant social or environmental challenge.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#E31C79]" />,
    title: "Best Beginner Hack",
    sponsor: "Sponsored by LearnTech",
    amount: "₹20,000",
    description: "For the best project created by a team participating in their first hackathon.",
  },
];

// Define sponsored prizes array
const sponsoredPrizes = [
  {
    sponsor: "AWS",
    description: "Best use of AWS services in a project",
    prize: "$5,000 in AWS credits + mentorship",
  },
  {
    sponsor: "Microsoft",
    description: "Best use of Azure or Microsoft technologies",
    prize: "$4,000 in Azure credits + Surface devices",
  },
  {
    sponsor: "Google Cloud",
    description: "Best implementation of Google Cloud services",
    prize: "$5,000 in GCP credits + Google Home devices",
  },
  {
    sponsor: "GitHub",
    description: "Best use of GitHub Actions and collaboration",
    prize: "GitHub Pro for 1 year + exclusive swag",
  },
  {
    sponsor: "MongoDB",
    description: "Best implementation of MongoDB in a project",
    prize: "MongoDB Atlas credits + certification vouchers",
  },
  {
    sponsor: "Twilio",
    description: "Most creative use of Twilio API",
    prize: "$2,000 in Twilio credits + premium swag",
  },
];

export default function PrizePage() {
  return (
    <div className={`flex min-h-screen flex-col items-center text-white relative overflow-hidden ${geist.variable} ${inria.variable} ${sansita.variable}`}>
      {/* Background with animated gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#120458]"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#9900FF,#FF00FF,#E31C79,#FF6B35)] bg-[length:200%_200%] animate-[gradient_15s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#120458_70%)]"></div>
        <div className="absolute inset-0 mix-blend-overlay opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDBoMjBNMjAgNDBoMjBNMCAwdjQwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Add keyframes for the gradient animation and font styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Apply fonts using CSS variables */
        h1, h2, h3, .heading-font {
          font-family: var(--font-sansita);
          letter-spacing: 0.02em;
        }

        p, span, div, ul, li {
          font-family: var(--font-geist);
        }

        .title-font {
          font-family: var(--font-sansita);
          letter-spacing: 0.03em;
        }

        .description-font {
          font-family: var(--font-inria);
        }

        .prize-amount {
          font-family: var(--font-sansita);
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        
        .button-text {
          font-family: var(--font-sansita);
          letter-spacing: 0.03em;
          font-weight: 700;
        }
      `}</style>

      <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ff00ff2e_1px,_transparent_1px),_linear-gradient(to_bottom,_#ff00ff2e_1px,_transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-[#9900FF] to-[#FF00FF] bg-clip-text text-transparent pb-2 heading-font">
                Prize Pool
              </h1>
              <p className="mt-4 text-xl text-[#00FFFF]">
                Compete for amazing prizes worth over ₹5,00,000 at Hack on Hills 2k25!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
              {/* First Prize Card - Higher contrast */}
              <Card className="w-full group relative overflow-hidden bg-gradient-to-b from-[#2B0F54]/80 to-[#120458]/90 border-[#FFD700] border-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/50 hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FFD700]/20 blur-3xl group-hover:bg-[#FFD700]/30" />
                <CardHeader className="pb-4">
                  <div className="mb-2 flex justify-center">
                    <Trophy className="h-12 w-12 text-[#FFD700]" />
                  </div>
                  <CardTitle className="text-center text-2xl font-bold text-white title-font">1st Prize</CardTitle>
                  <CardDescription className="text-center text-[#F9DC5C] description-font">Overall Winner</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-[#FFD700] prize-amount">₹1,50,000</p>
                  <ul className="mt-4 space-y-2 text-white">
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#FFD700]" />
                      <span>Cash Prize</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#FFD700]" />
                      <span>Internship Opportunities</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#FFD700]" />
                      <span>Premium Swag Kit</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 text-center">
                  <LearnMoreButton color="amber" className="w-full button-text" />
                </CardFooter>
              </Card>

              {/* Second Prize Card - Higher contrast */}
              <Card className="w-full group relative overflow-hidden bg-gradient-to-b from-[#2B0F54]/80 to-[#120458]/90 border-[#00FFFF] border-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFFF]/50 hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00FFFF]/20 blur-3xl group-hover:bg-[#00FFFF]/30" />
                <CardHeader className="pb-4">
                  <div className="mb-2 flex justify-center">
                    <Award className="h-12 w-12 text-[#00FFFF]" />
                  </div>
                  <CardTitle className="text-center text-2xl font-bold text-white title-font">2nd Prize</CardTitle>
                  <CardDescription className="text-center text-[#F9DC5C] description-font">Runner Up</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-[#00FFFF] prize-amount">₹1,00,000</p>
                  <ul className="mt-4 space-y-2 text-white">
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#00FFFF]" />
                      <span>Cash Prize</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#00FFFF]" />
                      <span>Premium Subscriptions</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#00FFFF]" />
                      <span>Swag Kit</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 text-center">
                  <LearnMoreButton color="slate" className="w-full button-text" />
                </CardFooter>
              </Card>

              {/* Third Prize Card - Higher contrast */}
              <Card className="w-full group relative overflow-hidden bg-gradient-to-b from-[#2B0F54]/80 to-[#120458]/90 border-[#FF00FF] border-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF00FF]/50 hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FF00FF]/20 blur-3xl group-hover:bg-[#FF00FF]/30" />
                <CardHeader className="pb-4">
                  <div className="mb-2 flex justify-center">
                    <Gift className="h-12 w-12 text-[#FF00FF]" />
                  </div>
                  <CardTitle className="text-center text-2xl font-bold text-white title-font">3rd Prize</CardTitle>
                  <CardDescription className="text-center text-[#F9DC5C] description-font">Second Runner Up</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-[#FF00FF] prize-amount">₹75,000</p>
                  <ul className="mt-4 space-y-2 text-white">
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#FF00FF]" />
                      <span>Cash Prize</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#FF00FF]" />
                      <span>Digital Subscriptions</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-[#FF00FF]" />
                      <span>Swag Items</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 text-center">
                  <LearnMoreButton color="amber-dark" className="w-full button-text" />
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#FF00FF] heading-font">Special Track Prizes</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specialPrizes.map((prize, index) => (
                <Card
                  key={index}
                  className="w-full bg-[#2B0F54]/50 border-[#9900FF]/50 border transition-all duration-300 hover:shadow-md hover:shadow-[#9900FF]/20 hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white title-font">
                      {prize.icon}
                      {prize.title}
                    </CardTitle>
                    <CardDescription className="text-[#00FFFF] description-font">{prize.sponsor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-[#F9DC5C] prize-amount">{prize.amount}</p>
                    <p className="mt-2 text-[#f0f0ff]">{prize.description}</p>
                  </CardContent>
                  <CardFooter>
                    <ViewDetailsButton href={`/prizes/special/${prize.title.toLowerCase().replace(/\s+/g, "-")}`} className="button-text" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#2B0F54]/50 w-full">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-[#FF00FF] heading-font">Sponsored Prizes</h2>
              <p className="mt-4 text-[#00FFFF]">
                Our sponsors are offering additional prizes for projects using their technologies.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 mx-auto max-w-5xl">
              {sponsoredPrizes.map((prize, index) => (
                <div
                  key={index}
                  className="w-full flex gap-4 rounded-lg border border-[#9900FF]/30 bg-[#120458]/70 p-6 transition-all duration-300 hover:border-[#FF00FF]/50 hover:shadow-lg hover:shadow-[#FF00FF]/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2B0F54]">
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={prize.sponsor}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-[#F9DC5C] title-font">{prize.sponsor}</h3>
                    <p className="text-sm text-[#00FFFF]">{prize.description}</p>
                    <p className="font-medium text-[#FF00FF] prize-amount">{prize.prize}</p>
                    <IconButton
                      variant="ghost"
                      icon={<ArrowRight className="h-4 w-4" />}
                      href={`/prizes/sponsored/${prize.sponsor.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[#FF00FF] hover:text-[#FF00FF]/90 p-0 h-auto button-text"
                    >
                      Learn more
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

