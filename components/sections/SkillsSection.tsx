'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  primary?: boolean
}

type Category = {
  title: string
  icon: string
  description: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    title: 'Design',
    icon: '🎨',
    description: 'Création d’interfaces modernes et intuitives.',
    skills: [
      { name: 'Figma', primary: true },
      { name: 'Material UI' },
      { name: 'Styled Components' },
    ],
  },
  {
    title: 'Front-end',
    icon: '💻',
    description: 'Développement d’interfaces performantes et dynamiques.',
    skills: [
      { name: 'TypeScript', primary: true },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Three.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Back-end',
    icon: '⚙️',
    description: 'Conception d’APIs robustes et scalables.',
    skills: [
      { name: 'Java', primary: true },
      { name: 'PostgreSQL', primary: true },
      { name: 'Node.js' },
      { name: 'Docker' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
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
            Skills
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            What I Do
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{cat.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {cat.description}
              </p>

              {/* Skills list */}
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                  key={skill.name}
                  className={`flex items-center justify-between px-4 py-2 rounded-lg
                    transition-transform duration-200 ease-out
                    hover:scale-105 hover:shadow-md
                    ${
                      skill.primary
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'bg-gray-100 text-gray-700'
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
