"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, ArrowDown, Inbox, CloudOff, Target, BarChart3, 
  Activity, Zap, Factory, Server, Rss, Layers, CheckCircle2,
  ShieldCheck, Clock, Share2, Network, AlertTriangle, MessageCircle,
  FileText, Search, Wrench, Cloud, Rocket, LucideIcon
} from "lucide-react";
import { FaTelegram, FaWhatsapp, FaCommentSms } from "react-icons/fa6";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";
import { Home, Info, Cpu, Globe } from "lucide-react";

import StackingCard, { ProjectData } from "@/components/ui/stacking-card";
import { LayerBadge } from "@/components/ui/layer-badge";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// --- Section 3: Approach Icons (Handled inline) ---

const capabilitiesProjects: ProjectData[] = [
  {
    title: "Multi-Channel Delivery",
    description: "Priority-based failover: Telegram → WhatsApp → SMS. Alerts always reach someone, even in worst-case conditions, moving down the communication chain seamlessly.",
    link: "/assets/Notifications Gateway/Multi-Channel Delivery.png",
    color: "#0a0f1c",
  },
  {
    title: "Edge Deployment Architecture",
    description: "No external dependencies. Runs locally on your network with limited or intermittent cloud connectivity. Faster, simpler, securely isolated, and unbreakably reliable.",
    link: "/assets/Notifications Gateway/Edge Deployment Architecture.png",
    color: "#06102b",
  },
  {
    title: "Out-of-Band Connectivity",
    description: "Maintains independent alert delivery paths even when the primary corporate network is completely down, retaining full remote management and troubleshooting support.",
    link: "/assets/Notifications Gateway/Out-of-Band Connectivity.png",
    color: "#081333",
  },
  {
    title: "Multi-Source Alert Ingestion",
    description: "Accepts universal alerts from Gmail, Microsoft 365, generic IMAP, and HTTP POST APIs. Fully compatible with SCADA systems, network monitoring tools, and custom apps.",
    link: "/assets/Notifications Gateway/Multi-Source Alert Ingestion.png",
    color: "#0a1945",
  },
  {
    title: "Alarm Parsing & Normalisation",
    description: "Intelligently converts and normalises all incoming chaotic alerts by severity — Error, Warning, Information — enabling consistent routing rules and accurate operational prioritisation.",
    link: "/assets/Notifications Gateway/Alarm Parsing & Normalisation.png",
    color: "#0b1e4f",
  },
  {
    title: "Repeat Alarm Suppression",
    description: "Detects duplicates automatically, suppresses unnecessary repeating storms, and groups related alerts. Your engineering teams focus on real incidents, not alert noise.",
    link: "/assets/Notifications Gateway/Repeat Alarm Suppression.png",
    color: "#0c245c",
  }
];

