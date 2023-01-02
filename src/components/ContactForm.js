import React, { useEffect, useState, useRef } from "react";
import { send } from 'emailjs-com';

function ContactForm() {
     const form = useRef();
     const [toSend, setToSend] = useState({
          first_name: '',
          last_name: '',
          message: '',
          reply_to: '',
     });
     const [Delivered, setDelivered] = useState("");

     const onSubmit = (e, delivered) => {
          console.log("ON SUBMIT")
          e.preventDefault();
          send(
               'service_gareqk9',
               'template_zrzxq3q',
               form.current,
               'user_XlNRlRWDYj4t4GBqbqDSw'
          )
               .then((response) => {
                    console.log("STATUS: ", response.status);
                    SwitchCase(response.text);
                    console.log('SUCCESS!', response.status, response.text);
                    setDelivered(response.text);
                    console.log("DELIVERED", setDelivered(response.text));
                    showForm(delivered);
               })
               .catch((err) => {
                    console.log('FAILED...', err);
               });
     };
useEffect(() => {

},[] )
     const handleChange = (e) => {
          console.log(e.target.name)
          console.log(e.target.value)
          setToSend({ ...toSend, [e.target.name]: e.target.value });
     };
     const showForm = (Delivered) => { console.log("your email was delivered"); }
     

     const SwitchCase = (Delivered) => {
          switch (Delivered) {
               case 'OK':
                   return (<div className="thanks"><h2>Thank you for your email. Be sure to visit my different social media accounts and visit my blog @ www.javivilchis.com/irun/</h2></div>)

               case '':
                    return ( <div className="App">
                         <div className="thanks hide">
                              <h2>Thank you for contacting us, we will be in touch as soon as possible</h2>
                         </div>
                         <React.StrictMode>
                         <form onSubmit={onSubmit} name="contactform">
                              <input
                                   type='text'
                                   name='first_name'
                                   placeholder='First Name'
                                   value={toSend.first_name}
                                  onChange={handleChange}
                                  
                              />
                              <input
                                   type='text'
                                   name='last_name'
                                   placeholder='Last Name'
                                   value={toSend.last_name}
                                  onChange={handleChange}
                              />

                              <textarea
                                   type='text'
                                   name='message'
                                   placeholder='Your message'
                                   value={toSend.message}
                                  onChange={handleChange}
                              />
                              <input
                                   type='text'
                                   name='reply_to'
                                   placeholder='Your email'
                                   value={toSend.reply_to}
                                  onChange={handleChange}
                              />
                              <button type="submit">Submit</button>
                         </form>
                         </React.StrictMode>
                    </div>
                   
)           
               case 'NULL':
               return(<div className="App">
                         <div className="thanks hide">
                              <h2>Thank you for contacting us, we will be in touch as soon as possible</h2>
                         </div>
                         <React.StrictMode>
                         <form onSubmit={onSubmit} name="contactform">
                              <input
                                   type='text'
                                   name='first_name'
                                   placeholder='First Name'
                                   defaultValue=''
                                   value={toSend.first_name}
                                   onChange={(e)=>handleChange(e.target.name)}
                              />
                              <input
                                   type='text'
                                   name='last_name'
                                   placeholder='Last Name'
                                   value={toSend.last_name}
                                   onChange={handleChange}
                              />

                              <textarea
                                   type='text'
                                   name='message'
                                   placeholder='Your message'
                                   value={toSend.message}
                                   onChange={handleChange}
                              />
                              <input
                                   type='text'
                                   name='reply_to'
                                   placeholder='Your email'
                                   value={toSend.reply_to}
                                   onChange={handleChange}
                              />
                              <button type="submit">Submit</button>
                         </form>
                         </React.StrictMode>
                    </div>
                    
)              
               default:
                    return (
                    <div className="App">
                         <div className="thanks hide">
                              <h2>Thank you for contacting us, we will be in touch as soon as possible</h2>
                         </div>
                         <React.StrictMode>
                         <form onSubmit={onSubmit} name="contactform">
                              <input
                                   type='text'
                                   name='first_name'
                                   placeholder='First Name'
                                   value={toSend.first_name}
                                   onChange={handleChange}
                              />
                              <input
                                   type='text'
                                   name='last_name'
                                   placeholder='Last Name'
                                   value={toSend.last_name}
                                   onChange={handleChange}
                              />

                              <textarea
                                   type='text'
                                   name='message'
                                   placeholder='Your message'
                                   value={toSend.message}
                                   onChange={handleChange}
                              />
                              <input
                                   type='text'
                                   name='reply_to'
                                   placeholder='Your email'
                                   value={toSend.reply_to}
                                   onChange={handleChange}
                              />
                              <button type="submit">Submit</button>
                         </form>
                         </React.StrictMode>
                    </div>

)
          }
     }
     return (
          <SwitchCase value="" />
     );
}

export default ContactForm