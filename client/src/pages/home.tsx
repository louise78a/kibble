import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ExternalLink, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
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
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "COPIED!",
      className: "bg-[#0000EB] text-white border-2 border-black font-display tracking-widest",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-8 border-[#0000EB] border-t-white rounded-full mb-8"
        />
        <h1 className="text-white font-display text-4xl tracking-widest animate-pulse">LOADING...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-[#0000EB] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl tracking-wider text-[#0000EB] drop-shadow-[2px_2px_0px_#fff]">$SONIC</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-display text-xl tracking-wider">
            <a href="#about" className="hover:text-[#0000EB] transition-colors">THE LEGEND</a>
            <a href="#chart" className="hover:text-[#0000EB] transition-colors">CHART</a>
            <Button 
              className="bg-[#0000EB] hover:bg-[#0000EB]/80 text-white font-display text-xl tracking-widest px-8 h-12 rounded-none border-2 border-transparent hover:border-white transition-all transform hover:-translate-y-1"
              onClick={() => window.open("https://pump.fun/coin/DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump", "_blank")}
            >
              BUY TOKEN
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#1a1a1a] border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4 font-display text-xl tracking-wider text-center">
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>THE LEGEND</a>
                <a href="#chart" onClick={() => setMobileMenuOpen(false)}>CHART</a>
                <Button 
                  className="bg-[#0000EB] text-white font-display text-xl w-full"
                  onClick={() => window.open("https://pump.fun/coin/DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump", "_blank")}
                >
                  BUY TOKEN
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12 relative inline-block"
            >
              <img 
                src={heroSonic} 
                alt="Sonic" 
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-[6px] border-[#0000EB] shadow-[0_0_40px_rgba(0,0,235,0.6)] mx-auto"
              />
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-yellow-400 text-black font-display text-xl px-4 py-2 rotate-12 border-4 border-black"
              >
                SPEED!
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-8xl md:text-[10rem] leading-none font-display text-transparent bg-clip-text bg-gradient-to-b from-[#0000EB] to-[#60A5FA] drop-shadow-[4px_4px_0px_#fff]">
                $SONIC
              </h1>
              <p className="text-3xl md:text-5xl font-display text-white tracking-widest uppercase">
                The Hedgehog
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <Button 
                  className="bg-[#0000EB] hover:bg-white hover:text-[#0000EB] text-white h-16 px-12 text-3xl font-display tracking-widest border-4 border-[#0000EB] transition-all transform hover:scale-105"
                  onClick={() => window.open("https://pump.fun/coin/DGXRNpwYvwdEPoH1utpwuTc6hKhAPPXH1HmjzUk5pump", "_blank")}
                >
                  BUY $SONIC
                </Button>
                <Button 
                  className="bg-black hover:bg-white hover:text-black text-white h-16 px-12 text-3xl font-display tracking-widest border-4 border-white transition-all transform hover:scale-105"
                  onClick={() => window.open("https://x.com/i/communities/2008178680262983880", "_blank")}
                >
                  JOIN
                </Button>
              </div>

              <div className="mt-12 max-w-2xl mx-auto">
                <p className="font-display text-xl mb-4 text-gray-400">CONTRACT ADDRESS</p>
                <div 
                  onClick={copyToClipboard}
                  className="bg-black/50 border-2 border-[#0000EB]/50 hover:border-[#0000EB] p-6 rounded-xl cursor-pointer transition-all group flex items-center justify-center gap-4 break-all"
                >
                  <span className="font-mono text-sm md:text-xl text-blue-300">{CA}</span>
                  <Copy className="text-[#0000EB] group-hover:text-white transition-colors shrink-0" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0000EB] rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
          </div>
        </section>

        {/* THE LEGEND / ABOUT */}
        <section id="about" className="py-24 bg-[#0000EB] relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-display text-white drop-shadow-[4px_4px_0px_#000]">
                THE LEGEND
              </h2>
              <div className="text-4xl mt-4">♥</div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* In Memory */}
              <div className="bg-black border-4 border-white p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                <h3 className="text-4xl font-display text-[#0000EB] mb-6">IN MEMORY</h3>
                <p className="font-sans text-xl leading-relaxed text-gray-300">
                  The owner of SEGA was just confirmed dead and David has brought us thousands of memes. For a remembrance of David, why not tokenize his most popular character?
                </p>
                <img 
                  src={davidRosen} 
                  alt="David Rosen" 
                  className="w-full mt-6 border-2 border-[#0000EB]"
                />
              </div>

              {/* The Mission */}
              <div className="bg-black border-4 border-white p-8 md:p-12 transform -rotate-1 hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                <h3 className="text-4xl font-display text-[#0000EB] mb-6">THE MISSION</h3>
                <p className="font-sans text-xl leading-relaxed text-gray-300 mb-8">
                  Sonic the Hedgehog is the most popular SEGA character by far and we have never even bonded him once.
                </p>
                <div className="text-center py-8 border-t-2 border-dashed border-gray-700">
                  <span className="text-3xl font-display text-yellow-400 animate-pulse">★ JUST VIBES ★</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY - IMPLIED */}
        <section className="py-24 bg-black overflow-hidden">
           <div className="container mx-auto px-4">
              <h2 className="text-center text-5xl md:text-7xl font-display text-white mb-16 drop-shadow-[0_0_10px_#0000EB]">
                SPEED RUN
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-8 snap-x">
                {galleryVideos.map((vid, i) => (
                  <div key={i} className="flex-shrink-0 w-80 md:w-96 snap-center">
                    <div className="border-4 border-[#0000EB] bg-[#1a1a1a]">
                      <video src={vid} autoPlay loop muted playsInline className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-24 bg-[#1a1a1a] border-t-4 border-[#0000EB]">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-5xl md:text-7xl font-display text-white mb-4">
              ▲ LIVE CHART ▲
            </h2>
            <p className="text-xl text-blue-300 mb-12 font-display tracking-widest">
              Track $SONIC in real-time
            </p>
            
            <div className="bg-black p-2 border-4 border-white shadow-[0_0_20px_rgba(0,0,235,0.3)] h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
                className="w-full h-full border-0"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-8xl md:text-[12rem] leading-none font-display text-[#0000EB] opacity-50 select-none">
                $SONIC
             </h2>
             <div className="flex justify-center gap-8 mt-12">
                <a href="#" className="text-white hover:text-[#0000EB] font-display text-2xl">TWITTER</a>
                <a href="#" className="text-white hover:text-[#0000EB] font-display text-2xl">TELEGRAM</a>
                <a href="#" className="text-white hover:text-[#0000EB] font-display text-2xl">DEXSCREENER</a>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}
