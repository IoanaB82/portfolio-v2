import { motion } from "framer-motion";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const ProjectCard = (props) => {
  let colors = [
    "#7F81B5",
    "#CCCEFF",
    "#40407B",
    "#7B7BC7",
    " #577B57",
    " #776E8A",
  ];

  let i = Math.floor(Math.random() * colors.length);

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };
  return (
    <motion.div className="project-card" whileHover={{ scale: 0.9 }}>
      <motion.div
        className="outline"
        whileHover={{ border: "10px solid #776e8a" }}
        transition={spring}
      >
        <img src={props.img} alt="" className="card-image" />
        <h3 className="card-title">{props.title}</h3>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
        <a className="card-cta" href={props.url}>
          <span
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              lineHeight: "1.2rem",
            }}
          >
            Learn more
            <DoubleArrowIcon />
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
