import React from 'react';
import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorTracks from '@/components/sponsorTracks';
import SponsorsSection from '@/components/SponsorsSection';


export default function Home() {
  return (
    <main>
      <Landing />
      <About/>
      <SponsorTracks/>
      <SponsorsSection/>
    </main>
  );
}