'use client';

import React, { createContext, useContext, useState } from 'react';

export interface AppContextType {
  selectedService: string;
  setSelectedService: (service: string) => void;
  scrollToSection: (id: string, service?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = useState<string>('Landing Page');

  const scrollToSection = (id: string, service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const targetId = id.replace('#', '');
    if (targetId === 'top' || targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedService,
        setSelectedService,
        scrollToSection,
      }}
    >
      <div className="dark bg-[#080B12] text-white min-h-screen">{children}</div>
    </AppContext.Provider>
  );
}

// Retain hook name for backwards compatibility
export function useTheme() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return {
    ...context,
    theme: 'dark' as const,
    toggleTheme: () => {},
    getSectionTheme: () => 'dark' as const,
  };
}
