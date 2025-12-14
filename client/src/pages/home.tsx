import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import hamieMain from "@assets/basic_1765734286168.jpeg";
import bgImage from "@assets/background_1765698527522.jpg"; // Keeping previous bg for now as none provided, or maybe we just don't use it or blur it.
import dexscreenerLogo from "@assets/image_1765380251339.png";

const CA = "J6YgxqwPp3GFvGMNvxgQNRK8qSmtvvTK2wgfuUs1pump";

const Marquee = ({ text, direction = 1, speed = 20 }: { text: string; direction?: number; speed?: number }) => {
  return (
    <div className="flex overflow-hidden bg-hamie-orange py-2 border-y-4 border-black cursor-pointer">
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
    <div className="min-h-screen bg-black text-white overflow-hidden pb-0 flex flex-col cursor-pointer">
      
      {/* BACKGROUND IMAGE - Fixed (Blurred Miku bg as fallback or maybe just remove it? The prompt didn't specify a new BG, just said "remplace la video du haut par cette image". I'll keep the bg image reference but maybe we should just use a solid color if it clashes. Let's keep it for now but maybe assume the user will provide one later. Or actually, looking at the image, it's a hamster in a room. I'll just use the old BG for now as I wasn't given a new one, but maybe I should remove it if it's too clashing. The user said "jtai donné l'img background à mettre en fond" in the PREVIOUS turn for Miku. This turn they did NOT provide a background. I will reuse the previous one or maybe just no background? Let's stick to the previous one as a placeholder or maybe just use a dark color. Actually, the hamster image is quite bright. I'll comment out the BG image to be safe and let the black shine through, or better, use the hamster image blurred as BG? No, that's complex. I'll just keep the previous BG logic but maybe the user intended to keep the Miku BG? Unlikely. I'll just remove the background image style to be safe and neutral, or better, use the previous one. I'll keep the code structure but maybe remove the bg image source if it's Miku specific. Wait, the user said "remplace $Miku par $Hamie-Chan". It implies a full rebrand. Miku BG would look weird. I'll use the main image as a blurred background! That's a good trick.) */}
      <div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none bg-cover bg-center bg-no-repeat blur-xl"
        style={{ backgroundImage: `url(${hamieMain})` }}
      />

      {/* MARQUEE TOP */}
      <div className="relative z-10">
        <Marquee text="$Hamie-Chan • KUNG FU HAMSTER • SMALL BUT MIGHTY • CUTE BUT DEADLY • " speed={30} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-10 flex flex-col items-center gap-10 flex-grow cursor-pointer">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-4 cursor-pointer">
          <motion.h1 
            className="text-7xl md:text-9xl font-display text-hamie-orange text-stroke cursor-pointer"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
          >
            $Hamie-Chan
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-4xl text-hamie-cream font-bold text-stroke-sm -rotate-2 cursor-pointer max-w-2xl mx-auto leading-tight"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            "SMALL BUT MIGHTY!"
          </motion.p>
        </div>

        {/* MAIN IMAGE (REPLACES VIDEO) */}
        <div className="w-full flex flex-col items-center gap-6 cursor-pointer">
          
          <div className="relative group border-4 border-hamie-orange bg-black shadow-[0_0_30px_rgba(244,164,96,0.5)] cursor-pointer inline-block overflow-hidden rounded-lg">
            <motion.img 
              src={hamieMain}
              alt="Hamie Chan Kung Fu"
              className="h-auto max-h-[75vh] w-auto max-w-full block cursor-pointer object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* CA SECTION */}
          <motion.div 
            className="w-full max-w-lg bg-white text-black p-3 rounded-xl border-4 border-black shadow-[6px_6px_0_0_#F4A460] cursor-pointer"
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
                className="bg-black hover:bg-gray-800 text-white font-display px-4 h-8 border-2 border-transparent hover:border-hamie-orange transition-all shrink-0 cursor-pointer"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </motion.div>

        </div>

        {/* LINKS SECTION */}
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

        {/* SIDE IMAGES REMOVED as requested */}

      </main>

      {/* FOOTER MARQUEE */}
      <div className="mt-auto relative z-10 bg-hamie-orange cursor-pointer">
        <Marquee text="$Hamie-Chan • KUNG FU HAMSTER • SMALL BUT MIGHTY • CUTE BUT DEADLY • " speed={30} />
      </div>

    </div>
  );
}