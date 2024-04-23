import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "../styles.css"

function nav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/Inicio"}>
            Fz-104
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Contacto" className="text-navbar">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/Actividades" className="text-navbar">
                Actividades
              </Nav.Link>
              <Nav.Link as={Link} to="/Calendario" className="text-navbar">
                Calendario
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to= "/Login" className="text-navbar">
                Login
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default nav;
