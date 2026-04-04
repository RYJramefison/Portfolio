'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Trophy, Shield, Award, CheckCircle, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

/* ══════════════════════════════════════════════
   DONNÉES — remplacez les URLs par les vôtres
══════════════════════════════════════════════ */

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
  // Ajoutez vos autres certificats ici
]

const participations = [
  {
    id: 1,
    event: 'picoCTF 2026',
    organizer: 'Carnegie Mellon University',
    date: 'Mars 2026',
    description: 'Compétition internationale de cybersécurité organisée par CMU. Épreuves en reverse engineering, cryptographie, web exploitation et forensics.',
    highlights: ['Reverse Engineering', 'Cryptographie', 'Web Exploitation', 'Forensics'],
    url: 'https://picoctf.org',
    icon: Shield,
    color: '59 130 246',
  },
  // Ajoutez d'autres participations ici
]

/* ══════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════ */

export default function AchievementsSection() {
  const [activeTab, setActiveTab] = useState<'certificates' | 'participations'>('certificates')

  return (
    <section id="achievements" className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">

      {/* Décos */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 dark:via-blue-700/15 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
                Réalisations
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Certificats &{' '}
                <span className="text-blue-600 dark:text-blue-400">Participations</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                Certifications HackerRank et participations à des compétitions de cybersécurité.
              </p>
            </div>

            {/* Compteurs */}
            <div className="flex gap-3 flex-shrink-0">
              {[
                { value: certificates.length, label: 'Certificats', icon: Award, color: '34 197 94' },
                { value: participations.length, label: 'Compétitions', icon: Shield, color: '59 130 246' },
              ].map((c, i) => {
                const Icon = c.icon
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center w-24 py-4 rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 shadow-sm"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center mb-1.5"
                      style={{ background: `rgba(${c.color}, 0.1)`, border: `1px solid rgba(${c.color}, 0.2)` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: `rgb(${c.color})` }} />
                    </div>
                    <span className="text-2xl font-black" style={{ color: `rgb(${c.color})` }}>
                      {c.value}+
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 text-center leading-tight mt-0.5">
                      {c.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-blue-500/30 dark:from-blue-700/20 via-gray-200 dark:via-gray-800 to-transparent" />
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-8"
        >
          {(['certificates', 'participations'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden
                ${activeTab === tab
                  ? 'text-white shadow-md shadow-blue-600/20'
                  : 'bg-gray-100 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-ach"
                  className="absolute inset-0 bg-blue-600 -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-1.5 relative">
                {tab === 'certificates'
                  ? <><Award className="w-3.5 h-3.5" />Certificats ({certificates.length})</>
                  : <><Shield className="w-3.5 h-3.5" />Participations ({participations.length})</>
                }
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── Contenu ── */}
        <AnimatePresence mode="wait">

          {/* Certificats */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {certificates.map((cert, index) => (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -3 }}
                  style={{ ['--cert-color' as any]: cert.color }}
                  className="group relative rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-lg dark:hover:shadow-black/30 hover:border-[rgba(var(--cert-color),0.4)] transition-all duration-200 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: `rgb(${cert.color})` }} />

                  {/* Numéro décoratif */}
                  <span
                    className="absolute bottom-2 right-3 text-5xl font-black opacity-[0.04] select-none pointer-events-none"
                    style={{ color: `rgb(${cert.color})` }}
                  >
                    {String(cert.id).padStart(2, '0')}
                  </span>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      style={{ background: `rgba(${cert.color}, 0.1)`, border: `1px solid rgba(${cert.color}, 0.2)` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: `rgb(${cert.color})` }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: `rgb(${cert.color})` }}>
                          {cert.platform}
                        </p>
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">{cert.date}</span>
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

              {/* Card vide */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: certificates.length * 0.06 }}
                className="rounded-2xl border border-dashed border-gray-200 dark:border-white/[0.07] bg-transparent p-5 flex flex-col items-center justify-center gap-2 text-center"
              >
                <Trophy className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
                  D'autres certificats<br />arrivent bientôt...
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Participations */}
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
                    <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl" style={{ background: `rgb(${p.color})` }} />

                    <div className="p-6 flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `rgba(${p.color}, 0.1)`, border: `1px solid rgba(${p.color}, 0.2)` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: `rgb(${p.color})` }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{p.event}</h3>
                            <span
                              className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                              style={{ color: `rgb(${p.color})`, borderColor: `rgba(${p.color}, 0.3)`, background: `rgba(${p.color}, 0.08)` }}
                            >
                              Participant
                            </span>
                          </div>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 flex-shrink-0 hover:scale-105"
                            style={{ color: `rgb(${p.color})`, borderColor: `rgba(${p.color}, 0.3)`, background: `rgba(${p.color}, 0.06)` }}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Voir le site
                          </a>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
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
                              style={{ color: `rgb(${p.color})`, borderColor: `rgba(${p.color}, 0.25)`, background: `rgba(${p.color}, 0.06)` }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}