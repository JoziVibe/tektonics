"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
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
        {/* Top Section: Intro and Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
            <p className="text-lg text-white/70 leading-relaxed font-body">
              Tektonics Systems is more than a solution provider; we are your strategic partner in data center resilience. Our roots are firmly planted in the African soil, giving us a unique perspective on the regional challenges of power, connectivity, and environmental management. 
            </p>
            <p className="text-lg text-white/70 mt-4 leading-relaxed font-body">
              We understand that the backbone of Africa's digital economy relies on robust, monitored, and efficient infrastructure. That's why we deliver precision-engineered DCIM solutions that scale with your growth.
            </p>
          </div>
        </div>

        {/* Bottom Section: Strategic Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-accent/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 font-headline">{v.title}</h4>
              <p className="text-white/60 leading-relaxed font-body text-sm md:text-base">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
