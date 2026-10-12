'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function FinalCta() {
  const { scrollToSection } = useTheme();

  return (
    <section className="bg-[#080B12] text-[#F8FAFC] py-20 border-t border-white/[0.08] relative overflow-hidden transition-colors">
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0163FF]/20 via-[#0163FF]/10 to-[#FF7A1A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
              READY FOR THE NEXT EVOLUTION?
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-[#0163FF] via-[#3B82F6] to-[#FF7A1A] bg-clip-text text-transparent">
                Exceptional.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
              Partner with Around Tech for thoughtful UI/UX design, modern websites,
              and robust business applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0163FF] hover:bg-[#0052d9] shadow-lg shadow-[#0163FF]/30 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/919109919079"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#F8FAFC] border border-white/[0.14] hover:bg-white/[0.05] transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
