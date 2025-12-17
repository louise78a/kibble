import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, AlertTriangle, Terminal, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

// Assets
import collageImg from "@assets/image_1766013365317.png";
import rankOneImg from "@assets/image_1766013412247.png";
import dexscreenerLogo from "@assets/image_1765380251339.png";

const CA = "3qsKpdzDtkzsGrYB2CEMJL7FTfx6bnRUCfNF1JQTpump";

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "COPIED!",
      description: "CA copied to clipboard.",
      className: "bg-[#1C1D22] text-white border border-[#353945] font-mono",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F1014] text-[#E0E2EB] font-sans selection:bg-[#00D26A] selection:text-black flex flex-col">
      
      <main className="container mx-auto px-4 py-12 flex flex-col items-center gap-12 max-w-6xl">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1D22] border border-[#353945] text-xs font-mono text-[#808A9D] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
              Live on Solana
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-2">
              $YOURTOKEN
            </h1>
            <p className="text-xl md:text-2xl text-[#808A9D] max-w-2xl mx-auto leading-relaxed">
              "Dexscreeners official token as seen on their website"
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              className="bg-[#00D26A] hover:bg-[#00b359] text-black font-bold text-lg px-8 py-6 rounded-xl gap-2"
              onClick={() => window.open("https://pump.fun/coin/3qsKpdzDtkzsGrYB2CEMJL7FTfx6bnRUCfNF1JQTpump", "_blank")}
            >
              <span className="text-xl">💊</span>
              Buy on Pump.fun
            </Button>
            <Button 
              variant="outline" 
              className="bg-[#1C1D22] border-[#353945] text-white hover:bg-[#2C2D35] font-bold text-lg px-8 py-6 rounded-xl gap-2"
              onClick={() => window.open("https://dexscreener.com/solana/6xjugyfqpymlvucotyijazrrhvdtmbbk6q9uejbhz2lo", "_blank")}
            >
              <img src={dexscreenerLogo} className="w-5 h-5" alt="Dex" />
              DexScreener
            </Button>
            <Button 
              className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6 rounded-xl border border-[#353945] gap-2"
              onClick={() => window.open("https://x.com/i/communities/2001400206173311122", "_blank")}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Community X
            </Button>
          </div>
        </div>

        {/* JOKE ALERTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          {[
            { title: "Status", text: "It's everywhere", icon: <TrendingUp className="text-[#00D26A]" /> },
            { title: "Market Cap", text: "Up only (Trust me)", icon: <AlertTriangle className="text-yellow-500" /> },
            { title: "Utility", text: "Pumping your bags", icon: <Terminal className="text-blue-500" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-[#1C1D22] border-[#353945] text-[#E0E2EB]">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 bg-[#2C2D35] rounded-lg">{item.icon}</div>
                  <div>
                    <div className="text-xs text-[#808A9D] uppercase font-bold">{item.title}</div>
                    <div className="font-mono text-sm">{item.text}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* MAIN IMAGE SECTION */}
        <div className="w-full max-w-3xl space-y-8">
          <motion.div 
            className="rounded-2xl border border-[#353945] overflow-hidden bg-[#1C1D22] shadow-2xl shadow-black/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2C2D35] px-4 py-2 border-b border-[#353945] flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              </div>
              <div className="flex-1 text-center text-xs font-mono text-[#808A9D]">dex_screener_leak.png</div>
            </div>
            <div className="p-4 md:p-8">
              <img 
                src={collageImg} 
                alt="DexScreener Interface Collage" 
                className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg shadow-lg border border-[#353945]"
              />
              <p className="text-center text-[#808A9D] mt-4 font-mono text-sm">
                "Look at all these screens. We are literally everywhere."
              </p>
            </div>
          </motion.div>
        </div>

        {/* CA SECTION */}
        <motion.div 
          className="w-full max-w-2xl"
          whileHover={{ scale: 1.01 }}
        >
          <div className="bg-[#1C1D22] border border-[#353945] rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 shadow-lg">
            <div className="flex items-center gap-2 text-[#00D26A]">
              <Terminal size={20} />
              <span className="font-mono font-bold">CA:</span>
            </div>
            <code className="flex-1 font-mono text-sm md:text-base text-[#E0E2EB] break-all bg-[#0F1014] p-3 rounded border border-[#353945]">
              {CA}
            </code>
            <Button 
              onClick={copyToClipboard}
              className="bg-[#2C2D35] hover:bg-[#353945] text-white shrink-0"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
        </motion.div>

        {/* RANK #1 SECTION */}
        <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl mt-12 pb-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded bg-[#00D26A]/20 text-[#00D26A] text-xs font-bold uppercase tracking-wider mb-2">
              Market Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              We are Number 1.
            </h2>
            <p className="text-[#808A9D] text-lg leading-relaxed">
              We are literally on every screen. The chart is green. The number is 1. What else do you need?
            </p>
            <ul className="space-y-3">
              {[
                "It's just math",
                "Lines go up",
                "Green is good",
                "We are everywhere"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#E0E2EB]">
                  <Check className="text-[#00D26A]" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D26A]/20 to-[#007AFF]/20 blur-xl rounded-full opacity-50"></div>
            <img 
              src={rankOneImg} 
              alt="Rank #1 Proof" 
              className="relative rounded-xl border border-[#353945] shadow-2xl w-full rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>

      </main>
    </div>
  );
}