export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid row">
        <div className="">
          <a
            href="https://github.com/GonzaLenardon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github text-white fs-3 " />
          </a>
          <a
            href="https://www.linkedin.com/in/gonzalolenardon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin text-white fs-3 mx-2" />
          </a>
        </div>
        <p className="copyright d-inline ">© Copyright Gonzalo Lenardon 2023</p>
      </div>
    </footer>
  );
};
