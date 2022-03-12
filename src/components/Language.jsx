import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const LanguageList = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 60vh;
list-style: none;
font-size: 1.3em;
`

const Language = styled.li`
&:hover {
    cursor: pointer;
    opacity: .7;
}
`

function ChooseLanguage() {
    const dispatch = useDispatch();

    return (
        <LanguageList>
            <Language onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "updateAnswer", payload: {question: "language", value: "eng"} })
            }}>english</Language>
            <Language onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "updateAnswer", payload: {question: "language", value: "fr"} })
            }}>french</Language>
        </LanguageList>
    )
}

export default ChooseLanguage