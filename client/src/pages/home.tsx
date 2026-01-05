import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Zap, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import logoSonic from "@/assets/sonic_logo.jpg";
import heroSonic from "@/assets/sonic_hero.jpg";
import davidRosen from "@/assets/david_rosen.jpg";

// Gallery
import gallery1 from "@/assets/gallery/sonic_1.mp4";
import gallery2 from "@/assets/gallery/sonic_2.mp4";
import gallery3 from "@/assets/gallery/sonic_3.mp4";
import gallery4 from "@/assets/gallery/sonic_4.mp4";
import gallery5 from "@/assets/gallery/sonic_5.mp4";

const CA = "DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump";
const PAIR_ADDRESS = "6nzx6p4qpiuwgxk626uf2klbpapcp72njk7h7qnf5sww";

const galleryVideos = [gallery1, gallery2, gallery3, gallery4, gallery5];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard.",
      className: "bg-blue-600 text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img src={logoSonic} alt="Sonic Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-black font-black tracking-tighter text-2xl">$SONIC</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">Story</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-blue-600 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-blue-500/20"
            onClick={() => window.open("https://pump.fun/coin/DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump", "_blank")}
          >
            Buy $SONIC
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
                <Zap size={16} />
                <span>The Blue Blur</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.9]">
                SONIC.
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  <span className="text-black font-medium">Sonic never leaves — he just evolves.</span> From forums to TikTok, he represents speed as an identity.
                </p>
                <p>
                  Sonic exists in both nostalgia and irony, making him endlessly memeable.
                </p>
                <p className="text-black font-bold">
                  Some characters fade. Sonic just keeps running. 💨
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-600/30"
                  onClick={() => window.open("https://pump.fun/coin/DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump", "_blank")}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-black border-2 border-gray-200 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open("https://dexscreener.com/solana/6nzx6p4qpiuwgxk626uf2klbpapcp72njk7h7qnf5sww", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-square md:h-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-50"
            >
               <img 
                  src={heroSonic} 
                  alt="Sonic Hero"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">Rest In Peace.</h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-6">
                    <p>
                      <strong className="text-black">David Rosen</strong>, the co-founder of Sega, has died at the age of 95.
                    </p>
                    <p>
                      His family confirmed he passed away on December 25th.
                    </p>
                    <p className="font-medium text-black text-xl">
                      May He Rest in Peace. 🕊️
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="bg-black hover:bg-gray-800 text-white rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2008178680262983880", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white border-4 border-white">
                    <img 
                      src={davidRosen} 
                      alt="David Rosen"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <p className="font-bold">David Rosen</p>
                        <p className="text-sm opacity-80">1930 - 2025</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Iconic Moments</h2>
              <p className="text-gray-500 text-lg">Speed, Memes, and Legacy.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {/* Featured Video */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-black shadow-sm hover:shadow-xl transition-all duration-300 relative group aspect-video md:aspect-auto"
              >
                <video 
                  src={galleryVideos[0]} 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>

              {galleryVideos.slice(1).map((vid, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl overflow-hidden bg-black aspect-square shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <video 
                    src={vid} 
                    className="w-full h-full object-cover" 
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-white rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Live</span>
              </div>
            </div>
            
            <div className="bg-white p-1 rounded-3xl shadow-lg border border-gray-200 h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=light&trades=0&info=0`}
                className="w-full h-full border-0 rounded-2xl"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FOOTER & CA */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-blue-600">$SONIC</h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-blue-500/20"
                  onClick={() => window.open("https://pump.fun/coin/DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump", "_blank")}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-black border-2 border-gray-200 hover:bg-gray-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/6nzx6p4qpiuwgxk626uf2klbpapcp72njk7h7qnf5sww", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-black border-2 border-gray-200 hover:bg-gray-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2008178680262983880", "_blank")}
                >
                  <Twitter className="w-5 h-5" />
                  Community
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-gray-400 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-gray-600 break-all group-hover:text-blue-600 transition-colors">
                    {CA}
                  </code>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
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
