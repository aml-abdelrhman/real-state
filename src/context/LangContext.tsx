'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ar from '../app/i18n/ar';
import en from '../app/i18n/en';

export type Locale = 'ar' | 'en';
type Dict = typeof ar;

interface LangContextType {
  locale: Locale;
  t: Dict;
  setLocale: (l: Locale) => void;
}

const dictionaries = { ar, en };

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({
  children,
  locale: initialLocale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  /* ✅ التهيئة الصح من localStorage */
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return initialLocale;
    return (localStorage.getItem('locale') as Locale) || initialLocale;
  });

  const handleSetLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem('locale', l);
  };

  const t = dictionaries[locale];

  return (
    <LangContext.Provider value={{ locale, t, setLocale: handleSetLocale }}>
      {/* ✅ الاتجاه شغال ومضمون */}
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used inside LangProvider');
  }
  return ctx;
};
