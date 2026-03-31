"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp, Download } from "lucide-react";
import Link from "next/link";
import { SiFacebook, SiGithub, SiLinkedin, SiNextdotjs, SiTailwindcss, SiSpringboot, SiPostgresql } from "react-icons/si";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yarinaly-juninho-ramefison-1270432a1/",
    icon: <SiLinkedin size={16} />,
    color: "hover:text-blue-500 hover:border-blue-500/40",
  },
  {
    label: "GitHub",
    href: "https://github.com/RYJramefison/",
    icon: <SiGithub size={16} />,
    color: "hover:text-gray-100 hover:border-gray-400/40 dark:hover:text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ryj.rafson",
    icon: <SiFacebook size={16} />,
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
];

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

const stack = [
  { icon: <SiNextdotjs size={14} />, label: "Next.js" },
  { icon: <SiTailwindcss size={14} className="text-cyan-500" />, label: "Tailwind" },
  { icon: <SiSpringboot size={14} className="text-green-500" />, label: "Spring Boot" },
  { icon: <SiPostgresql size={14} className="text-blue-400" />, label: "PostgreSQL" },
  { icon: <span className="text-xs">🌍</span>, label: "i18n" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">

      {/* Lueur bleue subtile en haut — cohérente avec le hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-600/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-blue-700/10 blur-[60px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* ── Grille principale 3 colonnes ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14"
        >

          {/* Colonne 1 — Identité */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              <span className="text-white font-semibold text-lg tracking-tight">
                Juninho Ramefison
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Développeur Web Full Stack en formation (L3). Je conçois des
              applications modernes avec un fort accent sur la qualité et
              l'expérience utilisateur.
            </p>

            {/* Badge disponibilité */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/25 text-xs text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Disponible pour un stage / alternance
            </div>

            {/* Infos */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={13} />
                Madagascar, Antananarivo
              </div>
              <a
                href="mailto:juninho.ramefison@gmail.com"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Mail size={13} />
                juninho.ramefison@gmail.com
              </a>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Socials + CV */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Retrouvez-moi
            </h4>

            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/5 bg-white/[0.03] text-sm text-gray-400 transition-all duration-200 ${s.color}`}
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>

            <a
              href="/cv/Juninho_RAMEFISON_CV.pdf"
              download
              className="mt-2 flex items-center gap-2 px-4 py-2.5 rounded-lg border border-blue-700/30 bg-blue-700/10 text-sm text-blue-400 hover:bg-blue-700/20 hover:border-blue-600/50 transition-all duration-200"
            >
              <Download size={14} />
              Télécharger mon CV
            </a>
          </div>
        </motion.div>

        {/* ── Stack technique ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {stack.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-gray-500 hover:text-gray-300 hover:border-white/15 transition-all"
            >
              {tech.icon}
              {tech.label}
            </div>
          ))}
        </motion.div>

        {/* ── Séparateur ── */}
        <div className="border-t border-white/[0.07]" />

        {/* ── Bas de page ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © 2026 Juninho Ramefison — Construit avec{" "}
            <span className="text-gray-500">Next.js</span> &{" "}
            <span className="text-gray-500">Tailwind CSS</span>
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-400 transition-colors group"
          >
            Retour en haut
            <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
              <ArrowUp size={11} />
            </span>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}