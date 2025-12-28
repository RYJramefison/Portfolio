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

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('fr')

  /* Load saved language */
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Lang | null
    if (savedLang) setLang(savedLang)
  }, [])

  /* Persist language */
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
        t: translations[lang], // ✅ TYPE SAFE
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
