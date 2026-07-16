// rAF + direct DOM mutation — zero React re-renders on mouse move
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let targetX = -100, targetY = -100;
    let currentX = -100, currentY = -100;
    let rafId: number;
    let isHovering = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.14);
      currentY = lerp(currentY, targetY, 0.14);
      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate(${currentX - 16}px, ${currentY - 16}px) scale(${isHovering ? 2 : 1})`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hover = !!(t.closest("a") || t.closest("button"));
      if (hover !== isHovering) {
        isHovering = hover;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9998] mix-blend-exclusion"
      style={{
        willChange: "transform",
        transform: "translate(-100px, -100px)",
        transition: "scale 0.2s ease",
      }}
    />
  );
}
