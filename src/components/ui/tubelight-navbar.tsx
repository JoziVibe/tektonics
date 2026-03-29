"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  subItems?: { name: string; url: string; icon: LucideIcon }[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  // Sync active tab with current path or window hash
  useEffect(() => {
    const updateActiveTab = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const currentUrl = path + hash;
      
      const activeItem = items.find(item => 
        item.url === currentUrl || 
        (item.subItems?.some(sub => sub.url === currentUrl)) ||
        (path === "/" && item.url === "/")
      );
      
      if (activeItem) {
        setActiveTab(activeItem.name);
      }
    };

    updateActiveTab();
    window.addEventListener("hashchange", updateActiveTab);
    return () => window.removeEventListener("hashchange", updateActiveTab);
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] lg:relative lg:bottom-auto lg:left-auto lg:translate-x-0 lg:z-auto lg:mb-0 lg:pt-0",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-background/20 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          if (item.subItems) {
            return (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "relative cursor-pointer text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-full transition-all duration-300 font-headline flex items-center gap-2",
                      "text-white/60 hover:text-accent outline-none",
                      isActive && "text-accent",
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    <ChevronDown className={cn("size-3 transition-transform", isActive ? "rotate-180" : "")} />
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
                          <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-background/80 backdrop-blur-2xl border-white/10 rounded-2xl p-2 min-w-[220px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {item.subItems.map((sub) => (
                    <DropdownMenuItem key={sub.name} asChild>
                      <Link 
                        href={sub.url}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors group"
                      >
                        <div className="bg-white/5 p-1.5 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <sub.icon className="size-4 text-white/70 group-hover:text-accent transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{sub.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          }

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-full transition-all duration-300 font-headline",
                "text-white/60 hover:text-accent",
                isActive && "text-accent",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
                    <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
