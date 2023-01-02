import React, { useEffect, useState, useRef } from "react";
import { send } from 'emailjs-com';

function ContactUsForm() {
     const form = useRef();
     const [toSend, setToSend] = useState({
          first_name: '',
          last_name: '',
          message: '',
          reply_to: '',
     });
     const [Delivered, setDelivered] = useState("");
     const sendEmail = (e) => {
          e.preventDefault();
      
          send('service_gareqk9', 'template_zrzxq3q', form.current, 'user_XlNRlRWDYj4t4GBqbqDSw')
            .then((response) => {
               SwitchCase(response.text);
               setDelivered(response.text);
              
               showForm(delivered);
            }, (error) => {
                console.log(error.text);
            });
        };


     
useEffect(() => {
     SwitchCase();
},[] )
     const handleChange = (e) => {
          console.log(e.target.name)
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
                         return (
                              <form ref={form} onSubmit={sendEmail}>
                                   <label>Name</label>
                                   <input type="text" name="user_name" />
                                   <label>Email</label>
                                   <input type="email" name="user_email" />
                                   <label>Message</label>
                                   <textarea name="message" />
                                   <input type="submit" value="Send" />
                              </form>
                              );
                    </div>
                   
)
                 
               case 'NULL':
return(<div className="App">
                         <div className="thanks hide">
                              <h2>Thank you for contacting us, we will be in touch as soon as possible</h2>
                         </div>
                         <form ref={form} onSubmit={sendEmail}>
                                   <label>Name</label>
                                   <input type="text" name="user_name" />
                                   <label>Email</label>
                                   <input type="email" name="user_email" keyboardType="email-address" />
                                   <label>Message</label>
                                   <textarea name="message" />
                                   <input type="submit" value="Send" />
                              </form>
                    </div>
                    
)
                 
               default:
return (
                    <div className="App">
                         <div className="thanks hide">
                              <h2>Thank you for contacting us, we will be in touch as soon as possible</h2>
                         </div>
                         <form ref={form} onSubmit={sendEmail}>
                                   <label>Name</label>
                                   <input type="text" name="user_name" />
                                   <label>Email</label>
                                   <input type="email" name="user_email" />
                                   <label>Message</label>
                                   <textarea name="message" />
                                   <input type="submit" value="Send" />
                              </form>
                    </div>

)
          }
     }
     return (
          <SwitchCase value="" />
     );
     


}

export default ContactUsForm;