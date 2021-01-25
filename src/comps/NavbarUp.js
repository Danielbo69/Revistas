import { data } from 'jquery';
import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from '../firebase/config';

const onsignout = () => {
  let data = localStorage.getItem("email")
//   console.log(data)
  if(data !== " "){
    db.auth().signOut()
    localStorage.removeItem("email")
  }
}

const NavbarGridUp = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand>Magazine</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/loged" className="buttonLogin">Home</Link>
                    <Link to="/Upload" className="buttonLogin">Upload Magazines</Link>
                    <Link to="/signupps" className="buttonLogin">Register new members</Link>
                </Nav>
                <Nav>
                    <label className="buttonLogin">Admin</label>
                    <NavDropdown title="" id="collasible-nav-dropdown">
                        <Link to="/Profile" className="buttonLogin" >profile</Link>
                        <NavDropdown.Divider />
                        <Link to="/Home" className="buttonLogin" onClick={() => onsignout()}>Sign off</Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarGridUp;