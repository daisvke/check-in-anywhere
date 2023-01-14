import { useSelector } from "react-redux"
import styled from "styled-components"

const Text = styled.p`
    font-family: Tahoma, sans-serif;
    text-align: left;
`
const NameSpan = styled.span`
    text-transform: capitalize;
`

function LegalCB() {
    const cbNumber = useSelector(state => state.questions.cbNumber)
    const cbExpDate = useSelector(state => state.questions.cbExpDate)
    const cbSecurityCode = useSelector(state => state.questions.cbSecurityCode)
    const firstname = useSelector(state => state.questions.firstname)
    const surname = useSelector(state => state.questions.surname)

    return (
    <div>
        <Text>
            credit card number: { cbNumber }<br />
            expiration date: { cbExpDate }<br />
            security code: { cbSecurityCode }<br />
            <br />
            I, <NameSpan>{ firstname } { surname }</NameSpan>, hereby authorize Hotel Louvre Sainte Anne located at the address above,
            to charge my credit card account for the charges incurred at the hotel.
        </Text>
    </div>)
}

export default LegalCB