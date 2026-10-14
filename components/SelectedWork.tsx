'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '@/lib/projects-data';
import { ExternalLink, Smartphone, Clock } from 'lucide-react';

export function SelectedWork() {
  return (
    <section
      id="work"
      className="py-24 bg-[#080B12] text-white border-y border-white/[0.08] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>SELECTED WORK</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Real Projects Built for Real Businesses.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A curated showcase of 12 client engagements across UI/UX design,
            high-performance websites, and digital products.
          </p>
        </div>

        {/* 12 Projects Grid: 3 columns on desktop = 4 full rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group rounded-3xl border border-white/[0.08] bg-[#101521] hover:border-white/[0.22] flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1">
      {/* Top Preview Window */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-[#0A0E17]">
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.name} Preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101521]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ) : project.isApp ? (
          /* Mobile App UI Screen Mockup Preview */
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#0A0E17] p-4">
            <div className="w-36 h-48 rounded-2xl border-2 border-white/25 bg-[#080B12] p-2 flex flex-col justify-between shadow-2xl relative">
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
              <div className="space-y-1.5 my-auto text-center">
                <Smartphone className="w-6 h-6 mx-auto text-[#FF7A1A]" />
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
            <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#8B5CF6]/90 text-white shadow">
              Mobile App UX
            </div>
          </div>
        ) : (
          /* Clean Stylized Website Hero Preview with Logo / Brand Typography */
          <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#141B2D] via-[#0D121F] to-[#080B12]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="my-auto text-center space-y-2">
              {project.logo ? (
                <div className="flex justify-center max-h-8">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={140}
                    height={32}
                    className="max-h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <span className="text-lg font-bold tracking-tight block text-white">
                  {project.name}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/[0.06] text-slate-400">
              <span className="font-mono">Client Platform</span>
              <span className="text-[#0163FF] font-semibold">Web Experience</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Status Labels */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.statusLabels.map((label) => {
              const isLive = label === 'LIVE';
              const isInDev = label === 'IN DEVELOPMENT';
              const isDesignDev = label === 'DESIGN + DEVELOPMENT';
              return (
                <span
                  key={label}
                  className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded ${
                    isLive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : isInDev
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : isDesignDev
                      ? 'bg-[#0163FF]/15 text-[#3B82F6] border border-[#0163FF]/30'
                      : 'bg-white/[0.06] text-[#94A3B8] border border-white/[0.1]'
                  }`}
                >
                  {label}
                </span>
              );
            })}
          </div>

          {/* Project Name */}
          <h3 className="text-xl font-bold tracking-tight mb-2 text-[#F8FAFC]">
            {project.name}
          </h3>

          {/* Concise Description (~2 lines) */}
          <p className="text-sm leading-relaxed mb-4 line-clamp-2 text-[#94A3B8]">
            {project.description}
          </p>

          {/* Verified Technologies (clean tags) */}
          {project.techTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer: Tertiary Link (Visit Website) without displayed URL */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-start">
          {project.isApp ? (
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400/90 whitespace-nowrap py-1">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>In Development</span>
            </div>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0163FF] hover:text-[#3B82F6] transition-colors cursor-pointer whitespace-nowrap group/link py-1 focus-visible:outline-none focus-visible:underline"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 shrink-0" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
