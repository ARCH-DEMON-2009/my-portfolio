import { Magnet } from "./magnet";

interface ContactButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export function ContactButton({ text = "Hire Me", onClick, className = "" }: ContactButtonProps) {
  return (
    <Magnet className="inline-block">
      <button 
        onClick={onClick}
        className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white uppercase tracking-wider overflow-hidden group ${className}`}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary to-primary opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="absolute inset-0 w-full h-full rounded-full border-[1.5px] border-white/20"></span>
        <span className="relative z-10 mix-blend-exclusion">{text}</span>
      </button>
    </Magnet>
  );
}