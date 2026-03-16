'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { Cpu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn('fixed top-0 z-[90] w-full transition-all duration-300 border-b border-transparent', {
				'bg-background/20 backdrop-blur-lg border-white/5 py-1': scrolled,
				'py-4': !scrolled,
			})}
		>
			<nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
				<Link href="/" className="flex items-center gap-2 group">
					<div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
						<Cpu className="h-5 w-5 text-white" />
					</div>
					<span className="text-xl font-bold tracking-tight text-white font-headline uppercase">
						TEKTONICS
					</span>
				</Link>

				<div className="flex items-center gap-4">
					<Button className="rounded-full bg-primary hover:bg-primary/90 hidden sm:flex" size="sm">
						Get Started
					</Button>
				</div>
			</nav>
		</header>
	);
}
