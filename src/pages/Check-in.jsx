import { store } from '../store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ChooseLanguage from '../components/Language';

/*
function assignElement(element, value) {
    const dispatch = useDispatch()
    dispatch()
}*/

function generateInputField(element) {
    return (
        <label>
            { element }
            <input type="text" name={element} onChange={(e) => assignElement(element, e.target.value)} />
        </label>
    )
}

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
    const state = store.getState()
    const currentPage = useSelector((state) => state.currentPage)
    if (currentPage === 0) {
        return (<ChooseLanguage />)
    }
    if (currentPage === 1) {
        return (
            <form>
                {generateInputField("room number")}
                {generateInputField("check-in date")}
                {generateInputField("check-out date")}
                {generateInputField("firstname")}
                {generateInputField("surname")}
            </form>
        )
    }
    if (currentPage === 2) {
        return (
            <form>
                {generateInputField("permanent address")}
                {generateInputField("zip code")}
                {generateInputField("city")}
                {generateInputField("country")}
            </form>
        )
    }
    if (currentPage === 3) {
        return (
            <form>
                {generateInputField("date of birth")}
                {generateInputField("place of birth")}
                {generateInputField("nationality")}
                {generateInputField("passport no.")}
            </form>
        )
    }
    if (currentPage === 4) {
        return (
            <form>
                {generateInputField("email")}
                {generateInputField("mobile phone")}
            </form>
        )
    }
    if (currentPage === 5) {
        return (
            <form>
                {generateInputField("credit card number")}
                {generateInputField("expiration date")}
                {generateInputField("security code")}
            </form>
        )
    }


    /*
    if (currentPage === 0)
    {
        return (
            <div>
                <form>
                    <label>
                        surname:
                        <input type="text" name="name" />
                    </label>
                </form>
            </div>
        )
    }
    if (currentPage === 1)
    {
        return (
            <div>
                <form>
                    <label>
                        firstname:
                        <input type="text" name="surname" />
                    </label>
                </form>
            </div>
        )
    }*/
}

export default CheckIn