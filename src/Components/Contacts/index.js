import React from 'react'
import {ContactContainer} from './ContactElements.js';
import emailjs from "emailjs-com"

import './style.css'

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_vaskar', 'template_mmtod68', e.target, 'user_UjXaJWUpVfZowzFSeiBD2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}
const Contact = () => {
    return (
        <ContactContainer>
           
            <div class="contact-section">

            <h1>Contact Me</h1>
            <div class="border"></div>
            <form onSubmit={sendEmail} class="contact-form">
            <input type="text" name="name" field="*{name}" class="contact-form-text" placeholder="Your name" />
            <input type="email" name="email" field="*{email}" class="contact-form-text" placeholder="Your email" />
            <input type="text" name="phone" field="*{phone}" class="contact-form-text" placeholder="Your phone" />
            <textarea class="contact-form-text" name="message" field="*{message}" placeholder="Your message"></textarea>
            <input type="submit" class="contact-form-btn" value="Send" />
            </form>
            </div>
        </ContactContainer>
    )
}

export default Contact
