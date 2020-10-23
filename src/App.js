import React, { useState, useEffect } from 'react';
import Form from './Form'
import Users from './Users'
import formSchema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'

function App() {

  const initialState = {
    name: '',
    email: '',
    password: '',
    hasAcceptedTOS: false,
    emoji: Math.floor(Math.random() * 91)
  }

  const formErrorState = {
    name: '',
    email: '',
    password: '',
    hasAcceptedTOS: ''
  }

  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState(initialState)
  const [disabled, setDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(formErrorState)

  useEffect(() => {
    formSchema.isValid(formData).then(valid => {
      setDisabled(!valid);
    });
  }, [formData]);

  const handleChange = e => {
    const { name, value } = e.target

    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheck = e => {
    const { name, value } = e.target
    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormData({
      ...formData,
      hasAcceptedTOS: !formData.hasAcceptedTOS
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim()
    }
    axios.post('https://reqres.in/api/users', user)
      .then(res => {
        console.log(res.data)
        setUsers([res.data, ...users])
        setFormData(initialState)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <Form errors={formErrors} disabled={disabled} submit={handleSubmit} change={handleChange} check={handleCheck} data={formData} />
      <Users users={users} />
    </div>
  );
}

export default App;