import React from "react";

interface LumaSpinProps {
  size?: number;
  color?: string;
}

export const LumaSpin: React.FC<LumaSpinProps> = ({ size = 65, color = "rgba(255,255,255,0.9)" }) => {
  const style: React.CSSProperties = {
    position: "relative",
    width: size,
    aspectRatio: "1",
  };

  const spanBase: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50px",
    boxShadow: `inset 0 0 0 3px ${color}`,
  };

  return (
    <div style={style}>
      <style>{`
        @keyframes lumaLoaderAnim {
          0%    { inset: 0 ${size * 0.538}px ${size * 0.538}px 0; }
          12.5% { inset: 0 ${size * 0.538}px 0 0; }
          25%   { inset: ${size * 0.538}px ${size * 0.538}px 0 0; }
          37.5% { inset: ${size * 0.538}px 0 0 0; }
          50%   { inset: ${size * 0.538}px 0 0 ${size * 0.538}px; }
          62.5% { inset: 0 0 0 ${size * 0.538}px; }
          75%   { inset: 0 0 ${size * 0.538}px ${size * 0.538}px; }
          87.5% { inset: 0 0 ${size * 0.538}px 0; }
          100%  { inset: 0 ${size * 0.538}px ${size * 0.538}px 0; }
        }
        .luma-spin-a {
          animation: lumaLoaderAnim 2.5s infinite;
        }
        .luma-spin-b {
          animation: lumaLoaderAnim 2.5s infinite;
          animation-delay: -1.25s;
        }
      `}</style>
      <span className="luma-spin-a" style={spanBase} />
      <span className="luma-spin-b" style={spanBase} />
    </div>
  );
};
