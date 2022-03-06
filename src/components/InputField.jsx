import { useDispatch } from 'react-redux'

function GenerateInputField(props) {
    const label = props.label
    const type = props.type
    const dispatch = useDispatch()
    return (
        <label>
            { label }
            <input type="text" name={label} 
            onChange={(e) => dispatch(
                {
                    type: "updateAnswer",
                    payload: {
                        question: type,
                        value: e.target.value
                    }
                }
            )} />
        </label>
    )
}

export default GenerateInputField