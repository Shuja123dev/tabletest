import React from 'react';
import { useState } from 'react';

const Field = ({ valueGetter }) => {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);

  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    valueGetter(names, email, number);
    setEmail('');
    setNames('');
    setNumber('')
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter your name:
        <input type="text" required onChange={handleChange} value={names} />
        Enter your email:
        <input type="email" required onChange={handleEmail} value={email} />
        Enter your phone number:
        <input type="number" required onChange={handleNumber} value={number} />
        <button >Click here</button>
      </form>
    </div>
  )
}

export default Field;