export default function NotificationsGateway() {
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
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-4 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-500 duration-500 ease-out">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-white/60">Products</span>
            <ChevronRight className="size-3" />
            <span className="text-white">Notifications Gateway</span>
          </div>

          <h1 className={cn(
            "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out",
            "text-shadow-[0_0px_50px_rgba(255,255,255,0.1)]"
          )}>
            Edge-Resilient Alerting.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Verified Delivery.</span><br />
            <span className="text-accent underline decoration-accent/30 decoration-thickness-2 underline-offset-8">Real-World Reliability.</span>
          </h1>

          <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
            Turn critical alerts into instant Telegram and WhatsApp notifications — with SMS failover when connectivity fails, running directly on a rugged, field-ready gateway.
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



      {/* SECTION 2: PROBLEM STATEMENT (ADAPTED TO FEATURES-10) */}
      <section className="bg-background py-24 md:py-32 relative border-b border-white/5">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl">
          <div className="mx-auto grid gap-6 lg:grid-cols-2">
            
            {/* Card 1: Traditional Issues */}
            <ProblemFeatureCard>
              <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                <CardHeading 
                  icon={AlertTriangle}
                  title="Traditional Alerting"
                  description="Notifications buried in noisy, unreliable channels."
                />
              </CardHeader>
              <CardContent className="px-12 pb-10">
                <ul className="space-y-4 pt-2">
                  {[
                    "Alerts buried in crowded email inboxes",
                    "Critical events missed after standard working hours",
                    "No confirmation or verification of message delivery",
                    "Zero visibility into remote site issues until failure"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </ProblemFeatureCard>

            {/* Card 2: Environment Reality */}
            <ProblemFeatureCard>
              <CardHeader className="pb-3 border-none shadow-none bg-transparent">
                <CardHeading 
                  icon={CloudOff}
                  title="The Field Reality"
                  description="Edge environments demand ruggedized resilience."
                />
              </CardHeader>
              <CardContent className="px-12 pb-10">
                <ul className="space-y-4 pt-2">
                  {[
                    "Highly unstable or metered data connectivity",
                    "Frequent regional power interruptions & load shedding",
                    "Over-reliance on fragile, cloud-dependent alerting",
                    "Limited on-site support for rapid troubleshooting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </ProblemFeatureCard>

            {/* Card 3: The Solution / Bridge */}
            <ProblemFeatureCard className="lg:col-span-2 p-8 md:p-12 bg-white/[0.02] overflow-hidden">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-6">Closing the Accountability Gap</h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
                  Tektonics creates an industrial-grade audit trail, ensuring every critical alarm is delivered, verified, and tracked with 100% accountability.
                </p>
              </div>
            </ProblemFeatureCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TEKTONICS APPROACH */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
              A Smarter Alert routing Layer — Built for the <span className="text-accent underline decoration-accent/30 underline-offset-8">Edge</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-body">
              The Tektonics Notifications Gateway introduces a local, intelligent alert-routing layer that operates independently of fragile infrastructure — processing, delivering, and tracking every alert directly on-device.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { icon: Inbox, title: "Ingest from Email & HTTP APIs", description: "Universal ingestion from Gmail, Microsoft 365, and direct APIs." },
              { icon: Zap, title: "Process & Normalise Locally", description: "Immediate local processing regardless of external cloud availability." },
              { icon: FaTelegram, title: "Deliver via Telegram & WhatsApp", description: "Direct delivery to instant messaging platforms your teams already use." },
              { icon: FaCommentSms, title: "SMS Failover When Data Fails", description: "Automated transition to cellular SMS when data networks are compromised." },
              { icon: Activity, title: "Stream Events via MQTT", description: "Seamlessly bridge events to your central monitoring via a local broker." },
              { icon: Target, title: "Track via Edge Message Center", description: "Maintain a complete on-device audit log for reporting and analysis." }
            ].map((item, i) => (
              <FeatureCard key={i} feature={item} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE CAPABILITIES */}
      <section id="capabilities" className="py-32 relative border-y border-white/10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Core Capabilities</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Engineered to strip out noise, bypass connectivity issues, and guarantee your team gets the message.</p>
          </div>
          
          <StackingCard projects={capabilitiesProjects} />
        </div>
      </section>

      {/* SECTION 5: EDGE MESSAGE CENTER */}
      <section className="py-32 relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-xs uppercase mb-2">
                Key Differentiator
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
                Full Visibility Into Every Alert — From Send to Delivery
              </h2>
              <p className="text-xl text-accent font-medium">
                Most systems tell you an alert was sent. Tektonics tells you it was delivered — and proves it.
              </p>
              
              <div className="space-y-4 pt-4">
                <p className="text-white/60 font-bold uppercase tracking-widest text-sm mb-4">Track every alert across:</p>
                {[
                  "Message content & urgency",
                  "Delivery channel used (App vs SMS)",
                  "Delivery status (Sent / Delivered / Failed / Fallback)",
                  "Timestamps at every stage of the pipeline",
                  "Recipient confirmation & read receipts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-accent shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Split layout right - UI Mockup abstract */}
            <div className="relative h-[400px] w-full max-w-[500px] mx-auto md:w-auto mt-10 md:mt-0 group perspective-[1000px]">
               {/* Decorative outer glow */}
               <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/5 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
               <div className="absolute -inset-px rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-3xl -z-1" />
               
               <div className="relative h-full bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col pt-12 overflow-hidden  transition-transform duration-700 hover:[transform:rotateX(2deg)_rotateY(-2deg)]">
                 
                 {/* Internal subtle glow */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

                 {/* Browser/app dots */}
                 <div className="absolute top-4 left-4 flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                 </div>
                 
                 {/* Mock dashboard rows */}
                 <div className="space-y-3 mt-4 relative z-10 w-full">
                   <div className="grid grid-cols-4 gap-2 text-[9px] sm:text-[10px] text-white/40 font-bold uppercase tracking-widest px-2 pb-3 border-b border-white/10 w-full flex-shrink-0">
                     <span className="col-span-1">Timestamp</span>
                     <span className="col-span-1">Alert</span>
                     <span className="col-span-1">Channel</span>
                     <span className="col-span-1 text-right">Status</span>
                   </div>
                   {[
                     { t: "14:02:45", type: "CRITICAL", sub: "Power", p: "Telegram", s: "Delivered", pulse: true, c: "text-green-400 bg-green-400/10 border-green-400/20", i: FaTelegram },
                     { t: "14:02:46", type: "WARN", sub: "Temp", p: "Telegram", s: "Failed", pulse: false, c: "text-red-400 bg-red-400/10 border-red-400/20", i: FaTelegram },
                     { t: "14:02:48", type: "WARN", sub: "Temp", p: "SMS", s: "Delivered", pulse: false, c: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20", i: FaCommentSms },
                     { t: "13:15:00", type: "INFO", sub: "Sync", p: "WhatsApp", s: "Read", pulse: false, c: "text-blue-400 bg-blue-400/10 border-blue-400/20", i: FaWhatsapp }
                   ].map((row, i) => (
                     <div key={i} className="grid grid-cols-4 gap-2 items-center text-xs text-white/70 bg-white/[0.02] hover:bg-white/[0.06] p-3 rounded-lg border border-white/5 transition-all duration-300 w-full group/row cursor-default">
                       <span className="font-mono text-white/40 text-[10px] sm:text-xs col-span-1">{row.t}</span>
                       <span className="font-medium text-white/90 flex flex-col col-span-1">
                          <span className={cn("text-[10px] leading-none mb-1", row.pulse ? "text-red-400 animate-pulse" : "text-white/60")}>{row.type}</span>
                          <span className="text-xs sm:text-sm truncate">{row.sub}</span>
                       </span>
                       <span className="text-white/50 flex items-center gap-1.5 col-span-1 text-[10px] sm:text-xs truncate">
                         <row.i className="size-3 hidden sm:block"/> 
                         <span className="truncate">{row.p}</span>
                       </span>
                       <div className="flex justify-end col-span-1">
                         <span className={cn("px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold border whitespace-nowrap", row.c)}>
                           {row.s}
                         </span>
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 {/* Gradient overlay bottom border fade */}
                 <div className="absolute inset-x-0 bottom-0 pointer-events-none h-24 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl" />
               </div>
            </div>
          </div>

          {/* 3-column use case row */}
          <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-12">
            {[
              { icon: FileText, title: "SLA Reporting", description: "Generate indisputable uptime and response metrics from verifiable notification delivery logs." },
              { icon: Search, title: "Incident Analysis", description: "Trace the exact timeline of events post-outage with millisecond-accurate audit trails." },
              { icon: ShieldCheck, title: "Accountability", description: "Validate operational response times and ensure the right teams were reached at the critical moment." }
            ].map((differentiator, i) => (
              <FeatureCard key={i} feature={differentiator} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ARCHITECTURE OVERVIEW */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">A Layered, Edge-First Architecture</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Flow diagram visual */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6 mb-12">
               
               {/* Input Layer */}
               <div className="flex-1 bg-card/40 border border-white/10 p-6 rounded-2xl text-center relative">
                 <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Input Layer</LayerBadge>
                 <div className="py-4 font-headline font-bold text-lg text-white">Email / HTTP POST</div>
               </div>

               {/* Arrow 1 */}
               <div className="hidden md:flex items-center justify-center text-white/20 shrink-0">
                 <ArrowRight className="size-8" />
               </div>
               <div className="md:hidden flex justify-center py-2 text-white/20 shrink-0">
                 <ArrowRight className="size-6 rotate-90" />
               </div>

               {/* Processing Layer */}
               <div className="flex-1 bg-accent/5 border border-accent/20 p-6 rounded-2xl text-center relative shadow-[0_0_30px_rgba(0,250,223,0.05)] pt-8">
                 <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Processing Layer</LayerBadge>
                 <div className="py-2 font-headline font-bold text-lg text-white flex flex-col gap-1">
                   <span>Parse</span>
                   <span className="text-white/30 text-xs text-center leading-none">↓</span>
                   <span>Route</span>
                   <span className="text-white/30 text-xs text-center leading-none">↓</span>
                   <span>Suppress</span>
                 </div>
               </div>

               {/* Arrow 2 */}
               <div className="hidden md:flex items-center justify-center text-white/20 shrink-0">
                 <ArrowRight className="size-8" />
               </div>
               <div className="md:hidden flex justify-center py-2 text-white/20 shrink-0">
                 <ArrowRight className="size-6 rotate-90" />
               </div>

               {/* Output Layer */}
               <div className="flex-1 bg-card/40 border border-white/10 p-6 rounded-2xl text-left relative">
                 <LayerBadge className="absolute -top-4 left-1/2 -translate-x-1/2">Output Layer</LayerBadge>
                 <div className="py-4 font-headline font-bold text-lg text-white flex flex-col gap-4 pl-4 md:pl-12">
                   <div className="flex items-center gap-3"><FaTelegram className="size-5 text-white/40"/> Telegram</div>
                   <div className="flex items-center gap-3"><FaWhatsapp className="size-5 text-white/40"/> WhatsApp</div>
                   <div className="flex items-center gap-3"><FaCommentSms className="size-5 text-white/40"/> SMS</div>
                   <div className="flex items-center gap-3"><Activity className="size-5 text-white/40"/> MQTT</div>
                 </div>
               </div>
            </div>

            <p className="text-center text-white/50 text-base max-w-3xl mx-auto leading-relaxed">
              Native MQTT integration bridges the physical edge with the cloud, enabling the dual visibility model: processing events instantly locally inside the Edge Message Center, while securely streaming structured data to the Tektonics Flux platform for global observation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: PLATFORM BENEFITS */}
      <section className="py-32 bg-background border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4 font-headline">Platform Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-headline tracking-tight">Built to Cover Your Needs</h3>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto font-body">Engineered to handle the unique challenges of African edge environments with precision and speed.</p>
          </div>

          <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Faster Incident Response", description: "Alerts reach teams instantly on mobile platforms they already actively use, skipping the cluttered inbox." },
              { icon: CheckCircle2, title: "Verified Delivery", description: "Know exactly what was sent, who received it, and whether the system algorithm correctly executed fallback logic." },
              { icon: CloudOff, title: "Reduced Alert Fatigue", description: "Only highly meaningful, deduplicated alerts are delivered. Protect your on-call teams from burning out." },
              { icon: BarChart3, title: "Lower TCO", description: "Minimal on-prem infrastructure required, drastically simplified deployment paths, and significantly reduced operational overhead." },
              { icon: Network, title: "Real-World Resilience", description: "Architected specifically for unreliable connectivity, load shedding, and unpredictable edge African environments." },
              { icon: Server, title: "Edge Intelligence", description: "Raw local processing capability reduces cloud data dependency, cuts egress costs, and vastly improves reaction time." }
            ].map((benefit, i) => (
              <FeatureCard key={i} feature={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: IDEAL CUSTOMER PROFILE */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-10">Built For Teams Who Can't Afford to Miss an Alert</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Server, text: "Data Centres & Server Rooms" },
              { icon: Factory, text: "Multi-Site Enterprises" },
              { icon: Wrench, text: "MSPs & Infrastructure Providers" },
              { icon: Rss, text: "Telecom, Utilities & Industrial Operations" },
              { icon: Cloud, text: "Organisations Moving Away From Cloud-Only Alerting" }
            ].map((segment, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-card/40 border border-white/10 text-white/80 text-xs md:text-sm whitespace-nowrap hover:bg-white/10 transition-colors cursor-default flex items-center gap-2 font-medium tracking-wide">
                <segment.icon className="size-4 text-accent/80" />
                {segment.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA SECTION */}
      <section className="pt-24 pb-32 border-t border-white/10 relative overflow-hidden">
         {/* Parallax Background */}
         <div 
           className="absolute inset-0 bg-cover bg-center bg-fixed opacity-65 mix-blend-luminosity"
           style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
         />
         {/* Deep Navy Overlays */}
         <div className="absolute inset-0 bg-[#020617]/80" />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
         
         {/* Light accent glow from original layout */}
         <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

         
         <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-white mb-6">
             Don't Just Send Alerts —<br />
             Guarantee Delivery. Prove It.
           </h2>
           <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
             Every alarm delivered, verified, tracked, and analysed — even when the primary network isn't available to help.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/contact">
               <button className="bg-white text-primary font-bold font-headline tracking-wide px-9 py-4 rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                 Get In Touch
               </button>
             </Link>
             <a href="mailto:info@tektonics.africa" className="text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">
               Email: info@tektonics.africa
             </a>
           </div>

           <p className="mt-16 text-xs text-white/40 tracking-widest uppercase font-bold">
              Every alarm delivered — even when the network isn't.
           </p>
         </div>
      </section>

      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}

// --- Problem Statement Sub-components (features-10 adapted) ---

interface ProblemFeatureCardProps {
    children: React.ReactNode
    className?: string
}

const ProblemFeatureCard = ({ children, className }: ProblemFeatureCardProps) => (
    <Card className={cn('group relative rounded-none border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.04]', className)}>
        <ProblemCardDecorator />
        {children}
    </Card>
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
