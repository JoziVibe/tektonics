"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NetXMSPage() {
  return (
    <>
      <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white/60">Use Cases</span>
        <ChevronRight className="size-3" />
        <span className="text-white">NetXMS</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-6 leading-tight">
        NetXMS — Enterprise Monitoring, Event Management & Infrastructure Visibility
      </h1>
      <p className="text-lg md:text-xl text-white/60 mb-16 font-body leading-relaxed">
        End-to-end visibility across networks, servers, applications, and infrastructure — from a single platform.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white font-headline mb-6">Why NetXMS?</h2>
          <div className="prose prose-invert max-w-none text-white/70 font-body text-base leading-relaxed space-y-6">
            <p>
              Modern IT and infrastructure environments are complex and distributed, making it difficult to maintain consistent visibility and respond to issues quickly. Fragmented tools mean events get missed, correlation is manual, and response is always reactive.
            </p>
            <p>
              NetXMS addresses this by providing:
            </p>
            <ul className="grid gap-4 mt-6">
              {[
                "Unified monitoring across IT and operational systems",
                "Centralised event processing and correlation",
                "Real-time performance tracking and alerting",
                "Scalable architecture for multi-site deployments"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/Card%20BG.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-headline">Take control of your entire infrastructure stack.</h2>
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
