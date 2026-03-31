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

  // Carte actuellement retournée
  const [flipped, setFlipped] = useState<number | null>(null)

  const toggle = (index: number) =>
    setFlipped((prev) => (prev === index ? null : index))

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
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            {t.description}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-700/20 to-transparent" />
        </motion.div>

        {/* ── Hint ── */}
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

        {/* ── Grille de cards ── */}
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
    </section>
  )
}

/* ================== FLIP CARD ================== */

type Category = ReturnType<typeof translations['fr']['skills']['categories'][number] extends infer T ? () => T : never> extends () => infer R ? R : never

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      // Hauteur fixe nécessaire pour le flip 3D
      className="relative h-52 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={onFlip}
    >
      {/* Conteneur qui se retourne */}
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
          {/* Bande bleue haut */}
          <div className="absolute top-0 inset-x-0 h-1 bg-blue-600 rounded-t-2xl" />

          {/* Icône */}
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image
              src={category.icon}
              alt={category.title}
              width={24}
              height={24}
              className="object-contain dark:brightness-0 dark:invert dark:opacity-80"
            />
          </div>

          {/* Titre + description */}
          <div className="text-center space-y-1.5">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
              {category.title}
            </h3>
            <p className=" text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 text-xs">
              {category.description}
            </p>
          </div>

          {/* Nombre de techs + hint */}
          <div className="flex items-center gap-1.5 mt-auto">
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
              {category.skills.length} technologie{category.skills.length > 1 ? 's' : ''}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500">· cliquez pour voir</span>
          </div>
        </div>

        {/* ── Face arrière ── */}
        <div
          className="absolute inset-0 rounded-2xl border border-blue-200/60 dark:border-blue-600/20 bg-white dark:bg-gray-900 shadow-md shadow-blue-600/[0.07] flex flex-col p-5 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Bande bleue haut */}
          <div className="absolute top-0 inset-x-0 h-1 bg-blue-600 rounded-t-2xl" />

          {/* Titre */}
          <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 mt-1">
            {category.title}
          </p>

          {/* Grille de skills */}
          <div className="flex-1 grid grid-cols-3 gap-2 overflow-hidden">
            {category.skills.slice(0, 6).map((skill) => (
              <a
                key={skill.name}
                href={skill.documentation}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ ['--skill-color' as any]: skill.color }}
                className="group/skill relative flex flex-col items-center justify-center gap-1 p-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/[0.06] hover:border-[rgba(var(--skill-color),0.4)] hover:bg-[rgba(var(--skill-color),0.06)] transition-all duration-200"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={22}
                  height={22}
                  className="object-contain group-hover/skill:scale-110 transition-transform duration-200"
                />
                <span className="text-[9px] font-medium text-gray-600 dark:text-gray-400 text-center leading-tight truncate w-full text-center">
                  {skill.name}
                </span>
                {skill.primary && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
                )}
              </a>
            ))}
          </div>

          {/* Légende + retour */}
          <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100 dark:border-white/[0.05]">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
              <span className="text-[9px] text-gray-400 dark:text-gray-500">Principal</span>
            </div>
            <span className="text-[9px] text-gray-400 dark:text-gray-500 flex items-center gap-0.5">
              <ExternalLink className="w-2.5 h-2.5" />
              doc
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}