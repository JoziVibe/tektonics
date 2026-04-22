"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowDown, Activity, CheckCircle2, ShieldCheck, Clock, Map, Thermometer, Globe, CloudOff, AlertTriangle, Target, Search, BarChart3,
  Server, Factory, Video, Lock, Radio, Database, Users, Code, Layers, FileText, Smartphone, TabletSmartphone, Network, Zap, LucideIcon, Cpu, Gauge,
  History, ShieldAlert, ChevronRight, Wind, Droplets, Leaf
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

import StackingCard, { ProjectData } from "@/components/ui/stacking-card";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const octaipipeCapabilities: ProjectData[] = [
  {
    title: "Plain-English Recommendations",
    description: "OctaiPipe provides simple, clear, and actionable real-time recommendations in plain English, backed up with contextually relevant explanations that inform and educate your team in optimising cooling efficiency. No specialist AI knowledge required — operators get clear guidance they can act on immediately.",
    link: "/assets/OctaiPipe/Plain English Forecasting.png",
    color: "#0a0f1c",
  },
  {
    title: "Digital Twin & Energy Forecasting",
    description: "OctaiPipe uses a digital twin of your data centre to safely train the optimiser before offering recommendations in a live system. The digital twin prediction shows forecast energy and changes to the internal environment, allowing users to clearly see the energy and cost savings benefits of any recommended change.",
    link: "/assets/OctaiPipe/Digital Twin & Energy Forecasting.png",
    color: "#06102b",
  },
  {
    title: "ASHRAE-Aware Cooling Control",
    description: "Intelligent cooling system control dynamically adjusts cooling set points to minimise energy use without breaching SLAs based on ASHRAE standards. Compliance and efficiency are managed simultaneously, ensuring required operating environments are maintained.",
    link: "/assets/OctaiPipe/ASHRAE-Aware Cooling Control.png",
    color: "#0a1945",
  },
  {
    title: "Time Machine — Historical Context",
    description: "Draws on historical data to give users a contextualised view of any recommended action's cause, effect, and history. Clear contextual explanations inform your team about the reasons and benefits of recommended changes, including highlighted similar previous events.",
    link: "/assets/OctaiPipe/Time Machine — Historical Context.png",
    color: "#0b1e4f",
  },
  {
    title: "Sustainability Reporting & Audit Trail",
    description: "Built-in reporting lets users see all previous events with contextual info — offering easy, instant access to metrics that matter for your audit trail. Supports sustainability audits, ESG compliance reporting, and stakeholder accountability.",
    link: "/assets/OctaiPipe/Sustainability Reporting & Audit Trail.png",
    color: "#0c245c",
  }
];

