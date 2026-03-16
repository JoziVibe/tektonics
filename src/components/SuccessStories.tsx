
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote, ArrowRight } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      id: "success-lagos",
      client: "MainOne Data Center",
      location: "Lagos, Nigeria",
      result: "30% Energy Reduction",
      quote: "Tektonics' power monitoring suite gave us the granular visibility we needed to optimize our cooling systems across the entire facility.",
      image: PlaceHolderImages.find(i => i.id === 'success-lagos')
    },
    {
      id: "success-nairobi",
      client: "Safaricom Cloud",
      location: "Nairobi, Kenya",
      result: "99.999% Uptime Goal",
      quote: "The environmental guardian sensors have preemptively alerted us to multiple leak and heat-spot risks before they could impact service.",
      image: PlaceHolderImages.find(i => i.id === 'success-nairobi')
    },
    {
      id: "success-capetown",
      client: "Cape Tech Hub",
      location: "Cape Town, SA",
      result: "RFID Asset Accuracy",
      quote: "Auditing our 500+ racks used to take weeks. With Tektonics' RFID solution, it now takes less than 24 hours with zero manual errors.",
      image: PlaceHolderImages.find(i => i.id === 'success-capetown')
    }
  ];

  return (
    <section id="success" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Proven Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-headline">Success Across the Continent</h3>
          </div>
          <p className="text-white/60 max-w-sm mb-2">
            Major enterprises trust Tektonics to keep their critical infrastructure running optimally.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="glass-card group rounded-2xl overflow-hidden hover:bg-white/5 transition-colors border-white/5">
              <div className="relative h-64">
                <Image
                  src={story.image?.imageUrl || `https://picsum.photos/seed/${story.id}/600/400`}
                  alt={story.client}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="modern city"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-accent font-black text-2xl mb-1">{story.result}</div>
                  <div className="text-white font-bold">{story.client}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest">{story.location}</div>
                </div>
              </div>
              <div className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-white/70 italic leading-relaxed mb-8">
                  "{story.quote}"
                </p>
                <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-accent transition-colors group/link">
                  View Full Case Study <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
