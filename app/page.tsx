"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
import TikTokSection from "@/components/TikTokSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden aurora-bg"
    >
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <SocialLinks />
        <About />
        <Portfolio />
        <Testimonials />
        <TikTokSection />
        <Contact />
        <Footer />
      </div>
    </motion.main>
  );
}
