'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills

  const [activeIndex, setActiveIndex] = useState(0)
  const [tabDirection, setTabDirection] = useState<1 | -1>(1)
  const activeCategory = t.categories[activeIndex]

  const ITEMS_PER_PAGE = 6
  const [page, setPage] = useState(0)
  const [pageDirection, setPageDirection] = useState<1 | -1>(1)

  const totalPages = Math.ceil(activeCategory.skills.length / ITEMS_PER_PAGE)
  const visibleSkills = activeCategory.skills.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  )

  useEffect(() => { setPage(0) }, [activeIndex])

  const switchTab = (index: number) => {
    if (index === activeIndex) return
    setTabDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const pageVariants = {
    initial: (d: number) => ({ opacity: 0, x: d > 0 ? 32 : -32 }),
    animate: { opacity: 1, x: 0 },
    exit:    (d: number) => ({ opacity: 0, x: d > 0 ? -32 : 32 }),
  }

  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">

      {/* ── Ligne déco haut ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      {/* ── Cercle déco fond ── */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/[0.04] dark:bg-blue-500/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-600/[0.03] dark:bg-blue-500/[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.subtitle}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            {t.description}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-700/20 to-transparent" />
        </motion.div>

        {/* ── Layout principal : sidebar + contenu ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">

          {/* ── Sidebar : navigation catégories ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex lg:flex-col gap-2 flex-wrap lg:flex-nowrap"
          >
            {t.categories.map((cat, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={cat.title}
                  onClick={() => switchTab(index)}
                  className={`
                    group relative flex items-center gap-3 px-4 py-3 rounded-xl
                    text-sm font-medium transition-all duration-200 text-left
                    ${isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-gray-100/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50'
                    }
                  `}
                >
                  {/* Pill active animée */}
                  {isActive && (
                    <motion.span
                      layoutId="skill-tab-bg"
                      className="absolute inset-0 rounded-xl bg-blue-600 -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <span className={`relative flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                    ${isActive ? 'bg-white/20' : 'bg-white dark:bg-gray-700/60 group-hover:bg-white dark:group-hover:bg-gray-700'}`}
                  >
                    <Image
                      src={cat.icon}
                      alt={cat.title}
                      width={16}
                      height={16}
                      className={isActive ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert dark:opacity-70'}
                    />
                  </span>

                  <span className="relative">{cat.title}</span>

                  {/* Nombre de skills */}
                  <span className={`relative ml-auto text-xs px-1.5 py-0.5 rounded-md font-semibold
                    ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* ── Contenu catégorie active ── */}
          <AnimatePresence mode="wait" custom={tabDirection}>
            <motion.div
              key={activeCategory.title}
              custom={tabDirection}
              initial={{ opacity: 0, x: tabDirection * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: tabDirection * -24 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="rounded-2xl border border-gray-200/80 dark:border-white/[0.06] bg-white dark:bg-gray-900 shadow-sm dark:shadow-black/30 overflow-hidden"
            >
              {/* ── En-tête de la carte ── */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100 dark:border-white/[0.05]">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-600/20">
                  <Image
                    src={activeCategory.icon}
                    alt={activeCategory.title}
                    width={22}
                    height={22}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                    {activeCategory.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>
                {/* Indicateur page */}
                {totalPages > 1 && (
                  <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                    {page + 1} / {totalPages}
                  </span>
                )}
              </div>

              {/* ── Grille skills ── */}
              <div className="relative p-6">

                {/* Flèche gauche */}
                {activeCategory.skills.length > ITEMS_PER_PAGE && page > 0 && (
                  <button
                    onClick={() => { setPageDirection(-1); setPage((p) => p - 1) }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all hover:scale-105"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                )}

                {/* Flèche droite */}
                {activeCategory.skills.length > ITEMS_PER_PAGE && page < totalPages - 1 && (
                  <button
                    onClick={() => { setPageDirection(1); setPage((p) => p + 1) }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all hover:scale-105"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}

                <AnimatePresence mode="wait" custom={pageDirection}>
                  <motion.ul
                    key={page}
                    custom={pageDirection}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="grid grid-cols-3 sm:grid-cols-6 gap-3"
                  >
                    {visibleSkills.map((skill, i) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        role="link"
                        tabIndex={0}
                        onClick={() => window.open(skill.documentation, '_blank')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            window.open(skill.documentation, '_blank')
                          }
                        }}
                        style={{ ['--skill-color' as any]: skill.color }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                        className="group relative aspect-square rounded-2xl cursor-pointer flex flex-col items-center justify-center gap-2 p-3 transition-all duration-300 bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-white/[0.06] hover:border-[rgba(var(--skill-color),0.5)] hover:shadow-lg dark:hover:shadow-black/30 overflow-hidden"
                      >
                        {/* Fond couleur skill au hover */}
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                          style={{ background: `rgba(${skill.color}, 0.08)` }}
                        />

                        {/* Lueur */}
                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span
                            className="absolute -top-4 -left-4 w-16 h-16 rounded-full blur-2xl"
                            style={{ background: `rgba(${skill.color}, 0.3)` }}
                          />
                        </span>

                        {/* Icône */}
                        <span className="relative z-10">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="object-contain transition-all duration-300 group-hover:scale-110"
                            style={{
                              filter: `drop-shadow(0 0 8px rgba(${skill.color}, 0))`,
                            }}
                          />
                        </span>

                        {/* Nom */}
                        <span className="relative z-10 text-[11px] font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200 text-center leading-tight">
                          {skill.name}
                        </span>

                        {/* Badge Main */}
                        {skill.primary && (
                          <span
                            className="absolute top-1.5 right-1.5 z-20 text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-blue-600 text-white group-hover:scale-110 transition-transform duration-200"
                            style={{}}
                          >
                            Main
                          </span>
                        )}

                        {/* Lien externe discret */}
                        <span className="absolute bottom-1.5 right-1.5 z-20 opacity-0 group-hover:opacity-60 transition-opacity duration-200">
                          <ExternalLink className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400" />
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>

                {/* ── Dots pagination ── */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-1.5 mt-5">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setPageDirection(i > page ? 1 : -1); setPage(i) }}
                        className={`rounded-full transition-all duration-300 ${
                          i === page
                            ? 'w-5 h-1.5 bg-blue-600'
                            : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* ── Footer carte : légende ── */}
              <div className="px-6 py-3 border-t border-gray-100 dark:border-white/[0.05] flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Main — technologie principale
                  </span>
                </div>
                <div className="flex items-center gap-1.5 ml-auto">
                  <ExternalLink className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    Cliquez pour la documentation
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}