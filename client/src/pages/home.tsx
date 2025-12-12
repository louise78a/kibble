import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import mainCardImg from "@assets/img_1765547647125.png";
import yesImg from "@assets/yes_1765547647125.png";
import noImg from "@assets/no_1765547647123.png";
import dexscreenerLogo from "@assets/image_1765380251339.png";

const YES_CA = "CmmabyBWhZCctBcWjP6UknTfZrTBRBosgLmbAJHxpump";
const NO_CA = "3VLNHCqr8AXyy886tBkCTcDZcyDTkwkZhBDVg6fZpump";

const Marquee = ({ text, direction = 1, speed = 20, className = "" }: { text: string; direction?: number; speed?: number; className?: string }) => {
  return (
    <div className={`flex overflow-hidden py-2 border-y-4 border-black cursor-pointer ${className}`}>
      <motion.div
        className="flex whitespace-nowrap text-3xl md:text-5xl font-display text-white font-bold uppercase"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        whileHover={{ scale: 1.02 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { toast } = useToast();
  const [copiedYes, setCopiedYes] = useState(false);
  const [copiedNo, setCopiedNo] = useState(false);

  const copyToClipboard = (text: string, isYes: boolean) => {
    navigator.clipboard.writeText(text);
    if (isYes) {
      setCopiedYes(true);
      setTimeout(() => setCopiedYes(false), 2000);
    } else {
      setCopiedNo(true);
      setTimeout(() => setCopiedNo(false), 2000);
    }
    toast({
      title: "COPIED!",
      description: "Contract Address copied.",
      className: "bg-black text-white border-2 border-white font-display text-xl",
    });
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-pm-bg text-white overflow-hidden pb-0 flex flex-col cursor-pointer font-body">
      
      {/* MARQUEE TOP */}
      <div className="relative z-10">
        <Marquee text="$YES or $NO • WILL THIS COIN RUN? • MAKE YOUR PREDICTION • " speed={30} className="bg-blue-600" />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-10 flex flex-col items-center gap-12 flex-grow cursor-pointer pb-20">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-6 cursor-pointer max-w-4xl mx-auto">
          <motion.h1 
            className="text-7xl md:text-9xl font-display text-white text-stroke cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-yes-green">$YES</span> <span className="text-white">OR</span> <span className="text-no-red">$NO</span>
          </motion.h1>
          
          <motion.div
             whileHover={{ scale: 1.02 }}
             className="cursor-pointer"
          >
             <img src={mainCardImg} alt="Prediction Card" className="w-full max-w-lg mx-auto rounded-xl shadow-2xl border-4 border-white/20" />
          </motion.div>

          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 font-bold text-center max-w-2xl mx-auto leading-relaxed border-2 border-white/10 bg-black/30 p-4 rounded-xl backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            "Phantom launched prediction markets. Normies are aping. We put two coins in one dev wallet. Will it run? Make your choice."
          </motion.p>
        </div>

        {/* SPLIT SECTION - YES vs NO */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-4">
          
          {/* YES SIDE */}
          <div className="flex flex-col items-center gap-6 p-6 bg-yes-green/10 rounded-3xl border-4 border-yes-green/30 hover:border-yes-green transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]">
            <motion.h2 className="text-6xl font-display text-yes-green text-stroke-sm">VOTE YES</motion.h2>
            <motion.img 
              src={yesImg} 
              alt="Yes Token" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            {/* CA YES */}
            <div className="w-full bg-black/50 p-3 rounded-xl border border-yes-green/50 flex items-center gap-2">
               <code className="font-mono text-xs md:text-sm text-yes-green truncate flex-1">{YES_CA}</code>
               <Button onClick={() => copyToClipboard(YES_CA, true)} size="sm" className="bg-yes-green hover:bg-green-600 text-black font-bold h-8 w-8 p-0">
                 {copiedYes ? <Check size={14} /> : <Copy size={14} />}
               </Button>
            </div>

            {/* LINKS YES */}
            <div className="flex gap-3 w-full justify-center flex-wrap">
              <motion.a href="https://pump.fun/coin/CmmabyBWhZCctBcWjP6UknTfZrTBRBosgLmbAJHxpump" target="_blank" className="flex-1 min-w-[140px]" {...hoverEffect}>
                <div className="bg-yes-green text-black font-display text-xl py-2 px-4 rounded-lg text-center border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2">
                  💊 PUMP
                </div>
              </motion.a>
              <motion.a href="https://dexscreener.com/solana/badt56sb4cqzee7yrxkvntslhoq1aqxwaqvass7d528r" target="_blank" className="flex-1 min-w-[140px]" {...hoverEffect}>
                <div className="bg-slate-800 text-white font-display text-xl py-2 px-4 rounded-lg text-center border-2 border-yes-green shadow-[4px_4px_0_0_#22c55e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#22c55e] transition-all flex items-center justify-center gap-2">
                   <img src={dexscreenerLogo} className="w-5 h-5" /> DEX
                </div>
              </motion.a>
            </div>
          </div>

          {/* NO SIDE */}
          <div className="flex flex-col items-center gap-6 p-6 bg-no-red/10 rounded-3xl border-4 border-no-red/30 hover:border-no-red transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]">
            <motion.h2 className="text-6xl font-display text-no-red text-stroke-sm">VOTE NO</motion.h2>
            <motion.img 
              src={noImg} 
              alt="No Token" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />
            
            {/* CA NO */}
            <div className="w-full bg-black/50 p-3 rounded-xl border border-no-red/50 flex items-center gap-2">
               <code className="font-mono text-xs md:text-sm text-no-red truncate flex-1">{NO_CA}</code>
               <Button onClick={() => copyToClipboard(NO_CA, false)} size="sm" className="bg-no-red hover:bg-red-600 text-black font-bold h-8 w-8 p-0">
                 {copiedNo ? <Check size={14} /> : <Copy size={14} />}
               </Button>
            </div>

            {/* LINKS NO */}
            <div className="flex gap-3 w-full justify-center flex-wrap">
              <motion.a href="https://pump.fun/coin/3VLNHCqr8AXyy886tBkCTcDZcyDTkwkZhBDVg6fZpump" target="_blank" className="flex-1 min-w-[140px]" {...hoverEffect}>
                <div className="bg-no-red text-black font-display text-xl py-2 px-4 rounded-lg text-center border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2">
                  💊 PUMP
                </div>
              </motion.a>
              <motion.a href="https://dexscreener.com/solana/c2hlnauyettpjuphsqvkyragjnrq2m9yzw4wsfhuzmn" target="_blank" className="flex-1 min-w-[140px]" {...hoverEffect}>
                <div className="bg-slate-800 text-white font-display text-xl py-2 px-4 rounded-lg text-center border-2 border-no-red shadow-[4px_4px_0_0_#ef4444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#ef4444] transition-all flex items-center justify-center gap-2">
                   <img src={dexscreenerLogo} className="w-5 h-5" /> DEX
                </div>
              </motion.a>
            </div>
          </div>

        </div>

        {/* COMMUNITY LINK - CENTERED BOTTOM */}
        <motion.a 
            href="https://x.com/i/communities/1999471186900828334" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer mt-8"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white border-2 border-white px-8 py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] font-display text-2xl cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              JOIN THE COMMUNITY
            </div>
        </motion.a>

      </main>

      {/* FOOTER MARQUEE */}
      <div className="mt-auto relative z-10">
        <Marquee text="$YES or $NO • WILL THIS COIN RUN? • MAKE YOUR PREDICTION • " speed={30} direction={-1} className="bg-no-red" />
      </div>

    </div>
  );
}