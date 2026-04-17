"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import ZoomDepthTabs from "@/components/ui/zoom-depth-tabs"

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
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Sync active tab with current path or window hash
  useEffect(() => {
    const updateActiveTab = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const currentUrl = path + hash;
      
      const activeItem = items.find(item => {
        if (item.url === currentUrl) return true;
        if (path === "/" && item.url === "/") return true;
        
        if (item.subItems) {
          return item.subItems.some(sub => {
            if (sub.url === currentUrl) return true;
            if (sub.subItems) {
              return sub.subItems.some(nested => nested.url === currentUrl);
            }
            return false;
          });
        }
        return false;
      });
      
      if (activeItem) {
        setActiveTab(activeItem.name);
      }
    };

    updateActiveTab();
    window.addEventListener("hashchange", updateActiveTab);
    return () => window.removeEventListener("hashchange", updateActiveTab);
  }, [items]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

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
            // Check if this is a Mega-Menu (contains sub-sub items, like Products)
            const isMegaMenu = item.subItems.some(sub => sub.subItems && sub.subItems.length > 0);

            return (
              <div 
                key={item.name}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownMenu 
                  open={openMenu === item.name} 
                  onOpenChange={(open) => !open && setOpenMenu(null)}
                  modal={false}
                >
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
                      <ChevronDown className={cn("size-3 transition-transform", openMenu === item.name ? "rotate-180" : "")} />
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
                  <DropdownMenuContent 
                    align="center" 
                    className={cn(
                      "bg-[#02112e]/95 backdrop-blur-2xl border-white/10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden",
                      isMegaMenu ? "min-w-[600px] p-0" : "min-w-[220px] p-1"
                    )}
                  >
                    {isMegaMenu ? (
                      <ZoomDepthTabs 
                        items={item.subItems.map(sub => ({
                          value: sub.name,
                          label: sub.name,
                          content: (
                            <div className="grid grid-cols-2 gap-2">
                              {sub.subItems?.map(nested => (
                                <Link
                                  key={nested.name}
                                  href={nested.url}
                                  className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group hover:bg-white/[0.08] border border-transparent hover:border-white/10"
                                  onClick={() => {
                                    setActiveTab(item.name);
                                    setOpenMenu(null);
                                  }}
                                >
                                  <div className="p-2 rounded-xl bg-white/5 text-white/40 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                    <nested.icon className="size-4" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{nested.name}</span>
                                    <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Product</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )
                        }))}
                      />
                    ) : (
                      item.subItems.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild>
                          <Link 
                            href={sub.url}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors group hover:bg-white text-white/70 hover:text-background"
                            )}
                            onClick={() => {
                              setActiveTab(item.name);
                              setOpenMenu(null);
                            }}
                          >
                            <div className="p-1.5 rounded-lg bg-white/5 text-white/70 group-hover:bg-background/10 group-hover:text-background transition-colors">
                              <sub.icon className="size-4" />
                            </div>
                            <span className="text-sm font-medium transition-colors">{sub.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
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
