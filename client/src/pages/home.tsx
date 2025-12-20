import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, Info, Globe, Play, Utensils, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Assets
import kingBurger from "@assets/G8mrEoVXgAA0voI_1766225628331.jpg";
import burgerArmy from "@assets/G8mq848bMAIEfv6_1766225628329.jpg";
import video1 from "@assets/1_1766225628330.mp4";
import video2 from "@assets/2_1766225628330.mp4";

const CA = "BK87JnLYhKUp7nq2qkARQneDMrg6UpVi96WLnaAKpump";
const PAIR_ADDRESS = "efwsuk62yqtf7i8sqmbnx6bntxtuvajhkemza7uzvtdn";

const THEME = {
  primary: "#D97706", // Amber-600 (Burger Bun/Cheese)
  secondary: "#92400E", // Amber-800 (Patty)
  accent: "#EF4444", // Red-500 (Ketchup)
  bg: "#FFFBEB", // Amber-50 (Light Bun)
  text: "#451A03", // Amber-950 (Dark Brown)
};

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard.",
      className: "bg-[#D97706] text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#451A03] font-sans selection:bg-[#D97706] selection:text-white flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #FFFBEB;
        }
        ::-webkit-scrollbar-thumb {
          background: #D97706;
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #B45309;
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="border-b border-[#FDE68A] bg-[#FFFBEB]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full border-2 border-[#D97706] overflow-hidden">
              <img src={kingBurger} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#92400E]">$BURG</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#78350F]">
            <a href="#about" className="hover:text-[#D97706] transition-colors">Origins</a>
            <a href="#chart" className="hover:text-[#D97706] transition-colors">Chart</a>
            <a href="#media" className="hover:text-[#D97706] transition-colors">Media</a>
          </div>
          <Button 
            className="bg-[#D97706] hover:bg-[#B45309] text-white font-medium rounded-full px-6 shadow-lg shadow-orange-500/20"
            onClick={() => window.open("https://pump.fun/coin/BK87JnLYhKUp7nq2qkARQneDMrg6UpVi96WLnaAKpump", "_blank")}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-sm font-medium border border-[#FDE68A]">
                <Utensils size={16} />
                <span>Beef Unidentified Processed Golem</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#451A03] leading-[1.1]">
                Forged from <br/>
                <span className="text-[#D97706]">Consumption.</span>
              </h1>
              
              <p className="text-xl text-[#78350F] leading-relaxed max-w-lg">
                What started as a joke turned into something else entirely. 
                A warrior made solely from burger components — buns, patties, fries, grease.
                Impossible to ignore.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-[#D97706] hover:bg-[#B45309] text-white h-12 px-8 rounded-full text-lg font-medium shadow-xl shadow-orange-500/30"
                  onClick={() => window.open("https://pump.fun/coin/BK87JnLYhKUp7nq2qkARQneDMrg6UpVi96WLnaAKpump", "_blank")}
                >
                  Buy on Pump.fun
                </Button>
                <Button 
                  className="bg-[#92400E] hover:bg-[#78350F] text-white h-12 px-8 rounded-full text-lg font-medium border-none"
                  onClick={() => window.open("https://dexscreener.com/solana/efwsuk62yqtf7i8sqmbnx6bntxtuvajhkemza7uzvtdn", "_blank")}
                >
                  View Chart
                </Button>
                <Button 
                  className="bg-[#229ED9] hover:bg-[#1E88B5] text-white font-medium h-12 px-8 rounded-full text-lg shadow-xl"
                  onClick={() => window.open("https://t.me/+8zUJ-EkvmqA1NzFk", "_blank")}
                >
                  Telegram
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="rounded-[2rem] overflow-hidden bg-[#FEF3C7] border-4 border-[#FDE68A] shadow-2xl shadow-orange-900/10 relative z-10">
                <img 
                  src={kingBurger} 
                  alt="King Burger" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#FDE68A] shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center text-white font-bold">
                      B
                    </div>
                    <div>
                      <p className="text-xs text-[#78350F] font-medium uppercase">Origin</p>
                      <p className="text-sm font-bold text-[#451A03]">Beef Unidentified Processed Golem</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D97706] blur-[100px] rounded-full opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </section>


        {/* ORIGINS SECTION */}
        <section id="about" className="py-20 container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-[#451A03]">Born from the grill.</h2>
                <p className="text-lg text-[#78350F] leading-relaxed">
                  <strong className="text-[#D97706]">BURG</strong> stands for Beef Unidentified Processed Golem — a being forged not from myth or stone, but from industrial food itself.
                </p>
                <p className="text-lg text-[#78350F] leading-relaxed">
                  The beef was never identified. The process was never explained. Only the result remained: a humanoid figure engineered from consumption.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="gap-2 border-[#D97706] text-[#D97706] hover:bg-[#FEF3C7]"
                    onClick={() => window.open("https://x.com/einzelkampfen/status/2001905678466871685?s=46", "_blank")}
                  >
                    View Original Tweet <ExternalLink size={16} />
                  </Button>
                </div>
             </div>
             <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FDE68A] rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src={burgerArmy} alt="Burger Army" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#D97706] text-white p-4 rounded-xl shadow-lg max-w-xs text-sm font-medium">
                  "It instantly became impossible to ignore."
                </div>
             </div>
          </div>
        </section>

        {/* MEDIA GRID */}
        <section id="media" className="py-20 bg-[#451A03] text-[#FFFBEB]">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Witness the Golem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black rounded-xl overflow-hidden aspect-video border border-[#78350F] shadow-2xl relative group">
                <video src={video1} className="w-full h-full object-cover" autoPlay loop muted playsInline />
              </div>
              <div className="bg-black rounded-xl overflow-hidden aspect-video border border-[#78350F] shadow-2xl relative group">
                <video src={video2} className="w-full h-full object-cover" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-[#FEF3C7] border-y border-[#FDE68A]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#451A03]">Live Chart</h2>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#D97706] animate-pulse"></div>
                <span className="text-sm font-medium text-[#78350F]">Live Trading</span>
              </div>
            </div>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-[#FDE68A] h-[600px] overflow-hidden relative">
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
          
          <div className="bg-[#451A03] text-[#FFFBEB] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Join the Feast</h2>
              <p className="text-[#D97706] max-w-xl mx-auto font-medium">
                The Golem grows with every transaction.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-[#D97706] hover:bg-[#B45309] text-white h-12 px-8 rounded-full text-lg font-bold gap-2"
                  onClick={() => window.open("https://pump.fun/coin/BK87JnLYhKUp7nq2qkARQneDMrg6UpVi96WLnaAKpump", "_blank")}
                >
                  <span className="text-xl">🍔</span>
                  Buy on Pump.fun
                </Button>
                <Button 
                  className="bg-[#92400E] border-[#78350F] text-white hover:bg-[#78350F] font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/efwsuk62yqtf7i8sqmbnx6bntxtuvajhkemza7uzvtdn", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 h-12 rounded-full border border-[#78350F] gap-2"
                  onClick={() => window.open("https://x.com/burgonsol", "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  X Account
                </Button>
                <Button 
                  className="bg-[#229ED9] hover:bg-[#1E88B5] text-white font-bold text-lg px-8 h-12 rounded-full border border-[#78350F] gap-2"
                  onClick={() => window.open("https://t.me/+8zUJ-EkvmqA1NzFk", "_blank")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5 fill-current">
                    <path d="M248,8C111.033,8,0,119.033,0,248S111.033,488,248,488s248-111.033,248-248S384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.313-10.022,22.008-16.411,22.566-13.974,1.216-24.582-7.352-38.124-16.291-21.192-13.987-33.167-22.65-53.724-36.22-23.754-14.15-8.36-21.91,5.187-36.012,3.545-3.687,65.179-59.727,66.366-62.731.148-.372.284-1.776-.677-2.516s-2.38-.261-3.407-.061c-1.427.275-22.864,14.534-64.6,42.71-6.112,4.129-11.666,6.146-16.634,6.035-5.48-.123-16.035-3.1-23.867-5.65-9.6-3.128-17.215-4.78-16.538-10.095.356-2.779,4.276-5.631,11.756-8.589,45.922-19.988,76.662-32.934,127.57-54.113,21.725-9.035,46.126-19.167,53.28-19.262,3.155-.042,10.218.757,14.155,3.957,3.315,2.566,4.232,6.035,4.522,8.472C363.324,169.306,363.224,173.812,362.952,176.66Z"/>
                  </svg>
                  Telegram
                </Button>
              </div>

              <div className="pt-8 border-t border-[#78350F]">
                <p className="text-sm text-[#D97706] mb-4 font-mono font-bold">CONTRACT ADDRESS</p>
                <div 
                  className="flex items-center justify-center gap-3 bg-black/20 p-4 rounded-xl border border-[#78350F] hover:bg-black/30 transition-colors cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-[#FFFBEB] break-all">
                    {CA}
                  </code>
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97706] blur-[100px] opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#92400E] blur-[100px] opacity-30 rounded-full"></div>
          </div>

        </section>

      </main>
    </div>
  );
}
