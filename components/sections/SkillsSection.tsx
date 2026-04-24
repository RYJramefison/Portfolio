'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'
import { ExternalLink, Monitor, Server, BarChart3, Wrench } from 'lucide-react'

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Skill {
  name: string
  icon: string
  color: string
  primary?: boolean
  documentation: string
}

interface Category {
  title: string
  description: string
  icon: string
  skills: readonly Skill[]
}

/* ─────────────────────────────────────────────
   CATEGORY ICONS MAPPING
───────────────────────────────────────────── */
const CATEGORY_ICONS: Record<string, React.ComponentType<any>> = {
  'Front-End': Monitor,
  'Back-End': Server,
  'Pipelines Data': BarChart3,
  'Outils & Flux de travail': Wrench,
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1426 60%, #0a0f1e 100%)' }}
    >
      {/* Subtle radial glow top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24">

        {/* ══════════════════════════════════════
            BLOC 1 — My Skills
        ══════════════════════════════════════ */}
        <div>
          <SectionTitle>My Skills</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {t.categories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            BLOC 2 — My Tech Stack
        ══════════════════════════════════════ */}
        <div>
          <SectionTitle accent>My Tech Stack</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {t.categories.map((category, index) => (
              <TechStackCard key={category.title} stack={category} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SECTION TITLE
───────────────────────────────────────────── */
function SectionTitle({
  children,
  accent = false,
}: {
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center text-3xl md:text-4xl font-bold tracking-tight"
      style={
        accent
          ? {
              background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }
          : { color: '#f1f5f9' }
      }
    >
      {children}
    </motion.h2>
  )
}

/* ─────────────────────────────────────────────
   SKILL CARD (bloc 1)
───────────────────────────────────────────── */
function SkillCard({ category, index }: { category: Category; index: number }) {
  const ICON_BG = ['#3b82f6', '#22c55e', '#a855f7', '#ec4899']

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className="group relative rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-80"
        style={{ background: ICON_BG[index % ICON_BG.length] }}
      />

      {/* Icon circle */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${ICON_BG[index % ICON_BG.length]}22`, border: `1.5px solid ${ICON_BG[index % ICON_BG.length]}55` }}
      >
        <Image
          src={category.icon}
          alt={category.title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
        {category.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {category.description}
      </p>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   TECH STACK CARD (bloc 2)
───────────────────────────────────────────── */
function TechStackCard({ stack, index }: { stack: Category; index: number }) {
  const ICON_BG = ['#3b82f6', '#22c55e', '#a855f7', '#ec4899']
  const CategoryIcon = CATEGORY_ICONS[stack.title]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className="rounded-2xl p-5 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.035)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.08]">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
          {CategoryIcon && <CategoryIcon size={18} className="text-blue-400" />}
        </div>
        <span className="text-base font-bold text-white tracking-tight">
          {stack.title}
        </span>
      </div>

      {/* Tech list */}
      <ul className="space-y-2.5">
        {stack.skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-3 group/item">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            <span className="text-sm text-slate-300 font-medium group-hover/item:text-white transition-colors">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}