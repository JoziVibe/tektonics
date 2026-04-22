"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    id: "data-centre-infrastructure",
    title: "Data Centre Infrastructure",
    description: "We ensure your data centre operates at peak performance, deploying robust systems and software to protect against external threats and internal failures. Our expertise covers everything from initial builds to ongoing management.",
    features: [
      "Security and Environmental Monitoring",
      "Server Room Builds and Revamps",
      "Hardware Integration, Configuration, and Management",
      "Data Centre Infrastructure Management (DCIM) Software",
    ],
    image: "/assets/solutions/DCIM.png",
  },
  {
    id: "consulting-services",
    title: "Expert Consulting Services",
    description: "Managing a data centre is a complex, full-time job. Leverage our years of experience in energy conservation, auditing, and security. We provide strategic guidance and training to streamline your data collection, analysis, and reporting, turning your operational challenges into opportunities for growth.",
    features: [
        "Comprehensive Infrastructure Assessments",
        "Efficiency and Energy Optimisation Audits",
        "DCIM Tool Training (Schneider Electric, Sunbird, Nlyte)",
        "Data-driven reporting and analysis strategies"
    ],
    image: "/assets/solutions/Consulting.png",
  },
  {
    id: "software-development",
    title: "Custom Software Development & Integration",
    description: "We build custom applications and hardware integrations tailored to your specific business needs. Our team focuses on solving your unique problems, taking your requirements from concept to a fully realized, high-performance solution.",
    features: [
        "Bespoke Application Development",
        "Complex Hardware and Software Integrations",
        "Tailor-made solutions to meet business needs",
        "Problem-focused design and development process"
    ],
    image: "/assets/solutions/Software Development.png",
  },
  {
    id: "technology-support",
    title: "SME Technology Support",
    description: "Navigating the technology landscape can be challenging. We provide comprehensive desktop and server support for SMEs, helping you identify the right technology, manage costs, and evaluate suppliers. We also offer expertise in data security and compliance to keep your business protected.",
    features: [
        "Desktop and Server Support",
        "Technology Needs and Cost Analysis",
        "Supplier Vetting and Evaluation",
        "Data Security and Compliance Assistance"
    ],
    image: "/assets/solutions/IT Support.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-accent/30 overflow-x-clip">
      <Header stickyMode="immediate" />
      <div className="grow">
        <section className="relative w-full overflow-hidden min-h-[70vh] flex flex-col justify-center border-b border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed mix-blend-luminosity opacity-65"
            style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-4 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-500 duration-500 ease-out">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="size-3" />
              <span className="text-white">Services</span>
            </div>

            <h1 className={cn("fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight delay-100 duration-500 ease-out")}>
              End-to-End Data Centre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">and IT Services</span>
            </h1>
            <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg md:text-xl text-white/60 leading-relaxed delay-200 duration-500 ease-out font-body">
              From infrastructure and consulting to custom software and support, we provide the expertise to drive your business forward.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="scroll-mt-24"
                  id={service.id}
                >
                  <div
                    className={cn(
                        "flex flex-col md:flex-row gap-12 lg:gap-16 items-center p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 relative",
                        index % 2 !== 0 && "md:flex-row-reverse"
                    )}
                  >
                    <div className="md:w-1/2 flex items-center justify-center">
                        <motion.div 
                            whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-full rounded-3xl bg-white/5 p-3 border border-white/10 overflow-hidden shadow-2xl perspective-1000 group"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={500}
                                height={500}
                                className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="font-body font-medium text-[18px] text-accent/40 select-none shrink-0">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">{service.title}</h2>
                        </div>
                        <p className="text-white/60 leading-relaxed mb-8">{service.description}</p>
                        <ul className="space-y-4">
                        {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="size-5 text-accent shrink-0 mt-1" />
                            <span className="text-white/80">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/assets/solutions/solutions-cta-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#020617]/85" />
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-white mb-6">
                Elevate Your Data Centre Operations
                </h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Partner with our dedicated team of professionals to unlock the full potential of your data centre.
                </p>
                <Link href="/contact">
                <GradientButton className="rounded-full px-8 py-4 text-base h-auto hover:scale-105 transition-transform">
                  Contact Us <ArrowRight className="ml-2 size-5" />
                </GradientButton>
              </Link>
            </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}