"use client";
import dynamic from 'next/dynamic'
import { Trophy, Award, Gift, Zap, ArrowRight } from "lucide-react"
import { Geist, Inria_Serif, Sansita } from "next/font/google";

// Font configurations
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

// CSS classes for specific elements
const fontClasses = {
  heading: inria.className,
  body: geist.className,
  button: sansita.className
};

// For any problematic components
const DynamicImage = dynamic(() => import('next/image'), { ssr: false })

// Define a static icon component outside to ensure consistency
const PrizeIcon = () => <Zap className="h-5 w-5 text-[#9900FF]" />;

// Define special prizes array
const specialPrizes = [
  {
    icon: <PrizeIcon />,
    title: "Best AI/ML Hack",
    sponsor: "Sponsored by TechCorp",
    amount: "₹50,000",
    description: "For the most innovative use of artificial intelligence or machine learning in a project.",
  },
  {
    icon: <PrizeIcon />,
    title: "Best Web3 Project",
    sponsor: "Sponsored by BlockChain Inc",
    amount: "₹40,000",
    description: "For the most creative and functional blockchain or web3 application.",
  },
  {
    icon: <PrizeIcon />,
    title: "Best AR/VR Solution",
    sponsor: "Sponsored by ImmerseTech",
    amount: "₹35,000",
    description: "For the most immersive and practical augmented or virtual reality experience.",
  },
  {
    icon: <PrizeIcon />,
    title: "Best Hardware Hack",
    sponsor: "Sponsored by MakerSpace",
    amount: "₹30,000",
    description: "For the most innovative hardware project or IoT solution.",
  },
  {
    icon: <PrizeIcon />,
    title: "Best Social Impact",
    sponsor: "Sponsored by Community First",
    amount: "₹25,000",
    description: "For the project that addresses a significant social or environmental challenge.",
  },
  {
    icon: <PrizeIcon />,
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
    image: "/images/aws.png",
  },
  {
    sponsor: "Microsoft",
    description: "Best use of Azure or Microsoft technologies",
    prize: "$4,000 in Azure credits + Surface devices",
    image: "/images/microsoft.png",
  },
  {
    sponsor: "Google Cloud",
    description: "Best implementation of Google Cloud services",
    prize: "$5,000 in GCP credits + Google Home devices",
    image: "/images/google-cloud.png",
  },
  {
    sponsor: "GitHub",
    description: "Best use of GitHub Actions and collaboration",
    prize: "GitHub Pro for 1 year + exclusive swag",
    image: "/images/github.png",
  },
  {
    sponsor: "MongoDB",
    description: "Best implementation of MongoDB in a project",
    prize: "MongoDB Atlas credits + certification vouchers",
    image: "/images/mongodb.png",
  },
  {
    sponsor: "Twilio",
    description: "Most creative use of Twilio API",
    prize: "$2,000 in Twilio credits + premium swag",
    image: "/images/twilio.png",
  },
];

export default function PrizePool() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-slate-600 to-blue-950/50 text-white py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        {/* Main heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${fontClasses.heading}`}>
            Prize Pool
          </h1>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto ${fontClasses.body}`}>
            Compete for amazing prizes worth over ₹5,00,000 at Hack on Hills 2k25!
          </p>
        </div>
        
        {/* Main prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {/* First Prize Card */}
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border-t-4 border-yellow-400 hover:shadow-yellow-400/20 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Trophy className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className={`text-2xl font-bold text-center ${fontClasses.heading}`}>🥇 First Prize</h3>
            <p className={`text-gray-400 text-center mb-4 ${fontClasses.body}`}>Overall Winner</p>
            <p className={`text-yellow-400 text-3xl font-bold mt-4 mb-6 text-center ${fontClasses.heading}`}>₹1,50,000</p>
            <ul className={`space-y-2 text-gray-300 mb-6 ${fontClasses.body}`}>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Cash Prize</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Internship Opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Premium Swag Kit</span>
              </li>
            </ul>
            <button className={`w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors ${fontClasses.button}`}>
              Learn More
            </button>
          </div>
          
          {/* Second Prize Card */}
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border-t-4 border-gray-300 hover:shadow-gray-400/20 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-gray-300" />
            </div>
            <h3 className={`text-2xl font-bold text-center ${fontClasses.heading}`}>🥈 Second Prize</h3>
            <p className={`text-gray-400 text-center mb-4 ${fontClasses.body}`}>Runner Up</p>
            <p className={`text-gray-300 text-3xl font-bold mt-4 mb-6 text-center ${fontClasses.heading}`}>₹1,00,000</p>
            <ul className={`space-y-2 text-gray-300 mb-6 ${fontClasses.body}`}>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-gray-300" />
                <span>Cash Prize</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-gray-300" />
                <span>Premium Subscriptions</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-gray-300" />
                <span>Swag Kit</span>
              </li>
            </ul>
            <button className={`w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors ${fontClasses.button}`}>
              Learn More
            </button>
          </div>
          
          {/* Third Prize Card */}
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border-t-4 border-orange-400 hover:shadow-orange-400/20 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Gift className="h-12 w-12 text-orange-400" />
            </div>
            <h3 className={`text-2xl font-bold text-center ${fontClasses.heading}`}>🥉 Third Prize</h3>
            <p className={`text-gray-400 text-center mb-4 ${fontClasses.body}`}>Second Runner Up</p>
            <p className={`text-orange-400 text-3xl font-bold mt-4 mb-6 text-center ${fontClasses.heading}`}>₹75,000</p>
            <ul className={`space-y-2 text-gray-300 mb-6 ${fontClasses.body}`}>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-400" />
                <span>Cash Prize</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-400" />
                <span>Digital Subscriptions</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-400" />
                <span>Swag Items</span>
              </li>
            </ul>
            <button className={`w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-colors ${fontClasses.button}`}>
              Learn More
            </button>
          </div>
        </div>
        
        {/* Special Track Prizes */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold mb-12 text-center text-white ${fontClasses.heading}`}>
            Special Track Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specialPrizes.map((prize, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl shadow hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-purple-500/20">
                    {prize.icon}
                  </div>
                  <h3 className={`font-bold text-lg ${fontClasses.heading}`}>{prize.title}</h3>
                </div>
                <p className={`text-sm text-gray-400 mb-3 ${fontClasses.body}`}>{prize.sponsor}</p>
                <p className={`text-xl font-bold text-white mb-2 ${fontClasses.heading}`}>{prize.amount}</p>
                <p className={`text-gray-400 text-sm mb-4 ${fontClasses.body}`}>{prize.description}</p>
                <button className={`w-full py-1.5 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors ${fontClasses.button}`}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sponsored Prizes */}
        <div className="py-12 bg-gray-900/50 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={`text-3xl font-bold text-white mb-4 ${fontClasses.heading}`}>
              Sponsored Prizes
            </h2>
            <p className={`text-gray-400 ${fontClasses.body}`}>
              Our sponsors are offering additional prizes for projects using their technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            {sponsoredPrizes.map((prize, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                  <DynamicImage
                    src={prize.image}
                    alt={prize.sponsor}
                    width={40}
                    height={40}
                    className="rounded-full"
                    onError={(e) => {
                      // Fallback to a placeholder on error
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className={`font-bold text-white ${fontClasses.heading}`}>{prize.sponsor}</h3>
                  <p className={`text-sm text-gray-400 ${fontClasses.body}`}>{prize.description}</p>
                  <p className={`font-medium text-white ${fontClasses.heading}`}>{prize.prize}</p>
                  <div className="pt-2">
                    <button className={`inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors ${fontClasses.button}`}>
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

