import * as React from "react";
import "../styles/sidebar.css"
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../images/registered.png"

const SideBar=()=>{

    return(

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
    </Container>
    </div>


    )

}
export default SideBar;