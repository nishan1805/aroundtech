'use client';

import React from 'react';
import { ThemeProvider } from '@/lib/theme-context';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ClientLogos } from '@/components/ClientLogos';
import { Services } from '@/components/Services';
import { SelectedWork } from '@/components/SelectedWork';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { OurProcess } from '@/components/OurProcess';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080B12] text-white selection:bg-[#0163FF]/30 selection:text-white flex flex-col font-sans antialiased">
        {/* Header and navigation */}
        <Navbar />

        <main className="flex-1">
          {/* Hero */}
          <Hero />

          {/* Client logo showcase */}
          <ClientLogos />

          {/* Services */}
          <Services />

          {/* Selected work / portfolio (12 cards) */}
          <SelectedWork />

          {/* Why Choose Around Tech (6 points) */}
          <WhyChooseUs />

          {/* Our Process (4 connected steps) */}
          <OurProcess />

          {/* Pricing (2 packages) */}
          <Pricing />

          {/* FAQs (10 questions) */}
          <Faq />

          {/* Contact Us (Compact 2-row WhatsApp enquiry form) */}
          <ContactUs />
        </main>

        {/* Merged CTA & Simplified Footer */}
        <Footer />

        {/* Floating WhatsApp and Call Actions */}
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}
