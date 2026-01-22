'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills

  const [activeIndex, setActiveIndex] = useState(0)
  const activeCategory = t.categories[activeIndex]
  const ITEMS_PER_PAGE = 4
const [page, setPage] = useState(0)
const [direction, setDirection] = useState<1 | -1>(1)

const totalPages = Math.ceil(
  activeCategory.skills.length / ITEMS_PER_PAGE
)

const visibleSkills = activeCategory.skills.slice(
  page * ITEMS_PER_PAGE,
  page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
)

useEffect(() => {
  setPage(0)
}, [activeIndex])

const pageVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
  }),
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
  }),
}

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
            {t.title}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
            {t.subtitle}
          </h2>
          <p className="text-gray-600 pt-5 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
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
    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
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
      <div className="relative">
  {/* Flèche gauche */}
  {activeCategory.skills.length > ITEMS_PER_PAGE && page > 0 && (
    <button
    onClick={() => {
      setDirection(-1)
      setPage((p) => p - 1)
    }}
    
    className="
    absolute -left-5 top-1/2 -translate-y-1/2 z-40
    h-8 w-8 rounded-full
    bg-white/80 dark:bg-gray-900/80
    backdrop-blur
    shadow-md
    flex items-center justify-center
    opacity-60
    hover:opacity-100
    hover:scale-105
    transition-all
  "
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  )}

  {/* Flèche droite */}
  {activeCategory.skills.length > ITEMS_PER_PAGE &&
    page < totalPages - 1 && (
      <button
      onClick={() => {
        setDirection(1)
        setPage((p) => p + 1)
      }}
      
      className="
      absolute -right-5 top-1/2 -translate-y-1/2 z-40
      h-8 w-8 rounded-full
      bg-white/80 dark:bg-gray-900/80
      backdrop-blur
      shadow-md
      flex items-center justify-center
      opacity-60
      hover:opacity-100
      hover:scale-105
      transition-all
    "
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    )}

<AnimatePresence mode="wait" custom={direction}>
  <motion.ul
    key={page}
    custom={direction}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="grid grid-cols-2 sm:grid-cols-4 gap-4"
  >
  {visibleSkills.map((skill) => (
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
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="
        group relative overflow-hidden
        aspect-square
        rounded-2xl cursor-pointer
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:shadow-xl
        bg-gray-100 dark:bg-gray-800
      "
    >
           {/* Effet lumière */}
           <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-[rgba(var(--skill-color),0.35)] blur-2xl animate-pulse" />
        <span className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-[rgba(var(--skill-color),0.25)] blur-xl" />
      </span>

      {/* Fond animé gauche → droite */}
      <span
        className="
          absolute inset-0 z-10
          origin-left scale-x-0
          group-hover:scale-x-100
          transition-transform duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]
          bg-[rgba(var(--skill-color),0.14)]
        "
      />

      {/* Icône */}
      <span className="relative z-20 flex flex-col items-center gap-2">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={36}
          height={36}
          className="
            object-contain
            transition-all duration-300 ease-out
            group-hover:scale-110
            drop-shadow-[0_0_12px_rgba(var(--skill-color),0.8)]
          "
        />

        {/* Nom du skill (apparait au hover) */}
        <span
          className="
            text-xs font-medium
            text-gray-800 dark:text-gray-200
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 ease-out
          "
        >
          {skill.name}
        </span>
      </span>

      {/* Badge Main */}
      {/* Badge Main */}
{skill.primary && (
  <span
    className="
      absolute top-2 right-2 z-30
      text-[10px] px-2 py-0.5 rounded-full
      bg-blue-600 text-white
      transition-all duration-300 ease-out
      group-hover:bg-[rgba(var(--skill-color),1)]
      group-hover:shadow-[0_0_10px_rgba(var(--skill-color),0.8)]
    "
  >
    Main
  </span>
)}


    </motion.li>
  ))}
  </motion.ul>
</AnimatePresence>

</div>


    </div>
  </motion.div>
</AnimatePresence>

      </div>
    </section>
  )
}
