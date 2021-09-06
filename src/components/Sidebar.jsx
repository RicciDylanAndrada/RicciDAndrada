import * as React from "react";
import "../styles/index.css"
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub,faFacebook,faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons"


import logo from "../images/registered.png"

const SideBar=()=>{

    return(

    <div >
    <div className="sidebar">
    <Container>
    <Navbar.Brand className="icon" bg ="light">
      <img 
      src={logo}
      color="light"
      height="7%"
      width="500%"

      />
  </Navbar.Brand>

  <div className= "socials">

        <a href="https://github.com/RicciDylanAndrada">    <FontAwesomeIcon inverse transform="shrink-5" color="white" icon ={faGithub}   size= "2x"/></a>
    <a href="https://www.linkedin.com/in/riccidylanandrada/"><FontAwesomeIcon  href="https://www.linkedin.com/in/riccidylanandrada/" color="white" icon ={faLinkedin} transform="shrink-5"  inverse size= "2x"/></a>
    <a href="https://www.instagram.com/riccidylanandrada/">  <FontAwesomeIcon  color="white" icon ={faInstagram} transform="shrink-5 " inverse   size= "2x"/></a>




    </div>
  </Container>

</div>


  
      
<div className="sidebar1">
  



    




  </div>
        








    
    </div>


    )

}
export default SideBar;