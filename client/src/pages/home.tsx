import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import meowlImgMain from "@assets/img_1765749808052.jpg";
import meowlVid1 from "@assets/1_1765749808051.mp4";
import meowlVid2 from "@assets/2_1765749808051.mp4";
import bgImage from "@assets/img_1765749808052.jpg"; // Using main image as BG too, blurred
import dexscreenerLogo from "@assets/image_1765380251339.png";

const CA = "BB7sdWwmEfXuFviMKKnCzeFDyEVvX6R55uzpxovfpump";

const Marquee = ({ text, direction = 1, speed = 20 }: { text: string; direction?: number; speed?: number }) => {
  return (
    <div className="flex overflow-hidden bg-meowl-orange py-2 border-y-4 border-black cursor-pointer">
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
      className: "bg-white text-black border-2 border-black font-display text-xl",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-meowl-brown/20 text-white overflow-hidden pb-0 flex flex-col cursor-pointer font-comic">
      
      {/* BACKGROUND IMAGE - Fixed */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* MARQUEE TOP */}
      <div className="relative z-10">
        <Marquee text="$MEOWL • CAT + OWL • BRAINROT • RAREST FIND • " speed={30} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-10 flex flex-col items-center gap-10 flex-grow cursor-pointer">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-4 cursor-pointer">
          <motion.h1 
            className="text-7xl md:text-9xl font-display text-meowl-orange text-stroke cursor-pointer drop-shadow-[4px_4px_0_rgba(0,255,255,0.5)]"
            animate={{ 
              scale: [1, 1.05, 1], 
              rotate: [0, 2, -2, 0],
              filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
          >
            $Meowl
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-4xl text-meowl-cyan font-bold text-stroke-sm -rotate-2 cursor-pointer max-w-2xl mx-auto leading-tight"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            "THE RAREST BRAINROT IN STEAL A BRAINROT"
          </motion.p>
        </div>

        {/* MAIN VISUAL - IMAGE REPLACING VIDEO */}
        <div className="w-full flex flex-col items-center gap-6 cursor-pointer">
          
          <div className="relative group border-4 border-meowl-orange bg-black shadow-[0_0_30px_rgba(255,153,0,0.5)] cursor-pointer inline-block overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-300">
            <img 
              src={meowlImgMain}
              alt="Meowl Main"
              className="h-auto max-h-[60vh] w-auto max-w-full block cursor-pointer scale-[1.02]"
            />
            
            {/* Glitch Overlay Effect on Hover */}
            <div className="absolute inset-0 bg-meowl-cyan/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-100 pointer-events-none" />
          </div>

          {/* CA SECTION */}
          <motion.div 
            className="w-full max-w-lg bg-white text-black p-3 rounded-xl border-4 border-black shadow-[6px_6px_0_0_#FF9900] cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-between gap-2 cursor-pointer">
              <span className="font-display text-lg text-gray-500 whitespace-nowrap cursor-pointer">CA:</span>
              <code className="font-mono font-bold text-xs md:text-sm truncate bg-gray-100 p-1.5 rounded flex-1 text-center cursor-pointer">
                {CA}
              </code>
              <Button 
                onClick={copyToClipboard}
                size="sm"
                className="bg-black hover:bg-gray-800 text-white font-display px-4 h-8 border-2 border-transparent hover:border-meowl-orange transition-all shrink-0 cursor-pointer"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </motion.div>

        </div>

        {/* LINKS SECTION - BELOW IMAGE */}
        <div className="flex flex-wrap justify-center gap-4 w-full mt-8 cursor-pointer">
          <motion.a 
            href="https://pump.fun/coin/J6YgxqwPp3GFvGMNvxgQNRK8qSmtvvTK2wgfuUs1pump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-[#87E4A6] hover:bg-[#6edc93] text-black border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <span className="text-xl">💊</span>
              Buy on Pump.fun
            </div>
          </motion.a>

          <motion.a 
            href="https://dexscreener.com/solana/8g8gtvhh4purrrnykqjstwwxsmbzeyktz1wk9df7fjlf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <img src={dexscreenerLogo} alt="DexScreener" className="w-6 h-6 object-contain cursor-pointer" />
              DexScreener
            </div>
          </motion.a>

          <motion.a 
            href="https://x.com/i/communities/2000096503356920134" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
            {...hoverEffect}
          >
            <div className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Community X
            </div>
          </motion.a>
        </div>

        {/* LORE TEXT */}
        <motion.div 
          className="max-w-3xl text-center bg-black/50 p-6 rounded-xl border-2 border-meowl-orange backdrop-blur-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-xl md:text-2xl font-bold text-white mb-2 font-display tracking-wide">
            THE LEGEND OF MEOWL
          </p>
          <p className="text-lg text-gray-200">
            OG Meowl is one of the rarest brainrot's in Steal a Brainrot. Which so happens to be a cat and a owl mixed. And it is based off a real meme, only non ai generated brainrot.
          </p>
        </motion.div>

        {/* SIDE VIDEOS - REPLACING IMAGES */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-24 mt-8 mb-12 cursor-pointer mx-auto">
          
          {/* LEFT VIDEO */}
          <motion.div 
            className="flex justify-center cursor-pointer"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <div className="border-4 border-white bg-black p-2 rotate-[-3deg] shadow-[8px_8px_0_0_#00FFFF] cursor-pointer w-80 h-80 flex items-center justify-center overflow-hidden">
              <video 
                src={meowlVid1} 
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div 
            className="flex justify-center cursor-pointer"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -2, 2, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="border-4 border-white bg-black p-2 rotate-[3deg] shadow-[-8px_8px_0_0_#FF00FF] cursor-pointer w-80 h-80 flex items-center justify-center overflow-hidden">
              <video 
                src={meowlVid2} 
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>

        </div>

      </main>

      {/* FOOTER MARQUEE - EXACT SAME AS HEADER */}
      <div className="mt-auto relative z-10 bg-meowl-orange cursor-pointer">
        <Marquee text="$MEOWL • CAT + OWL • BRAINROT • RAREST FIND • " speed={30} />
      </div>

    </div>
  );
}