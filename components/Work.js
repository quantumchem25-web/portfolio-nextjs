"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            A selection of projects I&apos;ve built. Each one solved a real problem with clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="card group overflow-hidden !p-0"
            >
              {/* Cover */}
              <div
                className="relative h-52 overflow-hidden"
                style={{ background: project.gradient }}
              >
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-extrabold text-white/30 group-hover:scale-125 transition-transform duration-500">
                      {project.title[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center">
                    <Github size={16} />
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#6366f1] font-semibold">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold mt-2 group-hover:text-[#6366f1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#9b9ba6] mt-2 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#9b9ba6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
