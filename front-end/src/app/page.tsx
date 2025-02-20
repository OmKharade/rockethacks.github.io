// src/app/page.tsx
'use client';
import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import Hero from '@/components/hero/hero';
import About from '@/components/about/About';
import FAQ from '@/components/faq/Faq';
import Footer from "@/components/ui/footer";
import AnimatedRocket from '@/components/rocket/AnimatedRocket';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#15397F] to-[#102b5f] relative overflow-x-hidden">
      {/* Add yellow tint to background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4e26c]/5 via-transparent to-transparent"></div>
      
      <AnimatedRocket />
      <Navbar />
      <Hero /> 
      <About />
      <FAQ />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-350px] left-[-350px] w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-[-350px] right-[-350px] w-96 h-96 rounded-full bg-[#f4e26c]/5 blur-3xl"></div>
      </div>
      <Footer />
    </div>
  );
}