"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DryContactMonitoringPage() {
  return (
    <>
      <div className="mb-6">
        <Link href="/" className="text-accent hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase font-headline">
          Use Cases
        </Link>
        <span className="text-white/40 mx-2">/</span>
        <span className="text-white/60 text-sm font-semibold tracking-wider uppercase font-headline">Dry Contact Monitoring</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
        Dry Contact Monitoring — Simple, Reliable Monitoring for Critical Equipment
      </h1>
      <p className="text-lg md:text-xl text-white/60 mb-16 font-body leading-relaxed">
        Cost-effective status monitoring for any system that exposes relay outputs.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Why Dry Contact Monitoring?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-base leading-relaxed space-y-6">
            <p>
              Many critical systems — UPS units, generators, alarm panels, and access control systems — still rely on dry contacts for status signalling. These systems don't expose digital interfaces or APIs, making them invisible to modern monitoring platforms without the right integration layer.
            </p>
            <p>
              Dry contact monitoring solves this by enabling:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Real-time monitoring without complex integration",
                "Rapid deployment at remote or legacy sites",
                "High reliability with minimal supporting infrastructure",
                "Visibility into equipment that would otherwise go unmonitored"
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
              { title: "Real-Time Status Detection", desc: "Monitor binary signals including power failure and restore events, generator running status, alarm triggers, and equipment fault conditions — all in real time." },
              { title: "Seamless Integration with Infrastructure", desc: "Connect to UPS systems, Automatic Transfer Switches (ATS), generators, alarm panels, and access control systems with minimal configuration." },
              { title: "Remote Monitoring Enablement", desc: "Deploy at remote or unmanned sites to provide real-time visibility, instant alerts, and centralised monitoring without on-site personnel." },
              { title: "Event Logging & Reporting", desc: "Capture all events with timestamps for incident analysis, compliance reporting, and maintenance tracking. A complete, verifiable record of every state change." },
              { title: "Low-Complexity Deployment", desc: "Minimal configuration required. Works in environments with limited connectivity. Highly reliable and robust — built to operate in challenging field conditions." }
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
              { useCase: "Power infrastructure monitoring", desc: "Track power failures, generator activity, and ATS switching events" },
              { useCase: "Security & intrusion detection", desc: "Monitor door contacts, alarms, and perimeter breaches" },
              { useCase: "Equipment fault monitoring", desc: "Detect faults in HVAC, pumps, and mechanical systems" },
              { useCase: "Remote site monitoring", desc: "Monitor telecom towers, substations, and unmanned facilities" },
              { useCase: "Compliance & audit logging", desc: "Maintain records of all events for audits and reporting" }
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
              "Cost-effective monitoring for any budget",
              "High reliability with minimal infrastructure overhead",
              "Fast and easy deployment — even at remote sites",
              "Full compatibility with legacy and non-digital systems",
              "Immediate visibility into critical equipment states"
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-headline">Monitor what others miss.</h2>
            <Link href="/contact">
              <GradientButton className="mx-auto text-base px-8 py-3">
                Speak to the team <ArrowRight className="ml-2 w-4 h-4" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
