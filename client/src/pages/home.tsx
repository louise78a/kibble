import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, Brush, Palette, Image as ImageIcon, ExternalLink, Skull } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Assets
import artHero from "@assets/art_hero.jpg";
import artOrigins from "@assets/art_origins.jpg";
import gallery1 from "@assets/gallery/1.jpg";
import gallery2 from "@assets/gallery/2.jpg";
import gallery3 from "@assets/gallery/3.jpg";
import gallery4 from "@assets/gallery/4.jpg";
import gallery5 from "@assets/gallery/5.jpg";
import gallery6 from "@assets/gallery/6.jpg";
import gallery7 from "@assets/gallery/7.jpg";

const CA = "6SiuEfuYBtQK19XUcYWxz8w4puQ2TNWpNk5SVp1xpump";
const PAIR_ADDRESS = "bc3qaz9wk1ny6bs4oknvzfjo8cuxsrf85olyj7tmu9jz";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard.",
      className: "bg-[#EF4444] text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#111827] font-sans selection:bg-[#EF4444] selection:text-white flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #F3F4F6;
        }
        ::-webkit-scrollbar-thumb {
          background: #111827;
          border-radius: 6px;
          border: 2px solid #F3F4F6;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3B82F6;
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full border-2 border-[#111827] overflow-hidden">
              <img src={artHero} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#111827]">$ART</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4B5563]">
            <a href="#about" className="hover:text-[#EF4444] transition-colors">Manifesto</a>
            <a href="#gallery" className="hover:text-[#EF4444] transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-[#EF4444] transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-[#111827] hover:bg-[#374151] text-white font-medium rounded-full px-6 shadow-lg shadow-black/10 border-none"
            onClick={() => window.open("https://pump.fun/coin/6SiuEfuYBtQK19XUcYWxz8w4puQ2TNWpNk5SVp1xpump", "_blank")}
          >
            Buy Now
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E7EB] text-[#111827] text-sm font-medium border border-[#D1D5DB]">
                <Brush size={16} />
                <span>The Human Art Revolution</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111827] leading-[1.1]">
                Real Art. <br/>
                <span className="text-[#EF4444] underline decoration-4 underline-offset-4 decoration-wavy">No AI.</span>
              </h1>
              
              <p className="text-xl text-[#4B5563] leading-relaxed max-w-lg">
                AI-generated slop is everywhere, and real artists are pushing back — hard.
                A revolution in real time. Proudly hand-drawn, human-made work.
                Explicitly: <span className="font-bold text-[#111827]">no AI involved.</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-[#EF4444] hover:bg-[#DC2626] text-white h-12 px-8 rounded-full text-lg font-medium shadow-xl shadow-red-500/30 border-none"
                  onClick={() => window.open("https://pump.fun/coin/6SiuEfuYBtQK19XUcYWxz8w4puQ2TNWpNk5SVp1xpump", "_blank")}
                >
                  Join the Revolution
                </Button>
                <Button 
                  className="bg-[#1F2937] hover:bg-[#111827] text-white h-12 px-8 rounded-full text-lg font-medium border-none"
                  onClick={() => window.open("https://dexscreener.com/solana/bc3qaz9wk1ny6bs4oknvzfjo8cuxsrf85olyj7tmu9jz", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="rounded-[2rem] overflow-hidden bg-white border-4 border-[#111827] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={artHero} 
                  alt="Human Art" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-[#111827] shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EF4444] flex items-center justify-center text-white font-bold">
                      <Palette size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#4B5563] font-medium uppercase">Movement</p>
                      <p className="text-sm font-bold text-[#111827]">Human Creativity Unleashed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Splash */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#3B82F6] blur-[100px] rounded-full opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* ORIGINS SECTION */}
        <section id="about" className="py-20 bg-white border-y border-[#E5E7EB]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6 order-2 md:order-1">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#111827]">The Push Back.</h2>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    A recent post showcasing art made without AI exploded to 5.2M views. The engagement is insane. 
                    What we’re watching feels like an art revolution in real time.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed border-l-4 border-[#EF4444] pl-4 italic">
                    "I made this with my hands. My soul. My pain. No prompt can replicate the chaos of human emotion."
                  </p>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#111827] rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src={artOrigins} alt="Art Revolution" className="w-full h-auto" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section id="gallery" className="py-20 bg-[#111827] text-white">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Art Without AI</h2>
            <p className="text-gray-400 mb-12 text-lg">A curated chaos of human expression.</p>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="break-inside-avoid rounded-xl overflow-hidden border-2 border-[#374151] hover:border-[#EF4444] transition-colors shadow-2xl bg-black"
                >
                  <img src={img} alt={`Gallery Art ${index + 1}`} className="w-full h-auto" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-[#F3F4F6] border-y border-[#E5E7EB]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#111827]">Market Canvas</h2>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse"></div>
                <span className="text-sm font-medium text-[#4B5563]">Live Trading</span>
              </div>
            </div>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-[#E5E7EB] h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=light&trades=0&info=0`}
                className="w-full h-full border-0 rounded-xl"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        {/* COMMUNITY & CA */}
        <section id="community" className="py-20 container mx-auto px-4 max-w-4xl text-center space-y-12">
          
          <div className="bg-white text-[#111827] rounded-3xl p-8 md:p-12 shadow-xl border border-[#E5E7EB] relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Join the Movement</h2>
              <p className="text-[#4B5563] max-w-xl mx-auto font-medium text-lg">
                Support real artists. Reject the slop.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-[#111827] hover:bg-[#374151] text-white h-12 px-8 rounded-full text-lg font-bold gap-2 border-none"
                  onClick={() => window.open("https://pump.fun/coin/6SiuEfuYBtQK19XUcYWxz8w4puQ2TNWpNk5SVp1xpump", "_blank")}
                >
                  <Palette className="w-5 h-5" />
                  Buy on Pump.fun
                </Button>
                <Button 
                  className="bg-white border-2 border-[#111827] text-[#111827] hover:bg-gray-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/bc3qaz9wk1ny6bs4oknvzfjo8cuxsrf85olyj7tmu9jz", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold text-lg px-8 h-12 rounded-full border-none gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2003078941213426158", "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  Community X
                </Button>
              </div>

              <div className="pt-8 border-t border-[#E5E7EB]">
                <p className="text-sm text-[#4B5563] mb-4 font-mono font-bold">CONTRACT ADDRESS</p>
                <div 
                  className="flex items-center justify-center gap-3 bg-[#F3F4F6] p-4 rounded-xl border border-[#D1D5DB] hover:bg-[#E5E7EB] transition-colors cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-[#111827] break-all">
                    {CA}
                  </code>
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-white transition-colors">
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF4444] blur-[100px] opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6] blur-[100px] opacity-10 rounded-full"></div>
          </div>

        </section>

      </main>
    </div>
  );
}
