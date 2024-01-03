import { projects } from "../helpers/helpers";
import ProjectsList from "../components/ProjectsList";

const Projects = () => (
  <ProjectsList projects={projects} exitOption={"hidden"} />
);
export default Projects;
