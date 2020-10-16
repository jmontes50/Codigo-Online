import React, {useContext} from "react";
import {AuthContext} from "../context/authContext";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import NavAdmin from "./NavAdmin";

export default function Navigation() {

  const { user } = useContext(AuthContext);
  
  let seleccionarNav = () => {
    if(user !== null){
      return <NavAdmin />
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Mi Tiendita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
            <Nav.Link><Link to='/carrito'>Carrito</Link></Nav.Link>
            <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
            {seleccionarNav()}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
