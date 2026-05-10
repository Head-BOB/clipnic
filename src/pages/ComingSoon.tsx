import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-center text-[#F5F5F5] font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-2xl space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-[2.5rem] md:rounded-[3rem] flex items-center justify-center border border-white/10 shadow-2xl relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Zap size={64} className="text-brand fill-brand md:w-20 md:h-20" />
          </div>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1, 0.95]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-brand text-black font-display font-bold text-xl md:text-2xl px-4 py-2 rounded-2xl border-4 border-[#050505] rotate-12 shadow-2xl"
          >
            WIP
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-display text-[12vw] md:text-[8vw] tracking-tighter leading-none uppercase"
          >
            Under <br /> <span className="text-brand">development</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-sans opacity-40 text-lg md:text-xl font-light max-w-lg mx-auto"
          >
            this page is currently under development
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="pt-8"
        >
          <button
            onClick={() => window.location.href = '/'}
            className="px-12 py-5 rounded-full bg-white text-black font-sans font-bold text-xs md:text-sm hover:bg-brand transition-all uppercase tracking-[0.2em] shadow-xl"
          >
            Return Home
          </button>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
};
