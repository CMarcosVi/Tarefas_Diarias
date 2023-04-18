export default function Compromisso(props) {
  return (
    <li className={props.compromisso.done ? "done" : ""}>
      <div>
        <input
          type="checkbox"
          id={`caixaDeChecagem-${props.compromisso.id}`}
          onChange={() => props.toggleDone(props.compromisso.id)}
          checked={props.compromisso.done}
        />
        <label htmlFor={`caixaDeChecagem-${props.compromisso.id}`}>
          {props.compromisso.name}
        </label>
      </div>
      <button onClick={() => props.removerCompromisso(props.compromisso.id)}>
        Remover
      </button>
    </li>
  );
}
