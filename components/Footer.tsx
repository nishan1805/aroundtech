'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { PolicyModal } from './PolicyModals';
import { useTheme } from '@/lib/theme-context';
import { Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  const { scrollToSection } = useTheme();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#080B12] text-[#94A3B8] border-t border-white/[0.08] relative overflow-hidden transition-colors">
        {/* Soft Background Gradient Ambience */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0163FF]/20 via-[#0163FF]/10 to-[#FF7A1A]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Top Merged CTA Section */}
          <div className="pb-14 border-b border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-2.5">
                READY FOR THE NEXT EVOLUTION?
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]"
                style={{ textWrap: 'balance' }}
              >
                Let&apos;s Build Something{' '}
                <span className="bg-gradient-to-r from-[#0163FF] via-[#3B82F6] to-[#FF7A1A] bg-clip-text text-transparent">
                  Exceptional.
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Partner with Around Tech for thoughtful UI/UX design, modern websites,
                and robust business applications.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0163FF] hover:bg-[#0052d9] shadow-lg shadow-[#0163FF]/30 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Main Simplified Footer Branding & Social */}
          <div className="py-12 border-b border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-md">
              <a
                href="#top"
                onClick={handleLogoClick}
                className="inline-block text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0163FF] rounded-lg cursor-pointer"
                aria-label="Return to top"
              >
                <Logo size="md" />
              </a>
              <p className="text-sm leading-relaxed text-[#94A3B8]">
                Around Tech designs and builds digital products, websites, mobile
                applications, and custom software for businesses.
              </p>
            </div>

            {/* LinkedIn Social Icon */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/youraround/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Around Tech LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-white/[0.12] bg-white/[0.03] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#0163FF] hover:bg-[#0163FF]/10 transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <div>© 2026 Around Tech Pvt. Ltd. All Rights Reserved.</div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <p>
          Around Tech Pvt. Ltd. (&ldquo;Around Tech&rdquo;) is committed to protecting your
          privacy. This Privacy Policy outlines our practices regarding information
          collected through our website and client communications.
        </p>
        <h4 className="font-semibold text-white mt-3">Information Collection</h4>
        <p>
          We only collect contact details (such as your name, business name, and phone
          number) when you voluntarily submit an enquiry via our form or WhatsApp to
          discuss prospective design and development services.
        </p>
        <h4 className="font-semibold text-white mt-3">Use of Information</h4>
        <p>
          Submitted details are used solely to communicate with you regarding your project
          inquiry, assess technical requirements, and provide scope proposals. We do
          not sell, rent, or distribute your personal information to third parties.
        </p>
        <h4 className="font-semibold text-white mt-3">Contact</h4>
        <p>
          For privacy questions, please email us at{' '}
          <a href="mailto:hello@youraround.com" className="text-[#0163FF] hover:underline">
            hello@youraround.com
          </a>.
        </p>
      </PolicyModal>

      {/* Terms of Service Modal */}
      <PolicyModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms of Service"
      >
        <p>
          Welcome to Around Tech Pvt. Ltd. By accessing our website, you agree to comply
          with and be bound by these terms.
        </p>
        <h4 className="font-semibold text-white mt-3">Services &amp; Engagements</h4>
        <p>
          All professional design and development deliverables, timelines, and payment
          terms are defined under individual written agreements and client scopes of work.
          Informational materials on this website are for demonstration and enquiry
          purposes.
        </p>
        <h4 className="font-semibold text-white mt-3">Intellectual Property</h4>
        <p>
          The Around Tech brand, logo mark, design system, and proprietary website
          materials are the property of Around Tech Pvt. Ltd. Client trademarks and
          portfolio screenshots belong to their respective registered owners.
        </p>
        <h4 className="font-semibold text-white mt-3">Enquiries</h4>
        <p>
          To discuss a project or agreement, please reach out via our contact form or
          at{' '}
          <a href="mailto:hello@youraround.com" className="text-[#0163FF] hover:underline">
            hello@youraround.com
          </a>.
        </p>
      </PolicyModal>
    </>
  );
}
