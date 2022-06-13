import { useSelector } from "react-redux"
import styled from "styled-components"
import { getFormElements } from "../pages/Check-in"
import LegalCB from "./Legal/CB"
import LegalDamages from "./Legal/Damages"
import axios from "axios"

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

const FieldDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
`

function Confirmation() {
    const language = useSelector(state => state.language)
    const timestamp =  new Date().toLocaleString();
    const firstname = useSelector(state => state.questions.firstname)
    const surname = useSelector(state => state.questions.surname)

    // These variables have to be converted from objects (dued to DatePicker) to strings
    var arrivalDate = useSelector(state => state.questions.arrivalDate)
    arrivalDate = String(arrivalDate)
    var departureDate = useSelector(state => state.questions.departureDate)
    departureDate = String(departureDate)

    const birthDate = useSelector(state => state.questions.birthDate)
    const birthPlace = useSelector(state => state.questions.birthPlace)
    const nationality = useSelector(state => state.questions.nationality)
    const address = useSelector(state => state.questions.address)
    const addressZipCode = useSelector(state => state.questions.addressZipCode)
    const addressCity = useSelector(state => state.questions.addressCity)
    const addressCountry = useSelector(state => state.questions.addressCountry)
    const mobile = useSelector(state => state.questions.mobile)
    const email = useSelector(state => state.questions.email)
    const sign = useSelector(state => state.questions.sign)
    const cbNumber = useSelector(state => state.questions.cbNumber)
    const cbExpDate = useSelector(state => state.questions.cbExpDate)
    const cbSecurityCode = useSelector(state => state.questions.cbSecurityCode)

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('http://127.0.0.1:8888/api/index.php', {
            data: {
                language: language,
                timestamp: timestamp,
                firstname: firstname,
                surname: surname,
                arrivalDate: arrivalDate,
                departureDate: departureDate,
                birthDate: birthDate,
                birthPlace: birthPlace,
                nationality: nationality,
                address: address,
                addressZipCode: addressZipCode,
                addressCity: addressCity,
                addressCountry: addressCountry,
                mobile: mobile,
                email: email,
                sign: sign,
                cbNumber: cbNumber,
                cbExpDate: cbExpDate,
                cbSecurityCode: cbSecurityCode
            }
        })
    }

    const data = []
    data[0] = useSelector(state => state.questions.firstname)
    data[1] = useSelector(state => state.questions.surname)
    data[2] = useSelector(state => state.questions.arrivalDate)
    data[3] = useSelector(state => state.questions.departureDate)
    data[4] = useSelector(state => state.questions.birthDate)
    data[5] = useSelector(state => state.questions.birthPlace)
    data[6] = useSelector(state => state.questions.nationality)
    data[7] = useSelector(state => state.questions.address)
    data[8] = useSelector(state => state.questions.addressZipCode)
    data[9] = useSelector(state => state.questions.addressCity)
    data[10] = useSelector(state => state.questions.addressCountry)
    data[11] = useSelector(state => state.questions.mobile)
    data[12] = useSelector(state => state.questions.email)

    const labels = getFormElements()

    const signURL = useSelector(state => state.questions.sign)
    
    return (
        <form onSubmit={handleSubmit}>
        <ConfirmSheet>
            <ConfirmList>
                {data.map((element, index) => (
                <FieldDiv>
                    <label key={`${index}-${element}`}>
                    { (index === 0 || index === 1) && labels[index].label }
                    { (index === 2 && "arrival date") || (index === 3 && "departure date") }
                    { index >= 4 && labels[index - 1].label }:&nbsp;
                    </label>
                    <li key={`${element}-${index}`}>
                        { element }
                    </li>
                </FieldDiv>
                ))
                }
                <div>
                    <LegalCB />
                    { new Date().toLocaleDateString() }
                    <img src={signURL} alt="" />
                </div>
                <div>
                    <LegalDamages />
                    <img src={signURL} alt="" />
                </div>
            </ConfirmList>

            <button type="submit">SEND</button>
        </ConfirmSheet>
        </form>
    )
}

export default Confirmation