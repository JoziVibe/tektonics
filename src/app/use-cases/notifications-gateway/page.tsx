"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NotificationsGatewayPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white/60">Use Cases</span>
        <ChevronRight className="size-3" />
        <span className="text-white">Notifications Gateway</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
        Notifications Gateway — Real-Time Alert Delivery Across Critical Systems
      </h1>
      <p className="text-lg md:text-xl text-white/60 mb-16 font-body leading-relaxed">
        Instant, multi-channel alert delivery — so the right people always know first.
      </p>

      <div className="space-y-16">
        {/* Why Notifications Gateway */}
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Why Notifications Gateway?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-base leading-relaxed space-y-6">
            <p>
              Most monitoring systems generate alerts — but deliver them via email dashboards that teams check manually. In environments where downtime is costly, a delayed alert is as damaging as no alert at all.
            </p>
            <p>
              The Notifications Gateway closes this gap:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Alerts are buried in inboxes and missed after hours",
                "No confirmation that an alert was actually received",
                "Remote and distributed sites lack reliable real-time visibility",
                "Manual monitoring creates single points of failure"
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
              { title: "Multi-Channel Alert Delivery", desc: "Deliver alerts via WhatsApp (primary), SMS (automatic failover), email, and API-based integrations. Alerts reach their destination even during platform or network disruptions." },
              { title: "Email-to-Alert Conversion", desc: "Convert incoming alarm emails from Gmail, Office 365, and SMTP systems into instant real-time notifications. No manual email monitoring required." },
              { title: "Intelligent Alert Routing", desc: "Route alerts based on severity level, device or system type, location, and time-based rules. The right team receives the right alert — every time." },
              { title: "Escalation & Acknowledgement Workflows", desc: "Automatically escalate unresolved alerts. Track acknowledgement and response times. Notify supervisors when critical alerts go unactioned. Full accountability built in." },
              { title: "Alert Aggregation & Normalisation", desc: "Consolidate alerts from SNMP traps, monitoring tools, APIs, and webhooks into a single, unified stream. Reduce noise and surface only what matters." }
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
              { useCase: "Critical infrastructure alerting", desc: "Instant notifications for power failures, outages, and equipment faults" },
              { useCase: "Operations & maintenance alerts", desc: "Notify technicians of faults in HVAC, generators, and facility systems" },
              { useCase: "Network monitoring alerts", desc: "Convert SNMP traps into real-time alerts for IT and network teams" },
              { useCase: "Incident escalation management", desc: "Automatically escalate unresolved incidents to management" },
              { useCase: "Remote site alerting", desc: "Ensure alerts from unmanned or distributed sites are instantly delivered" }
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
              "Immediate, verified alert delivery across all channels",
              "Elimination of missed or buried alerts",
              "Intelligent routing reduces noise and alert fatigue",
              "Full escalation and acknowledgement accountability",
              "Works reliably in remote and low-connectivity environments"
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-headline">Don't let a delayed alert become a crisis.</h2>
            <Link href="/contact">
              <GradientButton className="mx-auto text-base px-8 py-3">
                See how it works <ArrowRight className="ml-2 w-4 h-4" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
