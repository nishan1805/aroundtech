'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { PolicyModal } from './PolicyModals';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#080B12] text-[#94A3B8] border-t border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Main Simplified Footer Content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div className="space-y-3 max-w-md">
              <div className="text-white">
                <Logo size="md" />
              </div>
              <p className="text-sm leading-relaxed text-[#94A3B8]">
                Around Tech designs and builds digital products, websites, mobile
                applications, and custom software for businesses.
              </p>
            </div>

            {/* LinkedIn Social Icon Only */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/youraround/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Around Tech LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-white/[0.12] bg-white/[0.03] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#0163FF] hover:bg-[#0163FF]/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <div>
              © 2026 Around Tech Pvt. Ltd. All Rights Reserved.
            </div>

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
