import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

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

function generateInputField({ label, type }) {
    return <div>
        <label>{ label }</label>
        <input></input>
    </div>
}

function SignUp() {
    const inputValue = useSelector((state) => state.signUp[type])
    //  const error = useSelector((state) => state.error)
    const dispatch = useDispatch()

  const handleChange = (e, value) => {
  }

    return <form>
        { generateInputField('Name of the establishment', 'name') }
    </form>
}

export default SignUp