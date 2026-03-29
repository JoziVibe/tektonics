"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EnvironmentalMonitoringPage() {
  return (
    <>
      <div className="mb-6">
        <Link href="/" className="text-accent hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase font-headline">
          Use Cases
        </Link>
        <span className="text-white/40 mx-2">/</span>
        <span className="text-white/60 text-sm font-semibold tracking-wider uppercase font-headline">Environmental Monitoring</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
        Environmental Monitoring — Protecting Critical Environments Through Real-Time Insights
      </h1>
      <p className="text-lg md:text-xl text-white/60 mb-16 font-body leading-relaxed">
        Continuous monitoring and proactive alerting to prevent failures before they happen.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Why Environmental Monitoring?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-base leading-relaxed space-y-6">
            <p>
              Environmental conditions play a critical role in the performance and longevity of your infrastructure. Temperature fluctuations, humidity shifts, water ingress, and air quality issues can degrade equipment long before a visible failure occurs.
            </p>
            <p>
              Uncontrolled conditions lead to:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Equipment failure and unplanned downtime",
                "Data loss and asset damage",
                "Reduced lifespan of critical hardware",
                "Compliance violations and audit exposure"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-8">Core Capabilities</h2>
          <div className="space-y-6">
            {[
              { title: "Temperature & Humidity Monitoring", desc: "Continuously track environmental conditions to prevent overheating, condensation, and equipment damage. Set custom thresholds and receive instant alerts when conditions drift." },
              { title: "Water Leak Detection", desc: "Detect leaks in raised floors, cooling systems, and pipe infrastructure before they cause damage to equipment or operations." },
              { title: "Air Quality Monitoring", desc: "Monitor for smoke, dust levels, and gas presence — ensuring safe, compliant environments across your facilities." },
              { title: "Multi-Site Monitoring", desc: "Centralised dashboards with remote visibility and unified alerting across all locations, without needing on-site personnel." },
              { title: "Threshold-Based Alerting", desc: "Trigger alerts the moment environmental conditions exceed safe limits. Proactive intervention before a condition becomes an incident." }
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

        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-8">Key Use Cases</h2>
          <div className="grid gap-4">
            {[
              { useCase: "Data centre environmental control", desc: "Maintain optimal conditions for servers and IT equipment" },
              { useCase: "Cold chain monitoring", desc: "Ensure compliance in pharmaceutical and food storage environments" },
              { useCase: "Industrial environment monitoring", desc: "Track conditions in manufacturing and processing facilities" },
              { useCase: "Water leak prevention", desc: "Protect critical infrastructure from water ingress damage" },
              { useCase: "Remote facility monitoring", desc: "Monitor distributed sites without permanent on-site personnel" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="font-bold text-white font-headline text-sm">{item.useCase}</div>
                <div className="md:col-span-2 text-white/70 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Prevent equipment damage from undetected environmental changes",
              "Improve uptime and infrastructure reliability",
              "Ensure environmental compliance",
              "Reduce maintenance and emergency response costs",
              "Enable proactive, not reactive, operations"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-white/80 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/Card%20BG.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-headline">Protect your infrastructure before conditions become crises.</h2>
            <Link href="/contact">
              <GradientButton className="mx-auto text-base px-8 py-3">
                Talk to the team <ArrowRight className="ml-2 w-4 h-4" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
