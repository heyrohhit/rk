// app/services/page.tsx (or .js)
export const metadata = {
  title: "Web Services | RK Web Studio - Transform Your Online Presence",
  description: "Elevate your brand with RK Web Studio’s expert web design, development, and creative digital solutions tailored for businesses in India.",
  keywords: [
    "RK Web Studio services",
    "web design services India",
    "web development company India",
    "creative digital solutions India",
    "hire web designer near me",
    "professional web development India",
    "website design agency India",
    "best web design services 2025",
    "custom web development India",
    "digital marketing solutions India",
    "web design portfolio India",
    "freelance web designer India",
    "responsive web design services",
    "ecommerce web development India",
    "how to hire a web developer India"
  ],
  alternates: {
    canonical: "https://rkwebs.vercel.app/services",
  },
  openGraph: {
    title: "RK Web Studio | Expert Web Design & Development Services",
    description: "Transform your online presence with RK Web Studio’s innovative web design, development, and digital solutions crafted in India.",
    url: "https://rkwebs.vercel.app/services",
    siteName: "RK Web Studio",
    images: [
      {
        url: "https://rkwebs.vercel.app/img/pic02.webp",
        width: 1200,
        height: 630,
        alt: "RK Web Studio Web Services Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Web Studio | Creative Web Design & Development",
    description: "Craft a stunning online presence with RK Web Studio’s web design, development, and digital solutions in India.",
    images: ["https://rkwebs.vercel.app/img/pic02.webp"],
  },
  robots: "index, follow",
};


export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
