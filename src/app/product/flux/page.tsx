"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, ArrowDown, Inbox, CloudOff, Target, BarChart3, 
  Smartphone, Activity, Zap, Factory, Server, Rss, Layers, CheckCircle2,
  ShieldCheck, Clock, Share2, Network, MessageSquare, AlertTriangle, MessageCircle,
  FileText, Search, Wrench, Cloud, Rocket, LucideIcon, Map, Thermometer, Database,
  TrendingUp, Scaling, MousePointer2, Settings
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";
import { Home, Info, Cpu, Globe } from "lucide-react";

import StackingCard, { ProjectData } from "@/components/ui/stacking-card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { LayerBadge } from "@/components/ui/layer-badge";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const fluxCapabilities: ProjectData[] = [
  {
    title: "Environmental Risk Detection",
    description: "Stay ahead of environmental risks. Temperature spikes, humidity shifts, and power instability build quietly — Flux catches them early.",
    link: "/assets/Flux/Environmental Risk Detection.png",
    color: "#0a0f1c",
  },
  {
    title: "Multi-Site Visibility",
    description: "See every site without being there. Monitor all locations from a single interface, compare performance, and identify anomalies instantly.",
    link: "/assets/Flux/Multi-Site Visibility.png",
    color: "#06102b",
  },
  {
    title: "Actionable Dashboards",
    description: "Turn data into action. Clean, intuitive dashboards with site-based context and clear indicators of what actually needs attention.",
    link: "/assets/Flux/Actionable Dashboards.png",
    color: "#081333",
  },
  {
    title: "Fast Deployment",
    description: "Deploy without the usual complexity. Lightweight architecture, quick setup, minimal disruption — built for remote sites.",
    link: "/assets/Flux/Fast Deployment.png",
    color: "#0a1945",
  },
  {
    title: "Frictionless Scaling",
    description: "Scale without friction. Add new sites, maintain consistent monitoring standards, and centralise visibility as your footprint grows.",
    link: "/assets/Flux/Frictionless Scaling.png",
    color: "#0b1e4f",
  }
];

