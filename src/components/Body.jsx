import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub,faFacebook,faReact,faJsSquare,faHtml5,faNpm,faPython,faJava,faCss3,faNodeJs

} from "@fortawesome/free-brands-svg-icons"
import Card from "./Card"

import Project from "../components/Projects"
import gymSite from "../images/g.png"


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
      <Nav.Link href="#skill">Skills</Nav.Link>
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


            <section id="skill">

                    <div className = "skills">
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faReact}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faJsSquare}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faHtml5}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faCss3}/>

                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faNpm}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faPython}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faJava}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faNodeJs}/>
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faGithub}/>



                    </div>
            </section>
            <section id="project">
            <h4><span>Feature Projects</span></h4>
            <h2>Stuff I've Worked On</h2>

            <div class="row" className="row  project-container">
            
              
            <div class="project">
            <Project
              img={gymSite}
            />
            

            </div>
            
            <div>
            <Card/>

            </div>


              
            </div>
            

            </section>



            </div>




       </div>
    
        );

}
export default Body;