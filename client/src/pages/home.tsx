import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import video1 from "@assets/1_1765584647864.mp4";
import video2 from "@assets/2_1765584647864.mp4";
import mainImage from "@assets/img_1765584647863.jpg";
import landwolfBg from "@assets/background_1765584647863.png";
import dexscreenerLogo from "@assets/image_1765380251339.png";

const CA = "6C7PvptCzRMhcd7PdYX49cHsZfYTA5Ubo7wfMvcupump";

const Marquee = ({ text, direction = 1, speed = 20 }: { text: string; direction?: number; speed?: number }) => {
  return (
    <div className="flex overflow-hidden bg-meme-yellow py-2 border-y-4 border-black cursor-pointer">
      <motion.div
        className="flex whitespace-nowrap text-3xl md:text-5xl font-display text-black font-bold uppercase cursor-pointer"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        whileHover={{ scale: 1.02 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 cursor-pointer">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "COPIED!",
      description: "CA copied to clipboard.",
      className: "bg-white text-black border-2 border-black font-display text-xl",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pb-0 flex flex-col cursor-pointer">
      
      {/* BACKGROUND IMAGE - Fixed */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landwolfBg})` }}
      />

      {/* MARQUEE TOP */}
      <div className="relative z-10 cursor-pointer">
        <Marquee text="$Landwolf • THE BOYS CLUB • LEGENDARY • " speed={30} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-10 flex flex-col items-center gap-10 flex-grow cursor-pointer">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-4 cursor-pointer">
          <motion.h1 
            className="text-7xl md:text-9xl font-display text-meme-pink text-stroke cursor-pointer"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1, rotate: 5, color: "#FFFF00" }}
          >
            $Landwolf
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-4xl text-meme-green font-bold text-stroke-sm -rotate-2 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: -5, color: "#FF00FF" }}
          >
            "THE LEGENDARY WOLF OF THE BOYS CLUB"
          </motion.p>
        </div>

        {/* MAIN IMAGE - REPLACES VIDEO */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 cursor-pointer">
          
          {/* Main Image without borders and natural size */}
          <motion.div 
            className="w-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img 
              src={mainImage}
              alt="Landwolf Main"
              className="w-auto h-auto max-h-[70vh] max-w-full object-contain cursor-pointer drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* CA SECTION */}
          <motion.div 
            className="w-full max-w-lg bg-white text-black p-3 rounded-xl border-4 border-black shadow-[6px_6px_0_0_#9E5828] transform transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: -1, y: -5 }}
          >
            <div className="flex items-center justify-between gap-2 cursor-pointer">
              <span className="font-display text-lg text-gray-500 whitespace-nowrap cursor-pointer">CA:</span>
              <code className="font-mono font-bold text-xs md:text-sm truncate bg-gray-100 p-1.5 rounded flex-1 text-center cursor-pointer">
                {CA}
              </code>
              <Button 
                onClick={copyToClipboard}
                size="sm"
                className="bg-black hover:bg-gray-800 text-white font-display px-4 h-8 border-2 border-transparent hover:border-meme-pink transition-all shrink-0 cursor-pointer"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </motion.div>

        </div>

        {/* LINKS SECTION */}
        <div className="flex flex-wrap justify-center gap-4 w-full mt-8 cursor-pointer">
          <motion.a 
            href="https://pump.fun/coin/6C7PvptCzRMhcd7PdYX49cHsZfYTA5Ubo7wfMvcupump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2 bg-[#87E4A6] hover:bg-[#6edc93] text-black border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <span className="text-xl">💊</span>
              Buy on Pump.fun
            </div>
          </motion.a>

          <motion.a 
            href="https://dexscreener.com/solana/ehkjnibmbtnappuwx4ksjhydqy6zc5byjealnpenpssy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <img src={dexscreenerLogo} alt="DexScreener" className="w-6 h-6 object-contain cursor-pointer" />
              DexScreener
            </div>
          </motion.a>

          <motion.a 
            href="https://x.com/i/communities/1999617510073860580" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Community X
            </div>
          </motion.a>
        </div>

        {/* SIDE VIDEOS - MOVED BELOW - REDUCED SIZE */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 mb-12 cursor-pointer">
          
          {/* LEFT VIDEO */}
          <motion.div 
            className="md:block cursor-pointer"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <div className="border-4 border-white bg-black p-2 rotate-[-3deg] shadow-[8px_8px_0_0_rgba(255,0,255,1)] cursor-pointer">
              <video 
                src={video1} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-contain cursor-pointer"
              />
            </div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div 
            className="md:block cursor-pointer"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -2, 2, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="border-4 border-white bg-black p-2 rotate-[3deg] shadow-[-8px_8px_0_0_rgba(0,255,255,1)] cursor-pointer">
              <video 
                src={video2} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-contain cursor-pointer"
              />
            </div>
          </motion.div>

        </div>

      </main>

      {/* FOOTER MARQUEE - EXACT SAME AS HEADER */}
      <div className="mt-auto relative z-10 bg-meme-yellow cursor-pointer">
        <Marquee text="$Landwolf • THE BOYS CLUB • LEGENDARY • " speed={30} />
      </div>

    </div>
  );
}