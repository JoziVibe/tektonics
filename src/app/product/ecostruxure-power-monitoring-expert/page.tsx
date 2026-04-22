"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowDown, Activity, CheckCircle2, ShieldCheck, Clock, Map, Thermometer, Globe, CloudOff, AlertTriangle, Target, Search, BarChart3,
  Server, Factory, Video, Lock, Radio, Database, Users, Code, Layers, FileText, Smartphone, TabletSmartphone, Network, Zap, LucideIcon, Gauge,
  ChevronRight
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

import { LayerBadge } from "@/components/ui/layer-badge";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function PowerMonitoringExpertPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-accent/30 overflow-x-clip">
      <Header stickyMode="immediate" />
      
      <div className="grow">
        
        {/* SECTION 1: HERO */}
        <section className="relative w-full overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed mix-blend-luminosity opacity-65"
            style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

          <div aria-hidden="true" className="absolute inset-0 isolate hidden overflow-hidden lg:block pointer-events-none">
            <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(0,250,223,0.1),transparent)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-4 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-500 duration-500 ease-out">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="size-3" />
              <span className="text-white/60">Products</span>
              <ChevronRight className="size-3" />
              <span className="text-white">Power Monitoring Expert</span>
            </div>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              EcoStruxure<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Power Monitoring Expert</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              Total Visibility Into Your Power Distribution — From Service Entrance to Rack. An integrated power and energy management platform that maximises uptime, optimises energy consumption, and ensures electrical network reliability across critical facilities.
            </p>

            <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-4 pt-4 fill-mode-backwards delay-300 duration-500 ease-out">
              <Link href="/contact">
                <GradientButton className="rounded-full px-8 py-4 text-base h-auto hover:scale-105 transition-transform">
                  Request a Demo <ArrowRight className="ml-2 size-5" />
                </GradientButton>
              </Link>
              <Link href="#capabilities" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all font-headline tracking-wide text-sm hover:scale-105">
                View Capabilities
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: VALUE PROP STRIP */}
        <section className="bg-white/5 py-12 border-b border-white/5">
          <div className="container mx-auto px-6 text-center">
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { icon: Activity, text: "Real-time visibility across the entire electrical distribution network" },
                { icon: Zap, text: "Proactive detection of power quality issues before they cause damage" },
                { icon: BarChart3, text: "Granular energy data to drive efficiency improvements and reduce costs" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <item.icon className="size-8 text-accent/60" strokeWidth={1.5} />
                  <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM STATEMENT */}
        <section className="py-24 md:py-32 relative bg-background border-b border-white/5">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-tight">
                The High Cost of Invisible Power
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="Power is your most critical dependency, yet often the least visible."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Power is the single most critical dependency in any data centre or mission-critical facility. Yet most organisations have limited visibility into their electrical distribution network — relying on reactive maintenance, manual meter reading, and incomplete energy data to manage one of their highest operational costs.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "No real-time visibility into power quality, consumption, or load distribution",
                      "Power issues are identified only after equipment is damaged or downtime occurs",
                      "Energy costs are rising but there is no granular data to drive efficiency decisions",
                      "Compliance with energy regulations is difficult without accurate, auditable records"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </ProblemFeatureCard>

              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={ShieldCheck}
                    title="The Solution"
                    description="PME illuminates your distribution network."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    EcoStruxure Power Monitoring Expert is an integrated power and energy management software platform that enables facilities to optimise their power distribution infrastructure, maximise operational efficiency, and improve bottom-line performance. It connects seamlessly to electrical assets, providing a communicating layer of energy intelligence across the entire distribution network.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time monitoring across the complete electrical network, from grid connection down to the rack.",
                      "Deep analysis of power quality to prevent harmonic distortion or voltage sags from causing hardware failure.",
                      "Detailed energy reporting to find efficiencies, meet compliance, and accurately allocate costs to specific departments.",
                      "Advanced analytics to predict potential power issues and schedule preventative maintenance."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </ProblemFeatureCard>
            </div>
            <div className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl mt-16">
               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#020617]">
                 <Image 
                   src="/assets/Ecostruxure/power-monitor-expert.png"
                   alt="Platform Dashboard Preview"
                   fill
                   className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: USE CASES */}
        <section className="py-32 bg-background border-b border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">Key Use Cases</h2>
            </div>

            <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Data centre power management", description: "Full visibility from service entrance to rack, with load and capacity tracking." },
                { icon: BarChart3, title: "Energy cost optimisation", description: "Granular consumption data to reduce operational energy spend." },
                { icon: Activity, title: "Power quality monitoring", description: "Detect harmonics, voltage issues, and power factor problems in real time." },
                { icon: FileText, title: "Regulatory compliance", description: "Audit-ready energy and power quality reporting." },
                { icon: Clock, title: "Proactive maintenance scheduling", description: "Historical trend analysis to schedule maintenance before failures occur." },
                { icon: Gauge, title: "Microgrid & Distributed Energy", description: "Monitor and control distributed energy resources to ensure seamless transitioning between grid and local power." }
              ].map((item, i) => (
                <FeatureCard key={i} feature={item} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: OUTCOME SUMMARY */}
        <section className="bg-background py-24 border-b border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                "Real-time visibility", 
                "Proactive issue detection", 
                "Granular energy data", 
                "Audit-ready reporting",
                "Scalable multi-site capabilities"
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/5 text-white font-bold text-sm tracking-wide">
                  <CheckCircle2 className="size-5 text-accent" />
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: CTA */}
        <section className="pt-24 pb-32 relative overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center bg-fixed opacity-65 mix-blend-luminosity"
             style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
           />
           <div className="absolute inset-0 bg-[#020617]/80" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
           <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

           <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-white mb-6">
               Take control of your power infrastructure.
             </h2>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
               <Link href="/contact">
                 <button className="bg-white text-primary font-bold font-headline tracking-wide px-9 py-4 rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                   Talk to the team
                 </button>
               </Link>
             </div>
           </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}

// --- Shared Components ---
interface ProblemFeatureCardProps { children: React.ReactNode; className?: string; }
const ProblemFeatureCard = ({ children, className }: ProblemFeatureCardProps) => (
    <Card className={cn('group relative rounded-none border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.04]', className)}>
        <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-accent/40"></span>
        <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-accent/40"></span>
        <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-accent/40"></span>
        <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-accent/40"></span>
        {children}
    </Card>
)

interface CardHeadingProps { icon: LucideIcon; title: string; description: string; }
const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-2">
        <span className="text-accent flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-4 text-xl md:text-2xl font-headline font-bold text-white tracking-tight">{description}</p>
    </div>
)
