'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code2, Heart } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Formation',
    description:
      "Étudiant en informatique à HEI, avec une base solide en développement et systèmes informatiques.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: 'Passion & Compétences',
    description:
      "Développement web moderne, interfaces UX/UI, cybersécurité et bonnes pratiques.",
    icon: Code2,
  },
  {
    id: 3,
    title: 'Centres d’intérêt',
    description:
      "Cybersécurité, échecs, voyages, musique et sport automobile.",
    icon: Heart,
  },
]

export default function AcademyStudentSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">Mon Parcours</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mes parcours académiques
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une vision claire et structurée de mon évolution académique et personnelle
          </p>
      </motion.div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-20">

          {/* Center Circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10 w-80 h-80 rounded-full bg-white border shadow-2xl flex items-center justify-center text-center px-8"
          >
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-3">
                Academy Student
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Développeur en formation, orienté solutions modernes,
                performantes et sécurisées.
              </p>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 blur-2xl opacity-10 -z-10" />
          </motion.div>

          {/* SVG Arrows */}
          <svg
            className="absolute hidden lg:block"
            width="600"
            height="400"
            viewBox="0 0 600 400"
            fill="none"
          >
            <defs>
              <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            {[80, 200, 320].map((y, i) => (
              <motion.path
                key={i}
                d={`M300 200 C420 ${y} 460 ${y} 520 ${y}`}
                stroke="url(#arrowGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </svg>

          {/* Steps */}
          <div className="space-y-8 max-w-md">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white flex items-center justify-center font-bold shadow-md">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="w-5 h-5 text-violet-500" />
                      <h4 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
