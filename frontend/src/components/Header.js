import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Discounts.com</Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="/">
              <i className="fa-solid fa-house"></i>
            </Nav.Link>
            <Nav.Link href="/projects">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </Nav.Link>
            <Nav.Link href="/login">
              <i className="fa-solid fa-user"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
