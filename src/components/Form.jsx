import { useState } from 'react';
import './Form.css';

import { validateEmail } from '../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log('DATA for onChange={handleInputChange}:');
    console.log(target)

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputEmpty = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log('DATA for onBlur={handleInputEmpty}:');
    console.log(target);
    console.log(`inputValue is ${inputValue}`);
    console.log(inputValue.trim().lenghth, inputValue.trim()==='')

    if (inputType === 'email') {
      if (inputValue.trim() === '') {
        setErrorMessage('Please, enter your email !');
      }
      return;
    };        

    if (inputType === 'name') {
      if (inputValue.trim()  === '') {
        setErrorMessage('Please, enter your name !');
      }
      return;
    };

    if (inputType === 'message') {
      if (inputValue.trim() === '') {
        setErrorMessage('Please, enter your message !');
      }
      return;
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Please, enter an email !');
      return;
  } else {
      if (!validateEmail(email)) {
          setErrorMessage('Please, enter a valid email !');
          return;
        };
      
  };

    if (!name.trim()) {
        setErrorMessage('Please, enter your name !');
        return;
    };

    if (!message.trim()) {
        setErrorMessage('Message is required !');
        return;
    };

    alert(`Dear ${name}, your message has been sent !`);

    setName('');
    setEmail('');
    setMessage('');
  };



  return (
    <div className="container text-center">
      <h1>Hello {name}!</h1>
      <form id="formContainer" className="form" onSubmit={handleFormSubmit}>
        <lable for="email" className="custom-label">email</lable><br/>
        <input
          value={email}
          id="email"
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputEmpty}
          type="email"
          placeholder="your email"
        />
        <lable for="name" className="custom-label">name</lable><br/>
        <input
          value={name}
          id="name"
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputEmpty}
          type="text"
          placeholder="your name"
        />
        <lable for="message" className="custom-label">message</lable><br/>
        <input
          value={message}
          id="message"
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputEmpty}
          type="text"
          placeholder="your message"
        />
        <div id="buttonDiv">
          <button type="submit">Submit</button>
        </div>
  
      </form>
      {errorMessage && (
        <div>
          <div className="error-text errCustom">{errorMessage}</div>
        </div>
      )}
    </div>
  );
}

export default Form;
