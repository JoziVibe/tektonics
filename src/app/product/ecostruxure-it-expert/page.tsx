"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowDown, Activity, CheckCircle2, ShieldCheck, Clock, Map, Thermometer, Globe, CloudOff, AlertTriangle, Target, Search, BarChart3,
  Server, Factory, Video, Lock, Radio, Database, Users, Code, Layers, FileText, Smartphone, TabletSmartphone, Network, Zap, LucideIcon, Cloud, Settings, Fingerprint
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

import { LayerBadge } from "@/components/ui/layer-badge";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ItExpertPage() {
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
            <a className={cn(
                  "group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-2xl backdrop-blur-md",
                  "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
                )} 
                href="#"
            >
              <Cloud className="size-3.5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">Schneider Electric</span>
              <span className="block h-4 border-l border-white/20" />
              <ArrowDown className="size-3.5 text-white/40 duration-150 ease-out group-hover:translate-y-1" />
            </a>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              EcoStruxure IT Expert<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Cloud-Based Infrastructure Monitoring</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              Wherever-You-Go Visibility Into Every Device on Your Network. A cloud-based, vendor-agnostic monitoring solution that gives IT and data centre teams secure, real-time visibility across all connected infrastructure.
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
                { icon: Smartphone, text: "Cloud-based — accessible from any device, anywhere, at any time" },
                { icon: Network, text: "Vendor-neutral monitoring across all connected infrastructure" },
                { icon: Cloud, text: "Smart alarm consolidation reduces noise and alert fatigue" }
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
                The Limitations of Legacy Tools
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="Managing distributed IT infrastructure from a reactive, on-premises monitoring console is no longer sufficient."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Teams need instant visibility across multiple sites, proactive alerting that cuts through noise, and the flexibility to respond from anywhere — not just from a desk in a control room.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "No consistent visibility across hybrid and multi-site environments",
                      "Alarm storms make it difficult to identify what actually needs attention",
                      "Firmware and configuration updates are time-consuming and manual",
                      "On-premises tools can't be accessed when teams are off-site or remote"
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
                    description="IT Expert addresses this securely."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    EcoStruxure IT Expert is a cloud-based, vendor-agnostic, secure solution that enables wherever-you-go monitoring and visibility into your IT physical infrastructure. It provides proactive insights on critical assets, reducing alarm noise and improving overall site resiliency across data centres, distributed IT, and local edge environments.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Consolidates alarms to prevent noise and surface what truly matters.",
                      "Allows for mass deployment of firmware and configuration settings, saving hours of manual work.",
                      "Connects securely to the cloud, allowing remote monitoring from a mobile device or web browser.",
                      "Vendor-agnostic approach supports a huge library of third-party devices seamlessly."
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
                   src="/assets/Ecostruxure/it-expert.webp"
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
                { icon: Map, title: "Multi-site infrastructure monitoring", description: "Unified cloud-based visibility across all locations and environments." },
                { icon: Smartphone, title: "Remote IT management", description: "Monitor and respond to incidents from any device, anywhere." },
                { icon: Network, title: "Vendor-neutral device management", description: "Monitor Schneider Electric and third-party assets from one platform." },
                { icon: Settings, title: "Mass firmware & configuration updates", description: "Simplified, secure updates across large device estates." },
                { icon: Target, title: "Proactive risk management", description: "Benchmarking and analytics to identify risks before they escalate." },
                { icon: Fingerprint, title: "Secure device communication", description: "Ensures encrypted, outbound-only communication for secure edge monitoring." }
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
                "Global Benchmarking", 
                "Mass Firmware Updates", 
                "Smart Alarm Consolidation", 
                "Vendor Neutral",
                "Cloud Based"
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
               Take your monitoring wherever you go.
             </h2>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
               <Link href="/contact">
                 <button className="bg-white text-primary font-bold font-headline tracking-wide px-9 py-4 rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                   Contact Tektonics
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
