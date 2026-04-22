"use client";

import { Header } from "@/components/ui/header-1";
import { HeroSection } from "@/components/ui/hero-1";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
// import { TestimonialsSection } from "@/components/ui/testimonials-section"; // Kept for future use
import GlobeFeatureSection from "@/components/ui/globe-feature-section";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { logos } from "@/components/ui/demo";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip">
      <Header />
      <div className="grow">
        <HeroSection />
        <About />
        <Services />

        {/* LOGO CLOUD SECTION */}
        <section className="relative w-full bg-white py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Network</h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#02264b] font-headline leading-tight">
                The Partners We Trust, <br /><span className="text-gradient">The Clients We Empower</span>
              </h3>
              <p className="text-slate-500 mt-4 text-base md:text-lg font-body leading-relaxed">
                We integrate world-class hardware and software from global technology leaders to deliver resilient, high-performance infrastructure solutions for enterprises across the continent.
              </p>
            </div>
            
            <div className="mx-auto my-8 h-px max-w-xl bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
    
            <LogoCloud logos={logos} className="w-full max-w-[100vw] [&_img]:opacity-80 hover:[&_img]:opacity-100" />
    
            <div className="mt-8 h-px max-w-xl mx-auto bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </section>

        {/* <TestimonialsSection /> */}
        <FaqSection />
        <GlobeFeatureSection />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
}
