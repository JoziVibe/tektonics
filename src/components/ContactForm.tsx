
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Inquiry Sent",
        description: "Thank you for reaching out. A Tektonics specialist will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-headline leading-tight">
              Ready to <span className="text-gradient">Optimize</span> Your Gateway?
            </h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Whether you're starting a new data center build or optimizing a legacy facility, our experts are ready to assist. Reach out for a free consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Inquiry</h4>
                  <p className="text-white/60">solutions@tektonicsdg.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Regional HQ</h4>
                  <p className="text-white/60">+234 (0) 1 234 5678 (Lagos, NG)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Global Address</h4>
                  <p className="text-white/60">123 Tech Avenue, Victoria Island, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-3xl border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">Business Email</Label>
                  <Input id="email" type="email" required placeholder="john@company.com" className="bg-white/5 border-white/10 text-white focus:border-accent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white/80">Company Name</Label>
                <Input id="company" placeholder="Enterprise Infrastructure Ltd" className="bg-white/5 border-white/10 text-white focus:border-accent" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-white/80">Inquiry Type</Label>
                <select id="service" className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent">
                  <option className="bg-background">General Inquiry</option>
                  <option className="bg-background">DCIM Solution Showcase</option>
                  <option className="bg-background">Security Integration</option>
                  <option className="bg-background">Consulting Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">Your Message</Label>
                <Textarea id="message" required placeholder="How can we help your data center?" className="bg-white/5 border-white/10 text-white focus:border-accent min-h-[120px]" />
              </div>

              <Button type="submit" disabled={submitting} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold group">
                {submitting ? "Sending..." : "Send Inquiry"}
                <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
