'use client';

import React, { createContext, useContext, useState, useSyncExternalStore } from 'react';

export type ThemeMode = 'dark' | 'mixed';

export type SectionKey =
  | 'hero'
  | 'clients'
  | 'services'
  | 'work'
  | 'whyUs'
  | 'process'
  | 'pricing'
  | 'faqs'
  | 'contact'
  | 'finalCta'
  | 'footer';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  getSectionTheme: (section: SectionKey) => 'dark' | 'light';
  selectedService: string;
  setSelectedService: (service: string) => void;
  scrollToSection: (id: string, service?: string) => void;
}

const MIXED_THEME_MAP: Record<SectionKey, 'dark' | 'light'> = {
  hero: 'dark', // Hero MUST always remain dark in both modes
  clients: 'light',
  services: 'dark',
  work: 'light',
  whyUs: 'dark',
  process: 'light',
  pricing: 'dark',
  faqs: 'light',
  contact: 'dark',
  finalCta: 'dark',
  footer: 'dark',
};

// Event-driven store for theme synchronization without hydration mismatch
const themeListeners = new Set<() => void>();

function getThemeSnapshot(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';
  try {
    const val = localStorage.getItem('aroundtech-theme');
    if (val === 'dark' || val === 'mixed') return val;
  } catch {
    // Ignore storage issues
  }
  return 'dark';
}

function getThemeServerSnapshot(): ThemeMode {
  return 'dark';
}

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === 'aroundtech-theme') {
      callback();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    themeListeners.delete(callback);
    window.removeEventListener('storage', onStorage);
  };
}

function updateTheme(nextTheme: ThemeMode) {
  try {
    localStorage.setItem('aroundtech-theme', nextTheme);
  } catch {
    // Ignore storage issues
  }
  themeListeners.forEach((fn) => fn());
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const [selectedService, setSelectedService] = useState<string>('Landing Page');

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'mixed' : 'dark';
    updateTheme(nextTheme);
  };

  const getSectionTheme = (section: SectionKey): 'dark' | 'light' => {
    if (theme === 'dark') return 'dark';
    return MIXED_THEME_MAP[section] || 'dark';
  };

  const scrollToSection = (id: string, service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const targetId = id.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        getSectionTheme,
        selectedService,
        setSelectedService,
        scrollToSection,
      }}
    >
      <div className={theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
