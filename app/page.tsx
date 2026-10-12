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
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080B12] text-white selection:bg-[#0163FF]/30 selection:text-white flex flex-col font-sans antialiased">
        {/* 1. Header and navigation */}
        <Navbar />

        <main className="flex-1">
          {/* 2. Hero */}
          <Hero />

          {/* 3. Client logo showcase */}
          <ClientLogos />

          {/* 4. Services */}
          <Services />

          {/* 5. Selected work / portfolio (13 cards) */}
          <SelectedWork />

          {/* 6. Why Choose Around Tech (6 points) */}
          <WhyChooseUs />

          {/* 7. Our Process (4 clear steps) */}
          <OurProcess />

          {/* 8. Pricing (2 packages) */}
          <Pricing />

          {/* 9. FAQs (8-10 questions) */}
          <Faq />

          {/* 10. Contact Us (WhatsApp enquiry form) */}
          <ContactUs />

          {/* 11. Existing final CTA */}
          <FinalCta />
        </main>

        {/* 12. Simplified footer */}
        <Footer />

        {/* Floating WhatsApp and Call Actions */}
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}
