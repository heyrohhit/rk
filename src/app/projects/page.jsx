
import ProjectShowcase from "./ProjectShow";
import {projectsLive,projects} from "../Components/myservices/apis"

export default function ProjectsPage() {
  return (
  <>
  <ProjectShowcase apis={projectsLive} showOnly={0} title="Live Projects"/>
  <ProjectShowcase apis={projects} showOnly={0} title="Projects"/>
  </>
)}
