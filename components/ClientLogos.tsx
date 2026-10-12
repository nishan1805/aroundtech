'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/theme-context';

interface ClientItem {
  name: string;
  logoSrc?: string;
  fallbackText: string;
  subtitle?: string;
}

const CLIENTS_LIST: ClientItem[] = [
  {
    name: 'Raipur Homes',
    logoSrc: '/logos/raipur-homes.svg',
    fallbackText: 'RAIPUR HOMES',
  },
  {
    name: 'Achievers International School',
    logoSrc: '/logos/achievers.png',
    fallbackText: 'ACHIEVERS INTERNATIONAL SCHOOL',
  },
  {
    name: 'Major Kalshi Classes Pvt. Ltd.',
    logoSrc: '/logos/mkc.png',
    fallbackText: 'MAJOR KALSHI CLASSES',
  },
  {
    name: 'Apply Education Loans',
    fallbackText: 'ApplyEducationLoans.com',
  },
  {
    name: 'Legal Masters',
    logoSrc: '/logos/legal-masters.svg',
    fallbackText: 'LEGAL MASTERS',
  },
  {
    name: 'Deliver My Tune',
    fallbackText: 'DeliverMyTune',
  },
  {
    name: 'Home Aura',
    logoSrc: '/logos/home-aura.png',
    fallbackText: 'HOME AURA',
  },
  {
    name: 'MapsMaster',
    fallbackText: 'MapsMaster',
  },
  {
    name: 'Cosmetic Krafts',
    logoSrc: '/logos/cosmetic-krafts.png',
    fallbackText: 'COSMETIC KRAFTS',
  },
  {
    name: 'Zippy Solar',
    logoSrc: '/logos/zippy-solar.png',
    fallbackText: 'ZIPPY SOLAR',
  },
  {
    name: 'ARCHI & AURA',
    fallbackText: 'ARCHI & AURA',
  },
  {
    name: 'Ansh Taxi Raipur',
    logoSrc: '/logos/ansh-taxi.png',
    fallbackText: 'ANSH TAXI',
  },
];

export function ClientLogos() {
  const { getSectionTheme } = useTheme();
  const sectionTheme = getSectionTheme('clients');
  const isLight = sectionTheme === 'light';

  // Double the list for infinite marquee scrolling
  const marqueeItems = [...CLIENTS_LIST, ...CLIENTS_LIST];

  return (
    <section
      id="clients"
      className={`py-12 border-y transition-colors overflow-hidden ${
        isLight
          ? 'bg-[#F8FAFC] border-slate-200 text-slate-800'
          : 'bg-[#0A0E17] border-white/[0.08] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${
            isLight ? 'text-slate-500' : 'text-[#94A3B8]'
          }`}
        >
          TRUSTED BY GROWING BUSINESSES &amp; INSTITUTIONS
        </p>
      </div>

      {/* Marquee Carousel */}
      <div className="relative w-full overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-10 w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none py-2 px-4">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 px-4 py-2 transition-opacity duration-200 opacity-80 hover:opacity-100"
              title={client.name}
            >
              {client.logoSrc ? (
                <div
                  className={`relative flex items-center justify-center h-10 max-w-[170px] ${
                    isLight
                      ? client.logoSrc.endsWith('.svg')
                        ? 'invert brightness-0 contrast-200'
                        : 'grayscale contrast-125'
                      : 'brightness-125'
                  }`}
                >
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={160}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <div
                  className={`font-semibold tracking-tight text-sm px-3 py-1.5 rounded-md border flex items-center gap-2 ${
                    isLight
                      ? 'border-slate-300/80 bg-white text-slate-800'
                      : 'border-white/[0.12] bg-white/[0.04] text-[#F8FAFC]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      idx % 2 === 0 ? 'bg-[#0163FF]' : 'bg-[#FF7A1A]'
                    }`}
                  />
                  <span className="whitespace-nowrap">{client.fallbackText}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
