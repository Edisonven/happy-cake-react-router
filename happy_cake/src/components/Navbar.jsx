import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="navbar__navigation">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/contacto" className="navbar__link">
            Contacto
          </Link>
        </div>
        <div className="navbar__logo">
          <h1>Happy Cake</h1>
        </div>
      </nav>
    </div>
  );
};
export default Navegacion;
