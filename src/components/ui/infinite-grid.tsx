"use client";

import React, { useRef, useEffect } from 'react';
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";
import { cn } from '@/lib/utils';

/**
 * Helper component for the SVG grid pattern.
 */
const GridPattern = ({ offsetX, offsetY, size }: { offsetX: any; offsetY: any; size: number }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="footer-infinite-grid"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-white/20" 
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-infinite-grid)" />
    </svg>
  );
};

/**
 * Infinite Grid Background Component
 * Optimized for use as a section background.
 * Automatically tracks mouse movement on its parent container.
 */
export function InfiniteGridBackground({ 
  className, 
  gridSize = 20,
  maskSize = 400
}: { 
  className?: string; 
  gridSize?: number;
  maskSize?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position
  const mouseX = useMotionValue(-maskSize); // Start outside
  const mouseY = useMotionValue(-maskSize);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = parent.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const handleMouseLeave = () => {
      mouseX.set(-maskSize);
      mouseY.set(-maskSize);
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, maskSize]);

  // Grid offsets for infinite scroll animation
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.4; 
  const speedY = 0.4;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % gridSize);
    gridOffsetY.set((currentY + speedY) % gridSize);
  });

  const maskImage = useMotionTemplate`radial-gradient(${maskSize}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Layer 1: Subtle background grid (always visible) */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </div>

      {/* Layer 2: Highlighted grid (revealed by mouse mask) */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </motion.div>

      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] w-[30%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute left-[10%] bottom-[-5%] w-[20%] h-[30%] rounded-full bg-primary/5 blur-[80px]" />
      </div>
    </div>
  );
}
