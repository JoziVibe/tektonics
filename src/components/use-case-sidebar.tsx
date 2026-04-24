"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Monitor,
  Droplet,
  BellRing,
  Activity,
  GitCommit,
  Network,
  Wind,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  {
    title: "DCIM",
    url: "/use-cases/dcim",
    icon: Monitor,
  },
  {
    title: "Environmental Monitoring",
    url: "/use-cases/environmental-monitoring",
    icon: Droplet,
  },
  {
    title: "OctaiPipe",
    url: "/use-cases/octaipipe",
    icon: Wind,
  },
  {
    title: "Notifications Gateway",
    url: "/use-cases/notifications-gateway",
    icon: BellRing,
  },
  {
    title: "Tektonics Flux",
    url: "/use-cases/tektonics-flux",
    icon: Activity,
  },
  {
    title: "Dry Contact Monitoring",
    url: "/use-cases/dry-contact-monitoring",
    icon: GitCommit,
  },
  {
    title: "NetXMS",
    url: "/use-cases/netxms",
    icon: Network,
  },
];

export function UseCaseSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-80 shrink-0 hidden lg:block">
      <div className="sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide py-2 border-l border-white/5">
        <h2 className="text-xs font-headline font-bold uppercase tracking-widest text-accent mb-6 px-4">Use Cases</h2>
        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "flex items-center px-4 py-3 text-sm transition-all border-l-2 -ml-[2px] gap-3",
                  isActive
                    ? "text-accent border-accent bg-accent/5 font-medium"
                    : "text-white/40 border-transparent hover:text-white/70 hover:border-white/20"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
