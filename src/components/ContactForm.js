import React, { useState } from "react";

const formStyles = {
     contactForm: {
          input: {

               width: '100%',
               padding: '12px 20px',
               margin: '8px 0',
               boxSizing: 'border-box',

          }
     }

}
const ContactForm = () => {
     const [status, setStatus] = useState("Submit");
     const handleSubmit = async (e) => {
          e.preventDefault();
          setStatus("Sending...");
          const { name, email, message } = e.target.elements;
          let details = {
               name: name.value,
               email: email.value,
               message: message.value,
          };
          let response = await fetch("http://localhost:5000/contact", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json;charset=utf-8",
               },
               body: JSON.stringify(details),
          });
          setStatus("Submit");
          let result = await response.json();
          alert(result.status);
     };
     return (
          <form onSubmit={handleSubmit} className={formStyles.contactForm}>
               <div>
                    <label htmlFor="name">Name:
                         <input type="text" id="name" required />
                    </label>
               </div>
               <div>
                    <label htmlFor="email">Email:
                         <input type="email" id="email" required />
                    </label>
               </div>
               <div>
                    <label htmlFor="message">Message:
                         <textarea id="message" required />
                    </label>
               </div>
               <button type="submit">{status}</button>
          </form>
     );
};

export default ContactForm