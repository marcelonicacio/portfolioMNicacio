import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9yyx117', 'template_qm7dtib', form.current, 'fjjRwlWQsWstDmh5y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
      
        <form className='flex flex-col p-2 w-96 shadow-md  max-w-md' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label >Message</label>
          <textarea className='mb-4' rows={6} name="message"  />
          <button type="submit" value="Send" id='message' className=' w-20 h-5 shadow-md'>Send</button>
        </form>

  );
};