'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code2, Heart, School } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Baccalauréat',
    description:
      "Obtention du Baccalauréat Scientifique – Série D au Lycée MIRVA Amboniloha en 2023.",
    icon: School,
  },
  {
    id: 2,
    title: 'Formation univeritaire',
    description:
      "Étudiant en informatique à HEI, avec une base solide en développement et systèmes informatiques.",
    icon: GraduationCap,
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
          <p className="text-blue-600 font-semibold text-lg mb-2">Mon Parcours</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Mes parcours académiques
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Une vision claire et structurée de mon évolution académique et personnelle
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
                    backdrop-blur-xl backdrop-blur-xl border border-white/40  dark:border-gray-800
                    shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)]
                    flex items-center justify-center text-center px-10 "
        >
          {/* Animated halo */}
          <div className="absolute inset-0 rounded-3xl 
                          bg-gradient-to-r from-blue-10 to-violet-10
                          blur-3xl opacity-20  -z-10" />

          <div className="space-y-4">
            {/* Badge */}
            <span className="inline-block px-4 py-1 text-xs font-semibold 
                            rounded-full bg-gradient-to-r from-blue-500 to-violet-500 
                            text-white shadow">
              Profil
            </span>

            {/* Title */}
            <h3 className="text-3xl font-extrabold tracking-tight 
                          bg-gradient-to-r from-blue-600 to-violet-600 
                          bg-clip-text text-transparent">
              Academy Student
            </h3>

            {/* Divider */}
            <div className="mx-auto w-14 h-1 rounded-full 
                            bg-gradient-to-r from-blue-500 to-violet-500" />

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              Développeur en formation, orienté solutions modernes,
              performantes et sécurisées.
            </p>

            {/* Tech dots */}
            <div className="flex justify-center gap-3 pt-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full 
                            bg-gradient-to-r from-blue-500 to-violet-500 
                            animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>





          {/* Steps - Modern Timeline */}
        <div className="relative max-w-md pl-12">

        {/* Vertical line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

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
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white dark:bg-gray-900/70  border rounded-xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white flex items-center justify-center shadow-md">
                    <step.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-1">
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
