import ProjectsList from "../components/ProjectsList";
import { projects } from "../helpers/helpers";

const Projects = () => (
  <ProjectsList projects={projects} exitOption={"hidden"} />
);
export default Projects;
