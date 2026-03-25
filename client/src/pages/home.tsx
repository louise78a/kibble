import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Flame, Search, BookOpen, Facebook, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import logoImg from "@/assets/chuqi/img_1774429569593.png";
import sectionImg from "@/assets/chuqi/2_1774429569593.jpg";
import heroVideo from "@/assets/chuqi/1_1774429569595.mp4";
import gallery1 from "@/assets/chuqi/HEPmiBkbYAATbzU_1774429569594.jpg";
import gallery2 from "@/assets/chuqi/HEPoWlPbcAA726-_1774429569594.jpg";
import gallery3 from "@/assets/chuqi/HEPpZZ4aQAAFs1T_1774429569595.jpg";
import gallery4 from "@/assets/chuqi/HEPqZFrWMAA4ef1_1774429569595.jpg";

const CA = "7vaeMtseiCiVNcam61BqgwjKGMh86tShR5aYe1aPpump";
const PAIR_ADDRESS = "5eewypsql7nvmjbznvnigmig6khnrz91qb2fwm8b2kcu";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard.",
      className: "bg-orange-900 text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-orange-50 text-orange-900 font-sans flex flex-col selection:bg-orange-300 selection:text-orange-900">
      
      <nav className="border-b border-orange-200 bg-orange-100/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-300">
              <img src={logoImg} alt="Chuqi Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-orange-900 font-bold tracking-tight text-2xl">$CHUQI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-orange-800">
            <a href="#about" className="hover:text-orange-600 transition-colors">Story</a>
            <a href="#gallery" className="hover:text-orange-600 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-orange-600 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-orange-600/20"
            onClick={() => window.open("https://pump.fun/coin/7vaeMtseiCiVNcam61BqgwjKGMh86tShR5aYe1aPpump", "_blank")}
          >
            Buy $CHUQI
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-200 text-orange-900 text-sm font-semibold border border-orange-300">
                <Flame size={16} className="text-orange-600" />
                <span>The Golden Little Star</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-orange-950 leading-[0.9]">
                CHUQI.
              </h1>
              
              <div className="text-xl md:text-2xl text-orange-800 leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Chuqi is a baby dusky langur, a type of monkey, and what's catching everyone's attention is her bright <span className="text-orange-600 font-bold">golden-orange fur</span>.
                </p>
                <p>
                  It's rare, eye-catching, and part of what makes her stand out so much.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://x.com/CNS1952/status/2036135640232874329?s=20" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900 text-orange-50 text-sm font-semibold hover:bg-orange-800 transition-colors"
                >
                  <ExternalLink size={14} className="text-orange-400" />
                  500K followers Chinese News Page
                </a>
                <a 
                  href="https://www.facebook.com/100067811160264/posts/a-golden-little-star-arrives-in-guangzhou-a-newborn-francois-langur-named-chuqi-/1261048186165542/" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-900 text-sm font-semibold hover:bg-orange-200 transition-colors border border-orange-300"
                >
                  <Facebook size={14} />
                  Facebook News
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <Button 
                  className="bg-orange-600 hover:bg-orange-500 text-white h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-orange-600/30"
                  onClick={() => window.open("https://pump.fun/coin/7vaeMtseiCiVNcam61BqgwjKGMh86tShR5aYe1aPpump", "_blank")}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-orange-50 hover:bg-orange-100 text-orange-900 border-2 border-orange-300 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open("https://dexscreener.com/solana/5eewypsql7nvmjbznvnigmig6khnrz91qb2fwm8b2kcu", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-[3/4] md:h-auto rounded-xl overflow-hidden shadow-2xl bg-orange-100 border-8 border-orange-400 flex items-center justify-center"
            >
               <video 
                  src={heroVideo} 
                  autoPlay 
                  loop 
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover pointer-events-none"
                />
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-70 hover:opacity-100 z-10 cursor-pointer"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 bg-orange-100/50 border-t border-orange-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-orange-950">A National Treasure.</h2>
                  <div className="space-y-6 text-lg text-orange-900 leading-relaxed border-l-4 border-orange-500 pl-6">
                    <p>
                      She's also a <strong className="text-orange-950">first-class nationally protected wild animal</strong> in China, which makes this even bigger.
                    </p>
                    <p>
                      She only just went public around March 23, which is why people are just starting to see her. It's starting to pick up among Chinese news pages, we will be seeing her a lot more.
                    </p>
                  </div>
                  <div className="pt-4 font-sans flex flex-wrap gap-4">
                    <Button 
                      className="bg-orange-900 hover:bg-orange-800 text-orange-50 rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2036717044473774558", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-orange-50 border-8 border-orange-400 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={sectionImg} 
                      alt="Chuqi"
                      className="w-full h-full object-cover object-[100%_center] hover:scale-105 transition-all duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-orange-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-orange-950">Gallery</h2>
              <p className="text-orange-800 text-lg italic">The brightest golden star.</p>
            </div>
            
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-xl overflow-hidden bg-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-orange-300 break-inside-avoid"
                >
                  <img 
                    src={img} 
                    alt={`Chuqi Gallery ${index + 1}`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="chart" className="py-12 bg-orange-100/50 border-t border-orange-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight text-orange-950">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-orange-50 rounded-full border border-orange-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-800 font-sans">Live</span>
              </div>
            </div>
            
            <div className="bg-orange-50 p-1 rounded-2xl shadow-lg border border-orange-300 h-[700px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=dark&chartType=marketCap&interval=1s`}
                className="w-full h-full border-0 rounded-xl"
                title="Dexscreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12 bg-orange-50 border-t border-orange-200">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-orange-950">$CHUQI</h2>
              
              <div className="flex flex-wrap justify-center gap-4 font-sans">
                <Button 
                  className="bg-orange-600 hover:bg-orange-500 text-white h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-orange-600/20"
                  onClick={() => window.open("https://pump.fun/coin/7vaeMtseiCiVNcam61BqgwjKGMh86tShR5aYe1aPpump", "_blank")}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-orange-50 text-orange-950 border-2 border-orange-300 hover:bg-orange-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/5eewypsql7nvmjbznvnigmig6khnrz91qb2fwm8b2kcu", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-orange-50 text-orange-950 border-2 border-orange-300 hover:bg-orange-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2036717044473774558", "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Community
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-orange-800 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-orange-100 px-6 py-4 rounded-2xl border border-orange-300 hover:border-orange-500 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                  data-testid="button-copy-ca"
                >
                  <code className="font-mono text-sm md:text-base text-orange-950 break-all group-hover:text-orange-700 transition-colors">
                    {CA || "..."}
                  </code>
                  <div className="text-orange-800 group-hover:text-orange-600 transition-colors">
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
