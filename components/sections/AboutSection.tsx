'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Rocket, Award, Shield, CheckCircle, ExternalLink, Trophy } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'

/* ─── animation helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

/* ─── Stats ─── */
const STATS = [
  { num: '6+', label: 'Projets livrés' },
  { num: '4',  label: 'Certifications' },
  { num: '1',  label: 'Compétition CTF' },
]

/* ─── Certificats ─── */
const certificates = [
  {
    id: 1,
    platform: 'HackerRank',
    title: 'Problem Solving (Basic)',
    date: '2024',
    url: 'https://www.hackerrank.com/certificates/VOTRE_ID_ICI',
    description: 'Algorithmes, structures de données, logique de programmation.',
    color: '34 197 94',
  },
  {
    id: 2,
    platform: 'HackerRank',
    title: 'Java (Basic)',
    date: '2024',
    url: 'https://www.hackerrank.com/certificates/VOTRE_ID_ICI',
    description: 'Fondamentaux Java : POO, collections, exceptions.',
    color: '34 197 94',
  },
  {
    id: 3,
    platform: 'HackerRank',
    title: 'SQL (Basic)',
    date: '2024',
    url: 'https://www.hackerrank.com/certificates/VOTRE_ID_ICI',
    description: 'Requêtes SQL, jointures, agrégations.',
    color: '34 197 94',
  },
  {
    id: 4,
    platform: 'HackerRank',
    title: 'Python (Basic)',
    date: '2024',
    url: 'https://www.hackerrank.com/certificates/VOTRE_ID_ICI',
    description: 'Python fundamentals, data types, functions.',
    color: '34 197 94',
  },
]

/* ─── Participations ─── */
const participations = [
  {
    id: 1,
    event: 'picoCTF 2026',
    organizer: 'Carnegie Mellon University',
    date: 'Mars 2026',
    description:
      'Compétition internationale de cybersécurité organisée par CMU. Épreuves en reverse engineering, cryptographie, web exploitation et forensics.',
    highlights: ['Reverse Engineering', 'Cryptographie', 'Web Exploitation', 'Forensics'],
    url: 'https://picoctf.org',
    icon: Shield,
    color: '59 130 246',
  },
]

/* ══════════════════════════════════════════
   COMPOSANT PRINCIPAL
══════════════════════════════════════════ */

