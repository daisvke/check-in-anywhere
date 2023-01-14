import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Signature from './Signature'
import styled from 'styled-components'
import CalendarDatePicker from './Calendar'
import {
  checkAddress,
  checkDate,
  checkEmail,
  checkName,
  checkPhoneNbr,
  checkZipCode,
  isNumeric,
} from '../utils/functions'

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

function GenerateCheckInInputField({ label, type }) {
  const inputValue = useSelector((state) => state.questions[type])
  //  const error = useSelector((state) => state.error)
  const dispatch = useDispatch()

  const handleChange = (e, value) => {
    const c = value[value.length - 1]

    if (
      type === 'firstname' ||
      type === 'surname' ||
      type === 'nationality' ||
      type === 'addressCountry'
    ) {
      if (value && !checkName(c)) return
    } else if (
      type === 'birthPlace' ||
      type === 'address' ||
      type === 'addressCity'
    ) {
      if (value && !checkAddress(c)) return
    } else if (type === 'birthDate' || type === 'cbExpDate') {
      if (value && !checkDate(c)) return
    } else if (type === 'cbNumber' || type === 'cbSecurityCode') {
      if (value && !isNumeric(c)) return
    } else if (type === 'addressZipCode') {
      if (value && !checkZipCode(c)) return
    } else if (type === 'mobile') {
      if (value && !checkPhoneNbr(c)) return
    } else if (type === 'email') {
      if (value && !checkEmail(c)) return
    }

    dispatch({
      type: 'updateAnswer',
      payload: {
        category: 'questions',
        question: type,
        value: e.target.value,
      },
    })
  }

  /*   const rooms = [
        "Please select",
        1, 2,
        11, 12, 14, 15,
        21, 22, 23, 24,
        31, 32, 33, 34,
        41, 42, 43, 44,
        51, 52
    ]
*/
  if (type === 'sign') return <Signature />

  var inputType = 'text'
  if (type === 'birthDate') inputType = 'date'
  else if (type === 'email') inputType = 'email'

  if (type === 'arrivalAndDepartureDates')
    return <CalendarDatePicker label="" />

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input
        type={inputType}
        name={label}
        value={inputValue}
        onChange={(e) => handleChange(e, e.target.value, type)}
      />
      {/*error === true && <p>ERROR !!!</p>*/}
    </InputContainer>
  )
}

export default GenerateCheckInInputField
