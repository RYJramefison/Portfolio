'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  icon: string
  primary?: boolean
}

const skills = {
  design: [
    { name: 'Figma', icon: '🎨', primary: true },
    { name: 'Material UI', icon: '🧩' },
    { name: 'Styled Components', icon: '💅' },
  ],
  frontend: [
    { name: 'TypeScript', icon: 'TS', primary: true },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Three.js', icon: '🔺' },
    { name: 'CSS / Tailwind', icon: '🎨' },
  ],
  backend: [
    { name: 'Java', icon: '☕', primary: true },
    { name: 'PostgreSQL', icon: '🐘', primary: true },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Docker', icon: '🐳' },
  ],
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-gray-900 mb-20"
        >
          Skills
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {/* Design */}
          <SkillCard title="Design" color="blue" skills={skills.design} />

          {/* Frontend */}
          <SkillCard title="Front-end" color="cyan" skills={skills.frontend} />

          {/* Backend */}
          <SkillCard title="Back-end" color="purple" skills={skills.backend} />
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  color,
  skills,
}: {
  title: string
  color: 'blue' | 'cyan' | 'purple'
  skills: Skill[]
}) {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl bg-white shadow-md p-8 hover:shadow-xl transition"
    >
      <h3
        className={`text-xl font-semibold mb-6 text-${color}-600`}
      >
        {title}
      </h3>

      <ul className="space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`flex items-center justify-between rounded-lg px-4 py-3
              ${
                skill.primary
                  ? `bg-${color}-50 border border-${color}-200`
                  : 'bg-gray-50'
              }`}
          >
            <div className="flex items-center gap-3">
              <span>{skill.icon}</span>
              <span
                className={`${
                  skill.primary
                    ? 'font-semibold text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                {skill.name}
              </span>
            </div>

            {skill.primary && (
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full bg-${color}-600 text-white`}
              >
                Main
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
