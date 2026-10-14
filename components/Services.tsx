'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/theme-context';
import { ArrowRight, Smartphone, Layout, Globe, Cpu } from 'lucide-react';

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

        {/* Bento Grid: 4 Simplified Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Service 1: Landing Pages (Col Span 7) */}
          <div className="md:col-span-7 group relative rounded-3xl border border-white/[0.08] bg-[#101521] p-7 sm:p-9 flex flex-col justify-between overflow-hidden hover:border-[#0163FF]/50 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0163FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0163FF]/15 transition-all" />

            <div>
              <div className="flex items-center gap-2.5 text-[#0163FF] mb-3">
                <Layout className="w-5 h-5" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                  Landing Pages
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl mb-6">
                Conversion-focused landing pages for products, campaigns, and businesses.
              </p>

              {/* Landing Page Preview */}
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#0A0E17] overflow-hidden aspect-[16/9] shadow-inner">
                <Image
                  src="/projects/home-aura-hero.jpg"
                  alt="Conversion Landing Page Preview"
                  fill
                  className="object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-black/30" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="font-medium">Responsive Campaign Hero</span>
                  <span className="text-[#0163FF] font-semibold">High Conversion</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() => scrollToSection('#contact', 'Landing Page')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#F8FAFC] border border-white/[0.18] hover:border-white/[0.35] hover:bg-white/[0.06] transition-all cursor-pointer group/btn"
              >
                <span>Discuss Landing Page</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Service 2: Custom Websites (Col Span 5) */}
          <div className="md:col-span-5 group relative rounded-3xl border border-white/[0.08] bg-[#101521] p-7 sm:p-9 flex flex-col justify-between overflow-hidden hover:border-[#3B82F6]/50 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3B82F6]/15 transition-all" />

            <div>
              <div className="flex items-center gap-2.5 text-[#3B82F6] mb-3">
                <Globe className="w-5 h-5" />
                <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
                  Custom Websites
                </h3>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Custom business and e-commerce websites designed around your brand and needs.
              </p>

              {/* Website Preview */}
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#0A0E17] overflow-hidden aspect-[16/10] shadow-inner">
                <Image
                  src="/projects/achievers-hero.jpg"
                  alt="Custom Website Interface Preview"
                  fill
                  className="object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-black/30" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="font-medium">Multi-Page &amp; Storefront</span>
                  <span className="text-[#3B82F6] font-semibold">Custom CMS</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Custom Website / E-commerce')
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#F8FAFC] border border-white/[0.18] hover:border-white/[0.35] hover:bg-white/[0.06] transition-all cursor-pointer group/btn"
              >
                <span>Discuss Custom Website</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Service 3: Mobile App Development (Col Span 5) */}
          <div className="md:col-span-5 group relative rounded-3xl border border-white/[0.08] bg-[#101521] p-7 sm:p-9 flex flex-col justify-between overflow-hidden hover:border-[#FF7A1A]/50 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A1A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF7A1A]/15 transition-all" />

            <div>
              <div className="flex items-center gap-2.5 text-[#FF7A1A] mb-3">
                <Smartphone className="w-5 h-5" />
                <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
                  Mobile App Development
                </h3>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Thoughtfully designed mobile applications with intuitive user experiences.
              </p>

              {/* Mobile App Screen Mockup Preview */}
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#0A0E17] p-5 flex items-center justify-center min-h-[220px]">
                <div className="w-44 rounded-2xl border-2 border-white/20 bg-[#080B12] p-3 shadow-2xl relative">
                  <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-2" />
                  <div className="space-y-2 py-1">
                    <div className="h-10 rounded-lg bg-gradient-to-r from-[#0163FF]/30 to-[#FF7A1A]/20 flex items-center px-2.5 justify-between">
                      <span className="text-[10px] font-bold text-white">MKC Student Portal</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="h-10 rounded bg-white/[0.05] p-1.5 flex flex-col justify-between">
                        <span className="text-[8px] text-[#94A3B8]">Courses</span>
                        <span className="text-[9px] font-semibold text-white">Interactive</span>
                      </div>
                      <div className="h-10 rounded bg-white/[0.05] p-1.5 flex flex-col justify-between">
                        <span className="text-[8px] text-[#94A3B8]">Live Tests</span>
                        <span className="text-[9px] font-semibold text-white">Realtime</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around pt-2 mt-1 border-t border-white/10 text-[8px] text-[#94A3B8]">
                    <span>Home</span>
                    <span>Lectures</span>
                    <span>Profile</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Mobile App Development')
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#F8FAFC] border border-white/[0.18] hover:border-white/[0.35] hover:bg-white/[0.06] transition-all cursor-pointer group/btn"
              >
                <span>Discuss Mobile App</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Service 4: Software Solutions (Col Span 7) */}
          <div className="md:col-span-7 group relative rounded-3xl border border-white/[0.08] bg-[#101521] p-7 sm:p-9 flex flex-col justify-between overflow-hidden hover:border-[#0163FF]/50 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0163FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0163FF]/15 transition-all" />

            <div>
              <div className="flex items-center gap-2.5 text-[#0163FF] mb-3">
                <Cpu className="w-5 h-5" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                  Software Solutions
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl mb-6">
                Custom business platforms and software, including CRM and ERP solutions.
              </p>

              {/* Software Interface Preview */}
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#0A0E17] p-5 shadow-inner space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0163FF]" />
                    <span className="font-semibold text-white">Operations Management System</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">ERP · CRM Active</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-[#94A3B8] block mb-1">Pipeline Analytics</span>
                    <span className="text-sm font-bold text-white">Lead Tracking</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-[#94A3B8] block mb-1">Resource Planning</span>
                    <span className="text-sm font-bold text-white">Automation</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0163FF]/10 border border-[#0163FF]/20">
                    <span className="text-[10px] text-[#3B82F6] block mb-1">Access Security</span>
                    <span className="text-sm font-bold text-white">Role-Based</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() =>
                  scrollToSection('#contact', 'Software Solutions (CRM/ERP)')
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#F8FAFC] border border-white/[0.18] hover:border-white/[0.35] hover:bg-white/[0.06] transition-all cursor-pointer group/btn"
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
