"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";
import { services } from "@/lib/data";

const icons = { code: Code2, palette: Palette, rocket: Rocket, smartphone: Smartphone };

export default function Services() {
  return (
    <section id="services" className="section bg-[#0d0d14]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">
            Services that <span className="gradient-text">deliver value</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || Code2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1] group-hover:bg-gradient-to-br group-hover:from-[#6366f1] group-hover:to-[#a855f7] group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold mt-6">{service.title}</h3>
                <p className="text-[#9b9ba6] mt-3 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
