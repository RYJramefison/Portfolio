'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import Image from 'next/image'

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
      style={{
        ['--skill-color' as any]: skill.color,
      }}
      className={`
        group relative
        flex items-center justify-between
        px-4 py-2 rounded-lg
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-md

        ${
          skill.primary
            ? `
              bg-blue-50 text-blue-700
              dark:bg-blue-950 dark:text-blue-300
            `
            : `
              bg-gray-100 text-gray-700
              dark:bg-gray-800 dark:text-gray-300
            `
        }

        hover:bg-[rgba(var(--skill-color),0.12)]
        dark:hover:bg-[rgba(var(--skill-color),0.18)]
      `}
    >
      {/* TEXT */}
      <span
        className="
          transition-all duration-300
          group-hover:opacity-0 group-hover:-translate-y-1
        "
      >
        {skill.name}
      </span>

      {/* ICON */}
      <span
        className="
          absolute left-1/2 -translate-x-1/2
          opacity-0 scale-75
          transition-all duration-300
          group-hover:opacity-100 group-hover:scale-110
          flex items-center justify-center
        "
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={22}
          height={22}
          className="
            object-contain
            drop-shadow-[0_0_6px_rgba(var(--skill-color),0.6)]
          "
        />
      </span>

      {/* BADGE MAIN */}
      {skill.primary && (
        <span
          className="
            text-xs px-2 py-0.5 rounded-full
            bg-blue-600 text-white
            transition-all duration-300

            group-hover:bg-[rgba(var(--skill-color),0.95)]
          "
        >
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
