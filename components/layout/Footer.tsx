"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiFacebook, SiGithub, SiLinkedin, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">

      {/* 🔥 Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black to-black" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12">

        {/* 🧑‍💻 INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Juninho
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Développeur full-stack spécialisé dans la création d'interfaces
            haut de gamme et d'architectures scalables. Basé à Madagascar,
            disponible partout.
          </p>

          {/* 🌐 Socials */}
          <div className="pt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://www.linkedin.com" target="_blank">
                <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition">
                  <SiLinkedin className="text-blue-600" size={18} />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank">
                <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition">
                  <SiGithub size={18} />
                  GitHub
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition">
                  <SiFacebook className="text-blue-500" size={18} />
                  Facebook
                </Button>
              </Link>
            </div>
          </div>

          {/* 📍 Location + Email */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Madagascar
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              juninho.ramefison@gmail.com
            </div>
          </div>
        </motion.div>

        {/* 🧠 TECH STACK SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-sm tracking-widest text-gray-400 mb-6">
            TECHNOLOGIES UTILISÉES
          </h3>

          <div className="flex justify-center flex-wrap gap-6">
            
            {/* Next.js */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl 
              bg-white/5 border border-white/10 backdrop-blur-lg 
              hover:border-white transition">
              <SiNextdotjs size={20} />
              <span className="text-sm text-gray-200">Next.js</span>
            </div>

            {/* Tailwind */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl 
              bg-white/5 border border-white/10 backdrop-blur-lg 
              hover:border-cyan-400 transition">
              <SiTailwindcss size={20} className="text-cyan-400" />
              <span className="text-sm text-gray-200">Tailwind CSS</span>
            </div>

            {/* i18n */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl 
              bg-white/5 border border-white/10 backdrop-blur-lg 
              hover:border-green-400 transition">
              🌍
              <span className="text-sm text-gray-200">
                i18n Translation
              </span>
            </div>

          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-20 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2026 Juninho. Tous droits réservés.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            Retour en haut de page
            <ArrowUpRight size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
