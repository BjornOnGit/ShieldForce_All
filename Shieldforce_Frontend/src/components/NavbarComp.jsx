import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, NavLink } from "react-bootstrap";
class NavbarComp extends Component {
    // state = {  } 
    render() { 
        return (
            <div>
                 <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Personal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Family
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Business</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Enterprise</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.5">
                                Buy Now
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Bundles & Pricing</Nav.Link>
                            <Nav.Link href="#link">Buy Now</Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown" className="me-auto">
                            <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
 
export default NavbarComp;