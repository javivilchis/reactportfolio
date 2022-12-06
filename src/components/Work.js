import React from "react";
import { StyledReport, StyledWall, StyledCalculator, StyledPuzzle, StyledBuddy } from "./styles/Work.styled";

function Work() {
     return (
          <section id="work">
               <div className="side">

                    <h2>Work</h2>
               </div>
               <div className="content">
                    <StyledReport className="project">
                         <div className="overlay"></div>
                         <a href="https://www.ambitsuccess.com" className="{report} " target="_blank" rel="noopener noreferrer">
                              <div className="project-title">
                                   <h2>AMBITSUCCESS</h2>
                                   Full Site to showcase the best network marketers from Texas and Northwest North East
                                   market.<br />
                                   PHP/JS/SQL/BSTRP/REST/EE
                              </div>
                         </a>
                    </StyledReport>
                    <StyledWall className="project">
                         <div className="overlay"></div>
                         <a href="https://wwww.ambitcares.org" className="{wall}" target="_blank" rel="noopener noreferrer">

                              <div className="project-title">
                                   <h2>AMBIT CARES</h2>
                                   Full Site to collect donations in support for NTFB.<br />
                                   PHP/JS/HTML/REST
                              </div>
                         </a>
                    </StyledWall>
                    <StyledCalculator className="project">
                         <div className="overlay"></div>
                         <a href="https://jvnotetaker.herokuapp.com/notes" className="{calculator}" target="_blank" rel="noopener noreferrer">

                              <div className="project-title">
                                   <h2>NOTE TAKER</h2>
                                   Note taker done to create notes on the fly.<br />
                                   NODE JS/HTML/CSS/HEROKU
                              </div>
                         </a>
                    </StyledCalculator>
                    <StyledPuzzle className="project">
                         <div className="overlay"></div>
                         <a href="https://jvmynuxt.herokuapp.com/" className="{puzzle}" target="_blank" rel="noopener noreferrer">

                              <div className="project-title">
                                   <h2>VueJs with NUXT</h2>
                                   A small application utilizing VueJs and Nuxt.
                              </div>
                         </a>
                    </StyledPuzzle>
                    <StyledBuddy className="project">
                         <div className="overlay"></div>
                         <a href="https://google.com" className="{buddy}" target="_blank" rel="noopener noreferrer">

                              <div className="project-title">
                                   <h2>Run Buddy</h2>
                                   HTML/CSS
                              </div>
                         </a>
                    </StyledBuddy>
               </div>
          </section>
     );
}

export default Work;