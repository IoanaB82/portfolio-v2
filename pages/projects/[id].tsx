import { getAllProjectsIds, getProjectsData } from "../../lib/projects";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const Project = ({ projectData }) => {
  const imgUrl = projectData.img;
  let urlCorrected = imgUrl.replace("(", "").replace(")", "");

  const useStyles = makeStyles({
    root: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      padding: "1rem",
    },
  });
  const classes = useStyles();

  return (
    <>
      <Container
        maxWidth="md"
        classes={{
          root: classes.root,
        }}
      >
        <h1>{projectData.title}</h1>
        <figure>
          <img src={urlCorrected} />
        </figure>

        <div
          className="project-detail"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </Container>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          figure {
            margin-bottom: 1rem;
          }
          img {
            height: 15rem;
            width: auto;

            object-fit: cover;
            object-position: top;
            border-radius: 15px;
            display: block;
            margin: 2rem auto;
          }

          .project-detail {
            padding: 2rem;
            font-size: 1.2rem;
          }

          @media screen and (max-width: 600px) {
            img {
              height: 15rem;
              width: 100%;
            }
            h1 {
              font-size: 1.6rem;
            }
          }
        `}
      </style>
    </>
  );
};
export default Project;

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectsData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
