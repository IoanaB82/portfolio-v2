const PageContent = (props) => {
  return (
    <>
      <p>{props.children}</p>
      <style jsx>{`
        p {
          padding: 0 2rem;
          font-size: 1.3rem;
        }
      `}</style>
    </>
  );
};

export default PageContent;
