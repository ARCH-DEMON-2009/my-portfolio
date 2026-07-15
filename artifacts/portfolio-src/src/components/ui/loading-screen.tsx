import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LumaSpin } from "./luma-spin";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0C0C]"
        >
          <LumaSpin size={65} color="rgba(255,255,255,0.85)" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-white/40"
          >
            Shashank.sv
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