export default function OctaiPipePage() {
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
              <span className="text-white">OctaiPipe</span>
            </div>

            <h1 className={cn(
                "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
                "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
              )}>
              AI-Powered Data Centre<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Cooling Optimisation</span>
            </h1>

            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              Save Energy. Improve Sustainability. Boost Data Centre Performance. Collaborative AI that reduces cooling energy by up to 30% — safely, securely, and without disruption.
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

        {/* ... (rest of the sections remain unchanged) ... */}
        
        {/* SECTION 2: VALUE PROP STRIP */}
        <section className="bg-white/5 py-12 border-b border-white/5">
          <div className="container mx-auto px-6 text-center">
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { icon: Zap, text: "Reduces cooling energy consumption by up to 30% through AI optimisation" },
                { icon: ShieldCheck, text: "Privacy-preserving federated AI infrastructure — no data ever leaves your site" },
                { icon: BarChart3, text: "ISO 27001, ISO 9001, and Cyber Essentials Plus certified" }
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
                The Cooling Inefficiency Trap
              </h2>
            </div>
            
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              
              <ProblemFeatureCard>
                <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                  <CardHeading 
                    icon={AlertTriangle}
                    title="The Reality"
                    description="Fixed schedules leave efficiency on the table."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Cooling is the largest energy cost in most data centres, yet most facilities significantly over-cool. Relying on fixed schedules or manual adjustments leaves enormous efficiency gains untapped while costs and carbon emissions climb.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "No real-time optimisation of cooling set points based on changing conditions",
                      "Data exists but doesn't translate into actionable optimisation guidance",
                      "Sustainability reporting is manual, inconsistent, and hard to audit",
                      "Single-site tools can't learn from cross-site patterns",
                      "Teams lack context to understand WHY changes are being recommended"
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
                    description="Predictive, collaborative AI optimisation."
                  />
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    OctaiPipe dynamically and predictably optimises cooling system operation. It provides facilities managers with real-time recommendations in plain English — backed by digital twin simulation and privacy-preserving collaborative AI that learns across multiple sites simultaneously without sharing raw data.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Plain-English guidance that empowers facilities teams to act with confidence.",
                      "Digital twin technology forecasts savings before any physical set points change.",
                      "Federated learning delivers up to 2x more savings than isolated AI solutions.",
                      "100% on-premises security — data never leaves your systems."
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
            
            <StackingCard projects={octaipipeCapabilities} />
          </div>
        </section>

        {/* SECTION 5: DATA TAILORING */}
        <section className="py-32 bg-background border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">Tailored to Your Data Centre</h2>
              <p className="mt-4 text-white/50 max-w-2xl mx-auto font-body">OctaiPipe makes suggestions specific to your site's data points and constraints.</p>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5 hover:bg-transparent">
                    <TableHead className="text-white font-bold font-headline uppercase tracking-widest text-xs py-6 px-8">Input</TableHead>
                    <TableHead className="text-white font-bold font-headline uppercase tracking-widest text-xs py-6 px-8">Detail</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { input: "Customer SLAs", detail: "Parameterised with your service level agreements and operating requirements" },
                    { input: "ASHRAE Standards", detail: "Cooling set points are continuously validated against ASHRAE boundaries" },
                    { input: "Digital Twin", detail: "A virtual replica of your facility is built to safely train the optimiser" },
                    { input: "Weather", detail: "External temperature and conditions are factored into cooling load calculations" },
                    { input: "IT Loads", detail: "Varying IT loads are measured to reduce water use during non-peak periods" },
                    { input: "Temperature & Humidity", detail: "Agreed air temperature and humidity limits are enforced for rack cooling air" },
                    { input: "Cooling Flow Rates", detail: "Maximum rate of change for cooling air and chilled water set points is respected" }
                  ].map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/[0.04] transition-colors">
                      <TableCell className="font-bold text-accent py-5 px-8">{row.input}</TableCell>
                      <TableCell className="text-white/70 py-5 px-8">{row.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* SECTION 6: BENEFITS MAPPING */}
        <section className="py-32 bg-primary/5 border-b border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">Indicative Benefits</h2>
              <p className="mt-4 text-white/50 max-w-2xl mx-auto font-body">Typical outcomes for a 50MW Data Centre facility.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { metric: "10%", label: "Building Energy Reduction", icon: Zap },
                { metric: "30%", label: "Cooling Cost Reduction", icon: Wind },
                { metric: "£6.9M", label: "Annual Energy Saving", icon: BarChart3 },
                { metric: "8,190t", label: "CO₂ Carbon Saved", icon: Leaf },
                { metric: "76M", label: "Litres Water Saved", icon: Droplets },
                { metric: "£190k", label: "Water Bill Saving", icon: Gauge },
                { metric: "£409k", label: "Carbon Tax Saving", icon: FileText },
                { metric: "< 1.3", label: "Improved PUE Target", icon: Activity }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-background border border-white/5 text-center group hover:border-accent/20 transition-all duration-500">
                  <item.icon className="size-6 text-accent/40 mb-4 mx-auto group-hover:text-accent transition-colors" />
                  <div className="text-3xl md:text-4xl font-headline font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
               <p className="text-white/40 text-sm italic">* Results are indicative. Use the OctaiPipe ROI Calculator to calculate benefits for your specific site.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: USE CASES */}
        <section className="py-32 bg-background border-b border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">Key Use Cases</h2>
            </div>

            <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                { icon: Wind, title: "Cooling energy optimisation", description: "Reduce cooling energy consumption by up to 30% with AI-driven control." },
                { icon: Activity, title: "PUE / CUE / WUE improvement", description: "Improve all key efficiency metrics simultaneously without disruption." },
                { icon: FileText, title: "Sustainability reporting", description: "Automated, audit-ready reports for ESG, ISO compliance, and accountability." },
                { icon: Globe, title: "Multi-site AI optimisation", description: "Collaborative learning across sites delivers up to 2x the savings." },
                { icon: Leaf, title: "Carbon reduction", description: "Quantify and reduce CO₂ emissions with transparent impact reporting." },
                { icon: Users, title: "Operational team enablement", description: "Plain-English guidance that empowers facilities teams in real time." }
              ].map((item, i) => (
                <FeatureCard key={i} feature={item} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: OUTCOME SUMMARY */}
        <section className="bg-background py-24 border-b border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                "Reduces energy costs by up to 30%", 
                "Start saving within 90 days", 
                "Privacy-preserving collaborative AI", 
                "100% on-premises deployment",
                "ISO 27001 & ISO 9001 certified"
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/5 text-white font-bold text-sm tracking-wide">
                  <CheckCircle2 className="size-5 text-accent" />
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: CTA */}
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
               Interested in reducing your cooling costs with AI?
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
