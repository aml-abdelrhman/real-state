import { LangProvider } from '../context/LangContext'
import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale: 'ar' | 'en' = 'ar'; // 👈 افتراضي عربي

  return (
    <html lang={locale} dir="rtl">
      <body className="antialiased bg-white text-black">
        <LangProvider locale={locale}>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
