import React from "react";
//import ContactForm from './ContactForm';
// <ContactForm />
// todo: fix the issue with the contact form and add it back into this component.
function Contact() {

     return (
          <section id="contact-me">
               <div className="side">
                    <h2>Let's Talk</h2>
               </div>
               <div className="content">
                    <a href="tel:469-233-1354" aria-label="telephone" rel="noreferrer">469.233.1354</a>
                    <a href="mailto:info@javivilchis.com?subject=from%20github%20email"
                         aria-label="email" rel="noreferrer">info@javivilchis.com</a>
                    <a href="https://twitter.com/javivilchis" target="_blank" aria-label="twitter" rel="noreferrer">@javivilchis</a>
                    <a href="https://instagram.com/javivilchis1234" target="_blank"
                         aria-label="instagram" rel="noreferrer">@javivilchis1234</a>
                    <a href="https://www.linkedin.com/in/javier-vilchis-8843226/" target="_blank"
                         aria-label="linkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a>

                    <hr />
                    <div className="contact-section">
                         <div className="left">
                              <h2>Contact Me by Email or Phone Number.</h2>
                              <p>You can also follow me via these social channels</p>
                              <a href="tel:469-233-1354" aria-label="telephone" rel="noreferrer">469.233.1354</a><br />
                              <a href="mailto:info@javivilchis.com?subject=from%20github%20email"
                                   aria-label="email" rel="noreferrer">info@javivilchis.com</a><br />
                              <a href="https://twitter.com/javivilchis" target="_blank" aria-label="twitter" rel="noreferrer">@javivilchis</a><br />
                              <a href="https://instagram.com/javivilchis1234" target="_blank"
                                   aria-label="instagram" rel="noreferrer">@javivilchis1234</a><br />
                              <a href="https://www.linkedin.com/in/javier-vilchis-8843226/" target="_blank"
                                   aria-label="linkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a><br />

                         </div>
                         <div className="right">

                         </div>
                    </div>

               </div>
          </section>
     );
}

export default Contact;