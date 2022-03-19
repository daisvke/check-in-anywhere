import { useSelector } from "react-redux"
import styled from "styled-components"
import LegalCB from "./Legal/CB"
import LegalDamages from "./Legal/Damages"

function Confirmation() {
    const data = []
    data[0] = useSelector(state => state.questions.firstname)
    data[1] = useSelector(state => state.questions.surname)
    data[2] = useSelector(state => state.questions.roomNumber)
    data[3] = useSelector(state => state.questions.arrivalDate)
    data[4] = useSelector(state => state.questions.departureDate)
    data[5] = useSelector(state => state.questions.birthDate)
    data[6] = useSelector(state => state.questions.birthPlace)
    data[7] = useSelector(state => state.questions.nationality)
    data[8] = useSelector(state => state.questions.address)
    data[9] = useSelector(state => state.questions.mobile)

    const ConfirmSheet = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `

    const ConfirmList = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: left;
        list-style: none;
        padding-left: 10vw;
        padding-right: 10vw;
    `
    const signURL = useSelector(state => state.questions.sign)

    return (
        <ConfirmSheet>
            <ConfirmList>
                {data.map((element, index) => (
                <li key={`${element}-${index}`}>
                    { element }
                </li>
                ))
                }
                <div>
                    <LegalCB />
                    <img src={signURL} alt="signature" />
                </div>
                <div>
                    <LegalDamages />
                    <img src={signURL} alt="signature" />
                </div>
            </ConfirmList>

            <button>confirm</button>
        </ConfirmSheet>
    )
}

export default Confirmation