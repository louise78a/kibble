import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, ExternalLink, Flame, Sparkles, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import logoImg from "@/assets/kibble/logo.jpg";
import heroImg from "@/assets/kibble/hero.jpg";
import bannerImg from "@/assets/kibble/banner.jpg";
import gallery2 from "@/assets/kibble/gallery2.jpg";
import gallery3 from "@/assets/kibble/gallery3.jpg";
import gallery4 from "@/assets/kibble/gallery4.jpg";

const CA = "6LBqdG61d2xvKdhz6tAyx5hw7Jt1tjRZfXjctgvMpump";
const PUMP_URL = `https://pump.fun/coin/${CA}`;
const DEX_URL = `https://dexscreener.com/solana/${CA}`;
const READ_MORE_URL = "https://x.com/cutest_animal1/status/2067032997711516066";
const X_PROFILE = "https://x.com/cutest_animal1";

const galleryItems = [gallery2, gallery4, gallery3];

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Meme generator state
  const [memePrompt, setMemePrompt] = useState("");
  const [memeGenerating, setMemeGenerating] = useState(false);
  const [memeResult, setMemeResult] = useState<{ b64_json: string; mimeType: string } | null>(null);

  const generateMeme = async () => {
    if (!memePrompt.trim()) return;
    setMemeGenerating(true);
    setMemeResult(null);
    try {
      const res = await fetch("/api/generate-meme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: memePrompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setMemeResult(data);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to generate meme",
        className: "bg-red-900 text-white border-none",
      });
    } finally {
      setMemeGenerating(false);
    }
  };

  const downloadMeme = () => {
    if (!memeResult) return;
    const link = document.createElement("a");
    link.href = `data:${memeResult.mimeType};base64,${memeResult.b64_json}`;
    link.download = "kibble-meme.png";
    link.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard.",
      className: "bg-blue-900 text-white border-none",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 font-sans flex flex-col selection:bg-blue-300 selection:text-blue-900">

      <nav className="border-b border-blue-200 bg-blue-100/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-300">
              <img src={logoImg} alt="Kibble Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-blue-900 font-bold tracking-tight text-2xl">$Kibble</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-800">
            <a href="#about" className="hover:text-blue-600 transition-colors">Story</a>
            <a href="#meme-generator" className="hover:text-blue-600 transition-colors flex items-center gap-1"><Sparkles size={13} />Memes</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#chart" className="hover:text-blue-600 transition-colors">Chart</a>
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full px-6 h-10 transition-all shadow-lg shadow-blue-600/20"
            onClick={() => window.open(PUMP_URL, "_blank")}
          >
            Buy $Kibble
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200 text-blue-900 text-sm font-semibold border border-blue-300">
                <Flame size={16} className="text-blue-600" />
                <span>Going Giga Viral on X</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-blue-950 leading-[0.9]">
                KIBBLE.
              </h1>

              <div className="text-xl md:text-2xl text-blue-800 leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Meet the <span className="text-blue-600 font-bold">Japanese Pibble</span>. A tiny kitten going giga viral on X right now, with tons of memes already being made in the comments.
                </p>
                <p>
                  The small plump belly is cute and the internet cannot stop sharing it.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={READ_MORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-900 text-blue-50 text-sm font-semibold hover:bg-blue-800 transition-colors"
                >
                  <ExternalLink size={14} className="text-blue-400" />
                  Read more
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <Button
                  className="bg-blue-600 hover:bg-blue-500 text-white h-14 px-8 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-600/30"
                  onClick={() => window.open(PUMP_URL, "_blank")}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-900 border-2 border-blue-300 h-14 px-8 rounded-full text-lg font-bold"
                  onClick={() => window.open(DEX_URL, "_blank")}
                >
                  View Chart
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto aspect-square md:h-auto rounded-xl overflow-hidden shadow-2xl bg-blue-100 border-8 border-blue-400 flex items-center justify-center"
            >
               <img
                  src={heroImg}
                  alt="Kibble the Japanese Pibble"
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </section>

        {/* MEME GENERATOR */}
        <section id="meme-generator" className="py-24 bg-gradient-to-b from-blue-900 to-blue-950 border-t border-blue-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Meme Generator</h2>
              <p className="text-blue-300 text-lg">Turn Kibble into anything. Just describe it.</p>
            </div>

            <div className="bg-blue-900/40 rounded-2xl border border-blue-700 p-8 space-y-8">
              {/* Prompt input */}
              <div>
                <p className="text-blue-200 font-semibold mb-4 text-sm uppercase tracking-widest">Describe your meme</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    data-testid="input-meme-prompt"
                    type="text"
                    value={memePrompt}
                    onChange={(e) => setMemePrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !memeGenerating && generateMeme()}
                    placeholder="e.g. Kibble as an astronaut floating in space..."
                    className="flex-1 px-5 py-3 rounded-xl bg-blue-950/60 border border-blue-700 text-white placeholder-blue-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 font-medium"
                  />
                  <Button
                    data-testid="button-generate-meme"
                    onClick={generateMeme}
                    disabled={memeGenerating || !memePrompt.trim()}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3 rounded-xl h-auto gap-2 disabled:opacity-50 whitespace-nowrap"
                  >
                    {memeGenerating ? (
                      <><Loader2 size={18} className="animate-spin" /> Generating…</>
                    ) : (
                      <><Sparkles size={18} /> Generate</>
                    )}
                  </Button>
                </div>
                {memeGenerating && (
                  <p className="text-blue-400 text-sm mt-3 text-center animate-pulse">
                    Kibble is cooking your meme… this takes a few seconds 🐱
                  </p>
                )}
              </div>

              {/* Result */}
              {memeResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest">Your Meme</p>
                  <div className="rounded-xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20 max-w-xl mx-auto">
                    <img
                      data-testid="img-meme-result"
                      src={`data:${memeResult.mimeType};base64,${memeResult.b64_json}`}
                      alt="Generated meme"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex justify-center gap-3">
                    <Button
                      data-testid="button-download-meme"
                      onClick={downloadMeme}
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl px-6 h-11 gap-2"
                    >
                      <Download size={16} /> Download
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => { setMemeResult(null); setMemePrompt(""); }}
                      className="border-blue-600 text-blue-300 hover:bg-blue-800 rounded-xl px-6 h-11"
                    >
                      Generate Another
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-blue-100/50 border-t border-blue-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950">Extremely Memeable.</h2>
                  <div className="space-y-6 text-lg text-blue-900 leading-relaxed border-l-4 border-blue-500 pl-6">
                    <p>
                      Cute cat. <strong className="text-blue-950">Extremely memeable.</strong> The perfect narrative with the current return to OG animal runners.
                    </p>
                    <p>
                      Kibble to millions. That is the only explanation needed.
                    </p>
                  </div>
                  <div className="pt-4 font-sans flex flex-wrap gap-4">
                    <a
                      href={READ_MORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-blue-50 rounded-full px-8 h-12 text-sm font-bold transition-colors"
                    >
                      Read more <ExternalLink size={16} />
                    </a>
                    <Button
                      variant="outline"
                      className="bg-blue-50 hover:bg-blue-100 text-blue-900 border-2 border-blue-300 rounded-full px-8 h-12 gap-2"
                      onClick={() => window.open(X_PROFILE, "_blank")}
                    >
                      Join the Community <ExternalLink size={16} />
                    </Button>
                  </div>
               </div>
               <div className="relative order-1 md:order-2">
                  <div className="rounded-xl overflow-hidden shadow-xl bg-blue-50 border-8 border-blue-400 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={bannerImg}
                      alt="Kibble"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-blue-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-blue-950">Gallery</h2>
              <p className="text-blue-800 text-lg italic">The internet cannot stop sharing it.</p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
              {galleryItems.map((src, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="mb-6 break-inside-avoid rounded-xl overflow-hidden bg-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-blue-300"
                >
                  <img
                    src={src}
                    alt={`Kibble Gallery ${index + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="chart" className="py-12 bg-blue-100/50 border-t border-blue-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight text-blue-950">Live Chart</h2>
              <div className="flex gap-2 items-center px-3 py-1 bg-blue-50 rounded-full border border-blue-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 font-sans">Live</span>
              </div>
            </div>

            <div className="bg-blue-50 p-1 rounded-2xl shadow-lg border border-blue-300 h-[600px] overflow-hidden relative">
              <iframe
                src={`https://birdeye.so/tv-widget/${CA}?chain=solana&viewMode=pair&chartInterval=15&chartType=candlestick&chartTimezone=Europe%2FBerlin&chartLeftToolbar=show&theme=dark`}
                className="w-full h-full border-0 rounded-xl"
                title="Birdeye Chart"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50 border-t border-blue-200">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">

            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-blue-950">$Kibble</h2>

              <div className="flex flex-wrap justify-center gap-4 font-sans">
                <Button
                  className="bg-blue-600 hover:bg-blue-500 text-white h-12 px-8 rounded-full text-lg font-bold gap-2 shadow-lg shadow-blue-600/20"
                  onClick={() => window.open(PUMP_URL, "_blank")}
                >
                  Pump.fun
                </Button>
                <Button
                  variant="outline"
                  className="bg-blue-50 text-blue-950 border-2 border-blue-300 hover:bg-blue-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open(DEX_URL, "_blank")}
                >
                  <TrendingUp className="w-5 h-5" />
                  DexScreener
                </Button>
                <Button
                  variant="outline"
                  className="bg-blue-50 text-blue-950 border-2 border-blue-300 hover:bg-blue-100 font-bold text-lg px-8 h-12 rounded-full gap-2"
                  onClick={() => window.open(X_PROFILE, "_blank")}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Community
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-xs text-blue-800 mb-2 font-mono uppercase tracking-widest">Contract Address</p>
                <div
                  className="inline-flex items-center justify-center gap-3 bg-blue-100 px-6 py-4 rounded-2xl border border-blue-300 hover:border-blue-500 transition-all cursor-pointer group"
                  onClick={copyToClipboard}
                  data-testid="button-copy-ca"
                >
                  <code className="font-mono text-sm md:text-base text-blue-950 break-all group-hover:text-blue-700 transition-colors">
                    {CA || "..."}
                  </code>
                  <div className="text-blue-800 group-hover:text-blue-600 transition-colors">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
