// app/contact/page.tsx (or .js)

export const metadata = {
  title: "Contact Me | Connect on WhatsApp, Instagram, GitHub, LinkedIn & More",
  description: "Reach out to me on WhatsApp, Instagram, Facebook, GitHub, and LinkedIn. Let's connect and build meaningful relationships!",
  keywords: [
    "Contact",
    "WhatsApp",
    "Instagram",
    "Facebook",
    "GitHub",
    "LinkedIn",
    "Connect with me",
    "Networking",
    "Social Media Links",
    "Developer Contact"
  ],
  openGraph: {
    title: "Contact Me | Connect on Social Platforms",
    description: "Reach out easily via WhatsApp, Instagram, GitHub, LinkedIn & more. Let's connect!",
    url: "https://rkwebs.vercel.app/contact",
    siteName: "RK Webs",
    images: [
      {
        url: "https://rkwebs.vercel.app/og-image/contact-page.png",
        width: 1200,
        height: 630,
        alt: "Contact Me - Social Links"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me | Social & Developer Links",
    description: "DM, ping or connect with me across platforms like WhatsApp, Instagram, GitHub & LinkedIn.",
    images: ["https://rkwebs.vercel.app/og-image/contact-page.png"]
  }
};


import Combaine from './Combaine'

const page = () => {
  return (
    <Combaine/>
  )
}

export default page