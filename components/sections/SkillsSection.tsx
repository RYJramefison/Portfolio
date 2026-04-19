'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'
import { ExternalLink, RotateCcw, Layers } from 'lucide-react'

export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills
  const [flipped, setFlipped] = useState<number | null>(null)
  const toggle = (i: number) => setFlipped((prev) => (prev === i ? null : i))

  // Hexagones qui s'allument / s'éteignent (2 actifs à la fois)
  const HEX_COUNT = 24
  const [litHexes, setLitHexes] = useState<number[]>([3, 14])
  useEffect(() => {
    const pick = () => {
      const a = Math.floor(Math.random() * HEX_COUNT)
      let b = Math.floor(Math.random() * (HEX_COUNT - 1))
      if (b >= a) b++
      setLitHexes([a, b])
    }
    const id = setInterval(pick, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="skills" className="relative py-28 bg-white dark:bg-gray-950 overflow-hidden">

      {/* Ligne top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 dark:via-blue-700/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
            <Layers className="w-3 h-3" />
            {t.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-5 tracking-tight">
            {t.subtitle}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            {t.description}
          </p>
          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-blue-400/30 dark:via-blue-600/20 to-transparent" />
        </motion.div>

        {/* Hint + stat projets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
        >
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/[0.06] rounded-full px-4 py-2">
            <RotateCcw className="w-3.5 h-3.5" />
            Cliquez sur une carte pour découvrir les technologies
          </div>
          <Badge3D />
        </motion.div>

        {/* ── Grille 2 colonnes ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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

      {/* ── Grille hexagonale décorative (partie inférieure uniquement) ── */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none overflow-hidden" aria-hidden>
        <HexGrid litHexes={litHexes} total={HEX_COUNT} />
      </div>

      {/* ── Scrollbar custom + hex animations ── */}
      <style jsx global>{`
        .skills-scroll {
          scrollbar-width: thin;
          scrollbar-color: #bfdbfe transparent;
        }
        .skills-scroll::-webkit-scrollbar { width: 4px; }
        .skills-scroll::-webkit-scrollbar-track { background: transparent; margin: 8px 0; }
        .skills-scroll::-webkit-scrollbar-thumb { background: #bfdbfe; border-radius: 99px; }
        .skills-scroll::-webkit-scrollbar-thumb:hover { background: #60a5fa; }
        .dark .skills-scroll { scrollbar-color: #1e3a8a66 transparent; }
        .dark .skills-scroll::-webkit-scrollbar-thumb { background: #1e40af55; }
        .dark .skills-scroll::-webkit-scrollbar-thumb:hover { background: #3b82f6; }

        @keyframes hex-pulse {
          0%, 100% { opacity: 0.08; }
          50%       { opacity: 0.55; }
        }
        .hex-lit {
          animation: hex-pulse 1.8s ease-in-out;
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px) rotateX(8deg) rotateY(-4deg); }
          50%       { transform: translateY(-4px) rotateX(8deg) rotateY(-4deg); }
        }
        .badge-3d { animation: badge-float 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

/* ================== HEX GRID ================== */

function hexPath(cx: number, cy: number, r: number): string {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30)
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  })
  return `M ${pts.join(' L ')} Z`
}

function HexGrid({ litHexes, total }: { litHexes: number[]; total: number }) {
  const R = 108
  const cols = 8
  const rows = Math.ceil(total / cols)
  const W = cols * R * 1.75
  const H = rows * R * 2 * 0.87

  const hexes = Array.from({ length: total }, (_, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const cx = col * R * 1.75 + (row % 2 === 1 ? R * 0.875 : 0) + R
    const cy = row * R * 1.52 + R
    return { i, cx, cy }
  })

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg
        viewBox={`0 0 ${W + R} ${H + R}`}
        className="absolute inset-0 w-full h-full opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="hex-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {hexes.map(({ i, cx, cy }) => {
          const isLit = litHexes.includes(i)
          return (
            <path
              key={i}
              d={hexPath(cx, cy, R - 3)}
              fill={isLit ? '#3b82f6' : 'none'}
              stroke={isLit ? '#3b82f6' : '#93c5fd'}
              strokeWidth={isLit ? 1.5 : 0.6}
              opacity={isLit ? 0.35 : 0.08}
              filter={isLit ? 'url(#hex-glow)' : undefined}
              className={isLit ? 'hex-lit' : ''}
            />
          )
        })}
      </svg>
    </div>
  )
}

/* ================== BADGE 3D ================== */

function Badge3D() {
  return (
    <div className="badge-3d" style={{ perspective: '400px' }}>
      <div
        className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-2xl select-none"
        style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #1e40af 100%)',
          boxShadow: `
            0 1px 0 0 rgba(255,255,255,0.25) inset,
            0 -3px 0 0 rgba(0,0,0,0.35) inset,
            0 6px 20px rgba(37,99,235,0.45),
            0 2px 4px rgba(0,0,0,0.3)
          `,
          transform: 'rotateX(8deg) rotateY(-4deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Brillance top */}
        <div
          className="absolute inset-x-3 top-0 h-px rounded-full"
          style={{ background: 'rgba(255,255,255,0.4)' }}
        />
        {/* Icône */}
        <span className="text-base">🚀</span>
        {/* Texte */}
        <span
          className="text-sm font-black text-white tracking-wide"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
        >
          +6 projets terminés
        </span>
        {/* Dot animé */}
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      </div>
    </div>
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
  const primaries   = category.skills.filter((s) => s.primary)
  const secondaries = category.skills.filter((s) => !s.primary)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative cursor-pointer"
      style={{ perspective: '1200px', minHeight: '22rem' }}
      onClick={onFlip}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* ════════════════════════════
            FACE AVANT
        ════════════════════════════ */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-200/80 dark:border-white/[0.08] bg-white dark:bg-gray-900 shadow-lg dark:shadow-black/40 group hover:shadow-xl hover:border-blue-200/60 dark:hover:border-blue-700/30 transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Gradient déco haut */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-50/70 dark:from-blue-950/30 to-transparent" />

          {/* Barre top */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-700" />

          <div className="relative flex flex-col items-center justify-center gap-6 h-full p-10">

            {/* Icône */}
            <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/50 shadow-lg dark:shadow-black/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src={category.icon}
                alt={category.title}
                width={40}
                height={40}
                className="object-contain dark:brightness-0 dark:invert dark:opacity-80"
              />
            </div>

            {/* Texte */}
            <div className="text-center space-y-2.5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 max-w-xs">
                {category.description}
              </p>
            </div>

            {/* Badge bas */}
            <div className="mt-auto flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {category.skills.length} technologie{category.skills.length > 1 ? 's' : ''}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">· voir →</span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════
            FACE ARRIÈRE
        ════════════════════════════ */}
        <div
          className="absolute inset-0 rounded-3xl border border-blue-200/50 dark:border-blue-700/25 bg-white dark:bg-gray-900 shadow-xl shadow-blue-500/10 dark:shadow-black/40 flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Barre top */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-700 z-10" />

          {/* En-tête */}
          <div className="px-6 pt-7 pb-4 flex-shrink-0 flex items-center gap-3 border-b border-gray-100 dark:border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center flex-shrink-0">
              <Image
                src={category.icon}
                alt={category.title}
                width={20}
                height={20}
                className="object-contain dark:brightness-0 dark:invert dark:opacity-70"
              />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-none">
                {category.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {category.skills.length} technologies disponibles
              </p>
            </div>
          </div>

          {/* Corps scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 skills-scroll">

            {/* ── Technologies principales ── */}
            {primaries.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                    Principales
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {primaries.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} isPrimary />
                  ))}
                </div>
              </div>
            )}

            {/* Séparateur */}
            {primaries.length > 0 && secondaries.length > 0 && (
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.06]" />
                <span className="text-[10px] text-gray-300 dark:text-gray-600 font-bold tracking-widest uppercase">aussi</span>
                <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.06]" />
              </div>
            )}

            {/* ── Également ── */}
            {secondaries.length > 0 && (
              <div>
                {primaries.length === 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                      Technologies
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-1.5">
                  {secondaries.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 border-t border-gray-100 dark:border-white/[0.05] flex items-center justify-between flex-shrink-0 bg-gray-50/60 dark:bg-gray-900/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Principal</span>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 italic">
              cliquez pour la doc ↗
            </span>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

/* ================== SKILL ROW ================== */

interface SkillRowProps {
  skill: {
    name: string
    icon: string
    color: string
    documentation: string
    primary?: boolean
  }
  isPrimary?: boolean
}

function SkillRow({ skill, isPrimary }: SkillRowProps) {
  return (
    <a
      href={skill.documentation}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      style={{ ['--skill-color' as any]: skill.color }}
      className={`group flex items-center gap-3 rounded-xl transition-all duration-200 w-full
        ${isPrimary
          ? 'py-2.5 px-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200/80 dark:border-white/[0.07] hover:border-[rgba(var(--skill-color),0.45)] hover:bg-[rgba(var(--skill-color),0.06)] hover:shadow-sm'
          : 'py-2 px-2.5 border border-transparent hover:border-[rgba(var(--skill-color),0.25)] hover:bg-[rgba(var(--skill-color),0.05)]'
        }`}
    >
      {/* Icône */}
      <div
        className={`flex items-center justify-center rounded-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110
          ${isPrimary ? 'w-8 h-8' : 'w-7 h-7'}`}
        style={{
          background: `rgba(${skill.color}, ${isPrimary ? '0.13' : '0.09'})`,
          border: `1px solid rgba(${skill.color}, ${isPrimary ? '0.22' : '0.12'})`,
        }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={isPrimary ? 17 : 14}
          height={isPrimary ? 17 : 14}
          className="object-contain"
        />
      </div>

      {/* Nom */}
      <span
        className={`flex-1 truncate font-semibold transition-colors duration-150
          ${isPrimary
            ? 'text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white'
            : 'text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
          }`}
      >
        {skill.name}
      </span>

      {/* Lien externe au hover */}
      <ExternalLink
        className={`flex-shrink-0 opacity-0 group-hover:opacity-50 transition-opacity ${isPrimary ? 'w-3.5 h-3.5' : 'w-3 h-3'}`}
        style={{ color: `rgb(${skill.color})` }}
      />
    </a>
  )
}