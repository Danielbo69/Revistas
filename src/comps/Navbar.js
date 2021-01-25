import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from '../firebase/config';


const NavbarGrid = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand >Magazine</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/Home" className="buttonLogin">Home</Link>
                    {/* <Link to="/Login" className="buttonLogin">Upload Magazines</Link> */}
                </Nav>
                <Nav>
                    <Link to="/Login" className="buttonLogin">Log in</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarGrid;