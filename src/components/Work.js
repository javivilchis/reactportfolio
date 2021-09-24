import React from "react";
import { StyledReport } from "./styles/Work.styled";

function Work() {
     return (
          <section id="work">
               <div className="side">
                    <h2>Work</h2>
               </div>
               <div className="content">
                    <StyledReport>
                       
                   
                    <a href="https://www.ambitsuccess.com" className="project {report}" target="_blank" rel="noreferrer">
                         <div className="overlay"></div>
                         <div className="project-title">
                              <h2>AMBITSUCCESS</h2>
                              Full Site to showcase the best network marketers from Texas and Northwest North East
                              market.<br />
                              PHP/JS/SQL/BSTRP/REST/EE
                         </div>
                    </a>
                    </StyledReport>
                    <a href="https://google.com" className="project wall" target="_blank" rel="noreferrer">
                         <div className="overlay"></div>
                         <div className="project-title">
                              <h2>AMBIT CARES</h2>
                              Full Site to collect donations in support for NTFB.<br />
                              PHP/JS/HTML/REST
                         </div>
                    </a>
                    <a href="https://jvnotetaker.herokuapp.com/notes" className="project calculator" target="_blank" rel="noreferrer">
                         <div className="overlay"></div>
                         <div className="project-title">
                              <h2>NOTE TAKER</h2>
                              Note taker done to create notes on the fly.<br />
                              NODE JS/HTML/CSS/HEROKU
                         </div>
                    </a>
                    <a href="https://google.com" className="project puzzle" target="_blank" rel="noreferrer">
                         <div className="overlay"></div>
                         <div className="project-title">
                              <h2>Pastel Puzzles</h2>
                              MERN Stack
                         </div>
                    </a>
                    <a href="https://google.com" className="project buddy" target="_blank" rel="noreferrer">
                         <div className="overlay"></div>
                         <div className="project-title">
                              <h2>Run Buddy</h2>
                              HTML/CSS
                         </div>
                    </a>
               </div>
          </section>
     );
}

export default Work;