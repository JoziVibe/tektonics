"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowDown, Activity, CheckCircle2, ShieldCheck, Clock, Map, Thermometer, Globe, CloudOff, AlertTriangle, Target, Search, BarChart3,
  Server, Factory, Video, Lock, Radio, Database, Users, Code, Layers, FileText, Smartphone, TabletSmartphone, Network, Zap, LucideIcon, LineChart
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

import StackingCard, { ProjectData } from "@/components/ui/stacking-card";
import { LayerBadge } from "@/components/ui/layer-badge";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const thingsboardCapabilities: ProjectData[] = [
  {
    title: "Advanced Role-Based Access Control",
    description: "ThingsBoard PE includes Advanced Access Control (RBAC) — enabling custom user roles with granular permissions for devices, assets, and dashboards. Manage a hierarchy of customers with multiple levels of sub-customers, independent users, and devices.",
    link: "/assets/ThingsBoard PE/Advanced Role-Based Access Control.png",
    color: "#0a0f1c",
  },
  {
    title: "Rule Engine & Event Processing",
    description: "Define data processing rule chains. Transform and normalise your device data. Raise alarms on incoming telemetry events, attribute updates, device inactivity, and user actions. Complex multi-step workflows can be built and deployed without custom development.",
    link: "/assets/ThingsBoard PE/Rule Engine & Event Processing.png",
    color: "#06102b",
  },
  {
    title: "Platform Integrations",
    description: "ThingsBoard PE enables seamless connection with cloud services like AWS IoT and Azure IoT Hub, plus Kafka and LoRaWAN network servers. It also supports NB-IoT, SigFox, MQTT, CoAP, HTTP, and LwM2M protocols.",
    link: "/assets/ThingsBoard PE/Platform Integrations.png",
    color: "#081333",
  },
  {
    title: "White-Labelling",
    description: "Rebrand the ThingsBoard platform web interface with your company or product logo and colour scheme in 2 minutes — no coding or service restart required. Allow your customers and their sub-customers to white-label their interface as well.",
    link: "/assets/ThingsBoard PE/White-Labeling.png",
    color: "#0a1945",
  },
  {
    title: "Scalable Multi-Tenant Architecture",
    description: "A single ThingsBoard server can support 10,000+ devices and 100 million messages per hour, while a simple cluster can support millions of devices and billions of messages. Deploy on-premises or in the cloud with horizontal scaling.",
    link: "/assets/ThingsBoard PE/Scalable Multi-Tenant Architecture.png",
    color: "#0b1e4f",
  }
];

export default function ThingsBoardPage() {
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
              <Database className="size-3.5 text-accent" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/50">ThingsBoard PE</span>
              <span className="block h-4 border-l border-white/20" />
              <ArrowDown className="size-3.5 text-white/40 duration-150 ease-out group-hover:translate-y-1" />
            </a>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              IoT Data Collection, Visualisation &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Device Management</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              From Raw Device Data to Real-Time Operational Intelligence. An enterprise-grade IoT platform that collects, processes, and visualises data from any connected device.
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
                { icon: Layers, text: "Enterprise-grade IoT platform deployable on-premises or in the cloud" },
                { icon: Users, text: "Advanced RBAC and full white-labelling for branded client-facing deployments" },
                { icon: Activity, text: "Handles millions of devices and billions of messages at scale" }
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
                The Challenge of IoT Scale
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="Raw data is not operational intelligence."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Infrastructure environments generate enormous volumes of sensor and device data — but most organisations lack the tools to aggregate it, act on it, and present it meaningfully to different stakeholders. Siloed data, manual reporting, and generic monitoring tools leave operators blind to the patterns that matter.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Device data is collected but not processed into actionable insight",
                      "Multi-tenant and multi-customer environments are difficult to manage at scale",
                      "Integration with diverse protocols and IoT platforms is complex",
                      "Teams need role-specific dashboards without building custom solutions"
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
                    description="ThingsBoard PE bridges this gap."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    ThingsBoard is an open-source IoT platform that enables rapid development, management, and scaling of IoT projects — providing an out-of-the-box IoT cloud or on-premises solution that enables server-side infrastructure for IoT applications. The Professional Edition extends this with enterprise features including advanced RBAC, white-labelling, platform integrations, and dedicated support.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Enables white-labelled, multi-tenant portals, perfect for managed service providers.",
                      "Processes billions of messages smoothly through a scalable architecture.",
                      "Customisable rule engines allow complex automations without extensive coding.",
                      "Integrates natively with major cloud providers (AWS, Azure) and diverse hardware protocols."
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
            
            <StackingCard projects={thingsboardCapabilities} />
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
                { icon: Activity, title: "Infrastructure sensor monitoring", description: "Collect and visualise data from environmental and power sensors." },
                { icon: Users, title: "Multi-tenant managed services", description: "Deliver branded dashboards to multiple clients from a single platform." },
                { icon: Server, title: "IoT device fleet management", description: "Provision, monitor, and control thousands of connected devices." },
                { icon: AlertTriangle, title: "Alarm management & escalation", description: "Rule-based alerting across all connected assets with customisable workflows." },
                { icon: Factory, title: "SCADA & industrial monitoring", description: "Real-time control and monitoring of industrial processes and facilities." },
                { icon: LineChart, title: "Predictive Analytics & Telemetry", description: "Use historical telemetry data to train models that predict potential device failures and maintenance needs." }
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
                "Enterprise-grade IoT platform", 
                "Advanced RBAC", 
                "Full white-labelling", 
                "Broad protocol support",
                "No per-message pricing surprises"
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
               Interested in deploying ThingsBoard PE in your environment?
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
