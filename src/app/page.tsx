"use client";

import { Header } from "@/components/ui/header-1";
import { HeroSection } from "@/components/ui/hero-1";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
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
        <Solutions />

        {/* LOGO CLOUD SECTION */}
        <section className="relative w-full bg-white py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-center font-medium font-headline text-slate-900 text-xl tracking-tight md:text-3xl">
              <span className="text-slate-500">Trusted by experts.</span>
              <br />
              <span className="font-semibold">Used by the leaders.</span>
            </h2>
            <div className="mx-auto my-5 h-px max-w-xl bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
    
            <LogoCloud logos={logos} className="[&_img]:opacity-80 hover:[&_img]:opacity-100" />
    
            <div className="mt-5 h-px bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </section>

        <TestimonialsSection />
        <FaqSection />
        <GlobeFeatureSection />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
}
