import React from 'react';
import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorsSection from '@/components/SponsorsSection';
import PrizePool from '@/components/PrizePool';


export default function Home() {
  return (
    <main>
      <Landing />
      <About/>
      <PrizePool/>
      <SponsorsSection/>
    </main>
  );
}