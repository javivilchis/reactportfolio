import React from "react";
import ContactMe from './ContactMe';
//<ContactForm />
// Fixed 08/17/22 todo: fix the issue with the contact form and add it back into this component.
function Contact() {

     return (
          <section id="contact-me">
               <div className="side">
                    <h2>Let's Talk</h2>
               </div>
               <div className="content">
                  
                    <div className="contact-section">
                         <div className="left">
                              <h2>Contact Me by Email or Phone Number.</h2>
                              <p>You can also follow me via these social channels</p>
                              <a href="tel:469-233-1354" aria-label="telephone" rel="noopener noreferrer">469.233.1354</a><br />
                              <a href="mailto:info@javivilchis.com?subject=from%20github%20email"
                                   aria-label="email" rel="noopener noreferrer">info@javivilchis.com</a><br />
                              <a href="https://twitter.com/javivilchis" target="_blank" aria-label="twitter" rel="noopener noreferrer">@javivilchis</a><br />
                              <a href="https://instagram.com/javivilchis1234" target="_blank"
                                   aria-label="instagram" rel="noopener noreferrer">@javivilchis1234</a><br />
                              <a href="https://www.linkedin.com/in/javier-vilchis-8843226/" target="_blank"
                                   aria-label="linkedIn" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a><br />

                         </div>
                         <div className="right">
                              <ContactMe />
                         </div>
                    </div>

               </div>
          </section>
     );
}

export default Contact;