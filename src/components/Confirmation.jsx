import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getFormElements } from '../pages/CheckIn'
import LegalCB from './Legal/CB'
import LegalDamages from './Legal/Damages'
import axios from 'axios'
import globals from '../utils/globals'
import Submitted from './Submitted'

const ConfirmSheet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  width: ${globals.mainBlocWidth};
  padding-bottom: ${globals.mainBlocPaddingBottom};
`

const ConfirmList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  list-style: none;
  padding-bottom: 10vh;
`

const FieldLabel = styled.label`
  font-size: 0.9em;
  text-transform: uppercase;
`

const FieldElem = styled.label`
  font-size: 0.9em;
  text-transform: uppercase;
`

const FieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const LegalDiv = styled.div`
  padding-top: 2em;
`

const SendButton = styled.button`
  color: white;
  background-color: red;
  padding: 0.2em;
  font-weight: 800;
`

const SignBlock = styled.div`
display: flex;
flex-direction: raw;
align-items: center;
justify-content: space-between;
  margin-top: 1em;
`

const SignDate = styled.p`
    width: auto;
`

function Confirmation() {
  const dispatch = useDispatch()
  const submitted = useSelector((state) => state.submitted)
  const error = useSelector((state) => state.error)
  const language = useSelector((state) => state.language)
  const timestamp = new Date().toLocaleString()
  const signURL = useSelector((state) => state.questions.sign)

  // These variables have to be converted from objects (dued to DatePicker) to strings
  var arrivalDate = useSelector((state) => state.questions.arrivalDate)
  arrivalDate = String(arrivalDate)
  var departureDate = useSelector((state) => state.questions.departureDate)
  departureDate = String(departureDate)

  const data = []
  data[0] = useSelector((state) => state.questions.firstname)
  data[1] = useSelector((state) => state.questions.surname)
  data[2] = useSelector((state) => state.questions.arrivalDate)
  data[3] = useSelector((state) => state.questions.departureDate)
  data[4] = useSelector((state) => state.questions.birthDate)
  data[5] = useSelector((state) => state.questions.birthPlace)
  data[6] = useSelector((state) => state.questions.nationality)
  data[7] = useSelector((state) => state.questions.address)
  data[8] = useSelector((state) => state.questions.addressZipCode)
  data[9] = useSelector((state) => state.questions.addressCity)
  data[10] = useSelector((state) => state.questions.addressCountry)
  data[11] = useSelector((state) => state.questions.mobile)
  data[12] = useSelector((state) => state.questions.email)

  const cbNumber = useSelector((state) => state.questions.cbNumber)
  const cbExpDate = useSelector((state) => state.questions.cbExpDate)
  const cbSecurityCode = useSelector((state) => state.questions.cbSecurityCode)

  const handleSubmit = (event) => {
    event.preventDefault()

    const onFulfilled = (response) => {
      console.log(response)

      dispatch({
        type: 'setEnv',
        payload: {
          name: 'error',
          value: false
        }
      })
      dispatch({
        type: 'setEnv',
        payload: {
          name: 'submitted',
          value: true
        }
      })
    }

    const onRejected = (response) => {
      console.log(response)

      dispatch({
        type: 'setEnv',
        payload: {
          name: 'submitted',
          value: false
        }
      })
      dispatch({
        type: 'setEnv',
        payload: {
          name: 'error',
          value: true
        }
      })
    }

    axios.post(globals.backendUrl, {
      data: {
        language: language,
        timestamp: timestamp,
        firstname: data[0],
        surname: data[1],
        arrivalDate: arrivalDate,
        departureDate: departureDate,
        birthDate: data[4],
        birthPlace: data[5],
        nationality: data[6],
        address: data[7],
        addressZipCode: data[8],
        addressCity: data[9],
        addressCountry: data[10],
        mobile: data[11],
        email: data[12],
        sign: signURL,
        cbNumber: cbNumber,
        cbExpDate: cbExpDate,
        cbSecurityCode: cbSecurityCode
      }
    })
    .then(response => { onFulfilled(response) },
          response => { onRejected(response) })
  }

  const labels = getFormElements()

  return (
    <>
      { (
        <form onSubmit={handleSubmit}>
          <ConfirmSheet>
            <p>
              Please verify the data below and confirm to complete your
              check-in!
            </p>
            <ConfirmList>
              {data.map((element, index) => (
                <FieldDiv key={`${index}`}>
                  <FieldLabel key={`${index}-${element}`}>
                    {(index === 0 || index === 1) && labels[index].label}
                    {(index === 2 && 'arrival date') ||
                      (index === 3 && 'departure date')}
                    {index >= 4 && labels[index - 1].label}:&nbsp;
                  </FieldLabel>
                  <FieldElem key={`${element}-${index}`}>{element}</FieldElem>
                </FieldDiv>
              ))}
              <LegalDiv>
                <LegalCB />
              </LegalDiv>

              <LegalDiv>
                <LegalDamages />
                <SignBlock>
                  <SignDate>{new Date().toLocaleDateString()}</SignDate>
                  <img src={signURL} alt="" />
                </SignBlock>
              </LegalDiv>
            </ConfirmList>

            <SendButton type="submit">CONFIRM AND SEND</SendButton>
          </ConfirmSheet>
        </form>
      )}
      {(submitted === true && <Submitted success={true} />)
      || (error === true && <Submitted success={false} />)}
    </>
  )
}

export default Confirmation