export default function AboutSection() {
  const { lang } = useLang()
  const t = translations[lang]
  const [activeTab, setActiveTab] = useState<'certificates' | 'participations'>('certificates')

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* ── Hex grid background ── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maskImage:
            'radial-gradient(ellipse 85% 75% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 75% at 50% 50%, #000 40%, transparent 100%)',
        }}
      >
        <defs>
          <pattern
            id="hex-about"
            x="0"
            y="0"
            width="52"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="26,3 49,16 49,44 26,57 3,44 3,16"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="text-blue-100/30 dark:text-blue-900/20"
            />
            <polygon
              points="26,3 49,16 49,44 26,57 3,44 3,16"
              fill="url(#hex-gradient-about)"
              opacity="0.05"
            />
          </pattern>
          <linearGradient id="hex-gradient-about" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-about)" />
      </svg>

      {/* ── Blobs ── */}
      <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />

      {/* ── Decorative lines ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      {/* ══ Inner ══ */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">

        {/* ── Header professionnel pour recruteurs ── */}
        <motion.div className="mb-16 text-center" {...fadeUp(0)}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-950/40 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Profil professionnel
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl">
            {t.about?.title ?? "À Propos"}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
            {t.about?.subtitle ??
              'Développeur Full Stack passionné par la création de solutions web modernes et performantes'}
          </p>
        </motion.div>

        {/* ── Introduction claire et concise ── */}
        <motion.div
          className="mb-12 max-w-4xl mx-auto bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 p-8 shadow-sm"
          {...fadeUp(0.1)}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Présentation
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {t.about?.description1 ?? (
                  <>
                    Développeur web en formation (L3), je conçois et développe des applications web modernes et performantes. 
                    J'interviens sur l'ensemble du cycle de développement avec un fort accent sur la qualité, la simplicité et l'expérience utilisateur.
                  </>
                )}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {t.about?.description2 ?? (
                  <>
                    Étudiant en informatique (L3), avec de solides bases en développement web, algorithmique et systèmes informatiques. 
                    Développeur en formation, orienté vers la conception de solutions modernes, performantes et fiables.
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        
        {/* ════════════════════════════════════
            CERTIFICATIONS & PARTICIPATIONS
        ════════════════════════════════════ */}
        <motion.div {...fadeUp(0.22)}>

          {/* Tabs */}
          <div className="mb-7 flex gap-2">
            {(['certificates', 'participations'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 overflow-hidden
                  ${activeTab === tab
                    ? 'text-white shadow-md shadow-blue-600/20'
                    : 'bg-gray-100 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-about"
                    className="absolute inset-0 bg-blue-600 -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {tab === 'certificates' ? (
                    <><Award className="w-3.5 h-3.5" />Certificats ({certificates.length})</>
                  ) : (
                    <><Shield className="w-3.5 h-3.5" />Participations ({participations.length})</>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <AnimatePresence mode="wait">

            {/* ── CERTIFICATS ── */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certs"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {certificates.map((cert, index) => (
                  <motion.a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    whileHover={{ y: -3 }}
                    style={{ ['--cert-color' as any]: cert.color }}
                    className="group relative rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-lg dark:hover:shadow-black/30 hover:border-[rgba(var(--cert-color),0.45)] transition-all duration-200 overflow-hidden"
                  >
                    {/* Top accent */}
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
                      style={{ background: `rgb(${cert.color})` }}
                    />
                    {/* Ghost number */}
                    <span
                      className="absolute bottom-2 right-3 text-5xl font-black opacity-[0.04] select-none pointer-events-none"
                      style={{ color: `rgb(${cert.color})` }}
                    >
                      {String(cert.id).padStart(2, '0')}
                    </span>

                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                        style={{
                          background: `rgba(${cert.color}, 0.1)`,
                          border: `1px solid rgba(${cert.color}, 0.22)`,
                        }}
                      >
                        <CheckCircle className="w-4 h-4" style={{ color: `rgb(${cert.color})` }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <p
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: `rgb(${cert.color})` }}
                          >
                            {cert.platform}
                          </p>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <span className="text-[10px] text-gray-400 dark:text-gray-500">
                              {cert.date}
                            </span>
                            <ExternalLink className="w-2.5 h-2.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug mb-1.5">
                          {cert.title}
                        </h3>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}

            {/* ── PARTICIPATIONS ── */}
            {activeTab === 'participations' && (
              <motion.div
                key="parts"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {participations.map((p, index) => {
                  const Icon = p.icon
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="relative rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
                        style={{ background: `rgb(${p.color})` }}
                      />
                      <div className="p-6 flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: `rgba(${p.color}, 0.1)`,
                            border: `1px solid rgba(${p.color}, 0.22)`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: `rgb(${p.color})` }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                                {p.event}
                              </h3>
                              <span
                                className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                                style={{
                                  color: `rgb(${p.color})`,
                                  borderColor: `rgba(${p.color}, 0.3)`,
                                  background: `rgba(${p.color}, 0.08)`,
                                }}
                              >
                                Participant
                              </span>
                            </div>
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border flex-shrink-0 transition-all duration-200 hover:scale-105"
                              style={{
                                color: `rgb(${p.color})`,
                                borderColor: `rgba(${p.color}, 0.3)`,
                                background: `rgba(${p.color}, 0.06)`,
                              }}
                            >
                              <ExternalLink className="w-3 h-3" />
                              Voir le site
                            </a>
                          </div>

                          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-2">
                            {p.organizer} · {p.date}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                            {p.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {p.highlights.map((h) => (
                              <span
                                key={h}
                                className="px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                                style={{
                                  color: `rgb(${p.color})`,
                                  borderColor: `rgba(${p.color}, 0.25)`,
                                  background: `rgba(${p.color}, 0.06)`,
                                }}
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}

                {/* Placeholder "bientôt" */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: participations.length * 0.08 }}
                  className="rounded-2xl border border-dashed border-gray-200 dark:border-white/[0.07] p-6 flex flex-col items-center justify-center gap-2 text-center"
                >
                  <Trophy className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
                    D'autres participations<br />arrivent bientôt…
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Divider ── */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-blue-600/20 to-transparent" />

        {/* ── CTA ── */}
        <motion.div className="text-center" {...fadeUp(0.35)}>
          <div className="mb-6 flex items-center justify-center gap-2">
            <Rocket className="h-5 w-5 text-blue-500" />
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {t.about?.openToWork ?? 'Ouvert aux opportunités'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:juninho.ramefison@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <Mail className="h-4 w-4" />
              {t.about?.contactMe ?? 'Me contacter'}
            </motion.a>

            <motion.a
              href="https://github.com/RYJramefison"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-gray-700 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-600"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
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