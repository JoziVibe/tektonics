'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, SparklesIcon } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

type PricingCardProps = {
	titleBadge: string;
	priceLabel: string;
	priceSuffix?: string;
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
	titleBadge,
	priceLabel,
	priceSuffix = '/month',
	features,
	cta = 'Learn More',
	className,
}: PricingCardProps) {
	return (
		<div
			className={cn(
				'bg-card/40 border-white/10 relative overflow-hidden rounded-xl border',
				'backdrop-blur-md',
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
					<Badge variant="secondary" className="bg-secondary/50 text-white border-white/5">{titleBadge}</Badge>
					<div className="ml-auto">
						<GradientButton size="sm">
							{cta}
						</GradientButton>
					</div>
				</div>

				<div className="flex items-end gap-2 px-4 py-2">
					<span className="font-mono text-5xl font-semibold tracking-tight text-white">
						{priceLabel}
					</span>
					{priceLabel.toLowerCase() !== 'free' && (
						<span className="text-white/50 text-sm">{priceSuffix}</span>
					)}
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
			<div
				className={cn(
					'bg-card/40 border-white/10 relative w-full overflow-hidden rounded-xl border',
					'backdrop-blur-md',
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
					<Badge variant="secondary" className="bg-accent/20 text-accent border-accent/20">CREATORS SPECIAL</Badge>
					<Badge variant="outline" className="hidden lg:flex border-white/10 text-white/70">
						<SparklesIcon className="me-1 size-3" /> Most Recommended
					</Badge>
					<div className="ml-auto">
						<GradientButton size="sm">Learn More</GradientButton>
					</div>
				</div>
				<div className="flex flex-col p-4 lg:flex-row gap-6 relative z-10">
					<div className="pb-4 lg:w-[30%]">
						<span className="font-mono text-5xl font-semibold tracking-tight text-white">
							$19
						</span>
						<span className="text-white/50 text-sm">/month</span>
					</div>
					<ul className="text-white/60 grid gap-4 text-sm lg:w-[70%]">
						{[
							'Perfect for individual bloggers',
							'freelancers and entrepreneurs',
							'AI-Powered editing tools',
							'Basic Analytics to track content performance',
						].map((f, i) => (
							<li key={i} className="flex items-center gap-3">
								<FilledCheck />
								<span className="leading-relaxed">{f}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			<PricingCard
				titleBadge="STARTERS"
				priceLabel="$0"
				features={[
					'Perfect for beginners',
					'Unlimited Content Generation',
					'AI-Powered editing tools',
				]}
				className="lg:col-span-3"
			/>

			<PricingCard
				titleBadge="TEAMS"
				priceLabel="$49"
				features={[
					'Ideal for small teams and agencies',
					'Collaborative features like shared projects',
					'Advanced Analytics to optimize content strategy',
				]}
				className="lg:col-span-4"
			/>

			<PricingCard
				titleBadge="ENTERPRISE"
				priceLabel="$99"
				features={[
					'Designed for large companies',
					'high-volume content creators',
					'dedicated account management',
				]}
				className="lg:col-span-4"
			/>
		</div>
	);
}
