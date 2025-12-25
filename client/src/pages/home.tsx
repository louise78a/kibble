import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, Twitter, ExternalLink, Dog, Rocket, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import bogeImg from "@/assets/boge.jpg";
import dogeImg from "@/assets/doge.jpg";

const CA = "64x9UaSvpxKVRzJTRRZEZGSMTCJEefXdBVnT9ZDDpump";
const PAIR_ADDRESS = "6ei47egf7bjuvhetihdxn9l9tvjra9suk9zlhcst44bo";
const PUMP_URL = "https://pump.fun/coin/64x9UaSvpxKVRzJTRRZEZGSMTCJEefXdBVnT9ZDDpump";
const TWITTER_COMMUNITY = "https://x.com/i/communities/2004155300929261588";

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard.",
      className: "bg-[#E6C15C] text-black border-none font-bold",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#4A3B28] font-sans selection:bg-[#E6C15C] selection:text-black flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #FFF8E7;
        }
        ::-webkit-scrollbar-thumb {
          background: #E6C15C;
          border-radius: 6px;
          border: 2px solid #FFF8E7;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #D4A017;
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="border-b border-[#E6C15C]/30 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full border-2 border-[#E6C15C] overflow-hidden">
              <img src={bogeImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#4A3B28] font-black tracking-wider">$BOGE</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#8B7355]">
            <a href="#about" className="hover:text-[#E6C15C] transition-colors">Vs DOGE</a>
            <a href="#chart" className="hover:text-[#E6C15C] transition-colors">Chart</a>
            <a href="#community" className="hover:text-[#E6C15C] transition-colors">Community</a>
          </div>
          <Button 
            className="bg-[#E6C15C] hover:bg-[#D4A017] text-black font-black rounded-full px-6 shadow-lg shadow-yellow-500/20 border-none uppercase tracking-wide"
            onClick={() => window.open(PUMP_URL, "_blank")}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0C2] text-[#856404] text-sm font-bold border border-[#E6C15C]">
                <Dog size={16} />
                <span>The Spirit Returns</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#4A3B28] leading-[1.1]">
                Make Meme Coins <br/>
                <span className="text-[#E6C15C] underline decoration-4 underline-offset-4 decoration-wavy">Great Again.</span>
              </h1>
              
              <p className="text-xl text-[#6B5B45] leading-relaxed max-w-lg font-medium">
                $DOGE started it all. <span className="font-bold text-[#E6C15C]">$BOGE</span> is here to bring the spirit back to the trenches. 
                We’re taking Baby Doge to see his parents on the moon! 🚀
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-[#E6C15C] hover:bg-[#D4A017] text-black h-12 px-8 rounded-full text-lg font-black shadow-xl shadow-yellow-500/30 border-none uppercase"
                  onClick={() => window.open(PUMP_URL, "_blank")}
                >
                  Ape Into $BOGE
                </Button>
                <Button 
                  className="bg-[#4A3B28] hover:bg-[#2C2218] text-white h-12 px-8 rounded-full text-lg font-bold border-none"
                  onClick={() => window.open(`https://dexscreener.com/solana/${PAIR_ADDRESS}`, "_blank")}
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
              <div className="rounded-[2rem] overflow-hidden bg-[#FFF8E7] border-4 border-[#4A3B28] shadow-[8px_8px_0px_0px_rgba(74,59,40,1)] relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={bogeImg} 
                  alt="$BOGE"
                  className="w-full h-auto object-cover block"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-[#4A3B28] shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E6C15C] flex items-center justify-center text-black font-bold">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B5B45] font-bold uppercase">Mission</p>
                      <p className="text-sm font-black text-[#4A3B28]">To The Moon</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Splash */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#E6C15C] blur-[100px] rounded-full opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* COMPARISON SECTION (DOGE vs BOGE) */}
        <section id="about" className="py-20 bg-white border-y border-[#E6C15C]/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
             <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-[#4A3B28] uppercase tracking-tight">The Showdown</h2>
                <p className="text-xl text-[#6B5B45] font-medium max-w-2xl mx-auto">
                  $DOGE walked so $BOGE could run. It's time for the student to become the master.
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                
                {/* VS Badge in center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-20 h-20 bg-[#FF4444] rounded-full items-center justify-center border-4 border-white shadow-xl rotate-12">
                   <span className="text-white font-black text-2xl italic">VS</span>
                </div>

                {/* DOGE SIDE */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gray-100 rounded-3xl p-6 border-4 border-gray-300 relative"
                >
                   <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-gray-200 grayscale-[50%] hover:grayscale-0 transition-all duration-500">
                     <img src={dogeImg} alt="Doge" className="w-full h-full object-cover" />
                   </div>
                   <h3 className="text-3xl font-black text-gray-500 mb-2">$DOGE</h3>
                   <p className="text-gray-500 font-bold mb-4">The Legend (Boomer Coin)</p>
                   <ul className="space-y-2 text-gray-500">
                     <li className="flex items-center gap-2"><Check size={16} /> Started the movement</li>
                     <li className="flex items-center gap-2"><Check size={16} /> Good boy</li>
                     <li className="flex items-center gap-2 text-red-400"><TrendingUp size={16} className="rotate-90" /> Needs Elon to pump</li>
                   </ul>
                </motion.div>

                {/* BOGE SIDE */}
                <motion.div 
                   whileHover={{ y: -10, scale: 1.02 }}
                   className="bg-[#FFF8E7] rounded-3xl p-6 border-4 border-[#E6C15C] relative shadow-[0px_10px_40px_-10px_rgba(230,193,92,0.5)]"
                >
                   <div className="absolute -top-6 -right-6 bg-[#FF4444] text-white px-4 py-2 rounded-full font-black rotate-12 shadow-lg z-10 animate-pulse">
                      NEXT 1000X
                   </div>
                   <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-[#E6C15C]">
                     <img src={bogeImg} alt="Boge" className="w-full h-full object-cover" />
                   </div>
                   <h3 className="text-3xl font-black text-[#4A3B28] mb-2">$BOGE</h3>
                   <p className="text-[#D4A017] font-bold mb-4">The Chosen One</p>
                   <ul className="space-y-2 text-[#4A3B28] font-medium">
                     <li className="flex items-center gap-2"><Zap size={16} className="text-[#E6C15C]" /> Fresh legs</li>
                     <li className="flex items-center gap-2"><Zap size={16} className="text-[#E6C15C]" /> Community powered</li>
                     <li className="flex items-center gap-2"><Zap size={16} className="text-[#E6C15C]" /> 3M Market Cap incoming?</li>
                   </ul>
                </motion.div>
             </div>

             <div className="mt-16 text-center space-y-6">
                <Button 
                  className="bg-[#E6C15C] hover:bg-[#D4A017] text-black h-14 px-10 rounded-full text-xl font-black shadow-xl shadow-yellow-500/30 border-none uppercase"
                  onClick={() => window.open(TWITTER_COMMUNITY, "_blank")}
                >
                  Join the Movement
                </Button>
             </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-[#FFF8E7] border-y border-[#E6C15C]/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-[#4A3B28]">$BOGE Chart</h2>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse"></div>
                <span className="text-sm font-medium text-[#6B5B45]">Live Trading</span>
              </div>
            </div>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-[#E6C15C]/20 h-[600px] overflow-hidden relative">
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
          
          <div className="bg-white text-[#4A3B28] rounded-3xl p-8 md:p-12 shadow-xl border border-[#E6C15C]/30 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black">Join the $BOGE Army</h2>
              <p className="text-[#6B5B45] max-w-xl mx-auto font-medium text-lg">
                We are bringing the meme coin spirit back to where it belongs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-[#E6C15C] hover:bg-[#D4A017] text-black h-12 px-8 rounded-full text-lg font-bold gap-2 border-none"
                  onClick={() => window.open(PUMP_URL, "_blank")}
                >
                  <Rocket size={20} />
                  Pump.fun
                </Button>
                <Button 
                  className="bg-white border-2 border-[#4A3B28] text-[#4A3B28] hover:bg-gray-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open(`https://dexscreener.com/solana/${PAIR_ADDRESS}`, "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 h-12 rounded-full border-none gap-2"
                  onClick={() => window.open(TWITTER_COMMUNITY, "_blank")}
                >
                  <Twitter className="w-5 h-5 fill-current" />
                  Community
                </Button>
              </div>

              <div className="pt-8 border-t border-[#E6C15C]/20">
                <p className="text-sm text-[#8B7355] mb-4 font-mono font-bold uppercase tracking-widest">Contract Address</p>
                <div 
                  className="flex items-center justify-center gap-3 bg-[#FFF8E7] p-4 rounded-xl border border-[#E6C15C] hover:bg-[#FFF0C2] transition-colors cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-xl text-[#4A3B28] break-all font-bold">
                    {CA}
                  </code>
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-white transition-colors border border-[#E6C15C]/20">
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6C15C] blur-[100px] opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A3B28] blur-[100px] opacity-10 rounded-full"></div>
          </div>

        </section>

      </main>
    </div>
  );
}