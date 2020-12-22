const PageTitle = (props) => {
  return (
    <>
      <h1>{props.children}</h1>
      <style jsx>{`
        h1 {
          padding-left: 2rem;
        }
      `}</style>
    </>
  );
};

export default PageTitle;
