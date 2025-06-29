export const metadata = {
  title: "Web Services | RK Web Studio",
  description: "Discover a range of professional web services offered by RK Web Studio including web design, development, and creative digital solutions.",
  openGraph: {
    title: "Web Services - RK Web Studio",
    description: "Explore RK Web Studio's best website designs, digital services, and creative development solutions.",
    url: "https://rkwebs.vercel.app/services",
    siteName: "RK Web Studio",
    images: [
      {
        url: "https://rkwebs.vercel.app/img/pic02.webp",  // ✅ Using your available image
        width: 1200,
        height: 630,
        alt: "Web Services by RK Web Studio",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "Web Services - RK Web Studio",
    description: "Creative web design and development services by RK Web Studio.",
    images: ["https://rkwebs.vercel.app/img/pic02.webp"],  // ✅ Matching OG image
  },
};

import ServicePageItem from "./ServicePageItem";
import Background from "../objects/Background";

export default function ProjectsPage() {
  return <>
  <Background/>
  <ServicePageItem />
  </>;
}
