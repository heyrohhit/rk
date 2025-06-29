import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import Components from "./Components/page";
import HeaderSection from "./Components/headerSection/page";
import FooterPage from "./Components/footer/page";
import Background from "./objects/Background";
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
  title: "Rohit Kumar | Full Stack Web Developer | Portfolio",
  description: "Explore Rohit Kumar's portfolio at rkwebs.vercel.app. View web development projects, skills in React, Next.js, and Three.js.",
  authors: [{ name: "Rohit Kumar" }],
  keywords: [
    "Rohit Kumar",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Three.js",
    "rkwebs",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Rohit Kumar | Full Stack Web Developer Portfolio",
    description: "Discover Rohit Kumar's work in web development, React, Next.js and more on rkwebs.vercel.app.",
    url: "https://rkwebs.vercel.app",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "https://rkwebs.vercel.app/og-image.jpg", // ✅ अपने server पर एक OpenGraph image upload करो (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Portfolio OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar | Full Stack Developer",
    description: "Explore Rohit Kumar's portfolio and web development work on rkwebs.vercel.app.",
    creator: "@yourtwitterhandle", // ✅ अगर Twitter handle है तो भर दो, वरना इसको हटा सकते हो
    images: ["https://rkwebs.vercel.app/twitter-card.jpg"], // ✅ Optional: Upload a twitter card image या हटा दो
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://rkwebs.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
