import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from '../firebase/config';


const NavbarGridUp = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Revistas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/Home" className="buttonLogin">Home</Link>
                    {<Link to="/signupps" className="buttonLogin">Register new members</Link>}
                </Nav>
                <Nav>
                    <Link to="/Login" className="buttonLogin">Admin</Link>
                    <NavDropdown title="" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Link to="/">
                            <NavDropdown.Item onClick={() => db.auth().signOut()}>
                                <Link to="/"></Link>Sign off</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarGridUp;