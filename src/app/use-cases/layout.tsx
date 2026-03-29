"use client";

import { UseCaseSidebar } from "@/components/use-case-sidebar";
import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function UseCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow pt-32 pb-24 relative container mx-auto px-4 md:px-6 max-w-7xl flex gap-12 lg:gap-24">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="flex-1 max-w-4xl">{children}</div>
        <UseCaseSidebar />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
