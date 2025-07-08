'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic imports for client components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
} 