'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useTheme } from '@/lib/theme-context';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'FAQs', href: '#faqs', id: 'faqs' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const { theme, toggleTheme, scrollToSection } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 160;
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="shrink-0 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0163FF] rounded-lg"
          aria-label="Around Tech Home"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-0.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors rounded-full whitespace-nowrap ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/[0.1] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Changer Icon */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Current mode: ${theme}. Click to switch to ${
              theme === 'dark' ? 'Mixed Dark/Light' : 'Full Dark'
            } mode`}
            title={
              theme === 'dark'
                ? 'Theme: All Dark (click for Mixed mode)'
                : 'Theme: Mixed Dark/Light (click for All Dark mode)'
            }
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/[0.12] bg-white/[0.04] text-[#94A3B8] hover:text-white hover:border-[#0163FF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0163FF] cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <Moon className="w-4 h-4 text-[#FF7A1A]" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <Sun className="w-4 h-4 text-[#0163FF]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Let's Talk CTA */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0163FF] hover:bg-[#0052d9] shadow-sm shadow-[#0163FF]/25 hover:shadow-[#0163FF]/40 transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#080B12] border-b border-white/[0.1] px-4 pt-2 pb-6 space-y-2 shadow-2xl"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#0163FF]/15 text-[#0163FF] font-semibold'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">
                Mode: {theme === 'dark' ? 'All Dark' : 'Mixed Dark/Light'}
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs text-white flex items-center gap-1.5"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#FF7A1A]" />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#0163FF]" />
                    <span>Mixed</span>
                  </>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0163FF] hover:bg-[#0052d9] transition-all"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
