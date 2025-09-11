import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "../components/ClientThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Rizky Yusfian - Software Engineer & Full-Stack Developer",
  description:
    "Personal website of Rizky Yusfian - Software Engineer specializing in React, Next.js, Node.js, and Laravel. Showcasing projects and insights on modern web development.",
  keywords: [
    "Rizky Yusfian",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "Web Development",
    "Indonesia",
  ],
  authors: [{ name: "Rizky Yusfian" }],
  creator: "Rizky Yusfian",
  publisher: "Rizky Yusfian",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://rizkyyusfian.com"),
  openGraph: {
    title: "Rizky Yusfian - Software Engineer & Full-Stack Developer",
    description:
      "Personal website of Rizky Yusfian - Software Engineer specializing in React, Next.js, Node.js, and Laravel.",
    url: "https://rizkyyusfian.com",
    siteName: "Rizky Yusfian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky Yusfian - Software Engineer & Full-Stack Developer",
    description:
      "Personal website of Rizky Yusfian - Software Engineer specializing in React, Next.js, Node.js, and Laravel.",
    creator: "@rizkyyusfian",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ClientThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 max-w-5xl mx-auto px-6 pt-24 pb-16 w-full max-md:px-4 max-md:pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ClientThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
