
'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, ArrowUpRight } from 'lucide-react';
import { HoverButton } from '@/components/ui/hover-button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type PricingCardProps = {
	title: string;
	imagePath: string;
	features: string[];
	cta?: string;
	className?: string;
};

function FilledCheck() {
	return (
		<div className="bg-primary text-primary-foreground rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

function PricingCard({
	title,
	imagePath,
	features,
	className,
}: PricingCardProps & { imagePath: string }) {
	return (
		<div
			className={cn(
				'bg-card/40 border-white/10 relative overflow-hidden rounded-none border-dashed border',
				'backdrop-blur-md group',
				className,
			)}
		>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-white/5 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
					<div
						aria-hidden="true"
						className={cn(
							'absolute inset-0 size-full mix-blend-overlay opacity-10',
							'bg-[linear-gradient(to_right,white_1px,transparent_1px)]',
							'bg-[size:24px]',
						)}
					/>
				</div>
			</div>

			<div className="relative z-10">
				<div className="flex items-center gap-3 p-4">
					<span className="text-white font-bold font-headline uppercase tracking-tight text-sm">{title}</span>
					<div className="ml-auto">
						<HoverButton className="size-8 p-0 flex items-center justify-center rounded-full">
							<ArrowUpRight className="size-4" />
						</HoverButton>
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
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
			{/* Data Centre Infrastructure (Top Left) */}
			<div
				className={cn(
					'bg-card/40 border-white/10 relative w-full overflow-hidden rounded-none border-dashed border',
					'backdrop-blur-md group',
					'lg:col-span-5',
				)}
			>
				<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
					<div className="from-white/5 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
						<div
							aria-hidden="true"
							className={cn(
								'absolute inset-0 size-full mix-blend-overlay opacity-10',
								'bg-[linear-gradient(to_right,white_1px,transparent_1px)]',
								'bg-[size:24px]',
							)}
						/>
					</div>
				</div>
				<div className="flex items-center gap-3 p-4 relative z-10">
					<span className="text-white font-bold font-headline uppercase tracking-tight text-sm">Data Centre Infrastructure</span>
					<div className="ml-auto">
						<HoverButton className="size-8 p-0 flex items-center justify-center rounded-full">
							<ArrowUpRight className="size-4" />
						</HoverButton>
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
