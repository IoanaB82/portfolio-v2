import PageContent from "../components/PageContent";
import PageTitle from "../components/PageTitle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const Contact = (props) => {
  return (
    <Container maxWidth="md">
      <PageTitle>Contact</PageTitle>
      <PageContent>
        <p>
          My name is Ioana Bancu and I am a junior developer. I have knowledge
          in HTML, SCSS, Javascript, and React. I am a self-taught person,
          curious and ambitious. I like to listen to music, read fantasy books,
          wander in nature looking for birds and taking photos.
        </p>
        <p>You can reach me at ioana.valentir[at]gmail.com.</p>

        <span className="social-section">
          <Link href="https://www.linkedin.com/in/ioana-cristina-bancu-a28b356a/">
            <a>
              <LinkedInIcon fontSize="large" />
            </a>
          </Link>
          <Link href="https://github.com/IoanaB82?tab=repositories">
            <a>
              <GitHubIcon />
            </a>
          </Link>
        </span>
      </PageContent>
      <style jsx>
        {`
          .social-section {
            display: flex;
            justify-content: start;
            align-items: center;
          }
          .social-section a {
            padding: 1rem;
          }
        `}
      </style>
    </Container>
  );
};

export default Contact;
