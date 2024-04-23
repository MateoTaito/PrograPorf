import ContactoLoginFormulario from "../components/ContactoLoginFormulario";
import ContactoLoginListaReuniones from "../components/ContactoLoginListaReuniones";

function ContactoLogin() {
  return (
    <div>
      <div className="header_login">
        <h1 className="text_login">Bienvenido a tu Fz-104</h1>
        <div className="underline_login"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ContactoLoginFormulario />
          </div>
          <div className="col-6">
            <ContactoLoginListaReuniones />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoLogin;
