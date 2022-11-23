import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Col, Button, Form, NavDropdown, Row } from 'react-bootstrap';
import Cart from '../CartWidget/CartWidget';
import { FcShop } from 'react-icons/fc';

export default function Header() {
    return (
        <Navbar expand="lg" bg="danger" variant="dark">
            <Container fluid>
                <Navbar.Brand className="m-2" href="#">
                    <Link to='/'>
                        <FcShop style={{ color: 'white', fontSize: '30px' }} />Api-Shop
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav>
                        <Nav.Link href="#action1">
                            <Link to='/Login'>
                                Iniciar Sesión
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="#action1">
                            <Link to='/Register'>
                                Registrarse
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="#action1">
                            <Link to='/Products'>
                                Productos
                            </Link>
                        </Nav.Link>


                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Buscar</Button>
                        </Form>
                    </Nav>

                    <Nav.Link href="#action1">
                        <Link to='/Cart'>
                            <Cart />
                        </Link>
                    </Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

