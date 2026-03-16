
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <SuccessStories />
      <AiRecommender />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  );
}
