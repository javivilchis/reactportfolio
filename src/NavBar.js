import React from "react";
import { Link } from "react-router-dom";
//import {useHistory} from "react-router"
import './styles/main.css';
const styles = {
     a: {
          TextDecoration: "none"
     }
}
function NavBar() {
     return (
          <header id="home">
               <Link to="/" style={styles.a}><h1 className="logo" >Javier Vilchis</h1></Link>
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