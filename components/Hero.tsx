'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const { scrollToSection } = useTheme();

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#080B12] text-white"
    >
      {/* Background Ambience: Subtle Dot Matrix & Glow Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#0163FF]/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[280px] bg-[#FF7A1A]/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Change 1: Exact Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#3B82F6] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>DIGITAL PRODUCTS · DESIGN · DEVELOPMENT</span>
          </motion.div>

          {/* Headline Preserved */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            We Turn Ideas Into{' '}
            <span className="bg-gradient-to-r from-[#0163FF] via-[#3B82F6] to-[#FF7A1A] bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </motion.h1>

          {/* Change 2: Simplified Subtitle, 2 lines on desktop */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed"
          >
            Around Tech helps businesses build digital products through thoughtful design and modern development.
          </motion.p>

          {/* Action Buttons Preserved */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0163FF] hover:bg-[#0052d9] shadow-lg shadow-[#0163FF]/25 hover:shadow-[#0163FF]/40 transition-all active:scale-[0.98] group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#work')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#F8FAFC] border border-white/[0.14] hover:bg-white/[0.05] transition-all cursor-pointer"
            >
              <span>Explore Our Work</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
