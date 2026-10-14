'use client';

import React from 'react';
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
  return (
    <section
      id="why-us"
      className="py-24 bg-[#080B12] text-white border-b border-white/[0.08] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>WHY US</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Why Choose Around Tech
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            Thoughtful design and reliable development, working together.
          </p>
        </div>

        {/* 6 Concise Cards without numeric counts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="p-7 rounded-3xl border border-white/[0.08] bg-[#101521] hover:border-white/[0.2] transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-black/30"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-6"
                  style={{
                    backgroundColor: `${point.accent}15`,
                    borderColor: `${point.accent}30`,
                    color: point.accent,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2 text-[#F8FAFC]">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
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
