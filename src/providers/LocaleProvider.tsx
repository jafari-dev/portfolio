"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import faMessages from "@/messages/fa.json";

type Locale = "en" | "fa";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {
    // No body
  },
});

export function useLocale() {
  return useContext(LocaleContext);
}

const allMessages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  fa: faMessages as typeof enMessages,
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "fa" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    }
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider messages={allMessages[locale]} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
