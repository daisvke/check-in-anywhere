import { useSelector } from 'react-redux'
import ChooseLanguage from '../components/Language'
import GenerateInputField from '../components/InputField'
import React from 'react'
import Confirmation from '../components/Confirmation'
import styled from 'styled-components'

export function getFormElements() {
    return [
        {label: "room number", type: "roomNumber"},             // 0
        {label: "firstname", type: "firstname"},                // 1
        {label: "surname", type: "surname"},                    // 2
        {label: "date of arrival at the establishment and intended date of departure",
            type: "arrivalAndDepartureDates"},                  // 3
        {label: "date of birth", type: "birthDate"},            // 4
        {label: "place of birth", type: "birthPlace"},          // 5
        {label: "nationality", type: "nationality"},            // 6
        {label: "permanent address", type: "address"},          // 7
        {label: "zip code", type: "addressZipCode"},            // 8
        {label: "city", type: "addressCity"},                   // 9
        {label: "country", type: "addressCountry"},             // 10
        {label: "mobile number", type: "mobile"},               // 11
        {label: "e-mail address", type: "email"},               // 12
        {label: "signature", type: "sign"},                     // 13
        {label: "credit card number", type: "cbNumber"},        // 14
        {label: "expiration date", type: "cbExpDate"},          // 15
        {label: "security code", type: "cbSecurityCode"}        // 16
        ]
}
//CHILDREN

const CheckinForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 60vh;
width: 80vw;
`

function getSelectedQuestions(start, end) {
    const questions = []
    const formElements = getFormElements()

    for (var i=start; i < end; ++i) {
        questions.push(<GenerateInputField
            key={`${formElements[i]}-${i}`}
            label={formElements[i].label}
            type={formElements[i].type}
    />)}
    
    return (
        <CheckinForm>
            { questions }
        </CheckinForm>
    )
}

function CheckIn() {

    const currentPage = useSelector(state => state.currentPage)
                   
    if (currentPage === 0)
        return <ChooseLanguage />
    if (currentPage === 1)
        return getSelectedQuestions(0, 1)
    if (currentPage === 2)
        return getSelectedQuestions(1, 3)
    if (currentPage === 3)
        return getSelectedQuestions(3, 4)
    if (currentPage === 4)
        return getSelectedQuestions(4, 10)
    if (currentPage === 5)
        return getSelectedQuestions(11, 13)
    if (currentPage === 6)
        return getSelectedQuestions(13, 14)
    if (currentPage === 7)
        return getSelectedQuestions(14, 17)
    if (currentPage === 8)
        return <Confirmation />
}

export default CheckIn