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
              <div className="mb-4">
  <Image
    src={cat.icon}
    alt={cat.title}
    width={36}
    height={36}
  />
</div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{cat.description}</p>
              <ul className="space-y-3">
  {cat.skills.map((skill) => (
    <motion.li
      key={skill.name}
      role="link"
      tabIndex={0}
      onClick={() => {
        window.location.href = skill.documentation
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          window.location.href = skill.documentation
        }
      }}
      style={{
        ['--skill-color' as any]: skill.color,
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`
        group relative overflow-hidden
        flex items-center justify-between
        px-4 py-2 rounded-lg
        cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-lg
        focus:outline-none focus:ring-0
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
      {/* Effet lumière */}
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-[rgba(var(--skill-color),0.35)] blur-2xl animate-pulse" />
        <span className="absolute bottom-0 right-4 h-10 w-10 rounded-full bg-[rgba(var(--skill-color),0.25)] blur-xl" />
      </span>

      {/* Nom */}
      <span className="relative z-10 block transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-x-1">
        {skill.name}
      </span>

      {/* Fond animé */}
      <span className="absolute inset-0 z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[rgba(var(--skill-color),0.12)]" />

      {/* Icône */}
      <span className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={22}
          height={22}
          className="object-contain opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out delay-150 drop-shadow-[0_0_10px_rgba(var(--skill-color),0.8)]"
        />
      </span>

      {/* Badge */}
      {skill.primary && (
        <span className="relative z-10 text-xs px-2 py-0.5 rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:bg-[rgba(var(--skill-color),0.95)] group-hover:shadow-[0_0_10px_rgba(var(--skill-color),0.6)]">
          Main
        </span>
      )}
    </motion.li>
  ))}
</ul>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
