import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Train, Twitter, BookOpen, Flame, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import heroYontama from "@/assets/yontama/hero.png";
import sectionYontama from "@/assets/yontama/section.jpg";
import gallery1 from "@/assets/yontama/gallery1.jpg";
import gallery2 from "@/assets/yontama/gallery2.jpg";
import videoYontama from "@/assets/yontama/video.mp4";

const CA = "CoiuZDaVmaCgdQnzSJ6GWBWYU5mhi3rMN2gQiG5fpump";
const PAIR_ADDRESS = "4ch64a5jeenwzbkutyphymv3u4fm3fdr7f7fwzgwnhxb";

const galleryImages = [gallery1, gallery2];

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
    <div className="min-h-screen bg-white text-black font-serif flex flex-col selection:bg-orange-500 selection:text-white">
      
      <nav className="border-b border-orange-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-200">
              <img src={heroYontama} alt="Yontama Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-slate-900 font-bold tracking-tight text-2xl">$YONTAMA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-orange-600 transition-colors">Story</a>
            <a href="#gallery" className="hover:text-orange-600 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-orange-600 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-orange-500/20"
            onClick={() => window.open("https://pump.fun/coin/CoiuZDaVmaCgdQnzSJ6GWBWYU5mhi3rMN2gQiG5fpump", "_blank")}
          >
            Buy $YONTAMA
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-sm font-semibold border border-orange-200">
                <Train size={16} className="text-orange-600" />
                <span>The Next Station Master Cat</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.9]">
                YONTAMA.
              </h1>
              
              <div className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-lg space-y-4 font-serif">
                <p>
                  Yontama has officially been appointed as the <span className="text-orange-600 font-medium italic">next Station Master Cat</span>, succeeding Nitama after her many years of service.
                </p>
                <p>
                  As the 2026 transition approaches, Yontama has begun trending on X, with widespread discussion around the new election and the passing of the role to a new generation.
                </p>
                <p className="text-slate-900 font-bold">
                  $YONTAMA officially takes the post. 🐱🚂
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://x.com/i/trending/2008940346982715684" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  <Flame size={14} className="text-orange-400" />
                  Trending on X
                </a>
                <a 
                  href="https://x.com/search?q=yontama&src=typed_query" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  <Search size={14} />
                  Search Yontama
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-orange-500/30"
                  onClick={() => window.open("https://pump.fun/coin/CoiuZDaVmaCgdQnzSJ6GWBWYU5mhi3rMN2gQiG5fpump", "_blank")}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-orange-50 text-slate-900 border-2 border-orange-200 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open("https://dexscreener.com/solana/4ch64a5jeenwzbkutyphymv3u4fm3fdr7f7fwzgwnhxb", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-[3/4] md:h-auto rounded-xl overflow-hidden shadow-2xl bg-orange-50 border-8 border-white"
            >
               <img 
                  src={heroYontama} 
                  alt="Yontama Station Master Cat"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 bg-orange-50/50 border-t border-orange-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Japan's Most Iconic Role.</h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed border-l-4 border-orange-500 pl-6 font-serif">
                    <p>
                      The Station Master Cat tradition began with <strong className="text-slate-900">Tama</strong>, the original calico cat who saved Kishi Station from closure. Since then, the role has passed to Nitama and now to Yontama.
                    </p>
                    <p>
                      <strong className="text-slate-900">$YONTAMA carries forward one of Japan's most unexpectedly iconic and internet-loved roles</strong> — a symbol of dedication, luck, and the unique bond between Japan and its beloved cats.
                    </p>
                    <p className="font-medium text-slate-900 text-xl italic">
                      "The new era begins."
                    </p>
                  </div>
                  <div className="pt-4 font-sans flex flex-wrap gap-4">
                    <Button 
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2009248644508058104", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-white text-slate-900 border-2 border-orange-200 hover:bg-orange-50 font-bold rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://english.kyodonews.net/articles/-/68105", "_blank")}
                    >
                      Read the Lore <BookOpen size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-white border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={sectionYontama} 
                      alt="Yontama with Nitama"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-900">Gallery</h2>
              <p className="text-slate-500 text-lg font-serif italic">The new Station Master Cat in action.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-2 rounded-xl overflow-hidden bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white"
              >
                <video 
                  src={videoYontama}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={gallery2}
                />
              </motion.div>
              
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-xl overflow-hidden bg-orange-50 shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-white aspect-square"
                >
                  <img 
                    src={img} 
                    alt={`Yontama Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="chart" className="py-12 bg-orange-50/50 border-t border-orange-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-white rounded-full border border-orange-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">Live</span>
              </div>
            </div>
            
            <div className="bg-white p-1 rounded-2xl shadow-lg border border-orange-200 h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=light&trades=0&info=0`}
                className="w-full h-full border-0 rounded-xl"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-orange-100">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">$YONTAMA</h2>
              
              <div className="flex flex-wrap justify-center gap-4 font-sans">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-orange-500/20"
                  onClick={() => window.open("https://pump.fun/coin/CoiuZDaVmaCgdQnzSJ6GWBWYU5mhi3rMN2gQiG5fpump", "_blank")}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-slate-900 border-2 border-orange-200 hover:bg-orange-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/4ch64a5jeenwzbkutyphymv3u4fm3fdr7f7fwzgwnhxb", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-slate-900 border-2 border-orange-200 hover:bg-orange-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2009248644508058104", "_blank")}
                >
                  <Twitter className="w-5 h-5" />
                  Community
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-slate-400 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-orange-50 px-6 py-4 rounded-2xl border border-orange-200 hover:border-orange-500 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                  data-testid="button-copy-ca"
                >
                  <code className="font-mono text-sm md:text-base text-slate-600 break-all group-hover:text-orange-600 transition-colors">
                    {CA}
                  </code>
                  <div className="text-slate-400 group-hover:text-orange-600 transition-colors">
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
