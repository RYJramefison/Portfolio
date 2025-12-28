'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'

export default function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang].skills

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-2">
            {t.title}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
            {t.subtitle}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition dark:bg-gray-900 dark:shadow-black/40"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{cat.description}</p>

              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg
                    transition-transform duration-200 ease-out
                    hover:scale-105 hover:shadow-md
                    ${
                      skill.primary
                        ? 'bg-blue-50 text-blue-700 font-semibold dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {skill.name}
                    {skill.primary && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                        Main
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
