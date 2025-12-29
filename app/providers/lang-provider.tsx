'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { translations, Lang } from '@/app/i18n/translations'

type TranslationContent = (typeof translations)[Lang]

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationContent
}

const LangContext = createContext<LangContextType | undefined>(undefined)

const isValidLang = (value: string): value is Lang =>
  value === 'fr' || value === 'en'

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('fr')

  useEffect(() => {
    const savedLang = localStorage.getItem('lang')

    if (savedLang && isValidLang(savedLang)) {
      setLang(savedLang)
      document.documentElement.lang = savedLang
    }
  }, [])

  const changeLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang: changeLang,
        t: translations[lang] ?? translations.fr,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLang must be used inside LangProvider')
  }
  return context
}
