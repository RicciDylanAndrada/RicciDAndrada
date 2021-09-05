import React from 'react'
import Card from "../components/Card.jsx"
import "../styles/index.css"
import { Container,Nav,Navbar,NavDropdown,Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';



const Project = (props)=>{
    return(
        <div class="row project" >

<div class="col-lg-6 col-md-6 col-sm-12">
<div projectImg>
<Card
        img={props.img}
    />
</div>

</div>
    
            <div  class="dog col-lg-6 col-md-6 col-sm-12">
            <h1>{props.Title}</h1>
            <div class="projBody">
            {props.Body}
            <div class ="buttons">
            <button type="button" class="btn btn-light">Live</button>
            <button type="button" class="btn btn-light">Code</button>     
                   </div>
            



            </div>
            </div>

            </div>
    )
    
}
export default Project