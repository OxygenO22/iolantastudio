import { useState } from 'react';
import emailjs from "@emailjs/browser";
import s from './EmailContactForm.module.scss';
import { MyButton } from '../buttos/MyButton/MyButton';
import { Myselect } from '../select/Myselect';

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
  const [email, setEmail] = useState('');
  const [procedure, setProcedure] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setProcedure('');
    setMessage('');
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
            alert(`Thanks for your message! ${response.status} ${response.text}`);
            if (response.status === 200) {
              clearForm();
            }
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
        <span className={s.title}>Your Name:</span>
        <input
          className={s.form__input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Your Email:</span>
        <input
          className={s.form__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Type of procedure:</span>
        <Myselect
          className={s.form__input}
          defaultValue="Enter procedure you want"
          options={[
            { value: "Permanent", name: "Permanent" },
            { value: "Removal of Permanent", name: "Removal of Permanent" },
            { value: "Tattoo", name: "Tattoo" },
            { value: "Nails", name: "Nails" },
            { value: "Brows", name: "Brows" },
            { value: "MakeUp", name: "MakeUp" },
          ]}
          value={procedure}
          onChange={proc => setProcedure(proc)}
        />
      </label>
      <label className={s.label__textarea}>
        <span className={s.title}>Message:</span>
        <textarea
          className={s.form__textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter options or wishes"
        />
      </label>
      <MyButton name="Send" buttonType="submit" />
    </form>
  );
}
