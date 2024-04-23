import { useContext } from "react";
import FormularioContext from "../context/FormularioContext";
import ContactoReunion from "./ContactoReunion";

function ContactoListaReuniones() {
  const { listaReuniones} = useContext(FormularioContext);
  return (
    <div>
      {listaReuniones && listaReuniones.length ? (
        <>
          <h1>Listado de Reuniones</h1>
          {listaReuniones.map((reunion) => (
            <ContactoReunion
              key={reunion.id}
              reunion={reunion}
            />
          ))}
        </>
      ) : (
        <>
          <h1>No hay Reuniones</h1>
        </>
      )}
    </div>
  );
}

export default ContactoListaReuniones;
