import { motion } from "framer-motion";
import Link from "next/link";

const Hero = (props) => {
  const list = {
    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        when: "afterChildren",
      },
    },
  };

  const variants = {
    visible: (i) => ({
      opacity: 1,
      translateX: 0,
      transition: {
        type: "spring",
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0, translateX: -400 },
  };

  return (
    <>
      <motion.div id="hero" variants={list} initial="hidden" animate="visible">
        <motion.div id="border" variants={variants} custom={3}></motion.div>

        <motion.div
          id="projects"
          variants={variants}
          custom={1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/projects">
            <a>
              <h2>Projects</h2>
            </a>
          </Link>
        </motion.div>
        <motion.div
          id="contact"
          variants={variants}
          custom={2}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/contact">
            <a>
              <h2>Contact</h2>
            </a>
          </Link>
        </motion.div>
      </motion.div>
      <style jsx>
        {`
          h2 {
            text-align: left;
            text-transform: uppercase;
            margin: 0;
            font-size: 3rem;
            transition: all .2s ease:
            display: block;
            padding: .2rem;
          }

          #text {
            align-self: center;
          }

          a:hover h2 {
            background-color: white;
            color: #463641;
            
          }

        `}
      </style>
    </>
  );
};

export default Hero;
