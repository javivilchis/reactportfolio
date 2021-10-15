import React from "react";
import { Link } from "react-router-dom";
//import {useHistory} from "react-router"
import './styles/main.css';

function NavBar() {
     return (
          <header id="home">
               <Link to="/reactportfolio/"><h1 className="logo">Javier Vilchis</h1></Link>
               <nav>

                    <ul>
                         <li><Link to="/reactportfolio/">Home</Link></li>
                         <li><Link to="/reactportfolio/about">About</Link></li>
                         <li><Link to="/reactportfolio/work">Work</Link></li>
                         <li><Link to="/reactportfolio/contact">Contact</Link></li>
                    </ul>
               </nav>
          </header>
     )
}

export default NavBar;