import { motion } from "framer-motion";
import { Copy, Check, Terminal, ExternalLink, Globe, BookOpen, Monitor } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Assets
import mozillaBanner from "@assets/image_1766078232400.png";

const CA = "6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump";
const PAIR_ADDRESS = "6wujh2ufvlypvmmm4wfcderqfve3xgzmjr1kbxun1z3c";

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard.",
      className: "bg-[#009688] text-white border-none font-mono",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#E0E0E0] text-[#1A1A1A] font-mono selection:bg-[#009688] selection:text-white flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          width: 14px;
        }
        ::-webkit-scrollbar-track {
          background: #C0C0C0;
          border-left: 1px solid #FFFFFF;
        }
        ::-webkit-scrollbar-thumb {
          background: #009688;
          border: 2px solid #C0C0C0;
          box-shadow: inset 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 0 rgba(0,0,0,0.5);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00796B;
        }
        .retro-shadow {
          box-shadow: 4px 4px 0px 0px #000000;
        }
        .inset-shadow {
          box-shadow: inset 2px 2px 0px 0px #808080, inset -2px -2px 0px 0px #FFFFFF;
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="border-b-2 border-black bg-[#C0C0C0] sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter uppercase">
            <div className="w-8 h-8 bg-[#009688] flex items-center justify-center text-white border-2 border-black retro-shadow">
              M
            </div>
            <span>$MOZILLA</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#1A1A1A]">
            <a href="#history" className="hover:text-[#009688] hover:underline decoration-2 underline-offset-4">History</a>
            <a href="#lore" className="hover:text-[#009688] hover:underline decoration-2 underline-offset-4">Lore</a>
            <a href="#chart" className="hover:text-[#009688] hover:underline decoration-2 underline-offset-4">Chart</a>
          </div>
          <Button 
            className="bg-[#009688] hover:bg-[#00796B] text-white font-bold border-2 border-black retro-shadow rounded-none active:translate-y-1 active:shadow-none transition-all"
            onClick={() => window.open("https://pump.fun/coin/6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump", "_blank")}
          >
            BUY TOKEN
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-black text-[#009688] text-sm font-bold uppercase tracking-widest border-2 border-[#009688]">
                <Monitor size={16} />
                <span>Est. 1994</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9]">
                The Internet's <br/>
                <span className="text-[#009688] text-stroke">First Mascot</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#4A4A4A] font-bold max-w-2xl mx-auto leading-relaxed">
                Before Chrome. Before Social Media.<br/>
                There was <span className="text-[#009688] bg-black px-1">MOZILLA</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-4xl mx-auto"
            >
              <div className="bg-black p-2 border-4 border-black retro-shadow">
                <img 
                  src={mozillaBanner} 
                  alt="Mozilla History Collage" 
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
              
              {/* Retro UI Bar */}
              <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
                 <Button 
                  className="bg-[#009688] text-white font-bold h-12 px-8 border-2 border-black retro-shadow rounded-none hover:bg-[#00796B] text-lg w-full md:w-auto"
                  onClick={() => window.open("https://pump.fun/coin/6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump", "_blank")}
                >
                  <Terminal className="mr-2 h-5 w-5" />
                  INITIATE_BUY_SEQUENCE
                </Button>
                <Button 
                  className="bg-white text-black font-bold h-12 px-8 border-2 border-black retro-shadow rounded-none hover:bg-gray-100 text-lg w-full md:w-auto"
                  onClick={() => window.open("https://dexscreener.com/solana/6wujh2ufvlypvmmm4wfcderqfve3xgzmjr1kbxun1z3c", "_blank")}
                >
                  VIEW_CHART.EXE
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LORE SECTION */}
        <section id="history" className="py-16 bg-[#C0C0C0] border-y-2 border-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#E0E0E0] p-6 md:p-10 border-2 border-white inset-shadow space-y-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase border-b-4 border-[#009688] inline-block pb-2 mb-4">
                System History
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  Before Google. Before Chrome. Before social media. 
                  There was <span className="font-bold bg-black text-white px-1">Netscape</span> — the company that introduced the internet to everyday people in the 1990s.
                </p>
                <p>
                  For a moment, Netscape was the internet. Inside Netscape, the browser had a codename: <span className="text-[#009688] font-black">Mozilla</span>.
                </p>
                <p>
                  Mozilla wasn't just a name — it had a mascot. A lizard / dragon / Godzilla-like creature that appeared across internal art, developer docs, stickers, and office murals.
                </p>
                
                <div className="bg-[#009688]/10 p-6 border-l-4 border-[#009688]">
                  <p className="italic text-base md:text-lg">
                    "Mozilla symbolised the open web, hacker culture, and rebellion against monopolies. In a PvP, extractive era, Mozilla represents reformation — back to holding, building, and belief. What the internet, and crypto, were meant to be."
                  </p>
                </div>

                <p>
                  What people forget is that there are countless Mozilla memes scattered across the internet. Old forums, hacker jokes, early blogs, Reddit threads, GitHub humour, stickers, parody art — even Godzilla-style edits.
                </p>
                
                <p className="font-bold text-[#009688]">
                  Mozilla was meme culture before memes were mainstream.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* READ MORE LINKS */}
        <section id="lore" className="py-16 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-black uppercase text-center mb-12 text-[#009688]">
              Archive Access
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* MOZILLA LORE */}
              <div className="bg-[#2A2A2A] border-2 border-[#009688] p-6 retro-shadow shadow-[#009688]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen size={24} className="text-[#009688]" />
                  MOZILLA LORE
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://home.snafu.de/tilman/mozilla/index.html" target="_blank" className="flex items-center gap-2 hover:text-[#009688] transition-colors">
                      <ExternalLink size={16} /> The Book of Mozilla
                    </a>
                  </li>
                  <li>
                    <a href="https://reddit.com/r/netscape/s/tOTuiRDTsE" target="_blank" className="flex items-center gap-2 hover:text-[#009688] transition-colors">
                      <ExternalLink size={16} /> Reddit Archives
                    </a>
                  </li>
                  <li>
                    <a href="https://dotcomboom.neocities.org/moz/" target="_blank" className="flex items-center gap-2 hover:text-[#009688] transition-colors">
                      <ExternalLink size={16} /> The Museum of Mozilla
                    </a>
                  </li>
                </ul>
              </div>

              {/* NETSCAPE LORE */}
              <div className="bg-[#2A2A2A] border-2 border-white p-6 retro-shadow shadow-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Globe size={24} />
                  NETSCAPE LORE
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://en.wikipedia.org/wiki/Netscape" target="_blank" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                      <ExternalLink size={16} /> Netscape History (Wikipedia)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-[#E0E0E0] border-y-2 border-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-[#C0C0C0] p-2 border-4 border-black retro-shadow h-[600px] relative">
              <div className="absolute top-0 left-0 bg-[#009688] text-white text-xs px-2 py-1 font-bold border-r-2 border-b-2 border-black z-10">
                TRADING_TERMINAL_V1.0
              </div>
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
                className="w-full h-full border-2 border-[#808080] bg-black"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="py-20 bg-[#009688] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase text-stroke shadow-black drop-shadow-lg">
                Reboot The Web
              </h2>
              <p className="text-xl font-bold max-w-2xl mx-auto">
                Join the rebellion. Return to the source.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                className="bg-black hover:bg-gray-900 text-white font-bold h-16 px-8 text-xl border-4 border-white retro-shadow rounded-none"
                onClick={() => window.open("https://x.com/i/communities/2001701203416154463", "_blank")}
              >
                JOIN COMMUNITY
              </Button>
              <Button 
                className="bg-white hover:bg-gray-100 text-black font-bold h-16 px-8 text-xl border-4 border-black retro-shadow rounded-none"
                onClick={() => window.open("https://pump.fun/coin/6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump", "_blank")}
              >
                BUY $MOZILLA
              </Button>
            </div>

            <div className="max-w-2xl mx-auto bg-black/20 p-6 border-2 border-black/50 backdrop-blur-sm">
              <p className="text-sm font-bold mb-2 uppercase tracking-widest text-black/60">Contract Address</p>
              <div 
                className="flex items-center justify-center gap-3 bg-black text-[#009688] p-4 border-2 border-white/50 cursor-pointer hover:bg-black/90 transition-colors font-mono text-sm md:text-lg break-all shadow-inner"
                onClick={copyToClipboard}
              >
                {CA}
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#1A1A1A] text-gray-500 py-8 border-t-4 border-[#009688]">
          <div className="container mx-auto px-4 text-center text-sm font-mono">
            <p>
              $MOZILLA is a tribute to the open web. Not affiliated with Mozilla Foundation or Netscape.
            </p>
            <p className="mt-2 opacity-50">
              EST. 2025 // REBOOTING...
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
