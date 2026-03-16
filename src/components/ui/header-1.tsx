'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { Cpu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Overview', href: '#overview' },
		{ label: 'Solutions', href: '#solutions' },
		{ label: 'Success Stories', href: '#success' },
		{ label: 'AI Recommender', href: '#recommender' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent', {
				'bg-background/80 backdrop-blur-lg border-white/5 py-1': scrolled,
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

				<div className="hidden items-center gap-4 md:flex">
					{links.map((link) => (
						<Link 
              key={link.label} 
              className="text-sm font-medium text-white/60 hover:text-accent transition-colors px-3 py-2" 
              href={link.href}
            >
							{link.label}
						</Link>
					))}
					<Button className="rounded-full bg-primary hover:bg-primary/90 ml-2" size="sm">
						Get Started
					</Button>
				</div>

				<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					className="md:hidden text-white hover:bg-white/5"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-6" duration={300} />
				</Button>
			</nav>

			<MobileMenu open={open} className="flex flex-col justify-between gap-6 p-8">
				<div className="grid gap-y-4">
					{links.map((link) => (
						<Link
							key={link.label}
							className="text-2xl font-bold text-white hover:text-accent transition-colors"
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<Button variant="outline" className="w-full border-white/10 text-white h-12 text-lg">
						Sign In
					</Button>
					<Button className="w-full h-12 text-lg bg-primary">Get Started</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 backdrop-blur-2xl fixed inset-0 top-16 z-40 flex flex-col overflow-hidden md:hidden border-t border-white/5',
			)}
		>
			<div
				data-state={open ? 'open' : 'closed'}
				className={cn(
					'animate-in fade-in slide-in-from-top-4 duration-300 ease-out',
					'size-full',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}
