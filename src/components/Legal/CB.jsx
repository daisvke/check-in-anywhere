import { useSelector } from "react-redux"

function LegalCB() {
    const cbNumber = useSelector(state => state.questions.cbNumber)
    const cbExpDate = useSelector(state => state.questions.cbExpDate)

    return (
    <div>
        <p>
            Hereby authorise the hotel Louvre Sainte Anne located to the address above,
            to charge my credit card account for the charges incurred at the hotel.
        </p>
        { cbNumber }
        { cbExpDate }
    </div>)
}

export default LegalCB