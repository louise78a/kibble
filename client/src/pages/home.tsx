import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, ArrowRight, Info, AlertCircle, BookOpen, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Assets
import mozillaLogo from "@assets/img_1766078604952.png";

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
      className: "bg-[#0052FF] text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-[#050B20] font-sans selection:bg-[#0052FF] selection:text-white flex flex-col">
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #0052FF;
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #0040CC;
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-full bg-[#0052FF] flex items-center justify-center text-white overflow-hidden">
              <img src={mozillaLogo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span>$MOZILLA</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-[#0052FF] transition-colors">History</a>
            <a href="#chart" className="hover:text-[#0052FF] transition-colors">Chart</a>
            <a href="#lore" className="hover:text-[#0052FF] transition-colors">Lore</a>
          </div>
          <Button 
            className="bg-[#0052FF] hover:bg-[#0040CC] text-white font-medium rounded-full px-6"
            onClick={() => window.open("https://pump.fun/coin/6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump", "_blank")}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#0052FF] text-sm font-medium">
                <Globe size={16} />
                <span>The Internet's First Mascot</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#050B20] leading-[1.1]">
                Before Chrome. <br/>
                <span className="text-[#0052FF]">There was Mozilla.</span>
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                Before social media. Before Google. There was Netscape. 
                And inside Netscape lived a dragon named Mozilla.
                The symbol of the open web, now reborn on Solana.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-[#0052FF] hover:bg-[#0040CC] text-white h-12 px-8 rounded-full text-lg font-medium shadow-lg shadow-blue-500/20"
                  onClick={() => window.open("https://pump.fun/coin/6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump", "_blank")}
                >
                  Buy on Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-200 hover:bg-gray-50 h-12 px-8 rounded-full text-lg font-medium text-gray-700"
                  onClick={() => window.open("https://dexscreener.com/solana/6wujh2ufvlypvmmm4wfcderqfve3xgzmjr1kbxun1z3c", "_blank")}
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
              <div className="rounded-[2rem] overflow-hidden bg-[#F5F8FF] border border-[#EEF4FF] shadow-2xl shadow-blue-900/5 relative z-10">
                <img 
                  src={mozillaLogo} 
                  alt="Mozilla Logo" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0052FF] flex items-center justify-center text-white font-bold">
                      N
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase">Origin Story</p>
                      <p className="text-sm font-bold text-[#050B20]">Est. 1994 - Netscape</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* STATS / HISTORY */}
        <section className="bg-[#F5F8FF] py-16 border-y border-[#EEF4FF]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "The First Meme", 
                  desc: "Before Doge, before Pepe. Mozilla was the original internet character.",
                  icon: <Info className="text-[#0052FF]" />
                },
                { 
                  title: "Open Web", 
                  desc: "Rebellion against monopolies. Back to building and belief.",
                  icon: <Globe className="text-[#0052FF]" />
                },
                { 
                  title: "Meme Culture", 
                  desc: "Stickers, office murals, hacker jokes. Mozilla started it all.",
                  icon: <TrendingUp className="text-[#0052FF]" />
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEXT SECTION */}
        <section id="about" className="py-20 container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-[#050B20]">Mozilla was meme culture before memes were mainstream.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              For a moment, Netscape <strong>was</strong> the internet. And Mozilla was its soul. 
              A lizard-dragon creature that appeared across internal art, stickers, and developer docs.
            </p>
            <div className="p-6 bg-[#EEF4FF] rounded-2xl border border-[#D0E0FF] inline-block text-left w-full max-w-2xl">
              <p className="text-[#0052FF] font-medium mb-4 text-center uppercase tracking-wide">The Legacy</p>
              <ul className="space-y-4 text-[#050B20]">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#0052FF] mt-1 shrink-0" /> 
                  <span><strong>The Beginning:</strong> Historically one of the earliest recurring characters representing the web itself.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#0052FF] mt-1 shrink-0" /> 
                  <span><strong>The Symbol:</strong> Represents reformation, hacker culture, and rebellion against extractive eras.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#0052FF] mt-1 shrink-0" /> 
                  <span><strong>The Culture:</strong> Old forums, hacker jokes, Reddit threads. Mozilla is scattered everywhere.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* LORE SECTION */}
        <section id="lore" className="py-12 bg-white container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#050B20] mb-4">Deep Dive into the Lore</h2>
            <p className="text-gray-500">Educate yourself on the history of the open web.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-4">
               <h3 className="font-bold text-lg text-[#0052FF] border-b border-gray-100 pb-2">Mozilla Lore</h3>
               <div className="flex flex-col gap-3">
                 <Button variant="outline" className="justify-start h-auto py-3 text-left" onClick={() => window.open("https://home.snafu.de/tilman/mozilla/index.html", "_blank")}>
                   <BookOpen className="mr-2 h-4 w-4 text-[#0052FF]" />
                   <div className="flex flex-col">
                     <span className="font-semibold">The Book of Mozilla</span>
                     <span className="text-xs text-gray-500">Original archives</span>
                   </div>
                 </Button>
                 <Button variant="outline" className="justify-start h-auto py-3 text-left" onClick={() => window.open("https://reddit.com/r/netscape/s/tOTuiRDTsE", "_blank")}>
                   <BookOpen className="mr-2 h-4 w-4 text-[#0052FF]" />
                   <div className="flex flex-col">
                     <span className="font-semibold">Reddit Archives</span>
                     <span className="text-xs text-gray-500">r/netscape discussions</span>
                   </div>
                 </Button>
                 <Button variant="outline" className="justify-start h-auto py-3 text-left" onClick={() => window.open("https://dotcomboom.neocities.org/moz/", "_blank")}>
                   <BookOpen className="mr-2 h-4 w-4 text-[#0052FF]" />
                   <div className="flex flex-col">
                     <span className="font-semibold">DotComBoom</span>
                     <span className="text-xs text-gray-500">The Museum of Mozilla</span>
                   </div>
                 </Button>
               </div>
             </div>

             <div className="space-y-4">
               <h3 className="font-bold text-lg text-[#0052FF] border-b border-gray-100 pb-2">Netscape Lore</h3>
               <div className="flex flex-col gap-3">
                 <Button variant="outline" className="justify-start h-auto py-3 text-left" onClick={() => window.open("https://en.wikipedia.org/wiki/Netscape", "_blank")}>
                   <Globe className="mr-2 h-4 w-4 text-[#0052FF]" />
                   <div className="flex flex-col">
                     <span className="font-semibold">Wikipedia: Netscape</span>
                     <span className="text-xs text-gray-500">The browser that started it all</span>
                   </div>
                 </Button>
               </div>
             </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Live Chart</h2>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-500">Live Trading</span>
              </div>
            </div>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 h-[600px] overflow-hidden relative">
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
          
          <div className="bg-[#050B20] text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Reclaim the Web</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Join the movement. Back to building. Back to belief.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-[#00D26A] hover:bg-[#00b359] text-black font-bold text-lg px-8 py-6 rounded-xl gap-2"
                  onClick={() => window.open("https://pump.fun/coin/6CRzBXzL5xKf5t8wTEVK4qMiEShtgH3WvbDxv1Nopump", "_blank")}
                >
                  <span className="text-xl">💊</span>
                  Buy on Pump.fun
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-[#1C1D22] border-[#353945] text-white hover:bg-[#2C2D35] font-bold text-lg px-8 py-6 rounded-xl gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/6wujh2ufvlypvmmm4wfcderqfve3xgzmjr1kbxun1z3c", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6 rounded-xl border border-[#353945] gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2001701203416154463", "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  Community X
                </Button>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4 font-mono">CONTRACT ADDRESS</p>
                <div 
                  className="flex items-center justify-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-[#00D26A] break-all">
                    {CA}
                  </code>
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052FF] blur-[100px] opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D26A] blur-[100px] opacity-10 rounded-full"></div>
          </div>

        </section>

      </main>
    </div>
  );
}
