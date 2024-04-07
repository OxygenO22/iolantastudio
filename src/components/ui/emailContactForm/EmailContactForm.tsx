import { useState } from 'react';
import emailjs from "@emailjs/browser";
import s from './EmailContactForm.module.scss';
import { MyButton } from '../buttos/MyButton/MyButton';
import { Myselect } from '../select/Myselect';
import { MyInput } from '../input/MyInput';

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
      <MyInput
        title={"Your Name:"}
        classNameLabel={s.label}
        classNameSpan={s.title}
        classNameInput={s.form__input}
        value={name}
        type={"text"}
        placeholder={"Enter your name"}
        onChange={(prop) => setName(prop)}
        isTextarea={false}
      />
      <MyInput
        title={"Your Email:"}
        classNameLabel={s.label}
        classNameSpan={s.title}
        classNameInput={s.form__input}
        value={email}
        type={"email"}
        placeholder={"Enter your email"}
        onChange={(prop) => setEmail(prop)}
        isTextarea={false}
      />
      <Myselect
        title={"Type of procedure:"}
        classNameLabel={s.label}
        classNameSpan={s.title}
        classNameSelect={s.form__input}
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
        onChange={(proc) => setProcedure(proc)}
      />
      <MyInput
        title={"Your Message:"}
        classNameLabel={s.label__textarea}
        classNameSpan={s.title}
        classNameInput={s.form__textarea}
        value={message}
        placeholder={"Enter options or wishes"}
        onChange={(prop) => setMessage(prop)}
        isTextarea={true}
        type={""}
      />
      <MyButton name="Send" buttonType="submit" />
    </form>
  );
}
