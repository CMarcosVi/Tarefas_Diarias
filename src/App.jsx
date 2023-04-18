import "./styles.css";

import Dias from "../components/diasDaSemana";

const semana = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado"
];
export default function App() {
  return (
    <main>
      <h1 className="nomeDoProjeto">Planos Semanais</h1>
      <div className="todosOsDias">
        {semana.map((dia) => (
          <Dias key={dia} dia={dia} />
        ))}
      </div>
    </main>
  );
}
