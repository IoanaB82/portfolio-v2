import Link from "next/link";

import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <>
      <motion.nav>
        <ul>
          <motion.li whileHover={{ color: "white" }}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </motion.li>
          <motion.li whileHover={{ color: "white" }}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
