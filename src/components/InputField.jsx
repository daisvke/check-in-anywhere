import { useSelector } from 'react-redux'
import { useDispatch }  from 'react-redux'
import Calendar from './Calendar'
import Signature from './Signature'
import styled from 'styled-components'
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

    if (type === "sign")
        return <Signature />
    if (type === "arrivalAndDepartureDates")
        return <Calendar />
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
}
/*
GenerateInputField.protoTypes = {
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired
}
*/

export default GenerateInputField