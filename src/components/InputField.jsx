import { useSelector } from 'react-redux'
import { useDispatch }  from 'react-redux'
import Signature from './Signature'
import styled from 'styled-components'
import CalendarDatePicker from './Calendar'
//import propTypes from 'prop-types'

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid black;
    width: 20vw;
    text-align: center;
    &:focus {
        outline: 0;   
    }
`

const InputContainer = styled.div`
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
                <label>
                    { label }
                </label>
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

    /*
    return (
            <InputContainer>
                <label>
                    { label }
                </label>
                {(type !== "roomNumber") ?
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
                : <select
                onChange={(e) => dispatch(
                    {
                        type: "updateAnswer",
                        payload: {
                            question: type,
                            value: e.target.value
                        }
                    }
                )}
                >{rooms.map((room, index) => (
                    <option key={`${room}-${index}`}>{ room }</option>    
                ))}</select>}
            </InputContainer>
    )*/
}
/*
GenerateInputField.protoTypes = {
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired
}
*/

export default GenerateInputField