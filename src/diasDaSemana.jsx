import { useState } from "react";
import Compromisso from "../components/Compromisso";

export default function Dias(props) {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = () => {
    const name = prompt("Informe o nome do compromisso:");
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false
    };
    setAppointments((currentState) => [...currentState, newAppointment]);
  };

  const toggleDone = (appointmentId) => {
    setAppointments((currentState) => {
      return currentState.map((compromisso) => {
        if (compromisso.id !== appointmentId) {
          return compromisso;
        } else {
          return { ...compromisso, done: !compromisso.done };
        }
      });
    });
  };

  const removerCompromisso = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.filter((compromisso) => compromisso.id !== appointmentId)
    );
  };
  return (
    <div className="dia">
      <h2>segunda-feira</h2>
      <ul>
        {appointments.map((compromisso) => (
          <Compromisso
            key={compromisso.id}
            compromisso={compromisso}
            toggleDone={toggleDone}
            removerCompromisso={removerCompromisso}
          />
        ))}
      </ul>
      <button onClick={addAppointment}>Adicionar</button>
    </div>
  );
}
