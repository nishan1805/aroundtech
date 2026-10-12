'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your business, audience, goals, and requirements.',
    icon: Search,
    accent: '#0163FF',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Plan the experience, design the interface, and refine the details.',
    icon: PenTool,
    accent: '#3B82F6',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Turn the approved design into a functional website, application, or software product.',
    icon: Code2,
    accent: '#8B5CF6',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Test the finished product, launch it, and address agreed follow-up improvements.',
    icon: Rocket,
    accent: '#FF7A1A',
  },
];

export function OurProcess() {
  const { getSectionTheme } = useTheme();
  const sectionTheme = getSectionTheme('process');
  const isLight = sectionTheme === 'light';

  return (
    <section
      id="process"
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
            <span>HOW WE WORK</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-[#F8FAFC]'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Our Process
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-[#94A3B8]'
            }`}
          >
            A collaborative four-step journey designed for clarity and execution.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className={`relative p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-[#0163FF]/30 shadow-sm'
                    : 'bg-[#101521] border-white/[0.08] hover:border-white/[0.2] shadow-lg shadow-black/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-mono font-bold tracking-wider px-2 py-1 rounded"
                      style={{
                        backgroundColor: `${s.accent}15`,
                        color: s.accent,
                      }}
                    >
                      STAGE {s.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${s.accent}10`,
                        borderColor: `${s.accent}20`,
                        color: s.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold tracking-tight mb-2 ${
                      isLight ? 'text-slate-900' : 'text-[#F8FAFC]'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-[#94A3B8]'
                    }`}
                  >
                    {s.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-semibold ${
                    isLight ? 'border-slate-100 text-slate-400' : 'border-white/[0.06] text-[#64748B]'
                  }`}
                >
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
