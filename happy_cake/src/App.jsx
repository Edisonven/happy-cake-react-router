import "./App.css";
import Navegacion from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import Contacto from "./components/views/Contacto";
function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </>
  );
}

export default App;
