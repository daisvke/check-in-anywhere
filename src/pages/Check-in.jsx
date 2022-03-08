import { useSelector } from 'react-redux'
import ChooseLanguage from '../components/Language'
import GenerateInputField from '../components/InputField'

export function getFormElements() {
    return [
        {label: "room number", type: "roomNumber"},             // 0
        {label: "surname", type: "surname"},                    // 1
        {label: "firstname", type: "firstname"},                // 2
        {label: "date of arrival at the establishment and intended date of departure",
            type: "arrivalAndDepartureDates"},                  // 3
        {label: "date of birth", type: "birthDate"},            // 4
        {label: "place of birth", type: "birthPlace"},          // 5
        {label: "nationality", type: "nationality"},            // 6
        {label: "permanent address", type: "address"},          // 7
        {label: "mobile number", type: "mobile"},               // 8
        {label: "e-mail address", type: "email"},               // 9
        {label: "date", type: "date"},                          // 10
        {label: "signature", type: "sign"},                     // 11
        {label: "credit card number", type: "cbNumber"},        // 12
        {label: "expiration date", type: "cbExpDate"}           // 13
        ]
}
//CHILDREN

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
        <form>
            { questions }
        </form>
    )
}

function CheckIn() {
    const currentPage = useSelector((state) => state.currentPage)

    if (currentPage === 0)
        return <ChooseLanguage />
    if (currentPage === 1)
        return getSelectedQuestions(0, 4)
    if (currentPage === 2)
        return getSelectedQuestions(4, 8)
    if (currentPage === 3)
        return getSelectedQuestions(8, 10)
    if (currentPage === 4)
        return getSelectedQuestions(10, 12)
    if (currentPage === 5)
        return getSelectedQuestions(12, 14)
}

export default CheckIn