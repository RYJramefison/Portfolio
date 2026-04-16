"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp, Download } from "lucide-react";
import Link from "next/link";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { useLang } from "@/app/providers/lang-provider";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yarinaly-juninho-ramefison-1270432a1/",
    icon: <SiLinkedin size={14} />,
    hover:
      "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300/60 dark:hover:border-blue-500/40",
  },
  {
    label: "GitHub",
    href: "https://github.com/RYJramefison/",
    icon: <SiGithub size={14} />,
    hover:
      "hover:text-gray-900 dark:hover:text-white hover:border-gray-400/60 dark:hover:border-gray-400/40",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ryj.rafson",
    icon: <SiFacebook size={14} />,
    hover:
      "hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300/60 dark:hover:border-blue-400/40",
  },
];

// Uniquement les technos réellement utilisées dans CE projet
const stack = [
  { label: "Next.js", dot: "bg-gray-800 dark:bg-gray-200" },
  { label: "Tailwind CSS", dot: "bg-cyan-500" },
  { label: "Framer Motion", dot: "bg-purple-500" },
  { label: "i18n", dot: "bg-green-500" },
];

export default function Footer() {
  const { t } = useLang();

  const navLinks =
    t?.nav?.map((label: string, i: number) => ({
      label,
      href: `#${
        ["home", "skills", "projects", "background", "citation", "contact"][i]
      }`,
    })) ?? [];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 overflow-hidden border-t border-gray-200/80 dark:border-white/[0.06]">
      {/* Lueur subtile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-blue-400/40 dark:via-blue-600/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-12 bg-blue-600/[0.04] dark:bg-blue-700/10 blur-[40px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-6">
        {/* ── Grille 3 colonnes ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {/* Col 1 — Identité */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              <span className="font-bold text-sm text-gray-900 dark:text-gray-100 tracking-tight">
                {t.footer.name}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t.footer.description}
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs
              bg-blue-50 dark:bg-blue-700/10
              border border-blue-200/60 dark:border-blue-700/25
              text-blue-700 dark:text-blue-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
              {t.footer.available}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                <MapPin size={11} />
                {t.footer.location}
              </div>
              <a
                href="mailto:juninho.ramefison@gmail.com"
                className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={11} />
                {t.footer.email}
              </a>
            </div>
          </div>

          {/* Col 3 — Socials + CV */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              {t.footer.findMe}
            </h4>
            <div className="flex flex-col gap-1.5">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl
                    border border-gray-200/80 dark:border-white/[0.06]
                    bg-white dark:bg-white/[0.03]
                    text-sm text-gray-500 dark:text-gray-400
                    transition-all duration-200 ${s.hover}`}
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
            <a
              href="/cv/Juninho_RAMEFISON_CV.pdf"
              download
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl
                border border-blue-300/50 dark:border-blue-700/30
                bg-blue-50 dark:bg-blue-700/10
                text-sm text-blue-700 dark:text-blue-400
                hover:bg-blue-100 dark:hover:bg-blue-700/20
                transition-all duration-200"
            >
              <Download size={13} />
              {t.footer.downloadCv}
            </a>
          </div>
        </motion.div>

        {/* ── Stack utilisé ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-2 mb-6"
        >
          <span className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mr-1">
            {t.footer.builtWith}
          </span>
          {stack.map((tech, i) => (
            <div key={tech.label} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${tech.dot}`} />
              <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                {tech.label}
              </span>
              {i < stack.length - 1 && (
                <span className="text-gray-300 dark:text-gray-700 ml-1">·</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Séparateur ── */}
        <div className="border-t border-gray-200/80 dark:border-white/[0.07]" />

        {/* ── Bas ── */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-400 dark:text-gray-600 text-center sm:text-left">
            {t.footer.copyright}
          </p>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t.footer.backToTop}
            <span className="w-6 h-6 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:border-blue-400/60 dark:group-hover:border-blue-500/40 transition-colors">
              <ArrowUp size={10} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
