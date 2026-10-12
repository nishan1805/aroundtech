'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '@/lib/projects-data';
import { useTheme } from '@/lib/theme-context';
import { ExternalLink, Smartphone, CheckCircle2, Clock } from 'lucide-react';

export function SelectedWork() {
  const { getSectionTheme } = useTheme();
  const sectionTheme = getSectionTheme('work');
  const isLight = sectionTheme === 'light';

  return (
    <section
      id="work"
      className={`py-24 transition-colors ${
        isLight
          ? 'bg-[#F8FAFC] text-slate-900 border-y border-slate-200'
          : 'bg-[#080B12] text-white border-y border-white/[0.08]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>SELECTED WORK</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-[#F8FAFC]'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Real Projects Built for Real Businesses.
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-[#94A3B8]'
            }`}
          >
            A curated showcase of 13 client engagements spanning UI/UX design,
            high-performance websites, and custom software.
          </p>
        </div>

        {/* 13 Project Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        {/* Row 1-4: 3 cols = 12 items. Row 5: 1 item aligned naturally without stretch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              isLight={isLight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  project,
  isLight,
}: {
  project: PortfolioProject;
  isLight: boolean;
}) {
  return (
    <article
      className={`group rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isLight
          ? 'bg-white border-slate-200 hover:border-[#0163FF]/50 shadow-sm'
          : 'bg-[#101521] border-white/[0.08] hover:border-white/[0.2] shadow-lg shadow-black/40'
      }`}
    >
      {/* Top Media / Preview Window */}
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden border-b ${
          isLight
            ? 'bg-slate-100 border-slate-200'
            : 'bg-[#0A0E17] border-white/[0.06]'
        }`}
      >
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.name} Hero Preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ) : project.isApp ? (
          /* Mobile App UI Screen Mockup Preview */
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#0A0E17] p-4">
            <div className="w-36 h-48 rounded-xl border-2 border-white/30 bg-[#080B12] p-2 flex flex-col justify-between shadow-2xl relative">
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
              <div className="space-y-1.5 my-auto text-center">
                <Smartphone className="w-5 h-5 mx-auto text-[#FF7A1A]" />
                <span className="text-[10px] font-bold text-white block">
                  MKC Student App
                </span>
                <span className="text-[9px] text-[#94A3B8] block">
                  Learning Portal UX
                </span>
              </div>
              <div className="flex justify-around pt-1 border-t border-white/10 text-[8px] text-[#94A3B8]">
                <span>Courses</span>
                <span>Tests</span>
                <span>Live</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#8B5CF6]/90 text-white shadow">
              Mobile App UI
            </div>
          </div>
        ) : (
          /* Clean Stylized Website Hero Preview with Logo / Brand Typography */
          <div
            className={`relative w-full h-full flex flex-col justify-between p-6 ${
              isLight
                ? 'bg-gradient-to-br from-slate-50 to-slate-200'
                : 'bg-gradient-to-br from-[#141B2D] via-[#0D121F] to-[#080B12]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span
                className={`text-[11px] font-mono ${
                  isLight ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {project.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '')}
              </span>
            </div>

            <div className="my-auto text-center space-y-2">
              {project.logo ? (
                <div className="flex justify-center max-h-8">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={140}
                    height={32}
                    className={`max-h-8 w-auto object-contain ${
                      isLight && project.logo.endsWith('.svg')
                        ? 'invert brightness-0 contrast-200'
                        : ''
                    }`}
                    unoptimized
                  />
                </div>
              ) : (
                <span
                  className={`text-lg font-bold tracking-tight block ${
                    isLight ? 'text-slate-800' : 'text-white'
                  }`}
                >
                  {project.name}
                </span>
              )}
              <span
                className={`text-xs block ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {project.workDelivered}
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-black/[0.06] dark:border-white/[0.06]">
              <span
                className={`font-mono ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Official Website
              </span>
              <span className="text-[#0163FF] font-semibold">Verified</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Status Labels */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.statusLabels.map((label) => {
              const isLiveBadge = label === 'LIVE';
              const isInDevBadge = label === 'IN DEVELOPMENT';
              return (
                <span
                  key={label}
                  className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                    isLiveBadge
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : isInDevBadge
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      : isLight
                      ? 'bg-slate-100 text-slate-700 border border-slate-200'
                      : 'bg-white/[0.06] text-[#94A3B8] border border-white/[0.1]'
                  }`}
                >
                  {label}
                </span>
              );
            })}
          </div>

          {/* Project Name */}
          <h3
            className={`text-xl font-bold tracking-tight mb-2 ${
              isLight ? 'text-slate-900' : 'text-[#F8FAFC]'
            }`}
          >
            {project.name}
          </h3>

          {/* Concise Description (~2 lines) */}
          <p
            className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
              isLight ? 'text-slate-600' : 'text-[#94A3B8]'
            }`}
          >
            {project.description}
          </p>

          {/* Work Delivered / Scope */}
          <div
            className={`text-xs py-2 px-3 rounded-lg mb-5 border ${
              isLight
                ? 'bg-slate-50 border-slate-200 text-slate-600'
                : 'bg-white/[0.03] border-white/[0.06] text-slate-300'
            }`}
          >
            <span
              className={`font-semibold block ${
                isLight ? 'text-slate-800' : 'text-white'
              }`}
            >
              Delivered:
            </span>
            <span>{project.workDelivered}</span>
          </div>
        </div>

        {/* Card Footer: CTA */}
        <div
          className={`pt-4 border-t flex items-center justify-between ${
            isLight ? 'border-slate-100' : 'border-white/[0.06]'
          }`}
        >
          {project.isApp ? (
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                isLight ? 'text-amber-700' : 'text-amber-400'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Development in Progress</span>
            </span>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group/link ${
                isLight
                  ? 'text-[#0163FF] hover:text-[#0052d9]'
                  : 'text-[#0163FF] hover:text-[#3B82F6]'
              }`}
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}

          <div className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
            {project.techTags.slice(0, 2).map((tag) => (
              <span key={tag} className="hidden sm:inline">
                {tag} ·
              </span>
            ))}
            <span>Verified</span>
          </div>
        </div>
      </div>
    </article>
  );
}
