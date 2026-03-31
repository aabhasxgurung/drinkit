"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#F0EDE8] border border-[#1A1409]/10 px-4 py-3 text-sm text-[#1A1409] placeholder:text-[#7A7068]/60 focus:outline-none focus:border-[#6B0F1A]/40 transition-colors";

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24">
      {/* Header */}
      <div className="px-6 md:px-14 py-14 border-b border-[#1A1409]/6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-[#6B0F1A]" />
          <p className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase">
            Get in Touch
          </p>
        </div>
        <h1
          className="font-serif italic text-[#1A1409] leading-none"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          Say <em className="text-[#6B0F1A]">Hello</em>
        </h1>
      </div>

      {/* Content */}
      <div className="px-6 md:px-14 py-16 grid md:grid-cols-5 gap-14 md:gap-20">
        {/* Left — Info */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Intro */}
            <div>
              <p className="text-[#1A1409] text-base md:text-lg leading-relaxed mb-4">
                Whether you're looking to stock your bar, explore our collection, or simply want
                to talk spirits — we'd love to hear from you.
              </p>
              <p className="text-[#7A7068] text-sm leading-relaxed">
                Based in Kathmandu, Nepal, we work with premium spirit brands from across the
                globe. Reach out and a member of our team will respond within 24 hours.
              </p>
            </div>

            {/* Info items */}
            {[
              {
                label: "Location",
                value: "Kathmandu, Nepal",
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                value: "@drinkit.np",
                href: "https://www.instagram.com/drinkit.np/",
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                    <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="mt-0.5 text-[#6B0F1A] shrink-0">{item.icon}</div>
                <div>
                  <p className="text-[#7A7068] text-[10px] tracking-[0.3em] uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1409] text-sm hover:text-[#6B0F1A] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#1A1409] text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="pt-4 border-t border-[#1A1409]/6">
              <p className="text-[#7A7068] text-[10px] tracking-[0.3em] uppercase mb-3">
                For Trade Enquiries
              </p>
              <p className="text-[#1A1409] text-sm leading-relaxed">
                Interested in carrying our portfolio or working with us?
                Select "Trade Enquiry" in the form and we'll be in touch.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F0EDE8] p-10 text-center"
              >
                <div className="w-12 h-12 border border-[#6B0F1A] rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-5 h-5 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif italic text-[#1A1409] text-2xl mb-2">
                  Message received
                </h3>
                <p className="text-[#7A7068] text-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#7A7068] text-[10px] tracking-[0.3em] uppercase mb-2">
                      Name <span className="text-[#6B0F1A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A7068] text-[10px] tracking-[0.3em] uppercase mb-2">
                      Email <span className="text-[#6B0F1A]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#7A7068] text-[10px] tracking-[0.3em] uppercase mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Enquiry</option>
                    <option value="trade">Trade Enquiry</option>
                    <option value="product">Product Information</option>
                    <option value="order">Order Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#7A7068] text-[10px] tracking-[0.3em] uppercase mb-2">
                    Message <span className="text-[#6B0F1A]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-[#7A7068] text-[10px] tracking-wider">
                    We respond within 24 hours.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-3 bg-[#6B0F1A] text-[#FAF8F5] px-8 py-3.5 text-[11px] tracking-[0.25em] uppercase hover:bg-[#8B1A2A] disabled:opacity-60 transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <span className="w-3.5 h-3.5 border border-[#FAF8F5]/40 border-t-[#FAF8F5] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <span>→</span></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="border-t border-[#1A1409]/6 px-6 md:px-14 py-10 bg-[#F0EDE8]">
        <p className="text-center text-[#7A7068] text-[10px] tracking-[0.4em] uppercase">
          Drinkit · Kathmandu, Nepal · Drink Responsibly
        </p>
      </div>
    </div>
  );
}
