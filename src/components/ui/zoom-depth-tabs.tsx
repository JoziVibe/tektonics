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
        {/* Tab List - Added w-full and flex to sit flush against Dropdown edges */}
        <TabsList className="flex w-full gap-2 py-1.5 px-0 overflow-x-auto rounded-none bg-white/5 scrollbar-none border-b border-white/10">
          {items.map((item) => {
            const isActive = item.value === active;
            return (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest relative border-none bg-transparent data-[state=active]:bg-transparent"
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.05 : 0.95,
                    rotateX: isActive ? 0 : -5,
                    rotateY: isActive ? 0 : 5,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={cn(
                    "block px-4 py-2 rounded-lg transition-colors",
                    isActive ? "text-white bg-primary shadow-[0_0_20px_rgba(0,150,195,0.3)]" : "text-white/60 hover:text-white"
                  )}
                >
                  {item.label}
                </motion.span>
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
