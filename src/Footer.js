import React from "react";
import './styles/main.css';
import { Link } from "react-router-dom";

function Footer() {
     return (
          <footer>
               <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://docs.google.com/document/d/1y4rS7eobPAoHeWPz6Byz0kd80kgRzqsIlaQoATi9Fqo/edit?usp=sharing"
                         target="_blank" aria-label="resume" rel="noreferrer">Resume</a></li>
                    <li><a href="/privacy-policy.html" rel="noreferrer">Privacy Policy</a></li>

                    <li>
                         <div className="disclaimer">
                              <p>
                                   Disclaimer:
                                   The information provided by javier vilchis on javivilchis.com and similar websites as well as on mobile applications is for general infomational purposes only. Information in websites and mobile
                                   apps are provided in good faith, however we make no representation or warranty of any kind, express
                                   or implied, regarding the accuracy, adequacy, reliability, availability or completenence of any
                                   information on the site or our mobile application. THIS WEBSITE AND APP REPRESENTS POINTS OF VIEW AND IS DOES NOT REPRESENT ANY OF THE BRANDS PRESENTED OR SHOWN IN THIS WEBSITE.
                              </p>
                         </div>
                    </li>
               </ul>

          </footer>
     );
}

export default Footer;