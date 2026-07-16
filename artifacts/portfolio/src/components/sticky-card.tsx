// Optimised: 1 useScroll (was 2), CSS transitions for terminal lines
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyCardProps {
  index: number;
  totalCards: number;
  project: {
    title: string;
    category: string;
    desc: string;
    tech: string[];
    lines: string[];
    accentColor: string;
  };
}

function lineClass(line: string) {
  if (line.startsWith("$")) return "text-white/70";
  if (line.startsWith("✓") || line.startsWith("●")) return "text-emerald-400";
  if (line.startsWith("!")) return "text-amber-400";
  if (line.startsWith("#")) return "text-white/25";
  return "text-white/40";
}

export function StickyCard({ index, totalCards, project }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const [termVisible, setTermVisible] = useState(false);

  // Single scroll tracker (was 2)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.5]);

  // One IntersectionObserver for terminal (replaces 11 motion.div whileInView per card)
  useEffect(() => {
    const el = termRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTermVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(6vh + ${index * 16}px)`, opacity, willChange: "transform, opacity" }}
        className="relative w-full max-w-6xl mx-auto h-[82vh] bg-[#111111] rounded-[40px] sm:rounded-[50px] border border-white/10 p-5 sm:p-8 md:p-10 flex flex-col origin-top shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none rounded-[40px] sm:rounded-[50px]" />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-[1px]"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)` }}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] shrink-0">
              0{index + 1}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: project.accentColor }}>
                {project.category}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="shrink-0 self-start sm:self-center">
            <button className="pb group" aria-label={`View ${project.title}`}>
              <span className="pb__shadow" />
              <span className="pb__edge" />
              <span className="pb__front px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white rounded-[10px]">
                View Project
              </span>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-0 relative z-10">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <p className="text-white/55 text-sm sm:text-base leading-relaxed font-light">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono border"
                  style={{ borderColor: `${project.accentColor}40`, color: project.accentColor, background: `${project.accentColor}10` }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              <span className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: project.accentColor }} />
              <span className="font-mono text-xs text-white/35 uppercase tracking-widest">Live · Production</span>
            </div>
          </div>

          {/* Right: terminal */}
          <div className="flex flex-col bg-[#0A0A0A] rounded-2xl border border-white/8 overflow-hidden min-h-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-white/25 truncate">
                {project.title.toLowerCase().replace(/\s/g, "-")}/main
              </span>
            </div>
            <div ref={termRef} className="flex-1 p-4 overflow-auto font-mono text-xs leading-6 space-y-0.5">
              {project.lines.map((line, i) => (
                <div
                  key={i}
                  className={lineClass(line)}
                  style={{
                    opacity: termVisible ? 1 : 0,
                    transform: termVisible ? "translateX(0)" : "translateX(-8px)",
                    transition: `opacity 0.3s ease ${i * 0.055}s, transform 0.3s ease ${i * 0.055}s`,
                  }}
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-1 text-white/60 pt-1">
                <span>$</span>
                <span className="w-2 h-4 bg-white/60 animate-pulse ml-1" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
