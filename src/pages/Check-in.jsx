import { useSelector } from 'react-redux'
import ChooseLanguage from '../components/Language'
import GenerateInputField from '../components/InputField'

function getFormElements() {
    return [
        {label: "room number", type: "roomNumber"},             // 0
        {label: "surname", type: "surname"},                    // 1
        {label: "firstname", type: "firstname"},                // 2
        {label: "date of arrival at the establishment and intended date of departure",
            type: "arrivalAndDepartureDates"},        // 3
        {label: "date of birth", type: "birthDate"},            // 5
        {label: "place of birth", type: "birthPlace"},          // 6
        {label: "nationality", type: "nationality"},            // 7
        {label: "permanent address", type: "address"},          // 8
        {label: "mobile number", type: "mobile"},               // 9
        {label: "e-mail address", type: "email"},               // 10
        {label: "mobile number", type: "mobileNumber"},         // 11
        {label: "date", type: "date"},                          // 12
        {label: "signature", type: "sign"},                     // 13
        {label: "credit card number", type: "cbNumber"},        // 14
        {label: "expiration date", type: "cbExpDate"}           // 15
        ]
}
//CHILDREN
function CheckIn() {
    const currentPage = useSelector((state) => state.currentPage)
    const formElements = getFormElements()

    if (currentPage === 0) {
        return (<ChooseLanguage />)
    }
    if (currentPage === 1) {
        var questions = []
        for (var i=0; i < 5; ++i) {
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
    if (currentPage === 2) {
        return (
            <form>
                {GenerateInputField("permanent address")}
                {GenerateInputField("zip code")}
                {GenerateInputField("city")}
                {GenerateInputField("country")}
            </form>
        )
    }
    if (currentPage === 3) {
        return (
            <form>
                {GenerateInputField("date of birth")}
                {GenerateInputField("place of birth")}
                {GenerateInputField("nationality")}
                {GenerateInputField("passport no.")}
            </form>
        )
    }
    if (currentPage === 4) {
        return (
            <form>
                {GenerateInputField("email")}
                {GenerateInputField("mobile phone")}
            </form>
        )
    }
    if (currentPage === 5) {
        return (
            <form>
                {GenerateInputField("credit card number")}
                {GenerateInputField("expiration date")}
                {GenerateInputField("security code")}
            </form>
        )
    }
}

export default CheckIn