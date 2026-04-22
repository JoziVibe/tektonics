"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DCIMUseCasePage() {
  return (
    <>
      <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white/60">Use Cases</span>
        <ChevronRight className="size-3" />
        <span className="text-white">DCIM</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
        DCIM — Complete Visibility & Control of Your Infrastructure
      </h1>
      <p className="text-lg md:text-xl text-white/60 mb-16 font-body leading-relaxed">
        Data-driven management for every component of your data centre.
      </p>

      <div className="space-y-16">
        {/* Why DCIM */}
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Why DCIM?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-base leading-relaxed space-y-6">
            <p>
              Managing modern infrastructure requires visibility across power systems, cooling, environmental conditions, and IT equipment simultaneously. Without a unified view, teams are forced into reactive firefighting — missing the inefficiencies and risks that compound over time.
            </p>
            <p>
              DCIM enables data-driven decision-making and operational efficiency across your entire facility. Unmanaged infrastructure leads to:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Undetected power and cooling inefficiencies",
                "Poor resource utilisation and wasted capacity",
                "Slow incident response and longer downtime",
                "Inability to plan for growth with accurate data"
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
              { title: "Real-Time Infrastructure Monitoring", desc: "Monitor UPS systems, PDUs, generators, and cooling systems from a centralised platform. Get a live view of your entire facility — not just snapshots." },
              { title: "Capacity Planning & Optimisation", desc: "Track power usage, rack space utilisation, and cooling efficiency in real time. Plan for growth confidently and eliminate guesswork around available capacity." },
              { title: "Alarm & Incident Management", desc: "Centralised alert handling with faster root cause analysis and improved response workflows. Reduce the time from detection to resolution." },
              { title: "Energy Management", desc: "Analyse and optimise energy consumption across the facility. Reduce operational costs and improve your sustainability profile." },
              { title: "Multi-Site Management", desc: "Manage multiple facilities from a single platform with unified dashboards, centralised reporting, and remote control capabilities." }
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
              { useCase: "Data centre operations management", desc: "Monitor and manage all infrastructure components in real time" },
              { useCase: "Energy optimisation", desc: "Reduce costs through efficient, data-led energy usage" },
              { useCase: "Incident management", desc: "Detect and resolve issues faster with centralised alerts" },
              { useCase: "Capacity planning", desc: "Prepare for expansion with accurate utilisation data" },
              { useCase: "Edge & multi-site management", desc: "Manage distributed infrastructure from a single platform" }
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
              "Full infrastructure visibility across all systems",
              "Improved operational efficiency",
              "Reduced downtime and faster incident response",
              "Better resource utilisation and capacity control",
              "Scalable management across single and multi-site environments"
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-headline">Ready to take control of your data centre?</h2>
            <Link href="/contact">
              <GradientButton className="mx-auto text-base px-8 py-3">
                Get in touch <ArrowRight className="ml-2 w-4 h-4" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
