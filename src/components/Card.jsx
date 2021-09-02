import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar,NavDropdown,Button, } from "react-bootstrap";
import image from "../images/gym.jpg"

const cardStyle={
    width:"20rem"
}
const cardTexxt={
  height:"1px",
  fontColor:"blacK",
  color:"black",

}
const cardTitle={
  fontColor:"Black",
  color:"Black",
  fontSize:"15px",
   height:"5px"
  

}
const  Card =(props) =>{
    return(


<div class="card mb-3" style={cardStyle}>
  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={cardTitle}>Javascript Html Css</h5>
    <p class="card-text" style={cardTexxt}></p>
  </div>
</div>
    )
}
export default Card