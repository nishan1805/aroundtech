'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/theme-context';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'Landing Page',
  'Custom Website / E-commerce',
  'Mobile App Development',
  'Software Solutions (CRM/ERP)',
  'Other / Not Sure',
];

export function ContactUs() {
  const { selectedService, setSelectedService } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    company?: string;
    phone?: string;
    service?: string;
  }>({});

  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your business or company name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!selectedService) {
      newErrors.service = 'Please select a service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const message = [
      'Hello Around Tech,',
      '',
      "I'd like to enquire about your services.",
      '',
      `Name: ${formData.name.trim()}`,
      `Business/Company: ${formData.company.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Service Required: ${selectedService}`,
      '',
      'Please get in touch with me regarding my enquiry.',
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919109919079?text=${encodedMessage}`;

    // Browser-compatible window opening
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#080B12] text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Information & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0163FF] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0163FF]" />
                <span>CONTACT US</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]"
                style={{ textWrap: 'balance' }}
              >
                Let&apos;s Build Something Great Together.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                Send us an enquiry with your project details. We will connect with
                you on WhatsApp or phone to discuss your project.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0163FF]/15 border border-[#0163FF]/30 flex items-center justify-center text-[#0163FF] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] block mb-0.5">Phone Enquiries</span>
                  <div className="flex flex-col sm:flex-row sm:gap-4 gap-1">
                    <a
                      href="tel:+919109919079"
                      className="text-sm font-semibold text-white hover:text-[#0163FF] transition-colors"
                    >
                      +91 9109919079
                    </a>
                    <span className="hidden sm:inline text-white/20">·</span>
                    <a
                      href="tel:+918770454593"
                      className="text-sm font-semibold text-white hover:text-[#0163FF] transition-colors"
                    >
                      +91 8770454593
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A1A]/15 border border-[#FF7A1A]/30 flex items-center justify-center text-[#FF7A1A] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] block mb-0.5">Email</span>
                  <a
                    href="mailto:hello@youraround.com"
                    className="text-sm font-semibold text-white hover:text-[#FF7A1A] transition-colors"
                  >
                    hello@youraround.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[#94A3B8] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] block mb-0.5">Location</span>
                  <span className="text-sm font-semibold text-white">
                    Raipur (C.G.) – 492001
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Prompt */}
            <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-200">
                  Prefer chatting immediately on WhatsApp?
                </span>
              </div>
              <a
                href="https://wa.me/919109919079"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
              >
                <span>Chat Now</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Exactly 4 Fields WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.1] bg-[#101521] p-7 sm:p-10 shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Project Enquiry Form
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Fill the form below to open WhatsApp with your details prefilled.
                  </p>
                </div>
                <span className="text-xs text-[#0163FF] font-semibold bg-[#0163FF]/15 px-3 py-1 rounded-full">
                  Instant Preview
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Field 1: Name */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-[#FF7A1A]">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0A0E17] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/[0.12] focus:border-[#0163FF]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Business / Company Name */}
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Business / Company Name <span className="text-[#FF7A1A]">*</span>
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: undefined });
                    }}
                    placeholder="e.g. Apex Dynamics Pvt. Ltd."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0A0E17] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.company
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/[0.12] focus:border-[#0163FF]'
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.company}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Phone Number */}
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Phone Number <span className="text-[#FF7A1A]">*</span>
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0A0E17] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/[0.12] focus:border-[#0163FF]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Field 4: Service Required */}
                <div>
                  <label
                    htmlFor="service-select"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Service Required <span className="text-[#FF7A1A]">*</span>
                  </label>
                  <select
                    id="service-select"
                    required
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E17] border border-white/[0.12] text-sm text-white focus:outline-none focus:border-[#0163FF] transition-colors cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#101521] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Note about WhatsApp Review */}
                <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
                  Submitting will open WhatsApp with your enquiry prefilled. You can
                  review the details before pressing send.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-8 rounded-full text-sm font-semibold text-white bg-[#0163FF] hover:bg-[#0052d9] shadow-lg shadow-[#0163FF]/30 hover:shadow-[#0163FF]/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Opening WhatsApp...' : 'Send Enquiry'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
