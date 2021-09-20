import React from "react";
import { Link } from "react-router-dom";
import './styles/main.css';

function NavBar() {
     return (
          <header id="home">
               <h1 class="logo">Javier Vilchis</h1>
               <nav>

                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li><Link to="/work">Work</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                    </ul>
               </nav>
          </header>
     )
}

export default NavBar;