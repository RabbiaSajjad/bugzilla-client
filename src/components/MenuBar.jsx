import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Bugzilla</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/bugs">Bugs</Nav.Link>
          <Nav.Link href="/developers">Developers</Nav.Link>
          <Nav.Link href="/qas">QAs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuBar;
