import React from "react";
import { cn } from "@/lib/utils";

interface LayerBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function LayerBadge({ children, className }: LayerBadgeProps) {
  // Adapted from the provided github button.
  // Using the dark mode gradient since the site is dark-themed.
  // Replaced #121213 with #0f172a (tailwind slate-900) or #020617 (slate-950) 
  // which matches the Tektonics brand better, or just rely on dark mode.
  // We'll use the exact dark mode gradient string.
  
  return (
    <div
      className={cn(
        "animate-rainbow before:animate-rainbow relative inline-flex items-center justify-center rounded-md border-0 bg-[length:200%] shadow-lg",
        // White background with animated rainbow border
        "bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(190,100%,63%),hsl(210,100%,63%),hsl(230,100%,63%),hsl(190,100%,63%))]",
        "[background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
        "[border:calc(0.08*1rem)_solid_transparent]",
        // The glowing before pseudo-element
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2",
        "before:bg-[linear-gradient(90deg,hsl(190,100%,63%),hsl(210,100%,63%),hsl(230,100%,63%),hsl(190,100%,63%))]",
        "before:[filter:blur(calc(0.8*1rem))]",
        // Badge sizing and text - dark color for white bg
        "px-4 py-1.5 text-xs font-bold tracking-widest uppercase whitespace-nowrap text-[#020c1b] font-headline",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
