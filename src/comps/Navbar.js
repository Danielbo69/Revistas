import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from '../firebase/config';



const NavbarGrid = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Revistas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/Home" className="buttonLogin">Home</Link>
                <Link to="/Upload" className="buttonLogin">Upload Magazines</Link>
                </Nav>
                <Nav>
                    <Link to="/login" className="buttonLogin">Log in</Link>
                    {/* <NavDropdown title="" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => db.auth().signOut()}>Sign off</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>Admin
        </Navbar>
    )
}
export default NavbarGrid;