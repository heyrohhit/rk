import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import Components from "./Components/page";
import HeaderSection from "./Components/headerSection/page";
import FooterPage from "./Components/footer/page";
import Backgrounds from "./Components/backgounds/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rohit Kumar | Full Stack Web Developer Portfolio - India",
  description: "Showcase your digital success with Rohit Kumar’s portfolio at rkwebs.vercel.app. Explore expert React, Next.js, and Three.js web development projects.",
  authors: [{ name: "Rohit Kumar" }],
  keywords: [
    "Rohit Kumar portfolio",
    "full stack developer India",
    "web developer portfolio India",
    "React developer India",
    "Next.js developer India",
    "Three.js portfolio",
    "hire full stack developer India",
    "best web developer India 2025",
    "web development portfolio India",
    "freelance web developer India",
    "responsive web design India",
    "custom web development India",
    "front end developer portfolio",
    "back end developer India",
    "Rohit Kumar web designer",
    "portfolio website developer India",
    "React.js projects India",
    "Next.js portfolio 2025",
    "Three.js web development",
    "web design services India",
    "full stack developer near me",
    "modern web development India",
    "how to hire web developer India",
    "best portfolio for web developers",
    "Rohit Kumar rkwebs",
    "interactive web design India"
  ],
  alternates: {
    canonical: "https://rkwebs.vercel.app",
  },
  openGraph: {
    title: "Rohit Kumar | Full Stack Developer Portfolio - India",
    description: "Discover Rohit Kumar’s innovative web development projects in React, Next.js, and Three.js at rkwebs.vercel.app, crafted for businesses in India.",
    url: "https://rkwebs.vercel.app",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "https://rkwebs.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Full Stack Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar | Full Stack Web Developer India",
    description: "Explore Rohit Kumar’s portfolio of cutting-edge React, Next.js, and Three.js projects at rkwebs.vercel.app for modern web solutions.",
    creator: "@yourtwitterhandle", // Replace with your actual Twitter handle or remove if not applicable
    images: ["https://rkwebs.vercel.app/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://rkwebs.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
      <meta name="google-site-verification" content="9h1Qm51n6eTEBXQjBEnlf9JXXnspjpIaAAgTHPCtt7w" />
      </head>
      <body>
        <StyledJsxRegistry>
          <HeaderSection />
          <main>{children}</main>
          <FooterPage />
          <Components />
          <Backgrounds />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
