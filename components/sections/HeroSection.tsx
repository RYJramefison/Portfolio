'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { easeOut, motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { scrollToSection } from '@/components/ui/lib/scrollToSection'
import ParticlesBackground from '../ui/ParticlesParticlesBackground'
import { Montserrat } from 'next/font/google';
import { SiGithub, SiLinkedin } from 'react-icons/si'
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] })

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
  const socials = [
    {
      href: 'https://www.linkedin.com/in/yarinaly-juninho-ramefison-1270432a1/',
      icon: <SiLinkedin className="w-4 h-4" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/RYJramefison/',
      icon: <SiGithub className="w-4 h-4" />,
      label: 'GitHub',
    },
    {
      href: 'mailto:juninho.ramefison@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
    },
  ]
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
            className="space-y-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Greeting */}
            <div className="space-y-3">
              <motion.div
                variants={greetingContainer}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-2"
              >
                <span className="w-6 h-px bg-blue-600 dark:bg-blue-400" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                  {t.home.greeting.split('').map((char, i) => (
                    <motion.span key={i} variants={letter}>
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
 
              {/* Nom animé */}
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
 
              {/* Titre */}
              <motion.p
                className="text-xl font-semibold text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                {t.home.job}
              </motion.p>
            </div>
 
            {/* Description */}
            <motion.p
              className="text-base text-gray-500 dark:text-gray-400 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {t.home.description}
            </motion.p>
 
            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {t.home.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`${montserrat.className} px-3 py-1 rounded-full text-xs font-semibold
                    bg-gray-100 dark:bg-gray-800/80
                    text-gray-700 dark:text-gray-300
                    border border-gray-200/80 dark:border-white/[0.08]`}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
 
            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 gap-2 group"
              >
                {t.home.projectsBtn}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="/cv/Juninho_RAMEFISON_CV.pdf" download target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  {t.home.downloadCv}
                </Button>
              </a>
            </motion.div>
 
            {/* Localisation */}
            <motion.div
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <MapPin className="w-3 h-3" />
              Madagascar, Antananarivo
            </motion.div>
          </motion.div>
          <motion.div
  className="relative flex justify-center md:-top-10 items-center w-full order-1 lg:order-2"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>
  <div className="relative w-[240px] sm:w-[320px] md:w-[350px] max-w-sm mx-auto aspect-square flex justify-center items-center">

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
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center
                      bg-white dark:bg-gray-900
                      border border-gray-200/80 dark:border-white/[0.08]
                      text-gray-500 dark:text-gray-400
                      shadow-sm hover:shadow-md
                      hover:border-blue-400/60 dark:hover:border-blue-500/40
                      hover:text-blue-600 dark:hover:text-blue-400
                      hover:scale-110
                      transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>



  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
