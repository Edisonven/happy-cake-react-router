import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="danger" variant="dark" className="Navbar">
      <Container>
        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/planes" className="text-white ms-3 text-decoration-none">
            Contacto
          </Link>
        </div>
        <div>
          <Navbar.Brand>Happy Cake</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
