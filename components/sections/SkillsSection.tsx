'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'

export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills

  const [activeIndex, setActiveIndex] = useState(0)
  const activeCategory = t.categories[activeIndex]

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-2">
            {t.title}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
            {t.subtitle}
          </h2>
        </motion.div>

        {/* Navigation (rectangles en haut) */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {t.categories.map((cat, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={cat.title}
                onClick={() => setActiveIndex(index)}
                className={`
                  flex items-center gap-2 px-5 py-2 rounded-xl
                  text-sm font-medium transition-all
                  ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300'
                  }
                `}
              >
                <Image
                  src={cat.icon}
                  alt={cat.title}
                  width={18}
                  height={18}
                  className={isActive ? 'brightness-0 invert' : ''}
                />
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Card unique */}
        <AnimatePresence mode="wait">
  <motion.div
    key={activeCategory.title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl"
  >
    <div className="grid md:grid-cols-[120px_1fr_2fr] gap-8 items-center">

      {/* Icône catégorie */}
      <div className="flex justify-center">
        <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center">
          <Image
            src={activeCategory.icon}
            alt={activeCategory.title}
            width={40}
            height={40}
            className="brightness-0 invert"
          />
        </div>
      </div>

      {/* Texte catégorie */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {activeCategory.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {activeCategory.description}
        </p>
      </div>

      {/* Skills */}
      <ul className="grid sm:grid-cols-2 gap-3">
        {activeCategory.skills.map((skill) => (
          <motion.li
            key={skill.name}
            role="link"
            tabIndex={0}
            onClick={() => (window.location.href = skill.documentation)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = skill.documentation
              }
            }}
            style={{ ['--skill-color' as any]: skill.color }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className={`
              group relative overflow-hidden
              flex items-center justify-between
              px-4 py-2 rounded-lg cursor-pointer
              transition-all duration-300 ease-out
              hover:shadow-lg
              ${
                skill.primary
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              }
            `}
          >
            {/* Effet lumière */}
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-[rgba(var(--skill-color),0.35)] blur-2xl animate-pulse" />
              <span className="absolute bottom-0 right-4 h-10 w-10 rounded-full bg-[rgba(var(--skill-color),0.25)] blur-xl" />
            </span>

            {/* Nom */}
            <span className="relative z-20 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-x-1">
              {skill.name}
            </span>

            {/* Fond animé gauche → droite */}
            <span
              className="
                absolute inset-0 z-10
                origin-left scale-x-0
                group-hover:scale-x-100
                transition-transform duration-500
                ease-[cubic-bezier(0.4,0,0.2,1)]
                bg-[rgba(var(--skill-color),0.12)]
              "
            />

            {/* Icône */}
            <span className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={22}
                height={22}
                className="
                  object-contain
                  opacity-0 scale-90
                  group-hover:opacity-100 group-hover:scale-110
                  transition-all duration-300 ease-out delay-150
                  drop-shadow-[0_0_10px_rgba(var(--skill-color),0.8)]
                "
              />
            </span>

            {/* Badge */}
            {skill.primary && (
              <span className="relative z-20 text-xs px-2 py-0.5 rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:bg-[rgba(var(--skill-color),0.95)]">
                Main
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
</AnimatePresence>

      </div>
    </section>
  )
}
