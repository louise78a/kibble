import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Zap, Twitter, BookOpen, Flame, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import heroImg from "@/assets/pikachu/1.jpg";
import sectionImg from "@/assets/pikachu/dazdza.jpg";
import gallery1 from "@/assets/pikachu/imagesdsqd.jpg";
import gallery2 from "@/assets/pikachu/2.jpg";
import gallery3 from "@/assets/pikachu/o2wkcznd323b1.jpg";
import gallery4 from "@/assets/pikachu/626613cab9c8c43f0a8f9adb26ab00ef.jpg";
import videoFile from "@/assets/pikachu/aeds.mp4";

const CA = "";
const PAIR_ADDRESS = "4ch64a5jeenwzbkutyphymv3u4fm3fdr7f7fwzgwnhxb";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

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
    <div className="min-h-screen bg-yellow-50 text-black font-sans flex flex-col selection:bg-yellow-500 selection:text-black">
      
      <nav className="border-b border-yellow-200 bg-yellow-100/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-300">
              <img src={heroImg} alt="Pikachu Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-yellow-900 font-bold tracking-tight text-2xl">$PIKACHU</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-yellow-700">
            <a href="#about" className="hover:text-yellow-600 transition-colors">Lore</a>
            <a href="#gallery" className="hover:text-yellow-600 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-yellow-600 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-yellow-500/20"
            onClick={(e) => e.preventDefault()}
          >
            Buy $PIKACHU
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-200 text-yellow-800 text-sm font-semibold border border-yellow-300">
                <Zap size={16} className="text-yellow-600" />
                <span>The Original Electric Symbol</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-yellow-900 leading-[0.9]">
                PIKACHU.
              </h1>
              
              <div className="text-xl md:text-2xl text-yellow-800 leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Pikachu is more than a mascot; it's a global phenomenon of <span className="text-yellow-600 font-bold">pure, unadulterated energy</span>.
                </p>
                <p>
                  With undeniable bullish momentum, $PIKACHU sparks the next wave of iconic meme culture. It's recognizable, it's electric, and it's taking over.
                </p>
                <p className="text-yellow-900 font-bold">
                  Catch the spark. ⚡️
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900 text-yellow-100 text-sm font-semibold hover:bg-yellow-800 transition-colors"
                >
                  <Flame size={14} className="text-yellow-400" />
                  Trending Everywhere
                </a>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-900 text-sm font-semibold hover:bg-yellow-200 transition-colors border border-yellow-300"
                >
                  <Search size={14} />
                  Discover $PIKACHU
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-yellow-500/30"
                  onClick={(e) => e.preventDefault()}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-yellow-50 hover:bg-yellow-100 text-yellow-900 border-2 border-yellow-300 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={(e) => e.preventDefault()}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-[3/4] md:h-auto rounded-xl overflow-hidden shadow-2xl bg-yellow-100 border-8 border-yellow-400"
            >
               <img 
                  src={heroImg} 
                  alt="Pikachu Hero"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 bg-yellow-100/50 border-t border-yellow-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-yellow-900">The Legend Reborn.</h2>
                  <div className="space-y-6 text-lg text-yellow-800 leading-relaxed border-l-4 border-yellow-500 pl-6">
                    <p>
                      Since the late 90s, Pikachu has symbolized electricity, power, and an unbreakable bond with its fans. That same <strong className="text-yellow-900">high-voltage energy</strong> is what drives $PIKACHU.
                    </p>
                    <p>
                      <strong className="text-yellow-900">We are channeling the most recognized yellow icon in history.</strong> It represents not just nostalgia, but the raw, bullish power of lightning striking at the perfect moment.
                    </p>
                    <p className="font-medium text-yellow-900 text-xl italic">
                      "Pika Pika!"
                    </p>
                  </div>
                  <div className="pt-4 font-sans flex flex-wrap gap-4">
                    <Button 
                      className="bg-yellow-900 hover:bg-yellow-800 text-yellow-50 rounded-full px-8 h-12 gap-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-yellow-50 text-yellow-900 border-2 border-yellow-300 hover:bg-yellow-100 font-bold rounded-full px-8 h-12 gap-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read the Lore <BookOpen size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-yellow-50 border-8 border-yellow-400 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={sectionImg} 
                      alt="Pikachu Art"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-yellow-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-yellow-900">Gallery</h2>
              <p className="text-yellow-700 text-lg italic">Electric moments caught on camera.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-2 rounded-xl overflow-hidden bg-yellow-900 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-yellow-400"
              >
                <video 
                  src={videoFile}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-xl overflow-hidden bg-yellow-100 shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-yellow-400 aspect-square"
                >
                  <img 
                    src={img} 
                    alt={`Pikachu Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="chart" className="py-12 bg-yellow-100/50 border-t border-yellow-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight text-yellow-900">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-yellow-50 rounded-full border border-yellow-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700 font-sans">Live</span>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-1 rounded-2xl shadow-lg border border-yellow-300 h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=light&trades=0&info=0`}
                className="w-full h-full border-0 rounded-xl"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12 bg-yellow-50 border-t border-yellow-200">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-yellow-900">$PIKACHU</h2>
              
              <div className="flex flex-wrap justify-center gap-4 font-sans">
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-yellow-500/20"
                  onClick={(e) => e.preventDefault()}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-yellow-50 text-yellow-900 border-2 border-yellow-300 hover:bg-yellow-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={(e) => e.preventDefault()}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-yellow-50 text-yellow-900 border-2 border-yellow-300 hover:bg-yellow-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={(e) => e.preventDefault()}
                >
                  <Twitter className="w-5 h-5" />
                  Community
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-yellow-600 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-yellow-100 px-6 py-4 rounded-2xl border border-yellow-300 hover:border-yellow-500 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                  data-testid="button-copy-ca"
                >
                  <code className="font-mono text-sm md:text-base text-yellow-800 break-all group-hover:text-yellow-600 transition-colors">
                    {CA || "..."}
                  </code>
                  <div className="text-yellow-600 group-hover:text-yellow-500 transition-colors">
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
