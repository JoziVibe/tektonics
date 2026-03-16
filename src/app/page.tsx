"use client";

import { Header } from "@/components/ui/header-1";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { SuccessStories } from "@/components/SuccessStories";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Home, Info, Cpu, Trophy } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Overview', url: '#overview', icon: Info },
    { name: 'Solutions', url: '#solutions', icon: Cpu },
    { name: 'Success', url: '#success', icon: Trophy }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <Header items={navItems} />
      <div className="grow">
        <HeroSection />
        <LogosSection />
        <About />
        <Solutions />
        <SuccessStories />
        <ContactForm />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
}
