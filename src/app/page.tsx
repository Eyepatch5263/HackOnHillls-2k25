import React from 'react';
import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorsSection from '@/components/SponsorsSection';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <About/>
      <SponsorsSection/>
      <FAQ />
    </main>
  );
}