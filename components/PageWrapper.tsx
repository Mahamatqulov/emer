'use client'

import React from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
