import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" });

const BASE_URL = "https://jafari.dev";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isFa = locale === "fa";

  return {
    metadataBase: new URL(BASE_URL),
    title: isFa
      ? { default: "احمد جعفری – مهندس ارشد فرانت‌اند", template: "%s | احمد جعفری" }
      : { default: "Ahmad Jafari – Senior Front-end Engineer", template: "%s | Ahmad Jafari" },
    description: isFa
      ? "مهندس فرانت‌اند با بیش از ۷ سال تجربه در ساخت اپلیکیشن‌های وب با کارایی بالا. تخصص در React، Next.js، TypeScript و معماری نرم‌افزار."
      : "Front-end Engineer with 7+ years of experience building high-performance web apps. Specializing in React, Next.js, TypeScript, and software architecture.",
    keywords: isFa
      ? ["احمد جعفری", "مهندس فرانت‌اند", "React", "Next.js", "TypeScript", "معماری نرم‌افزار"]
      : ["Ahmad Jafari", "Front-end Engineer", "React", "Next.js", "TypeScript", "Software Architect"],
    authors: [{ name: "Ahmad Jafari", url: BASE_URL }],
    creator: "Ahmad Jafari",
    openGraph: {
      type: "website",
      locale: isFa ? "fa_IR" : "en_US",
      url: `${BASE_URL}/${locale}/`,
      siteName: "Ahmad Jafari",
      title: isFa ? "احمد جعفری – مهندس ارشد فرانت‌اند" : "Ahmad Jafari – Senior Front-end Engineer",
      description: isFa
        ? "مهندس فرانت‌اند با بیش از ۷ سال تجربه در ساخت اپلیکیشن‌های وب با کارایی بالا."
        : "Front-end Engineer with 7+ years building high-performance web apps.",
      images: [{ url: "/avatar.jpg", width: 1024, height: 1024, alt: "Ahmad Jafari" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isFa ? "احمد جعفری – مهندس ارشد فرانت‌اند" : "Ahmad Jafari – Senior Front-end Engineer",
      description: isFa
        ? "مهندس فرانت‌اند · React · Next.js · TypeScript"
        : "Front-end Engineer · React · Next.js · TypeScript",
      images: ["/avatar.jpg"],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE_URL}/${locale}/`,
      languages: {
        en: `${BASE_URL}/en/`,
        fa: `${BASE_URL}/fa/`,
        "x-default": `${BASE_URL}/en/`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as unknown as Array<string>).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "fa" ? "rtl" : "ltr";
  const fontVars = [inter.variable, spaceGrotesk.variable, jetbrainsMono.variable, vazirmatn.variable].join(" ");

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className={fontVars}>
      <body className="text-slate-800 antialiased transition-colors duration-300 dark:text-slate-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahmad Jafari",
              url: BASE_URL,
              image: `${BASE_URL}/avatar.jpg`,
              jobTitle: "Senior Front-end Engineer",
              worksFor: { "@type": "Organization", name: "Partnerz" },
              sameAs: ["https://github.com/jafari-dev", "https://www.linkedin.com/in/jafari-dev/"],
              email: "a99jafari@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tehran",
                addressCountry: "IR",
              },
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
