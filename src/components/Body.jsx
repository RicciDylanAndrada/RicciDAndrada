import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";

import "../styles/index.css"
const Body = () =>{

return (
 




        
            <div>
            <Navbar collapseOnSelect expand="lg" className="navColor">
              <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="ms-auto" href="#intro">About Me</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#work">Work</Nav.Link>
      <Button variant="outline-light" >Resume</Button>

      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
<div className="body">
            <section id="intro" className="intro">
            <h2>Hello, my name is</h2>
            <h1>Ricci Andrada</h1>
            <p>
            I am a student at New Jersey Institute of Technology studying computer science.
             <br/> On the side I create Web Applications 
            </p>
            

            </section>


            <section id="experience">
<h1>Hello</h1>
            </section>
            </div>

       </div>
    
        );

}
export default Body;