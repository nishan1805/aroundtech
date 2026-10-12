import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
  showWordmark = true,
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: 'text-base' },
    md: { icon: 34, text: 'text-lg' },
    lg: { icon: 44, text: 'text-2xl' },
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}
    >
      <svg
        width={sizeMap.icon}
        height={sizeMap.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-6"
        aria-label="Around Tech Logo Mark"
      >
        <defs>
          <linearGradient
            id="orbitBlueGrad"
            x1="4"
            y1="8"
            x2="44"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163FF" />
            <stop offset="0.6" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#0141A8" />
          </linearGradient>
          <linearGradient
            id="accentOrangeGrad"
            x1="30"
            y1="12"
            x2="42"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9E4A" />
            <stop offset="1" stopColor="#FF7A1A" />
          </linearGradient>
          <filter
            id="glowFilter"
            x="0"
            y="0"
            width="48"
            height="48"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d="M10 24C10 16 16.5 10 24.5 10C32.5 10 39 16 39 24"
          stroke="url(#orbitBlueGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="1 3"
          opacity="0.35"
        />
        <path
          d="M8 29C6 24 9 17 17 12.5C25 8 36 9 41 16C44.5 21 42 28.5 35 34C28 39.5 17 41 11 36.5C8 34.2 6.5 31.8 7 29.5"
          stroke="url(#orbitBlueGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 28C14 26 14 22 17 19C21 15 28 15 32 18.5C35 21 35 25 32 28"
          stroke="#0163FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        <circle
          cx="34"
          cy="18"
          r="6.5"
          fill="url(#accentOrangeGrad)"
          filter="url(#glowFilter)"
        />
        <circle cx="32" cy="16" r="1.8" fill="#FFFFFF" opacity="0.9" />
        <circle cx="12" cy="30" r="3" fill="#0163FF" />
      </svg>

      {showWordmark && (
        <span
          className={`tracking-tight font-extrabold ${sizeMap.text} text-inherit`}
        >
          Around <span className="text-[#0163FF]">Tech</span>
        </span>
      )}
    </div>
  );
}
