import React from 'react';
import { Navbar, Col } from 'react-bootstrap';
import './footer.css';

export default function Footer() {
  return (
    <Navbar bg="danger" variant="light" expand="lg">
            <Col className="text-center text-light">
                Copyright <i className="fa fa-copyright"></i> 2022 Valentin Sznitowski
            </Col>
    </Navbar>
  );
}