"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: "01",
    question: "What does Tektonics do?",
    answer: "Tektonics is an IT infrastructure and data centre solutions company. We help businesses design, deploy, and manage efficient, reliable data centre environments — combining hardware integration, software deployment, and expert consulting to keep your infrastructure running at peak performance."
  },
  {
    id: "02",
    question: "Where is Tektonics based and which regions do you serve?",
    answer: "We are headquartered in Centurion, Pretoria, South Africa, with an additional office in Nairobi, Kenya. We serve clients across the SADC region and support operations throughout East, West, and Central Africa."
  },
  {
    id: "03",
    question: "What services does Tektonics offer?",
    answer: "We offer four core service areas: Data Centre Infrastructure (including server room builds, hardware integration, and DCIM deployment), Consulting Services (auditing, energy optimisation, and DCIM training), Software Development (custom systems integration solutions), and Technology Support (vendor sourcing, desktop and server support, and compliance guidance)."
  },
  {
    id: "04",
    question: "What is the Tektonics Notifications Gateway?",
    answer: "The Notifications Gateway is an edge-deployed alerting solution that delivers critical infrastructure alerts via Telegram and WhatsApp, with automatic SMS failover when connectivity fails. It ensures every alert is not just sent — but delivered, tracked, and verified, even in remote or low-connectivity environments."
  },
  {
    id: "05",
    question: "What is Tektonics Flux?",
    answer: "Tektonics Flux is a real-time environmental monitoring and operational intelligence platform. It gives infrastructure teams centralised visibility across all sites — detecting temperature, power, and environmental risks early, and feeding alerts through to the Notifications Gateway for end-to-end incident response."
  },
  {
    id: "06",
    question: "How do Flux and the Notifications Gateway work together?",
    answer: "Together they form a complete operational pipeline: Flux detects and contextualises issues across your sites, and the Notifications Gateway ensures the right people are alerted instantly through the right channel. The result is a seamless flow from Detection → Context → Alert → Response."
  },
  {
    id: "07",
    question: "Do I need to replace my existing monitoring systems to work with Tektonics?",
    answer: "Not at all. Our solutions are designed to integrate with your existing infrastructure. The Notifications Gateway ingests alerts from Gmail, Microsoft 365, IMAP, SNMP, and HTTP APIs — meaning we modernise your alerting layer without requiring you to rip and replace what you already have."
  },
  {
    id: "08",
    question: "What types of clients does Tektonics work with?",
    answer: "We work with data centre owners and managers, multi-site enterprises, MSPs, telecom operators, utilities, government facilities, and any organisation that depends on reliable IT infrastructure. Our client base includes organisations such as Absa, Discovery, Safaricom, Eskom, SARS, and the JSE."
  },
  {
    id: "09",
    question: "How do I get started or request a consultation?",
    answer: "The easiest way is to reach out directly. You can email us at info@tektonics.africa, call our South Africa office on +27-12-743-5757, or visit www.tektonics.africa. Our team will assess your environment and recommend the right starting point for your needs."
  },
  {
    id: "10",
    question: "How long has Tektonics been operating and what experience do you bring?",
    answer: "Tektonics has over 15 years of experience in IT management and data centre environments. That experience spans both software and hardware integration across industries — giving us a practical, real-world understanding of the challenges our clients face across the African continent."
  }
];

export function FaqSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,150,195,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4 font-headline">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-headline leading-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h3>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id} className="border-b-0">
                <AccordionTrigger className="text-left hover:pl-3 duration-500 hover:no-underline cursor-pointer [&>svg]:hidden group bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-6 transition-all data-[state=open]:bg-white/[0.04] data-[state=open]:border-white/20">
                  <div className="flex flex-1 items-center justify-between gap-4">
                    <div className="flex gap-4 items-center">
                      <span className="text-accent font-mono text-sm font-bold opacity-40 group-data-[state=open]:opacity-100">{faq.id}</span>
                      <h3 className="text-lg md:text-xl font-headline font-bold text-white group-hover:text-accent transition-colors">{faq.question}</h3>
                    </div>
                    <div className="bg-primary group-data-[state=open]:bg-accent duration-500 rounded-lg flex items-center p-2">
                      <Plus
                        className={cn(
                          "text-white size-4 shrink-0 transition-transform duration-500",
                          "group-data-[state=open]:rotate-45"
                        )}
                      />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="text-white/60 font-body text-base leading-relaxed px-6 pb-6 pt-4 border-x border-b border-white/5 rounded-b-2xl -mt-4 bg-white/[0.01]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
