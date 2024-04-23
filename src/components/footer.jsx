import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light footer">
      <Container>
        <Row>
          <Col className='info-footer'>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Email: info@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;