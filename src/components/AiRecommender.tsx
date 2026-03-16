"use client";

import { useState } from "react";
import { recommendSolutions, type AiSolutionRecommenderOutput } from "@/ai/flows/ai-solution-recommender";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, BrainCircuit, CheckCircle, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";

export function AiRecommender() {
  const [challenges, setChallenges] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiSolutionRecommenderOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenges.trim()) return;

    setLoading(true);
    try {
      const output = await recommendSolutions({ dataCenterChallenges: challenges });
      setResult(output);
    } catch (error) {
      console.error("AI recommendation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="recommender" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-4">
              <BrainCircuit className="h-4 w-4" /> GenAI Powered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headline">Smart Solution Recommender</h2>
            <p className="text-lg text-white/70 font-body">
              Describe your data center challenges, and our AI will recommend the ideal Tektonics strategic approach.
            </p>
          </div>

          <Card className="glass-card border-accent/20 overflow-hidden">
            <CardHeader className="bg-white/5 border-b border-white/5">
              <CardTitle className="text-white font-headline">What challenges are you facing?</CardTitle>
              <CardDescription className="text-white/50 font-body">
                Mention things like power instability, environmental hotspots, asset mismanagement, or security gaps.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Textarea
                  placeholder="e.g. We are experiencing unexplained hotspots in our Row B server racks and struggle to track physical assets during our monthly audits..."
                  value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}
                  className="min-h-[150px] bg-background/50 border-white/10 text-white placeholder:text-white/30 focus:border-accent transition-colors text-lg font-body"
                />
                <GradientButton 
                  type="submit" 
                  disabled={loading || !challenges.trim()} 
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing Challenges...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Tailored Strategy
                    </>
                  )}
                </GradientButton>
              </form>
            </CardContent>
          </Card>

          {result && (
            <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="glass-card border-primary/40 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white font-headline">
                      <Sparkles className="h-5 w-5 text-accent" /> Actionable Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {result.recommendations.map((rec, i) => (
                      <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-accent" />
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed font-body">{rec}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass-card border-accent/40 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white font-headline">
                      <BrainCircuit className="h-5 w-5 text-primary" /> Recommended Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {result.tektonicsSolutions.length > 0 ? (
                      result.tektonicsSolutions.map((sol, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <span className="text-white font-bold font-body">{sol}</span>
                          <ArrowRight className="h-4 w-4 text-accent" />
                        </div>
                      ))
                    ) : (
                      <p className="text-white/50 text-sm italic p-4 text-center font-body">
                        Our AI suggests a custom strategic consultation for your specific needs.
                      </p>
                    )}
                    <div className="mt-6 pt-6 border-t border-white/5 text-center">
                      <p className="text-white/60 text-xs mb-4 font-body">Want to implement these recommendations?</p>
                      <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 rounded-full font-headline">
                        Book Expert Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}