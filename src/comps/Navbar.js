import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const NavbarGrid = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Revistas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="Upload">Upload Magazines</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Admin" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign off</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarGrid;