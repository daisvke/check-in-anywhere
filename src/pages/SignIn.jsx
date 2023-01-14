import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import globals from '../utils/globals'

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  width: 20vw;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2em;

  &:focus {
    outline: 0;
  }
`

const InputLabel = styled.label`
  font-size: 0.7em;
  font-family: Tahoma, sans-serif;
  text-transform: uppercase;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

function SignIn({ label }) {
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post(globals.signInBackEndUrl, {
      data: {
        name: name,
        password: password,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Sign in!</label>

      <InputContainer>
        <InputLabel>Name</InputLabel>
        <Input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          name="password"
          Change={(event) => setPassword(event.target.value)}
        />
      </InputContainer>
      {name && password && 
        <input type="submit" value="Submit" />}
      Forgot password ?
    </form>
  )
}

export default SignIn
