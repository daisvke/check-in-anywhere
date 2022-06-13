import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import colors from '../utils/colors'

const LanguageList = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 60vh;
list-style: none;
font-size: .95em;
`

const Language = styled.li`
margin-bottom: 1em;
text-transform: uppercase;
background-color: ${colors.pink};
padding: .3em;

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
                dispatch({ type: "setLanguage", payload: {value: "eng"} })
            }}>english</Language>
            <Language onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "setLanguage", payload: {value: "fr"} })
            }}>french</Language>
        </LanguageList>
    )
}

export default ChooseLanguage