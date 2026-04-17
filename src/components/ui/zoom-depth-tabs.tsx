"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DepthTabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
}

interface ZoomDepthTabsProps {
  items?: DepthTabItem[];
  defaultValue?: string;
  className?: string;
}

export default function ZoomDepthTabs({
  items = [
    { value: "overview", label: "Overview", content: "Overview with rich info and stats." },
    { value: "activity", label: "Activity", content: "Activity with graphs and timelines." },
    { value: "settings", label: "Settings", content: "Settings with controls and toggles." },
    { value: "faq", label: "FAQ", content: "Common questions and helpful answers." },
  ],
  defaultValue,
  className,
}: ZoomDepthTabsProps) {
  const [active, setActive] = React.useState(defaultValue || items[0].value);

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Tabs value={active} onValueChange={setActive} className="w-full">
        {/* Tab List */}
        <TabsList className="flex w-full gap-2 py-1.5 px-0 overflow-x-auto rounded-none bg-white/5 scrollbar-none border-b border-white/10">
          {items.map((item) => {
            const isActive = item.value === active;
            return (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest relative border-none bg-transparent data-[state=active]:bg-transparent outline-none group font-headline"
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive ? "text-accent" : "text-white/60 group-hover:text-white"
                )}>
                  {item.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="sublamp"
                    className="absolute inset-0 w-full bg-primary/10 rounded-full -z-0"
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
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Tab Content */}
        <div className="w-full relative">
          {items.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{
                  opacity: active === item.value ? 1 : 0,
                  y: active === item.value ? 0 : 10,
                  scale: active === item.value ? 1 : 0.98,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="p-6"
              >
                {item.content}
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
