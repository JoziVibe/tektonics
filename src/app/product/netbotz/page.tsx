"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowDown, Activity, CheckCircle2, ShieldCheck, Clock, Map, Thermometer, Globe, CloudOff, AlertTriangle, Target, Search, BarChart3,
  Server, Factory, Video, Lock, Radio, Database, Users, Code, Layers, FileText, Smartphone, TabletSmartphone, Network, Zap, LucideIcon, ShieldAlert
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

import StackingCard, { ProjectData } from "@/components/ui/stacking-card";
import { LayerBadge } from "@/components/ui/layer-badge";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const netbotzCapabilities: ProjectData[] = [
  {
    title: "Environmental Sensor Monitoring",
    description: "NetBotz devices offer a wide array of environmental sensors, including temperature, humidity, airflow, and more — providing real-time visibility into the conditions of your data centre and allowing you to preemptively address potential issues before they cause costly downtime. Wired sensor support includes spot fluid detection, vibration, and smoke detection.",
    link: "/assets/Netbotz/Environmental Sensor Monitoring.jpg",
    color: "#0a0f1c",
  },
  {
    title: "Integrated Physical Security",
    description: "NetBotz devices come equipped with integrated cameras and motion sensors, empowering you to monitor your infrastructure remotely and respond to security threats promptly. Camera pods support long-term video storage, alert tagging, and clip retrieval.",
    link: "/assets/Netbotz/Integrated Physical Security.jpg",
    color: "#06102b",
  },
  {
    title: "Rack Access Control",
    description: "APC by Schneider Electric NetBotz Rack Access delivers rack-direct access control, surveillance, and environmental monitoring all in a single view — fully integrated and scalable with mass configuration, enabling remote and local access control for Schneider Electric, APC, and third-party components.",
    link: "/assets/Netbotz/Rack Access Control.jpg",
    color: "#081333",
  },
  {
    title: "Multi-Channel Alerting",
    description: "NetBotz devices provide customisable alert notifications via email, SMS, or SNMP, ensuring that you are promptly notified of any critical events or changes in your environment.",
    link: "/assets/Netbotz/netbotz Multi-Channel Alerting.jpg",
    color: "#0a1945",
  },
  {
    title: "EcoStruxure Integration",
    description: "NetBotz integrates natively with Schneider Electric's EcoStruxure platform — including Data Center Expert, IT Expert, and IT Advisor — providing centralised dashboards, event correlation, and unified management across your entire infrastructure estate.",
    link: "/assets/Netbotz/EcoStruxure Integration.jpg",
    color: "#0b1e4f",
  }
];

export default function NetBotzPage() {
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
              <ShieldCheck className="size-3.5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">APC by Schneider Electric</span>
              <span className="block h-4 border-l border-white/20" />
              <ArrowDown className="size-3.5 text-white/40 duration-150 ease-out group-hover:translate-y-1" />
            </a>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              NetBotz Physical &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Environmental Monitoring</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              Real-Time Protection for Every Corner of Your Critical Environment. An active, scalable monitoring system that safeguards IT infrastructure against environmental and physical threats.
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
                { icon: Thermometer, text: "Continuous monitoring of temperature, humidity, airflow, and water ingress" },
                { icon: Video, text: "Integrated cameras and rack-direct access control" },
                { icon: Activity, text: "Seamless integration with the full EcoStruxure software suite" }
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
                The Cost of Unseen Threats
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="Environmental threats don't announce themselves."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Temperature spikes, water ingress, smoke, unauthorised access — by the time a manual check picks them up, damage is already underway. Most facilities rely on periodic inspections and reactive responses, leaving critical gaps in continuous protection.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Environmental conditions go undetected between manual checks",
                      "No real-time alert when temperature, humidity, or airflow thresholds are breached",
                      "Physical access to racks and server rooms is unmonitored",
                      "Remote and edge sites have no eyes on the ground"
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
                    description="NetBotz closes those gaps."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    NetBotz is an active monitoring solution designed to protect against physical threats — environmental or human — that can cause disruption or downtime to IT infrastructure. It is a scalable suite of networked appliances, sensors, access controls, and cameras designed to safeguard environments ranging from network closets to full-scale data centres.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time monitoring of all critical environmental factors, with automated alerts.",
                      "Fully integrated camera and access control tracking built-in.",
                      "Centralised management for both central data centres and remote edge sites.",
                      "Seamlessly integrates with the broader EcoStruxure architecture."
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
          </div>
        </section>

        {/* SECTION 4: CORE CAPABILITIES */}
        <section id="capabilities" className="py-32 relative border-b border-white/10">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Core Capabilities</h2>
            </div>
            
            <StackingCard projects={netbotzCapabilities} />
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
                { icon: Thermometer, title: "Data centre environmental control", description: "Continuous monitoring of temperature, humidity, airflow, and water ingress." },
                { icon: Lock, title: "Physical security & access control", description: "Badged rack access, camera surveillance, motion detection." },
                { icon: Map, title: "Remote site monitoring", description: "Deploy at unmanned edge or distributed sites with centralised alerting." },
                { icon: FileText, title: "Compliance & audit support", description: "Maintain verifiable records of environmental conditions and access events." },
                { icon: Server, title: "Multi-site estate management", description: "Unified monitoring across all facilities via EcoStruxure integration." },
                { icon: ShieldAlert, title: "Edge computing protection", description: "Safeguard edge computing equipment in harsh or unmonitored environments from physical and environmental threats." }
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
                "Continuous, real-time protection", 
                "Scalable from a single rack to a full data centre", 
                "Wired and wireless sensor support", 
                "Integrated cameras and access control",
                "Native EcoStruxure ecosystem integration",
                "Customisable alerting via email, SMS, and SNMP"
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
               Ready to protect your critical infrastructure around the clock?
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
