"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GridPattern } from '@/components/ui/grid-pattern';

type Testimonial = {
	name: string;
	role: string;
	image: string;
	company: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			"Tektonics transformed our data centre operations completely. Their team identified critical vulnerabilities we hadn't even considered, and the turnaround was seamless. We haven't experienced unplanned downtime since.",
		name: "Sipho Dlamini",
		role: "IT Infrastructure Manager",
		company: "Johannesburg Water",
		image: "/assets/Testimonials/Sipho Dlamini.png",
	},
	{
		quote:
			"The depth of knowledge the Tektonics team brings is unmatched. Their DCIM implementation was handled with precision and professionalism, and the ongoing support has been exceptional from day one.",
		name: "Amara Osei",
		role: "Head of Technology",
		company: "Giza Systems",
		image: "/assets/Testimonials/Amara Osei.png",
	},
	{
		quote:
			"We engaged Tektonics for a full server room revamp and couldn't be happier with the outcome. They delivered on time, within budget, and the results have significantly improved our operational efficiency.",
		name: "Fatima Al-Hassan",
		role: "Data Centre Director",
		company: "Orange Telecom",
		image: "/assets/Testimonials/Fatima Al-Hassan.png",
	},
	{
		quote:
			"Their consulting team gave us a clear roadmap for reducing our energy consumption by nearly 30%. Tektonics doesn't just advise — they roll up their sleeves and get it done alongside your team.",
		name: "James Gladstone",
		role: "CTO",
		company: "Safaricom",
		image: "/assets/Testimonials/James Gladstone.png",
	},
	{
		quote:
			"From initial assessment through to full deployment, the Tektonics team was thorough, communicative, and highly skilled. They made an incredibly complex project feel completely manageable.",
		name: "Lerato Molefe",
		role: "Systems Administrator",
		company: "City of Cape Town",
		image: "/assets/Testimonials/Lerato Molefe.png",
	},
	{
		quote:
			"We've worked with several IT infrastructure partners over the years, but none have matched Tektonics' level of expertise and commitment. They genuinely care about solving your problems, not just fulfilling a contract.",
		name: "David Kariuki",
		role: "IT Operations Lead",
		company: "NTT Data Africa",
		image: "/assets/Testimonials/David Kariuki.png",
	},
];

export function TestimonialsSection() {
	return (
		<section id="success" className="relative w-full py-24 px-4 overflow-hidden">
			<div aria-hidden className="absolute inset-0 isolate z-0 pointer-events-none">
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(18,217,236,0.06)_0,transparent_80%)] absolute top-0 left-0 h-[800px] w-[400px] -translate-y-1/2 -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,150,195,0.04)_0,transparent_80%)] absolute top-0 left-0 h-[800px] w-[200px] [translate:5%_-50%] -rotate-45 rounded-full" />
			</div>
			<div className="container mx-auto max-w-7xl relative z-10 space-y-12">
				<div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm font-headline">Proven Impact</h2>
					<h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-headline leading-tight">
						Real Results, <span className="text-gradient">Real Voices</span>
					</h3>
					<p className="text-white/60 text-base md:text-lg font-body leading-relaxed">
						See how African infrastructure leaders are thriving with Tektonics — real stories of resilience, impact, and digital growth.
					</p>
				</div>
				<div className="relative grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/10 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
	const [pattern, setPattern] = React.useState<number[][]>([]);

	React.useEffect(() => {
		setPattern(genRandomPattern());
	}, []);

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
      whileInView={{
        filter: 'blur(0px)',
        translateY: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.8 }}
      className="relative overflow-hidden p-8 group hover:bg-white/5 transition-colors"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="from-accent/20 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x={-12}
            y={4}
            squares={pattern as [number, number][]}
            className="fill-accent/10 stroke-accent/20 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            alt={testimonial.name}
            src={testimonial.image}
            loading="lazy"
            className="size-12 rounded-full border border-accent/20 p-0.5 object-cover"
          />
          <div className="-space-y-0.5">
            <p className="text-white font-bold text-base">{testimonial.name}</p>
            <span className="text-accent block text-[12px] font-medium tracking-tight">
              {testimonial.role}
            </span>
            <span className="text-white/40 block text-[11px] font-medium">
              {testimonial.company}
            </span>
          </div>
        </div>
        
        <blockquote className="relative">
          <p className="text-white/70 text-sm font-normal leading-relaxed tracking-wide italic font-body">
            "{testimonial.quote}"
          </p>
        </blockquote>
      </div>
    </motion.div>
  );
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
