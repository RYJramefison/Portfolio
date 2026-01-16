'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'
import { motion } from 'framer-motion'


const Header = () => {
  const { lang, setLang, t } = useLang()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const navLinks = ['home', 'projects', 'background', 'skills', 'citation', 'contact']

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-semibold tracking-tight bg-gray-900 dark:text-gray-300 bg-clip-text text-transparent">
            Juninho
          </span>
          <nav className="hidden md:flex space-x-8">
            {(t?.nav || []).map((label, i) => (
              <motion.button
              key={label}
              onClick={() => handleScrollTo(navLinks[i])}
              className="relative cursor-pointer text-gray-700 dark:text-gray-300 transition"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {label}
            
              {/* underline gauche */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-gray-900 dark:bg-blue-600 rounded-full"
                variants={{
                  rest: { width: 0 },
                  hover: { width: '50%' },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            
              {/* underline droite */}
              <motion.span
                className="absolute right-0 -bottom-1 h-[2px] bg-gray-900 dark:bg-blue-600 rounded-full"
                variants={{
                  rest: { width: 0 },
                  hover: { width: '52%' },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.button>
            
            
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button className='cursor-pointer' variant="ghost" onClick={toggleLang}>
              {lang.toUpperCase()}
            </Button>
            <Button className='cursor-pointer' variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
            <a
              href="/cv/Juninho_RAMEFISON_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Button className="cursor-pointer bg-gradient-to-r cursor-pointer from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-700">
                {t?.common?.cv}
              </Button> */}
            </a>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            {(t?.nav || []).map((label, i) => (
              <button
                key={label}
                onClick={() => {
                  handleScrollTo(navLinks[i])
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {label}
              </button>
            ))}
            <div className="flex gap-2 px-4 py-3">
              <Button variant="ghost" onClick={toggleLang}>
                {lang.toUpperCase()}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon /> : <Sun />}
              </Button>
              <a
                href="/cv/Juninho_RAMEFISON_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Button className="flex-1 bg-gradient-to-r from-blue-700 to-blue-500">
                  {t?.common?.cv}
                </Button> */}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
