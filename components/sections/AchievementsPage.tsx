'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Trophy, Shield, Award, CheckCircle } from 'lucide-react'
import { useState } from 'react'

/* ══════════════════════════════════════════════
   DONNÉES
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
]

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

/* ══════════════════════════════════════════════
   COMPOSANT — sans header (importé dans AboutSection)
══════════════════════════════════════════════ */

export default function AchievementsContent() {
  const [activeTab, setActiveTab] = useState<'certificates' | 'participations'>('certificates')

  return (
    <div>

        {/* ── Tabs ── */}
        <div className="mb-7 flex">
          <div className="flex gap-1.5 p-1 rounded-full bg-gray-100 dark:bg-gray-900/80 border border-gray-200/70 dark:border-white/[0.06]">
            {(['certificates', 'participations'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 rounded-full text-xs font-bold transition-colors duration-200 overflow-hidden
                  ${activeTab === tab
                    ? 'text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-ach"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/20 -z-10 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {tab === 'certificates' ? (
                    <><Award className="w-3.5 h-3.5" />Certificats <span className="opacity-60">({certificates.length})</span></>
                  ) : (
                    <><Shield className="w-3.5 h-3.5" />Participations <span className="opacity-60">({participations.length})</span></>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Contenu ── */}
        <AnimatePresence mode="wait">

          {/* Certificats */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {certificates.map((cert, index) => (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="group relative rounded-xl border border-gray-200/70 dark:border-white/[0.06] bg-white dark:bg-gray-900/80 p-5 hover:border-green-400/25 dark:hover:border-green-500/15 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Left bar */}
                  <div
                    className="absolute left-0 inset-y-0 w-[3px] rounded-l-xl"
                    style={{ background: `rgb(${cert.color})`, opacity: 0.7 }}
                  />

                  {/* Ghost number */}
                  <span
                    className="absolute bottom-2 right-3 text-6xl font-black opacity-[0.035] select-none pointer-events-none leading-none"
                    style={{ color: `rgb(${cert.color})` }}
                  >
                    {String(cert.id).padStart(2, '0')}
                  </span>

                  <div className="pl-4 flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `rgba(${cert.color}, 0.08)`,
                        border: `1px solid rgba(${cert.color}, 0.16)`,
                      }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: `rgb(${cert.color})` }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <p
                          className="text-[9px] font-black uppercase tracking-[0.2em]"
                          style={{ color: `rgb(${cert.color})` }}
                        >
                          {cert.platform}
                        </p>
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">{cert.date}</span>
                          <ExternalLink className="w-2.5 h-2.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug mb-1.5">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: certificates.length * 0.05 }}
                className="rounded-xl border border-dashed border-gray-200 dark:border-white/[0.05] p-5 flex flex-col items-center justify-center gap-2 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
                  D'autres certificats<br />arrivent bientôt…
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Participations */}
          {activeTab === 'participations' && (
            <motion.div
              key="parts"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="space-y-3"
            >
              {participations.map((p, index) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: index * 0.08 }}
                    className="group relative rounded-xl border border-gray-200/70 dark:border-white/[0.06] bg-white dark:bg-gray-900/80 overflow-hidden hover:border-blue-300/20 dark:hover:border-blue-500/15 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                  >
                    {/* Left accent */}
                    <div
                      className="absolute left-0 inset-y-0 w-[3px] rounded-l-xl"
                      style={{ background: `rgb(${p.color})`, opacity: 0.7 }}
                    />

                    <div className="pl-6 pr-6 py-6 flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300"
                        style={{
                          background: `rgba(${p.color}, 0.08)`,
                          border: `1px solid rgba(${p.color}, 0.16)`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: `rgb(${p.color})` }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 flex-wrap mb-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{p.event}</h3>
                            <span
                              className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wide border"
                              style={{
                                color: `rgb(${p.color})`,
                                borderColor: `rgba(${p.color}, 0.22)`,
                                background: `rgba(${p.color}, 0.06)`,
                              }}
                            >
                              Participant
                            </span>
                          </div>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border flex-shrink-0 hover:scale-105 transition-transform duration-200"
                            style={{
                              color: `rgb(${p.color})`,
                              borderColor: `rgba(${p.color}, 0.22)`,
                              background: `rgba(${p.color}, 0.06)`,
                            }}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Voir le site
                          </a>
                        </div>

                        <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium mb-2">
                          {p.organizer} · {p.date}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {p.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border"
                              style={{
                                color: `rgb(${p.color})`,
                                borderColor: `rgba(${p.color}, 0.18)`,
                                background: `rgba(${p.color}, 0.05)`,
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

              {/* Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: participations.length * 0.08 }}
                className="rounded-xl border border-dashed border-gray-200 dark:border-white/[0.05] p-6 flex flex-col items-center justify-center gap-2 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
                  D'autres participations<br />arrivent bientôt…
                </p>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}