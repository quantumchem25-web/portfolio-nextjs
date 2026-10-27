"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What people <span className="gradient-text">say about me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card relative"
            >
              <Quote size={32} className="text-[#6366f1]/30 mb-4" />
              <p className="text-[#9b9ba6] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-[#9b9ba6]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
