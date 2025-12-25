import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Cat, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import logoZazu from "@/assets/zazu_logo.jpg";
import heroZazu from "@/assets/hero_zazu.jpg";
import section2Zazu from "@/assets/section_2_zazu.jpg";

// Gallery
import gallery1 from "@/assets/gallery/zazu_1.jpg";
import gallery2 from "@/assets/gallery/zazu_2.jpg";
import gallery3 from "@/assets/gallery/zazu_3.jpg";
import gallery4 from "@/assets/gallery/zazu_4.jpg";
import gallery5 from "@/assets/gallery/zazu_5.jpg";

const CA = "F6DPfEyBseHCag8kpbhz71wYaGUBH2763zjL7j6Spump";
const PAIR_ADDRESS = "afw8cl7c5sdfbc1acwl4yztmmevdjrsjwzc1mjxxduvp";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard.",
      className: "bg-black text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      
      {/* NAVBAR */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img src={logoZazu} alt="Zazu Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-black font-black tracking-tighter text-2xl">$ZAZU</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-black transition-colors">Story</a>
            <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-black transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-black hover:bg-gray-800 text-white font-bold rounded-full px-6 h-10 transition-all"
            onClick={() => window.open("https://pump.fun/coin/F6DPfEyBseHCag8kpbhz71wYaGUBH2763zjL7j6Spump", "_blank")}
          >
            Buy $ZAZU
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 text-sm font-semibold border border-gray-100">
                <Cat size={16} />
                <span>The Cat of the Internet</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.9]">
                ZAZU.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-lg">
                The memecoin space needs a reset. One meme to flip the sentiment. <br/>
                <strong className="text-black font-semibold">ZAZU is the DOGE of cat memes.</strong>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-black hover:bg-gray-800 text-white h-14 px-8 rounded-full text-lg font-bold transition-all"
                  onClick={() => window.open("https://pump.fun/coin/F6DPfEyBseHCag8kpbhz71wYaGUBH2763zjL7j6Spump", "_blank")}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-black border-2 border-gray-200 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open("https://dexscreener.com/solana/afw8cl7c5sdfbc1acwl4yztmmevdjrsjwzc1mjxxduvp", "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
               <img 
                  src={heroZazu} 
                  alt="Zazu Hero"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">Attention Deserves Value.</h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Deep down, we all know the truth: the only memes that truly matter are the ones that deserve billions. 
                      Random trends fade, but icons carved into culture last forever.
                    </p>
                    <p>
                      Tokenized memes like <span className="text-black font-bold">DOGE</span> and <span className="text-black font-bold">PEPE</span> sit at multi-billion dollar market caps because people believe in them.
                    </p>
                    <p className="font-medium text-black text-xl">
                      ZAZU is here to join them.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="bg-black hover:bg-gray-800 text-white rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open("https://x.com/i/communities/2004279748764090529", "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white">
                    <img 
                      src={section2Zazu} 
                      alt="Zazu Fishing"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Iconic Moments</h2>
              <p className="text-gray-500 text-lg">A collection of Zazu through the ages.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-sm hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img 
                    src={img} 
                    alt={`Zazu Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section id="chart" className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-white rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Live</span>
              </div>
            </div>
            
            <div className="bg-white p-1 rounded-3xl shadow-lg border border-gray-200 h-[600px] overflow-hidden relative">
              <iframe 
                src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=light&trades=0&info=0`}
                className="w-full h-full border-0 rounded-2xl"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FOOTER & CA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
            
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">$ZAZU</h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-black hover:bg-gray-800 text-white h-12 px-8 rounded-full text-lg font-bold gap-2"
                  onClick={() => window.open("https://pump.fun/coin/F6DPfEyBseHCag8kpbhz71wYaGUBH2763zjL7j6Spump", "_blank")}
                >
                  Pump.fun
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-black border-2 border-gray-200 hover:bg-gray-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://dexscreener.com/solana/afw8cl7c5sdfbc1acwl4yztmmevdjrsjwzc1mjxxduvp", "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-black border-2 border-gray-200 hover:bg-gray-50 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open("https://x.com/i/communities/2004279748764090529", "_blank")}
                >
                  <Twitter className="w-5 h-5" />
                  Community
                </Button>
              </div>

              <div className="pt-12">
                <p className="text-xs text-gray-400 mb-4 font-mono uppercase tracking-widest">Contract Address</p>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base text-gray-600 break-all">
                    {CA}
                  </code>
                  <div className="text-gray-400 group-hover:text-black transition-colors">
                    {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-20 text-xs text-gray-400">
              <p>© 2025 ZAZU. All rights reserved.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
