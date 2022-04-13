import { useSelector } from "react-redux"
import styled from "styled-components"
import { getFormElements } from "../pages/Check-in"
import LegalCB from "./Legal/CB"
import LegalDamages from "./Legal/Damages"

import { useState, useEffect } from "react"

function Confirmation() {
/*
useEffect(() => {
    fetch('/test', {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: "HEY"
    })
    .then(res => res.json())
    .then(data => console.log(data))
})*/

    const data = []
//data[0] = useSelector(state => state.questions.roomNumber)
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

    const signURL = useSelector(state => state.questions.sign)

    return (
        <form action="/test" method="post">
        <ConfirmSheet>
            <ConfirmList>
                {data.map((element, index) => (
                <FieldDiv>
                    <label>
                    {
                        (index < 5 && index !== 3 && index !== 4) ?
                            labels[index].label :
                                (index === 3 ? "arrival date" : (index < 5 && "departure date"))
                    }
                    {
                        index >= 5 && labels[index - 1].label
                    }:&nbsp;
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
                    <img src={signURL} alt="signature" />
                </div>
                <div>
                    <LegalDamages />
                    <img src={signURL} alt="signature" />
                </div>
            </ConfirmList>

            <button type="submit"/*onClick={saveToDatabase()}*/>SEND !</button>
        </ConfirmSheet>
        </form>
    )
}

export default Confirmation