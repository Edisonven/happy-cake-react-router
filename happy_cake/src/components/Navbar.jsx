import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="navbar__navigation">
          <div className="navbar__links">
            <Link to="/" className="navbar__link">
              <img src="assets/imgs/home.svg" alt="" />
              Home
            </Link>
          </div>
          <div className="navbar__links">
            <Link to="/contacto" className="navbar__link">
              <img src="assets/imgs/contact.svg" alt="" />
              Contacto
            </Link>
          </div>
        </div>
        <div className="navbar__logo">
          <h1>Happy Cake</h1>
        </div>
      </nav>
    </div>
  );
};
export default Navegacion;
