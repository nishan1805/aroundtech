'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import {
  Sparkles,
  Layout,
  Globe,
  Smartphone,
  Cpu,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export function Services() {
  const { scrollToSection } = useTheme();

  return (
    <section id="services" className="py-24 bg-[#080B12] text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#3B82F6] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>OUR EXPERTISE</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Everything You Need to Build Better Digital Products.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            From the first design concept to the final line of code, we create digital
            experiences built around your business goals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Service 1: Landing Pages (Col Span 7) */}
          <div className="md:col-span-7 group relative rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-[#101521] p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-[#0163FF]/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0163FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0163FF]/15 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0163FF]">
                  <Layout className="w-4 h-4" />
                  <span>CONVERSION DRIVEN</span>
                </div>
                <span className="text-xs text-[#94A3B8] font-mono">01 / LANDING PAGE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                Landing Pages
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
                Conversion-focused landing pages for products, campaigns, and businesses.
              </p>

              {/* Minimal Hero Preview Graphic */}
              <div className="mt-6 rounded-xl border border-white/[0.1] bg-[#0A0E17] p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-[#64748B]">high-impact-hero.tsx</span>
                </div>
                <div className="space-y-2 py-2">
                  <div className="w-3/5 h-4 rounded bg-[#0163FF]/30" />
                  <div className="w-4/5 h-2.5 rounded bg-white/10" />
                  <div className="flex items-center gap-3 pt-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0163FF] text-white">
                      Start Project
                    </span>
                    <span className="text-[11px] text-[#94A3B8] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#FF7A1A]" /> 3.4x Conversion
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">High performance &amp; fast launch</span>
              <button
                type="button"
                onClick={() => scrollToSection('#contact', 'Landing Page')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0163FF] hover:text-[#3B82F6] transition-colors cursor-pointer group/btn"
              >
                <span>Discuss Landing Page</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Service 2: Custom Websites (Col Span 5) */}
          <div className="md:col-span-5 group relative rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-[#101521] p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-[#0163FF]/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3B82F6]/15 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3B82F6]">
                  <Globe className="w-4 h-4" />
                  <span>BESPOKE WEB</span>
                </div>
                <span className="text-xs text-[#94A3B8] font-mono">02 / WEBSITE</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
                Custom Websites
              </h3>
              <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                Custom business and e-commerce websites designed around your brand and needs.
              </p>

              {/* Minimal Store/Website Interface Preview */}
              <div className="mt-6 rounded-xl border border-white/[0.1] bg-[#0A0E17] p-4">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
                    <span className="text-[10px] text-[#94A3B8] block">Catalogue</span>
                    <span className="font-semibold text-white block">E-Commerce</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0163FF]/10 border border-[#0163FF]/20 space-y-1">
                    <span className="text-[10px] text-[#3B82F6] block">Architecture</span>
                    <span className="font-semibold text-white block">Brand Website</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#94A3B8] pt-2 border-t border-white/[0.06]">
                  <span>Modular CMS</span>
                  <span className="text-emerald-400">SEO Ready</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">Scalable architecture</span>
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Custom Website / E-commerce')
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0163FF] hover:text-[#3B82F6] transition-colors cursor-pointer group/btn"
              >
                <span>Discuss Website</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Service 3: Mobile App Development (Col Span 5) */}
          <div className="md:col-span-5 group relative rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-[#101521] p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-[#FF7A1A]/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A1A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF7A1A]/15 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF7A1A]">
                  <Smartphone className="w-4 h-4" />
                  <span>IOS &amp; ANDROID</span>
                </div>
                <span className="text-xs text-[#94A3B8] font-mono">03 / MOBILE APP</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
                Mobile App Development
              </h3>
              <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                Thoughtfully designed mobile applications with intuitive user experiences.
              </p>

              {/* Minimal Smartphone Frame Preview */}
              <div className="mt-6 flex items-center justify-center">
                <div className="w-48 rounded-2xl border-2 border-white/20 bg-[#0A0E17] p-3 shadow-inner">
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2" />
                  <div className="space-y-2">
                    <div className="w-full h-12 rounded-lg bg-gradient-to-r from-[#0163FF]/30 to-[#FF7A1A]/20 flex items-center px-2">
                      <span className="text-[10px] font-semibold text-white">Intuitive UX</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="h-8 rounded bg-white/[0.05]" />
                      <div className="h-8 rounded bg-white/[0.05]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">Native &amp; Cross-platform</span>
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Mobile App Development')
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7A1A] hover:text-[#FFA454] transition-colors cursor-pointer group/btn"
              >
                <span>Discuss Mobile App</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Service 4: Software Solutions (Col Span 7) */}
          <div className="md:col-span-7 group relative rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-[#101521] p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-[#0163FF]/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0163FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0163FF]/15 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0163FF]">
                  <Cpu className="w-4 h-4" />
                  <span>ENTERPRISE &amp; SAAS</span>
                </div>
                <span className="text-xs text-[#94A3B8] font-mono">04 / SOFTWARE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                Software Solutions
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
                Custom platforms and business software, including CRM and ERP solutions.
              </p>

              {/* Minimal Software / CRM Interface Preview */}
              <div className="mt-6 rounded-xl border border-white/[0.1] bg-[#0A0E17] p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
                  <span className="font-semibold text-white">Business Operations Dashboard</span>
                  <span className="text-emerald-400 font-mono">99.9% Uptime</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-[#94A3B8] block">CRM Pipeline</span>
                    <span className="font-semibold text-white">Active</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-[#94A3B8] block">ERP Workflows</span>
                    <span className="font-semibold text-white">Automated</span>
                  </div>
                  <div className="p-2 rounded bg-[#0163FF]/10 border border-[#0163FF]/20">
                    <span className="text-[10px] text-[#3B82F6] block">Access Control</span>
                    <span className="font-semibold text-white">Role-Based</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">CRM · ERP · Admin Portals</span>
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Software Solutions (CRM/ERP)')
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0163FF] hover:text-[#3B82F6] transition-colors cursor-pointer group/btn"
              >
                <span>Discuss Software Solution</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
