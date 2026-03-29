'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { Cpu, Home, Zap, Box, Trophy, Mail, ShieldCheck, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { NavBar } from './tubelight-navbar';
import { LucideIcon } from 'lucide-react';
import { GradientButton } from './gradient-button';

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  subItems?: { name: string; url: string; icon: LucideIcon }[]
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Solutions', url: '/#solutions', icon: Zap },
  { 
    name: 'Products', 
    url: '#', 
    icon: Box,
    subItems: [
      { name: 'Notifications Gateway', url: '/product/notifications-gateway', icon: ShieldCheck },
      { name: 'Tektonics Flux', url: '/product/flux', icon: Zap },
    ]
  },
  { name: 'Use Cases', url: '/#success', icon: Trophy },
  { name: 'Contact', url: '/#contact', icon: Mail },
];

interface HeaderProps {
  items?: NavItem[];
  stickyMode?: "viewport" | "immediate";
}

export function Header({ items, stickyMode = "viewport" }: HeaderProps) {
	const navItems = items && items.length > 0 ? items : DEFAULT_NAV_ITEMS;
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const onScroll = () => {
			const threshold = stickyMode === "viewport" ? window.innerHeight - 80 : 20;
			setScrolled(window.scrollY > threshold);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, [stickyMode]);

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
          <NavBar items={navItems} className="relative translate-x-0 left-0 top-0 -translate-y-0 mb-0 pt-0" />
        </div>

				<div className="flex items-center gap-4 shrink-0">
					<GradientButton className="hidden sm:flex">
						Get Started
					</GradientButton>
				</div>
			</nav>
		</header>
	);
}
