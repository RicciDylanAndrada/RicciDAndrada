import * as React from "react"
import Body from "../components/Body"
import SideBar from "../components/Sidebar"
import Header from "../components/Header"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub,faFacebook} from "@fortawesome/free-brands-svg-icons"


// markup
const IndexPage = () => {
  return (
    <main >
    <title>RicciDylanAndrada</title>


    <Body/>
    <div class="sidebar2">
    <SideBar/>  

    </div>



    </main>
  )
}

export default IndexPage
