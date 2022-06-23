import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { checkEmail, checkName, isNumeric } from '../utils/functions'
import colors from '../utils/colors'

const Input = styled.input`
  border: 0;
  border: 1px solid black;
  width: 20vw;

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
  margin-bottom: 2em;
`

const ErrorSpan = styled.span`
  color: ${colors.error};
  font-size: 0.9em;
  font-family: Tahoma, sans-serif;
`

function GenerateSignUpInputField(label, type) {
  const inputValue = useSelector((state) => state.signUp[type])
  const password = useSelector((state) => state.signUp.password)
  const confPassword = useSelector((state) => state.signUp.confPassword)
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch()

  const handleChange = (e, value) => {
    const c = value[value.length - 1]
    if (type === 'email' && value && !checkEmail(c)) return
    if (type === 'name' && value && !checkName(c) && !isNumeric(c)) return

    dispatch({
      type: 'updateAnswer',
      payload: {
        category: 'signUp',
        question: type,
        value: e.target.value,
      },
    })

    if (type === 'confPassword') {
      if (password && value && value !== password)
        dispatch({
          type: 'setEnv',
          payload: { name: 'error', value: true },
        })
      else
        dispatch({
          type: 'setEnv',
          payload: { name: 'error', value: false },
        })
    }
    if (type === 'password') {
      if (confPassword && value !== confPassword)
        dispatch({
          type: 'setEnv',
          payload: { name: 'error', value: true },
        })
      else
        dispatch({
          type: 'setEnv',
          payload: { name: 'error', value: false },
        })
    }
  }

  const inputType = type === 'password' ? 'password' : 'text'

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input
        type={inputType}
        name={label}
        value={type !== 'confPassword' ? inputValue : confPassword}
        onChange={(e) => handleChange(e, e.target.value, type)}
      />
      {type === 'confPassword' && error && (
        <ErrorSpan>Passwords don't match!</ErrorSpan>
      )}
    </InputContainer>
  )
}

export default GenerateSignUpInputField
