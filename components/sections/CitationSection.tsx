'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import SnowParticles from '../ui/SnowPartilcules'

export default function CitationSection() {
  const { lang } = useLang()
  const t = translations[lang] ?? translations.fr

  return (
    <section
      id="citation"
      className="relative overflow-hidden py-24 px-4 bg-white dark:bg-gray-950"
    >
      <SnowParticles />

      {/* Décos fond */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 dark:via-blue-700/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/[0.03] dark:bg-blue-500/[0.05] blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-blue-500/50" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase">
              {t.citation.badge}
            </span>
            <div className="w-5 h-px bg-blue-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.citation.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            {t.citation.subtitle}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-700/20 to-transparent" />
        </motion.div>

        {/* ── Card citation ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 shadow-sm dark:shadow-black/30 overflow-hidden"
        >
          {/* Bande bleue haut */}
          <div className="h-1 bg-blue-600 w-full" />

          <div className="p-10 md:p-14">

            {/* Icône quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center">
                <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </motion.div>

            {/* Citation */}
            <blockquote className="mb-10">
              <p className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed tracking-wide mb-8"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {t.citation.quote.lines.map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {line}
                  </motion.span>
                ))}
              </p>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-blue-100 dark:from-blue-900/40 via-gray-200 dark:via-gray-700 to-transparent mb-8" />
            </blockquote>

            {/* Auteur + tag */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar initiales */}
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">JR</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    {t.citation.author.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.citation.author.role}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20">
                {t.citation.tag}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer texte */}
        <motion.p
          className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8 leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t.citation.quoteFooter}
        </motion.p>
      </div>
    </section>
  )
}