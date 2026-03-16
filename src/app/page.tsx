
import { Header } from "@/components/ui/header-1";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { SuccessStories } from "@/components/SuccessStories";
import { AiRecommender } from "@/components/AiRecommender";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <HeroSection />
        <LogosSection />
        <About />
        <Solutions />
        <SuccessStories />
        <AiRecommender />
        <ContactForm />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
}
