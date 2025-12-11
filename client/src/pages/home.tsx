import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import img1 from "@assets/1_1765459977197.jpg";
import img2 from "@assets/2_1765459977197.jpg";
import bgImage from "@assets/background_1765459977195.png";
import dexscreenerLogo from "@assets/image_1765380251339.png";

const CA = "gAGQTXhFSydHCkYb1ipoybQykPitbGrHkx2jeXrpump";

const Marquee = ({ text, direction = 1, speed = 20 }: { text: string; direction?: number; speed?: number }) => {
  return (
    <div className="flex overflow-hidden bg-masked-primary py-2 border-y-4 border-black cursor-pointer">
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
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "COPIED!",
      description: "CA copied to clipboard.",
      className: "bg-black text-white border-2 border-masked-primary font-display text-xl",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pb-0 flex flex-col cursor-pointer">
      
      {/* BACKGROUND IMAGE - Fixed */}
      <div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* MARQUEE TOP */}
      <div className="relative z-10">
        <Marquee text="$Masked • BROKEN FACADE • TRUTH REVEALED • HIDDEN IN PLAIN SIGHT • " speed={30} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-10 flex flex-col items-center gap-10 flex-grow cursor-pointer">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-4 cursor-pointer">
          <motion.h1 
            className="text-7xl md:text-9xl font-display text-masked-primary text-stroke-cyan cursor-pointer drop-shadow-[0_0_15px_rgba(255,0,85,0.8)]"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
          >
            $Masked
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-4xl text-masked-secondary font-bold text-stroke-sm cursor-pointer max-w-2xl mx-auto leading-tight tracking-widest"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            "WE ALL WEAR MASKS. WHICH ONE IS YOURS?"
          </motion.p>
        </div>

        {/* MAIN IMAGE - BIGGER */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 cursor-pointer">
          
          <motion.div 
            className="relative group cursor-pointer inline-block"
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0], transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" } }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={img2}
              alt="Masked Figure"
              className="h-auto max-h-[70vh] object-contain cursor-pointer block border-4 border-masked-primary shadow-[0_0_20px_rgba(255,0,85,0.5)] rounded-lg"
            />
          </motion.div>

          {/* CA SECTION */}
          <motion.div 
            className="w-full max-w-lg bg-black text-white p-3 rounded-xl border-4 border-masked-secondary shadow-[6px_6px_0_0_#FF0055] cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-between gap-2 cursor-pointer">
              <span className="font-display text-lg text-gray-400 whitespace-nowrap cursor-pointer">CA:</span>
              <code className="font-mono font-bold text-xs md:text-sm truncate bg-gray-900 p-1.5 rounded flex-1 text-center cursor-pointer text-masked-secondary">
                {CA}
              </code>
              <Button 
                onClick={copyToClipboard}
                size="sm"
                className="bg-masked-primary hover:bg-red-600 text-white font-display px-4 h-8 border-2 border-transparent hover:border-white transition-all shrink-0 cursor-pointer"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </motion.div>

        </div>

        {/* LINKS SECTION - BELOW IMAGE */}
        <div className="flex flex-wrap justify-center gap-4 w-full mt-8 cursor-pointer">
          <motion.a 
            href="https://pump.fun/coin/gAGQTXhFSydHCkYb1ipoybQykPitbGrHkx2jeXrpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-masked-primary hover:bg-red-600 text-white border-2 border-white px-4 py-2 rounded-lg shadow-[4px_4px_0_0_#00FFFF] font-display text-lg cursor-pointer">
              <span className="text-xl">💊</span>
              Buy on Pump.fun
            </div>
          </motion.a>

          <motion.a 
            href="https://dexscreener.com/solana/4btqjja3lnpza6vjta9jzvdobe8ds4xhsu8wmmasesui" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white border-2 border-masked-secondary px-4 py-2 rounded-lg shadow-[4px_4px_0_0_#FF0055] font-display text-lg cursor-pointer">
              <img src={dexscreenerLogo} alt="DexScreener" className="w-6 h-6 object-contain cursor-pointer" />
              DexScreener
            </div>
          </motion.a>

          <motion.a 
            href="https://x.com/i/communities/1999080706639598031" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white border-2 border-white px-4 py-2 rounded-lg shadow-[4px_4px_0_0_#9D00FF] font-display text-lg cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Community X
            </div>
          </motion.a>
        </div>

        {/* SIDE IMAGES - MOVED BELOW */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-24 mt-8 mb-12 cursor-pointer mx-auto">
          
          {/* LEFT IMAGE */}
          <motion.div 
            className="flex justify-center cursor-pointer"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <div className="border-4 border-masked-primary bg-black p-2 rotate-[-3deg] shadow-[8px_8px_0_0_#00FFFF] cursor-pointer w-full max-w-sm">
              <img 
                src={img1} 
                alt="Mask 1"
                className="w-full h-auto object-contain cursor-pointer"
              />
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            className="flex justify-center cursor-pointer"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -2, 2, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="border-4 border-masked-secondary bg-black p-2 rotate-[3deg] shadow-[-8px_8px_0_0_#FF0055] cursor-pointer w-full max-w-sm">
              <img 
                src={img2} 
                alt="Mask 2"
                className="w-full h-auto object-contain cursor-pointer"
              />
            </div>
          </motion.div>

        </div>

      </main>

      {/* FOOTER MARQUEE - EXACT SAME AS HEADER */}
      <div className="mt-auto relative z-10 bg-masked-primary cursor-pointer">
        <Marquee text="$Masked • BROKEN FACADE • TRUTH REVEALED • HIDDEN IN PLAIN SIGHT • " speed={30} />
      </div>

    </div>
  );
}