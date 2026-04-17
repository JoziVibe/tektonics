"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { GradientButton } from "./gradient-button";
import { Globe } from "./cobe-globe";

const markers = [
  { id: "lagos", location: [6.5244, 3.3792] as [number, number], label: "Lagos" },
  { id: "nairobi", location: [-1.2921, 36.8219] as [number, number], label: "Nairobi" },
  { id: "capetown", location: [-33.9249, 18.4241] as [number, number], label: "Cape Town" },
  { id: "johannesburg", location: [-26.2041, 28.0473] as [number, number], label: "Johannesburg" },
  { id: "cairo", location: [30.0444, 31.2357] as [number, number], label: "Cairo" },
]

export default function GlobeFeatureSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24">
      <div className="relative w-full mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,150,195,0.15)] px-6 py-16 md:px-16 md:py-24 group">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021f4a] via-[#02112e] to-[#0096c3]/20 -z-10 transition-colors duration-500 group-hover:to-[#0096c3]/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/30 blur-[100px] rounded-full pointer-events-none -z-10 -translate-x-1/4 translate-y-1/3" />

        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row relative z-10 h-full">
          <div className="max-w-xl text-left my-auto">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-headline leading-tight">
              Africa's Infrastructure <span className="text-accent">Runs on Expertise</span>.
              <span className="block mt-6 text-lg md:text-xl font-normal text-white/60 font-body leading-relaxed">
                From Pretoria to Nairobi, businesses across the continent trust Tektonics to keep their data centres running at peak performance. Join them.
              </span>
            </h2>
            <Link href="/contact" className="inline-block mt-4">
              <GradientButton className="rounded-full px-8 py-3 text-sm h-auto hover:scale-105 transition-transform">
                Contact Us <ArrowRight className="ml-2 size-4" />
              </GradientButton>
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full max-w-lg flex items-center justify-center my-auto overflow-visible pointer-events-none">
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[560px] md:h-[560px] pointer-events-auto">
              <Globe 
                markers={markers}
                baseColor={[0.0078, 0.5882, 0.7647]}
                markerColor={[0.0706, 0.8510, 0.9255]}
                glowColor={[0.0078, 0.5882, 0.7647]}
                dark={1}
                mapBrightness={6}
                markerSize={0.08}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
