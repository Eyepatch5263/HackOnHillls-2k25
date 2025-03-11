import React from 'react';
import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorsSection from '@/components/SponsorsSection';
import Contact from '@/components/Contact';
import SponsorTracks from '@/components/sponsorTracks';


export default function Home() {
  return (
    <main>
      <Landing />
      <About/>
      <SponsorsSection/>
      <SponsorTracks />
      <Contact />
    </main>
  );
}
