'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { scrollToSection } from '@/components/lib/scrollToSection'
import ParticlesBackground from '../ParticlesParticlesBackground'

const HeroSection = () => {
  const { t } = useLang()

  return (
    <section
  id="home"
  className="relative pt-16 pb-20 overflow-hidden"
>
<div className="absolute inset-0 z-0 bg-white dark:bg-gray-950" />
      {/* ❄️ Snow Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2"
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {t.home.greeting} 👋
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-gray-900 dark:text-gray-300">
                  Juninho
                </span>{' '}
                <span className="bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent">
                  Ramefison
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-blue-600 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {t.home.job}
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 max-w-lg leading-relaxed dark:text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {t.home.description}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-700 to-blue-600 group"
              >
                {t.home.projectsBtn}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="/cv/Juninho_RAMEFISON_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t.home.downloadCv}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

              <div className="relative z-10 w-full aspect-square rounded-full flex items-center justify-center">
                <img
                  src="photo_pro-removebg-preview.png"
                  alt="Profile"
                  className="rounded-full border-8 border-white dark:border-gray-800 shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
