import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface IResponse {
  status: number;
  text: string
}


export const EmailContactForm = () => {
  const form: any | undefined = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (response:IResponse) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error: string) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>
        Your Name
        <input type="text" name="name" />
      </label>
      <label>
        Your Email
        <input type="email" name="email" />
      </label>
      <label>
        Type of procedure
        <input type="text" name="procedure" />
      </label>
      <label>
        Message
        <textarea name="message" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}
