"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mb-8"
      >
        {/* Glowing Ring + Camera Lens Effect */}
        <div className="absolute inset-0 rounded-full animate-glow-pulse blur-sm"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-electricBlue/30 to-transparent opacity-50 animate-pulse"></div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 glow">
          <img
            src="/assets/profile.jpg"
            alt="Mark Larga"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-gradient tracking-tight"
      >
        Mark Larga
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-[clamp(1.2rem,3vw,1.8rem)] text-silver/80 mb-3"
      >
        Official Website
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-lg md:text-xl text-silver/70 max-w-xl mb-8"
      >
        Photographer • Content Creator • Digital Artist • Storyteller
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <MagneticButton>
          <a
            href="https://tiktok.com/@marklarga"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-full text-white hover:glow transition-all duration-300"
          >
            Visit TikTok
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="#portfolio"
            className="glass px-8 py-3 rounded-full text-white hover:glow transition-all duration-300"
          >
            View Portfolio
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="#contact"
            className="glass px-8 py-3 rounded-full text-white hover:glow transition-all duration-300"
          >
            Contact Me
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
