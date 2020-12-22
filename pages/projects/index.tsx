import PageTitle from "../../components/PageTitle";
import ProjectCard from "../../components/ProjectCard";
import { getSortedProjectsData } from "../../lib/projects";
import Link from "next/link";

const Projects = ({ allProjectsData }) => {
  console.log(allProjectsData);

  return (
    <>
      <PageTitle>Projects</PageTitle>

      <div id="projects-list">
        {allProjectsData.map(({ id, title, stack, img }) => (
          <Link href={`/projects/${id}`}>
            <a className="card-link">
              <ProjectCard
                title={title}
                img={img?.replace("(", "").replace(")", "")}
                description={stack}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
