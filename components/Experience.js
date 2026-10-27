"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section bg-[#0d0d14]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Career</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:ml-auto md:pl-16"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-2 w-3.5 h-3.5 rounded-full bg-[#6366f1] shadow-[0_0_0_4px_rgba(99,102,241,0.2)] ${
                    i % 2 === 0
                      ? "left-[-7px] md:left-auto md:right-[-7px]"
                      : "left-[-7px]"
                  }`}
                />

                <div className="card">
                  <span className="text-xs uppercase tracking-wider text-[#6366f1] font-semibold">
                    {job.period}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{job.role}</h3>
                  <div className="text-[#9b9ba6] font-medium mt-1">{job.company}</div>
                  <p className="text-sm text-[#9b9ba6] mt-3 leading-relaxed">{job.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
