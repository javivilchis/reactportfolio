import React from "react";
import ContactForm from './ContactForm';

function Contact() {
     return (
          <section id="contact-me">
               <div class="side">
                    <h2>Contact Me</h2>
               </div>
               <div class="content">
                    <a href="tel:469-233-1354" aria-label="telephone">469.233.1354</a>
                    <a href="mailto:info@javivilchis.com?subject=from%20github%20email"
                         aria-label="email">info@javivilchis.com</a>
                    <a href="https://twitter.com/javivilchis" target="_blank" aria-label="twitter">@javivilchis</a>
                    <a href="https://instagram.com/javivilchis1234" target="_blank"
                         aria-label="instagram">@javivilchis1234</a>
                    <a href="https://www.linkedin.com/in/javier-vilchis-8843226/" target="_blank"
                         aria-label="linkedIn"><i class="fab fa-linkedin"></i></a>

                    <hr />

                    <ContactForm />
               </div>
          </section>
     );
}

export default Contact;