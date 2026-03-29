
"use client";

import { Header } from "@/components/ui/header-1";
import { HeroSection } from "@/components/ui/hero-1";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import GlobeFeatureSection from "@/components/ui/globe-feature-section";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Home, Info, Cpu, Trophy } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip">
      <Header />
      <div className="grow">
        <HeroSection />
        <About />
        <Solutions />

        {/* LOGO CLOUD SECTION */}
        <section className="relative mx-auto grid max-w-5xl py-24 px-6">
          <h2 className="mb-12 text-center font-headline font-medium text-lg text-white/40 tracking-widest uppercase md:text-xl">
            Powering industrial connectivity for <span className="font-bold text-accent">industry leaders</span>
          </h2>
          <LogoCloud className="max-w-4xl mx-auto" />
        </section>

        <TestimonialsSection />
        <GlobeFeatureSection />
        <ContactForm />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
}
