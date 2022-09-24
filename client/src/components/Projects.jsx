import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  //data is where you get the length of the projects
  const {loading, error, data} = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      {
        //if length of projects is more than 0, display them or display no projects
        data.projects.length > 0 ? (
          <div className="row mt-5">
            {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p>No Projects. Add a Project above</p>
        )
      }
    </>
  );
}
