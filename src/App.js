import React, { useState } from 'react'
import Field from './components/Field';
import TableShow from './components/TableShow';

const App = () => {

  const [data, setData] = useState([])

  const propGetter = (name, email, phone) => {
    const updatedArr = [
      ...data,
      {
        userName: name,
        userMail: email,
        phoneNumber: parseInt(phone)
      }
    ]

    setData(updatedArr);
  }

  console.log(data);
  return (
    <div>
      <Field valueGetter={propGetter} />
      <TableShow data={data} />
    </div>
  )
}

export default App;