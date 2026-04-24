'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { GraduationCap, Heart, School, ExternalLink, Users } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import { useState } from 'react'

const icons = [School, Users, GraduationCap, Heart]

export default function AcademyStudentSection() {
  const { lang } = useLang()
  const t = translations[lang] ?? translations.fr
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = t.background.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    establishment: step.establishment,
    image: step.image,
    icon: icons[index] ?? Heart,
    link: step.link,
    isCommunity: step.title.toLowerCase().includes('kodata'),
  }))

  return (
    <section id="background" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.background.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.background.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-xs leading-relaxed">
            {t.background.description}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-700/20 to-transparent" />
        </motion.div>

        {/* ── Layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* ── Timeline ── */}
          <div className="relative flex-1 w-full">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-600 via-blue-300/30 dark:via-blue-700/20 to-transparent" />

            <div className="space-y-3">
              {steps.map((step, index) => {
                const isActive = step.id === activeStep
                const Icon = step.icon

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-3.5 w-10 h-10 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor: isActive ? 'rgb(37 99 235)' : 'rgb(255 255 255)',
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="w-9 h-9 rounded-xl border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center relative z-10"
                      >
                        <Icon className={`w-3.5 h-3.5 transition-colors duration-200 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      onClick={() => setActiveStep(isActive ? null : step.id)}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                      className={`cursor-pointer rounded-2xl border transition-all duration-200
                        ${isActive
                          ? 'bg-white dark:bg-gray-900 border-blue-200/60 dark:border-blue-600/20 shadow-md shadow-blue-600/[0.07]'
                          : 'bg-white dark:bg-gray-900 border-gray-200/80 dark:border-white/[0.06] hover:border-gray-300/80 dark:hover:border-white/[0.10] shadow-sm'
                        }`}
                    >
                      <div className="p-4 flex items-start gap-3.5">

                        {/* Logo */}
                        <div className="relative flex-shrink-0">
                          <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-200/60 dark:border-white/[0.07] bg-gray-50 dark:bg-gray-800">
                            <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                          </div>
                          <AnimatePresence>
                            {isActive && step.link && (
                              <motion.a
                                href={step.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shadow hover:bg-blue-700 transition-colors"
                              >
                                <ExternalLink className="w-2 h-2" />
                              </motion.a>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Texte */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {step.title}
                            </h4>
                            {step.isCommunity && (
                              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20">
                                <Users className="w-2.5 h-2.5" />
                                Communauté
                              </span>
                            )}
                          </div>

                          {step.establishment && (
                            <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mb-0.5">
                              {step.establishment}
                            </p>
                          )}

                          {!isActive && (
                            <p className="text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1">
                              {step.description}
                            </p>
                          )}

                          <AnimatePresence>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1.5 overflow-hidden"
                              >
                                {step.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Chevron */}
                        <motion.svg
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.18 }}
                          className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-1"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}