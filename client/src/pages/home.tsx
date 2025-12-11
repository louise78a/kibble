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

// Gallery Assets
import gallery1 from "@assets/735807360G7V3qpXXoAA4fLQ_1765460337650.jpeg";
import gallery2 from "@assets/835521129G7XXSY2X0AABjkU_1765460337651.jpeg";
import gallery3 from "@assets/51285841G7XX7yxXcAAJAiR_1765460337651.jpeg";
import gallery4 from "@assets/949351125G7SO3Mcb0AAY-pv_1765460337651.jpeg";
import gallery5 from "@assets/860926553G7b_Ygsb0AEoPzN_1765460337652.jpeg";
import gallery6 from "@assets/133306736G679dwebsAAMP53_1765460337652.jpeg";
import gallery7 from "@assets/604876577G7LcEzubQAArqc8_1765460337653.jpeg";
import gallery8 from "@assets/228591629G7QcjchWEAA-sk3_1765460337653.jpeg";
import gallery9 from "@assets/311091496G67mompbkAM29zs_1765460337653.png";
import gallery10 from "@assets/971157866G676GZUbkBEBts5_1765460337654.jpeg";
import gallery11 from "@assets/767119454G7RtJTibgAASXj2__1__1765460337654.jpeg";

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11
];

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

        {/* MAIN IMAGE - REPLACED WITH DUAL IMAGES (SMALLER) */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-8 cursor-pointer">
          
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
            <div className="border-4 border-masked-primary bg-black p-2 rotate-[-3deg] shadow-[8px_8px_0_0_#00FFFF] cursor-pointer w-64 md:w-72">
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
            <div className="border-4 border-masked-secondary bg-black p-2 rotate-[3deg] shadow-[-8px_8px_0_0_#FF0055] cursor-pointer w-64 md:w-72">
              <img 
                src={img2} 
                alt="Mask 2"
                className="w-full h-auto object-contain cursor-pointer"
              />
            </div>
          </motion.div>

        </div>

        {/* CA SECTION - MOVED BELOW IMAGES */}
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
        {/* GALLERY SECTION */}
        <div className="w-full max-w-6xl mt-12 mb-12">
          <motion.h2 
            className="text-4xl md:text-6xl text-center font-display text-white text-stroke-sm mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            THE MASQUERADE
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
              >
                <div className={`
                  border-4 bg-black p-1 
                  ${index % 2 === 0 ? 'border-masked-primary shadow-[4px_4px_0_0_#00FFFF]' : 'border-masked-secondary shadow-[4px_4px_0_0_#FF0055]'}
                  rounded-lg overflow-hidden
                `}>
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full aspect-square object-cover hover:brightness-110 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>

      {/* FOOTER MARQUEE - EXACT SAME AS HEADER */}
      <div className="mt-auto relative z-10 bg-masked-primary cursor-pointer">
        <Marquee text="$Masked • BROKEN FACADE • TRUTH REVEALED • HIDDEN IN PLAIN SIGHT • " speed={30} />
      </div>

    </div>
  );
}