export default function FluxPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-accent/30 overflow-x-clip">
      <Header stickyMode="immediate" />
      
      <div className="grow">
        
        {/* SECTION 1: HERO */}
        <section className="relative w-full overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed mix-blend-luminosity opacity-65"
            style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
          />
          {/* Subtle Color Overlay */}
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

          {/* Top Shades */}
          <div aria-hidden="true" className="absolute inset-0 isolate hidden overflow-hidden lg:block pointer-events-none">
            <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(0,250,223,0.1),transparent)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto w-full">
            <a className={cn(
                  "group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-2xl backdrop-blur-md",
                  "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
                )} 
                href="#"
            >
              <Rocket className="size-3.5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Tektonics Flux</span>
              <span className="block h-4 border-l border-white/20" />
              <ArrowDown className="size-3.5 text-white/40 duration-150 ease-out group-hover:translate-y-1" />
            </a>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              Know What's Happening<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Across Every Site —</span><br />
              <span className="text-accent underline decoration-accent/30 decoration-thickness-2 underline-offset-8">Before It Becomes a Problem.</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              Tektonics Flux gives you real-time environmental visibility across your server rooms and distributed infrastructure — so you can detect risks early, respond faster, and operate with complete confidence.
            </p>

            <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-4 pt-4 fill-mode-backwards delay-300 duration-500 ease-out">
              <GradientButton className="rounded-full px-8 py-4 text-base h-auto hover:scale-105 transition-transform">
                Request a Demo <ArrowRight className="ml-2 size-5" />
              </GradientButton>
              <Link href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all font-headline tracking-wide text-sm hover:scale-105">
                See How It Works
              </Link>
            </div>

            <p className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 pt-4 delay-400 duration-500 ease-out">
              Built for distributed infrastructure · Trusted by operations teams · Designed for real-world conditions
            </p>
          </div>
        </section>

        {/* SECTION 2: VALUE PROP STRIP */}
        <section className="bg-white/5 py-12 border-b border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-10">
              No blind spots. No delayed reactions. Just clear, continuous insight.
            </h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { icon: Map, text: "Monitor every site in real time — from a single centralised platform" },
                { icon: Thermometer, text: "Detect issues before they become outages — temperature, power, environment" },
                { icon: Globe, text: "Built for real-world conditions — not ideal lab environments" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <item.icon className="size-8 text-accent/60" strokeWidth={1.5} />
                  <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-12 flex-wrap">
              {["No heavy setup", "No enterprise complexity", "No long deployment cycles"].map((tag, i) => (
                <span key={i} className="px-4 py-1 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM STATEMENT */}
        <section className="py-24 md:py-32 relative bg-background border-b border-white/5">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-tight">
                If You Manage Multiple Sites,<br/>You Already Know the Challenge.
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              {/* Card 1: The Reality */}
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="No consistent visibility across locations."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <ul className="space-y-4 pt-2">
                    {[
                      "Environmental issues go unnoticed until failure",
                      "Teams rely on manual checks and delayed alerts",
                      "Tools are either too basic — or too complex to deploy",
                      "Historical trends are buried in disjointed data"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </ProblemFeatureCard>

              {/* Card 2: The Consequence */}
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={CloudOff}
                    title="The Consequence"
                    description="Response becomes urgent and reactive."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <ul className="space-y-4 pt-2">
                    {[
                      "Downtime, damage, and disruption happen without warning",
                      "Teams arrive on site with the wrong tools",
                      "Equipment degrades quietly until catastrophic failure",
                      "SLAs are breached before anyone knows there's a problem"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </ProblemFeatureCard>

              {/* Card 3: Boundary / Outcome */}
              <ProblemFeatureCard className="lg:col-span-2 p-8 md:p-12 bg-white/[0.02] overflow-hidden">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-6">From Uncertainty to Technical Control</h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed">
                    Tektonics Flux bridges the visibility gap, delivering real-time environmental context so you can stop reacting to problems and start preventing them entirely.
                  </p>
                </div>
              </ProblemFeatureCard>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE FLUX DIFFERENCE */}
        <section className="py-24 md:py-32 bg-background border-b border-white/5">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="max-w-3xl mx-auto mb-20 space-y-6">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Flux Changes That.</h2>
              <p className="text-lg text-white/60 font-body">
                Instead of reacting to problems, you prevent them. Instead of guessing, you know exactly what's happening.
              </p>
            </div>

            {/* Transformation Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
              <div className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 text-white/40 font-bold tracking-[0.3em] uppercase">Uncertainty</div>
              <ArrowRight className="size-6 text-accent/50 hidden md:block" />
              <ArrowDown className="size-6 text-accent/50 md:hidden" />
              <div className="px-10 py-4 rounded-xl border border-accent/30 bg-accent/10 text-accent font-bold tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(0,250,223,0.1)]">Visibility</div>
              <ArrowRight className="size-6 text-white/20 hidden md:block" />
              <ArrowDown className="size-6 text-white/20 md:hidden" />
              <div className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 text-white/40 font-bold tracking-[0.3em] uppercase">Control</div>
            </div>

            <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "Fewer surprises", description: "Catch technical deviations before they trigger critical site failures." },
                { icon: Clock, title: "Faster response times", description: "Direct insights allow teams to move instantly with the right tools." },
                { icon: CheckCircle2, title: "Better operational decisions", description: "Data-driven site comparisons reveal where to invest and optimise." },
                { icon: Target, title: "Greater confidence", description: "Know your distributed infrastructure is stable across all locations." },
                { icon: BarChart3, title: "Reduced downtime", description: "Prevent environmental outages that take critical networks offline." },
                { icon: Activity, title: "Extended equipment lifespan", description: "Operate gear within ideal ranges to prevent premature wear." }
              ].map((item, i) => (
                <FeatureCard key={i} feature={item} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CORE CAPABILITIES */}
        <section id="capabilities" className="py-32 relative border-b border-white/10">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Built for Operations</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">Lightweight architecture, industrial reliability, and site-first visibility.</p>
            </div>
            
            <StackingCard projects={fluxCapabilities} />
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS */}
        <section id="how-it-works" className="py-32 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">From Monitoring to Action in Four Steps</h2>
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6">

              {/* Step 1 */}
              <div className="flex-1 bg-card/40 border border-white/10 p-6 rounded-2xl text-center relative pt-10 hover:border-accent/20 transition-colors">
                <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Monitor</LayerBadge>
                <p className="text-white/40 text-xs leading-relaxed py-4">Flux continuously collects environmental data across all your sites.</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center text-white/20 shrink-0">
                <ArrowRight className="size-8" />
              </div>
              <div className="md:hidden flex justify-center py-2 text-white/20 shrink-0">
                <ArrowRight className="size-6 rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 bg-accent/5 border border-accent/20 p-6 rounded-2xl text-center relative pt-10 shadow-[0_0_30px_rgba(0,250,223,0.05)] hover:border-accent/40 transition-colors">
                <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Understand</LayerBadge>
                <p className="text-white/40 text-xs leading-relaxed py-4">Data is structured into clear, site-based visibility for instant interpretation.</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center text-white/20 shrink-0">
                <ArrowRight className="size-8" />
              </div>
              <div className="md:hidden flex justify-center py-2 text-white/20 shrink-0">
                <ArrowRight className="size-6 rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 bg-card/40 border border-white/10 p-6 rounded-2xl text-center relative pt-10 hover:border-accent/20 transition-colors">
                <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Respond</LayerBadge>
                <p className="text-white/40 text-xs leading-relaxed py-4">Alerts are triggered and escalated through Notifications Gateway.</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center text-white/20 shrink-0">
                <ArrowRight className="size-8" />
              </div>
              <div className="md:hidden flex justify-center py-2 text-white/20 shrink-0">
                <ArrowRight className="size-6 rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="flex-1 bg-card/40 border border-white/10 p-6 rounded-2xl text-center relative pt-10 hover:border-accent/20 transition-colors">
                <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Improve</LayerBadge>
                <p className="text-white/40 text-xs leading-relaxed py-4">Use historical data to optimise operations and reduce future risk.</p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: PRODUCT INTEGRATION */}
        <section className="py-32 relative overflow-hidden bg-background border-y border-white/5">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-1" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                    Synergistic Operations
                  </div>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
                    Built for Real Operations — <span className="text-white/40">Not Isolated Tools</span>
                  </h2>
                </div>
                
                <p className="text-xl text-white/50 leading-relaxed font-body">
                  Flux doesn't sit alone — it fits into your operational ecosystem. When paired with the Tektonics Notifications Gateway, Flux becomes part of a complete, seamless pipeline — from the moment an environmental issue is detected, to the moment the right person acts on it.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-4">
                  {[
                    "Flux detects anomalies",
                    "Flux contextualises data",
                    "Gateway routes alerts",
                    "Team initiates response"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                        <CheckCircle2 className="size-3 text-accent" />
                      </div>
                      <span className="text-white/80 font-medium text-sm tracking-wide">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-end Diagram Container */}
              <div className="relative group">
                {/* Decorative outer frame */}
                <div className="absolute -inset-4 rounded-[40px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl -z-1" />
                
                <div className="relative p-12 bg-black/40 border border-white/10 rounded-[32px] shadow-2xl flex flex-col items-center overflow-hidden">
                  <p className="text-[10px] font-bold tracking-[0.4em] text-accent/60 uppercase mb-12 relative z-10">
                    Integration Pipeline
                  </p>

                  <div className="flex flex-col items-center gap-4 w-full max-w-sm relative z-10">
                    <IntegrationCard label="Detection" active={false} />
                    <ConnectionLine />
                    <IntegrationCard label="Context" active={false} />
                    <ConnectionLine />
                    <IntegrationCard label="Alert" active={true} icon={Activity} />
                    <ConnectionLine />
                    <IntegrationCard label="Response" active={false} />
                  </div>

                  {/* Glass highlight */}
                  <div className="absolute -top-24 -right-24 size-48 bg-accent/10 blur-3xl rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY TEAMS CHOOSE FLUX */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Built for the Teams Responsible for Uptime.</h2>
            </div>
            
            <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: Globe, title: "Built for African Infrastructure", description: "Designed for power variability, remote sites, budget constraints, and limited on-site resources." },
                { icon: MousePointer2, title: "Designed for Operators", description: "Simple interface, clear insights, minimal noise — built for the people responsible for uptime." },
                { icon: Wrench, title: "Grounded in Real Experience", description: "Developed from hands-on work in server rooms, facilities environments, and distributed infrastructure." }
              ].map((item, i) => (
                <FeatureCard key={i} feature={item} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: OUTCOME SUMMARY */}
        <section className="bg-background py-24 border-y border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">From Uncertainty to Control.</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
              With Tektonics Flux, you gain visibility across every site, early detection of environmental risks, faster response, and complete confidence in your infrastructure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {["Real-time visibility", "Early risk detection", "Faster response", "Operational confidence"].map((pill, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/5 text-white font-bold text-sm tracking-wide">
                  <CheckCircle2 className="size-5 text-accent" />
                  {pill}
                </div>
              ))}
            </div>

            <p className="text-2xl md:text-3xl italic font-headline font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
              "You stop reacting to problems — and start preventing them entirely."
            </p>
          </div>
        </section>

        {/* SECTION 10: CTA */}
        <section className="pt-24 pb-32 border-t border-white/10 relative overflow-hidden">
           {/* Parallax Background */}
           <div 
             className="absolute inset-0 bg-cover bg-center bg-fixed opacity-65 mix-blend-luminosity"
             style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
           />
           {/* Deep Navy Overlays */}
           <div className="absolute inset-0 bg-[#020617]/80" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
           
           {/* Light accent glow */}
           <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

           <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-white mb-6">
               Ready to See Every Site —<br />
               In Real Time?
             </h2>
             <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
               No heavy setup. No enterprise complexity. Just clear, continuous insight into the environments that keep your business running.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/#contact">
                  <button className="bg-white text-primary font-bold font-headline tracking-wide px-9 py-4 rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Get In Touch
                  </button>
                </Link>
                <a href="mailto:info@tektonics.africa" className="text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">
                  Email: info@tektonics.africa
                </a>
             </div>

             <p className="mt-16 text-xs text-white/40 tracking-widest uppercase font-bold">
               Clear, continuous visibility — across every site.
             </p>
           </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

// --- Local Blueprint Components ---

interface ProblemFeatureCardProps {
    children: React.ReactNode
    className?: string
}

const ProblemFeatureCard = ({ children, className }: ProblemFeatureCardProps) => (
    <div className={cn('group relative rounded-none border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.04]', className)}>
        <ProblemCardDecorator />
        {children}
    </div>
)

const ProblemCardDecorator = () => (
    <>
        <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-accent/40"></span>
        <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-accent/40"></span>
        <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-accent/40"></span>
        <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-accent/40"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-2">
        <span className="text-accent flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-4 text-xl md:text-2xl font-headline font-bold text-white tracking-tight">{description}</p>
    </div>
)

// --- Integration Pipeline Components ---

interface IntegrationCardProps {
  label: string;
  active?: boolean;
  icon?: LucideIcon;
}

const IntegrationCard = ({ label, active, icon: Icon }: IntegrationCardProps) => (
  <div className={cn(
    "w-full px-8 py-5 rounded-2xl border transition-all duration-500 flex items-center justify-center gap-3 relative",
    active 
      ? "bg-accent/10 border-accent/40 shadow-[0_0_40px_rgba(0,250,223,0.15)] scale-105 z-20" 
      : "bg-white/[0.03] border-white/10 text-white/40 grayscale opacity-80"
  )}>
    {active && (
      <div className="absolute inset-0 bg-accent/10 blur-[15px] -z-1" />
    )}
    {Icon && <Icon className={cn("size-5", active ? "text-accent" : "text-white/20")} />}
    <span className={cn(
      "font-headline font-bold text-lg tracking-wide uppercase",
      active ? "text-white" : "text-white/30"
    )}>
      {label}
    </span>
  </div>
);

const ConnectionLine = () => (
  <div className="h-8 w-px bg-gradient-to-b from-white/20 via-white/5 to-white/20 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-white/20" />
    <ArrowDown className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-3 text-white/20" />
  </div>
);
