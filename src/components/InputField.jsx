import { useSelector } from 'react-redux'
import { useDispatch }  from 'react-redux'
import Calendar from './Calendar'
import Signature from './Signature'

function GenerateInputField({label, type}) {
    const dispatch = useDispatch()
    const currentValue = useSelector(state => state[type])
    
    if (type === "sign") {
        return (
            <Signature />
        )
    }
    if (type === "arrivalAndDepartureDates") {
        return <Calendar />
    }
    return (
        <label>
            { label }
            <input type="text" name={label}
            value={currentValue}
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