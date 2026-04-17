'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Loader2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { chatWithThemba, type ChatbotOutput } from '@/ai/flows/chatbot';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  suggestedReplies?: string[];
  timestamp: Date;
}

export function ChatbotThemba() {
  const [isOpen, setIsOpen] = useState(false);
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

  // Auto-scroll to bottom
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
      // Map messages for Genkit history
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

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[600px] w-[90vw] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#02264b]/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4 px-6 relative overflow-hidden">
               {/* Decorative Gradient Background */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full translate-x-12 -translate-y-12 -z-1" />
               
               <div className="flex items-center gap-3">
                 <div className="relative">
                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent ring-4 ring-accent/10 shadow-lg overflow-hidden">
                     <Image 
                       src="/assets/Themba Chat Avatar.png" 
                       alt="Themba Avatar" 
                       width={40} 
                       height={40}
                       className="object-cover"
                     />
                   </div>
                   <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#02264b] bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                 </div>
                 <div>
                   <h3 className="text-sm font-bold tracking-tight text-white font-headline">Themba</h3>
                   <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Tektonics Assistant</span>
                 </div>
               </div>
               
               <button 
                 onClick={() => setIsOpen(false)}
                 className="rounded-full p-2 text-white/40 hover:bg-white/5 hover:text-white transition-all flex items-center gap-1 group"
               >
                 <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                 <ChevronDown className="size-5" />
               </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar scroll-smooth"
            >
              {messages.map((message) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={message.id}
                  className={cn(
                    "flex flex-col gap-2 max-w-[85%]",
                    message.role === 'user' ? "ml-auto" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "relative px-4 py-3 text-sm leading-relaxed antialiased font-body tracking-wide",
                    message.role === 'user' 
                      ? "rounded-2xl rounded-tr-none bg-accent/20 border border-accent/30 text-white shadow-[0_4px_12px_rgba(0,180,250,0.1)]" 
                      : "rounded-2xl rounded-tl-none bg-white/10 border border-white/10 text-white/90"
                  )}>
                    {message.content}
                  </div>
                  <span className="text-[10px] text-white/30 px-1 font-bold tracking-widest uppercase">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  
                  {/* Suggested Replies Chips (Only for last model message) */}
                  {message.suggestedReplies && message.role === 'model' && (
                    <div className="mt-2 flex flex-wrap gap-2">
                       {message.suggestedReplies.map((reply, idx) => (
                         <button
                           key={idx}
                           onClick={() => handleSendMessage(reply)}
                           className="text-[11px] font-bold tracking-wide py-2 px-3 rounded-full bg-white/5 border border-white/10 text-accent hover:bg-accent/20 hover:border-accent/40 transition-all text-left animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-backwards flex items-center gap-1.5"
                           style={{ animationDelay: `${idx * 100}ms` }}
                         >
                           {reply}
                           <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                         </button>
                       ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex flex-col gap-2 mr-auto max-w-[85%]">
                  <div className="rounded-2xl rounded-tl-none bg-white/10 border border-white/10 p-3 flex items-center gap-3">
                     <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 italic">Processing</span>
                     <div className="flex gap-1">
                        <span className="size-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.3s]" />
                        <span className="size-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.15s]" />
                        <span className="size-1.5 rounded-full bg-accent animate-bounce" />
                     </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 bg-white/5 p-4 relative">
               <form 
                 onSubmit={(e) => {
                   e.preventDefault();
                   handleSendMessage(inputValue);
                 }}
                 className="relative flex items-center"
               >
                 <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   disabled={isTyping}
                   placeholder="Type your message..."
                   className="w-full rounded-2xl border border-white/10 bg-black/20 py-3 pl-4 pr-12 text-sm text-white placeholder-white/40 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all font-body tracking-wide disabled:opacity-50"
                 />
                 <button
                   type="submit"
                   disabled={!inputValue.trim() || isTyping}
                   className="absolute right-2 p-2 text-accent hover:scale-110 disabled:opacity-20 transition-all"
                 >
                   {isTyping ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
                 </button>
               </form>
               <div className="mt-3 text-center">
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">
                    Tektonics Knowledge Engine v1.0
                  </p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex size-16 items-center justify-center rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,180,250,0.4)] transition-all duration-300 border border-white/10",
          isOpen ? "bg-[#02264b]/90 rotate-90" : "bg-gradient-to-br from-accent to-accent-foreground"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="size-8 text-white" strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <MessageCircle className="size-8 text-white" strokeWidth={1.5} />
              {/* Notification Badge */}
              <div className="absolute top-0 right-0 size-4 rounded-full bg-red-500 border-2 border-[#02264b] animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
