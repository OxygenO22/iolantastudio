import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import s from './EmailContactForm.module.scss';

interface IResponse {
  status: number;
  text: string
}

interface IData {
  name: string;
  email: string ;
  procedure: string;
  message: string;
}

export const EmailContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [procedure, setProcedure] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName('');
    setEmail("");
    setProcedure("");
    setMessage("");
  }

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    let data: any = {
      name: name,
      email: email,
      procedure: procedure,
      message: message
    }

    if (name !== '' && email !== '' && procedure !== '' && message !== '' ) {
      emailjs
        .send(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          data,
          `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (response: IResponse) => {
            alert(`SUCCESS! ${(response.status, response.text)}`);
            clearForm();
          },
          (error: string) => {
            alert(`FAILED... ${error}`);
          }
        );
    } else {
      alert('Fill the form')
    }
  };

  return (
    <form className={s.form__wrapper} onSubmit={sendEmail}>
      <label className={s.label}>
        <span className={s.title}>Your Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Your Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Type of procedure</span>
        <input
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          type="text"
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}
