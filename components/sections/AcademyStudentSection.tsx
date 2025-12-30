'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, School } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'

const icons = [School, GraduationCap, Heart]

export default function AcademyStudentSection() {
  const { lang } = useLang()
  const t = translations[lang] ?? translations.fr

  const steps = t.academy.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    icon: icons[index],
  }))

  return (
    <section className="py-28 bg-white relative overflow-hidden dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">
            {t.academy.badge}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t.academy.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.academy.description}
          </p>
        </motion.div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-20">

          {/* Center Profile Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative z-10 w-[22rem] h-[22rem] rounded-3xl
                       bg-white/70 dark:bg-gray-900/70
                       backdrop-blur-xl border border-white/40 dark:border-gray-800
                       shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)]
                       flex items-center justify-center text-center px-10"
          >
            <div className="absolute inset-0 rounded-3xl
                            bg-gradient-to-r from-blue-500/10 to-teal-500/10
                            blur-3xl opacity-20 -z-10" />

            <div className="space-y-4">
              <span className="inline-block px-4 py-1 text-xs font-semibold
                               rounded-full bg-gradient-to-r from-blue-800 to-blue-500
                               text-white shadow">
                {t.academy.profile.badge}
              </span>

              <h3 className="text-3xl font-extrabold tracking-tight
                             bg-gradient-to-r from-blue-600 to-blue-600
                             bg-clip-text text-transparent">
                {t.academy.profile.title}
              </h3>

              <div className="mx-auto w-14 h-1 rounded-full
                              bg-gradient-to-r from-blue-500 to-blue-900" />

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {t.academy.profile.description}
              </p>

              <div className="flex justify-center gap-3 pt-2">
                {[...Array(3)].map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full
                               bg-gradient-to-r from-blue-500 to-teal-500
                               animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-md pl-12">
            <div className="absolute left-5 top-0 h-full w-px
                            bg-gradient-to-b from-blue-700 via-white-600 to-transparent" />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-1.5 top-6 w-4 h-4 rounded-full
                                  bg-blue-800 shadow-lg" />

                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white dark:bg-gray-900/70 border rounded-xl p-6
                               shadow-md hover:shadow-xl transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl
                                      bg-blue-700
                                      text-white flex items-center justify-center shadow-md">
                        <step.icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
