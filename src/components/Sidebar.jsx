import * as React from "react";
import "../styles/sidebar.css"
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
      height="50px"
      width="50px"

      />
  </Navbar.Brand>

  <div className= "socials">

        <a>    <FontAwesomeIcon  color="white" icon ={faGithub}  inverse size= "2x"/></a>
    <a><FontAwesomeIcon  color="white" icon ={faLinkedin}  inverse size= "2x"/></a>
    <a>  <FontAwesomeIcon  color="white" icon ={faInstagram}  inverse   size= "2x"/></a>




    </div>
  </Container>

</div>


  
      
<div className="sidebar1">
  



    




  </div>
        








    
    </div>


    )

}
export default SideBar;