// Pure CSS marquee — zero JS, GPU-accelerated, no scroll listeners
interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function MarqueeRow({ items, direction = "left", speed = 1 }: MarqueeRowProps) {
  // Double items for seamless infinite loop
  const doubled = [...items, ...items];
  const duration = 35 / speed;

  return (
    <div className="overflow-hidden whitespace-nowrap py-4 flex select-none">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          minWidth: "max-content",
          willChange: "transform",
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, idx) => (
          <div
            key={idx}
            className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-white/80 font-mono text-sm uppercase tracking-wider cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
