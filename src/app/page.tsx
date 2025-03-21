import React from 'react';
import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorTracks from '@/components/sponsorTracks';
export default function Home() {
  return (
    <main>
      <Landing />
      <About/>
      <SponsorTracks/>
    </main>
  );
}