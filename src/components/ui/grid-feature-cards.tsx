"use client"

import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const [pattern, setPattern] = useState<number[][]>([]);

	useEffect(() => {
		setPattern(genRandomPattern());
	}, []);

	return (
		<div className={cn('relative overflow-hidden p-8 group', className)} {...props}>
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
				<feature.icon className="text-accent size-8 mb-6" strokeWidth={1.5} aria-hidden />
				<h3 className="text-xl font-bold text-white font-headline">{feature.title}</h3>
				<p className="text-white/60 mt-4 text-base font-normal leading-relaxed font-body">{feature.description}</p>
			</div>
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
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
