"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TektonicsFluxPage() {
  return (
    <>
      <div className="mb-6">
        <Link href="/" className="text-accent hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase font-headline">
          Use Cases
        </Link>
        <span className="text-white/40 mx-2">/</span>
        <span className="text-white/60 text-sm font-semibold tracking-wider uppercase font-headline">Tektonics Flux</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline mb-6 leading-tight">
        Tektonics Flux — Intelligent Monitoring, Analytics & Incident Management for Critical Infrastructure
      </h1>
      <p className="text-xl md:text-2xl text-white/60 mb-16 font-body leading-relaxed">
        From raw data to resolved incidents — a complete operational intelligence platform.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-white font-headline mb-6">Why Tektonics Flux?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-lg leading-relaxed space-y-6">
            <p>
              Modern infrastructure environments generate massive volumes of data — but most organisations lack the tools to turn that data into clear actions and measurable outcomes. Teams are left interpreting raw metrics manually, missing patterns, and logging incidents by hand.
            </p>
            <p>
              Tektonics Flux bridges this gap:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Data volumes are high but actionable insight is low",
                "Incidents are detected but not tracked through to resolution",
                "Manual ticket logging creates gaps in accountability",
                "Multi-site visibility is fragmented across disconnected tools"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white font-headline mb-8">Core Capabilities</h2>
          <div className="space-y-6">
            {[
              { title: "MQTT-Based Data Ingestion", desc: "Built around a lightweight, scalable MQTT architecture — ingest data from IoT devices, sensors, and gateways in real time. Supports high-frequency, low-latency data streams from distributed and remote environments." },
              { title: "Intelligent Data Analysis & Event Processing", desc: "Apply rules, thresholds, and logic to incoming data. Detect anomalies, correlate events across multiple sources, and surface only relevant, actionable events to operations teams." },
              { title: "Automated Ticket Creation & Incident Management", desc: "Automatically generate tickets from events and alerts. Assign severity levels, track ownership, and update status in real time. Every issue is captured, tracked, and resolved — not just detected." },
              { title: "Resolution Tracking & Workflow Management", desc: "Monitor ticket progress from creation to closure. Track response and resolution times, enable team collaboration, and maintain complete audit trails of all incidents." },
              { title: "Real-Time Monitoring & Dashboards", desc: "Live dashboards with system status, device-level and site-level monitoring, historical visualisation, and multi-site views. Complete situational awareness across your entire infrastructure." },
              { title: "Reporting & Analytics Engine", desc: "Generate automated daily, weekly, and monthly reports. Analyse incident trends, track SLA performance, and turn operational data into business intelligence." }
            ].map((cap, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-accent font-bold text-xl">{i + 1}.</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-white/60 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white font-headline mb-8">Key Use Cases</h2>
          <div className="grid gap-4">
            {[
              { useCase: "Multi-site infrastructure monitoring", desc: "Centralised visibility across distributed facilities" },
              { useCase: "Incident lifecycle management", desc: "From detection to resolution — tracked and documented" },
              { useCase: "Operational analytics", desc: "Trend analysis, SLA reporting, and performance benchmarking" },
              { useCase: "Edge device integration", desc: "MQTT-based ingestion from IoT sensors and gateways" },
              { useCase: "Compliance & audit reporting", desc: "Automated reports and complete event audit trails" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="font-bold text-white font-headline">{item.useCase}</div>
                <div className="md:col-span-2 text-white/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white font-headline mb-6">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Real-time visibility across all sites and systems",
              "Automated incident creation — no manual logging",
              "Full lifecycle tracking from alert to resolution",
              "Powerful analytics and trend reporting",
              "Scales across single facilities and distributed networks"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/Card%20BG.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-headline">See what your infrastructure is really telling you.</h2>
            <Link href="/product/flux">
              <GradientButton className="mx-auto text-lg px-8 py-4">
                Request a demo <ArrowRight className="ml-2 w-5 h-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}