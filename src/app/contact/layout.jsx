// app/contact/page.tsx (or .js)

export const metadata = {
    title: "Contact Rohit Kumar | Web Developer in India - WhatsApp, LinkedIn, GitHub",
    description: "Connect with Rohit Kumar, a professional web developer in India, via WhatsApp, LinkedIn, GitHub, Instagram, or Facebook for projects and collaborations.",
    keywords: [
      "Rohit Kumar web developer India",
      "contact web developer near me",
      "hire freelance web developer India",
      "WhatsApp contact web designer India",
      "LinkedIn software developer India",
      "GitHub programmer India",
      "Instagram web developer connect",
      "Facebook developer networking India",
      "web development services India",
      "freelance software developer contact",
      "best web developer in India",
      "connect with web designer near me",
      "Rohit Kumar portfolio contact",
      "web development collaboration India",
      "how to contact a web developer"
    ],
    alternates: {
      canonical: "https://rkwebs.vercel.app/contact",
    },
    openGraph: {
      title: "Contact Rohit Kumar | Expert Web Developer in India",
      description: "Reach out to Rohit Kumar, a skilled web developer in India, via WhatsApp, LinkedIn, GitHub, Instagram, or Facebook for professional projects and networking.",
      url: "https://rkwebs.vercel.app/contact",
      siteName: "Rohit Kumar",
      images: [
        {
          url: "https://rkwebs.vercel.app/og-image/contact-page.png",
          width: 1200,
          height: 630,
          alt: "Rohit Kumar Contact Page - Web Developer India",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Rohit Kumar | Web Developer in India",
      description: "Connect with Rohit Kumar, an expert web developer in India, on WhatsApp, LinkedIn, GitHub, Instagram, or Facebook for projects and networking.",
      images: ["https://rkwebs.vercel.app/og-image/contact-page.png"],
    },
  };

export default function ContactLayout({ children }) {
  return <>
 
  {children}
  </>;
}
