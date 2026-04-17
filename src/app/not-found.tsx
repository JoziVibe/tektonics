import Link from 'next/link';
import { Header } from '@/components/ui/header-1';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-accent/30 overflow-x-clip">
      <Header stickyMode="immediate" />
      
      <div className="grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-1" />
        
        <div className="relative z-10 text-center space-y-8 max-w-2xl">
          <div className="mx-auto w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
            <FileQuestion className="size-12 text-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Page <span className="text-gradient">Not Found</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            The page you are looking for might have been moved, deleted, or does not exist. Let's get you back on track.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <GradientButton className="rounded-full px-8 py-4 text-base h-auto">
                Back to Home <ArrowRight className="ml-2 size-5" />
              </GradientButton>
            </Link>
            <Link href="/contact" className="text-white/60 hover:text-white font-medium underline underline-offset-4 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
