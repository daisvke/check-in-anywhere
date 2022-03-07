import { useDispatch } from 'react-redux'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import React from "react"

import SignatureCanvas from 'react-signature-canvas'

function GenerateInputField(props) {
    const label = props.label
    const type = props.type
    const dispatch = useDispatch()

    const [startDate, setStartDate] = React.useState()
    const [endDate, setEndDate] = React.useState()
    const [focusedInput, setFocusedInput] = React.useState()

    
    if (type === "sign") {
        return (
            <div>
                <SignatureCanvas
                    penColor='black'
                    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
                />
                <button>clear</button>
            </div>
        )
    }
    if (type === "arrivalAndDepartureDates") {
        return (
            <DateRangePicker
              startDate={startDate}
              startDateId="start-date"
              endDate={endDate}
              endDateId="end-date"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate)
                setEndDate(endDate)
                dispatch(
                    {
                        type: "updateAnswer",
                        payload: {
                            question: "arrivalDate",
                            value: [startDate.format('YYYY-MM-DD')]
                        }
                    }
                )
                dispatch(
                    {
                        type: "updateAnswer",
                        payload: {
                            question: "departureDate",
                            value: [endDate.format('YYYY-MM-DD')]
                        }
                    }
                )
              }}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            />)
    }
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