"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the hero content
      gsap.to(parallaxRef.current, {
        y: 120,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating gradient orbs
      gsap.to(".orb-1", {
        y: -60,
        x: 40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".orb-2", {
        y: 50,
        x: -30,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb-1 absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#6366f1]/20 blur-[120px]" />
      <div className="orb-2 absolute bottom-0 -right-32 w-[600px] h-[600px] rounded-full bg-[#a855f7]/15 blur-[120px]" />

      <div ref={parallaxRef} className="container relative z-10 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#6366f1] font-medium mb-6 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          Available for freelance work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <br />
          <span className="gradient-text">{profile.name.split(" ").slice(1).join(" ") || "Developer"}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xl md:text-2xl text-[#9b9ba6] max-w-2xl leading-relaxed"
        >
          {profile.role} — {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex items-center gap-5"
        >
          {[
            { icon: Github, href: profile.socials.github },
            { icon: Linkedin, href: profile.socials.linkedin },
            { icon: Twitter, href: profile.socials.twitter },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#9b9ba6] hover:text-white hover:border-[#6366f1] hover:-translate-y-1 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold">
                {stat.value}
                <span className="gradient-text">{stat.suffix}</span>
              </div>
              <div className="text-sm text-[#9b9ba6] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#9b9ba6] hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
