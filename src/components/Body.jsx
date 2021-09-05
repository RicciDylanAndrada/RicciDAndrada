import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub,faFacebook,faReact,faJsSquare,faHtml5,faNpm,faPython,faJava,faCss3,faNodeJs,faBootstrap,faSass

} from "@fortawesome/free-brands-svg-icons"
import Card from "./Card"

import Project from "../components/Projects"
import gymSite from "../images/g.png"
import list from "../images/calc.png"
import Tip from "../images/tip.png"
import Form from "../components/contactForum.jsx"
import File from "../files/RicciDylanAndrada.pdf"
import Port from "../images/port.png"



import "../styles/index.css"
const Body = () =>{


  function validateForm(){
    alert("hello")
  }



  const GymBody =
  <ul>
    <li>
      Built using the GatsbyJS ( a React-Based static site generator), and Bootstrap. 
    </li>
    <li>Gym website mockup that is translated into a fully responsive website</li>
  </ul>

  const todoList=
  <ul>
  <li>
    Built using NodeJS, EJS and MongoDB. 
  </li>
  <li>A simple To Do List that allows users to add and remove tasks</li>
  <li>With the use of EJS and MongoDB users are able to create multiple lists</li>

  
</ul>

const tip=
  <ul>
  <li>
    Built using HTML, CSS and Javascript. 
  </li>
  <li>A Calculator that calculates the tip given the party size and tip percentage</li>
</ul>

const port=
  <ul>
  <li>
    Built using GatsbyJS and Boostrap. 
  </li>
  <li>Single page fully responsive website to demonstrate my work </li>
</ul>
  

return (
 
            <div>
            <div class="navBar">
            <Navbar collapseOnSelect expand="lg" className="navColor">
              <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link style={{color:"white" ,marginRight:"20px"}} className="ms-auto" href="#intro">About Me</Nav.Link>
      <Nav.Link style={{color:"white" ,marginRight:"20px"}} href="#skill">Skills</Nav.Link>
      <Nav.Link  style={{color:"white",marginRight:"40px"}} href="#project">Projects</Nav.Link>

      <Button  href ={File} variant="outline-light" >Resume</Button>

      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
           
<div className="body">
            <section id="intro" className="intro">
            <h2>Hello, my name is</h2>
            <h1>Ricci Andrada</h1>
            <p>
            I am a web developer with a passion for front end development.  
             <br/>Currently I am a senior at New Jersey Institute of Technology studying computer science.
             <br/>I am passionate about solving problems, as well as creating interactive and entertaining experiences on the web.

            </p>
            

            </section>


            <section id="skill">
            <h4><span>Skills</span></h4>
            <div class="skill-wrapper">

           


                    <div class = "row skills">


                    <div class="skill-box col-lg-3 col-md-4 col-sm-6">
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faReact}/>
<p>React</p>
                    </div>
                    <div class="skill-box  col-lg-3 col-md-4 col-sm-6">

                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faJsSquare}/>
<p>Javascript</p>
                    </div>
                    <div class="skill-box  col-lg-3 col-md-4 col-sm-6">

                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faHtml5}/>
<p>HTML5</p>
                    </div>

                    <div class="skill-box  col-lg-3 col-md-4 col-sm-6">

                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faCss3}/>
<p>CSS3</p>
                    </div>

                    <div class="skill-box  col-lg-3 col-md-4 col-sm-6">
                    <FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faNpm}/>

<p>Npm</p>

 </div>


<div class="skill-box  col-lg-3 col-md-4 col-sm-6">
<FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faPython}/>


<p>Python</p>
</div>

<div class="skill-box col-lg-3 col-md-4 col-sm-6 ">
<FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faJava}/>


<p>Java</p>
</div>
<div class="skill-box  col-lg-3 col-md-4 col-sm-6">
<FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faNodeJs}/>


<p>NodeJs</p>
</div>
<div class="skill-box  col-lg-3 col-md-4 col-sm-6">
<FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faGithub}/>


<p>GitHub</p>
</div>

<div class="skill-box  col-lg-3 col-md-4 col-sm-6">
<FontAwesomeIcon className ='skillIcon' size= "3x" color="white" icon = {faBootstrap}/>


<p>Boostrap</p>
</div>



</div>

                    </div>
            </section>





            <section id="project">
            <h4><span>Feature Projects</span></h4>
            <h2>Stuff I've Worked On</h2>

            <div class="row" className="row  project-container">
            
              
            <div class="project">
            <Project 
              img={gymSite}
              Title=" Gym Landing Site"
              Body={GymBody}
            />
            

            </div>


            <div class = "project">
            <Project
            img={list}
            Title ="To Do List"
            Body={todoList}
            />
            </div>



            <div class = "project">
            <Project
            img={Tip}
            Title = "Tip Calculator "
            Body={tip}
            />
            </div>

            <div class = "project">
            <Project
            img={Port}
            Title = "Portfolio"
            Body={port}
            />
            </div>
            
            
           


              
            </div>
            

            </section>




            <section id="footer">

            <h4>
              <span>
                Contact 
              </span>
            </h4>
            <div class="foot">
            <div class="row contact">     
           
           <div class="contactInfo col-xs-12 col-sm-12 col-md-6 col-lg-6">
               <h2>Get in Touch</h2>
               <h7>Have a question or want to work together?
</h7>

           </div>

           <div class="form col-xs-12 col-sm-12 col-md-6 col-lg-6">
           <Form/>    

           </div>

          </div>
            </div>
            

            </section>



            </div>




       </div>
    
        );

}
export default Body;