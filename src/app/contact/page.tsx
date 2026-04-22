"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-white">
      <Header stickyMode="immediate" />
      
      <div className="grow">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden min-h-[60vh] flex flex-col justify-center border-b border-white/5">
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed mix-blend-luminosity opacity-65"
            style={{ backgroundImage: 'url("/assets/Backgrounds/Product Hero Image.jpg")' }}
          />
          {/* Subtle Color Overlay */}
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-6 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-500 duration-500 ease-out">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="size-3" />
              <span className="text-white">Contact</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white mb-6 leading-tight">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-white/60 font-body leading-relaxed max-w-2xl mx-auto">
              Our experts are ready to help you optimize your data center environment. Reach out today for a consultation or product demo.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION (Existing Form + Info) */}
        <ContactForm />

        {/* FULL WIDTH MAP SECTION */}
        <section className="w-full h-[500px] relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-primary/10 pointer-events-none z-10" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.385368305716!2d28.140733!3d-25.823868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95646f17e3e9d7%3A0xc3f8e58f00000000!2s92%20Willem%20Botha%20Dr%2C%20Eldoraigne%2C%20Centurion%2C%200157%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus!4v1710000000000" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80"
          />
        </section>
      </div>

      <Footer />
    </main>
  );
}
