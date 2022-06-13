import { useSelector } from 'react-redux'
import { useDispatch }  from 'react-redux'
import Signature from './Signature'
import styled from 'styled-components'
import CalendarDatePicker from './Calendar'

const   Input = styled.input`
    border: 0;
    border-bottom: 1px solid black;
    width: 20vw;
    text-transform: uppercase;
    text-align: center;
    &:focus {
        outline: 0;   
    }
`

const   InputLabel = styled.label`
    font-size: .9em;
    text-transform: uppercase;
`

const   InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

function GenerateInputField({label, type}) {
    const dispatch = useDispatch()
    const currentValue = useSelector(state => state.questions[type])

 /*   const rooms = [
        "Please select",
        1, 2,
        11, 12, 14, 15,
        21, 22, 23, 24,
        31, 32, 33, 34,
        41, 42, 43, 44,
        51, 52
    ]
*/
    if (type === "sign")
        return <Signature />
    if (type === "arrivalAndDepartureDates")
        return <CalendarDatePicker />
        return (
            <InputContainer>
                <InputLabel>
                    { label }
                </InputLabel>
                <Input type="text" name={label}
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
            </InputContainer>
        )
}

export default GenerateInputField