import { useContext } from "react";
import FormularioContext from "../context/FormularioContext";

function ContactoReunion({reunion}) {
    const {setReunion, eliminarReunion } = useContext(FormularioContext);
    
    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar esta Reunion");
        if (respuesta) {
        eliminarReunion(id);
        }
    };

    const handleReunion = () => {
      setReunion(reunion);
  };

    const {nombre,  email, fecha, comentarios, id} = reunion

  return (
    <div className="contactoreunion-container">
      <div className="contactoreunion-margin">
      <p>
        Nombre: {""}
        <span>{nombre}</span>
      </p>

      <p>
        Email: {""}
        <span>{email}</span>
      </p>

      <p>
        Fecha: {""}
        <span>{fecha}</span>
      </p>

      <p>
        Comentarios: {""}
        <span>{comentarios}</span>
      </p>
      <div className="submit-container_contactologin">
      <div className="boton-contactologin submit_login gray_login  submit_login">
        <button type="button" onClick={handleReunion}>
          Editar
        </button>
      </div>
      <div className="boton-contactologin submit_login gray_login  submit_login">
        <button type="button" onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ContactoReunion;
