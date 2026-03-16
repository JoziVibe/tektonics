"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

export function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');

  const values = [
    {
      icon: <Target className="size-6 text-accent" />,
      title: "Our Mission",
      desc: "To empower African enterprises with world-class DCIM solutions that bridge the gap between physical infrastructure and digital excellence."
    },
    {
      icon: <Lightbulb className="size-6 text-accent" />,
      title: "Our Innovation",
      desc: "Continuously pushing the boundaries of what's possible in IT infrastructure monitoring through AI-driven insights."
    },
    {
      icon: <Users className="size-6 text-accent" />,
      title: "Our Expertise",
      desc: "A multidisciplinary team of African engineers and technologists with decades of experience in global data center standards."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top Section: Intro and Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={teamImg?.imageUrl || "https://picsum.photos/seed/tek-team/1200/800"}
                alt="Tektonics Professional Team"
                width={1200}
                height={800}
                className="object-cover"
                data-ai-hint="business team"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl hidden md:block max-w-xs border-accent/20">
              <div className="text-accent text-3xl font-black mb-1">15+</div>
              <div className="text-white font-bold mb-2">Years Excellence</div>
              <p className="text-white/60 text-sm">Leading the digital transformation of African data centers since 2009.</p>
            </div>
          </div>

          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4 font-headline">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-headline leading-tight">
              African Leaders in <br /><span className="text-gradient">IT Infrastructure</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed font-body">
              Tektonics Systems is more than a solution provider; we are your strategic partner in data center resilience. Our roots are firmly planted in the African soil, giving us a unique perspective on the regional challenges of power, connectivity, and environmental management.
            </p>
            <p className="text-lg text-white/70 mt-4 leading-relaxed font-body">
              We understand that the backbone of Africa's digital economy relies on robust, monitored, and efficient infrastructure. That's why we deliver precision-engineered DCIM solutions that scale with your growth.
            </p>
          </div>
        </div>

        {/* Subsection: Strategic Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {values.map((v, i) => (
            <Card key={i} className="group glass-card border-white/5 hover:border-accent/40 transition-all duration-300 shadow-black/5">
              <CardHeader className="pb-3 text-center">
                <CardDecorator>
                  {v.icon}
                </CardDecorator>
                <h3 className="mt-6 text-xl font-bold text-white font-headline">{v.title}</h3>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-white/60 leading-relaxed font-body text-sm md:text-base">
                  {v.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div className="absolute inset-0 [--border:rgba(18,217,236,0.3)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
    <div className="bg-background/80 absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-accent/20 backdrop-blur-sm rounded-sm">
      {children}
    </div>
  </div>
);