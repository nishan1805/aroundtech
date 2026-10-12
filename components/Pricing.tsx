'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import { Check, ArrowRight, Zap, Layers } from 'lucide-react';

export function Pricing() {
  const { scrollToSection } = useTheme();

  return (
    <section id="pricing" className="py-24 bg-[#080B12] text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Straightforward Investment, Tailored Value.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Choose the engagement model that fits your stage, from high-converting
            landing pages to custom software engineering.
          </p>
        </div>

        {/* 2 Packages Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package 1: Starter: Landing Page */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#101521] p-8 sm:p-10 flex flex-col justify-between hover:border-[#0163FF]/40 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0163FF] bg-[#0163FF]/10 px-3 py-1 rounded-full">
                  STARTER PACKAGE
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">~ 2 Weeks</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                Starter: Landing Page
              </h3>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                A professional landing page to establish your online presence.
              </p>

              {/* Price */}
              <div className="my-6 py-4 border-y border-white/[0.06] flex items-baseline gap-2">
                <span className="text-xs text-[#94A3B8]">Starting at</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  ₹9,999
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0163FF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0163FF]" />
                  </div>
                  <span>Custom landing page design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0163FF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0163FF]" />
                  </div>
                  <span>Responsive layout across devices</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0163FF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0163FF]" />
                  </div>
                  <span>Contact or enquiry integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0163FF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0163FF]" />
                  </div>
                  <span>Basic SEO structure</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={() => scrollToSection('#contact', 'Landing Page')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0163FF] hover:bg-[#0052d9] transition-all cursor-pointer shadow-md shadow-[#0163FF]/20"
              >
                <span>Get Starter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Package 2: Custom: Digital Product */}
          <div className="relative rounded-3xl border border-[#FF7A1A]/30 bg-gradient-to-b from-[#141B2D] to-[#101521] p-8 sm:p-10 flex flex-col justify-between hover:border-[#FF7A1A]/60 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7A1A] to-[#FFA454] px-3.5 py-1 rounded-full shadow-md">
                MOST POPULAR
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF7A1A] bg-[#FF7A1A]/10 px-3 py-1 rounded-full">
                  BESPOKE SCOPE
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">4–12 Weeks</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                Custom: Digital Product
              </h3>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Custom websites, applications, and digital products designed around your requirements.
              </p>

              {/* Price */}
              <div className="my-6 py-4 border-y border-white/[0.06] flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Custom Pricing
                </span>
                <span className="text-xs text-[#94A3B8]">/ based on scope</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF7A1A]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  </div>
                  <span>Custom UI/UX design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF7A1A]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  </div>
                  <span>Tailored development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF7A1A]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  </div>
                  <span>Relevant integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF7A1A]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  </div>
                  <span>Scope-based delivery</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Custom Website / E-commerce')
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF7A1A] to-[#FF9E4A] hover:opacity-95 transition-all cursor-pointer shadow-md shadow-[#FF7A1A]/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
