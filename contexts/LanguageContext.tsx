'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import translations from '@/data/translations.json'

type Language = 'en' | 'ru' | 'uz'
type Translations = typeof translations

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && ['en', 'ru', 'uz'].includes(saved)) {
      setLanguageState(saved)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let current: any = translations[language]
    
    for (const k of keys) {
      if (current && typeof current === 'object') {
        current = current[k]
      } else {
        return key
      }
    }
    
    return typeof current === 'string' ? current : key
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return default context during SSR
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: (key: string) => key,
      translations: translations['en'],
    }
  }
  return context
}
