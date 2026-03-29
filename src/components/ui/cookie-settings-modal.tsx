"use client";

import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { ShieldCheck, PieChart, Layout, Settings2, Cookie } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { GradientButton } from "@/components/ui/gradient-button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function CookieSettingsModal({ children }: { children?: React.ReactNode }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false,
  });

  const handleSave = () => {
    toast({
      title: "Preferences Saved",
      description: "Your cookie settings have been updated and are now active.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <button className="hover:text-white transition-colors">Cookie Settings</button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background/80 backdrop-blur-2xl border-white/10 text-white max-h-[90vh] overflow-y-auto scrollbar-hide shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <DialogHeader className="mb-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <Cookie className="size-5" />
            </div>
            <DialogTitle className="text-2xl font-headline font-bold">Cookie Settings</DialogTitle>
          </div>
          <DialogDescription className="text-white/60 leading-relaxed text-left">
            We use cookies to enhance your experience. Adjust your preferences below. 
            Read our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> for more.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2 relative z-10">
          {/* Essential */}
          <div className="bg-white/[0.02] border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
            <ShieldCheck className="size-5 text-primary shrink-0" />
            <div className="flex-1">
              <h4 className="font-headline font-bold text-white text-base mb-0.5">Essential</h4>
              <p className="text-white/40 text-sm">Necessary for the website to function.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-bold text-accent px-2 py-1 bg-accent/10 rounded-md tracking-wider">Required</span>
              <Switch checked={true} disabled />
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white/[0.02] border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
            <PieChart className="size-5 text-accent shrink-0" />
            <div className="flex-1">
              <h4 className="font-headline font-bold text-white text-base mb-0.5">Analytics</h4>
              <p className="text-white/40 text-sm">Help us understand our visitors anonymously.</p>
            </div>
            <Switch 
              checked={settings.analytics} 
              onCheckedChange={(val) => setSettings(s => ({ ...s, analytics: val }))}
            />
          </div>

          {/* Functional */}
          <div className="bg-white/[0.02] border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
            <Layout className="size-5 text-white/50 shrink-0" />
            <div className="flex-1">
              <h4 className="font-headline font-bold text-white text-base mb-0.5">Functional</h4>
              <p className="text-white/40 text-sm">Enable enhanced features and personalization.</p>
            </div>
            <Switch 
              checked={settings.functional}
              onCheckedChange={(val) => setSettings(s => ({ ...s, functional: val }))}
            />
          </div>

          {/* Marketing */}
          <div className="bg-white/[0.02] border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
            <Settings2 className="size-5 text-primary shrink-0" />
            <div className="flex-1">
              <h4 className="font-headline font-bold text-white text-base mb-0.5">Marketing</h4>
              <p className="text-white/40 text-sm">Allow relevant advertising across platforms.</p>
            </div>
            <Switch 
              checked={settings.marketing}
              onCheckedChange={(val) => setSettings(s => ({ ...s, marketing: val }))}
            />
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-4 pt-6 border-t border-white/5 mt-4 relative z-10 sm:justify-end">
          <button 
            onClick={() => {
              setSettings({ essential: true, analytics: false, functional: false, marketing: false });
              handleSave();
            }}
            className="px-6 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-bold"
          >
            Reject Optional
          </button>
          <GradientButton onClick={handleSave} className="px-8 py-3 text-sm">
            Save Preferences
          </GradientButton>
        </DialogFooter>
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-1" />
      </DialogContent>
    </Dialog>
  );
}
