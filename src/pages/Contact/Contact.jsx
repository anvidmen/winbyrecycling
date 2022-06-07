import Body from "components/layout/Body/Body"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yh3oiaa', 'template_5rqq7qe', form.current, 'LQ588QouS1DL8SU0s')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <Body>
        <h1>Contacta con nosotros</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Body>
    );
}

export default Contact
