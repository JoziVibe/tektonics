"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowDown, Activity, CheckCircle2, ShieldCheck, Clock, Map, Thermometer, Globe, CloudOff, AlertTriangle, Target, Search, BarChart3,
  Server, Factory, Video, Lock, Radio, Database, Users, Code, Layers, FileText, Smartphone, TabletSmartphone, Network, Zap, LucideIcon,
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

export default function DataCenterExpertPage() {
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
              <span className="text-white">Data Center Expert</span>
            </div>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              EcoStruxure<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Data Center Expert</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              Comprehensive On-Premises Monitoring for Power, Cooling, Security, and Environment. A centralised, on-premises DCIM solution that collects, organises, and distributes critical device information across your entire data centre infrastructure.
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
                { icon: ShieldCheck, text: "Comprehensive on-premises monitoring with no cloud dependency required" },
                { icon: Activity, text: "Instant fault notification and multi-level alert escalation" },
                { icon: Network, text: "Monitors Schneider Electric and third-party devices from a single console" }
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
                The Need for On-Premises Control
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="Cloud-based monitoring isn't an option for every organisation."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    For organisations that require on-premises control — whether for security, compliance, or connectivity reasons — cloud-based monitoring is not always appropriate. Yet on-site teams still need centralised visibility, fast fault notification, and the ability to manage a complex mix of Schneider Electric and third-party devices from a single point of control.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "On-premises environments with strict data sovereignty or connectivity requirements",
                      "Large, complex estates with diverse device types from multiple vendors",
                      "Teams that need centralised reporting, graphs, and historical analysis without a cloud dependency",
                      "Environments where physical security monitoring must be fully integrated"
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
                    description="Data Center Expert provides full local management."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Data Centre Expert provides a comprehensive centralised monitoring solution through existing dashboards, custom portals, and financial or operational views. It provides on-premises monitoring for data centre power, cooling, security, and environment — offering reports, graphs, instant fault notification, and escalation to swiftly resolve events and ensure the availability of critical infrastructure.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Unified visibility across multi-vendor equipment without reliance on external cloud services.",
                      "Customisable escalation matrix to route critical faults to the exact personnel immediately.",
                      "Rich graphing and trending features to understand power draw, thermal changes, and capacity history locally.",
                      "Centralised audit log and reporting engine keeping data securely on-premises."
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
                   src="/assets/Ecostruxure/data-center-expert.png"
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

            <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                { icon: ShieldCheck, title: "On-premises DCIM", description: "Centralised monitoring for organisations requiring local data control." },
                { icon: Layers, title: "Multi-vendor device management", description: "Unified visibility across Schneider Electric and third-party assets." },
                { icon: Zap, title: "Power & cooling monitoring", description: "Real-time and historical data across UPS, PDUs, generators, and cooling." },
                { icon: Lock, title: "Environmental & security monitoring", description: "Integrated NetBotz management for sensors, cameras, and access control." },
                { icon: FileText, title: "Compliance reporting", description: "Scheduled, customisable reports for audit and operational review." },
                { icon: BarChart3, title: "Trend analysis & capacity planning", description: "Graph multiple data points to identify hazardous trends before they escalate." }
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
                "No Cloud Dependency Required", 
                "Centralised Dashboarding", 
                "Integrated Physical Security", 
                "Multi-Level Escalation",
                "Broad Third-Party Support"
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
               Complete on-premises control of your data centre infrastructure.
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
