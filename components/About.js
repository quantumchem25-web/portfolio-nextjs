"use client";

import { motion } from "framer-motion";
import { profile, skills, tools } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">digital reality</span>
          </h2>
          <p className="section-sub">{profile.bio}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Skills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[#9b9ba6]">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {tools.map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="px-4 py-2 rounded-full bg-[#16161f] border border-white/10 text-sm text-[#9b9ba6] hover:border-[#6366f1] hover:text-white transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="card !p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center text-2xl font-bold">
                  {profile.firstName[0]}
                </div>
                <div>
                  <div className="font-bold">{profile.name}</div>
                  <div className="text-sm text-[#9b9ba6]">{profile.location}</div>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-[#9b9ba6]">
                <div>📍 {profile.location}</div>
                <div>✉️ {profile.email}</div>
                <div>📞 {profile.phone}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
