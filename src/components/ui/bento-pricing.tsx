'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, ArrowUpRight } from 'lucide-react';
import { HoverButton } from '@/components/ui/hover-button';
import Image from 'next/image';
import Link from 'next/link';

type PricingCardProps = {
	title: string;
	imagePath: string;
	features: string[];
	cta?: string;
	className?: string;
	href: string;
};

function FilledCheck() {
	return (
		<div className="bg-primary text-primary-foreground rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && squares.length > 0 && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, 
		Math.floor(Math.random() * 6) + 1,
	]);
}

function PricingCard({
	title,
	imagePath,
	features,
	className,
	href,
}: PricingCardProps) {
    const [pattern, setPattern] = useState<number[][]>([]);

	useEffect(() => {
		setPattern(genRandomPattern());
	}, []);

	return (
		<div
			className={cn(
				'bg-transparent border-white/10 relative overflow-hidden rounded-none border-dashed border',
				'group',
				className,
			)}
		>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20 group-hover:opacity-40 transition-opacity">
				<div className="from-accent/20 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={pattern}
						className="fill-accent/10 stroke-accent/20 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>

			<div className="relative z-10">
				<div className="flex items-center gap-3 p-4">
					<span className="text-white font-bold font-headline uppercase tracking-tight text-sm">{title}</span>
					<div className="ml-auto">
						<Link href={href}>
							<HoverButton className="flex">
								<ArrowUpRight className="size-4" />
							</HoverButton>
						</Link>
					</div>
				</div>

				<div className="px-4 py-2 text-left">
					<div className="h-16 w-16 relative rounded-none overflow-hidden">
						<Image
							src={imagePath}
							alt={title}
							fill
							sizes="64px"
							className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
						/>
					</div>
				</div>

				<ul className="text-white/60 grid gap-4 p-4 text-sm">
					{features.map((f, i) => (
						<li key={i} className="flex items-center gap-3">
							<FilledCheck />
							<span>{f}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export function BentoPricing() {
    const [pattern, setPattern] = useState<number[][]>([]);

	useEffect(() => {
		setPattern(genRandomPattern());
	}, []);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
			{/* Data Centre Infrastructure (Top Left) */}
			<div
				className={cn(
					'bg-transparent border-white/10 relative w-full overflow-hidden rounded-none border-dashed border',
					'group',
					'lg:col-span-5',
				)}
			>
				<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20 group-hover:opacity-40 transition-opacity">
					<div className="from-accent/20 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
						<GridPattern
                            width={20}
                            height={20}
                            x="-12"
                            y="4"
                            squares={pattern}
                            className="fill-accent/10 stroke-accent/20 absolute inset-0 h-full w-full mix-blend-overlay"
                        />
					</div>
				</div>
				<div className="flex items-center gap-3 p-4 relative z-10">
					<span className="text-white font-bold font-headline uppercase tracking-tight text-sm">Data Centre Infrastructure</span>
					<div className="ml-auto">
						<Link href="/solutions#data-centre-infrastructure">
							<HoverButton className="flex">
								<ArrowUpRight className="size-4" />
							</HoverButton>
						</Link>
					</div>
				</div>
				<div className="flex flex-col p-4 lg:flex-row gap-6 relative z-10 items-start">
					<div className="pb-4 shrink-0 text-left">
						<div className="h-16 w-16 relative rounded-none overflow-hidden">
							<Image
								src="/assets/Solutions Icons/data center infrastructure.png"
								alt="Data Centre Infrastructure"
								fill
								sizes="64px"
								className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
							/>
						</div>
					</div>
					<ul className="text-white/60 grid gap-4 text-sm flex-1">
						{[
							'Security & environmental monitoring deployment',
							'Server room builds and revamps',
							'Hardware integration and management',
							'DCIM software supply and deployment',
							'Peak performance, zero downtime',
						].map((f, i) => (
							<li key={i} className="flex items-center gap-3">
								<FilledCheck />
								<span className="leading-relaxed">{f}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Consulting Services (Top Right) */}
			<PricingCard
				title="Consulting Services"
				imagePath="/assets/Solutions Icons/Consulting Services.png"
				href="/solutions#consulting-services"
				features={[
					'Energy conservation and auditing expertise',
					'DCIM tools training and support',
					'Data collection and analysis guidance',
					'Strategic IT management made easy',
				]}
				className="lg:col-span-3"
			/>

			{/* Software Development (Bottom Left) */}
			<PricingCard
				title="Software Development"
				imagePath="/assets/Solutions Icons/Software Development.png"
				href="/solutions#software-development"
				features={[
					'Tailored systems integration solutions',
					'Custom software and hardware combined',
					'Scalable, problem-solving architectures built',
					'Aligned to your operational goals',
				]}
				className="lg:col-span-4"
			/>

			{/* Technology Support (Bottom Right) */}
			<PricingCard
				title="Technology Support"
				imagePath="/assets/Solutions Icons/Technology Support.png"
				href="/solutions#technology-support"
				features={[
					'Expert technology sourcing guidance',
					'Vendor evaluation and cost outlining',
					'Desktop and server environment support',
					'Data security and compliance assured',
				]}
				className="lg:col-span-4"
			/>
		</div>
	);
}
