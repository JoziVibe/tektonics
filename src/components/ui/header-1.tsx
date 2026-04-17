'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, Zap, Box, Trophy, Mail, ShieldCheck, ChevronDown, Monitor, Droplet, 
  BellRing, Activity, GitCommit, Network, Server, Database, Cloud, BarChart3, 
  Layers, Menu, X, ChevronRight, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import { NavBar } from './tubelight-navbar';
import { LucideIcon } from 'lucide-react';
import { GradientButton } from './gradient-button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
	const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

	useEffect(() => {
		const onScroll = () => {
			const threshold = stickyMode === "viewport" ? window.innerHeight - 80 : 20;
			setScrolled(window.scrollY > threshold);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, [stickyMode]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setExpandedItems([]); // Reset expanded items when closing menu
    }
  }, [mobileMenuOpen]);

  const toggleItem = (name: string, level: number) => {
    setExpandedItems(prev => {
      const isExpanded = prev.includes(name);
      
      if (isExpanded) {
        // Just remove this item and its children
        return prev.filter(i => !i.startsWith(name));
      } else {
        // Expand this item, but close other items AT THE SAME LEVEL
        // A level is determined by the number of hyphens or a specific level logic
        // Level 1: "Products", "Use Cases"
        // Level 2: "Products-Environmentals", etc.
        
        const filtered = prev.filter(i => {
           if (level === 1) {
             // If we're at level 1, close all other level 1 items (and their children)
             // Level 1 items don't have hyphens
             return i.includes('-'); 
           }
           if (level === 2) {
             // If we're at level 2, close all other level 2 items in the SAME parent
             const parent = name.split('-')[0];
             if (i.startsWith(parent + '-')) {
                return false; // Close it
             }
             return true;
           }
           return true;
        });

        return [...filtered, name];
      }
    });
  };

	return (
		<header
			className={cn('fixed top-0 z-[100] w-full transition-all duration-300 border-b border-transparent', {
				'bg-[#020c1b]/95 backdrop-blur-xl border-white/5 py-0': scrolled || mobileMenuOpen,
				'py-2': !scrolled && !mobileMenuOpen,
			})}
		>
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
				<Link href="/" className="flex items-center group shrink-0 h-12 py-1.5 relative z-[110]">
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

				<div className="flex items-center gap-4 shrink-0 relative z-[110]">
          <Link href="/contact" className="hidden sm:flex">
					  <GradientButton>
						  Work With Us
					  </GradientButton>
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
				</div>
			</nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-20 z-[90] bg-[#020c1b] lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-2 pb-32">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-white/5 pb-2">
                  {item.subItems ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleItem(item.name, 1)}
                        className="flex items-center justify-between w-full text-left py-1"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="size-5 text-accent" />
                          <span className="text-lg font-headline font-bold text-white">{item.name}</span>
                        </div>
                        <ChevronDown className={cn("size-5 text-white/40 transition-transform", expandedItems.includes(item.name) && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedItems.includes(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-8 space-y-1 pt-1"
                          >
                            {item.subItems.map((sub) => (
                              <div key={sub.name} className="space-y-1">
                                {sub.subItems ? (
                                  <>
                                    <button
                                      onClick={() => toggleItem(`${item.name}-${sub.name}`, 2)}
                                      className="flex items-center justify-between w-full text-left py-1.5 px-3 rounded-xl bg-white/5 border border-white/5 text-white/70"
                                    >
                                      <div className="flex items-center gap-3">
                                        <sub.icon className="size-4 text-accent/60" />
                                        <span className="text-sm font-medium">{sub.name}</span>
                                      </div>
                                      <ChevronDown className={cn("size-4 text-white/40 transition-transform", expandedItems.includes(`${item.name}-${sub.name}`) && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                      {expandedItems.includes(`${item.name}-${sub.name}`) && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden pl-6 space-y-1 pt-1"
                                        >
                                          {sub.subItems.map((deep) => (
                                            <Link
                                              key={deep.name}
                                              href={deep.url}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className="flex items-center justify-between p-2.5 rounded-xl text-white/60 hover:text-accent transition-all"
                                            >
                                              <div className="flex items-center gap-3">
                                                <deep.icon className="size-3.5" />
                                                <span className="text-xs font-medium">{deep.name}</span>
                                              </div>
                                              <ChevronRight className="size-3.5" />
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    href={sub.url}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/70"
                                  >
                                    <div className="flex items-center gap-3">
                                      <sub.icon className="size-4 text-accent/60" />
                                      <span className="text-sm font-medium">{sub.name}</span>
                                    </div>
                                    <ChevronRight className="size-4" />
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-1"
                    >
                      <item.icon className="size-5 text-accent" />
                      <span className="text-lg font-headline font-bold text-white">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <GradientButton className="w-full py-3 text-base">
                    Work With Us <ArrowRight className="ml-2" />
                  </GradientButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
		</header>
	);
}
