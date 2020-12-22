import Navbar from "./Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  return (
    <header>
      <motion.div whileHover={{ x: 45 }}>
        <Link href="/">
          <a>
            <h2>Ioana's Portfolio</h2>
          </a>
        </Link>
      </motion.div>
      {router.pathname !== "/" ? <Navbar /> : null}
    </header>
  );
};

export default Header;
