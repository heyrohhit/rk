
import ProjectShowcase from "./ProjectShow";
import PosterShow from "./posterShow";
import {projectsLive,projects} from "../Components/myservices/apis"

export default function ProjectsPage() {
  return (
  <>
  <ProjectShowcase apis={projectsLive} showOnly={0} title="Live Projects" discription="Responsive web apps and tools built with modern tech, showcasing design and coding skills."/>
  <PosterShow apis={projects} showOnly={0} title="Poster Projects" discription="Creative Photoshop posters with bold colors, clean layouts, and modern visual storytelling."/>

  </>
)}
