
export const metadata = {
  title: "Projects | RK Web Studio",
  description: "Explore creative poster designs and projects by RK Web Studio.",
  openGraph: {
    title: "RK Web Studio - Projects",
    description: "See our best poster designs, digital art, and creative web work.",
    url: "https://rkwebs.vercel.app/projects",
    siteName: "RK Web Studio",
    images: [
      {
        url: "https://rkwebs.vercel.app/og-image.png", // Replace with your own image
        width: 1200,
        height: 630,
        alt: "RK Web Studio Projects",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "RK Web Studio - Projects",
    description: "Showcasing creative design and tech projects.",
    images: ["https://rkwebs.vercel.app/og-image.png"], // Same here
  },
};

import ProjectShowcase from "./ProjectShow";
import {projectsLive,projects} from "../Components/myservices/apis"
import Backgrounds from "../Components/backgounds/page";

export default function ProjectsPage() {
  return (
  <>
  <Backgrounds/>
  <ProjectShowcase apis={projectsLive} showOnly={0} title="Live Projects"/>
  <ProjectShowcase apis={projects} showOnly={0} title="Projects"/>
  </>
)}
