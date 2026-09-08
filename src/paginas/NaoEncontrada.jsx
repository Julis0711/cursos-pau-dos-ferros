import { Link } from "react-router-dom";

function NaoEncontrada() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <p>O endereço digitado não existe neste site.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}

export default NaoEncontrada;
