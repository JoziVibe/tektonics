"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
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
                    className="bg-background/80 backdrop-blur-2xl border-white/10 rounded-2xl p-2 min-w-[220px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    {item.subItems.map((sub) => {
                      const isSubActive = activeTab === sub.name;
                      
                      if (sub.subItems) {
                        return (
                          <DropdownMenuSub key={sub.name}>
                            <DropdownMenuSubTrigger 
                              className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors group",
                                "hover:bg-white text-white/70 hover:text-background data-[state=open]:bg-white data-[state=open]:text-background"
                              )}
                            >
                              <div className="p-1.5 rounded-lg bg-white/5 text-white/70 group-hover:bg-background/10 group-hover:text-background group-data-[state=open]:bg-background/10 group-data-[state=open]:text-background">
                                <sub.icon className="size-4" />
                              </div>
                              <span className="text-sm font-medium">{sub.name}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="bg-background/90 backdrop-blur-2xl border-white/10 rounded-2xl p-2 min-w-[220px]">
                              {sub.subItems.map((nested) => (
                                <DropdownMenuItem key={nested.name} asChild>
                                  <Link 
                                    href={nested.url}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors group hover:bg-white text-white/70 hover:text-background"
                                    onClick={() => {
                                      setActiveTab(item.name);
                                      setOpenMenu(null);
                                    }}
                                  >
                                    <div className="p-1.5 rounded-lg bg-white/5 text-white/70 group-hover:bg-background/10 group-hover:text-background">
                                      <nested.icon className="size-4" />
                                    </div>
                                    <span className="text-sm font-medium">{nested.name}</span>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        )
                      }

                      return (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link 
                          href={sub.url}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors group",
                            isSubActive ? "bg-white text-background" : "hover:bg-white text-white/70 hover:text-background"
                          )}
                          onClick={() => {
                            setActiveTab(sub.name);
                            setOpenMenu(null);
                          }}
                        >
                          <div className={cn(
                            "p-1.5 rounded-lg transition-colors",
                            isSubActive ? "bg-background/10 text-background" : "bg-white/5 text-white/70 group-hover:bg-background/10 group-hover:text-background"
                          )}>
                            <sub.icon className="size-4 transition-colors" />
                          </div>
                          <span className="text-sm font-medium transition-colors">{sub.name}</span>
                        </Link>
                      </DropdownMenuItem>
                      )
                    })}
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
