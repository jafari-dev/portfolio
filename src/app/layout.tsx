import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/providers/LocaleProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jafari.dev"),
  title: {
    default: "Ahmad Jafari – Senior Front-end Engineer",
    template: "%s | Ahmad Jafari",
  },
  description:
    "Front-end Engineer with 7+ years of experience building high-performance web apps. Specializing in React, Next.js, TypeScript, and software architecture.",
  keywords: ["Ahmad Jafari", "Front-end Engineer", "React", "Next.js", "TypeScript", "Software Architect"],
  authors: [{ name: "Ahmad Jafari", url: "https://jafari.dev" }],
  creator: "Ahmad Jafari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jafari.dev",
    siteName: "Ahmad Jafari",
    title: "Ahmad Jafari – Senior Front-end Engineer",
    description: "Front-end Engineer with 7+ years building high-performance web apps.",
    images: [{ url: "/avatar.jpg", width: 1024, height: 1024, alt: "Ahmad Jafari" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Jafari – Senior Front-end Engineer",
    description: "Front-end Engineer · React · Next.js · TypeScript",
    images: ["/avatar.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jafari.dev" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = [inter.variable, spaceGrotesk.variable, jetbrainsMono.variable, vazirmatn.variable].join(" ");

  return (
    <html lang="en" suppressHydrationWarning className={fontVars}>
      <head>
        {/* Pre-hydration locale script to prevent RTL flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('locale');if(l==='fa'){document.documentElement.lang='fa';document.documentElement.dir='rtl';}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahmad Jafari",
              url: "https://jafari.dev",
              image: "https://jafari.dev/avatar.jpg",
              jobTitle: "Senior Front-end Engineer",
              worksFor: { "@type": "Organization", name: "Partnerz" },
              sameAs: ["https://github.com/jafari-dev", "https://www.linkedin.com/in/jafari-dev/"],
              email: "a99jafari@gmail.com",
              address: { "@type": "PostalAddress", addressLocality: "Tehran", addressCountry: "IR" },
            }),
          }}
        />
      </head>
      <body className="text-slate-800 antialiased transition-colors duration-300 dark:text-slate-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
