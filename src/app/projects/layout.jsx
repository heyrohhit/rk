// app/projects/page.tsx (or .js)
export const metadata = {
  title: "Projects | RK Web Workflow - Creative Web Design & Digital Art",
  description: "Discover RK Web Workflow’s portfolio of innovative poster designs, digital art, and web development projects crafted in India.",
  keywords: [
    "RK Web Workflow projects",
    "web design portfolio India",
    "creative poster design India",
    "digital art portfolio",
    "web development projects India",
    "graphic design portfolio India",
    "best web design studio India",
    "creative web projects near me",
    "RK Web Studio portfolio",
    "poster design services India",
    "digital art projects India",
    "web designer portfolio India",
    "hire web design studio India",
    "creative design projects 2025",
    "showcase web development India"
  ],
  alternates: {
    canonical: "https://rkwebs.vercel.app/projects",
  },
  openGraph: {
    title: "RK Web Workflow | Creative Projects & Web Design Portfolio",
    description: "Explore RK Web Workflow’s stunning poster designs, digital art, and innovative web development projects from India.",
    url: "https://rkwebs.vercel.app/projects",
    siteName: "RK Web Workflow",
    images: [
      {
        url: "https://rkwebs.vercel.app/img/pic02.webp",
        width: 1200,
        height: 630,
        alt: "RK Web Workflow Projects Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Web Workflow | Web Design & Digital Art Projects",
    description: "Showcasing RK Web Workflow’s creative poster designs, digital art, and web development projects from India.",
    images: ["https://rkwebs.vercel.app/img/pic02.webp"],
  },
  robots: "index, follow",
};

  export default function ProjectsLayout({ children }) {
    return <>
    {/* <h1>projects</h1> */}
    {children}
    </>;
  }