'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Loader2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { chatWithThemba } from '@/ai/flows/chatbot';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  suggestedReplies?: string[];
  timestamp: Date;
}

const URL_MAP: Record<string, string> = {
  "Notifications Gateway": "/product/notifications-gateway",
  "Tektonics Flux": "/product/flux",
  "NetBotz": "/product/netbotz",
  "ThingsBoard PE": "/product/thingsboard-pe",
  "NetXMS": "/product/netxms",
  "IT Expert": "/product/ecostruxure-it-expert",
  "IT Advisor": "/product/ecostruxure-it-advisor",
  "Data Center Expert": "/product/ecostruxure-data-center-expert",
  "OctaiPipe": "/product/octaipipe",
  "Power Monitoring Expert": "/product/ecostruxure-power-monitoring-expert",
  "Contact": "/contact",
};

export function ChatbotThemba() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      content: "Hi, I'm Themba — the Tektonics assistant. I can help you with information about our products, services, or getting in touch with the team. What can I help you with today?",
      suggestedReplies: ["Tell me about your services", "I'm interested in a product", "I want to get in touch"],
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        content: [{ text: m.content }]
      }));

      const response = await chatWithThemba({ message: text, history });
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response.response,
        suggestedReplies: response.suggestedReplies,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
       console.error("Chat error:", error);
       const errorMessage: Message = {
        id: 'err-' + Date.now(),
        role: 'model',
        content: "I'm having trouble connecting to the network right now. Please reach out directly to the team at info@tektonics.africa or call +27-12-743-5757.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatContent = (text: string) => {
    let formatted = text;
    Object.entries(URL_MAP).forEach(([name, url]) => {
      const regex = new RegExp(`\\b(${name})\\b`, 'gi');
      formatted = formatted.replace(regex, `[$1](${url})`);
    });
    return formatted;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[600px] w-[90vw] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#02264b]/80 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4 px-6">
               <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 border border-accent/20 text-accent overflow-hidden">
                   <Image src="/assets/Themba Chat Avatar.png" alt="Themba" width={40} height={40} />
                 </div>
                 <div>
                   <h3 className="text-sm font-bold text-white font-headline">Themba</h3>
                   <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Tektonics Assistant</span>
                 </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="rounded-full p-2 text-white/40 hover:text-white">
                 <ChevronDown className="size-5" />
               </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
              {messages.map((message) => (
                <div key={message.id} className={cn("flex flex-col gap-2 max-w-[95%]", message.role === 'user' ? "ml-auto" : "mr-auto")}>
                  <div className={cn(
                    "px-4 py-3 text-sm font-body leading-relaxed prose prose-invert prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-4 prose-ol:pl-4 prose-a:text-accent prose-a:underline prose-strong:text-white",
                    message.role === 'user' 
                      ? "rounded-2xl rounded-tr-none bg-accent/30 border border-accent/20 text-white shadow-lg" 
                      : "rounded-2xl rounded-tl-none bg-white/5 border border-white/10"
                  )}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {formatContent(message.content)}
                    </ReactMarkdown>
                  </div>
                  
                  {message.suggestedReplies && message.role === 'model' && (
                    <div className="mt-1 flex flex-wrap gap-2 animate-in fade-in duration-500">
                       {message.suggestedReplies.map((reply, idx) => (
                         <button
                           key={idx}
                           onClick={() => handleSendMessage(reply)}
                           className="text-[11px] font-bold tracking-wide py-1.5 px-3 rounded-full bg-white/10 border border-white/20 text-accent hover:bg-accent/20 hover:border-accent/40 transition-all text-left"
                         >
                           {reply}
                         </button>
                       ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex flex-col gap-2 mr-auto max-w-[85%]">
                  <div className="rounded-2xl rounded-tl-none bg-white/5 border border-white/10 p-3 flex items-center gap-3">
                     <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 italic">Processing...</span>
                     <div className="flex gap-1">
                        <span className="size-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.3s]" />
                        <span className="size-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.15s]" />
                        <span className="size-1.5 rounded-full bg-accent animate-bounce" />
                     </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 bg-white/5 p-4">
               <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="relative flex items-center">
                 <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-accent/40"
                   placeholder="Type your message..."
                 />
                 <button type="submit" className="absolute right-2 p-2 text-accent">
                   {isTyping ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
                 </button>
               </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="group relative flex size-16 items-center justify-center rounded-3xl tech-gradient shadow-[0_0_20px_rgba(18,217,236,0.3)] border border-white/10 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="size-8 text-white" />
        
        {/* Online Status Indicator */}
        {!isOpen && mounted && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#020c1b]"></span>
          </span>
        )}
      </button>
    </div>
  );
}
