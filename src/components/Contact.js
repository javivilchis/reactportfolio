import React from "react";
import ContactForm from './ContactForm';

function Contact() {
     
     return (
          <section id="contact-me">
               <div className="side">
                    <h2>Let's Talk</h2>
               </div>
               <div className="content">
                    <a href="tel:469-233-1354" aria-label="telephone"rel="noreferrer">469.233.1354</a>
                    <a href="mailto:info@javivilchis.com?subject=from%20github%20email"
                         aria-label="email" rel="noreferrer">info@javivilchis.com</a>
                    <a href="https://twitter.com/javivilchis" target="_blank" aria-label="twitter" rel="noreferrer">@javivilchis</a>
                    <a href="https://instagram.com/javivilchis1234" target="_blank"
                         aria-label="instagram" rel="noreferrer">@javivilchis1234</a>
                    <a href="https://www.linkedin.com/in/javier-vilchis-8843226/" target="_blank"
                         aria-label="linkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a>

                    <hr />

                    <ContactForm />
               </div>
          </section>
     );
}

export default Contact;