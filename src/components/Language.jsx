import { useDispatch } from 'react-redux'

function ChooseLanguage() {
    const dispatch = useDispatch();

    return (
        <ul>
            <li onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "updateAnswer", payload: {question: "language", value: "eng"} })
            }}>english</li>
            <li onClick={() => {
                dispatch({ type: "nextPage" });
                dispatch({ type: "updateAnswer", payload: {question: "language", value: "fr"} })
            }}>french</li>
        </ul>
    )
}

export default ChooseLanguage