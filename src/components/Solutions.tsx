
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Thermometer, Box, Lock, ChevronRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Solutions() {
  const solutions = [
    {
      id: "solutions-power",
      icon: <Zap className="h-6 w-6" />,
      title: "Power Intelligence",
      specs: ["PDU Monitoring", "UPS Analytics", "Generator Telemetry"],
      desc: "Gain complete visibility into your power chain, from utility entrance to individual socket-level consumption.",
      accent: "text-yellow-400"
    },
    {
      id: "solutions-environment",
      icon: <Thermometer className="h-6 w-6" />,
      title: "Environmental Guardian",
      specs: ["Temp/Humidity Sensors", "Leak Detection", "Airflow Analysis"],
      desc: "Protect critical hardware with precise environmental monitoring designed for high-density environments.",
      accent: "text-blue-400"
    },
    {
      id: "solutions-assets",
      icon: <Box className="h-6 w-6" />,
      title: "Asset Lifecycle Manager",
      specs: ["RFID Tracking", "Rack Space Optimization", "Capacity Planning"],
      desc: "Eliminate spreadsheet errors with automated physical asset tracking and rack space management.",
      accent: "text-green-400"
    },
    {
      id: "solutions-security",
      icon: <Lock className="h-6 w-6" />,
      title: "SecureGate Integration",
      specs: ["Biometric Access", "CCTV Sync", "Audit Logging"],
      desc: "Converged security solutions that tie physical access directly to your IT management console.",
      accent: "text-red-400"
    }
  ];

  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">DCIM Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headline">Precision Solutions for Precise Infrastructure</h3>
          <p className="text-lg text-white/70">
            Our comprehensive DCIM suite addresses the most critical aspects of data center operations with modular, scalable technology.
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
                    Technical Specs <ChevronRight className="ml-1 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
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
