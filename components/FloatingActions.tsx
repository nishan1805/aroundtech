'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingActions() {
  return (
    <aside
      aria-label="Direct Contact Actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none pointer-events-auto"
    >
      {/* Call Button */}
      <a
        href="tel:+919109919079"
        aria-label="Call Around Tech directly at +91 9109919079"
        title="Call +91 9109919079"
        className="w-12 h-12 rounded-full bg-[#0163FF] hover:bg-[#0052d9] text-white shadow-xl shadow-[#0163FF]/35 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12]"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919109919079"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Around Tech on WhatsApp"
        title="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/35 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12]"
      >
        <MessageCircle className="w-6 h-6 fill-white/20" />
      </a>
    </aside>
  );
}
