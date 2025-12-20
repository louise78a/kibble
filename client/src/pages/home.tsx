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
                <span>The Processed Golem</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#451A03] leading-[1.1]">
                Forged from <br/>
                <span className="text-[#D97706]">Consumption.</span>
              </h1>
              
              <p className="text-xl text-[#78350F] leading-relaxed max-w-lg">
                What started as a joke became a warrior. 1.4M views in 24 hours. 
                Instantly recognisable. Impossible to ignore.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-[#D97706] hover:bg-[#B45309] text-white h-12 px-8 rounded-full text-lg font-medium shadow-xl shadow-orange-500/30 transition-transform active:scale-95"
                  onClick={() => window.open("https://pump.fun/coin/BK87JnLYhKUp7nq2qkARQneDMrg6UpVi96WLnaAKpump", "_blank")}
                >
                  Buy on Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#D97706] text-[#D97706] hover:bg-[#FEF3C7] h-12 px-8 rounded-full text-lg font-medium"
                  onClick={() => window.open("https://dexscreener.com/solana/efwsuk62yqtf7i8sqmbnx6bntxtuvajhkemza7uzvtdn", "_blank")}
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

        {/* STATS / LORE */}
        <section className="bg-[#FEF3C7] py-16 border-y border-[#FDE68A]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "1.4M Views", 
                  desc: "Exploded on X within 24 hours. The algorithm craves the burger.",
                  icon: <TrendingUp className="text-[#D97706]" />
                },
                { 
                  title: "Industrial Golem", 
                  desc: "Buns, patties, fries, grease. Engineered for meme consumption.",
                  icon: <Utensils className="text-[#D97706]" />
                },
                { 
                  title: "Identified: None", 
                  desc: "The beef source is unknown. The process is a mystery. Only BURG remains.",
                  icon: <Info className="text-[#D97706]" />
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow bg-[#FFFBEB]">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center mb-3 text-[#D97706]">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-[#451A03]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#78350F]">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ORIGINS SECTION */}
        <section id="about" className="py-20 container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-[#451A03]">Only the result remained.</h2>
                <p className="text-lg text-[#78350F] leading-relaxed">
                  BURG stands for <strong className="text-[#D97706]">Beef Unidentified Processed Golem</strong>. 
                  A being forged not from myth or stone, but from industrial food itself. 
                </p>
                <p className="text-lg text-[#78350F] leading-relaxed">
                  The beef was never identified. The process was never explained. 
                  Just a humanoid figure engineered from pure consumption.
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
                <video src={video1} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" controls loop muted playsInline />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                   <Play className="w-16 h-16 text-white/50" />
                </div>
              </div>
              <div className="bg-black rounded-xl overflow-hidden aspect-video border border-[#78350F] shadow-2xl relative group">
                <video src={video2} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" controls loop muted playsInline />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                   <Play className="w-16 h-16 text-white/50" />
                </div>
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
                  variant="outline" 
                  className="bg-[#291001] border-[#78350F] text-[#FFFBEB] hover:bg-[#3D1802] font-bold text-lg px-8 py-6 rounded-xl gap-2 hover:text-white"
                  onClick={() => window.open("https://dexscreener.com/solana/efwsuk62yqtf7i8sqmbnx6bntxtuvajhkemza7uzvtdn", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6 rounded-xl border border-[#78350F] gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2002308421933035758", "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  Community X
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
