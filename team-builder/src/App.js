import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState([
    {id: 0, name: "Bob", email: "bobby@super", role: "frontend engineer"},
    {id: 1, name: "David", email: "daddy@this", role: "backend engineer"},
    {id: 2, name: "Kevin", email: "kevy@me", role: 'designer'}
  ]);
  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value});
  }

  const submit = (evt) => {
    const newMembers = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role


    };

    setMembers(members.concat(newMembers));
    setFormValues(initialFormValues);

  } 
  return (
    <div className="App">
      <h1>Member Form</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submit}

      />
      {
        members.map(person => {
          <div key={members.id}>
            {members.name}
          </div>
        })
      }

    </div>
  );
}

export default App;
