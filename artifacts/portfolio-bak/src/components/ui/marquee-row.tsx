import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function MarqueeRow({ items, direction = "left", speed = 1 }: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const moveValue = direction === "left" ? speed * 1000 : -speed * 1000;
  
  const x = useTransform(scrollYProgress, [0, 1], [0, moveValue]);
  const smoothX = useSpring(x, { damping: 50, stiffness: 400 });

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap py-4 flex select-none">
      <motion.div style={{ x: smoothX, willChange: 'transform' }} className="flex gap-4 min-w-max pr-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {items.map((item, idx) => (
              <div 
                key={`${i}-${idx}`} 
                className="px-6 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-white/80 font-mono text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors duration-300 shadow-[0_0_0_rgba(0,255,194,0)] hover:shadow-[0_0_15px_rgba(0,255,194,0.3)] cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}