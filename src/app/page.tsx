import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorTracks from '@/components/sponsorTracks';
import React from 'react'

export default function Home() {
  return (
    <main>
      <Landing />
      <About/>
      <SponsorTracks/>
    </main>
  );
}