import React from 'react';
import About from '@/components/About';
import Landing from '@/components/Landing';
import SponsorsSection from '@/components/SponsorsSection';


export default function Home() {
  return (
    <main>
      <Landing />
      <About/>
      <SponsorsSection/>
    </main>
  );
}