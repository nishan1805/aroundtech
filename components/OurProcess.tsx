'use client';

import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  {
    title: 'Discover',
    description: 'Understand your business, audience, goals, and requirements.',
    icon: Search,
    accent: '#0163FF',
  },
  {
    title: 'Design',
    description: 'Plan the experience, design the interface, and refine the details.',
    icon: PenTool,
    accent: '#3B82F6',
  },
  {
    title: 'Develop',
    description:
      'Turn the approved design into a functional website, application, or software product.',
    icon: Code2,
    accent: '#8B5CF6',
  },
  {
    title: 'Launch',
    description:
      'Test the finished product, launch it, and address agreed follow-up improvements.',
    icon: Rocket,
    accent: '#FF7A1A',
  },
];

export function OurProcess() {
  return (
    <section
      id="process"
      className="py-24 bg-[#080B12] text-white border-b border-white/[0.08] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>HOW WE WORK</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Our Process
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            A connected four-step journey designed for clarity and execution.
          </p>
        </div>

        {/* Connected 4 Steps Layout */}
        <div className="relative">
          {/* Subtle connecting horizontal line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#0163FF]/30 via-[#8B5CF6]/30 to-[#FF7A1A]/30 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-7 rounded-3xl border border-white/[0.08] bg-[#101521] hover:border-white/[0.22] flex flex-col justify-between transition-all duration-300 shadow-lg shadow-black/30 hover:-translate-y-1"
                >
                  <div>
                    {/* Prominent Icon with glow accent */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 shadow-sm"
                      style={{
                        backgroundColor: `${s.accent}15`,
                        borderColor: `${s.accent}30`,
                        color: s.accent,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight mb-3 text-[#F8FAFC]">
                      {s.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#94A3B8]">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
