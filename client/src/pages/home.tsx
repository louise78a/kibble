import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Anchor, Twitter, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import logoTrim from "@/assets/trim_logo.png";
import heroTrim from "@/assets/trim_hero.jpg";
import trimStatue from "@/assets/trim_statue.jpg";

// Gallery
import gallery1 from "@/assets/gallery/trim_1.jpg";
import gallery2 from "@/assets/gallery/trim_2.jpg";
import gallery3 from "@/assets/gallery/trim_3.jpg";
import gallery4 from "@/assets/gallery/trim_4.jpg";
import gallery5 from "@/assets/gallery/trim_5.jpg";

const CA = "9W75Z7xPzSHydaUdo1RvfJtviAWbdFhgtM2jWBFbpump";
const PAIR_ADDRESS = "5erecpmozmrrfezte9yzpbuca6wjpurjunke1pttaoee";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

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
    <div className="min-h-screen bg-white text-black font-serif flex flex-col selection:bg-amber-600 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img src={logoTrim} alt="Trim Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-slate-900 font-bold tracking-tight text-2xl">$TRIM</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-amber-700 transition-colors">Story</a>
            <a href="#gallery" className="hover:text-amber-700 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-amber-700 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-slate-900/20"
            onClick={() => window.open("https://pump.fun/coin/9W75Z7xPzSHydaUdo1RvfJtviAWbdFhgtM2jWBFbpump", "_blank")}
          >
            Buy $TRIM
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                <Anchor size={16} className="text-amber-700" />
                <span>The Loyal Companion</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.9]">
                TRIM.
              </h1>
              
              <div className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-lg space-y-4 font-serif">
                <p>
                  Trim wasn’t trained to be loyal — <span className="text-slate-900 font-medium italic">he chose it.</span>
                </p>
                <p>
                  He followed Matthew Flinders across oceans, storms, shipwrecks, and imprisonment. He moved, endured, and returned by choice every time.
                </p>
                <p className="text-slate-900 font-bold">
                  Not for fame or conquest, but for loyalty. 🐾
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <Button 
                  className="bg-amber-700 hover:bg-amber-800 text-white h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-amber-700/30"
                  onClick={() => window.open("https://pump.fun/coin/9W75Z7xPzSHydaUdo1RvfJtviAWbdFhgtM2jWBFbpump", "_blank")}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open("https://dexscreener.com/solana/5erecpmozmrrfezte9yzpbuca6wjpurjunke1pttaoee", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-[3/4] md:h-auto rounded-xl overflow-hidden shadow-2xl bg-slate-50 border-8 border-white"
            >
               <img 
                  src={heroTrim} 
                  alt="Trim and Captain Flinders"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Immortalised in Bronze.</h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed border-l-4 border-amber-700 pl-6 font-serif">
                    <p>
                      So strong was his devotion that Flinders wrote a formal tribute to him. And history agreed.
                    </p>
                    <p>
                      <strong className="text-slate-900">Trim has a bronze statue at the Mitchell Library in Sydney</strong> — one of the only cats in the world immortalised in public sculpture.
                    </p>
                    <p className="font-medium text-slate-900 text-xl italic">
                      "The best and most illustrious of his race."
                    </p>
                  </div>
                  <div className="pt-4 font-sans flex flex-wrap gap-4">
                    <Button 
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2008919244109475907", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 font-bold rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://www.purr-n-fur.org.uk/famous/trim.html", "_blank")}
                    >
                      Read the Lore <BookOpen size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-white border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={trimStatue} 
                      alt="Trim Statue Sydney"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-900">The Legend</h2>
              <p className="text-slate-500 text-lg font-serif italic">Maps, ships, and a very brave cat.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-white ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto' : 'aspect-square'}`}
                >
                  <img 
                    src={img} 
                    alt={`Trim Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-white rounded-full border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">Live</span>
              </div>
            </div>
            
            <div className="bg-white p-1 rounded-2xl shadow-lg border border-slate-200 h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=light&trades=0&info=0`}
                className="w-full h-full border-0 rounded-xl"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FOOTER & CA */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">$TRIM</h2>
              
              <div className="flex flex-wrap justify-center gap-4 font-sans">
                <Button 
                  className="bg-amber-700 hover:bg-amber-800 text-white h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-amber-700/20"
                  onClick={() => window.open("https://pump.fun/coin/9W75Z7xPzSHydaUdo1RvfJtviAWbdFhgtM2jWBFbpump", "_blank")}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/5erecpmozmrrfezte9yzpbuca6wjpurjunke1pttaoee", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2008919244109475907", "_blank")}
                >
                  <Twitter className="w-5 h-5" />
                  Community
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-slate-400 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 hover:border-amber-700 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-slate-600 break-all group-hover:text-amber-700 transition-colors">
                    {CA}
                  </code>
                  <div className="text-slate-400 group-hover:text-amber-700 transition-colors">
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
