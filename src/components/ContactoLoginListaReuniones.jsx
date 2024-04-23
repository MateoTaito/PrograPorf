import { useContext } from "react";
import FormularioContext from "../context/FormularioContext";
import ContactoReunion from "./ContactoReunion";

function ContactoListaReuniones() {
  const { listaReuniones } = useContext(FormularioContext);
  return (
    <div className="contactologin-container">
      {listaReuniones && listaReuniones.length ? (
        <>
          <div className="header_login">
            <h1 className="text_login text-center">Listado de reuniones</h1>
          </div>
          {listaReuniones.map((reunion) => (
            <ContactoReunion key={reunion.id} reunion={reunion} />
          ))}
        </>
      ) : (
        <>
          <div className="header_login">
            <h1 className="text_login text-center">No hay reuniones disponibles</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactoListaReuniones;
