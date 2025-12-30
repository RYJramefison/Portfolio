'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLang } from '@/app/providers/lang-provider'

const Header = () => {
  const { lang, setLang, t } = useLang()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const navLinks = ['hero', 'about', 'skills', 'services', 'portfolio', 'contact']

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Load theme */
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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent">
            Juninho
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {(t?.nav || []).map((label, i) => (
              <a
                key={label}
                href={`#${navLinks[i]}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" onClick={toggleLang}>
              {lang.toUpperCase()}
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>

            <Button className="bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-700">
              {t?.common?.cv}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900">
            {(t?.nav || []).map((label, i) => (
              <a
                key={label}
                href={`#${navLinks[i]}`}
                className="block px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <div className="flex gap-2 px-4 py-3">
              <Button variant="ghost" onClick={toggleLang}>
                {lang.toUpperCase()}
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon /> : <Sun />}
              </Button>

              <Button className="flex-1 bg-gradient-to-r from-blue-700 to-teal-700">
                {t?.common?.hire}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
