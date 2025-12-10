import { motion } from "framer-motion";
import { Copy, Check, Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import video1 from "@assets/1_1765379246117.mp4";
import video2 from "@assets/2_1765379246117.mp4";
import mainVideo from "@assets/Enregistrement_2025-12-10_160009_1765379246118.mp4";
import bojackBg from "@assets/ghqHldB__1765379246118.jpg";
import dexscreenerLogo from "@assets/image_1765380251339.png";

const CA = "7HXLm6Z9apvqimLksKPZPryve6goGDCo35GP9zFhpump";

const Marquee = ({ text, direction = 1, speed = 20 }: { text: string; direction?: number; speed?: number }) => {
  return (
    <div className="flex overflow-hidden bg-meme-yellow py-2 border-y-4 border-black">
      <motion.div
        className="flex whitespace-nowrap text-3xl md:text-5xl font-display text-black font-bold uppercase"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const goFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pb-0 flex flex-col">
      
      {/* BACKGROUND IMAGE - Fixed */}
      <div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bojackBg})` }}
      />

      {/* MARQUEE TOP */}
      <div className="relative z-10">
        <Marquee text="$BOJACK • DEPRESSED HORSE • TO THE MOON • " speed={30} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-10 flex flex-col items-center gap-10 flex-grow cursor-pointer">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-4 cursor-pointer">
          <motion.h1 
            className="text-7xl md:text-9xl font-display text-meme-pink text-stroke cursor-pointer"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            $BOJACK
          </motion.h1>
          <p className="text-2xl md:text-4xl text-meme-green font-bold text-stroke-sm -rotate-2 cursor-pointer">
            "Back in the 90s I was in a very famous TV show..."
          </p>
        </div>

        {/* MAIN VIDEO PLAYER - BIGGER */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 cursor-pointer">
          
          <div className="w-full relative group border-4 border-meme-green bg-black shadow-[0_0_30px_rgba(0,255,0,0.3)] cursor-pointer">
            <video 
              ref={videoRef}
              src={mainVideo}
              className="w-full h-auto max-h-[70vh] object-contain cursor-pointer"
              onClick={togglePlay}
            />
            
            {/* Custom Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <div className="flex gap-4">
                <button onClick={togglePlay} className="text-white hover:text-meme-green transition-colors cursor-pointer">
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
                <button onClick={toggleMute} className="text-white hover:text-meme-green transition-colors cursor-pointer">
                  {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
                </button>
              </div>
              <div className="font-display text-xl tracking-widest text-white animate-pulse cursor-pointer">
                {isPlaying ? "NOW PLAYING: DEPRESSION" : "PAUSED"}
              </div>
              <button onClick={goFullscreen} className="text-white hover:text-meme-green transition-colors cursor-pointer">
                <Maximize2 size={32} />
              </button>
            </div>
            
            {/* Play Button Center if paused */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40"
                onClick={togglePlay}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-black/50 p-6 rounded-full border-2 border-white text-white backdrop-blur-sm cursor-pointer"
                >
                  <Play size={48} fill="currentColor" />
                </motion.div>
              </div>
            )}
          </div>

          {/* CA SECTION */}
          <motion.div 
            className="w-full max-w-lg bg-white text-black p-3 rounded-xl border-4 border-black shadow-[6px_6px_0_0_#9E5828] transform transition-transform hover:-translate-y-1 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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

        {/* LINKS SECTION - BELOW VIDEOS */}
        <div className="flex flex-wrap justify-center gap-4 w-full mt-8 cursor-pointer">
          <a 
            href="https://pump.fun/coin/7HXLm6Z9apvqimLksKPZPryve6goGDCo35GP9zFhpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-2 bg-[#87E4A6] hover:bg-[#6edc93] text-black border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <span className="text-xl">💊</span>
              Buy on Pump.fun
            </div>
          </a>

          <a 
            href="https://dexscreener.com/solana/d5vwdbqyhwtmonnrezyjtlug9cgruhdfdfnofdvxdcb8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <img src={dexscreenerLogo} alt="DexScreener" className="w-6 h-6 object-contain cursor-pointer" />
              DexScreener
            </div>
          </a>

          <a 
            href="https://x.com/i/communities/1998747105406456040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-display text-lg cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Community X
            </div>
          </a>
        </div>

        {/* SIDE VIDEOS - MOVED BELOW */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 mb-12 cursor-pointer">
          
          {/* LEFT VIDEO */}
          <motion.div 
            className="md:block cursor-pointer"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
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
        <Marquee text="$BOJACK • DEPRESSED HORSE • TO THE MOON • " speed={30} />
      </div>

    </div>
  );
}