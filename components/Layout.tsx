import Container from "@material-ui/core/Container";
import Header from "./Header";

import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Ioana's Portfolio</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <base target="_blank"></base>
      </Head>
      <Container maxWidth="lg">
        <Header />

        <main id="main-content">{props.children}</main>
      </Container>
    </>
  );
};

export default Layout;
