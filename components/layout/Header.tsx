'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'

type Lang = 'fr' | 'en'

const translations = {
  fr: {
    nav: ['Accueil', 'À propos', 'Compétences', 'Services', 'Portfolio', 'Contact'],
    cv: 'Télécharger mon CV',
    hire: 'Embauchez-moi',
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'],
    cv: 'Download CV',
    hire: 'Hire me',
  },
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState<Lang>('fr')

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Load theme & lang */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const savedLang = localStorage.getItem('lang') as Lang

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }

    if (savedLang) setLang(savedLang)
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

  const navItems = translations[lang].nav.map((label, i) => ({
    label,
    href: ['#hero', '#about', '#skills', '#services', '#portfolio', '#contact'][i],
  }))

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Juninho
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language */}
            <Button variant="ghost" onClick={toggleLang}>
              {lang.toUpperCase()}
            </Button>

            {/* Theme */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              {translations[lang].cv}
            </Button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex justify-between items-center px-4 py-3 gap-2">
              <Button variant="ghost" onClick={toggleLang}>
                {lang.toUpperCase()}
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon /> : <Sun />}
              </Button>

              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                {translations[lang].hire}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
