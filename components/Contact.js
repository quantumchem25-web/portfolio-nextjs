"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section bg-[#0d0d14]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let&apos;s build something <span className="gradient-text">amazing together</span>
          </h2>
          <p className="section-sub">
            Have a project in mind? Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 mt-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
              { icon: MapPin, label: "Location", value: profile.location, href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="card flex items-center gap-4 !p-5 hover:!border-[#6366f1]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1] shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#9b9ba6]">{item.label}</div>
                  <div className="font-semibold mt-0.5">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="card !p-6">
              <div className="text-sm text-[#9b9ba6] mb-4">Follow me</div>
              <div className="flex gap-3">
                {Object.entries(profile.socials).map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs uppercase text-[#9b9ba6] hover:text-white hover:border-[#6366f1] transition-all"
                  >
                    {key.slice(0, 3)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 card space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-[#9b9ba6] mb-2 block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 focus:border-[#6366f1] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-[#9b9ba6] mb-2 block">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 focus:border-[#6366f1] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-[#9b9ba6] mb-2 block">Subject</label>
              <input
                type="text"
                required
                placeholder="Project inquiry"
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 focus:border-[#6366f1] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-[#9b9ba6] mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 focus:border-[#6366f1] outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              <Send size={16} />
              {sent ? "Message Sent! 🎉" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
