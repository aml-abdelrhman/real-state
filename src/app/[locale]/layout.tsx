import Footer from "../components/Footer";
import LangProviderWrapper from "./LangProviderWrapper";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale = locale === "ar" ? "ar" : "en";

  return (
    <LangProviderWrapper locale={safeLocale}>
      {children}
      <Footer />
    </LangProviderWrapper>
  );
}
