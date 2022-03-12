import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
import React from 'react'
import { useDispatch }  from 'react-redux'
import { useSelector } from 'react-redux'

function Calendar() {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = React.useState()
    const [endDate, setEndDate] = React.useState()
    const arrivalDate = useSelector(state => state.questions.arrivalDate)
    const departureDate = useSelector(state => state.questions.departureDate)
    const [focusedInput, setFocusedInput] = React.useState()

    return (
        <DateRangePicker
            startDatePlaceholderText={arrivalDate || "Arrival Date"}
            endDatePlaceholderText={departureDate || "Departure Date"}
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

export default Calendar