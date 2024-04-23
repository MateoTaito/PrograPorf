import { useContext, useEffect } from "react";
import FormularioContext from "../context/FormularioContext";
import { Error } from "../components/Error";
import userIcon from "../assets/WhatsApp Image 2023-11-07 at 22.08.13 (1).jpeg";
import emailIcon from "../assets/WhatsApp Image 2023-11-07 at 22.08.13 (2).jpeg";
import passIcon from "../assets/WhatsApp Image 2023-11-07 at 22.08.13.jpeg";
import caleIcon from "../assets/calendar.svg";
import chatIcon from "../assets/chat-fill.svg";

function ContactoFormulario() {
  const {
    // Propiedades Reunion
    nombre,
    setNombre,
    email,
    setEmail,
    fecha,
    setFecha,
    comentarios,
    setComentarios,
    error,
    setError,

    // Objeto Reunion
    reunion,
    setReunion,

    // Lista Reuniones
    listaReuniones,
    setListaReuniones,
  } = useContext(FormularioContext);

  // Validacion
  useEffect(() => {
    if (Object.keys(reunion).length > 0) {
      setNombre(reunion.nombre);
      setEmail(reunion.email);
      setFecha(reunion.fecha);
      setComentarios(reunion.comentarios);
    }
  }, [reunion]);

  // Generar un Id unico para cada Reunion
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([nombre, email, fecha].includes("")) {
      setError(true);
      return;
    }

    

    setError(false);

    // Contruimos objeto para el registro de la reunion
    const objetoReunion = {
      nombre,
      email,
      fecha,
      comentarios,
    };
    // Saber si estamos editando una reunion o agregando
    if (reunion.id) {
      // Editamos el registro de la reunion existente
      objetoReunion.id = reunion.id;
      const listaReuniones_actualizado = listaReuniones.map((reunionState) =>
        reunionState.id === reunion.id ? objetoReunion : reunionState
      
      );
      setListaReuniones(listaReuniones_actualizado);
      alert('Se ha editado una reunion, podrás verla en tu login de cuenta.');
      setReunion({});
    } else {
      // Copiamos el arreglo actual y luego agregamos el nuevo cliente
      objetoReunion.id = generarId();
      alert('Se ha agendado una reunion, podrás verla en tu login de cuenta.');
      setListaReuniones([...listaReuniones, objetoReunion]);
    }

    // Reiniciamos el formulario
    setNombre("");
    setFecha("");
    setEmail("");
    setComentarios("");
  };

  return (
    <div className="container_login">
      <div className="header_login">
        <h1 className="text_login">¡Habla con nosotros!</h1>
        <div className="underline_login"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          {error && <Error mensaje="Todos los campos son obligatorios" />}
        </div>

        <div className="inputs_login">
          <div className="input_login">
            <img src={userIcon} alt="a" />
            <input
              id="Nombre Completo"
              type="text"
              placeholder="Ingrese su nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs_login">
          <div className="input_login">
            <img src={emailIcon} alt="a" />
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs_login">
          <div className="input_login">
            <img src={caleIcon} alt="a" />
            <input
              id="fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs_login">
          <div className="input_textarea">
            <img src={chatIcon} alt="a" />
            <textarea
              id="comentarios"
              placeholder="Cual es la razon de tu reunion"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-container_login submit_login gray_login  submit_login">
          <input
            type="submit"
            value={reunion.id ? "Editar Reunion" : "Agendar Reunion"}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactoFormulario;
