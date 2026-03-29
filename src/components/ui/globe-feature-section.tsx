
"use client";

import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { GradientButton } from "./gradient-button";

export default function GlobeFeatureSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24">
      <div className="relative w-full mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,150,195,0.15)] px-6 py-16 md:px-16 md:py-24 group">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021f4a] via-[#02112e] to-[#0096c3]/20 -z-10 transition-colors duration-500 group-hover:to-[#0096c3]/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/30 blur-[100px] rounded-full pointer-events-none -z-10 -translate-x-1/4 translate-y-1/3" />

        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row relative z-10 h-full">
          <div className="max-w-xl text-left my-auto">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-headline leading-tight">
              Africa's Infrastructure <span className="text-accent">Runs on Expertise</span>.
              <span className="block mt-6 text-lg md:text-xl font-normal text-white/60 font-body leading-relaxed">
                From Pretoria to Nairobi, businesses across the continent trust Tektonics to keep their data centres running at peak performance. Join them.
              </span>
            </h2>
            <Link href="/contact" className="inline-block mt-4">
              <GradientButton className="rounded-full px-8 py-3 text-sm h-auto hover:scale-105 transition-transform">
                Contact Us <ArrowRight className="ml-2 size-4" />
              </GradientButton>
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full max-w-xl flex items-center justify-center my-auto overflow-visible">
            <Globe className="absolute md:-right-10 md:scale-110 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.0078, 0.5882, 0.7647], // Matching Tektonics brand primary
  markerColor: [0.0706, 0.8510, 0.9255], // Matching brand accent
  glowColor: [0.0078, 0.5882, 0.7647],
  markers: [
    { location: [6.5244, 3.3792], size: 0.1 }, // Lagos
    { location: [-1.2921, 36.8219], size: 0.08 }, // Nairobi
    { location: [-33.9249, 18.4241], size: 0.08 }, // Cape Town
    { location: [-26.2041, 28.0473], size: 0.1 }, // Johannesburg
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
    },
    [r],
  )

  useEffect(() => {
    let width = 0
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    if (!canvasRef.current || width === 0) return;

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        onRender(state);
        state.width = width * 2;
        state.height = width * 2;
      },
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    })
    
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    }
  }, [onRender, config])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
