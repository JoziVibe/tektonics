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
      <DialogContent className="sm:max-w-[600px] bg-background border-white/10 text-white max-h-[90vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
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

        <div className="space-y-4 py-6">
          {/* Essential */}
          <div className="bg-card/30 border border-white/5 p-4 rounded-xl flex items-start gap-4">
            <ShieldCheck className="size-5 text-primary shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-headline font-bold text-white text-sm">Essential</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-accent px-1.5 py-0.5 bg-accent/10 rounded">Required</span>
                  <Switch checked={true} disabled />
                </div>
              </div>
              <p className="text-white/40 text-xs">Necessary for the website to function.</p>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-card/30 border border-white/5 p-4 rounded-xl flex items-start gap-4">
            <PieChart className="size-5 text-accent shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-headline font-bold text-white text-sm">Analytics</h4>
                <Switch 
                  checked={settings.analytics} 
                  onCheckedChange={(val) => setSettings(s => ({ ...s, analytics: val }))}
                />
              </div>
              <p className="text-white/40 text-xs">Help us understand our visitors anonymously.</p>
            </div>
          </div>

          {/* Functional */}
          <div className="bg-card/30 border border-white/5 p-4 rounded-xl flex items-start gap-4">
            <Layout className="size-5 text-white/50 shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-headline font-bold text-white text-sm">Functional</h4>
                <Switch 
                  checked={settings.functional}
                  onCheckedChange={(val) => setSettings(s => ({ ...s, functional: val }))}
                />
              </div>
              <p className="text-white/40 text-xs">Enable enhanced features and personalization.</p>
            </div>
          </div>

          {/* Marketing */}
          <div className="bg-card/30 border border-white/5 p-4 rounded-xl flex items-start gap-4">
            <Settings2 className="size-5 text-primary shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-headline font-bold text-white text-sm">Marketing</h4>
                <Switch 
                  checked={settings.marketing}
                  onCheckedChange={(val) => setSettings(s => ({ ...s, marketing: val }))}
                />
              </div>
              <p className="text-white/40 text-xs">Allow relevant advertising across platforms.</p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-3 pt-4 border-t border-white/5 mt-0">
          <button 
            onClick={() => {
              setSettings({ essential: true, analytics: false, functional: false, marketing: false });
              handleSave();
            }}
            className="flex-1 sm:flex-none px-6 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all text-xs font-bold"
          >
            Reject Optional
          </button>
          <GradientButton onClick={handleSave} className="flex-1 sm:flex-none">
            Save Preferences
          </GradientButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
