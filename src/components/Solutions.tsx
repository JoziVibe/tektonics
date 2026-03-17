"use client";

import { BentoPricing } from "@/components/ui/bento-pricing";
import { cn } from '@/lib/utils';

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      {/* Background Effects adapted from demo */}
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(35%_80%_at_50%_0%,rgba(18,217,236,0.05),transparent)]" 
        aria-hidden="true" 
      />
      
      {/* Dots Pattern */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-20 size-full opacity-20',
          'bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]',
          'bg-[size:24px_24px]',
        )}
      />

      {/* Decorative Orbs */}
      <div
        aria-hidden
        className="absolute inset-0 isolate -z-10 opacity-30 contain-strict pointer-events-none"
      >
        <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(0,150,195,0.1)_0,transparent_80%)] absolute top-0 left-0 h-[800px] w-[400px] -translate-y-1/2 -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(18,217,236,0.08)_0,transparent_80%)] absolute top-0 left-0 h-[800px] w-[200px] [translate:5%_-50%] -rotate-45 rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading Section */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white font-headline leading-tight">
            Data-Driven Growth
          </h3>
          <p className="text-white/60 mt-4 text-base md:text-lg font-body leading-relaxed">
            Are you tired of using outdated tools and insights that hold your
            team back? We built our pricing around modern teams, so you can
            focus on what matters most.
          </p>
        </div>

        {/* Bento Grid Component */}
        <div className="mx-auto w-full max-w-6xl">
          <BentoPricing />
        </div>
      </div>
    </section>
  );
}
