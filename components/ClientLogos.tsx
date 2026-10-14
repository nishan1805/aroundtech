'use client';

import React from 'react';
import Image from 'next/image';

interface ClientItem {
  name: string;
  logoSrc?: string;
  fallbackText: string;
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
  // Double the list for infinite continuous marquee scrolling
  const marqueeItems = [...CLIENTS_LIST, ...CLIENTS_LIST];

  return (
    <section
      id="clients"
      className="py-16 border-y border-white/[0.08] bg-[#0A0E17] text-white overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Prominent heading as requested */}
        <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase text-slate-300">
          Trusted by Growing Businesses &amp; Institutions
        </h2>
      </div>

      {/* Marquee Carousel with enlarged, highly legible logos */}
      <div className="relative w-full overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex items-center gap-14 sm:gap-16 w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none py-3 px-4">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 px-2 py-1 transition-opacity duration-200 opacity-85 hover:opacity-100"
              title={client.name}
            >
              {client.logoSrc ? (
                <div className="relative flex items-center justify-center h-12 sm:h-14 max-w-[200px] brightness-125 hover:brightness-150 transition-all">
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={190}
                    height={52}
                    className="max-h-12 sm:max-h-14 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="font-semibold tracking-tight text-sm sm:text-base px-4 py-2 rounded-lg border border-white/[0.12] bg-white/[0.04] text-[#F8FAFC] flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
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
