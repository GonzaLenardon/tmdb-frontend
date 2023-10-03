export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="d-flex justify-content-evenly">
          <a href="https://es-la.facebook.com/" target="blank">
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a href="https://instagram.com" target="blank">
            <i className="bi bi-instagram fs-3"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5493434658043&text=Bienvenido a Unanime!!! Hacenos tu consulta y a la brevedad te respondermos"
            target="blank"
          >
            <i className="bi bi-whatsapp text-color-warning fs-3"></i>
          </a>
          <a href="#">
            <i className="bi bi-github text-warning fs-3" />
          </a>
        </nav>
      </div>
    </footer>
  );
};
