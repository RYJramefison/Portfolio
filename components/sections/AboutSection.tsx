'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Rocket } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import AchievementsPage from './AchievementsPage'

/* ══════════════════════════════════════════
   COMPOSANT PRINCIPAL
══════════════════════════════════════════ */

export default function AboutSection() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section
      id="about"
      className="relative py-28 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />

      {/* ── Hex grid ── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          aria-hidden
          className="w-full h-full opacity-[0.35]"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        >
          <defs>
            <pattern id="hex-about" x="0" y="0" width="52" height="60" patternUnits="userSpaceOnUse">
              <polygon
                points="26,4 50,18 50,46 26,60 2,46 2,18"
                fill="none"
                stroke="rgba(99,102,241,0.25)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-about)" />
        </svg>
      </div>

      {/* ── Top / Bottom lines ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      {/* ══ Inner ══ */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">

        {/* ── Header ── */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pill badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/60 dark:border-blue-800/40 bg-blue-50/80 dark:bg-blue-950/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              Profil professionnel
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-black tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl leading-[1.05]">
            {t.about?.title ?? (
              <>À <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Propos</span></>
            )}
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {t.about?.subtitle ??
              'Développeur Full Stack passionné par la création de solutions web modernes et performantes'}
          </p>
        </motion.div>

        {/* ── Bio cards ── */}
        <motion.div
          className="mb-16 grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          {[
            {
              label: 'Présentation',
              text: t.about?.description1 ??
                'Développeur web en formation (L3), je conçois et développe des applications web modernes et performantes. J\'interviens sur l\'ensemble du cycle de développement avec un fort accent sur la qualité, la simplicité et l\'expérience utilisateur.',
            },
            {
              label: 'Expertise',
              text: t.about?.description2 ??
                'Étudiant en informatique (L3), avec de solides bases en développement web, algorithmique et systèmes informatiques. Orienté vers la conception de solutions modernes, performantes et fiables.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/60 dark:bg-gray-900/60 p-7 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-500/[0.03] to-indigo-500/[0.03]" />
              <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-blue-400 to-indigo-500 opacity-60" />

              <p className="mb-3 pl-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
                {card.label}
              </p>
              <p className="pl-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════════════════
            CERTIFICATIONS & PARTICIPATIONS
        ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
        >
          {/* Section label */}
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
            Réalisations
          </p>

          {/* Intégration du composant AchievementsPage */}
          <div className="-mx-6">
            <AchievementsPage />
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="my-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-200/30 dark:to-blue-800/20" />
          <div className="w-1 h-1 rounded-full bg-blue-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
          <div className="w-1 h-1 rounded-full bg-blue-400/40" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-200/30 dark:to-blue-800/20" />
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <Rocket className="h-4 w-4 text-blue-500" />
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
              {t.about?.openToWork ?? 'Ouvert aux opportunités'}
            </p>
          </div>
          <p className="mb-8 text-xs text-gray-400 dark:text-gray-500">
            Stage, alternance ou projet freelance
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="mailto:juninho.ramefison@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-shadow duration-300"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="h-4 w-4" />
              {t.about?.contactMe ?? 'Me contacter'}
            </motion.a>

            <motion.a
              href="https://github.com/RYJramefison"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.1] bg-white dark:bg-gray-900 px-7 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-white/[0.18] transition-colors duration-200 shadow-sm"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="h-4 w-4" />
              {t.about?.github ?? 'GitHub'}
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}