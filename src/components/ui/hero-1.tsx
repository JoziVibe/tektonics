"use client";

import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRightIcon, Cpu } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import ShaderBackground from "@/components/ui/shader-background";

export function HeroSection() {
	return (
		<section className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center">
			<ShaderBackground />

			<div className="mx-auto w-full max-w-7xl relative">

			{/* main content */}
			<div className="relative flex flex-col items-center justify-center gap-5 px-6 py-20 lg:py-0">

				<a
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-full border border-accent/20 bg-card/40 backdrop-blur-md px-3 py-1 shadow-lg shadow-accent/5",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="#overview"
				>
					<Cpu className="size-3 text-accent" />
					<span className="text-xs text-white/80 font-medium font-body">New DCIM features deployed</span>
					<span className="block h-5 border-l border-white/10" />
					<ArrowRightIcon className="size-3 text-accent duration-150 ease-out group-hover:translate-x-1" />
				</a>

				<h1
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-5xl font-semibold font-headline tracking-tight delay-100 duration-500 ease-out md:text-6xl lg:text-7xl text-white",
						"drop-shadow-[0_0px_30px_rgba(18,217,236,0.3)]"
					)}
				>
					Give your digital <br /> <span className="text-gradient">real estate</span> a voice
				</h1>

				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-[16px] text-white/70 tracking-wide delay-200 duration-500 ease-out leading-relaxed font-body">
					Tektonics Leads the way in African IT management, providing precision monitoring and strategic optimization for modern data centers.
				</p>

				<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-4 fill-mode-backwards pt-4 delay-300 duration-500 ease-out">
					<GradientButton>
						Explore Solutions
						<ArrowRightIcon className="size-4 ms-2" data-icon="inline-end" />
					</GradientButton>
				</div>
			</div>
			</div>
		</section>
	);
}

export function LogosSection() {
	return (
		<section className="relative space-y-6 border-t border-white/5 pt-12 pb-16">
			<h2 className="text-center font-bold text-sm text-white/40 tracking-[0.2em] uppercase font-headline">
				Trusted by <span className="text-accent">Infrastructure Leaders</span>
			</h2>
			<div className="relative z-10 mx-auto max-w-7xl">
				<LogoCloud logos={logos} />
			</div>
		</section>
	);
}

const logos = [
	{ src: "/assets/Logos/1.png", alt: "Logo 1" },
	{ src: "/assets/Logos/2.png", alt: "Logo 2" },
	{ src: "/assets/Logos/3.png", alt: "Logo 3" },
	{ src: "/assets/Logos/4.png", alt: "Logo 4" },
	{ src: "/assets/Logos/5.png", alt: "Logo 5" },
	{ src: "/assets/Logos/6.png", alt: "Logo 6" },
	{ src: "/assets/Logos/7.png", alt: "Logo 7" },
	{ src: "/assets/Logos/8.png", alt: "Logo 8" },
	{ src: "/assets/Logos/9.png", alt: "Logo 9" },
	{ src: "/assets/Logos/Untitled design.png", alt: "Logo 10" },
];
