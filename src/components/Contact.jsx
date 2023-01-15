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
    <div className='bg-white w-96 h-96 border-spacing-2'>
        <h2 className='mb-5'>Send me a Message</h2>
        <form className='flex flex-col p-2 w-96 bg-gray-200 rounded-md max-w-md' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label >Message</label>
          <textarea name="message"  />
          <input type="submit" value="Send" />
        </form>
    </div>
  );
};