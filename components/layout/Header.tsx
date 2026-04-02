'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'
import { AnimatePresence, motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '700'] })

const Header = () => {
  const { lang, setLang, t } = useLang()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const navLinks = ['home', 'skills', 'projects', 'background', 'citation', 'contact']

  /* ── Scroll + section active ── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Détecte la section visible
      const offsets = navLinks.map((id) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top - 100) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveSection(closest.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Thème ── */
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial = saved ?? preferred
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  /* ── Langue ── */
  const languages = ['EN', 'FR'];
  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }
  /* ── Scroll vers section ── */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 80,
      behavior: 'smooth',
    })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/60 dark:border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-200" />
            <span className={`${montserrat.className} text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight`}>
              Juninho
            </span>
          </button>

          {/* ── Nav desktop ── */}
          <nav className="hidden md:flex items-center gap-1">
            {(t?.nav || []).map((label, i) => {
              const id = navLinks[i]
              const isActive = activeSection === id
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(id)}
                  className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200
                    ${isActive
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                  {/* Fond actif */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-500/10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              )
            })}
          </nav>

          {/* ── Actions desktop ── */}
          <div className="hidden md:flex items-center gap-2">

            {/* Langue */}
            <Button className="relative w-16 h-8 overflow-hidden cursor-pointer" variant="ghost" onClick={toggleLang}>
  <div className="relative w-full h-full flex items-center justify-center">
    {languages.map((l) => {
      const isActive = l === lang.toUpperCase();
      return (
        <motion.span
          key={l}
          initial={{ x: isActive ? 0 : isActive ? 0 : isActive ? 0 : 0, scale: isActive ? 1.2 : 0.8, opacity: 1 }}
          animate={{
            x: isActive ? 0 : (lang.toUpperCase() === 'EN' ? 20 : -20), 
            scale: isActive ? 1.0 : 0.6,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute"
        >
          {l}
        </motion.span>
      );
    })}
  </div>
</Button>

            {/* Thème */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>   
          </div>

          {/* ── Burger mobile ── */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.15 }}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200/60 dark:border-white/[0.06] bg-white/95 dark:bg-gray-950/95 backdrop-blur-md"
          >
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-0.5">
              {(t?.nav || []).map((label, i) => {
                const id = navLinks[i]
                const isActive = activeSection === id
                return (
                  <button
                    key={label}
                    onClick={() => { scrollTo(id); setIsMenuOpen(false) }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors duration-200
                      ${isActive
                        ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                  >
                    {label}
                  </button>
                )
              })}

              {/* Actions mobile */}
              <div className="flex items-center gap-2 pt-2 pb-1 border-t border-gray-100 dark:border-white/[0.05] mt-2">
                <button
                  onClick={toggleLang}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/[0.08] text-xs font-bold text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {lang === 'fr' ? 'EN' : 'FR'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
                <a
                  href="/cv/Juninho_RAMEFISON_CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1.5 px-3 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3 h-3" />
                  CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header