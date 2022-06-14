import { useSelector } from "react-redux"

function LegalCB() {
    const cbNumber = useSelector(state => state.questions.cbNumber)
    const cbExpDate = useSelector(state => state.questions.cbExpDate)
    const cbSecurityCode = useSelector(state => state.questions.cbSecurityCode)
    const firstname = useSelector(state => state.questions.firstname)
    const surname = useSelector(state => state.questions.surname)

    return (
    <div>
        <p>
            credit card number: { cbNumber }<br />
            expiration date: { cbExpDate }<br />
            security code: { cbSecurityCode }<br />
            <br />
            I, { firstname /*address above*/ } { surname }, hereby authorize Hotel Louvre Sainte Anne located at the address above,
            to charge my credit card account for the charges incurred at the hotel.
        </p>
    </div>)
}

export default LegalCB