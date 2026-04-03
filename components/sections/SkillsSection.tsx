'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'
import { ExternalLink, RotateCcw } from 'lucide-react'

export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills
  const [flipped, setFlipped] = useState<number | null>(null)
  const toggle = (i: number) => setFlipped((prev) => (prev === i ? null : i))

  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-gray-400 dark:text-gray-500 mb-8 flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3 h-3" />
          Cliquez sur une carte pour voir les technologies
        </motion.p>

        {/* ── Grille ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.categories.map((category, index) => (
            <FlipCard
              key={category.title}
              category={category}
              index={index}
              isFlipped={flipped === index}
              onFlip={() => toggle(index)}
            />
          ))}
        </div>
      </div>

      {/* ── Style marquee injecté ── */}
      <style jsx global>{`
        @keyframes marquee-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-up {
          animation: marquee-up 8s linear infinite;
        }
        .animate-marquee-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

/* ================== FLIP CARD ================== */

interface FlipCardProps {
  category: {
    title: string
    description: string
    icon: string
    skills: readonly {
      name: string
      icon: string
      color: string
      primary?: boolean
      documentation: string
    }[]
  }
  index: number
  isFlipped: boolean
  onFlip: () => void
}

function FlipCard({ category, index, isFlipped, onFlip }: FlipCardProps) {
  // On duplique les skills pour le défilement infini
  const scrollSkills = [...category.skills, ...category.skills]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="relative h-52 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={onFlip}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* ── Face avant ── */}
        <div
          className="absolute inset-0 rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 shadow-sm dark:shadow-black/20 flex flex-col items-center justify-center gap-4 p-6 group hover:border-blue-200/60 dark:hover:border-blue-700/30 hover:shadow-md transition-all duration-200"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-blue-600 rounded-t-2xl" />

          <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image src={category.icon} alt={category.title} width={24} height={24} className="object-contain dark:brightness-0 dark:invert dark:opacity-80" />
          </div>

          <div className="text-center space-y-1.5">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{category.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{category.description}</p>
          </div>

          <div className="flex items-center gap-1.5 mt-auto">
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
              {category.skills.length} technologie{category.skills.length > 1 ? 's' : ''}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500">· cliquez pour voir</span>
          </div>
        </div>

        {/* ── Face arrière — avec défilement vertical ── */}
        <div
          className="absolute inset-0 rounded-2xl border border-blue-200/60 dark:border-blue-600/20 bg-white dark:bg-gray-900 shadow-md shadow-blue-600/[0.07] flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-blue-600 rounded-t-2xl z-10" />

          {/* Titre fixe */}
          <div className="px-4 pt-5 pb-2 flex-shrink-0 z-10">
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              {category.title}
            </p>
          </div>

          {/* Masques de fondu haut/bas */}
          <div className="absolute inset-x-0 top-10 h-4 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-8 h-6 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Zone de défilement */}
          <div className="flex-1 overflow-hidden px-4 pb-2">
            <div className="animate-marquee-up">
              {scrollSkills.map((skill, i) => (
                <a
                  key={`${skill.name}-${i}`}
                  href={skill.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ ['--skill-color' as any]: skill.color }}
                  className="group/skill flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-[rgba(var(--skill-color),0.06)] transition-colors duration-150 w-full"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={18}
                    height={18}
                    className="object-contain flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-200"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 flex-1 truncate">
                    {skill.name}
                  </span>
                  {skill.primary && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  )}
                  <ExternalLink className="w-3 h-3 text-gray-300 dark:text-gray-600 flex-shrink-0 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-gray-100 dark:border-white/[0.05] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[9px] text-gray-400 dark:text-gray-500">Principal</span>
            </div>
            <span className="text-[9px] text-gray-400 dark:text-gray-500">survol = pause</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}