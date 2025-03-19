import React from 'react';
import { Building2, Rocket, Zap } from 'lucide-react';
import SponsorsCard from './SponsorsCard';

function SponsorsSection() {
  const sponsors = [
    { company: "Google", color: "bg-blue-600" },
    { company: "Microsoft", color: "bg-emerald-600" },
    { company: "Amazon", color: "bg-orange-600" },
    { company: "Meta", color: "bg-indigo-600" },
    { company: "Apple", color: "bg-red-600" },
    { company: "Intel", color: "bg-cyan-600" },
    { company: "IBM", color: "bg-purple-600" },
    { company: "NVIDIA", color: "bg-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-blue-950/50 to-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-600 via-blue-950/50 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Our Sponsors</h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Partnering with industry leaders to drive innovation forward. Meet the tech giants powering our hackathon.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-gray-400">Tech Giants</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <Building2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">$250K</div>
              <div className="text-gray-400">In Prizes</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">48h</div>
              <div className="text-gray-400">Of Hacking</div>
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <SponsorsCard key={index} color={sponsor.color} company={sponsor.color}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection;
