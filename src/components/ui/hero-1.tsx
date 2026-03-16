"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon, Cpu } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl relative overflow-hidden">
			{/* Top Shades - Adapted for Cyan/Navy */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(18,217,236,0.15),transparent)] contain-strict" />
			</div>

			{/* X Bold Faded Borders */}
			<div
				aria-hidden="true"
				className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
			>
				<div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-white/10" />
				<div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-white/10" />
			</div>

			{/* main content */}
			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30 px-6">
				{/* X Content Faded Borders */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-1 size-full overflow-hidden"
				>
					<div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:left-8" />
					<div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:right-8" />
					<div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:left-12" />
					<div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:right-12" />
				</div>

				<a
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-full border border-accent/20 bg-card/40 backdrop-blur-md px-3 py-1 shadow-lg shadow-accent/5",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="#overview"
				>
					<Cpu className="size-3 text-accent" />
					<span className="text-xs text-white/80 font-medium">New DCIM features deployed</span>
					<span className="block h-5 border-l border-white/10" />
					<ArrowRightIcon className="size-3 text-accent duration-150 ease-out group-hover:translate-x-1" />
				</a>

				<h1
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-5xl font-medium font-headline tracking-tight delay-100 duration-500 ease-out md:text-6xl lg:text-7xl text-white",
						"drop-shadow-[0_0px_30px_rgba(18,217,236,0.3)]"
					)}
				>
					Give your digital <br /> <span className="text-gradient">real estate</span> a voice
				</h1>

				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-lg text-white/70 tracking-wide delay-200 duration-500 ease-out sm:text-xl md:text-2xl leading-relaxed">
					Tektonics leads the way in IT infrastructure management, <br className="hidden md:block" /> providing precision monitoring and strategic optimization for modern data centers.
				</p>

				<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-4 fill-mode-backwards pt-4 delay-300 duration-500 ease-out">
					<Button className="rounded-full bg-primary hover:bg-primary/90 text-white border-none h-12 px-8 text-base font-bold shadow-lg shadow-primary/20" size="lg">
						Explore Solutions
						<ArrowRightIcon className="size-4 ms-2" data-icon="inline-end" />
					</Button>
					<Button className="rounded-full border-accent/30 text-accent hover:bg-accent/10 h-12 px-8 text-base font-bold" size="lg" variant="outline">
						<PhoneCallIcon data-icon="inline-start" className="size-4 mr-2" />
						Book a Call
					</Button>
				</div>
			</div>
		</section>
	);
}

export function LogosSection() {
	return (
		<section className="relative space-y-6 border-t border-white/5 pt-12 pb-16">
			<h2 className="text-center font-bold text-sm text-white/40 tracking-[0.2em] uppercase">
				Trusted by <span className="text-accent">Infrastructure Leaders</span>
			</h2>
			<div className="relative z-10 mx-auto max-w-5xl">
				<LogoCloud logos={logos} />
			</div>
		</section>
	);
}

const logos = [
	{
		src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
		alt: "Nvidia",
	},
	{
		src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
		alt: "Supabase",
	},
	{
		src: "https://storage.efferd.com/logo/openai-wordmark.svg",
		alt: "OpenAI",
	},
	{
		src: "https://storage.efferd.com/logo/turso-wordmark.svg",
		alt: "Turso",
	},
	{
		src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
		alt: "Vercel",
	},
	{
		src: "https://storage.efferd.com/logo/github-wordmark.svg",
		alt: "GitHub",
	},
	{
		src: "https://storage.efferd.com/logo/claude-wordmark.svg",
		alt: "Claude",
	},
	{
		src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
		alt: "Clerk",
	},
];
