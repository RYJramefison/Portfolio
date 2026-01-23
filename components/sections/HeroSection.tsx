'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { easeOut, motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { scrollToSection } from '@/components/ui/lib/scrollToSection'
import ParticlesBackground from '../ui/ParticlesParticlesBackground'
import { Montserrat } from 'next/font/google';

const museoModerno = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const HeroSection = () => {
  const { t } = useLang()

  const greetingContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04, 
      },
    },
  }
  
  
  const letter = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeOut,
      },
    },
  }

  const greetingLength = t.home.greeting.length
const typingSpeed = 0.04

const nameContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: greetingLength * typingSpeed + 0.2, 
      staggerChildren: 0.05,
    },
  },
}

const fullName = [
  ...'Juninho'.split('').map((char) => ({
    char,
    className: `${museoModerno.className} text-gray-900 dark:text-gray-300`,
  })),
  {
    char: ' ',
    className: '',
  },
  ...'Ramefison'.split('').map((char) => ({
    char,
    className: `${museoModerno.className} bg-gray-900 dark:text-gray-300 bg-clip-text text-transparent`,
  })),
]

  
  
  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-white dark:bg-gray-950" />
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
            <motion.div
  variants={greetingContainer}
  initial="hidden"
  animate="visible"
  className="flex items-center space-x-2"
>
  <span className="text-gray-600 dark:text-gray-400">
    {t.home.greeting.split('').map((char, i) => (


      <motion.span key={i} variants={letter}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
</motion.div>


<motion.h1
  variants={nameContainer}
  initial="hidden"
  animate="visible"
  className="text-4xl lg:text-5xl font-semibold leading-tight"
>
  {fullName.map((item, i) => (
    <motion.span
      key={i}
      variants={letter}
      className={item.className}
    >
      {item.char === ' ' ? '\u00A0' : item.char}
    </motion.span>
  ))}
</motion.h1>


            
              <motion.p
  className="text-2xl text-blue-600 font-semibold"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.6 }}
>
  {t.home.job}
</motion.p>

{/* Skills badges */}

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
            <motion.ul
  className="flex flex-wrap gap-3 mt-3"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.75, duration: 0.6 }}
>
  {t.home.technologies.map((tech, index) => (
    <motion.li
      key={tech}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${museoModerno.className} px-3 py-1 rounded-full text-xs font-medium
                 bg-gray-100 text-gray-900 
                 dark:bg-blue-900/30 dark:text-blue-300
                 border border-blue-100 dark:border-blue-800
                `}
    >
      {tech}
    </motion.li>
  ))}
</motion.ul>
          </motion.div>
          <motion.div
  className="relative flex justify-center md:-top-10 items-center w-full order-1 lg:order-2"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>
  <div className="relative w-[320px] sm:w-[360px] md:w-[350px] max-w-sm mx-auto aspect-square flex justify-center items-center">

    {/* bulles décoratives */}
    <div className="absolute -top-4 -left-4 w-20 h-20
      bg-gradient-to-r from-blue-400 to-purple-400
      rounded-full opacity-20 animate-pulse" />

    <div className="absolute -bottom-4 -right-4 w-24 h-24
      bg-gradient-to-r from-orange-400 to-pink-400
      rounded-full opacity-20 animate-pulse delay-1000" />

    {/* image */}
    <div className="relative w-full aspect-square rounded-full flex items-center justify-center">
      <img
        src="photo_pro-removebg-preview.png"
        alt="Profile"
        className="
          rounded-full
          border-6 border-white dark:border-gray-800
          shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]
        "
      />
    </div>

    {/* boutons sociaux */}
    <motion.div
  className="absolute -bottom-14 flex gap-4"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/yarinaly-juninho-ramefison-1270432a1/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full flex items-center justify-center
               bg-white/80 dark:bg-gray-900/70 backdrop-blur
               border border-gray-200 dark:border-gray-700
               shadow-[0_6px_20px_rgba(0,0,0,0.12)]
               hover:scale-110
               transition-all
               opacity-70 hover:opacity-100"
  >
    <img
      src="/icons/linkedin.svg"
      alt="LinkedIn"
      className="w-5 h-5 object-contain 
                 dark:invert" // <- invert les couleurs en dark mode
    />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/RYJramefison/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full flex items-center justify-center
               bg-white/80 dark:bg-gray-900/70 backdrop-blur
               border border-gray-200 dark:border-gray-700
               shadow-[0_6px_20px_rgba(0,0,0,0.12)]
               hover:scale-110
               transition-all
               opacity-70 hover:opacity-100"
  >
    <img
      src="/icons/github.svg"
      alt="GitHub"
      className="w-5 h-5 object-contain dark:invert"
    />
  </a>

  {/* Email */}
  <a
    href="mailto:juninho.ramefison@email.com"
    className="w-11 h-11 rounded-full flex items-center justify-center
               bg-white/80 dark:bg-gray-900/70 backdrop-blur
               border border-gray-200 dark:border-gray-700
               shadow-[0_6px_20px_rgba(0,0,0,0.12)]
               hover:scale-110
               transition-all
               opacity-70 hover:opacity-100"
  >
    <img
      src="/icons/mail.svg"
      alt="Email"
      className="w-5 h-5 object-contain dark:invert"
    />
  </a>
</motion.div>



  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
