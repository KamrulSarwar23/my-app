import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ChatWidget from "@/components/ChatWidget";

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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kamrulhasan.dev";
const SITE_NAME = "Kamrul Hasan — Full Stack Web Developer";
const DESCRIPTION =
  "Portfolio of Kamrul Hasan — Full Stack Web Developer with 3+ years of experience shipping production apps with Laravel, Vue.js, React.js and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s · Kamrul Hasan",
  },
  description: DESCRIPTION,
  applicationName: "Kamrul Hasan Portfolio",
  authors: [{ name: "Kamrul Hasan", url: SITE_URL }],
  creator: "Kamrul Hasan",
  publisher: "Kamrul Hasan",
  keywords: [
    "Kamrul Hasan",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Web Developer Bangladesh",
    "Hire Full Stack Developer",
    "Freelance Web Developer",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      bn: "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Kamrul Hasan",
    title: SITE_NAME,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@kamrulhasan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const initScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;

    var locale = localStorage.getItem('locale');
    document.documentElement.lang = locale === 'bn' ? 'bn' : 'en';

    var palette = localStorage.getItem('palette');
    var allowed = ['default', 'ocean', 'sunset', 'forest', 'royal'];
    var resolvedPalette = palette && allowed.indexOf(palette) !== -1 ? palette : 'forest';
    if (resolvedPalette !== 'default') {
      document.documentElement.setAttribute('data-palette', resolvedPalette);
    }
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kamrul Hasan",
  url: SITE_URL,
  jobTitle: "Full Stack Web Developer",
  description: DESCRIPTION,
  email: "mailto:kamrulsarwar99@gmail.com",
  telephone: "+8801646669099",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Bangladesh",
  },
  sameAs: ["https://github.com/KamrulSarwar23"],
  knowsAbout: [
    "Laravel",
    "PHP",
    "Vue.js",
    "React.js",
    "Next.js",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "AWS",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
