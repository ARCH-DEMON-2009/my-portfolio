// Replaces 50+ framer-motion instances with one IntersectionObserver + CSS transitions
import { useEffect, useRef, useState } from "react";

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="relative mr-[1.5vw] mt-2 inline-block"
          style={{
            opacity: visible ? 1 : 0.12,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: `opacity 0.45s ease ${i * 0.022}s, transform 0.45s ease ${i * 0.022}s`,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
