import * as React from "react";
import {Link} from "gatsby"
import "../styles/index.css"
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import navStyle from "../styles/navBar.css"


import logo from "../images/registered.png"
const Header=()=>{
    return (
<header>
<Navbar collapseOnSelect expand="lg" className="navColor">
  <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="ms-auto" href="#aboutMe">About Me</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#work">Work</Nav.Link>
      <Button variant="outline-light" >Resume</Button>

      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
</header>

    )
}
export default Header;