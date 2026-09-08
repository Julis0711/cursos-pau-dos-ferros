import { Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu.jsx";
import Inicio from "./paginas/Inicio.jsx";
import Informatica from "./paginas/Informatica.jsx";
import Alimentos from "./paginas/Alimentos.jsx";
import Apicultura from "./paginas/Apicultura.jsx";
import NaoEncontrada from "./paginas/NaoEncontrada.jsx";

function App() {
  return (
    <>
      <Menu />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/informatica" element={<Informatica />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/apicultura" element={<Apicultura />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
