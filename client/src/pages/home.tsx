import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, Tv, Heart, ExternalLink, Dog } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import logoNo8 from "@/assets/logo_no8.jpeg";
import heroBanner from "@/assets/hero_banner.png";
import section2Video from "@/assets/section_2_video.mp4";
import gVideo1 from "@/assets/gallery/v1.mp4";
import gVideo2 from "@/assets/gallery/v2.mp4";
import gVideo3 from "@/assets/gallery/v3.mp4";
import gVideo4 from "@/assets/gallery/v4.mp4";

const CA = "536YassmBdyKduioNNpNfDp2d7bV4bb6nXp2UHN3pump";
const PAIR_ADDRESS = "gdzzx8ni84uj1udvwrstgfjkght7s91gxrbcfnf5rqhg";

const galleryVideos = [gVideo1, gVideo2, gVideo3, gVideo4];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard.",
      className: "bg-[#D97728] text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDF6E3] text-[#2D1B4E] font-sans selection:bg-[#D97728] selection:text-white flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #FDF6E3;
        }
        ::-webkit-scrollbar-thumb {
          background: #D97728;
          border-radius: 6px;
          border: 2px solid #FDF6E3;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #B55D1B;
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="border-b border-[#D97728]/20 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full border-2 border-[#D97728] overflow-hidden">
              <img src={logoNo8} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#2D1B4E] font-black">$No8</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7D6B91]">
            <a href="#about" className="hover:text-[#D97728] transition-colors">Story</a>
            <a href="#gallery" className="hover:text-[#D97728] transition-colors">Clips</a>
            <a href="#chart" className="hover:text-[#D97728] transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-[#D97728] hover:bg-[#B55D1B] text-white font-bold rounded-full px-6 shadow-lg shadow-orange-500/20 border-none"
            onClick={() => window.open("https://pump.fun/coin/536YassmBdyKduioNNpNfDp2d7bV4bb6nXp2UHN3pump", "_blank")}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADDFF] text-[#5B2C99] text-sm font-bold border border-[#D0BCFF]">
                <Dog size={16} />
                <span>Santa's Little Helper</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#2D1B4E] leading-[1.1]">
                The Iconic <br/>
                <span className="text-[#D97728] underline decoration-4 underline-offset-4 decoration-wavy">Christmas Dog.</span>
              </h1>
              
              <p className="text-xl text-[#4B5563] leading-relaxed max-w-lg">
                Known as <span className="font-bold text-[#D97728]">No. 8</span>, he's the most recognisable dog in TV history. 
                With Christmas around the corner, nostalgia is peaking — and Santa’s Little Helper fits the moment perfectly.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-[#D97728] hover:bg-[#B55D1B] text-white h-12 px-8 rounded-full text-lg font-bold shadow-xl shadow-orange-500/30 border-none"
                  onClick={() => window.open("https://pump.fun/coin/536YassmBdyKduioNNpNfDp2d7bV4bb6nXp2UHN3pump", "_blank")}
                >
                  Join $No8
                </Button>
                <Button 
                  className="bg-[#2D1B4E] hover:bg-[#1A0F2E] text-white h-12 px-8 rounded-full text-lg font-bold border-none"
                  onClick={() => window.open("https://dexscreener.com/solana/gdzzx8ni84uj1udvwrstgfjkght7s91gxrbcfnf5rqhg", "_blank")}
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
              <div className="rounded-[2rem] overflow-hidden bg-black border-4 border-[#2D1B4E] shadow-[8px_8px_0px_0px_rgba(45,27,78,1)] relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 isolation-auto">
                <img 
                  src={heroBanner} 
                  alt="Santa's Little Helper"
                  className="w-full h-auto object-cover block"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-[#2D1B4E] shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D97728] flex items-center justify-center text-white font-bold">
                      <Tv size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#4B5563] font-medium uppercase">Origin</p>
                      <p className="text-sm font-bold text-[#2D1B4E]">Decades of Cultural History</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Splash */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#D97728] blur-[100px] rounded-full opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section id="about" className="py-20 bg-white border-y border-[#D97728]/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6 order-2 md:order-1">
                  <h2 className="text-3xl md:text-5xl font-black text-[#2D1B4E]">The Origin Story.</h2>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    In the very first Simpsons Christmas episode, Bart and Homer find him on Christmas Eve at a dog race, 
                    where he was abandoned after losing. They bring him home and name him <span className="font-bold text-[#D97728]">Santa’s Little Helper</span>.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed border-l-4 border-[#D97728] pl-4 italic">
                    "He becomes part of the family from that moment on. It’s one of the most iconic Christmas-origin stories in TV history."
                  </p>
                  <div className="pt-4">
                    <Button 
                      className="bg-[#2D1B4E] hover:bg-[#1A0F2E] text-white font-medium rounded-full px-6 shadow-lg shadow-purple-900/10 border-none gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2003440282407215273", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D97728] rotate-2 hover:rotate-0 transition-transform duration-500 bg-black">
                    <video 
                      src={section2Video} 
                      className="w-full h-auto object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section id="gallery" className="py-20 bg-[#2D1B4E] text-white">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Classic Moments</h2>
            <p className="text-gray-300 mb-12 text-lg">A tribute to the best dog in Springfield.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {galleryVideos.map((vid, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden border-2 border-[#5B2C99] hover:border-[#D97728] transition-colors shadow-2xl bg-black aspect-video"
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
        <section id="chart" className="py-12 bg-[#FDF6E3] border-y border-[#D97728]/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-[#2D1B4E]">$No8 Chart</h2>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse"></div>
                <span className="text-sm font-medium text-[#4B5563]">Live Trading</span>
              </div>
            </div>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-[#D97728]/20 h-[600px] overflow-hidden relative">
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
          
          <div className="bg-white text-[#2D1B4E] rounded-3xl p-8 md:p-12 shadow-xl border border-[#D97728]/20 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-4xl font-black">Join the $No8 Family</h2>
              <p className="text-[#4B5563] max-w-xl mx-auto font-medium text-lg">
                The most iconic dog in TV history, finally on Solana.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-[#D97728] hover:bg-[#B55D1B] text-white h-12 px-8 rounded-full text-lg font-bold gap-2 border-none"
                  onClick={() => window.open("https://pump.fun/coin/536YassmBdyKduioNNpNfDp2d7bV4bb6nXp2UHN3pump", "_blank")}
                >
                  Buy on Pump.fun
                </Button>
                <Button 
                  className="bg-white border-2 border-[#2D1B4E] text-[#2D1B4E] hover:bg-gray-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/gdzzx8ni84uj1udvwrstgfjkght7s91gxrbcfnf5rqhg", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 h-12 rounded-full border-none gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2003440282407215273", "_blank")}
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
                  className="flex items-center justify-center gap-3 bg-[#FDF6E3] p-4 rounded-xl border border-[#D97728]/30 hover:bg-[#FAEAD6] transition-colors cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-[#2D1B4E] break-all">
                    {CA}
                  </code>
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-white transition-colors">
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97728] blur-[100px] opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5B2C99] blur-[100px] opacity-10 rounded-full"></div>
          </div>

        </section>

      </main>
    </div>
  );
}