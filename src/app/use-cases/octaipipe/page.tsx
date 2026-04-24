"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2, ChevronRight, Wind } from "lucide-react";
import Link from "next/link";

export default function OctaiPipeUseCasePage() {
  return (
    <>
      <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white/60">Use Cases</span>
        <ChevronRight className="size-3" />
        <span className="text-white">OctaiPipe</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
        OctaiPipe — AI-Driven Data Centre Cooling Optimisation
      </h1>
      <p className="text-lg md:text-xl text-white/60 mb-16 font-body leading-relaxed">
        Reduce energy consumption by up to 30% with collaborative, predictive AI.
      </p>

      <div className="space-y-16">
        {/* Why OctaiPipe */}
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Why OctaiPipe?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-base leading-relaxed space-y-6">
            <p>
              Cooling is the most significant energy cost in modern data centres, often accounting for 40% or more of total power consumption. Most facilities rely on fixed schedules or manual adjustments, leading to significant over-cooling and wasted energy.
            </p>
            <p>
              OctaiPipe breaks this cycle by providing:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Real-time optimisation of cooling set points",
                "Predictive energy forecasting via Digital Twin",
                "Federated learning that delivers 2x the savings of isolated AI",
                "Privacy-preserving infrastructure — data never leaves your site"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Core Capabilities */}
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-8">Core Capabilities</h2>
          <div className="space-y-6">
            {[
              { title: "Plain-English Recommendations", desc: "Actionable guidance with clear explanations. Operators receive real-time advice they can trust and implement immediately, no AI expertise required." },
              { title: "Digital Twin Simulation", desc: "Test changes safely in a virtual environment before applying them to live systems. Forecast energy savings and environmental impact with high accuracy." },
              { title: "Collaborative AI (Federated Learning)", desc: "Benefit from patterns learned across multiple sites globally without sharing raw data. Privacy-by-design ensures your competitive data remains on-premises." },
              { title: "Sustainability & Audit Reporting", desc: "Automated tracking of energy reductions and carbon savings. Provide verifiable metrics for ESG compliance and stakeholder reporting." },
              { title: "ASHRAE Standard Validation", desc: "Ensure all cooling adjustments remain within safe operating boundaries and uphold customer SLAs automatically." }
            ].map((cap, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-accent font-bold text-lg">{i + 1}.</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Use Cases */}
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-8">Key Use Cases</h2>
          <div className="grid gap-4">
            {[
              { useCase: "Cooling energy optimisation", desc: "Drastically reduce the power required to maintain thermal stability" },
              { useCase: "PUE & WUE improvement", desc: "Drive down Power and Water Usage Effectiveness metrics simultaneously" },
              { useCase: "Carbon footprint reduction", desc: "Quantify and achieve measurable sustainability targets through energy efficiency" },
              { useCase: "Thermal risk management", desc: "Detect and prevent hotspots more effectively than legacy threshold alerts" },
              { useCase: "Legacy facility modernisation", desc: "Deploy AI optimisation on existing infrastructure without major hardware replacement" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="font-bold text-white font-headline text-sm">{item.useCase}</div>
                <div className="md:col-span-2 text-white/70 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Up to 30% reduction in cooling energy costs",
              "90-day typical path to ROI",
              "Safe training via Digital Twin technology",
              "Enhanced sustainability and ESG reporting",
              "Privacy-preserving federated AI architecture"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-white/80 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/Card%20BG.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-headline">Interested in reducing your cooling costs?</h2>
            <Link href="/contact">
              <GradientButton className="mx-auto text-base px-8 py-3">
                Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
