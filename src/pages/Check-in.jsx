import { useSelector } from 'react-redux'
import ChooseLanguage from '../components/Language'
import GenerateInputField from '../components/InputField'

function getFormElementAccordingToCurrentPage() {
    const formElements = [
        "surname",

        "firstname",
        "date of birth",
        "place of birth",
        "nationality",
        "permanent address",
        "mobile number",
        "e-mail address",
        "date of arrival at the establishment and intended date of departure",
        "Date",
        "Signature",
        "credit card number",
        "expiration date",
        ""]
}
//CHILDREN
function CheckIn() {
    <p>This is the Questionnaire</p>
   // const state = store.getState()
    const currentPage = useSelector((state) => state.currentPage)
    if (currentPage === 0) {
        return (<ChooseLanguage />)
    }
    if (currentPage === 1) {
        return (
            <form>
                <GenerateInputField label="room number" type="roomNumber" />
   
            </form>
        )
    }}
    /*
    if (currentPage === 1) {
        return (
            <form>
                <GenerateInputField label="room number" type="roomNumber" />
                {GenerateInputField("check-in date")}
                {GenerateInputField("check-out date")}
                {GenerateInputField("firstname")}
                {GenerateInputField("surname")}
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
}*/

export default CheckIn