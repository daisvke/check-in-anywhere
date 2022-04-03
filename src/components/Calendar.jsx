import React from 'react'
import { useDispatch }  from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function CalendarDatePicker() {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    return (
        <>
        <DatePicker
        dateFormat="dd/MM/yyyy"
        renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
        </div>
      )}
      selected={startDate}
        onChange={(startDate) => {
            setStartDate(startDate)
            dispatch(
                {
                    type: "updateAnswer",
                    payload: {
                        question: "arrivalDate",
                        value: [startDate.toLocaleDateString()]
                    }
                }
            )
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      monthsShown={2}
    />
    <DatePicker
    dateFormat="dd/MM/yyyy"
    renderCustomHeader={({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
  }) => (
    <div>
      <button
        aria-label="Previous Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--previous"
        }
        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
        onClick={decreaseMonth}
      >
        <span
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
          }
        >
          {"<"}
        </span>
      </button>
      <span className="react-datepicker__current-month">
        {monthDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </span>
      <button
        aria-label="Next Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--next"
        }
        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
        onClick={increaseMonth}
      >
        <span
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
          }
        >
          {">"}
        </span>
      </button>
    </div>
  )}
  selected={endDate}
    onChange={(endDate) => {
        setEndDate(endDate)
        dispatch(
            {
                type: "updateAnswer",
                payload: {
                    question: "departureDate",
                    value: [endDate.toLocaleDateString()]
                }
            }
        )
    }}
    selectsEnd
    startDate={startDate}
    endDate={endDate}
    minDate={startDate}
  monthsShown={2}
/>
</>
    )
}

export default CalendarDatePicker