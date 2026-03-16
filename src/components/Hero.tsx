
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Activity, BarChart3 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || "https://picsum.photos/seed/tektonics-hero/1920/1080"}
          alt="Data center infrastructure"
          fill
          className="object-cover opacity-30"
          priority
          data-ai-hint="data center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Empowering African Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight font-headline animate-fade-in-up [animation-delay:200ms]">
            Advanced <span className="text-gradient">DCIM Solutions</span> for the Digital Gateway
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            Tektonics leads the way in IT infrastructure management, providing precision monitoring and strategic optimization for modern data centers across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/20">
              Explore Solutions <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg h-14 px-8 rounded-full">
              Case Studies
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:800ms]">
          <div className="glass-card p-6 rounded-2xl">
            <ShieldCheck className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-headline">Robust Security</h3>
            <p className="text-white/60">Comprehensive biometric and surveillance integration for total facility control.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <Activity className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-headline">Live Monitoring</h3>
            <p className="text-white/60">Real-time environmental and power analytics with sub-second latency.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <BarChart3 className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-headline">Strategic ROI</h3>
            <p className="text-white/60">Optimized asset tracking and resource management to maximize your investment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
