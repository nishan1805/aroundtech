'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import {
  Users,
  Target,
  Smartphone,
  Layers,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';

const WHY_POINTS = [
  {
    icon: Users,
    title: 'User-First Design',
    description: 'We design digital experiences around real user needs.',
    accent: '#0163FF',
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Every solution is shaped around your business and goals.',
    accent: '#3B82F6',
  },
  {
    icon: Smartphone,
    title: 'Responsive Experiences',
    description: 'Designed to work smoothly across screen sizes.',
    accent: '#06B6D4',
  },
  {
    icon: Layers,
    title: 'Design + Development',
    description: 'A connected process from interface design to implementation.',
    accent: '#8B5CF6',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Stay informed throughout the project.',
    accent: '#FF7A1A',
  },
  {
    icon: TrendingUp,
    title: 'Built to Grow',
    description: 'Maintainable digital products designed with future needs in mind.',
    accent: '#10B981',
  },
];

export function WhyChooseUs() {
  const { getSectionTheme } = useTheme();
  const sectionTheme = getSectionTheme('whyUs');
  const isLight = sectionTheme === 'light';

  return (
    <section
      id="why-us"
      className={`py-24 transition-colors ${
        isLight
          ? 'bg-[#F8FAFC] text-slate-900 border-b border-slate-200'
          : 'bg-[#080B12] text-white border-b border-white/[0.08]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>WHY US</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-[#F8FAFC]'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Why Choose Around Tech
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-[#94A3B8]'
            }`}
          >
            Thoughtful design and reliable development, working together.
          </p>
        </div>

        {/* 6 Concise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-[#0163FF]/30 shadow-sm'
                    : 'bg-[#101521] border-white/[0.08] hover:border-white/[0.2] shadow-lg shadow-black/30'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${point.accent}15`,
                      borderColor: `${point.accent}30`,
                      color: point.accent,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-semibold ${
                      isLight ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold tracking-tight mb-2 ${
                    isLight ? 'text-slate-900' : 'text-[#F8FAFC]'
                  }`}
                >
                  {point.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-[#94A3B8]'
                  }`}
                >
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
