'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Zap, Box, Trophy, Mail, ShieldCheck, ChevronDown, Monitor, Droplet, BellRing, Activity, GitCommit, Network, Server, Database, Cloud, BarChart3, Layers } from 'lucide-react';
import Link from 'next/link';
import { NavBar } from './tubelight-navbar';
import { LucideIcon } from 'lucide-react';
import { GradientButton } from './gradient-button';
import Image from 'next/image';

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  subItems?: { 
    name: string; 
    url: string; 
    icon: LucideIcon;
    subItems?: { name: string; url: string; icon: LucideIcon }[]
  }[]
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Solutions', url: '/solutions', icon: Zap },
  { 
    name: 'Products', 
    url: '#', 
    icon: Box,
    subItems: [
      { 
        name: 'Environmentals', 
        url: '#', 
        icon: Droplet,
        subItems: [
          { name: 'Netbotz', url: '/product/netbotz', icon: ShieldCheck },
          { name: 'Tektonics Flux', url: '/product/flux', icon: Activity },
          { name: 'Notifications Gateway', url: '/product/notifications-gateway', icon: ShieldCheck },
        ]
      },
      { 
        name: 'Monitoring Software', 
        url: '#', 
        icon: Monitor,
        subItems: [
          { name: 'Thingsboard', url: '/product/thingsboard-pe', icon: Database },
          { name: 'NetXMS', url: '/product/netxms', icon: Network },
          { name: 'IT Expert', url: '/product/ecostruxure-it-expert', icon: Cloud },
          { name: 'Power Management Expert', url: '/product/ecostruxure-power-monitoring-expert', icon: Zap },
        ]
      },
      { 
        name: 'DCIM', 
        url: '#', 
        icon: Layers,
        subItems: [
          { name: 'IT Advisor', url: '/product/ecostruxure-it-advisor', icon: BarChart3 },
          { name: 'Data Center Expert', url: '/product/ecostruxure-data-center-expert', icon: Server },
        ]
      },
    ]
  },
  { 
    name: 'Use Cases', 
    url: '/#success', 
    icon: Trophy,
    subItems: [
      { name: 'DCIM', url: '/use-cases/dcim', icon: Monitor },
      { name: 'Environmental Monitoring', url: '/use-cases/environmental-monitoring', icon: Droplet },
      { name: 'Notifications Gateway', url: '/use-cases/notifications-gateway', icon: BellRing },
      { name: 'Tektonics Flux', url: '/use-cases/tektonics-flux', icon: Activity },
      { name: 'Dry Contact Monitoring', url: '/use-cases/dry-contact-monitoring', icon: GitCommit },
      { name: 'NetXMS', url: '/use-cases/netxms', icon: Network },
    ]
  },
  { name: 'Contact', url: '/contact', icon: Mail },
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
				<Link href="/" className="flex items-center group shrink-0 h-12 py-1.5">
          <div className="relative h-full aspect-[4/1]">
					  <Image 
              src="/assets/Brand Identity/D2 High-Resolution White Transparent.png" 
              alt="Tektonics Logo" 
              fill
              className="object-contain"
            />
          </div>
				</Link>

				<div className="hidden lg:flex items-center justify-center flex-1 px-4">
          <NavBar items={navItems} className="relative translate-x-0 left-0 top-0 -translate-y-0 mb-0 pt-0" />
        </div>

				<div className="flex items-center gap-4 shrink-0">
          <Link href="/contact">
					  <GradientButton className="hidden sm:flex">
						  Work With Us
					  </GradientButton>
          </Link>
				</div>
			</nav>
		</header>
	);
}
