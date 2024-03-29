import "./App.css";
import Navegacion from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import Contacto from "./components/views/Contacto";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
