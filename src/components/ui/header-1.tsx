'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { Cpu } from 'lucide-react';
import Link from 'next/link';
import { NavBar } from './tubelight-navbar';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface HeaderProps {
  items: NavItem[];
}

export function Header({ items }: HeaderProps) {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn('fixed top-0 z-[90] w-full transition-all duration-300 border-b border-transparent', {
				'bg-background/80 backdrop-blur-xl border-white/5 py-0': scrolled,
				'py-2': !scrolled,
			})}
		>
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
				<Link href="/" className="flex items-center gap-2 group shrink-0">
					<div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
						<Cpu className="h-5 w-5 text-white" />
					</div>
					<span className="text-xl font-bold tracking-tight text-white font-headline uppercase">
						TEKTONICS
					</span>
				</Link>

				<div className="hidden lg:flex items-center justify-center flex-1 px-4">
          <NavBar items={items} className="relative translate-x-0 left-0 top-0 -translate-y-0 mb-0 pt-0" />
        </div>

				<div className="flex items-center gap-4 shrink-0">
					<Button className="rounded-full bg-primary hover:bg-primary/90 hidden sm:flex font-bold" size="sm">
						Get Started
					</Button>
				</div>
			</nav>
      
      {/* Mobile Nav - only visible on mobile as a bottom pill if needed, 
          but since it's integrated above, we handle visibility there */}
		</header>
	);
}
