import { useDispatch } from 'react-redux'
import styled from 'styled-components'

function ChooseLanguage() {
    const dispatch = useDispatch();

    const SelectLanguage = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 60vh;
        width: 80vw;
        list-style: none;
        font-size: 2em;
    `
    return (
        <SelectLanguage>
            <li onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "updateAnswer", payload: {question: "language", value: "eng"} })
            }}>english</li>
            <li onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "updateAnswer", payload: {question: "language", value: "fr"} })
            }}>french</li>
        </SelectLanguage>
    )
}

export default ChooseLanguage