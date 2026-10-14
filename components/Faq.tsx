'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS_LIST = [
  {
    question: 'What services does Around Tech offer?',
    answer:
      'We offer four core services: conversion-focused Landing Pages, Custom Websites and E-commerce stores, Mobile App Development (iOS and Android), and custom Software Solutions including CRM and ERP platforms.',
  },
  {
    question: 'Do you provide both design and development?',
    answer:
      'Yes. We provide complete end-to-end design and development, or standalone services depending on what your project requires.',
  },
  {
    question: 'Can you design a website or mobile app without developing it?',
    answer:
      'Absolutely. We frequently handle UI/UX design only—delivering high-fidelity Figma designs, interactive prototypes, and design systems ready for your in-house team to build.',
  },
  {
    question: 'How much does a website or digital product cost?',
    answer:
      'Our starter landing pages begin at ₹9,999. For custom business websites, mobile apps, and business software, pricing is based on the specific scope and feature requirements agreed upon.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Starter landing pages typically take around 2 weeks. Custom websites and digital products usually range from 4 to 12 weeks, depending on complexity and features.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes. Every digital experience we build is designed mobile-first and thoroughly tested across phones, tablets, laptops, and wide desktop displays.',
  },
  {
    question: 'Can you build custom software, CRM, or ERP solutions?',
    answer:
      'Yes. We engineer bespoke platforms, role-based admin panels, inventory management, customer portals, and internal business tools tailored to your operational workflows.',
  },
  {
    question: 'What information is needed to start a project?',
    answer:
      'We start with your core business goal, reference examples you admire, your target audience, and any existing brand assets or content you already have.',
  },
  {
    question: 'How do project revisions and feedback work?',
    answer:
      'We work in iterative stages. You review and sign off on wireframes and designs before development begins, ensuring transparency and alignment at each step.',
  },
  {
    question: 'How can I discuss a project or request a quote?',
    answer:
      'You can submit the enquiry form below, send us a message on WhatsApp (+91 9109919079), or call us directly. We will review your requirements and get in touch with you.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-24 bg-[#080B12] text-white border-b border-white/[0.08] transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            Straightforward answers to common questions about working with Around Tech.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#101521] border-[#0163FF]/50 shadow-lg'
                    : 'bg-[#101521]/70 border-white/[0.08] hover:border-white/[0.16]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0163FF]"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-semibold tracking-tight ${
                      isOpen ? 'text-[#F8FAFC]' : 'text-slate-200'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#0163FF] text-white'
                        : 'bg-white/[0.06] text-[#94A3B8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
