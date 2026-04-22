"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { GradientButton } from "@/components/ui/gradient-button";

export function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const sanitizeInput = (text: string) => {
    // Basic sanitization: remove HTML tags and common script patterns
    return text.replace(/<[^>]*>?/gm, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '');
  };

  const containsForbiddenContent = (text: string) => {
    // Check for URLs (http/https/www)
    const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
    // Check for common code patterns (brackets, semi-colons, script tags)
    const codePattern = /[<>{};]|\b(script|function|const|let|var|eval)\b/gi;
    
    return urlPattern.test(text) || codePattern.test(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for URLs and Code
    if (containsForbiddenContent(formData.name) || 
        containsForbiddenContent(formData.company) || 
        containsForbiddenContent(formData.message)) {
      toast({
        variant: "destructive",
        title: "Submission Blocked",
        description: "Links and code snippets are not allowed for security reasons.",
      });
      return;
    }

    setSubmitting(true);

    const whatsappNumber = "27615441608";
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedCompany = sanitizeInput(formData.company);
    const sanitizedMessage = sanitizeInput(formData.message);

    const text = `*New Inquiry - Tektonics Systems*\n\n*Name:* ${sanitizedName}\n*Email:* ${sanitizedEmail}\n*Company:* ${sanitizedCompany || "N/A"}\n\n*Message:* ${sanitizedMessage}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setSubmitting(false);
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Redirecting to WhatsApp",
        description: "Your inquiry has been formatted. Please send the message in the WhatsApp window.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4 font-headline">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-headline leading-tight">
              Ready to <span className="text-gradient">Optimize</span> Your Gateway?
            </h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-body">
              Whether you're starting a new data center build or optimizing a legacy facility, our experts are ready to assist. Reach out for a free consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-headline">Email Inquiry</h4>
                  <p className="text-white/60 font-body">info@tektonics.africa</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold mb-1 font-headline tracking-wide uppercase text-xs opacity-50">South Africa HQ</h4>
                  <p className="text-white/60 font-body">+27-12-743-5757 (Pretoria, ZA)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold mb-1 font-headline tracking-wide uppercase text-xs opacity-50">East Africa Office</h4>
                  <p className="text-white/60 font-body text-sm">+254-76-806-0051 / +254-20-206-0050 (Nairobi, KE)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-headline">Head Office</h4>
                  <p className="text-white/60 font-body text-sm">Unit 4, 92 Willem Botha Dr, Eldoraigne, Centurion, 0157</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden bg-background/40 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80 font-headline">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white focus:border-accent font-body hover:bg-white/10 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 font-headline">Business Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@company.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white focus:border-accent font-body hover:bg-white/10 transition-colors" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white/80 font-headline">Company Name</Label>
                <Input 
                  id="company" 
                  placeholder="Enterprise Infrastructure Ltd" 
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white focus:border-accent font-body hover:bg-white/10 transition-colors" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80 font-headline">Your Message</Label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="How can we help your data center?" 
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white focus:border-accent min-h-[120px] font-body hover:bg-white/10 transition-colors" 
                />
              </div>

              <GradientButton type="submit" disabled={submitting} className="w-full mt-4">
                {submitting ? "Processing..." : "Send via WhatsApp"}
                <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
