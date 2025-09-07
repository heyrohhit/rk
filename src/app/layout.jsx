import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import Components from "./Components/page";
import HeaderSection from "./Components/headerSection/page";
import FooterPage from "./Components/footer/page";
import Backgrounds from "./Components/backgounds/page";
import { ThemeProvider } from "next-themes";

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
  description:
    "Showcase your digital success with Rohit Kumar’s portfolio at rkwebs.vercel.app. Explore expert React, Next.js, and Three.js web development projects.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <StyledJsxRegistry>
          {/* SYSTEM AUTOMATIC THEME */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            value={{
              light: "light", // class="light"
              dark: "dark",   // class="dark"
            }}
          >
            <HeaderSection />
            <main>{children}</main>
            <FooterPage />
            <Components />
            <Backgrounds />
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
