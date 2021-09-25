import React from "react";
import javi from "./../images/javier_vilchis_duo_purple.png";
function Home() {
     return (
          <header className="App-header home">
               <img src={javi}  className="javi" alt="Javier Vilchis" />
               <p className="introduction">
                   Welcome to Javier Vilchis Portfolio, please take a moment to brows around this website. If you happen to see anything that interests you within this site, please
                   contact Javier from any of the available channels in <a className="App-link" href="/reactportfolio/contact" aria-label="contact me">here</a>.
               </p>

               <a
                    className="App-link"
                    href="/reactportfolio/work"
                    rel="noopener noreferrer"
               >
                    visit work area
               </a>
          </header>
     );
}

export default Home;
