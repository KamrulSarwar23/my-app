import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kamrul Hasan — Full Stack Web Developer",
  description:
    "Portfolio of Kamrul Hasan — Full Stack Web Developer with 3+ years of experience building Laravel, Vue.js, React.js and Next.js applications.",
  keywords: [
    "Kamrul Hasan",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Kamrul Hasan" }],
  openGraph: {
    title: "Kamrul Hasan — Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in Laravel, Vue.js, React.js and Next.js.",
    type: "website",
  },
};

const initScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;

    var locale = localStorage.getItem('locale');
    if (locale === 'bn' || locale === 'en') {
      document.documentElement.lang = locale;
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
