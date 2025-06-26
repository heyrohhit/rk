
export const metadata = {
  title: "My Web Services | RK Web Studio",
  description: "Explore my web services by RK Web Studio.",
  openGraph: {
    title: "RK Web Studio - Services",
    description: "See our best poster designs, digital art, and creative web work.",
    url: "https://rkwebs.vercel.app/services",
    siteName: "RK Web Studio",
    images: [
      {
        url: "https://rkwebs.vercel.app/og-image.png", // Replace with your own image
        width: 1200,
        height: 630,
        alt: "RK Web Studio Services",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "RK Web Studio - Services",
    description: "Showcasing creative design and tech projects.",
    images: ["https://rkwebs.vercel.app/og-image.png"], // Same here
  },
};

import ServicePageItem from "./ServicePageItem";

export default function ProjectsPage() {
  return (
  <>
  <ServicePageItem/>
  </>
)}
