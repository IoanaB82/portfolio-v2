//import anime from "animejs";
import { motion, useAnimation } from "framer-motion";
import Hero from "../components/Hero";
import { useEffect } from "react";

export default function Home(props) {
  let count = 96;

  function getDivList() {
    let divList = [];
    for (let i = 0; i < count; i++) {
      divList.push(<div />);
    }
    return divList;
  }

  function randomColor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomCoord(min, max, i) {
    return Math.floor(Math.random() * (max - min) * i + min);
  }

  function calcRow(index) {
    return Math.ceil(index / 12);
  }
  function calcCol(index) {
    return Math.floor(index % 12);
  }

  // useEffect(() => {
  //   anime({
  //     targets: ".pieces",
  //     scale: [
  //       { value: 0.1, easing: "easeOutSine", duration: 500 },
  //       { value: 1, easing: "easeInOutQuad", duration: 1200 },
  //     ],
  //     opacity: [{ value: 1 }, { value: 0 }],
  //     delay: anime.stagger(200, { grid: [12, 8], from: "center" }),
  //   });
  // }, []);
  const controls = useAnimation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.17, 0.67, 1, 0.67],

        staggerChildren: 0.01,
      },
    },
  };

  const elem = {
    hidden: { opacity: 1 },
    visible: (i) => ({
      opacity: 0,
      translateX:
        calcCol(i) < 7
          ? Math.floor(Math.random() * i - window.innerWidth / 2)
          : Math.floor(Math.random() * i + window.innerWidth),
      translateY:
        calcRow(i) < 5
          ? Math.floor(Math.random() * i - window.innerHeight / 2)
          : Math.floor(Math.random() * i + window.innerHeight),
    }),
  };

  return (
    <>
      <motion.div
        id="main"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {getDivList().map((e, idx) => (
          <motion.div
            className="pieces"
            custom={idx}
            key={idx}
            variants={elem}
            style={{
              backgroundColor:
                "rgb(" +
                randomColor(50, 140) +
                ", " +
                randomColor(50, 140) +
                ", " +
                randomColor(50, 140) +
                ")",
            }}
          ></motion.div>
        ))}
        <Hero />
      </motion.div>
    </>
  );
}
