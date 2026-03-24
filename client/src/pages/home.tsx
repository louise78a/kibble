import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Moon, Flame, Search, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import heroImg from "@/assets/kao/1_1773405470131.jpg";
import sectionImg from "@/assets/kao/2_1773405470130.jpg";
import gallery2 from "@/assets/kao/HDSmcPmboAANCL6_1773405470129.jpg";
import gallery3 from "@/assets/kao/HDSnMdUbIAABR6T_1773405470130.jpg";
import gallery4 from "@/assets/kao/HDSnSgQXkAA3n9L_1773405470130.jpg";
import gallery5 from "@/assets/kao/HDSnPJaWYAEcTgA_1773405470130.jpg";
import gallery6 from "@/assets/kao/HDSoRy0awAIHSpe_1773405470130.jpg";
import gallery7 from "@/assets/kao/HDSn8KzXQAAMfXv_1773405470131.jpg";

const CA = "GMtRLBv7pBHmNo6B3gnVGib23NzbByJ79ZGJ6Zywpump";
const PAIR_ADDRESS = "6bfzukvcgarbrminhzbmuesmfqfekhp5joghcy24nwzt";

const galleryImages = [gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard.",
      className: "bg-slate-900 text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col selection:bg-stone-300 selection:text-stone-900">
      
      <nav className="border-b border-stone-200 bg-stone-100/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-300">
              <img src={heroImg} alt="Kao Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-stone-900 font-bold tracking-tight text-2xl">$KAO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#about" className="hover:text-stone-600 transition-colors">Lore</a>
            <a href="#gallery" className="hover:text-stone-600 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-stone-600 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-stone-800 hover:bg-stone-700 text-stone-50 font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-stone-800/20"
            onClick={() => window.open("https://pump.fun/coin/GMtRLBv7pBHmNo6B3gnVGib23NzbByJ79ZGJ6Zywpump", "_blank")}
          >
            Buy $KAO
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200 text-stone-800 text-sm font-semibold border border-stone-300">
                <Moon size={16} className="text-stone-600" />
                <span>The Peaceful Companion</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-stone-900 leading-[0.9]">
                KAO-KUN.
              </h1>
              
              <div className="text-xl md:text-2xl text-stone-800 leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  These small stone-like figures have a simple smiling face. <span className="text-stone-600 font-bold">"Kao"</span> means face, and <span className="text-stone-600 font-bold">"Kun"</span> is a friendly ending, like calling something a little buddy.
                </p>
                <p>
                  A tiny character that quietly sits with you and brings a feeling of comfort and calm. People collect them and place them around their homes, desks, or shelves as peaceful companions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-100 text-sm font-semibold hover:bg-stone-800 transition-colors"
                >
                  <Flame size={14} className="text-stone-400" />
                  Trending Peacefully
                </a>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-900 text-sm font-semibold hover:bg-stone-200 transition-colors border border-stone-300"
                >
                  <Search size={14} />
                  Discover $KAO
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <Button 
                  className="bg-stone-800 hover:bg-stone-700 text-stone-50 h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-stone-800/30"
                  onClick={() => window.open("https://pump.fun/coin/GMtRLBv7pBHmNo6B3gnVGib23NzbByJ79ZGJ6Zywpump", "_blank")}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-stone-50 hover:bg-stone-100 text-stone-900 border-2 border-stone-300 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open("https://dexscreener.com/solana/6bfzukvcgarbrminhzbmuesmfqfekhp5joghcy24nwzt", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-[3/4] md:h-auto rounded-xl overflow-hidden shadow-2xl bg-stone-100 border-8 border-stone-400"
            >
               <img 
                  src={heroImg} 
                  alt="Kao Hero"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 bg-stone-200/50 border-t border-stone-300">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900">A Little Buddy.</h2>
                  <div className="space-y-6 text-lg text-stone-800 leading-relaxed border-l-4 border-stone-500 pl-6">
                    <p>
                      The comments are full of people meming it, showing the ones they own, or saying how seeing Kao-kun makes them feel <strong className="text-stone-900">relaxed and at peace</strong>.
                    </p>
                    <p>
                      It represents not just a stone, but a feeling of comfort, tranquility, and a quiet presence that's always there for you.
                    </p>
                  </div>
                  <div className="pt-4 font-sans flex flex-wrap gap-4">
                    <Button 
                      className="bg-stone-900 hover:bg-stone-800 text-stone-50 rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2032426382802751660", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-stone-50 text-stone-900 border-2 border-stone-300 hover:bg-stone-100 font-bold rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://ochiaitakahide.blog.jp/archives/2274189.html", "_blank")}
                    >
                      Lore <BookOpen size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-stone-50 border-8 border-stone-400 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={sectionImg} 
                      alt="Kao Art"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-stone-900">Gallery</h2>
              <p className="text-stone-700 text-lg italic">Peaceful moments and little buddies.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl overflow-hidden bg-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-stone-300 ${index === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
                >
                  <img 
                    src={img} 
                    alt={`Kao Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="chart" className="py-12 bg-stone-100/50 border-t border-stone-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight text-stone-900">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-stone-50 rounded-full border border-stone-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-sans">Live</span>
              </div>
            </div>
            
            <div className="bg-stone-50 p-1 rounded-2xl shadow-lg border border-stone-300 h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://birdeye.so/tv-widget/${CA}?chain=solana&viewMode=pair&chartInterval=15&chartType=candlestick&chartTimezone=Europe%2FBerlin&chartLeftToolbar=show&theme=dark`}
                className="w-full h-full border-0 rounded-xl"
                title="Birdeye Chart"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12 bg-stone-50 border-t border-stone-200">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900">$KAO</h2>
              
              <div className="flex flex-wrap justify-center gap-4 font-sans">
                <Button 
                  className="bg-stone-800 hover:bg-stone-700 text-stone-50 h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-stone-800/20"
                  onClick={() => window.open("https://pump.fun/coin/GMtRLBv7pBHmNo6B3gnVGib23NzbByJ79ZGJ6Zywpump", "_blank")}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-stone-50 text-stone-900 border-2 border-stone-300 hover:bg-stone-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/6bfzukvcgarbrminhzbmuesmfqfekhp5joghcy24nwzt", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-stone-50 text-stone-900 border-2 border-stone-300 hover:bg-stone-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2032426382802751660", "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Community
                </Button>
                <Button 
                  variant="outline"
                  className="bg-stone-50 text-stone-900 border-2 border-stone-300 hover:bg-stone-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://ochiaitakahide.blog.jp/archives/2274189.html", "_blank")}
                >
                  <BookOpen className="w-5 h-5" />
                  Lore
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-stone-600 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-stone-100 px-6 py-4 rounded-2xl border border-stone-300 hover:border-stone-500 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                  data-testid="button-copy-ca"
                >
                  <code className="font-mono text-sm md:text-base text-stone-800 break-all group-hover:text-stone-600 transition-colors">
                    {CA || "..."}
                  </code>
                  <div className="text-stone-600 group-hover:text-stone-500 transition-colors">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
