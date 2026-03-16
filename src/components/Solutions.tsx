"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Code, Lightbulb, Headset, ChevronRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Solutions() {
  const solutions = [
    {
      id: "solutions-dc-infra",
      icon: <Server className="h-6 w-6" />,
      title: "Data Centre Infrastructure",
      specs: ["Power Intelligence", "Environmental Monitoring", "Asset Lifecycle"],
      desc: "Robust and scalable solutions for mission-critical facilities, ensuring maximum efficiency and reliability in every rack.",
      accent: "text-blue-400"
    },
    {
      id: "solutions-software",
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      specs: ["Custom Dashboards", "API Integration", "Enterprise Platforms"],
      desc: "Bespoke software engineering tailored to your operational needs, bridging the gap between physical hardware and digital intelligence.",
      accent: "text-cyan-400"
    },
    {
      id: "solutions-consulting",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Consulting Services",
      specs: ["Strategic Planning", "Technical Advisory", "Audit & Optimization"],
      desc: "Expert guidance to help you navigate the complex landscape of IT infrastructure and digital transformation across the region.",
      accent: "text-accent"
    },
    {
      id: "solutions-support",
      icon: <Headset className="h-6 w-6" />,
      title: "Technology Support",
      specs: ["24/7 Assistance", "Maintenance Programs", "Incident Management"],
      desc: "Proactive technical support and maintenance programs designed to ensure your critical systems remain operational and peak-performing.",
      accent: "text-green-400"
    }
  ];

  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headline">Precision Solutions for Precise Infrastructure</h3>
          <p className="text-lg text-white/70">
            From proactive monitoring to complete infrastructure integration, Tektonics delivers the expertise and technology you need to protect, optimise, and grow your IT environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol) => {
            const img = PlaceHolderImages.find(i => i.id === sol.id);
            return (
              <Card key={sol.id} className="glass-card overflow-hidden group hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={img?.imageUrl || `https://picsum.photos/seed/${sol.id}/800/600`}
                    alt={sol.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className={`absolute bottom-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-md ${sol.accent}`}>
                    {sol.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white mb-2">{sol.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {sol.specs.map(s => (
                      <Badge key={s} variant="secondary" className="bg-white/5 text-[10px] text-white/60 border-white/10 uppercase tracking-tighter">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{sol.desc}</p>
                  <button className="flex items-center text-accent text-sm font-bold group/btn">
                    Learn More <ChevronRight className="ml-1 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
