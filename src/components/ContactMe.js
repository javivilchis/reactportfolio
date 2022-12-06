import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactMe = () => {

     const notify = () => toast("there was an issue!");
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_gareqk9',
          'template_zrzxq3q', form.current, 'user_XlNRlRWDYj4t4GBqbqDSw')
          .then((result) => {
               // console.log(result.text);
               // console.log(result);
               toast("Your inquiry was submitted!");
               // console.log(form.current['first_name']);
               form.current['first_name'].value = '';
               form.current['last_name'].value = '';
               form.current['user_email'].value = '';
               form.current['message'].value = '';
          window.location.href = "/";
          }, (error) => {
               console.log(error.text);
               notify();
          });
     };

  const Button = styled.button`
     background-color: var(--bluegreen-bg);
     border-radius: 2px;
     border: 0;
     &:hover {
     background-color: "#333";
     }
  `;
  return (
     <>
     <ToastContainer />
     <p>I would love to hear from you, feel free to send me a note.</p>
    <form ref={form} onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" name="first_name" required/>
      <label>Last Name</label>
      <input type="text" name="last_name" required/>
      <label>Your Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <br></br>
      <div className="g-recaptcha" data-sitekey="6Lf-2oAhAAAAACzE4csRoyK7mceZnYDF5xtPRGgW"></div><br></br>
      <hr />
      <Button className="secondary" type="submit" value="Send">Submit</Button>
    </form>
    </>
  );
};
export default ContactMe;