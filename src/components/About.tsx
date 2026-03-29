"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useReducedMotion } from "framer-motion";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { ReactNode } from "react";

export function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');
  
  // Use the path from JSON if found, otherwise use the explicit lowercase path
  const imgSrc = teamImg?.imageUrl || "/assets/about.jpg";

  const values = [
    {
      icon: Target,
      title: "Infrastructure Assessment",
      description: "We conduct a thorough evaluation of your existing data centre infrastructure, identifying gaps, risks, and opportunities to ensure your environment is built on a solid, well-documented foundation."
    },
    {
      icon: Lightbulb,
      title: "Efficiency Optimisation",
      description: "We analyse your operations to uncover inefficiencies and cost drivers, implementing targeted improvements that streamline performance and reduce unnecessary expenditure across your IT environment."
    },
    {
      icon: Users,
      title: "Knowledge & Growth",
      description: "We equip your team with the expertise and resources needed to elevate data centre operations, helping you extract maximum value from your IT investments and stay ahead of the curve."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-card/40 aspect-[3/2]">
              <Image
                src={imgSrc}
                alt={teamImg?.description || "Tektonics Professional Team"}
                fill
                className="object-cover"
                data-ai-hint={teamImg?.imageHint || "data center team"}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl hidden md:block max-w-xs border-accent/20"
            >
              <div className="text-accent text-3xl font-black mb-1">15+</div>
              <div className="text-white font-bold mb-2">Years Excellence</div>
              <p className="text-white/60 text-sm">Serving clients in the data centre space across the SADC region.</p>
            </motion.div>
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

        <div className="space-y-12">
          <AnimatedContainer className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl font-headline">
              Where Expertise <span className="text-accent">Meets Execution</span>
            </h3>
            <p className="text-white/60 mt-4 font-body leading-relaxed">
              We pride ourselves on solving complex challenges with precision. We embed ourselves in your environment, delivering practical solutions that drive real, measurable results.
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 md:grid-cols-3"
          >
            {values.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
