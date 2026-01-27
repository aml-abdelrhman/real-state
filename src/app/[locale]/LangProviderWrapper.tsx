'use client';

import { ReactNode } from 'react';
import { LangProvider, Locale } from '../../context/LangContext';

type Props = {
  children: ReactNode;
  locale: Locale;
};

export default function LangProviderWrapper({ children, locale }: Props) {
  return (
    <LangProvider locale={locale}>
      {children}
    </LangProvider>
  );
}
