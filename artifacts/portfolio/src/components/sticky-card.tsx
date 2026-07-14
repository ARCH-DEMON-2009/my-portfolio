import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyCardProps {
  index: number;
  totalCards: number;
  project: {
    title: string;
    category: string;
    images: string[];
  };
}

export function StickyCard({ index, totalCards, project }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  
  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(cardScrollProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(cardScrollProgress, [0, 0.8, 1], [1, 1, 0.5]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${index * 20}px)`, opacity }}
        className="relative w-full max-w-6xl mx-auto h-[80vh] bg-[#0C0C0C] rounded-[50px] border-2 border-primary/30 p-8 md:p-12 flex flex-col origin-top shadow-[0_0_50px_rgba(0,255,194,0.05)] overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
          <div className="flex items-center gap-6">
            <span className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.2)]">
              0{index + 1}
            </span>
            <div>
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-3xl md:text-5xl font-bold text-white uppercase">{project.title}</h3>
            </div>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 text-white font-mono text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
            View Project
          </button>
        </div>

        {/* Bottom Images */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 min-h-0 relative z-10">
          {/* Left Column - 40% */}
          <div className="hidden md:flex md:col-span-5 flex-col gap-6 h-full">
            <div className="flex-1 rounded-[30px] overflow-hidden relative group">
              <motion.div style={{ scale: imageScale }} className="w-full h-full">
                <img src={project.images[0]} alt="" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </motion.div>
            </div>
            <div className="flex-1 rounded-[30px] overflow-hidden relative group">
              <motion.div style={{ scale: imageScale }} className="w-full h-full">
                <img src={project.images[1]} alt="" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </motion.div>
            </div>
          </div>
          
          {/* Right Column - 60% */}
          <div className="col-span-1 md:col-span-7 h-full rounded-[30px] overflow-hidden relative group">
             <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <img src={project.images[2]} alt="" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </motion.div>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      </motion.div>
    </div>
  );
}