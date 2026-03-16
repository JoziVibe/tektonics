
"use client";

import Image from "next/image";
import { CheckCircle2, Target, Lightbulb, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');

  const values = [
    {
      icon: <Target className="h-6 w-6 text-accent" />,
      title: "Our Mission",
      desc: "To empower African enterprises with world-class DCIM solutions that bridge the gap between physical infrastructure and digital excellence."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      title: "Our Innovation",
      desc: "Continuously pushing the boundaries of what's possible in IT infrastructure monitoring through AI-driven insights."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Our Expertise",
      desc: "A multidisciplinary team of African engineers and technologists with decades of combined experience in global data center standards."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-headline leading-tight">
              African Leaders in <br/><span className="text-primary">IT Infrastructure</span>
            </h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Tektonics Digital Gateway is more than a solution provider; we are your strategic partner in data center resilience. Our roots are firmly planted in the African soil, giving us a unique perspective on the regional challenges of power, connectivity, and environmental management.
            </p>

            <div className="space-y-8">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-white/60 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
