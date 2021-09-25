import React from "react";
import './styles/main.css';
import { Link } from "react-router-dom";
import logo from './logo.svg';

function Footer() {
     const colorStyles = {
          footer: {
               color: '#ffffff'
          }
     };
     return (
          <footer>
               <ul>
                    <li><Link to="/reactportfolio/">Home</Link></li>
                    <li><Link to="/reactportfolio/about">About</Link></li>
                    <li><Link to="/reactportfolio/work">Work</Link></li>
                    <li><Link to="/reactportfolio/contact">Contact</Link></li>
                    <li><a href="https://docs.google.com/document/d/1y4rS7eobPAoHeWPz6Byz0kd80kgRzqsIlaQoATi9Fqo/edit?usp=sharing"
                         target="_blank" aria-label="resume" rel="noreferrer">Resume</a></li>
                    <li><a href="/privacy-policy.html" rel="noreferrer">Privacy Policy</a></li>
                    <li style={colorStyles.footer}>powered by <img src={logo} className="App-logo" alt="logo" /></li>

                    <li>
                         <div className="disclaimer">
                              <p>
                                   Disclaimer:
                                   The information provided by javier vilchis on javivilchis.com or portfolio website and similar websites as well as on mobile applications is for general infomational purposes only. Information in websites and mobile
                                   apps are provided in good faith, however we make no representation or warranty of any kind, express
                                   or implied, regarding the accuracy, adequacy, reliability, availability or completenence of any
                                   information on the site or our mobile application. THIS WEBSITE AND APP REPRESENTS POINTS OF VIEW AND PERSONAL PROJECTS WITHIN HIS CURRENT PLACE OF EMPLOYMENT, IT DOES NOT REPRESENT ANY OF THE BRANDS PRESENTED OR SHOWN IN THIS WEBSITE.
                              </p>
                         </div>
                    </li>
               </ul>

          </footer>
     );
}

export default Footer;