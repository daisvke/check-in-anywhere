import { useDispatch } from 'react-redux'

function ChooseLanguage() {
    const dispatch = useDispatch();

    return (
        <ul>
            <li onClick={() => {dispatch({type: "nextPage"})}}>English</li>
            <li onClick={() => {dispatch({type: "nextPage"})}} >French</li>
        </ul>
    )
}

export default ChooseLanguage