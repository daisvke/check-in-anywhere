import { useSelector } from 'react-redux'
import ChooseLanguage from '../components/Language'
import GenerateInputField from '../components/InputField'
import React from 'react'
import Confirmation from '../components/Confirmation'
import styled from 'styled-components'
import globals from '../utils/globals'

export function getFormElements() {
  return [
    { label: 'firstname', type: 'firstname' }, // 0
    { label: 'surname', type: 'surname' }, // 1
    {
      label:
        'date of arrival at the establishment and intended date of departure',
      type: 'arrivalAndDepartureDates',
    }, // 2
    { label: 'date of birth', type: 'birthDate' }, // 3
    { label: 'place of birth', type: 'birthPlace' }, // 4
    { label: 'nationality', type: 'nationality' }, // 5
    { label: 'permanent address', type: 'address' }, // 6
    { label: 'zip code', type: 'addressZipCode' }, // 7
    { label: 'city', type: 'addressCity' }, // 8
    { label: 'country', type: 'addressCountry' }, // 9
    { label: 'mobile number', type: 'mobile' }, // 10
    { label: 'e-mail address', type: 'email' }, // 11
    { label: 'credit card number', type: 'cbNumber' }, // 12
    { label: 'expiration date', type: 'cbExpDate' }, // 13
    { label: 'security code', type: 'cbSecurityCode' }, // 14
    { label: 'signature', type: 'sign' }, // 15
  ]
}

const CheckinForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  padding-bottom: ${globals.mainBlocPaddingBottom};
`

const IntroText = styled.p`
  text-align: center;
`

function getSelectedQuestions(start, end) {
  const questions = []
  const formElements = getFormElements()

  for (var i = start; i < end; ++i) {
    questions.push(
      <GenerateInputField
        key={`${formElements[i]}-${i}`}
        label={formElements[i].label}
        type={formElements[i].type}
      />
    )
  }

  return <CheckinForm>{questions}</CheckinForm>
}

function CheckIn() {
  const currentPage = useSelector((state) => state.currentPage)

  if (currentPage === 0) return <ChooseLanguage />
  if (currentPage === 1)
    return (
      <div>
        <IntroText>
          Welcome to your check-in page!
          <br />
          By doing your check-in from this website you will gain a huge amount
          of time during the physical check-in!
          <br />
          Please fill all the input areas to complete the check-in.
        </IntroText>
        {getSelectedQuestions(0, 2)}
      </div>
    )
  if (currentPage === 2) return getSelectedQuestions(2, 3)
  if (currentPage === 3) return getSelectedQuestions(3, 6)
  if (currentPage === 4) return getSelectedQuestions(6, 10)
  if (currentPage === 5) return getSelectedQuestions(10, 12)
  if (currentPage === 6) return getSelectedQuestions(12, 16)
  if (currentPage === 7) return <Confirmation />
}

export default CheckIn
