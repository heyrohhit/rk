
import ProjectShowcase from "./ProjectShow";
import {projectsLive,projects,logo} from "../Components/myservices/apis"

export default function ProjectsPage() {
  return (
  <>
  <ProjectShowcase apis={projectsLive} showOnly={0} title="Live Projects" discription="Responsive web apps and tools built with modern tech, showcasing design and coding skills."/>
  <ProjectShowcase apis={projects} showOnly={0} title="Poster Projects" discription="Creative Photoshop posters with bold colors, clean layouts, and modern visual storytelling."/>
  <ProjectShowcase apis={logo} showOnly={0} title="Logo Projects" discription="Professional CorelDRAW logos focusing on brand identity, clarity, and lasting impact."/>
  </>
)}
