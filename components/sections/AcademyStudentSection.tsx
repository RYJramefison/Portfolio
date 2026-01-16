'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { GraduationCap, Heart, School } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'
import { translations } from '@/app/i18n/translations'
import { FaChevronUp, FaCircle, FaFacebookF, FaThumbtack } from 'react-icons/fa';
import { useState } from 'react'
const icons = [School, GraduationCap, Heart]

export default function AcademyStudentSection() {
  const { lang } = useLang()
  const t = translations[lang] ?? translations.fr;
  const [activeStep, setActiveStep] = useState<number | null>(null);
;

  const steps = t.background.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    image: step.image,
    icon: icons[index],
    link: step.link,
  }))

  return (
    <section id="background" className="py-28 bg-white relative overflow-hidden dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">
            {t.background.badge}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t.background.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.background.description}
          </p>
        </motion.div>
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-20">
          <div className="relative w-[22rem] h-[22rem]">
            <div
              className="
                pointer-events-none
                absolute inset-0
                rounded-3xl
                bg-blue-500/35
                blur-[1rem]
                opacity-25 dark:opacity-50
              "
            />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="
                relative z-10
                w-full h-full
              "
            >
              <div
                className="
                  w-full h-full
                  rounded-3xl
                  bg-white dark:bg-slate-900
                  backdrop-blur-xl
                  border border-slate-200/60 dark:border-slate-800
                  shadow-xl dark:shadow-2xl
                  flex items-center justify-center text-center px-10
                "
              >
                <div className="space-y-4">
                  <h3
                    className="
                      text-[2.08rem]
                      font-semibold
                      tracking-wide
                      font-[Poppins]
                      bg-gradient-to-r
                      from-gray-900 to-gray-600
                      dark:from-white dark:to-gray-300
                      bg-clip-text text-transparent
                    "
                  >
                    {t.background.profile.title}
                  </h3>
                  <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm">
                    {t.background.profile.badge}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {t.background.profile.description}
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative max-w-md pl-12">
            <div
              className="absolute left-5 top-0 h-full w-px
                bg-gradient-to-b from-blue-600 via-gray-400/40 to-transparent"
            />
                <div className="space-y-10 relative">
      {steps.map((step, index) => {
        const isActive = step.id === activeStep;

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
            style={{ zIndex: isActive ? 10 : 1 }} // card active au-dessus
          >
            {/* Icône moderne */}
            <div className="absolute -left-3 top-6 flex items-center justify-center w-6 h-6 z-20">
              <motion.div
                animate={{
                  scale: isActive ? 1.3 : 1, // cercle pulse légèrement
                  rotate: isActive ? 15 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`w-4 h-4 rounded-full border-2 ${
                  isActive
                    
                    ? "bg-white dark:bg-gray-900 border-blue-600"
                    : "bg-blue-600 border-blue-600 shadow-lg"
                }`}
              />
            </div>

            {/* Card */}
            <motion.div
  onClick={() => setActiveStep(isActive ? null : step.id)}
  whileHover={{ scale: 1.02 }}
  animate={{
    scale: isActive ? 1.05 : 1,
    boxShadow: isActive
      ? "0px 20px 40px rgba(0,0,0,0.3)"
      : "0px 8px 20px rgba(0,0,0,0.1)",
  }}
  transition={{ type: "spring", stiffness: 180, damping: 20 }}
  className="bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg cursor-pointer relative"
>
  <div className="flex items-start gap-4 relative">
    {/* Image + lien */}
    <div className="relative w-14 h-14 flex-shrink-0">
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lien qui apparaît près du logo */}
      <AnimatePresence>
        {isActive && step.link && (
          <motion.a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              absolute -bottom-2 -right-2
              w-7 h-7
              rounded-full
              bg-blue-600
              text-white
              flex items-center justify-center
              shadow-lg
              hover:scale-110
            "
          >
            <FaFacebookF className="w-3 h-3" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>

    {/* Texte */}
    <div className="space-y-1">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {step.title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  </div>
</motion.div>

          </motion.div>
        );
      })}
    </div>
          </div>
        </div>
      </div>
    </section>
  )
}
